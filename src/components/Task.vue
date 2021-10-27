<template>
	<tr>
		<td class="text-left py-3 px-4">
			<TextInput :value="task.text" v-on:change="onChangeText" />
		</td>
		<td class="text-left py-3 px-4">
			<Select
				:current="task.complexity"
				:options="complexityLevels"
				v-on:change="onChangeComplexityLevel"
			/>
		</td>
		<td class="text-left py-3 px-4">
			<Select
				:current="task.uncertainty"
				:options="uncertaintyLevels"
				v-on:change="onChangeUncertaintyLevel"
			/>
		</td>
		<!-- <td class="text-left py-3 px-4">{{ task.complexity }}</td> -->
		<td class="text-left py-3 px-4">{{ min }} days</td>
		<td class="text-left py-3 px-4">{{ max }} days</td>
		<td class="text-left py-3 px-4">{{ task.indeed }} days</td>
		<td class="text-right py-3 px-4">
			<a @click="deleteTask()" title="Delete Task">
				<Trash class="w-4 h-4" />
			</a>
		</td>
	</tr>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, toRefs } from 'vue'
import { Task as TaskModel } from '@/composable/useTasks'
import TextInput from '@/components/Form/TextInput.vue'
import Select from '@/components/Form/Select.vue'
import Trash from '@/components/Icons/Trash.vue'
import { useUncertaintyLevels } from '@/composable/useUncertaintyLevels'
import { useComplexityLevels } from '@/composable/useComplexityLevels'

export default defineComponent({
	components: {
		TextInput: TextInput,
		Select: Select,
		Trash: Trash,
	},

	props: {
		task: {
			type: Object as PropType<TaskModel>,
			required: true,
		},
	},

	emits: ['taskUpdate', 'taskDelete'],

	setup(props, { emit }) {
		const { task } = toRefs(props)
		const { levels: uncertaintyLevels } = useUncertaintyLevels()
		const { levels: complexityLevels } = useComplexityLevels()
		const min = computed(() => task.value.complexity)
		const max = computed(() => task.value.complexity * task.value.uncertainty)

		const onChangeText = (value: string) => {
			task.value.text = value

			emit('taskUpdate', task.value)
		}

		const onChangeComplexityLevel = (value: string) => {
			task.value.complexity = parseFloat(value)

			emit('taskUpdate', task.value)
		}

		const onChangeUncertaintyLevel = (value: string) => {
			task.value.uncertainty = parseFloat(value)

			emit('taskUpdate', task.value)
		}

		const deleteTask = () => {
			emit('taskDelete', task.value)
		}

		return {
			min,
			max,
			uncertaintyLevels,
			complexityLevels,
			onChangeText,
			onChangeComplexityLevel,
			onChangeUncertaintyLevel,
			deleteTask,
		}
	},
})
</script>
