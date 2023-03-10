import ContentSlot from './ContentSlot-deb25102.mjs';
import { useSSRContext, defineComponent, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
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
  __name: "CardGrid",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      default: "Features"
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ContentSlot = ContentSlot;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "card-grid" }, _attrs))} data-v-8f7bcfd2>`);
      _push(ssrRenderComponent(_component_ContentSlot, {
        use: _ctx.$slots.root
      }, null, _parent));
      _push(`<h2 class="title" data-v-8f7bcfd2>`);
      _push(ssrRenderComponent(_component_ContentSlot, {
        use: _ctx.$slots.title,
        unwrap: "p"
      }, null, _parent));
      _push(`</h2><div class="layout" data-v-8f7bcfd2>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/elements/components/landing/CardGrid.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CardGrid = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8f7bcfd2"]]);

export { CardGrid as default };
//# sourceMappingURL=CardGrid-160bcd85.mjs.map
