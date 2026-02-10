import { useEffect, useMemo, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import AutoScroll from "embla-carousel-auto-scroll"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Magnetic } from "@/components/ui/magnetic"

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

	const [offsets, setOffsets] = useState(() =>
		duplicatedQuestions.map(() => ({ space: 70, vertical: 0 })),
	)

	useEffect(() => {
		setOffsets(
			duplicatedQuestions.map(() => ({
				space: Math.random() * 120 + 20,
				vertical: Math.random() * 25 - 12,
			})),
		)
	}, [questions.length])

	return (
		<div
			className={cn("relative w-full", className)}
			{...props}
		>
			<div
				className="overflow-x-clip"
				ref={emblaRef}
			>
				<div className="flex items-center gap-2 py-3">
					{duplicatedQuestions.map((question, index) => (
						<div
							key={`${question}-copy-${Math.floor(index / questions.length)}`}
							className="min-w-0 shrink-0 grow-0 basis-auto"
							style={{
								marginRight: `${offsets[index].space}px`,
								marginTop: `${offsets[index].vertical}px`,
							}}
						>
							<Magnetic
								intensity={0.3}
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
		</div>
	)
}

export { QuestionCarousel }
