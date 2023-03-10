import { _ as __nuxt_component_0 } from './app.config-832f5f68.mjs';
import { _ as __nuxt_component_0$1 } from './DocsAsideTree-136bd08b.mjs';
import ContentSlot from './ContentSlot-deb25102.mjs';
import { useSSRContext, defineComponent, computed, ref, mergeProps, unref, withCtx, openBlock, createBlock, createCommentVNode, createVNode } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc, c as computedStyle, u as utils, b as usePinceauRuntime } from './Container-1291608c.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ButtonLink",
  __ssrInlineRender: true,
  props: {
    blank: {
      type: Boolean,
      required: false,
      default: false
    },
    color: computedStyle("primary"),
    href: {
      type: String,
      default: ""
    },
    icon: {
      type: String,
      default: ""
    },
    ...{ "size": { "required": false, "type": [String, Object], "default": `medium` }, "transparent": { "required": false, "type": [Boolean, Object], "default": false } }
  },
  setup(__props) {
    const __$pProps = __props;
    const _PBS_backgroundColor = computed(() => ((props = __$pProps, utils$1 = utils) => `{color.${props.color}.600}`)());
    const _m49_backgroundColor = computed(() => ((props = __$pProps, utils$1 = utils) => `{color.${props.color}.500}`)());
    const _BVG_border = computed(() => ((props = __$pProps, utils$1 = utils) => `1px solid {color.${props.color}.600}`)());
    const __$pVariants = ref({ "size": { "small": { "padding": "{space.2} {space.4}", "fontSize": "{text.sm.fontSize}", "lineHeight": "{text.sm.lineHeight}" }, "medium": { "padding": "{space.rem.625} {space.5}", "fontSize": "{text.base.fontSize}", "lineHeight": "{text.base.lineHeight}" }, "large": { "padding": "{space.3} {space.6}", "fontSize": "{text.lg.fontSize}", "lineHeight": "{text.lg.lineHeight}" }, "giant": { "padding": "{space.4} {space.8}", "fontSize": "{text.lg.fontSize}", "lineHeight": "{text.lg.lineHeight}" } }, "transparent": { "true": { "backgroundColor": "transparent" } } });
    const { $pinceau } = usePinceauRuntime(computed(() => __$pProps), __$pVariants, ref({ _PBS_backgroundColor, _m49_backgroundColor, _BVG_border }));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Icon = __nuxt_component_0$1;
      const _component_ContentSlot = ContentSlot;
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        class: ["button-link", [unref($pinceau)]],
        to: __props.href,
        target: __props.blank ? "_blank" : void 0
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (__props.icon) {
              _push2(ssrRenderComponent(_component_Icon, { name: __props.icon }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_component_ContentSlot, {
              use: _ctx.$slots.default,
              unwrap: "p ul li"
            }, null, _parent2, _scopeId));
          } else {
            return [
              __props.icon ? (openBlock(), createBlock(_component_Icon, {
                key: 0,
                name: __props.icon
              }, null, 8, ["name"])) : createCommentVNode("", true),
              createVNode(_component_ContentSlot, {
                use: _ctx.$slots.default,
                unwrap: "p ul li"
              }, null, 8, ["use"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/elements/components/globals/ButtonLink.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-02d3ca01"]]);

export { __nuxt_component_1 as default };
//# sourceMappingURL=ButtonLink-df4791d5.mjs.map
