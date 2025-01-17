import { Loader2 } from "lucide-react";
import HamburgerMenu from "../components/HamburgerMenu";
import { Suspense } from "react";

function Loading() {
    return (<div className="flex items-center justify-center h-screen">
        <Loader2 className="animate-spin text-white w-10 h-10" />
    </div>)
}

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {


    return (
        <Suspense fallback={<Loading />}>
            <div>
                <HamburgerMenu />
                {children}
            </div>
        </Suspense>
    );
}
