import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            fontFamily: {
                sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
                display: ["var(--font-display)", "var(--font-sans)", "sans-serif"],
                mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
            },
            colors: {
                background: "var(--bg-body)",
                card: "var(--bg-card)",
                graphite: {
                    50: "#fafafa",
                    100: "#f4f4f5",
                    200: "#e4e4e7",
                    300: "#d4d4d8",
                    400: "#a1a1aa",
                    500: "#71717a",
                    600: "#52525b",
                    700: "#3f3f46",
                    800: "#27272a",
                    900: "#18181b",
                    950: "#09090b",
                },
                pacific: {
                    50: "#f0f9ff",
                    100: "#e0f2fe",
                    200: "#bae6fd",
                    300: "#7dd3fc",
                    400: "#38bdf8",
                    500: "#0ea5e9",
                    600: "#0284c7",
                    700: "#0369a1",
                    800: "#075985",
                    900: "#0c4a6e",
                    950: "#082f49",
                },
                bali: {
                    50: "#ecfdf5",
                    100: "#d1fae5",
                    200: "#a7f3d0",
                    300: "#6ee7b7",
                    400: "#34d399",
                    500: "#10b981",
                    600: "#059669",
                    700: "#047857",
                    800: "#065f46",
                    900: "#064e3b",
                },
            },
        },
    },
    plugins: [],
};
export default config;
