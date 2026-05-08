import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Founders Grove — A walk through the grove",
	description:
		"An immersive landing experience for Founders Grove — scroll through a redwood corridor to learn who we are, what we build, and how to reach us.",
};

export default function PreviewLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <>{children}</>;
}
