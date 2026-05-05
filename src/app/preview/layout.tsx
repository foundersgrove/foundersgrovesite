export default async function PreviewLayout({ children }: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="">
			{children}
		</div>
	);
}
