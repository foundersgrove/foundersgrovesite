export default async function PreviewLayout({ children }: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="top-0 left-0 right-0 bottom-0 position-fixed">
			{children}
		</div>
	);
}
