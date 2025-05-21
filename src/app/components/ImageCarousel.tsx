import { useEffect, useState } from "react";

type Image = {
	src: string;
	alt: string;
};

type ImageCarouselProps = {
	images: Image[];
	interval?: number; // interval in milliseconds
};

export default function ImageCarousel({
	images,
	interval = 3500,
}: ImageCarouselProps) {
	const [current, setCurrent] = useState(0);

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrent((prev) => (prev + 1) % images.length);
		}, interval);

		return () => clearInterval(timer); // cleanup on unmount
	}, [interval]);

	return (
		<>
			<div className="relative w-full h-54 lg:h-[540px] sm:h-96 md:h-96 mx-auto overflow-hidden rounded-lg">
				{images.map((img, index) => (
					<img
						key={index}
						src={img.src}
						alt={img.alt}
						className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
							index === current ? "opacity-100" : "opacity-0"
						}`}
					/>
				))}
			</div>
			<div className="gap-2 flex -mt-3 justify-center">
				{images.map((_, i) => (
					<button
						key={i}
						onClick={() => setCurrent(i)}
						className={`w-2 h-2 rounded-full ${
							i === current ? "bg-background" : "bg-background/50"
						}`}
					/>
				))}
			</div>
		</>
	);
}
