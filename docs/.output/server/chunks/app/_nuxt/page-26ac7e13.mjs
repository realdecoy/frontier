import { _ as _export_sfc, a as __nuxt_component_0 } from './Container-1291608c.mjs';
import { b as useDocus } from './useDocus-928368c4.mjs';
import { useSSRContext, defineComponent, mergeProps, unref, withCtx, createVNode, renderSlot } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import 'nanoid';
import 'scule';
import 'defu';
import './app.config-832f5f68.mjs';
import 'hookable';
import 'unctx';
import 'ufo';
import 'h3';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "page",
  __ssrInlineRender: true,
  setup(__props) {
    const { config } = useDocus();
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d;
      const _component_Container = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-layout" }, _attrs))} data-v-415bdc86>`);
      _push(ssrRenderComponent(_component_Container, {
        fluid: (_b = (_a = unref(config)) == null ? void 0 : _a.main) == null ? void 0 : _b.fluid,
        padded: (_d = (_c = unref(config)) == null ? void 0 : _c.main) == null ? void 0 : _d.padded
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<article data-v-415bdc86${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            _push2(`</article>`);
          } else {
            return [
              createVNode("article", null, [
                renderSlot(_ctx.$slots, "default", {}, void 0, true)
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/docus/layouts/page.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const page = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-415bdc86"]]);

export { page as default };
//# sourceMappingURL=page-26ac7e13.mjs.map
