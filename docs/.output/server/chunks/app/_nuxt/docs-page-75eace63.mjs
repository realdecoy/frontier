import { _ as _export_sfc, a as __nuxt_component_0 } from './Container-1291608c.mjs';
import { useSSRContext, mergeProps, withCtx, renderSlot } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import 'nanoid';
import 'scule';
import 'defu';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Container = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "docs-page" }, _attrs))} data-v-52761a33>`);
  _push(ssrRenderComponent(_component_Container, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
      } else {
        return [
          renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ];
      }
    }),
    _: 3
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/docs-page.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const docsPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-52761a33"]]);

export { docsPage as default };
//# sourceMappingURL=docs-page-75eace63.mjs.map
