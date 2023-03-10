import { useSSRContext, computed, unref } from 'vue';
import { ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './Container-1291608c.mjs';
import 'nanoid';
import 'scule';
import 'defu';

const _sfc_main = {
  __name: "PropInspector",
  __ssrInlineRender: true,
  props: ["prop"],
  setup(__props) {
    const props = __props;
    const propType = computed(() => Array.isArray(props.prop) ? "array" : typeof props.prop);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<pre${ssrRenderAttrs(_attrs)} data-v-d8c04239>Type: ${ssrInterpolate(unref(propType))}
Value:
${ssrInterpolate(__props.prop)}
  </pre>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/content/PropInspector.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const PropInspector = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d8c04239"]]);

export { PropInspector as default };
//# sourceMappingURL=PropInspector-d4a70134.mjs.map
