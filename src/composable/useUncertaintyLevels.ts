import { reactive } from 'vue'

interface UncertaintyLevel {
	name: string
	value: number
}

const defaultUncertaintyLevel = 'low'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function useUncertaintyLevels() {
	const levels = reactive([
		{ name: 'low', value: 1.1 },
		{ name: 'moderate', value: 1.5 },
		{ name: 'high', value: 2.0 },
		{ name: 'extreme', value: 5.0 },
	])

	const getUncertaintyLevel = (value: number): UncertaintyLevel | undefined => {
		return levels.find((x) => x.value == value)
	}

	// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
	const getDefault = (): UncertaintyLevel => levels.find((x) => x.name == defaultUncertaintyLevel)!

	return {
		levels,
		getUncertaintyLevel,
		getDefault,
	}
}
