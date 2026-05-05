import Image from "next/image";

export default async function SiteBackground() {
  return (
    <div className="back">
			<Image
				src="/imgs/RedwoodBackground.jpg"
				alt="Redwood Background"
				fill
				priority
				sizes="100vw"
				className="object-cover object-center"
				quality={75}
			/>
			  <div className="absolute inset-0 bg-black/20 z-50" />
		</div>
  )
}
