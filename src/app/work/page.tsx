import CivicMedia from "../components/civicMedia";
import Treehouse from "../components/treehouse";

export default function OurWork({}) {
	return (
		<div className="relative flex flex-col min-h-screen gap-4">
			{/* Background Image */}
			<div className="absolute inset-0 bg-[url('/imgs/Forest.jpg')] bg-cover bg-center bg-no-repeat"></div>
			<h1 className="mt-20 shadow-black/50 shadow-lg bg-foreground/20 backdrop-blur-lg backdrop-filter text-background font-arial font-semibold text-2xl p-2 text-center">
				Our Work
			</h1>
			<div className="flex flex-col items-center justify-center gap-8 mx-4">
				<CivicMedia />
				<Treehouse />
				<div
					className="space-y-4 font-arial dark:text-white text-background bg-foreground/20 p-8
					rounded-xl backdrop-filter backdrop-blur-lg shadow-xl shadow-black/50 hover:shadow-black 
					transition-all duration-300 z-20"
				>
					<h2 className="text-3xl font-semibold">
						Treehouse Schoolhouse Blog Redesign
					</h2>
					<div className="flex max-w-5xl gap-8 flex-col sm:flex-row-reverse">
						<div className="flex flex-col h-full sm:w-3/5 space-y-6">
							<p className="text-lg">
								Founders Grove took on the task of redesigning the Blog for
								Treehouse Schoolhouse a homeschool blog that already had great
								traffic and had a strong online presence. The purpose of the
								redesign was to increase marketing capabilities and improve the
								overall user experience. This project utilized a headless
								wordpress backend and had to be rerouted to take over the
								preexisting shopify hosted domain.
							</p>
						</div>
						<div className="flex object-cover w-full sm:w-2/5 h-[265px] sm:h-[300px]">
							<iframe
								className="w-full h-full rounded-lg"
								title="civic media"
								src="/Homeschool.pdf#toolbar=0&navpanes=0"
							/>
						</div>
					</div>
					<div className="flex flex-col-reverse mx-auto sm:flex-row-reverse max-w-5xl gap-4">
						<img
							src="/imgs/Quiz.png"
							alt="Player"
							className="w-full sm:w-1/3 rounded-lg px-14"
						/>
						<div className="flex flex-col gap-4">
							<h3 className="font-semibold text-2xl">
								The Homeschool Style Quiz
							</h3>
							<p>
								The Homeschool Style Quiz was a project that was created to
								engage the audience of the Treehouse Schoolhouse blog. The quiz
								was designed to be a fun and interactive way for parents to
								learn about different homeschooling styles and to help them
								decide which style would be best for their family.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="h-60"></div>
		</div>
	);
}
