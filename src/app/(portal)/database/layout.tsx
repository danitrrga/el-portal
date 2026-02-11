import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Database",
    description: "Raw data access and management. View and edit the underlying data structures of your OS.",
};

export default function DatabaseLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
