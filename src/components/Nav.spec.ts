import { mount } from '@vue/test-utils'
import Nav from './Nav.vue'

describe('# Nav', () => {
	it('renders correctly', () => {
		// given
		const wrapper = mount(Nav)

		// when
		// then
		expect(wrapper.element).toMatchSnapshot()
	})
})
