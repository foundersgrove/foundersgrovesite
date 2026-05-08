"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { useScrollStore } from "../preview/scrollStore";

/**
 * Wraps the page in Lenis-driven smooth scroll and pipes scroll progress
 * into the global zustand store on every frame. Keep this as high in the
 * tree as possible (just inside the route's `<body>` content) so Lenis
 * controls the whole document scroll.
 */
export default function SmoothScroll({
	children,
}: {
	children: React.ReactNode;
}) {
	const setProgress = useScrollStore((s) => s.setProgress);

	useEffect(() => {
		const lenis = new Lenis({
			duration: 1.2,
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
			smoothWheel: true,
		});

		const onScroll = () => setProgress(lenis.progress ?? 0);
		lenis.on("scroll", onScroll);

		let rafId = 0;
		const raf = (time: number) => {
			lenis.raf(time);
			rafId = requestAnimationFrame(raf);
		};
		rafId = requestAnimationFrame(raf);

		return () => {
			cancelAnimationFrame(rafId);
			lenis.off("scroll", onScroll);
			lenis.destroy();
		};
	}, [setProgress]);

	return <>{children}</>;
}
