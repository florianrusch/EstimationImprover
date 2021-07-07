import { reactive } from 'vue'

interface Complexity {
	name: string
	value: number
}

const defaultComplexityLevel = 'SMALL'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function useComplexityLevels() {
	const levels = reactive([
		{ name: 'SMALL', value: 1 },
		{ name: 'MEDIUM', value: 3 },
		{ name: 'LARGE', value: 5 },
		{ name: 'EXTRA_LARGE', value: 10 },
	])

	const getComplexity = (value: number): Complexity | undefined => {
		return levels.find((x) => x.value == value)
	}

	// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
	const getDefault = (): Complexity => levels.find((x) => x.name == defaultComplexityLevel)!

	return {
		levels,
		getComplexity,
		getDefault,
	}
}
