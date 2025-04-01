import TeamCard from "../components/teamCard";
import { teamMembers } from "./teamConfig";

export default function OurTeam() {
	return (
		<div className="relative flex flex-col min-h-screen">
			{/* Background Image */}
			<div className="absolute inset-0 bg-[url('/imgs/DarkRedwoodBG.jpg')] bg-cover bg-center bg-no-repeat"></div>

			{/* Navbar Padding Fix pt-24 */}
			<div className="relative z-10 flex flex-col flex-grow pt-24 justify-center">
				<div className="space-y-8 max-w-5xl mx-auto px-4">
					<div className="text-center bg-foreground/5 shadow-lg shadow-black/50 backdrop-blur-lg text-background font-arial font-semibold text-xl md:text-2xl p-6 md:p-8 mx-2 rounded-lg">
						<h1 className="md:tracking-wide">Meet Our Team</h1>
					</div>

					{/* Team Members */}
					<div className="grid gap-8 mx-2 md:mx-auto">
						{teamMembers.map((member, index) => (
							<TeamCard
								key={index}
								name={member.name}
								bio={member.bio}
								img={member.img}
								title={member.title}
								gitLink={member.gitLink}
								linkedIn={member.linkedIn}
							/>
						))}
					</div>
				</div>

				{/* Bottom Padding */}
				<div className="h-20"></div>
			</div>
		</div>
	);
}
