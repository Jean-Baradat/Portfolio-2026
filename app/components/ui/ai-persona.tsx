import { useEffect } from "react"

import { cn } from "@/lib/utils"

export interface AiPersonaProps {
	className?: string
}

export const AiPersona = ({ className }: AiPersonaProps) => {
	useEffect(() => {
		import("hover-tilt/web-component")
	}, [])

	return (
		<hover-tilt
			className={cn("logo-holo rounded-full", className)}
			tilt-factor="1"
			scale-factor="0.8"
			shadow
			glare-intensity="0.4"
			blend-mode="multiply"
			glare-mask="url(https://cdn.jeanbaradat.fr/portfolio-assets/vmaxbg.jpg)"
			glare-mask-mode="luminance"
		>
			<img
				className="h-auto w-50 rounded-full dark:invert"
				src="https://cdn.jeanbaradat.fr/portfolio-assets/logo-jean.svg"
				alt="Logo Jean"
			/>
		</hover-tilt>
	)
}
