import type { Metadata } from "next";
import { Inter, Outfit, Plus_Jakarta_Sans, Work_Sans } from "next/font/google";
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
	description: "Lets Bring Something to Life",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={`${inter.variable} ${outfit.variable} ${plusJakarta.variable} ${workSans.variable}`}>
			<body className="antialiased">
				<div className="wrapper">
					<NavBar />
					{children}
					<Footer />
				</div>
				<Script 
					src="/analytics.js" 
					data-website-id="2604fdad-e02c-478d-a665-4aa6bdae2618" 
				/>
			</body>
		</html>
	);
}
