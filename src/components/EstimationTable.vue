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
				</tr>
			</thead>
			<tbody class="text-gray-700">
				<Task v-for="task in tasks" :key="task.id" :task="task"></Task>
			</tbody>
		</table>
	</div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import Task from '@/components/Task.vue'
import { Task as TaskModel, Complexity, UncertaintyLevel } from '@/models/Task'

export default defineComponent({
	components: {
		Task: Task,
	},
	setup() {
		var tasks = reactive([
			new TaskModel(
				'123',
				'This is a simple task',
				Complexity.MEDIUM,
				UncertaintyLevel.MODERATE,
				0
			),
			new TaskModel(
				'123',
				'This is a simple task',
				Complexity.MEDIUM,
				UncertaintyLevel.MODERATE,
				0
			),
			new TaskModel(
				'123',
				'This is a simple task',
				Complexity.MEDIUM,
				UncertaintyLevel.MODERATE,
				0
			),
			new TaskModel(
				'123',
				'This is a simple task',
				Complexity.MEDIUM,
				UncertaintyLevel.MODERATE,
				0
			),
			new TaskModel(
				'123',
				'This is a simple task',
				Complexity.MEDIUM,
				UncertaintyLevel.MODERATE,
				0
			),
			new TaskModel(
				'123',
				'This is a simple task',
				Complexity.MEDIUM,
				UncertaintyLevel.MODERATE,
				0
			),
			new TaskModel(
				'123',
				'This is a simple task',
				Complexity.MEDIUM,
				UncertaintyLevel.MODERATE,
				0
			),
			new TaskModel(
				'123',
				'This is a simple task',
				Complexity.MEDIUM,
				UncertaintyLevel.MODERATE,
				0
			),
			new TaskModel(
				'123',
				'This is a simple task',
				Complexity.MEDIUM,
				UncertaintyLevel.MODERATE,
				0
			),
		])
		return {
			tasks,
		}
	},
})
</script>
