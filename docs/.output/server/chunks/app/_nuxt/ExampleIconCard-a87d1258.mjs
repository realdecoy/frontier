import { mergeProps, createVNode, resolveDynamicComponent, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderVNode, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = {
  __name: "ExampleIconCard",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      default: "Default title"
    },
    description: {
      type: String,
      default: "Default description"
    },
    icon: {
      type: String,
      default: "IconMarkdown"
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-6 border bg-white dark:bg-black dark:border-gray-700 rounded" }, _attrs))}>`);
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(__props.icon), { class: "w-20 h-20" }, null), _parent);
      _push(`<h2 class="text-3xl font-semibold mb-2">${ssrInterpolate(__props.title)}</h2><p>${ssrInterpolate(__props.description)}</p></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/content/Example/ExampleIconCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=ExampleIconCard-a87d1258.mjs.map
