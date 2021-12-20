import { v4 as uuidv4 } from 'uuid'
import { useComplexityLevels } from './useComplexityLevels'
import { useUncertaintyLevels } from './useUncertaintyLevels'
import { useStorage } from '@vueuse/core'
import { ref } from 'vue'

const storage = useStorage('tasks', { task: [] as Task[] })

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

		storage.value.task.push(task)
		return task
	}

	const deleteTask = (index: number): void => {
		storage.value.task.splice(index, 1)
	}

	const updateTask = (task: Task, index: number): void => {
		storage.value.task[index] = task
	}

	return {
		tasks: storage,
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
