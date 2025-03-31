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
			className="homecard max-w-2xl font-arial mx-auto text-background bg-foreground/20 
						rounded-xl p-10 backdrop-filter backdrop-blur-lg shadow-lg shadow-black/50 hover:shadow-black 
						transition-all duration-300 text-center"
		>
			<h2 className=" text-2xl text-center font-arial font-semibold">
				{title}
			</h2>
			<p className="text-l font-normal font-arial">{description}</p>
			{btn && (
				<a
					className="btn glass hover:bg-foreground/20 text-l text-background"
					href={btnLink}
					onClick={onClick}
				>
					{btn}
				</a>
			)}
		</div>
	);
}
