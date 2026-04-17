import type { Metadata } from "next";
import { Inter, Outfit, Plus_Jakarta_Sans, Work_Sans } from "next/font/google";
import "./globals.css";
import NavBar from "./components/navbar";
import Footer from "./components/globalFooter";
import Script from "next/script";
import Image from "next/image";

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

const plusJakarta = Plus_Jakarta_Sans({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-plus-jakarta",
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
			className={`${inter.variable} ${outfit.variable} ${plusJakarta.variable} ${workSans.variable}`}
		>
			<body className="antialiased">
				<div className="relative flex flex-col w-full">
					{/* Background Image */}
					<div className="back">
						<Image
							src="/imgs/RedwoodBackground.jpg"
							alt="Redwood Background"
							fill
							priority
							sizes="100vw"
							className="object-cover object-center"
							quality={90}
						/>
					</div>
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
