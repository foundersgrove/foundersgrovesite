"use client";
import { useRef } from "react";
import CalendlyEmbed from "./CalendlyEmbed";

export default function Footer() {
	const modalRef = useRef<HTMLDialogElement>(null);
	
	const handleClick = () => {
		if (modalRef.current) {
			modalRef.current?.showModal();
		}
	};

	return (
		<>
			<footer className="relative mt-auto">
				<div className="max-w-4xl mx-auto p-8">
					<div className="mb-8 flex justify-center">
						<div 
							className="p-12 bg-[#739E71] hover:bg-[#557A53] text-white rounded-xl cursor-pointer transition-all duration-150 text-center shadow-[8px_8px_0px_0px_#557A53] hover:shadow-[12px_12px_0px_0px_#3C5A3A] hover:translate-x-[-4px] hover:translate-y-[-4px]" 
							onClick={handleClick}
						>
							<span className="text-[3rem] leading-none font-heading font-black tracking-wide">Tell us about your project</span>
						</div>
					</div>
					<div className="border-t border-neutral-500 pt-6 text-center text-sm">
						&copy; 2021 Founders Grove
					</div>
				</div>
			</footer>

			<dialog 
				id="my_modal_2" 
				className="modal" 
				ref={modalRef}
			>
				<div className="modal-box max-w-3xl w-full p-0 bg-white">
					<CalendlyEmbed url="https://calendly.com/dayne-foundersgrove/30min?hide_event_type_details=1&hide_gdpr_banner=1" />
					<form method="dialog" className="absolute right-4 top-4 z-50">
						<button className="btn btn-sm btn-circle bg-foreground/10 hover:bg-foreground/20 border-none text-foreground">✕</button>
					</form>
				</div>
				<form method="dialog" className="modal-backdrop">
					<button>close</button>
				</form>
			</dialog>
		</>
	);
}
