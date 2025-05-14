export default function Bengine({}) {
	return (
		<div className="space-y-4 font-arial dark:text-white z-20">
			<div className="flex gap-8 flex-col">
				<div className="flex flex-col h-full space-y-6">
					<h2 className="text-4xl font-semibold text-left">
						Bengine: The Doordash for Mechanics
					</h2>
					<div className="flex object-cover w-full h-[265px] md:h-[400px]">
						<iframe
							className="w-full h-full rounded-lg"
							title="Bengine"
							src="/Bengine.pdf#toolbar=0&navpanes=0"
						/>
					</div>
					<p className="text-lg">
						Bengine connects mechanics with autoparts stores and drivers to deliver parts in record time.
						Founders Grove developed a custom ordering system, payment processing, and a user-friendly interface.
					</p>
					<h3 className="text-2xl font-semibold text-left">Ask us how we:</h3>
					<ul className="space-y-5 text-lg list-disc list-inside">
						<li>
							Went from ideas to an entire product in a couple months
						</li>
						<li>
							Integrated a custom API to coordinate vehicle filtered parts search
						</li>
						<li>
							Integrated a delivery service to coordinate parts delivery
						</li>
					</ul>
				</div>

				{/* <div className="flex flex-col md:flex-row mx-auto gap-8">
					<img
						src="/imgs/BengineCheckout.png"
						alt="Player"
						className="w-full rounded-lg md:w-2/5"
					/>

					<div className="flex flex-col gap-4">
						<h3 className="font-semibold text-2xl">
							Checkout and Order Summary
						</h3>
						<p>
							Since Bengine is a new platform we tried to build a checkout
							system that not only felt secure but looked secure; like a
							standard autoparts website, which encouraged mechanics to use the
							service.
						</p>
					</div>
				</div> */}
			</div>
		</div>
	);
}
