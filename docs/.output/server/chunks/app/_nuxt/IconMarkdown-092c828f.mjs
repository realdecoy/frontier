import { useSSRContext, mergeProps } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from './Container-1291608c.mjs';
import 'nanoid';
import 'scule';
import 'defu';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 26 26",
    height: "64",
    fill: "currentColor"
  }, _attrs))}><path d="M 24 5 L 2 5 C 1 5 0 5.9375 0 6.875 L 0 18 C 0 18.9375 1 20 2 20 L 24 20 C 25 20 26 18.9375 26 18 L 26 6.875 C 26 5.9375 25 5 24 5 Z M 14 17 L 12 17 L 12 11 L 9 14.039063 L 6 11 L 6 17 L 4 17 L 4 8 L 6 8 L 9 11.398438 L 12 8 L 14 8 Z M 20 17 L 17 13 L 19 13 L 19 8 L 21 8 L 21 13 L 23 13 Z"></path></svg>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/content/IconMarkdown.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const IconMarkdown = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { IconMarkdown as default };
//# sourceMappingURL=IconMarkdown-092c828f.mjs.map
