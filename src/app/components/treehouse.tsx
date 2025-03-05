export default function Treehouse() {
	return (
		<div
			className="space-y-4 font-arial dark:text-white text-background bg-foreground/20 p-8
					rounded-xl backdrop-filter backdrop-blur-lg shadow-xl shadow-black/50 hover:shadow-black 
					transition-all duration-300 z-20"
		>
			<h2 className="text-3xl font-semibold">
				Treehouse Schoolhouse Blog Redesign
			</h2>

			<div className="flex max-w-5xl gap-8 flex-col md:flex-row">
				<div className="flex flex-col md:flex-row  h-full gap-6 pb-8">
					<div className="flex object-cover w-full h-[265px] md:h-[365px]">
						<iframe
							className="w-full h-full rounded-lg"
							title="Treehouse Schoolhouse Blog"
							src="/Homeschool.pdf#toolbar=0&navpanes=0"
						/>
					</div>
					<p className="text-lg md:w-4/5 my-auto px-4">
						Founders Grove took on the redesign and rebuild of the Treehouse
						Schoolhouse blog, a homeschool blog that already had great traffic.
						The project increased marketing capabilities and improved the
						overall user experience while allowing the Treehouse team to see
						more data with google analytics integration that wasn't possible
						before. This project utilized a headless wordpress backend and had
						to be rerouted to take over the preexisting shopify blog.
					</p>
				</div>
			</div>
			<div className="flex flex-col-reverse mx-auto md:flex-row-reverse max-w-5xl gap-4">
				<img
					src="/imgs/Quiz.png"
					alt="Homeschool Quiz"
					className="w-full md:w-1/3 rounded-lg px-14"
				/>
				<div className="flex justify-center flex-col gap-4">
					<h3 className="font-semibold text-2xl">
						The Homeschooling Style Quiz
					</h3>
					<p>
						The Homeschool Style Quiz was a project that was created to engage
						the audience of Treehouse Schoolhouse. The quiz was designed to be a
						fun and interactive way for parents to learn about different
						homeschooling styles and to help them decide which style would be
						best for their family. Our custom quiz solution was able to create a
						better user experience and directly lead parents to purchasing new
						products.
					</p>
				</div>
			</div>
		</div>
	);
}
