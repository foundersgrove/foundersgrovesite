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
	tags?: string[];
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
	tags = [],
}: ProjectCardProps) {
	return (
		<div className="space-y-4 font-arial dark:text-white z-20">
			<div className="flex gap-8 flex-col">
				<div className="flex flex-col h-full space-y-6">
					<h2 className="text-l md:text-2xl font-semibold text-left">
						{title}
					</h2>
					{tags && tags.length > 0 && (
						<div className="flex flex-wrap gap-2 -mt-4">
							{tags.map((tag, index) => (
								<span key={index} className="badge bg-[#739E71] text-white font-medium text-xs py-2 px-3">
									{tag}
								</span>
							))}
						</div>
					)}
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

					<h3 className="text-l md:text-2xl font-semibold text-left mb-4">
						Ask us how we:
					</h3>
					<ul className="space-y-3 text-md md:text-l">
						{features.map((feature, index) => (
							<li key={index} className="flex items-start">
								<span className="inline-flex items-center justify-center h-6 w-6 rounded-full mr-3 flex-shrink-0">
									<svg className="w-5 h-5 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
										<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7"/>
									</svg>
								</span>
								<span className="font-medium">{feature.text}</span>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}
