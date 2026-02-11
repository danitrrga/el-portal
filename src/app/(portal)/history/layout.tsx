import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "History",
    description: "Review your past performance, analyze trends, and visualize your long-term consistency data.",
};

export default function HistoryLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
