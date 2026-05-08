import PreviewCanvas from "../components/PreviewCanvas";
import SmoothScroll from "../components/SmoothScroll";
import HeroSection from "./sections/HeroSection";
import WorkSection from "./sections/WorkSection";
import TeamSection from "./sections/TeamSection";
import ContactSection from "./sections/ContactSection";

/**
 * /preview — the immersive landing experiment. The 3D canvas sits as a
 * fixed background layer covering the viewport; sections scroll over it
 * in a normal document flow. Lenis (via <SmoothScroll />) intercepts the
 * scroll, smooths it, and pipes a 0→1 progress value into the zustand
 * store that <CameraRig /> reads each frame.
 */
export default function PreviewPage() {
	return (
		<SmoothScroll>
			{/* Fixed 3D background. pointer-events-none so HTML on top stays clickable. */}
			<div className="fixed inset-0 z-0 pointer-events-none">
				<PreviewCanvas />
			</div>

			{/* Scroll-flow content layered above the canvas */}
			<div className="relative z-10">
				<HeroSection />
				<WorkSection />
				<TeamSection />
				<ContactSection />
			</div>
		</SmoothScroll>
	);
}
