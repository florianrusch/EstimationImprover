import { DOMWrapper, mount } from '@vue/test-utils'
import TextInput from './TextInput.vue'

describe('# TextInput', () => {
	it('emits change event with new value', async () => {
		// given
		const wrapper = mount(TextInput, {
			props: { value: '' },
		})
		const inputElement = wrapper.find('input') as DOMWrapper<HTMLInputElement>
		const newValue = 'some texts ...'

		// when
		inputElement.element.value = newValue
		await inputElement.trigger('focusout')

		// then
		const events = wrapper.emitted('change')
		expect(events).toHaveLength(1)
		expect(events?.[0]).toEqual([newValue])
	})

	it('renders correctly w/o init value', () => {
		// given
		const wrapper = mount(TextInput)

		// when
		// then
		expect(wrapper.element).toMatchSnapshot()
	})

	it('renders correctly w/ init value', () => {
		// given
		const wrapper = mount(TextInput, {
			props: { value: 'Test value' },
		})

		// when
		// then
		expect(wrapper.element).toMatchSnapshot()
	})
})
