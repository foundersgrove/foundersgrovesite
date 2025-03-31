"use client";
import HomeCard from "./components/homeCard";
import { useRef } from "react";
import CalendlyEmbed from "./components/CalendlyEmbed";
import { homeCards } from "@/config/homeCards";

export default function Home() {
	const modalRef = useRef<HTMLDialogElement>(null);
	const handleClick = () => {
		if (modalRef.current) {
			modalRef.current?.showModal();
		}
	};
	//surrounding div old classes className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"
	// main old classes className="flex flex-col gap-8 row-start-2 items-center sm:items-start"
	return (
		<div>
			<main>
				<header className="relative flex flex-col">
					{/* <img
						src="/imgs/RedwoodSingle.png"
						alt="Redwood Tree Single"
						className="fore"
					/> */}
				</header>
				<img
					src="/imgs/RedwoodBackground.jpg"
					alt="background image"
					className="back"
				/>
				<div className="flex flex-col gap-96 py-96">
				{homeCards.map((card, index) => (
					<HomeCard
						key={index}
						title={card.title}
						description={card.description}
						btn={card.btn}
						btnLink={card.btnLink}
						onClick={card.title === "Get In Touch" ? handleClick : undefined}
					/>
				))}
				</div>
				<dialog id="my_modal_2" className="modal" ref={modalRef}>
					<div className="modal-box bg-white">
						<CalendlyEmbed url="https://calendly.com/dayne-foundersgrove/30min?hide_event_type_details=1&hide_gdpr_banner=1" />
						{/* <p className="py-6 text-black">
							Press ESC key or click outside to close
						</p> */}
					</div>
					<form method="dialog" className="modal-backdrop">
						<button>close</button>
					</form>
				</dialog>
			</main>
		</div>
	);
}
