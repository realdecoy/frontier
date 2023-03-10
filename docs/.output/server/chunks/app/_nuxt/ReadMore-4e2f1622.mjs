import __nuxt_component_2 from './Alert-2b29f746.mjs';
import { _ as __nuxt_component_0$1 } from './DocsAsideTree-136bd08b.mjs';
import { _ as __nuxt_component_0 } from './app.config-832f5f68.mjs';
import { defineComponent, computed, withCtx, unref, createTextVNode, toDisplayString, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { splitByCase, upperFirst } from 'scule';
import './ContentSlot-deb25102.mjs';
import 'ufo';
import 'hookable';
import 'unctx';
import 'h3';
import './useDocus-928368c4.mjs';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import './Container-1291608c.mjs';
import 'nanoid';
import 'defu';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ReadMore",
  __ssrInlineRender: true,
  props: {
    link: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: false,
      default: void 0
    }
  },
  setup(__props) {
    const props = __props;
    const createTitle = (title, link) => title || link.split("/").filter(Boolean).map((part) => splitByCase(part).map((p) => upperFirst(p)).join(" ")).join(" > ").replace("Api", "API");
    const computedTitle = computed(() => createTitle(props.title, props.link));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Alert = __nuxt_component_2;
      const _component_Icon = __nuxt_component_0$1;
      const _component_NuxtLink = __nuxt_component_0;
      _push(ssrRenderComponent(_component_Alert, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, { name: "heroicons-outline:window" }, null, _parent2, _scopeId));
            _push2(` Read more in `);
            _push2(ssrRenderComponent(_component_NuxtLink, { to: __props.link }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(unref(computedTitle))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(computedTitle)), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`. `);
          } else {
            return [
              createVNode(_component_Icon, { name: "heroicons-outline:window" }),
              createTextVNode(" Read more in "),
              createVNode(_component_NuxtLink, { to: __props.link }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(computedTitle)), 1)
                ]),
                _: 1
              }, 8, ["to"]),
              createTextVNode(". ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/content/ReadMore.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=ReadMore-4e2f1622.mjs.map
