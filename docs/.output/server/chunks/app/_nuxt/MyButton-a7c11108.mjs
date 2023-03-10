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

const _sfc_main = {
  __name: "MyButton",
  __ssrInlineRender: true,
  props: {
    type: {
      type: String,
      default: "info"
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ContentSlot = ContentSlot;
      _push(`<button${ssrRenderAttrs(mergeProps({ class: __props.type }, _attrs))} data-v-14e24467>`);
      _push(ssrRenderComponent(_component_ContentSlot, {
        use: _ctx.$slots.default,
        unwrap: "p"
      }, null, _parent));
      _push(`</button>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/content/MyButton.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const MyButton = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-14e24467"]]);

export { MyButton as default };
//# sourceMappingURL=MyButton-a7c11108.mjs.map
