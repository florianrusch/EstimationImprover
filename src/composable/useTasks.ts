import { ref } from 'vue'
import { v4 as uuidv4 } from 'uuid'
import { useComplexityLevels } from './useComplexityLevels'
import { useUncertaintyLevels } from './useUncertaintyLevels'

const tasks = ref<Task[]>([])

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function useTasks() {
	const newTask = (): Task => {
		const task = new Task(
			uuidv4(),
			'',
			useComplexityLevels().getDefault().value,
			useUncertaintyLevels().getDefault().value,
			0
		)
		tasks.value.push(task)
		return task
	}

	const deleteTask = (task: Task, index: number): void => {
		tasks.value.splice(index, 1)
	}

	const updateTask = (task: Task, index: number): void => {
		tasks.value[index] = task
	}

	const fetchTasks = () => {
		tasks.value = []
		const newTasks = [
			new Task(
				uuidv4(),
				'Test',
				useComplexityLevels().getDefault().value,
				useUncertaintyLevels().getDefault().value,
				0
			),
			new Task(
				uuidv4(),
				'',
				useComplexityLevels().getDefault().value,
				useUncertaintyLevels().getDefault().value,
				0
			),
			new Task(
				uuidv4(),
				'',
				useComplexityLevels().getDefault().value,
				useUncertaintyLevels().getDefault().value,
				0
			),
		]
		tasks.value = newTasks
	}

	return {
		tasks,
		fetchTasks,
		newTask,
		deleteTask,
		updateTask,
	}
}

export class Task {
	id: string
	text: string
	complexity: number
	uncertainty: number
	indeed: number

	constructor(id: string, text: string, complexity: number, uncertainty: number, indeed: number) {
		this.id = id
		this.text = text
		this.complexity = complexity
		this.uncertainty = uncertainty
		this.indeed = indeed
	}
}
