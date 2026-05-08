import type { Metadata } from "next";
import { Inter, Outfit, Work_Sans } from "next/font/google";
import "./globals.css";
import NavBar from "./components/navbar";
import Footer from "./components/globalFooter";
import Script from "next/script";

const inter = Inter({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-inter",
});

const outfit = Outfit({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-outfit",
});

const workSans = Work_Sans({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-work-sans",
});

export const metadata: Metadata = {
	title: "Founders Grove",
	description: "Founders Grove is a dev agency building startups, web applications, and software that lasts. 20+ years of experience across enterprise and startup environments.",
	appleWebApp: {
		capable: true,
		statusBarStyle: "black-translucent",
		title: "Founders Grove",
	},
	openGraph: {
		title: "Founders Grove",
		description: "Founders Grove is a dev agency building startups, web applications, and software that lasts.",
		url: "https://foundersgrove.dev",
		siteName: "Founders Grove",
		images: [{ url: "https://foundersgrove.dev/imgs/RedwoodBackground.jpg", width: 1200, height: 630, alt: "Founders Grove" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Founders Grove",
		description: "Founders Grove is a dev agency building startups, web applications, and software that lasts.",
		images: ["https://foundersgrove.dev/imgs/RedwoodBackground.jpg"],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={`${inter.variable} ${outfit.variable} ${workSans.variable}`}
		>
			<body className="antialiased">
				<div className="relative flex flex-col w-full">
					{/*
					  The redwood photo background was extracted into <SiteBackground />
					  so that individual pages can opt in or out. Pages that want the
					  classic look render it themselves (see app/page.tsx). The /preview
					  route renders a 3D canvas instead.
					*/}
					<NavBar />
					{children}
					<Footer />
				</div>
				<Script
					src="/analytics.js"
					data-website-id="2604fdad-e02c-478d-a665-4aa6bdae2618"
					strategy="lazyOnload"
				/>
			</body>
		</html>
	);
}
