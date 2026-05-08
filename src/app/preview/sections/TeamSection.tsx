/**
 * "Our Team" beat — appears deeper in the corridor.
 *
 * Phase 1: render <TeamCard /> for each member from `teamConfig`,
 * positioned along the path on either side. The current site already has
 * the data and component; this is mostly a styling / layout port.
 */
export default function TeamSection() {
	return (
		<section className="min-h-screen flex items-center justify-center px-4">
			<div className="max-w-3xl bg-foreground/30 backdrop-blur-lg rounded-xl p-8 md:p-12 text-white shadow-lg shadow-black/50">
				<h2 className="text-4xl md:text-6xl font-bold mb-6">Our Team</h2>
				<p className="text-lg md:text-xl text-white/80">
					Phase 1 wires up <code className="text-[#a6e2a3]">teamMembers</code>{" "}
					and renders a <code className="text-[#a6e2a3]">&lt;TeamCard /&gt;</code>{" "}
					for each, restyled to read against the corridor.
				</p>
			</div>
		</section>
	);
}
