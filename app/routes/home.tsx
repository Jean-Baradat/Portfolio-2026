import { ComponentExample } from "@/components/component-example"

export function meta() {
	return [
		{ title: "Portfolio" },
		{ name: "description", content: "Mon portfolio" },
	]
}

const Home = () => {
	return <ComponentExample />
}

export default Home
