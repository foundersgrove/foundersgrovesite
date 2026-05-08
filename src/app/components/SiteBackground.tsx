import Image from "next/image";

/**
 * Renders the redwood photo background that previously lived inline in
 * `app/layout.tsx`. Pages that want the old visual treatment render this
 * component themselves; pages that want a different background (e.g. the
 * 3D `/preview` route) simply omit it.
 */
export default function SiteBackground() {
	return (
		<div className="back">
			<Image
				src="/imgs/RedwoodBackground.jpg"
				alt="Redwood Background"
				fill
				priority
				sizes="100vw"
				className="object-cover object-center"
				quality={75}
			/>
			<div className="absolute inset-0 bg-black/20 z-50" />
		</div>
	);
}
