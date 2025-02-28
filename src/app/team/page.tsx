export default function OurTeam() {
	return (
		<div className="relative flex flex-col min-h-screen">
			{/* Background Image */}
			<div className="absolute inset-0 bg-[url('/imgs/DarkRedwoodBG.jpg')] bg-cover bg-center bg-no-repeat"></div>

			{/* Navbar Padding Fix */}
			<div className="relative z-10 flex flex-col flex-grow pt-20">
				<div className="container mx-auto space-y-8">
					{/* Title */}
					<div className="text-center bg-foreground/5 shadow-lg shadow-black/50 backdrop-blur-lg text-background font-arial font-semibold text-3xl p-6 ">
						Meet Our Team
					</div>

					{/* Team Members */}
					<div className="grid gap-8 mx-4">
						{/* Card 1 */}
						<div className="homecard flex flex-col md:flex-row items-center bg-foreground/20 rounded-xl p-6 backdrop-blur-lg shadow-lg hover:shadow-black transition-all duration-300 text-background text-center md:text-left lg:max-w-3xl mx-auto">
							<img
								src="/imgs/DayneJones.jpeg"
								alt="Dayne Jones"
								className="aspect-square md:w-1/2 rounded-full object-cover"
							/>
							<div className="mt-4 md:mt-0 md:ml-6">
								<h2 className="text-2xl font-semibold">Dayne Jones</h2>
								<h3 className="italic text-lg text-gray-300">
									CEO | Senior Developer
								</h3>
								<p className="mt-2 text-lg font-medium">
									Founder of Founders Grove, and my uncle. Cool guy, just had
									twins. Codes in his sleep.
								</p>
							</div>
						</div>

						{/* Card 2 */}
						<div className="homecard flex flex-col md:flex-row items-center bg-foreground/20 rounded-xl p-6 backdrop-blur-lg shadow-lg hover:shadow-black transition-all duration-300 text-background text-center md:text-left lg:max-w-3xl mx-auto">
							<img
								src="/imgs/SamMcDonald.jpg"
								alt="Sam McDonald"
								className="aspect-square md:w-1/2 rounded-full object-cover"
							/>
							<div className="mt-4 md:mt-0 md:ml-6">
								<h2 className="text-2xl font-semibold">Sam McDonald</h2>
								<h3 className="italic text-lg text-gray-300">
									Genius | Junior Developer
								</h3>
								<p className="mt-2 text-lg font-medium">
									The Coolest guy with lots of awesome ideas to build.
								</p>
							</div>
						</div>
					</div>
				</div>

				{/* Bottom Padding */}
				<div className="h-20"></div>
			</div>
		</div>
	);
}
