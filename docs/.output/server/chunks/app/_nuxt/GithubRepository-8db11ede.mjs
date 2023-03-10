import { defineComponent, useSlots } from 'vue';
import { u as useAsyncData } from './asyncData-c43d4319.mjs';
import { hash } from 'ohash';
import { u as useGithub } from './useGithub-94614457.mjs';
import './app.config-832f5f68.mjs';
import 'hookable';
import 'unctx';
import 'ufo';
import 'h3';
import '../server.mjs';
import 'ofetch';
import '@unhead/vue';
import '@unhead/dom';
import '@unhead/ssr';
import 'vue-router';
import './useDocus-928368c4.mjs';
import './query-dd064fd9.mjs';
import 'cookie-es';
import 'destr';
import './DocsAsideTree-136bd08b.mjs';
import 'vue/server-renderer';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import './Container-1291608c.mjs';
import 'nanoid';
import 'scule';
import 'defu';
import '../../nitro/config.mjs';

const GithubRepository = defineComponent({
  props: {
    query: {
      type: Object,
      required: false,
      default: () => ({})
    }
  },
  async setup(props) {
    const { fetchRepository } = useGithub();
    const { data: repository, refresh, pending } = await useAsyncData(`github-repository-${hash(props.query)}`, () => fetchRepository(props.query));
    return {
      repository,
      refresh,
      pending
    };
  },
  render({ repository, refresh, pending }) {
    var _a;
    const slots = useSlots();
    return (_a = slots == null ? void 0 : slots.default) == null ? void 0 : _a.call(slots, { repository, refresh, pending });
  }
});

export { GithubRepository as default };
//# sourceMappingURL=GithubRepository-8db11ede.mjs.map
