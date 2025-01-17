import type { Metadata } from "next";
import { headers } from 'next/headers';

import "./globals.css";
import { ClerkProvider, SignedOut, SignInButton, UserButton, SignedIn, } from "@clerk/nextjs";
import { Footer } from "./components/Footer";
export const metadata: Metadata = {
  title: "D.ai.Y",
  description: "D.ai.Y is a platform for creating AI generated images.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers();
  const pathName = headersList.get("next-url") || "";
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <main className="bg-neutral-200">
            {children}
          </main>
          <Footer />
        </body>
      </html>
    </ClerkProvider>);
}
