import { _ as __nuxt_component_0$1 } from './DocsAsideTree-136bd08b.mjs';
import { defineComponent, ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { u as useClipboard } from './index-1624a23e.mjs';
import 'ufo';
import './app.config-832f5f68.mjs';
import 'hookable';
import 'unctx';
import 'h3';
import './useDocus-928368c4.mjs';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import './Container-1291608c.mjs';
import 'nanoid';
import 'scule';
import 'defu';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "CopyButton",
  __ssrInlineRender: true,
  props: {
    content: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    useClipboard();
    const state = ref("init");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0$1;
      _push(`<button${ssrRenderAttrs(mergeProps({ class: "copy rounded-lg bg-gray-800 px-2 py-2 font-mono text-xs font-semibold leading-none text-gray-400 focus:outline-none dark:bg-black" }, _attrs))}>`);
      if (unref(state) === "copied") {
        _push(ssrRenderComponent(_component_Icon, {
          name: "fa-check",
          class: "h-4 w-4"
        }, null, _parent));
      } else {
        _push(ssrRenderComponent(_component_Icon, {
          name: "fa-copy",
          class: "h-4 w-4"
        }, null, _parent));
      }
      _push(`</button>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/elements/components/globals/CopyButton.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=CopyButton-155eba98.mjs.map
