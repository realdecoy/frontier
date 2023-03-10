import { ssrRenderAttrs } from 'vue/server-renderer';
import { useSSRContext } from 'vue';
import { _ as _export_sfc } from './Container-1291608c.mjs';
import 'nanoid';
import 'scule';
import 'defu';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<hr${ssrRenderAttrs(_attrs)} data-v-89dedb08>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/typography/components/global/ProseHr.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ProseHr = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-89dedb08"]]);

export { ProseHr as default };
//# sourceMappingURL=ProseHr-fa0af264.mjs.map
