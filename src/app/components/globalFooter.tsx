"use client";
import { usePathname } from "next/navigation";
import ContactButton from "./ContactButton";

export default function Footer({}) {
	const pathname = usePathname();
	const transparent = pathname === "/";
	const currentYear = new Date().getFullYear();

	return (
		<>
			<footer
				className={`relative mt-auto ${
					transparent ? "" : "bg-black/90"
				} text-background`}
			>
				<div className="max-w-4xl mx-auto p-8">
					
					<div id="contact" className="my-24 flex justify-center">
						<ContactButton size="large" />
					</div>
					<div className="text-center font-bold">
						&copy; {currentYear} Founders Grove, LLC
					</div>
				</div>
			</footer>
		</>
	);
}
