/**
 * "Recent Projects" beat — appears as the camera reaches the middle of
 * the corridor.
 *
 * Phase 1: render the existing <Projects /> component here, restyled for
 * the dark backdrop. Probably a horizontal scroll-snap of project cards
 * staged as floating panels alongside the path so the work itself feels
 * like part of the journey.
 */
export default function WorkSection() {
	return (
		<section className="min-h-screen flex items-center justify-center px-4">
			<div className="max-w-3xl bg-foreground/30 backdrop-blur-lg rounded-xl p-8 md:p-12 text-white shadow-lg shadow-black/50">
				<h2 className="text-4xl md:text-6xl font-bold mb-6">
					Recent Projects
				</h2>
				<p className="text-lg md:text-xl text-white/80">
					Civic Media, Bengine, Treehouse Schoolhouse — three case
					studies that will plug in here once Phase 1 wires the
					existing <code className="text-[#a6e2a3]">&lt;Projects /&gt;</code>{" "}
					component into the corridor.
				</p>
			</div>
		</section>
	);
}
