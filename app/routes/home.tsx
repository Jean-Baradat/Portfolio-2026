import { useEffect } from "react"

export function meta() {
	return [
		{ title: "Portfolio" },
		{ name: "description", content: "Mon portfolio" },
	]
}

const Home = () => {
	useEffect(() => {
		import("hover-tilt/web-component")
	}, [])

	return (
		<main className="flex h-screen flex-col">
			<section className="flex h-full grow basis-2/3 items-center justify-center">
				<hover-tilt
					tilt-factor="1.5"
					scale-factor="1.1"
					shadow="true"
					glare-intensity="0.4"
					blend-mode="multiply"
					glare-mask="url(https://raw.githubusercontent.com/simeydotme/pokemon-cards-css/refs/heads/main/public/img/vmaxbg.jpg)"
					glare-mask-mode="luminance"
					className="logo-holo rounded-full"
				>
					<img
						className="h-auto w-80 rounded-full"
						src="/logo1.png"
						alt="..."
					/>
				</hover-tilt>
			</section>
			<section className="flex h-full grow basis-1/3 items-center justify-center">
				<p className="text-xl font-semibold">🚧 Work in progress 🚧</p>
			</section>
		</main>
	)
}

export default Home
