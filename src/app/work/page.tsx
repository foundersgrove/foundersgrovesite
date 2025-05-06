import Bengine from "../components/bengine";
import CivicMedia from "../components/civicMedia";
import Treehouse from "../components/treehouse";

export default function OurWork({}) {
	return (
		<div className="relative flex flex-col min-h-screen gap-4">
			{/* Background Image */}
			<div className="absolute z-0 inset-0 bg-[url('/imgs/RedwoodBackground.jpg')] bg-cover bg-center bg-no-repeat"></div>
			<div className="mt-36 z-10 flex flex-col items-center justify-center gap-24 mx-auto max-w-4xl">
				<CivicMedia />
				<Bengine />
				<Treehouse />
			</div>
			<div className="h-20"></div>
		</div>
	);
}
