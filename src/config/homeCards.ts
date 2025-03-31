export interface HomeCardConfig {
	title: string;
	description: string;
	btn?: string | null;
	btnLink?: string;
	onClick?: () => void;
	isHeader?: boolean;
	subtitle?: string;
}

export const homeCards: HomeCardConfig[] = [
	{
		title: "Founders Grove",
		description: "Lets Bring Something to Life",
		subtitle: "plant a seed below",
		isHeader: true,
		btn: null,
		btnLink: undefined,
	},
	{
		title: "What do we do? 🦾",
		description: `We are a team of developers, designers, and project managers that
			are dedicated to bringing ideas to life. We specialize in creating
			websites and web applications that are tailored to your needs.`,
		btn: null,
		btnLink: undefined,
	},
	{
		title: "What have we built? 🛠️",
		description: `We have built a variety of websites and web applications for a
			diverse range of clients. Our projects include e-commerce sites,
			blogs, and custom web applications.`,
		btn: "View Our Work",
		btnLink: "work",
	},
	{
		title: "Why Us? 🌱",
		description: `We are a team of experienced professionals who are passionate
			about creating high-quality websites and web applications. We are
			committed to providing our clients with the best possible service
			and delivering projects on time and on budget.`,
		btn: "Meet Our Team",
		btnLink: "team",
	},
];