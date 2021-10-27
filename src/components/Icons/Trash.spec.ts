import { mount } from '@vue/test-utils'
import Trash from './Trash.vue'

describe('# Trash', () => {
	it('renders correctly', () => {
		// given
		const wrapper = mount(Trash)

		// when
		// then
		expect(wrapper.element).toMatchSnapshot()
	})
})
