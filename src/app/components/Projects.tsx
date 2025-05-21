"use client";
import ProjectCard from "./ProjectCard";

// Project data
const projectsData = [
	{
		title: "Civic Media: A State-Wide Radio Network",
		description:
			"Civic Media's news covers the state of Wisconsin. As the technology partner for Civic Media, Founders Grove designed a custom media platform that powers their 20+ radio stations.",
		imageSrc: "/CivicMedia.pdf#toolbar=0&navpanes=0",
		images: [
			{ src: "/imgs/CMHome.png", alt: "Civic Media Image 1" },
			{ src: "/imgs/CMPlayer.png", alt: "Civic Media Image 2" },
			{ src: "/imgs/CM-Map.png", alt: "Civic Media Image 3" },
		],
		imageTitle: "civic media",
		features: [
			{
				text: "Used NextJS, Wordpress, and Terraform to deploy 20+ cutting-edge sites from the same codebase.",
			},
			{
				text: "Developed a custom radio player utilizing Web Audio API and React state management, enabling seamless streaming across broadcast, web, and mobile platforms.",
			},
			{
				text: "Built a multi-terabyte audio library and content management system on a budget.",
			},
		],
	},
	{
		title: "Bengine: The Doordash for Mechanics",
		description:
			"Bengine connects mechanics with autoparts stores and drivers to deliver parts in record time. Founders Grove developed a custom ordering system, payment processing, and a user-friendly interface.",
		imageSrc: "/Bengine.pdf#toolbar=0&navpanes=0",
		images: [
			{ src: "/imgs/BengineHome.png", alt: "Bengine Home" },
			{ src: "/imgs/BengineCheckout.png", alt: "Bengine Checkout" },
			{ src: "/imgs/BengineLogin.png", alt: "Bengine Login" },
		],
		imageTitle: "Bengine",
		features: [
			{
				text: "Went from ideas to an entire product in a couple months.",
			},
			{
				text: "Integrated a custom API to coordinate vehicle filtered parts search.",
			},
			{
				text: "Integrated a delivery service to coordinate parts delivery.",
			},
		],
	},
	{
		title: "Treehouse Schoolhouse: Homeschool 101",
		description:
			"Treehouse Schoolhouse had a great ecommerce presence but their Shopify blog was not performing well. Founders Grove redesigned the blog to be more engaging and user-friendly, while adding functionality to drive traffic to the shop.",
		imageSrc: "/Homeschool.pdf#toolbar=0&navpanes=0",
		images: [
			{ src: "/imgs/TH-Home.png", alt: "Treehouse Schoolhouse Image 1" },
			{ src: "/imgs/TH-Home2.png", alt: "Treehouse Schoolhouse Image 2" },
			{ src: "/imgs/TH-Quiz.png", alt: "Treehouse Schoolhouse Image 3" },
		],
		imageTitle: "Treehouse Schoolhouse Blog",
		features: [
			{
				text: "Seamlessly integrated an existing shopify ecommerce site with a headless wordpress blog.",
			},
			{
				text: "Leveraged NextJS and Wordpress to create custom content experiences.",
			},
			{
				text: "Built a custom quiz solution to engage the audience and drive sales.",
			},
		],
	},
];

export default function Projects() {
	return (
		<div className="space-y-24">
			{projectsData.map((project, index) => (
				<ProjectCard
					key={index}
					title={project.title}
					description={project.description}
					imageSrc={project.imageSrc}
					images={[
						{ src: project.images[0].src, alt: project.images[0].alt },
						{ src: project.images[1].src, alt: project.images[1].alt },
						{ src: project.images[2].src, alt: project.images[2].alt },
					]}
					imageTitle={project.imageTitle}
					features={project.features}
				/>
			))}
		</div>
	);
}
