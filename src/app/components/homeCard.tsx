interface HomeCardProps {
	title: string;
	description: string;
	btn?: string | null;
	btnLink?: string;
	onClick?: () => void;
	isHeader?: boolean;
	subtitle?: string;
}

export default function HomeCard({
	title,
	description,
	btn,
	btnLink,
	onClick,
	isHeader,
	subtitle,
}: HomeCardProps) {
	return (
		<div
			className={`homecard max-w-2xl font-arial mx-auto text-background backdrop-filter backdrop-blur-lg shadow-lg shadow-black/50 hover:shadow-black 
						transition-all duration-300 text-center p-10 rounded-xl ${isHeader ? 'bg-foreground/5' : 'bg-foreground/20'}`}
		>
			{isHeader ? (
				<>
					<div className="overflow-hidden plant-container py-4 relative">
						<h2 className="plant-grow text-5xl md:text-6xl lg:text-7xl text-center font-heading font-black mb-6 tracking-wide text-[#111]">
							{title}
						</h2>
						<p className="plant-grow-delay text-2xl md:text-3xl font-bold font-arial text-[#222]">
							{description}
						</p>
						{subtitle && (
							<p className="plant-grow-delay-2 text-lg mt-8 italic font-serif text-[#333]">
								{subtitle}
							</p>
						)}
						
						{/* Enhanced soil effect with multiple elements */}
						<div className="relative h-6 mt-4 mb-1">
							<div className="soil-effect absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-4 bg-[#5A7A58] rounded-full opacity-0"></div>
							<div className="soil-effect absolute bottom-0 left-[calc(50%-60px)] transform -translate-x-1/2 w-0 h-3 bg-[#496A47] rounded-full opacity-0" style={{ animationDelay: '0.4s' }}></div>
							<div className="soil-effect absolute bottom-0 left-[calc(50%+60px)] transform -translate-x-1/2 w-0 h-3 bg-[#496A47] rounded-full opacity-0" style={{ animationDelay: '0.6s' }}></div>
							<div className="plant-seed absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#3C5A3A] rounded-full opacity-0" style={{ animationDelay: '1.2s' }}></div>
						</div>
					</div>
				</>
			) : (
				<>
					<h2 className="text-2xl text-center font-arial font-semibold">
						{title}
					</h2>
					<p className="text-l font-normal font-arial">{description}</p>
				</>
			)}
			
			{btn && (
				<div className="mt-4 flex justify-center">
					<a
						className="p-4 bg-[#739E71] hover:bg-[#557A53] text-white rounded-xl cursor-pointer transition-all duration-150 text-center shadow-[8px_8px_0px_0px_#557A53] hover:shadow-[12px_12px_0px_0px_#3C5A3A] hover:translate-x-[-4px] hover:translate-y-[-4px] btn-lg"
						href={btnLink}
						onClick={onClick}
					>
						<span className="text-md font-heading font-bold tracking-wide">{btn}</span>
					</a>
				</div>
			)}
		</div>
	);
}
