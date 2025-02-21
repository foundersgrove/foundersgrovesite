import Image from "next/image";

export default function Home() {
	//surrounding div old classes className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"
	// main old classes className="flex flex-col gap-8 row-start-2 items-center sm:items-start"
	return (
		<div className="">
			<main className="">
				<div className="wrapper">
					<header>
						<img src="/imgs/RedwoodBackground.jpg" alt="" className="back" />
						<img
							src="/imgs/RedwoodSingle.png"
							alt="Redwood Tree Single"
							className="fore"
						/>
						<h1 className="title text-center">Founders Grove</h1>
					</header>
					<section>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
						mollitia aspernatur at ad accusamus neque doloribus praesentium ut
						numquam repellendus. Sapiente repellat odit cupiditate expedita,
						quae consequuntur minima ad magnam!
					</section>
				</div>
			</main>
		</div>
	);
}
