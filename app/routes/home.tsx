import { Welcome } from "@/welcome/welcome"

export function meta() {
	return [
		{ title: "New React Router App" },
		{ name: "description", content: "Welcome to React Router!" },
	]
}

const Home = () => {
	return <Welcome />
}

export default Home
