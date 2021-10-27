import { mount } from '@vue/test-utils'
import Plus from './Plus.vue'

describe('# Plus', () => {
	it('renders correctly', () => {
		// given
		const wrapper = mount(Plus)

		// when
		// then
		expect(wrapper.element).toMatchSnapshot()
	})
})
