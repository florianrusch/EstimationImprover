import { mount } from '@vue/test-utils'
import Footer from './Footer.vue'

describe('# Footer', () => {
	it('renders correctly', () => {
		// given
		const wrapper = mount(Footer)

		// when
		// then
		expect(wrapper.element).toMatchSnapshot()
	})
})
