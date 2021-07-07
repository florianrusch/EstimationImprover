<template>
	<div>
		<select
			class="
				outline-none
				focus:outline-none
				border-b
				px-3
				py-1
				bg-white
				rounded-sm
				flex
				items-center
				min-w-32
			"
			@change="onChange"
		>
			<option
				v-for="ele in options"
				:key="ele.name"
				:value="ele.value"
				:selected="current == ele.value"
			>
				{{ ele.name }}
			</option>
		</select>
	</div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

interface Option {
	name: string
	value: number
}

export default defineComponent({
	props: {
		current: {
			type: Number,
			required: true,
		},
		options: {
			type: Array as PropType<Option[]>,
			required: true,
		},
	},

	emits: ['change'],

	setup(props, { emit }) {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const onChange = (event: any) => {
			emit('change', event.target.value)
		}
		return {
			onChange,
		}
	},
})
</script>
