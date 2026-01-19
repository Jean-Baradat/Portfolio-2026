import { reactRouter } from "@react-router/dev/vite"
import tailwindcss from "@tailwindcss/vite"
import { fileURLToPath } from "node:url"
import { defineConfig } from "vite"
import tsconfigPaths from "vite-tsconfig-paths"

export default defineConfig({
	plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
	resolve: {
		// If you add an alias, also add it to tsconfig
		alias: {
			"@": fileURLToPath(new URL("./app", import.meta.url)),
		},
	},
})
