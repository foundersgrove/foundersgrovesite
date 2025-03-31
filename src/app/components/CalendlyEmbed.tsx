"use client";
import { useEffect } from "react";
import Script from "next/script";

interface CalendlyEmbedProps {
	url: string;
}

export default function CalendlyEmbed({ url }: CalendlyEmbedProps) {
	return (
		<>
			<Script
				src="https://assets.calendly.com/assets/external/widget.js"
				strategy="lazyOnload"
			/>
			<div className="calendly-inline-widget w-full h-[600px]" data-url={url} />
		</>
	);
} 