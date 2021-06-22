enum Complexity {
	SMALL = 1,
	MEDIUM = 3,
	LARGE = 5,
	EXTRA_LARGE = 10,
}

enum UncertaintyLevel {
	LOW = 1.1,
	MODERATE = 1.5,
	HIGH = 2.0,
	EXTREME = 5.0,
}

class Task {
	id: string
	task: string
	complexity: Complexity
	uncertainty: UncertaintyLevel
	indeed: number

	constructor(
		id: string,
		task: string,
		complexity: Complexity,
		uncertainty: UncertaintyLevel,
		indeed: number
	) {
		this.id = id
		this.task = task
		this.complexity = complexity
		this.uncertainty = uncertainty
		this.indeed = indeed
	}
}

export { Complexity, UncertaintyLevel, Task }
