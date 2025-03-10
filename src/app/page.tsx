"use client";
import HomeCard from "./components/homeCard";
import { useRef } from "react";
import CalendlyEmbed from "./components/CalendlyEmbed";

export default function Home() {
	const modalRef = useRef<HTMLDialogElement>(null);
	const handleClick = () => {
		if (modalRef.current) {
			modalRef.current?.showModal();
		}
	};
	//surrounding div old classes className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"
	// main old classes className="flex flex-col gap-8 row-start-2 items-center sm:items-start"
	return (
		<div>
			<main>
				<header className="relative h-[calc(100vh-4rem)] flex flex-col">
					<img
						src="/imgs/RedwoodBackground.jpg"
						alt="background image"
						className="back"
					/>
					{/* <img
						src="/imgs/RedwoodSingle.png"
						alt="Redwood Tree Single"
						className="fore"
					/> */}
					<div className="mx-4 my-auto">
						<div
							className="mt-18 flex flex-col p-14 mx-auto font-arial text-background bg-foreground/20 space-y-1 w-full
					rounded-xl max-w-2xl backdrop-filter backdrop-blur-lg shadow-xl shadow-black/50 hover:shadow-black 
					transition-all duration-300 text-center z-20"
						>
							<h1 className=" md:text-4xl text-3xl text-center font-arial font-semibold mb-2">
								Founders Grove
							</h1>

							<p className="">Lets Bring Something to Life</p>
							<hr className="w-38 h-0 mx-auto my-1 rounded-sm md:my-1 bg-background"></hr>
							<p className="italic">plant a seed below</p>
						</div>
					</div>
				</header>
				<div className="space-y-38 mx-4">
					<HomeCard
						title={`What do we do? 🦾`}
						description={`We are a team of developers, designers, and project managers that
							are dedicated to bringing ideas to life. We specialize in creating
							websites and web applications that are tailored to your needs.`}
						btn={null}
						btnLink={undefined}
					/>
					<HomeCard
						title={`What have we built? 🛠️`}
						description={`We have built a variety of websites and web applications for a
							diverse range of clients. Our projects include e-commerce sites,
							blogs, and custom web applications.`}
						btn={`View Our Work`}
						btnLink={`work`}
					/>
					<HomeCard
						title={`Why Us? 🌱`}
						description={`We are a team of experienced professionals who are passionate
							about creating high-quality websites and web applications. We are
							committed to providing our clients with the best possible service
							and delivering projects on time and on budget.`}
						btn={`Meet Our Team`}
						btnLink={`team`}
					/>
					<HomeCard
						title={`Get In Touch`}
						description={`If you have a project in mind or would like to learn more about
							our services, please book a meeting with us. We would love to hear from you
							and discuss how we can help bring your ideas to life.`}
						btn={`Contact Us`}
						btnLink={undefined}
						onClick={handleClick}
					/>
					<dialog id="my_modal_2" className="modal" ref={modalRef}>
						<div className="modal-box bg-white">
							<CalendlyEmbed url="https://calendly.com/dayne-foundersgrove/30min?hide_event_type_details=1&hide_gdpr_banner=1" />
							{/* <p className="py-6 text-black">
								Press ESC key or click outside to close
							</p> */}
						</div>
						<form method="dialog" className="modal-backdrop">
							<button>close</button>
						</form>
					</dialog>
				</div>
			</main>
		</div>
	);
}
