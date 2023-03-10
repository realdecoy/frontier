import __nuxt_component_0 from './DocsPageLayout-4c2ead4a.mjs';
import { useSSRContext, withCtx, renderSlot } from 'vue';
import { ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _export_sfc } from './Container-1291608c.mjs';
import './DocsAside-a41d5eb9.mjs';
import './DocsAsideTree-136bd08b.mjs';
import 'ufo';
import './app.config-832f5f68.mjs';
import 'hookable';
import 'unctx';
import 'h3';
import './useDocus-928368c4.mjs';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import 'nanoid';
import 'scule';
import 'defu';
import './Alert-2b29f746.mjs';
import './ContentSlot-deb25102.mjs';
import './ProseCodeInline-960b9a43.mjs';
import './DocsPageBottom-270eacfc.mjs';
import './EditOnLink-e55cd3a0.mjs';
import './ProseA-86ef3985.mjs';
import './DocsPrevNext-7858c09b.mjs';
import './DocsToc-e4f6bd56.mjs';
import './DocsTocLinks-95d48629.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_DocsPageLayout = __nuxt_component_0;
  _push(ssrRenderComponent(_component_DocsPageLayout, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
      } else {
        return [
          renderSlot(_ctx.$slots, "default")
        ];
      }
    }),
    _: 3
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/docus/layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-cafbf0bc.mjs.map
