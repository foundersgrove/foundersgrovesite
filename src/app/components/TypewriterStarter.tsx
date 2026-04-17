"use client";
import { useEffect } from "react";

export default function TypewriterStarter() {
	useEffect(() => {
		const element = document.querySelector(".typewriter");
		if (!element) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					element.classList.add("play");
					observer.disconnect();
				}
			},
			{ threshold: 0.1 }
		);

		observer.observe(element);
	}, []);

	return null;
}
