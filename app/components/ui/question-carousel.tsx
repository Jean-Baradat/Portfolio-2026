import AutoScroll from "embla-carousel-auto-scroll"

import { cn } from "@/lib/utils"
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from "@/components/ui/carousel"
import { ProgressiveBlur } from "@/components/ui/progressive-blur"
import { QuestionTag } from "@/components/ui/question-tag"
import { useMemo } from "react"

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

	const duplicatedQuestions = [...questions, ...questions, ...questions]

	const getSpace = (index: number) => ((index * 7 + 3) % 20) + 1

	return (
		<>
			<Carousel
				opts={{
					loop: true,
					dragFree: true,
					align: "start",
				}}
				plugins={plugins}
				className={cn("w-full", className)}
				{...props}
			>
				<CarouselContent className="gap-2 p-5">
					{duplicatedQuestions.map((question, index) => (
						<CarouselItem
							key={question}
							className="basis-auto"
							style={{ marginRight: `${getSpace(index) * 4}px` }}
						>
							<QuestionTag
								question={question}
								onClick={() => onQuestionClick?.(question)}
							/>
						</CarouselItem>
					))}
				</CarouselContent>
			</Carousel>
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
		</>
	)
}

export { QuestionCarousel }
