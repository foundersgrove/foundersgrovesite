import ContactButton from "../../components/ContactButton";

/**
 * Final beat — the user has reached the end of the corridor and the light
 * beyond. Calls them to action.
 *
 * Phase 3: this is where the camera "breaks through" into a clearing and
 * the geometric redwood tree assembles itself from polygons. For now,
 * just the CTA so the scroll experience has a satisfying terminus.
 */
export default function ContactSection() {
	return (
		<section
			id="contact-preview"
			className="min-h-screen flex items-center justify-center px-4"
		>
			<div className="max-w-2xl text-center text-white">
				<h2 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-2xl">
					Plant a seed.
				</h2>
				<p className="text-lg md:text-xl text-white/80 mb-10 drop-shadow-lg">
					That problem you&apos;re facing? We&apos;ve seen it before.
				</p>
				<div className="flex justify-center">
					<ContactButton buttonText="Let's Talk" size="large" />
				</div>
			</div>
		</section>
	);
}
