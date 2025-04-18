export default function CivicMedia({}) {
	return (
		<div
			className="space-y-4 font-arial dark:text-white text-background bg-foreground/20 p-8
					rounded-xl backdrop-filter backdrop-blur-lg shadow-xl shadow-black/50 hover:shadow-black 
					transition-all duration-300 z-20"
		>
			<div className="flex max-w-5xl gap-6 flex-col-reverse md:px-20 lg:px-40">
				<div className="flex flex-col h-full space-y-6">
					<h2 className="text-3xl font-semibold mx-auto">
						Civic Media: A New approach to Radio
					</h2>
					{/* <p className="text-lg">
						Civic Media is a web Radio platform that acquired many Radio
						Stations to help bring their reach further through the power of the
						web. Founders Grove was responsible for successful development of
						the project specifically developing new unique solutions to reaching
						Civic Medias audience.
					</p> */}
					<ul className="list-disc list-inside space-y-5 text-lg">
						<li>
							Web Radio platform that acquired many Radio Stations to help bring
							more reach through the power of the web
						</li>
						<li>
							We were responsible for the development of the project
							specifically developing new unique solutions to reaching Civic
							Medias audience
						</li>
						<li>
							Built a custom radio player that utilized advanced streaming
							features of the Web Audio API in conjunction with React State
							Management
						</li>
					</ul>
				</div>
				<div className="flex object-cover w-full h-[245px] md:h-[400px]">
					<iframe
						className="w-full h-full rounded-lg"
						title="civic media"
						src="/CivicMedia.pdf#toolbar=0&navpanes=0"
					/>
				</div>
			</div>
			{/* <h3 className="font-semibold text-2xl">The Radio Switcher</h3>
			<div className="flex flex-col sm:flex-row max-w-5xl gap-4">
				<img
					src="/imgs/RadioPlayer.png"
					alt="Player"
					className="w-full sm:w-1/2 rounded-lg"
				/>
				<div className="flex flex-col">
					<p>
						This Radio Switcher utilized advanced streaming features of the Web
						Audio API in conjunction with React State Management, allowing users
						to switch between different radio stations seamlessly. The project
						was developed by Founders Grove and several other developers.
					</p>
				</div>
			</div> */}
		</div>
	);
}
