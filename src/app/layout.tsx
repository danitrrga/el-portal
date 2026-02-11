import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-sans",
    display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
    subsets: ["latin"],
    variable: "--font-display",
    display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    variable: "--font-mono",
    display: "swap",
});

export const viewport: Viewport = {
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "#ffffff" },
        { media: "(prefers-color-scheme: dark)", color: "#000000" },
    ],
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
};

export const metadata: Metadata = {
    metadataBase: new URL('http://localhost:3000'), // Replace with actual production URL when available
    title: {
        template: "%s | El Portal",
        default: "El Portal | Intelligent Life Management OS",
    },
    description: "A futuristic, intelligent life management operating system designed for high-performance individuals. Track habits, manage projects, and optimize your life with data-driven insights.",
    keywords: ["productivity", "life os", "dashboard", "habit tracker", "goal setting", "quantified self", "future ui"],
    authors: [{ name: "El Portal Team" }],
    creator: "El Portal",
    publisher: "El Portal",
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://el-portal.app",
        siteName: "El Portal OS",
        title: "El Portal | Intelligent Life Management OS",
        description: "Your digital second brain. A premium, data-driven dashboard for mastering your habits, projects, and learning.",
        images: [
            {
                url: "/og-image.jpg", // Ensure this asset exists or add it later
                width: 1200,
                height: 630,
                alt: "El Portal Dashboard Interface",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "El Portal | Intelligent Life Management OS",
        description: "Optimizing human potential through meaningful data visualization.",
        images: ["/og-image.jpg"],
    },
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon-16x16.png",
        apple: "/apple-touch-icon.png",
    },
    manifest: "/site.webmanifest",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={`${inter.variable} ${plusJakarta.variable} ${jetbrainsMono.variable}`}
            suppressHydrationWarning
        >
            <body
                className={`${inter.className} antialiased bg-background text-foreground`}
            >
                <ThemeProvider>
                    {children}
                    <Analytics />
                </ThemeProvider>
            </body>
        </html>
    );
}
