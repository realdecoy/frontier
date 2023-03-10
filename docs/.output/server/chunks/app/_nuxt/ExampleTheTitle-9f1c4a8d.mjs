import ContentSlot from './ContentSlot-deb25102.mjs';
import { useSSRContext, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './Container-1291608c.mjs';
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

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_ContentSlot = ContentSlot;
  _push(`<h1${ssrRenderAttrs(mergeProps({ class: "text-4xl" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_ContentSlot, {
    use: _ctx.$slots.default,
    unwrap: "p"
  }, null, _parent));
  _push(`</h1>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/content/Example/ExampleTheTitle.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ExampleTheTitle = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { ExampleTheTitle as default };
//# sourceMappingURL=ExampleTheTitle-9f1c4a8d.mjs.map
