export default function CivicMedia({}) {
	return (
		<div
			className="space-y-4 font-arial dark:text-white text-background bg-foreground/20 p-8
					rounded-xl backdrop-filter backdrop-blur-lg shadow-xl shadow-black/50 hover:shadow-black 
					transition-all duration-300 z-20"
		>
			<div className="flex max-w-5xl gap-6 sm:flex-row flex-col-reverse ">
				<div className="flex flex-col h-full sm:w-3/5 space-y-6">
					<h2 className="text-3xl font-semibold">
						Civic Media: A New approach to Web Radio
					</h2>
					<p className="text-lg">
						Civic Media is a web Radio platform that acquired many Radio
						Stations to help bring their reach further through the power of the
						web. Founders Grove was responsible for successful development of
						the project specifically developing new unique solutions to reaching
						Civic Medias audience.
					</p>
				</div>
				<div className="flex object-cover w-full sm:w-3/5 h-[265px] sm:h-[300px]">
					<iframe
						className="w-full h-full rounded-lg"
						title="civic media"
						src="/CivicMedia.pdf#toolbar=0&navpanes=0"
					/>
				</div>
			</div>
			<h3 className="font-semibold text-2xl">The Radio Switcher</h3>
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
			</div>
		</div>
	);
}
