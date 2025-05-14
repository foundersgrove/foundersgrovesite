"use client";
import HomeCard from "./components/homeCard";
import { homeCards } from "@/config/homeCards";
import TitleCard from "./components/titleCard";
import CivicMedia from "./components/civicMedia";
import Bengine from "./components/bengine";
import Treehouse from "./components/treehouse";
import TeamCard from "./components/teamCard";
import { teamMembers } from "../config/teamConfig";

export default function Home() {
	return (
		<div className="relative flex flex-col min-h-screen">
			{/* Background Image */}
			<div className="back absolute inset-0 bg-[url('/imgs/RedwoodBackground.jpg')] bg-cover bg-center bg-no-repeat"></div>

			{/* Main Content */}
			<div className="relative z-10 flex-grow">
				<div className="max-w-3xl mx-auto flex flex-col gap-40 py-50">
					<TitleCard />
					{homeCards.map((card, index) => (
						<HomeCard
							key={index}
							title={card.title}
							description={card.description}
							btn={card.btn}
							btnLink={card.btnLink}
						/>
					))}
					<div
						className="-mb-40 max-w-3xl w-full h-full font-arial mx-auto text-background bg-foreground/20 
						rounded-xl backdrop-filter backdrop-blur-lg
						transition-all duration-300"
					>
						<h1
							id="work"
							className="font-bold text-2xl font-arial text-white p-4"
						>
							Our Work
						</h1>
					</div>
					<CivicMedia />

					<Bengine />
					<Treehouse />
					<div className="grid mx-2 md:mx-auto">
						<div
							className=" max-w-3xl w-full h-full font-arial mx-auto text-background bg-foreground/20 
						rounded-xl backdrop-filter backdrop-blur-lg
						transition-all duration-300"
						>
							<h1
								id="team"
								className="font-bold text-2xl font-arial text-white p-4"
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
