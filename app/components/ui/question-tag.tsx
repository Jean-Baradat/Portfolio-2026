import * as React from "react"
import { Button } from "@/components/ui/button"
import { Magnetic } from "@/components/ui/magnetic"

interface QuestionTagProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	question: string
}

const QuestionTag = ({ question, onClick, ...props }: QuestionTagProps) => {
	const springOptions = { bounce: 0.3 }

	return (
		<Magnetic
			intensity={0.2}
			springOptions={springOptions}
			actionArea="global"
			range={300}
		>
			<Button
				type="button"
				variant={"outline"}
				onClick={onClick}
				{...props}
			>
				<Magnetic
					intensity={0.1}
					springOptions={springOptions}
					actionArea="global"
					range={200}
				>
					<span>{question}</span>
				</Magnetic>
			</Button>
		</Magnetic>
	)
}

export { QuestionTag }
