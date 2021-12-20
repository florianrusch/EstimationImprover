<template>
	<div>
		<table class="min-w-full bg-white">
			<thead class="bg-gray-800 text-white">
				<tr>
					<th class="text-left py-3 px-4 uppercase font-semibold text-sm">Task</th>
					<th class="text-left py-3 px-4 uppercase font-semibold text-sm">Complexity</th>
					<th class="text-left py-3 px-4 uppercase font-semibold text-sm">Uncertainty Level</th>
					<th class="text-left py-3 px-4 uppercase font-semibold text-sm">Expected</th>
					<th class="text-left py-3 px-4 uppercase font-semibold text-sm">Worst-case</th>
					<th class="text-left py-3 px-4 uppercase font-semibold text-sm">Indeed</th>
					<th></th>
				</tr>
			</thead>
			<tbody class="text-gray-700">
				<Task
					v-for="(task, index) in tasks"
					:key="task.id"
					:task="task"
					@taskUpdate="(changedTask) => updateTask(changedTask, index)"
					@taskDelete="(task) => deleteTask(task)"
				></Task>
			</tbody>
		</table>
		<button @click="newTask()"><Plus class="h-3 w-3 inline mb-0.5 mr-1" /> New Task</button>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Task from '@/components/Task.vue'
import Plus from '@/components/Icons/Plus.vue'
import { useTasks } from '@/composable/useTasks'

export default defineComponent({
	components: {
		Task: Task,
		Plus: Plus,
	},

	setup() {
		const { tasks, newTask, updateTask, deleteTask } = useTasks()

		return {
			tasks,
			newTask,
			updateTask,
			deleteTask,
		}
	},
})
</script>
