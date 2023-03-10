import { _ as __nuxt_component_0$1 } from './DocsAsideTree-136bd08b.mjs';
import ContentSlot from './ContentSlot-deb25102.mjs';
import { useSSRContext, defineComponent, mergeProps, withCtx, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _export_sfc } from './Container-1291608c.mjs';
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
  __name: "Card",
  __ssrInlineRender: true,
  props: {
    icon: {
      type: String,
      default: ""
    },
    iconClass: {
      type: String,
      default: ""
    },
    blurry: {
      type: Boolean,
      default: true,
      required: false
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0$1;
      const _component_ContentSlot = ContentSlot;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: [{ blurry: __props.blurry }, "card"]
      }, _attrs))} data-v-496504c6>`);
      if (__props.icon) {
        _push(ssrRenderComponent(_component_Icon, { name: __props.icon }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`<div data-v-496504c6><h3 class="title" data-v-496504c6>`);
      _push(ssrRenderComponent(_component_ContentSlot, {
        use: _ctx.$slots.title,
        unwrap: "p"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Card title `);
          } else {
            return [
              createTextVNode(" Card title ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</h3><p class="description" data-v-496504c6>`);
      _push(ssrRenderComponent(_component_ContentSlot, {
        use: _ctx.$slots.description,
        unwrap: "p"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Card description `);
          } else {
            return [
              createTextVNode(" Card description ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</p></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/elements/components/landing/Card.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Card = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-496504c6"]]);

export { Card as default };
//# sourceMappingURL=Card-2052047f.mjs.map
