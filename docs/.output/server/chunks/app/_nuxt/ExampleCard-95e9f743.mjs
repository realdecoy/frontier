import { useSSRContext, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _export_sfc } from './Container-1291608c.mjs';
import 'nanoid';
import 'scule';
import 'defu';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-6 border bg-white dark:bg-black dark:border-gray-700 rounded" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/content/Example/ExampleCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ExampleCard = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { ExampleCard as default };
//# sourceMappingURL=ExampleCard-95e9f743.mjs.map
