"use client";
import HomeCard from "./components/homeCard";
import { homeCards } from "@/config/homeCards";

export default function Home() {
	return (
		<div>
			<main>
				<header className="relative flex flex-col"></header>
				<img
					src="/imgs/RedwoodBackground.jpg"
					alt="background image"
					className="back"
				/>
				<div className="flex flex-col gap-96 py-96">
					{homeCards.map((card, index) => (
						<HomeCard
							key={index}
							title={card.title}
							description={card.description}
							btn={card.btn}
							btnLink={card.btnLink}
						/>
					))}
				</div>
			</main>
		</div>
	);
}
