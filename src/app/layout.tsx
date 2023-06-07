import { Metadata } from "next";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import "./globals.css";

export const metadata: Metadata = {
    title: "Heitor Portfolio",
    description: "Home page of my portfolio",
    authors: [
        {
            name: "Heitor Eduardo Avelar Theodoro",
            url: "https://www.linkedin.com/in/heitor-eduardo-avelar-theodoro-canhizares-4835b0216/",
        },
    ],
    keywords: ["next.js", "frontend", "developer", "react", "portfolio"],
    viewport: {
        width: "device-width",
        height: "device-height",
        initialScale: 1,
        viewportFit: "auto",
    },
    applicationName: "My Portfolio",
    manifest: "site.webmanifest",
    icons: {
        apple: "apple-touch-icon.png",
        icon: ["favicon-32x32.png", "favicon-16x16.png"],
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="PT-BR">
            <body className="flex flex-col min-h-screen min-w-full justify-between opacity-0 bg-slate-300">
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
