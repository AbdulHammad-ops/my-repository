import type { Metadata } from "next";

import HamburgerMenu from "../components/HamburgerMenu";


export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <HamburgerMenu />
            {children}
        </div>
    );
}
