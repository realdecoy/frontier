import { defineComponent, toRef, watch, useSlots } from 'vue';
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

const GithubFileContributors = defineComponent({
  props: {
    query: {
      type: Object,
      required: false,
      default: () => ({})
    }
  },
  async setup(props) {
    const source = toRef(props.query, "source");
    const { fetchFileContributors } = useGithub();
    watch(source, () => {
      if (refresh) {
        refresh();
      }
    });
    const { data: contributors, refresh, pending } = await useAsyncData(`github-file-contributors-${hash(props.query)}`, () => fetchFileContributors(props.query));
    return {
      contributors,
      refresh,
      pending
    };
  },
  render({ contributors, refresh, pending }) {
    var _a;
    const slots = useSlots();
    return (_a = slots == null ? void 0 : slots.default) == null ? void 0 : _a.call(slots, { contributors, refresh, pending });
  }
});

export { GithubFileContributors as default };
//# sourceMappingURL=GithubFileContributors-285e4522.mjs.map
