type Image = {
	src: string;
	alt: string;
};

type ImageCarouselProps = {
	images: Image[];
};

export default function ImageCarousel({ images }: ImageCarouselProps) {
	return (
		<div className="carousel">
			{images.map((image, index) => (
				<div key={index} className="carousel-item">
					<img src={image.src} alt={image.alt} />
				</div>
			))}
		</div>
	);
}
