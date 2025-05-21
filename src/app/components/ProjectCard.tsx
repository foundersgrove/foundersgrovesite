"use client";

import ImageCarousel from "./ImageCarousel";

type FeatureItem = {
	text: string;
};

type ProjectCardProps = {
	title: string;
	description: string;
	imageSrc: string;
	images: Image[];
	features: FeatureItem[];
	imageTitle?: string;
};

type Image = {
	src: string;
	alt: string;
};

export default function ProjectCard({
	title,
	description,
	imageSrc,
	images,
	features,
	imageTitle = "",
}: ProjectCardProps) {
	return (
		<div className="space-y-4 font-arial dark:text-white z-20">
			<div className="flex gap-8 flex-col">
				<div className="flex flex-col h-full space-y-6">
					<h2 className="text-2xl md:text-4xl font-semibold text-left">
						{title}
					</h2>
					{/* 
          <div className="flex object-cover w-full h-[400px] md:h-[600px]">
            <iframe
              className="w-full h-full rounded-lg"
              title={imageTitle || title}
              src={imageSrc}
            />
          </div> */}
					<ImageCarousel
						images={[
							{
								src: images[0].src,
								alt: images[0].alt,
							},
							{
								src: images[1].src,
								alt: images[1].alt,
							},
							{
								src: images[2].src,
								alt: images[2].alt,
							},
						]}
					/>

					<p className="text-md md:text-l">{description}</p>

					<h3 className="text-l md:text-2xl font-semibold text-left">
						Ask us how we:
					</h3>
					<ul className="space-y-5 text-md md:text-l list-disc list-inside">
						{features.map((feature, index) => (
							<li key={index}>{feature.text}</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}
