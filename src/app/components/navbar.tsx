export default function NavBar({}) {
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
			<div className="navbar absolute top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-md shadow-lg">
				<div className="navbar-start flex-1">
					<div className="dropdown">
						<div
							tabIndex={0}
							role="button"
							className="btn btn-ghost lg:hidden text-white hover:bg-white/10 mr-1"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
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
							className="menu menu-md dropdown-content mt-3 z-[1] p-2 shadow-lg bg-black/80 backdrop-blur-md rounded-box w-52"
						>
							<li><a className="text-white hover:text-white/80" href="/">Home</a></li>
							<li><a className="text-white hover:text-white/80" href="work">Our Work</a></li>
							<li><a className="text-white hover:text-white/80" href="team">Our Team</a></li>
						</ul>
					</div>
					<a
						className="flex items-center gap-2 sm:gap-3 px-2 sm:px-3 py-2 hover:bg-white/10 transition-colors min-w-0"
						href="/"
						aria-label="Founders Grove Logo and Homepage Link"
					>
						<div className="bg-stone-100 rounded-full p-1 sm:p-1.5 overflow-hidden flex-shrink-0">
							<img src="/logo.png" alt="" className="h-8 w-8 sm:h-10 sm:w-10 object-contain" />
						</div>
						<span className="text-lg sm:text-xl md:text-2xl font-heading text-white truncate">Founders Grove</span>
					</a>
				</div>
				<div className="navbar-end hidden lg:flex">
					<ul className="menu menu-horizontal px-1 text-white text-sm font-medium tracking-wide">
						<li><a className="hover:bg-white/10" href="/">Home</a></li>
						<li><a className="hover:bg-white/10" href="work">Our Work</a></li>
						<li><a className="hover:bg-white/10" href="team">Our Team</a></li>
					</ul>
				</div>
			</div>
		</div>
	);
}
