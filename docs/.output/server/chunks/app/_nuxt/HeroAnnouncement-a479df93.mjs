import { _ as __nuxt_component_0 } from './app.config-832f5f68.mjs';
import { _ as __nuxt_component_0$1 } from './DocsAsideTree-136bd08b.mjs';
import { useSSRContext, mergeProps, withCtx, createVNode, toDisplayString } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './Container-1291608c.mjs';
import 'hookable';
import 'unctx';
import 'ufo';
import 'h3';
import './useDocus-928368c4.mjs';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import 'nanoid';
import 'scule';
import 'defu';

const _sfc_main = {
  __name: "HeroAnnouncement",
  __ssrInlineRender: true,
  props: {
    to: {
      type: String,
      default: ""
    },
    label: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Icon = __nuxt_component_0$1;
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        to: __props.to,
        class: "link"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "heroicons-solid:sparkles",
              class: "icon"
            }, null, _parent2, _scopeId));
            _push2(`<span data-v-d15db3c4${_scopeId}>${ssrInterpolate(__props.label)}</span>`);
          } else {
            return [
              createVNode(_component_Icon, {
                name: "heroicons-solid:sparkles",
                class: "icon"
              }),
              createVNode("span", null, toDisplayString(__props.label), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/content/HeroAnnouncement.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const HeroAnnouncement = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d15db3c4"]]);

export { HeroAnnouncement as default };
//# sourceMappingURL=HeroAnnouncement-a479df93.mjs.map
