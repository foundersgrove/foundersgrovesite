import Image from "next/image";
import NavBar from "./components/navbar";

export default function Home() {
	//surrounding div old classes className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"
	// main old classes className="flex flex-col gap-8 row-start-2 items-center sm:items-start"
	return (
		<div>
			<main className="wrapper">
				<header>
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
					<div className="font-arial bg-background/80 rounded-2xl p-20 size-fit backdrop-filter backdrop-blur-lg shadow-2xl text-center">
						<h1 className="title text-center font-arial font-semibold">
							Founders Grove
						</h1>
						<p>Lets Bring Something to Life</p>
					</div>
				</header>

				<section>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
					mollitia aspernatur at ad accusamus neque doloribus praesentium ut
					numquam repellendus. Sapiente repellat odit cupiditate expedita, quae
					consequuntur minima ad magnam!
				</section>
			</main>
		</div>
	);
}
