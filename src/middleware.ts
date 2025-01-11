import { clerkMiddleware, auth, clerkClient } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export default clerkMiddleware(
  async (auth, req) => {
    const { userId } = await auth();
    if (req.url.includes("/editor")) {
      if (!userId) {
        return NextResponse.redirect(new URL("/sign-in", req.url));
      }

      const user = await (await clerkClient()).users.getUser(userId);
      const isActive = user?.privateMetadata?.isActive;

      if (!isActive) {
        return NextResponse.redirect(new URL("/pricing", req.url));
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
