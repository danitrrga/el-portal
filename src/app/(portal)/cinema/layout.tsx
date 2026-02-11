import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Cinema",
    description: "Visual inspiration and media gallery. Curate and view content that drives your motivation.",
};

export default function CinemaLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
