import Image from "next/image";
import NavBar from "./components/navbar";

export default function Home() {
	//surrounding div old classes className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"
	// main old classes className="flex flex-col gap-8 row-start-2 items-center sm:items-start"
	return (
		<div>
			<main className="wrapper">
				<header className="h-full">
					<img
						src="/imgs/RedwoodBackground.jpg"
						alt="background image"
						className="back"
					/>
					<img
						src="/imgs/RedwoodSingle.png"
						alt="Redwood Tree Single"
						className="fore"
					/>
					<div className="font-arial text-background bg-foreground/20 rounded-2xl p-20 size-fit backdrop-filter backdrop-blur-lg shadow-3xl text-center z-20">
						<h1 className=" text-3xl text-center font-arial font-semibold">
							Founders Grove
						</h1>
						<p>Lets Bring Something to Life</p>
					</div>
				</header>
				<div className="space-y-24 mx-4">
					<div className="homecard space-y-5 font-arial max-w-4xl mx-auto text-background bg-foreground/20 rounded-2xl p-12 backdrop-filter backdrop-blur-lg shadow-2xl text-center">
						<h2 className=" text-2xl text-center font-arial font-semibold">
							What do we do?
						</h2>
						<p className="text-xl font-normal font-arial">
							We are a team of developers, designers, and project managers that
							are dedicated to bringing your ideas to life. We specialize in
							creating websites and web applications that are tailored to your
							needs.
						</p>
					</div>
					<div className="homecard max-w-4xl space-y-5 font-arial justify-center mx-auto text-background bg-foreground/20 rounded-2xl p-12 backdrop-filter backdrop-blur-lg shadow-2xl text-center">
						<h2 className=" text-2xl text-center font-arial font-semibold">
							What have we built?
						</h2>
						<p className="text-xl font-normal font-arial">
							We have built a variety of websites and web applications for a
							diverse range of clients. Our projects include e-commerce sites,
							blogs, and custom web applications.
						</p>
						<a
							className="btn glass hover:bg-foreground/20 text-l text-background"
							href="work"
						>
							View Our Work
						</a>
					</div>
					<div className="homecard max-w-4xl space-y-5 font-arial mx-auto text-background bg-foreground/20 rounded-2xl p-12 backdrop-filter backdrop-blur-lg shadow-2xl text-center">
						<h2 className=" text-2xl text-center font-arial font-semibold">
							Why Us?
						</h2>
						<p className="text-xl font-normal font-arial">
							We are a team of experienced professionals who are passionate
							about creating high-quality websites and web applications. We are
							committed to providing our clients with the best possible service
							and delivering projects on time and on budget.
						</p>
						<a
							className="btn glass hover:bg-foreground/20 text-l text-background"
							href="team"
						>
							Meet Our Team
						</a>
					</div>
				</div>
			</main>
		</div>
	);
}
