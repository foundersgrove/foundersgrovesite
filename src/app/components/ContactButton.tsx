"use client";
import { useRef } from "react";
import CalendlyEmbed from "./CalendlyEmbed";

export default function ContactButton({ 
	className = "", 
	buttonText = "Tell us about your project",
	size = "large" // "small" or "large"
}) {
	const modalRef = useRef<HTMLDialogElement>(null);

	const handleClick = () => {
		if (modalRef.current) {
			modalRef.current?.showModal();
		}
	};

	// Size variants
	const sizeClasses = {
		small: "p-4 sm:p-6",
		large: "p-8 sm:p-12"
	};

	const textSizeClasses = {
		small: "text-l md:text-2xl",
		large: "text-4xl md:text-6xl"
	};

	const buttonSize = sizeClasses[size as keyof typeof sizeClasses] || sizeClasses.large;
	const textSize = textSizeClasses[size as keyof typeof textSizeClasses] || textSizeClasses.large;

	return (
		<>
			<div
				className={`${buttonSize} bg-[#739E71] hover:bg-[#557A53] text-white rounded-xl cursor-pointer transition-all duration-150 text-center shadow-[8px_8px_0px_0px_#557A53] hover:shadow-[12px_12px_0px_0px_#3C5A3A] hover:translate-x-[-4px] hover:translate-y-[-4px] ${className}`}
				onClick={handleClick}
			>
				<span className={`${textSize} leading-none font-heading font-black tracking-wide`}>
					{buttonText}
				</span>
			</div>

			<dialog id="contact_modal" className="modal" ref={modalRef}>
				<div className="modal-box max-w-3xl w-full p-0 bg-white">
					<div className="flex flex-col items-center justify-center pt-8">
						<h2 className="text-2xl md:text-4xl text-black font-bold">Schedule a call</h2>
						<p className="text-sm text-gray-500">or email <a href="mailto:letstalk@foundersgrove.dev" className="text-[#739E71]">letstalk@foundersgrove.dev</a></p>
					</div>
					<CalendlyEmbed url="https://calendly.com/dayne-foundersgrove-w6yb/30min?hide_event_type_details=1&hide_gdpr_banner=1" />
					<form method="dialog" className="absolute right-4 top-4 z-50">
						<button className="btn btn-sm btn-circle bg-foreground/10 hover:bg-foreground/20 border-none text-foreground">
							✕
						</button>
					</form>
				</div>
				<form method="dialog" className="modal-backdrop">
					<button>close</button>
				</form>
			</dialog>
		</>
	);
} 