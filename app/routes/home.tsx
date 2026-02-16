import { useState } from "react"

import { AiPersona } from "@/components/ui/ai-persona"
import {
	Cursor,
	CursorFollow,
	CursorProvider,
} from "@/components/animate-ui/components/animate/cursor"
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler"
import { QuestionCarousel } from "@/components/ui/question-carousel"
import { ProgressiveBlur } from "@/components/ui/progressive-blur"

const questionCategories = [
	{
		id: "row1",
		questions: [
			"Who are you?",
			"Your skills?",
			"Your projects?",
			"Your tech stack?",
			"Available?",
			"Your LinkedIn?",
		],
		speed: 0.9,
		direction: "forward" as const,
	},
	{
		id: "row2",
		questions: [
			"Your background?",
			"Freelance?",
			"Contact you?",
			"Your achievements?",
			"Your GitHub?",
			"Your clients?",
		],
		speed: 0.8,
		direction: "backward" as const,
	},
	{
		id: "row3",
		questions: [
			"Favorite project?",
			"Team player?",
			"Where do you work?",
			"Your experience?",
			"Your projects?",
			"Your skills?",
		],
		speed: 0.6,
		direction: "forward" as const,
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
			<div
				className={`pointer-events-none absolute z-30 transition-[opacity,inset,border-radius,box-shadow,border-color] ${
					isHovered
						? "inset-5 rounded-2xl opacity-100 shadow-[inset_0_0_40px_8px_rgba(0,0,0,0.15)] duration-500 ease-[cubic-bezier(0.25,0.8,0.25,1)] dark:shadow-[inset_0_0_40px_8px_rgba(0,0,0,0.4)]"
						: "inset-0 rounded-none opacity-0 delay-200 duration-1200 ease-[cubic-bezier(0.4,0.15,0.2,1)]"
				}`}
			>
				<div className="screen-border-glow absolute -inset-0.5 overflow-hidden rounded-[inherit]">
					<div className="screen-border-glow__gradient" />
				</div>
			</div>

			<div
				className={`flex h-full flex-col transition-transform ${
					isHovered
						? "scale-[0.98] duration-500 ease-[cubic-bezier(0.25,0.8,0.25,1)]"
						: "scale-100 delay-200 duration-1200 ease-[cubic-bezier(0.4,0.15,0.2,1)]"
				}`}
			>
				<div className="flex h-10 items-center justify-center">
					<AnimatedThemeToggler
						className={` ${isHovered ? "opacity-0 duration-500 ease-[cubic-bezier(0.25,0.8,0.25,1)]" : "opacity-100 transition-opacity delay-800 duration-1200 ease-[cubic-bezier(0.4,0.15,0.2,1)]"}`}
					/>
				</div>

				<section className="relative z-10 flex h-full grow basis-2/3 items-center justify-center">
					<div className="flex flex-col items-center">
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
										<br />
										<br />
										Bienvenue sur mon site Web.
										<br />
										Vous pouvez cliquer sur mon logo <br /> ou sur une des
										questions ci-après.
										<br />
										<br />
										Allons-y 😁
									</span>
								</CursorFollow>
							</CursorProvider>
						</div>
						<p
							className={`text-muted-foreground text-center text-xs italic transition-opacity duration-200 ${
								isHovered ? "opacity-0" : "opacity-100"
							}`}
						>
							Hover me
						</p>
					</div>
				</section>
				<section className="relative z-20 flex h-full grow basis-1/3 flex-col items-center justify-center gap-3 overflow-x-clip">
					{questionCategories.map(cat => (
						<QuestionCarousel
							key={cat.id}
							questions={cat.questions}
							direction={cat.direction}
							speed={cat.speed}
							onQuestionClick={question => console.log("Clicked:", question)}
						/>
					))}
					<ProgressiveBlur
						className="pointer-events-none absolute -top-1/6 left-0 h-[calc(100%+calc(1/6*100%))] w-100"
						direction="left"
						blurIntensity={1}
					/>
					<ProgressiveBlur
						className="pointer-events-none absolute -top-1/6 right-0 h-[calc(100%+calc(1/6*100%))] w-100"
						direction="right"
						blurIntensity={1}
					/>
				</section>
			</div>
		</main>
	)
}

export default Home
