import { DOMWrapper, mount } from '@vue/test-utils'
import Select from './Select.vue'

const mockOptions = [
	{ name: 'Test1', value: 0 },
	{ name: 'Test2', value: 1 },
]

describe('# Select', () => {
	it('renders correctly w/o init value', () => {
		// given
		const wrapper = mount(Select, {
			props: {
				options: mockOptions,
			},
		})

		// when
		// then
		expect(wrapper.element).toMatchSnapshot()
	})

	it('renders correctly w/ init value', () => {
		// given
		const wrapper = mount(Select, {
			props: {
				current: 0,
				options: mockOptions,
			},
		})

		// when
		// then
		expect(wrapper.element).toMatchSnapshot()
	})

	it('emits change event with new value', async () => {
		// given
		const wrapper = mount(Select, {
			props: {
				current: 0,
				options: mockOptions,
			},
		})

		// when
		await (wrapper.find('select') as DOMWrapper<HTMLSelectElement>).setValue(mockOptions[1].value)

		// then
		const events = wrapper.emitted('change')
		expect(events).toHaveLength(1)
		expect(events?.[0]).toEqual([mockOptions[1].value.toString()])
	})
})
