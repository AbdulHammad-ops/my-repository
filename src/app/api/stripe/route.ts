import { headers } from "next/headers";
import { NextResponse } from "next/server";
import Stripe from "stripe";
import { clerkClient } from "@clerk/nextjs/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: Request) {
  try {
    const body = await req.text();
    const sig = req.headers.get("stripe-signature");
    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

    if (!webhookSecret) {
      throw new Error("STRIPE_WEBHOOK_SECRET is missing");
    }

    if (!sig) {
      return NextResponse.json(
        { message: "stripe-signature not present" },
        { status: 400 }
      );
    }

    const event = stripe.webhooks.constructEvent(body, sig, webhookSecret);

    const { id, type, created, data } = event;
    let result;
    switch (type) {
      case "customer.subscription.created":
      case "customer.subscription.updated":
        const subscription = event.data.object as Stripe.Subscription;
        const customer = subscription.customer as string;

        const customerDetails = await stripe.customers.retrieve(customer);
        if (customerDetails.deleted) {
          return;
        }
        const customerEmail = customerDetails.email;
        if (!customerEmail) {
          return;
        }

        const user = await (
          await clerkClient()
        ).users.getUserList({
          emailAddress: [customerEmail],
        });

        if (user.totalCount === 0) {
          return;
        }

        const userId = user.data[0].id;

        result = await (
          await clerkClient()
        ).users.updateUserMetadata(userId, {
          privateMetadata: {
            stripeCustomerId: customer,
            subscriptionStatus: subscription.status,
            isActive:
              subscription.status === "active" ||
              subscription.status === "trialing" ||
              subscription.status === "incomplete" 
          },
          publicMetadata: {
            stripeCustomerId: customer,
            subscriptionStatus: subscription.status,
            isActive:
              subscription.status === "active" ||
              subscription.status === "trialing"  ||
              subscription.status === "incomplete" 
          },
        });
        break;

      case "customer.subscription.deleted":
        const subscription1 = event.data.object as Stripe.Subscription;
        const customer1 = subscription1.customer as string;

        const user1 = await (
          await clerkClient()
        ).users.getUserList({
          emailAddress: [customer1],
        });

        if (user1.totalCount === 0) {
          return;
        }

        const userId1 = user1.data[0].id;

        result = await (
          await clerkClient()
        ).users.updateUserMetadata(userId1, {
          privateMetadata: {
            stripeCustomerId: customer1,
            subscriptionStatus: subscription1.status,
            isActive: false,
          },
          publicMetadata: {
            stripeCustomerId: customer1,
            subscriptionStatus: subscription1.status,
            isActive: false,
          },
        });
        break;
    }
    return NextResponse.json(result);
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
