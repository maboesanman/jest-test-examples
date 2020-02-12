const shallowMount = require('@vue/test-utils').shallowMount;
const Greeting = require('../src/Greeting.vue');

let component;
beforeEach(() => {
  component = shallowMount(Greeting, {
    propsData: { name: 'Mason' }
  })
})

describe('Greeting', () => {
  it('renders correctly', () => {
    expect(component.element).toMatchSnapshot();
  });
});