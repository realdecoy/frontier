import __nuxt_component_0 from './TabsHeader-c9b56dab.mjs';
import { u as useColorMode } from '../server.mjs';
import { useSSRContext, defineComponent, ref, computed, mergeProps, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from './Container-1291608c.mjs';
import 'nanoid';
import 'scule';
import 'defu';
import 'ofetch';
import './app.config-832f5f68.mjs';
import 'hookable';
import 'unctx';
import 'ufo';
import 'h3';
import '@unhead/vue';
import '@unhead/dom';
import '@unhead/ssr';
import 'vue-router';
import './useDocus-928368c4.mjs';
import 'ohash';
import './query-dd064fd9.mjs';
import 'cookie-es';
import 'destr';
import './DocsAsideTree-136bd08b.mjs';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import '../../nitro/config.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Sandbox",
  __ssrInlineRender: true,
  props: {
    src: {
      type: String,
      default: ""
    },
    repo: {
      type: String,
      default: ""
    },
    branch: {
      type: String,
      default: ""
    },
    dir: {
      type: String,
      default: ""
    },
    file: {
      type: String,
      default: "app.vue"
    }
  },
  setup(__props) {
    const props = __props;
    const colorMode = useColorMode();
    const providers = {
      CodeSandBox: () => `https://codesandbox.io/embed/github/${props.repo}/tree/${props.branch}/${props.dir}?hidenavigation=1&theme=${colorMode.value}`,
      StackBlitz: () => `https://stackblitz.com/github/${props.repo}/tree/${props.branch}/${props.dir}?embed=1&file=${props.file}&theme=${colorMode.value}`
    };
    const providersTabs = Object.keys(providers).map((p) => ({ label: p }));
    const activeTabIndex = ref(-1);
    const tabs = ref();
    const url = ref("");
    const provider = ref("");
    const changeProvider = (value) => {
      provider.value = value;
      url.value = props.src || providers[provider.value]();
      localStorage.setItem("docus_sandbox", value);
    };
    computed(() => {
      var _a;
      return (_a = url.value) == null ? void 0 : _a.replace("?embed=1&", "?").replace("/embed/", "/s/");
    });
    const updateTab = (i) => {
      activeTabIndex.value = i;
      changeProvider(providersTabs[i].label);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TabsHeader = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "sandbox" }, _attrs))} data-v-90b7615f>`);
      if (!__props.src) {
        _push(ssrRenderComponent(_component_TabsHeader, {
          ref_key: "tabs",
          ref: tabs,
          "active-tab-index": unref(activeTabIndex),
          tabs: unref(providersTabs),
          "onUpdate:activeTabIndex": updateTab
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(url)) {
        _push(`<iframe${ssrRenderAttr("src", unref(url))} title="Sandbox editor" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin" data-v-90b7615f></iframe>`);
      } else {
        _push(`<span data-v-90b7615f>Loading Sandbox...</span>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/elements/components/globals/Sandbox.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Sandbox = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-90b7615f"]]);

export { Sandbox as default };
//# sourceMappingURL=Sandbox-3e5bdd00.mjs.map
