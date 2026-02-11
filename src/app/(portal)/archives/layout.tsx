import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Archives",
    description: "Access your digital library. Review past cycles, completed projects, and stored knowledge items.",
};

export default function ArchivesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
