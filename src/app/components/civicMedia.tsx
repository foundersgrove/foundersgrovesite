import ImageCarousel from "./ImageCarousel";

export default function CivicMedia({}) {
	return (
		<div className="space-y-4 font-arial dark:text-white z-20">
			<div className="flex gap-6 flex-col">
				<div className="flex flex-col h-full space-y-6">
					<h2 className="text-4xl font-semibold text-left">
						Civic Media: A State-Wide Radio Network
					</h2>

					{/* <div className="flex object-cover w-full h-[245px] md:h-[400px]">
					<iframe
						className="w-full h-full rounded-lg"
						title="civic media"
						src="/CivicMedia.pdf#toolbar=0&navpanes=0"
					/>
				</div> */}
					<ImageCarousel
						images={[
							{
								src: "/imgs/CMHome.png",
								alt: "Civic Media Image 1",
							},
							{
								src: "/imgs/CMPlayer.png",
								alt: "Civic Media Image 2",
							},
							{
								src: "/imgs/CM-Map.png",
								alt: "Civic Media Image 3",
							},
						]}
					/>

					<p className="text-lg">
						Civic Media's news covers the state of Wisconsin. As the technology
						partner for Civic Media, Founders Grove designed a custom media
						platform that powers their 20+ radio stations.
					</p>

					<h3 className="text-2xl font-semibold text-left">Ask us how we:</h3>
					<ul className="space-y-4 text-lg list-disc list-inside">
						<li>
							Used NextJS, Wordpress, and Terraform to deploy 20+ cutting-edge
							sites from the same codebase.
						</li>
						<li>
							Developed a custom radio player utilizing Web Audio API and React
							state management, enabling seamless streaming across broadcast,
							web, and mobile platforms
						</li>
						<li>
							Built a multi-terabyte audio library and content management system
							on a budget.
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
