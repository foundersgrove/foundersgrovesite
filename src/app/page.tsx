"use client";
import HomeCard from "./components/homeCard";
import { homeCards } from "@/config/homeCards";
import TitleCard from "./components/titleCard";

export default function Home() {
	return (
		<div className="relative flex flex-col min-h-screen">
			{/* Background Image */}
			<div className="back absolute inset-0 bg-[url('/imgs/RedwoodBackground.jpg')] bg-cover bg-center bg-no-repeat"></div>

			{/* Main Content */}
			<div className="relative z-10 flex-grow pt-24">
				<div className="mx-8 flex flex-col gap-96 py-40">
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
				</div>
			</div>
		</div>
	);
}
