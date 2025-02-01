import { clerkMiddleware, auth, clerkClient } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export default clerkMiddleware(
  async (auth, req) => {
    const { userId } = await auth();
    if (req.url.includes("/editor")) {
      if (!userId) {
        return NextResponse.redirect(new URL("/sign-in", req.url));
      }
    }

    return NextResponse.next();
  },
  {
    signInUrl: "/sign-in",
    signUpUrl: "/sign-up",
    afterSignInUrl: "/",
    afterSignUpUrl: "/",
  }
);

export const config = {
  matcher: ["/editor", "/editor/(.*)"],
};
