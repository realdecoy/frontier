import { shallowMount } from '@vue/test-utils';
import HelloWorld from './hello-world.vue';

describe('HelloWorld.vue', () => {
  it('mounts component and check if component exists', () => {
    // Mount component and check if component exists
    const wrapper = shallowMount(HelloWorld);

    expect(wrapper.exists()).toEqual(true);
  });
});
