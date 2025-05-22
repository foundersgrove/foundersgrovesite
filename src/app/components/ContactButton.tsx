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
		large: "text-3xl md:text-4xl"
	};

	const buttonSize = sizeClasses[size as keyof typeof sizeClasses] || sizeClasses.large;
	const textSize = textSizeClasses[size as keyof typeof textSizeClasses] || textSizeClasses.large;

	return (
		<>
			<div
				className={`
					${buttonSize}
					bg-gradient-to-r from-[#739E71] to-[#557a54]
					text-white
					rounded-md
					cursor-pointer
					text-center
					transform
					transition-all duration-200 ease-in-out
					translate-y-[-4px]
					${className}
				`}
				onClick={handleClick}
			>
				<span className={`${textSize} leading-none font-heading font-black tracking-wide`} style={{ fontFamily: "var(--font-heading)" }}>
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