import { useSSRContext, mergeProps } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from './Container-1291608c.mjs';
import 'nanoid';
import 'scule';
import 'defu';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    viewBox: "0 0 57 57",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path fill-rule="evenodd" clip-rule="evenodd" d="M28.5445 0C12.8044 0 0 12.7599 0 28.5v25.4549c0 1.5835 1.28368 2.8672 2.86718 2.8672H28.5889C44.2799 56.8221 57 44.102 57 28.4111 57 12.7201 44.2355 0 28.5445 0Zm15.4963 34.452c3.3649 0 6.0927-2.7278 6.0927-6.0928 0-3.3649-2.7278-6.0927-6.0927-6.0927-3.365 0-6.0928 2.7278-6.0928 6.0927 0 3.365 2.7278 6.0928 6.0928 6.0928Zm-18.0833.0003c3.3649 0 6.0927-2.7278 6.0927-6.0927s-2.7278-6.0928-6.0927-6.0928-6.0928 2.7279-6.0928 6.0928c0 3.3649 2.7279 6.0927 6.0928 6.0927Z" fill="currentColor"></path></svg>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/elements/components/icons/IconDocus.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const IconDocus = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { IconDocus as default };
//# sourceMappingURL=IconDocus-12d300be.mjs.map
