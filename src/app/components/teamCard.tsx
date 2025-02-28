interface TeamCardProps {
	name: string;
	bio: string;
	title: string;
	img: string;
}

export default function TeamCard({ name, bio, title, img }: TeamCardProps) {
	return (
		<div className="homecard flex flex-col md:flex-row items-center bg-foreground/20 rounded-xl p-6 backdrop-blur-lg shadow-lg shadow-black/50 hover:shadow-xl transition-all duration-300 text-background text-center md:text-left lg:max-w-3xl mx-auto">
			<img
				src={`${img}`}
				alt={`${name}`}
				className="aspect-square md:w-1/2 rounded-full object-cover"
			/>
			<div className="mt-4 md:mt-0 md:ml-6">
				<h2 className="text-2xl font-semibold">{name}</h2>
				<h3 className="italic text-lg text-gray-300">{title}</h3>
				<p className="mt-2 text-lg font-medium">{bio}</p>
			</div>
		</div>
	);
}
