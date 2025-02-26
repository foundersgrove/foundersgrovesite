export default function NavBar() {
	return (
		<div>
			{/* <nav className="fixed top-0 left-0 w-full z-50 bg-white/20 backdrop-blur-lg shadow-md">
				<div className="max-w-5xl mx-auto px-4">
					<div className="flex items-center justify-between h-16">
						<span className="text-2xl text-gray-900 font-semibold">Logo</span>
						<div className="flex space-x-4 text-gray-900">
							<a href="#">Dashboard</a>
							<a href="#">About</a>
							<a href="#">Projects</a>
							<a href="#">Contact</a>
						</div>
					</div>
				</div>
			</nav> */}
			<div className="navbar fixed top-0 left-0 w-full z-50 bg-foreground/20 backdrop-blur-lg shadow-xl">
				<div className="navbar-start">
					<div className="dropdown">
						<div
							tabIndex={0}
							role="button"
							className="btn btn-ghost hover:glass text-background lg:hidden"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h8m-8 6h16"
								/>
							</svg>
						</div>
						<ul
							tabIndex={0}
							className="menu menu-md glass rounded-b-md dropdown-content bg-foreground/80 text-background backdrop-filter backdrop-blur-lg shadow-xl z-50 mt-3 w-52 p-2 "
						>
							<li>
								<a>Home</a>
							</li>
							<li>
								<a>Our Work</a>
							</li>
							<li>
								<a>Our Team</a>
							</li>
						</ul>
					</div>
					<a className="btn btn-ghost hover:glass text-xl text-background">
						Founders Grove
					</a>
				</div>
				<div className="navbar-center hidden lg:flex">
					<ul className="menu menu-horizontal px-1">
						<li>
							<a>Home</a>
						</li>
						<li>
							<a>Our Work</a>
						</li>
						<li>
							<a>Our Team</a>
						</li>
					</ul>
				</div>
				<div className="navbar-end">
					{/* <a className="btn btn-ghost hover:glass btn-md">Contact</a> */}
				</div>
			</div>
		</div>
	);
}
