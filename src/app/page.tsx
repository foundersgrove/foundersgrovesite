"use client";
import Projects from "./components/Projects";
import TeamCard from "./components/teamCard";
import ContactButton from "./components/ContactButton";
import { teamMembers } from "../config/teamConfig";
import { useEffect } from "react";
import Image from "next/image";

export default function Home() {
	useEffect(() => {
		const element = document.querySelector(".typewriter");

		if (!element) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					element.classList.add("play");
					observer.disconnect(); // Optional: only play once
				}
			},
			{ threshold: 0.1 }
		);

		observer.observe(element);
	}, []);
	return (
		<div>
			{/* Main Content */}
			<div className="relative z-10 flex-grow px-4 md:px-8">
				<div
					className="gap-8 md:gap-16 mt-24 md:mt-36 max-w-4xl mx-auto flex flex-col font-arial text-background bg-foreground/20 
					rounded-xl p-8 md:p-16 backdrop-filter backdrop-blur-lg shadow-lg shadow-black/50 hover:shadow-black 
					transition-all duration-300"
				>
					{/* <TitleCard /> */}
					<div>
						<h1 className="text-4xl md:text-6xl font-arial font-semibold mb-0">
							Founders Grove
						</h1>
						<div className="text-2xl md:text-3xl pt-0">
							<span className=" font-semibold text-background font-arial">
								We build <span className="typewriter thick text-[#739E71] animate-shimmer"></span>
							</span>
						</div>
					</div>
					<div>
						<h2 className="text-2xl md:text-4xl font-arial font-semibold mb-4">
							Founders Grove is a team of developers, designers, and
							entrepreneurs building successful businesses.
						</h2>
						<p className="text-md md:text-xl font-normal font-arial">
							Our secret is 20+ years of experience in product development,
							software engineering, and business operations across enterprise
							and startup environments.
						</p>
					</div>

					<div>
						<h2 className="text-2xl md:text-4xl font-arial font-semibold mb-4">
							That problem you're facing? We've seen it before.
						</h2>
						{/* <p className="text-md md:text-xl font-normal font-arial">
							Our secret is 20+ years of experience in product development,
							software engineering, and business operations across enterprise
							and startup environments.
						</p> */}
					</div>

					<div className="flex justify-center">
						<ContactButton
							buttonText="Let's Talk"
							size="small"
							className="max-w-md mx-auto"
						/>
					</div>

					{/* <div>
						<h2 className="text-3xl text-center font-arial font-semibold mb-4">
							We build software that lasts.
						</h2>
						<p className="text-xl font-normal font-arial mx-6">We're not just building software, we're building businesses.</p>
					</div> */}


					<Projects />
					<div className="grid mx-2 md:mx-auto">
						<div>
							<h1
								id="team"
								className="font-bold sm:text-2xl text-4xl md:text-6xl font-arial text-white p-4"
							>
								Our Team
							</h1>
						</div>
						{teamMembers.map((member, index) => (
							<TeamCard
								key={index}
								name={member.name}
								bio={member.bio}
								img={member.img}
								title={member.title}
								gitLink={member.gitLink}
								linkedIn={member.linkedIn}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
