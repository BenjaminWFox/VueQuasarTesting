import { mount } from 'avoriaz'
import { expect } from 'chai'

import StandardPage from './StandardPage.vue'

describe('StandardPage.vue', function() {
  it('renders a div with class layout', function() {
    var wrapper = mount(StandardPage)
    expect(wrapper.is('div')).to.equal(true)
    // expect(wrapper.hasClass('bar')).to.equal(true)
  })
})
