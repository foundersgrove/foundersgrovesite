import Scene from "./Scene";

/**
 * Thin wrapper around <Scene /> that sizes the canvas to fill its parent.
 * On the /preview route this lives inside a `position: fixed` background
 * layer (see app/preview/page.tsx), so the canvas covers the viewport
 * while scrollable HTML content flows on top.
 */
export default function PreviewCanvas() {
	return (
		<div className="absolute inset-0">
			<Scene />
		</div>
	);
}
