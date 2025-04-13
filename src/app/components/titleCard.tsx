export default function TitleCard({}) {
	return (
		<div
			className="homecard max-w-2xl w-full font-arial mx-auto text-background bg-foreground/20 
						rounded-xl p-10 backdrop-filter backdrop-blur-lg shadow-lg shadow-black/50 hover:shadow-black 
						transition-all duration-300 text-center"
		>
			{/* <h2 className="text-3xl font-arial font-semibold mb-4">Founders Grove</h2> */}
			<h2 className="main text-center mx-auto font-normal font-arial">
				Lets Bring Something to
			</h2>
			<p className="life">Life</p>
		</div>
	);
}
