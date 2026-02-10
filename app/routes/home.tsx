import { useState } from "react"

import { AiPersona } from "@/components/ui/ai-persona"
import {
	Cursor,
	CursorFollow,
	CursorProvider,
} from "@/components/animate-ui/components/animate/cursor"
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler"
import { QuestionCarousel } from "@/components/ui/question-carousel"

const questionCategories = [
	{
		id: "row1",
		questions: [
			"Who are you?",
			"Your skills?",
			"Your background?",
			"Your projects?",
			"Favorite project?",
			"Your tech stack?",
			"Your experience?",
			"Your achievements?",
		],
	},
	{
		id: "row2",
		questions: [
			"Where do you work?",
			"Freelance?",
			"Team player?",
			"Your clients?",
			"Contact you?",
			"Available?",
			"Your LinkedIn?",
			"Your GitHub?",
		],
	},
]

export function meta() {
	return [
		{ title: "Welcome - Jean Baradat" },
		{ name: "description", content: "Mon portfolio" },
	]
}

const Home = () => {
	const [isHovered, setIsHovered] = useState(false)

	return (
		<main className="relative flex h-screen flex-col overflow-hidden">
			<div className="flex justify-end p-5">
				<AnimatedThemeToggler />
			</div>
			<div
				className={`glow-background pointer-events-none absolute inset-0 transition-opacity duration-500 ease-out ${
					isHovered ? "opacity-100" : "opacity-0"
				}`}
			/>

			<div
				className={`pointer-events-none absolute inset-0 transition-all duration-700 ease-out ${
					isHovered ? "scale-100 opacity-100" : "scale-95 opacity-0"
				}`}
			>
				<div
					className={`glow-orb glow-orb--glycine absolute -top-[8%] left-[12%] h-128 w-lg rounded-full blur-[150px] ${
						isHovered ? "animate-float1" : ""
					}`}
				/>
				<div
					className={`glow-orb glow-orb--cumulus absolute top-[18%] -right-[12%] h-112 w-md rounded-full blur-[150px] ${
						isHovered ? "animate-float2" : ""
					}`}
				/>
				<div
					className={`glow-orb glow-orb--emeraude absolute top-[35%] -left-[8%] h-112 w-md rounded-full blur-[150px] ${
						isHovered ? "animate-float2-slow" : ""
					}`}
				/>
				<div
					className={`glow-orb glow-orb--tournesol h-lg absolute right-[25%] -bottom-[12%] w-lg rounded-full blur-[150px] ${
						isHovered ? "animate-float1-slow" : ""
					}`}
				/>
				<div
					className={`glow-orb glow-orb--glycine-light absolute top-[5%] left-[38%] h-96 w-[24rem] rounded-full blur-[130px] ${
						isHovered ? "animate-float3" : ""
					}`}
				/>
				<div
					className={`glow-orb glow-orb--cumulus-light absolute bottom-[8%] left-[5%] h-96 w-[24rem] rounded-full blur-[130px] ${
						isHovered ? "animate-float3-slow" : ""
					}`}
				/>
				<div
					className={`glow-orb glow-orb--emeraude-light absolute top-[28%] right-[18%] h-88 w-88 rounded-full blur-[130px] ${
						isHovered ? "animate-float4" : ""
					}`}
				/>
				<div
					className={`glow-orb glow-orb--tournesol-light absolute right-[8%] bottom-[22%] h-88 w-88 rounded-full blur-[130px] ${
						isHovered ? "animate-float4-fast" : ""
					}`}
				/>
				<div
					className={`glow-orb glow-orb--cumulus absolute -bottom-[10%] left-1/2 h-96 w-[20rem] -translate-x-1/2 rounded-full blur-[150px] ${
						isHovered ? "animate-float3" : ""
					}`}
				/>
			</div>

			<section className="relative z-10 flex h-full grow basis-2/3 items-center justify-center">
				<div className="rounded-full">
					<div
						className="rounded-full [clip-path:circle(50%)]"
						onMouseEnter={() => setIsHovered(true)}
						onMouseLeave={() => setIsHovered(false)}
					>
						<AiPersona />
					</div>
					<CursorProvider>
						<Cursor />
						<CursorFollow>
							<span className="text-sm font-medium whitespace-nowrap">
								Hi, I&apos;m Jean !
							</span>
						</CursorFollow>
					</CursorProvider>
				</div>
			</section>
			<section className="relative z-10 flex h-full grow basis-1/3 flex-col items-center justify-center gap-15 overflow-hidden px-4">
				{questionCategories.map((cat, index) => (
					<QuestionCarousel
						key={cat.id}
						questions={cat.questions}
						direction={index % 2 === 0 ? "forward" : "backward"}
						onQuestionClick={question => console.log("Clicked:", question)}
					/>
				))}
			</section>
		</main>
	)
}

export default Home
