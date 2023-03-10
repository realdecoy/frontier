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

const GithubCommits = defineComponent({
  props: {
    query: {
      type: Object,
      required: false,
      default: () => ({})
    }
  },
  async setup(props) {
    const { fetchCommits } = useGithub();
    const { data: commits, pending, refresh } = await useAsyncData(`github-commits-${hash(props.query)}`, () => fetchCommits(props.query));
    return {
      commits,
      pending,
      refresh
    };
  },
  render({ commits, pending, refresh }) {
    var _a;
    const slots = useSlots();
    return (_a = slots == null ? void 0 : slots.default) == null ? void 0 : _a.call(slots, { commits, pending, refresh });
  }
});

export { GithubCommits as default };
//# sourceMappingURL=GithubCommits-b7b81c66.mjs.map
