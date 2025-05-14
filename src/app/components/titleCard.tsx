export default function TitleCard({}) {
	return (
		<div
			className="max-w-3xl w-full h-full font-arial mx-auto text-background bg-foreground/20 
						rounded-xl p-10 backdrop-filter backdrop-blur-lg shadow-lg shadow-black/50 hover:shadow-black 
						transition-all duration-300"
		>
			{/* <h2 className="text-3xl font-arial font-semibold mb-4">Founders Grove</h2> */}
			<h2 className="text-2xl font-semibold text-center w-full text-background mx-auto font-arial">
				Lets Build Your
			</h2>
			<p className="life" aria-label="Masterpiece">
				&nbsp;<span className="typewriter thick"></span>
			</p>
		</div>
	);
}
