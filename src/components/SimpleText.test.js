
import { mount } from 'avoriaz'
import { expect } from 'chai'

import ST from './SimpleText.vue'

describe('SimpleText.vue', function() {
  it('renders a div with class st-class', function() {
    var wrapper = mount(ST)
    expect(wrapper.is('div')).to.equal(true)
    expect(wrapper.hasClass('st-class')).to.equal(true)
  })
})
