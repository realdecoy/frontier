import { shallowMount } from '@vue/test-utils';
import Dummycomponent from './dummy-component.vue';

describe('Dummycomponent.vue', () => {
  it('mounts component and check if component exists', () => {
    // Mount component and check if component exists
    const wrapper = shallowMount(Dummycomponent);

    expect(wrapper.exists()).toEqual(true);
  });
});
