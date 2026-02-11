import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "The Lab",
    description: "Configuration center for your life OS. Manage versions, define habits, and set cycle parameters.",
};

export default function LabLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
