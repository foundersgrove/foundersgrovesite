import TeamCard from "../components/teamCard";

export default function OurTeam() {
	return (
		<div className="relative flex flex-col min-h-screen">
			{/* Background Image */}
			<div className="absolute inset-0 bg-[url('/imgs/DarkRedwoodBG.jpg')] bg-cover bg-center bg-no-repeat"></div>

			{/* Navbar Padding Fix pt-24 */}
			<div className="relative z-10 flex flex-col flex-grow pt-24 justify-center">
				<div className="space-y-8">
					<div className="text-center bg-foreground/5 shadow-lg shadow-black/50 backdrop-blur-lg text-background font-arial font-semibold text-2xl p-6 ">
						Meet Our Team
					</div>

					{/* Team Members */}
					<div className="grid gap-8 mx-4">
						<TeamCard
							name={"Dayne Jones"}
							bio={
								"Founder of Founders Grove, and my uncle. Cool guy, just had twins. Codes in his sleep."
							}
							img={"/imgs/DayneJones.jpeg"}
							title={"CEO | Senior Developer"}
						/>
						<TeamCard
							name={"Sam McDonald"}
							bio={`The Coolest guy with lots of awesome ideas to build.`}
							img={"/imgs/SamMcDonald.jpg"}
							title={"Genius | Junior Developer"}
						/>
					</div>
				</div>

				{/* Bottom Padding */}
				<div className="h-60"></div>
			</div>
		</div>
	);
}
