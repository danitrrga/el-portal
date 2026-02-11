import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Dashboard",
    description: "Your central command center. View active cycles, track daily habits, and monitor progress metrics in real-time.",
};

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
