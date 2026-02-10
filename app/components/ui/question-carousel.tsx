import { useMemo } from "react"
import useEmblaCarousel from "embla-carousel-react"
import AutoScroll from "embla-carousel-auto-scroll"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Magnetic } from "@/components/ui/magnetic"
import { ProgressiveBlur } from "@/components/ui/progressive-blur"

interface QuestionCarouselProps extends Omit<
	React.HTMLAttributes<HTMLDivElement>,
	"onClick"
> {
	questions: string[]
	direction?: "forward" | "backward"
	speed?: number
	onQuestionClick?: (question: string) => void
}

const QuestionCarousel = ({
	questions,
	direction = "forward",
	speed = 0.5,
	onQuestionClick,
	className,
	...props
}: QuestionCarouselProps) => {
	const plugins = useMemo(
		() => [
			AutoScroll({
				speed,
				direction,
				stopOnInteraction: false,
				stopOnMouseEnter: true,
			}),
		],
		[speed, direction],
	)

	const [emblaRef] = useEmblaCarousel(
		{ loop: true, dragFree: true, align: "center" },
		plugins,
	)

	const duplicatedQuestions = [...questions, ...questions, ...questions]

	const getSpace = (index: number) => ((index * 7 + 3) % 20) + 1

	return (
		<div
			className={cn("relative w-full", className)}
			{...props}
		>
			<div
				className="overflow-hidden"
				ref={emblaRef}
			>
				<div className="flex gap-2 p-5">
					{duplicatedQuestions.map((question, index) => (
						<div
							key={`${question}-copy-${Math.floor(index / questions.length)}`}
							className="min-w-0 shrink-0 grow-0 basis-auto"
							style={{ marginRight: `${getSpace(index) * 4}px` }}
						>
							<Magnetic
								intensity={0.2}
								springOptions={{ bounce: 0.3 }}
								actionArea="global"
								range={300}
							>
								<Button
									type="button"
									variant="outline"
									onClick={() => onQuestionClick?.(question)}
								>
									<Magnetic
										intensity={0.1}
										springOptions={{ bounce: 0.3 }}
										actionArea="global"
										range={200}
									>
										<span>{question}</span>
									</Magnetic>
								</Button>
							</Magnetic>
						</div>
					))}
				</div>
			</div>
			<ProgressiveBlur
				className="pointer-events-none absolute top-0 left-0 h-full w-50"
				direction="left"
				blurIntensity={1}
			/>
			<ProgressiveBlur
				className="pointer-events-none absolute top-0 right-0 h-full w-50"
				direction="right"
				blurIntensity={1}
			/>
		</div>
	)
}

export { QuestionCarousel }
