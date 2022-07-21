import { shallowMount } from '@vue/test-utils';
import Component from './component.vue';

describe('Component.vue', () => {
  it('mounts component and check if component exists', () => {
    // Mount component and check if component exists
    const wrapper = shallowMount(Component);

    expect(wrapper.exists()).toEqual(true);
  });
});
