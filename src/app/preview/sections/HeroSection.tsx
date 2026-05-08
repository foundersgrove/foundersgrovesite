/**
 * Hero / "who we are" beat. Lives at the start of the corridor — the user
 * lands here, sees the brand, gets a hint to scroll.
 *
 * Phase 1: port the typewriter effect from the existing home page so the
 * "We build [start-ups | web apps | businesses]" rotation runs here too.
 */
export default function HeroSection() {
	return (
		<section className="min-h-screen flex items-center justify-center px-4">
			<div className="max-w-4xl text-center text-white">
				<h1 className="text-5xl md:text-8xl font-bold mb-6 tracking-tight drop-shadow-2xl">
					Founders Grove
				</h1>
				<p className="text-xl md:text-3xl text-white/90 drop-shadow-lg">
					We build software that lasts.
				</p>
				<p className="mt-12 text-sm md:text-base text-white/60 animate-pulse">
					↓ scroll to enter the grove
				</p>
			</div>
		</section>
	);
}
