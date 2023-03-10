import { _ as __nuxt_component_0 } from './app.config-832f5f68.mjs';
import { _ as __nuxt_component_0$1 } from './DocsAsideTree-136bd08b.mjs';
import { useSSRContext, defineComponent, computed, mergeProps, withCtx, unref, renderSlot, openBlock, createBlock, createCommentVNode } from 'vue';
import { a as useAppConfig } from './useDocus-928368c4.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _export_sfc } from './Container-1291608c.mjs';
import 'hookable';
import 'unctx';
import 'ufo';
import 'h3';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import 'nanoid';
import 'scule';
import 'defu';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ProseH6",
  __ssrInlineRender: true,
  props: {
    id: null
  },
  setup(__props) {
    const { prose } = useAppConfig();
    const hasIcon = computed(() => {
      var _a, _b;
      return ((_a = prose == null ? void 0 : prose.h6) == null ? void 0 : _a.icon) && ((_b = prose == null ? void 0 : prose.headings) == null ? void 0 : _b.icon);
    });
    const icon = computed(() => {
      var _a, _b;
      return ((_a = prose == null ? void 0 : prose.h6) == null ? void 0 : _a.icon) || ((_b = prose == null ? void 0 : prose.headings) == null ? void 0 : _b.icon);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Icon = __nuxt_component_0$1;
      _push(`<h6${ssrRenderAttrs(mergeProps({ id: __props.id }, _attrs))} data-v-dfc5fb9b>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        href: `#${__props.id}`
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            if (unref(hasIcon)) {
              _push2(ssrRenderComponent(_component_Icon, { name: unref(icon) }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              renderSlot(_ctx.$slots, "default", {}, void 0, true),
              unref(hasIcon) ? (openBlock(), createBlock(_component_Icon, {
                key: 0,
                name: unref(icon)
              }, null, 8, ["name"])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`</h6>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/typography/components/global/ProseH6.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ProseH6 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-dfc5fb9b"]]);

export { ProseH6 as default };
//# sourceMappingURL=ProseH6-cffb1b40.mjs.map
