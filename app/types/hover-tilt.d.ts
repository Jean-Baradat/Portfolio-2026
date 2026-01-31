import type { HTMLAttributes } from "react"

declare module "react" {
	namespace JSX {
		interface IntrinsicElements {
			"hover-tilt": HTMLAttributes<HTMLElement> & {
				"tilt-factor"?: number | string
				"scale-factor"?: number | string
				"border-radius"?: number | string
				shadow?: boolean | string
				"shadow-color"?: string
				"shadow-spread"?: number | string
				glare?: boolean | string
				"glare-color"?: string
				"glare-opacity"?: number | string
				"glare-intensity"?: number | string
				"glare-mask"?: string
				"glare-mask-mode"?: string
				"blend-mode"?: string
				reverse?: boolean | string
				perspective?: number | string
				disabled?: boolean | string
				children?: React.ReactNode
			}
		}
	}
}
