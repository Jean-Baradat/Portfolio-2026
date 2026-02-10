import * as React from "react"
import useEmblaCarousel, {
	type UseEmblaCarouselType,
} from "embla-carousel-react"

import { cn } from "@/lib/utils"

type CarouselApi = UseEmblaCarouselType[1]
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>
type CarouselOptions = UseCarouselParameters[0]
type CarouselPlugin = UseCarouselParameters[1]

type CarouselContextProps = {
	carouselRef: ReturnType<typeof useEmblaCarousel>[0]
	api: CarouselApi
}

const CarouselContext = React.createContext<CarouselContextProps | null>(null)

const useCarousel = () => {
	const context = React.useContext(CarouselContext)

	if (!context) {
		throw new Error("useCarousel must be used within a <Carousel />")
	}

	return context
}

interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {
	opts?: CarouselOptions
	plugins?: CarouselPlugin
	setApi?: (api: CarouselApi) => void
}

const Carousel = ({
	opts,
	plugins,
	setApi,
	className,
	children,
	...props
}: CarouselProps) => {
	const [carouselRef, api] = useEmblaCarousel(opts, plugins)

	React.useEffect(() => {
		if (!api || !setApi) return
		setApi(api)
	}, [api, setApi])

	return (
		<CarouselContext.Provider value={{ carouselRef, api }}>
			<div
				data-slot="carousel"
				className={cn("relative", className)}
				{...props}
			>
				{children}
			</div>
		</CarouselContext.Provider>
	)
}

const CarouselContent = ({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) => {
	const { carouselRef } = useCarousel()

	return (
		<div
			ref={carouselRef}
			className="overflow-hidden"
		>
			<div
				data-slot="carousel-content"
				className={cn("flex", className)}
				{...props}
			/>
		</div>
	)
}

const CarouselItem = ({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) => {
	return (
		<div
			data-slot="carousel-item"
			className={cn("min-w-0 shrink-0 grow-0", className)}
			{...props}
		/>
	)
}

export {
	type CarouselApi,
	Carousel,
	CarouselContent,
	CarouselItem,
	useCarousel,
}
