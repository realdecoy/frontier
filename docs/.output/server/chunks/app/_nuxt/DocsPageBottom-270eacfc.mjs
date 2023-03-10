import { _ as __nuxt_component_0$1 } from './DocsAsideTree-136bd08b.mjs';
import _sfc_main$1 from './EditOnLink-e55cd3a0.mjs';
import __nuxt_component_2 from './ProseA-86ef3985.mjs';
import { c as useContent, b as useDocus } from './useDocus-928368c4.mjs';
import { useSSRContext, defineComponent, unref, mergeProps, withCtx, createVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './Container-1291608c.mjs';
import 'ufo';
import './app.config-832f5f68.mjs';
import 'hookable';
import 'unctx';
import 'h3';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import 'nanoid';
import 'scule';
import 'defu';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DocsPageBottom",
  __ssrInlineRender: true,
  setup(__props) {
    const { page } = useContent();
    const { config } = useDocus();
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c;
      const _component_Icon = __nuxt_component_0$1;
      const _component_EditOnLink = _sfc_main$1;
      const _component_ProseA = __nuxt_component_2;
      if (unref(page)) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "docs-page-bottom" }, _attrs))} data-v-c70c0152>`);
        if ((_b = (_a = unref(config)) == null ? void 0 : _a.github) == null ? void 0 : _b.edit) {
          _push(`<div class="edit-link" data-v-c70c0152>`);
          _push(ssrRenderComponent(_component_Icon, { name: "uil:edit" }, null, _parent));
          _push(ssrRenderComponent(_component_EditOnLink, { page: unref(page) }, {
            default: withCtx(({ url }, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_ProseA, { to: url }, {
                  default: withCtx((_, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<span data-v-c70c0152${_scopeId2}> Edit this page on GitHub </span>`);
                    } else {
                      return [
                        createVNode("span", null, " Edit this page on GitHub ")
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_component_ProseA, { to: url }, {
                    default: withCtx(() => [
                      createVNode("span", null, " Edit this page on GitHub ")
                    ]),
                    _: 2
                  }, 1032, ["to"])
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        if ((_c = unref(page)) == null ? void 0 : _c.mtime) {
          _push(`<span data-v-c70c0152>Updated on <b data-v-c70c0152>${ssrInterpolate(new Intl.DateTimeFormat("en-US").format(Date.parse(unref(page).mtime)))}</b></span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/docus/components/docs/DocsPageBottom.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c70c0152"]]);

export { __nuxt_component_4 as default };
//# sourceMappingURL=DocsPageBottom-270eacfc.mjs.map
