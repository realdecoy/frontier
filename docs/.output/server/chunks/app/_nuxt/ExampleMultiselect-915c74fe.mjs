import { ssrRenderAttrs } from 'vue/server-renderer';
import { useSSRContext } from 'vue';
import { _ as _export_sfc } from './Container-1291608c.mjs';
import 'nanoid';
import 'scule';
import 'defu';

const _sfc_main = {
  props: {
    options: {
      type: [Array, String],
      default: () => []
    }
  },
  data() {
    return {
      value: null
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}>Not working on content v2 docs!</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/content/Example/ExampleMultiselect.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ExampleMultiselect = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { ExampleMultiselect as default };
//# sourceMappingURL=ExampleMultiselect-915c74fe.mjs.map
