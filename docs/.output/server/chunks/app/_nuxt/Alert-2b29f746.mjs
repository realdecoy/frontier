import ContentSlot from './ContentSlot-deb25102.mjs';
import { useSSRContext, defineComponent, mergeProps } from 'vue';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Alert",
  __ssrInlineRender: true,
  props: {
    /**
     * @values info, success, warning, danger
     */
    type: {
      type: String,
      default: "info",
      validator(value) {
        return ["info", "success", "warning", "danger", "primary"].includes(value);
      }
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ContentSlot = ContentSlot;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["alert", [__props.type]]
      }, _attrs))} data-v-95a79b90><div class="alert-content" data-v-95a79b90>`);
      _push(ssrRenderComponent(_component_ContentSlot, {
        use: _ctx.$slots.default,
        unwrap: "p"
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/elements/components/globals/Alert.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-95a79b90"]]);

export { __nuxt_component_2 as default };
//# sourceMappingURL=Alert-2b29f746.mjs.map
