import { b as __nuxt_component_0, _ as __nuxt_component_0$1$1 } from './DocsAsideTree-136bd08b.mjs';
import { _ as __nuxt_component_0$1 } from './app.config-832f5f68.mjs';
import { b as useDocus } from './useDocus-928368c4.mjs';
import { useSSRContext, defineComponent, unref, withCtx, createVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './Container-1291608c.mjs';
import 'ufo';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import 'hookable';
import 'unctx';
import 'h3';
import 'nanoid';
import 'scule';
import 'defu';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DocsAside",
  __ssrInlineRender: true,
  setup(__props) {
    const { tree } = useDocus();
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_DocsAsideTree = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_Icon = __nuxt_component_0$1$1;
      _push(`<nav${ssrRenderAttrs(_attrs)} data-v-4fc52927>`);
      if (((_a = unref(tree)) == null ? void 0 : _a.length) > 0) {
        _push(ssrRenderComponent(_component_DocsAsideTree, { links: unref(tree) }, null, _parent));
      } else {
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/",
          class: "go-back-link"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Icon, {
                name: "heroicons-outline:arrow-left",
                class: "icon"
              }, null, _parent2, _scopeId));
              _push2(`<span class="text" data-v-4fc52927${_scopeId}>Go back</span>`);
            } else {
              return [
                createVNode(_component_Icon, {
                  name: "heroicons-outline:arrow-left",
                  class: "icon"
                }),
                createVNode("span", { class: "text" }, "Go back")
              ];
            }
          }),
          _: 1
        }, _parent));
      }
      _push(`</nav>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/docus/components/docs/DocsAside.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4fc52927"]]);

export { __nuxt_component_1 as default };
//# sourceMappingURL=DocsAside-a41d5eb9.mjs.map
