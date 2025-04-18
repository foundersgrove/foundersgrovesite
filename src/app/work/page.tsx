import Bengine from "../components/bengine";
import CivicMedia from "../components/civicMedia";
import Treehouse from "../components/treehouse";

export default function OurWork({}) {
	return (
		<div className="relative flex flex-col min-h-screen gap-4">
			{/* Background Image */}
			<div className="absolute inset-0 bg-[url('/imgs/Forest.jpg')] bg-cover bg-center bg-no-repeat"></div>
			{/* <h1
				className="mt-24 my-5 shadow-black/50 shadow-lg bg-foreground/20 backdrop-blur-lg backdrop-filter 
			text-background font-arial font-semibold text-2xl p-4 text-center"
			>
				Our Work
			</h1> */}
			<div className="flex mt-24 flex-col items-center justify-center gap-24 mx-4">
				<CivicMedia />
				<Bengine />
				<Treehouse />
			</div>
			<div className="h-20"></div>
		</div>
	);
}
