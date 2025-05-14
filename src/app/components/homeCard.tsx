interface HomeCardProps {
	title: string;
	description: string;
	btn?: string | null;
	btnLink?: string;
	onClick?: () => void;
}

export default function HomeCard({
	title,
	description,
	btn,
	btnLink,
	onClick,
}: HomeCardProps) {
	return (
		<div
			className=" max-w-3xl font-arial mx-auto text-background bg-foreground/20 
						rounded-xl p-10 backdrop-filter backdrop-blur-lg shadow-lg shadow-black/50 hover:shadow-black 
						transition-all duration-300 text-center"
		>
			<h2 className="text-3xl text-center font-arial font-semibold mb-4">
				{title}
			</h2>
			<p className="text-xl font-normal font-arial mx-6">{description}</p>
			{btn && (
				<a href={btnLink} onClick={onClick}>
					<div
						className="mt-4 mx-auto max-w-48 p-4 bg-[#739E71] hover:bg-[#557A53] text-white rounded-xl 
					cursor-pointer transition-all duration-150 text-center shadow-[8px_8px_0px_0px_#557A53] 
					hover:shadow-[10px_10px_0px_0px_#3C5A3A] hover:translate-x-[-2px] hover:translate-y-[-2px]"
					>
						<span className="text-[1.2rem] leading-none font-heading font-black tracking-wide">
							{btn}
						</span>
					</div>
				</a>
			)}
		</div>
	);
}
