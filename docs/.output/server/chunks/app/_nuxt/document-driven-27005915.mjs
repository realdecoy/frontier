import __nuxt_component_0 from './layout-88ff67c1.mjs';
import _sfc_main$1 from './ContentRenderer-06a7c657.mjs';
import _sfc_main$2 from './DocumentDrivenEmpty-8338ce9f.mjs';
import __nuxt_component_3 from './DocumentDrivenNotFound-4b73ea08.mjs';
import { c as useContent } from './useDocus-928368c4.mjs';
import { a as useContentHead } from '../server.mjs';
import { e as useRequestEvent } from './app.config-832f5f68.mjs';
import { defineComponent, mergeProps, unref, withCtx, createVNode, openBlock, createBlock, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import 'vue-router';
import './ContentRendererMarkdown-bebf42c8.mjs';
import 'destr';
import 'scule';
import 'property-information';
import 'hookable';
import 'unctx';
import 'ufo';
import 'h3';
import './ButtonLink-df4791d5.mjs';
import './DocsAsideTree-136bd08b.mjs';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import './Container-1291608c.mjs';
import 'nanoid';
import 'defu';
import './ContentSlot-deb25102.mjs';
import 'ofetch';
import '@unhead/vue';
import '@unhead/dom';
import '@unhead/ssr';
import 'ohash';
import './query-dd064fd9.mjs';
import 'cookie-es';
import '../../nitro/config.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "document-driven",
  __ssrInlineRender: true,
  setup(__props) {
    const { page, layout } = useContent();
    if (!page.value && true) {
      const event = useRequestEvent();
      event.res.statusCode = 404;
    }
    useContentHead(page);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_ContentRenderer = _sfc_main$1;
      const _component_DocumentDrivenEmpty = _sfc_main$2;
      const _component_DocumentDrivenNotFound = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "document-driven-page" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_NuxtLayout, {
        name: unref(layout) || "default"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(page)) {
              _push2(ssrRenderComponent(_component_ContentRenderer, {
                key: unref(page)._id,
                value: unref(page)
              }, {
                empty: withCtx(({ value }, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_DocumentDrivenEmpty, { value }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_DocumentDrivenEmpty, { value }, null, 8, ["value"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(ssrRenderComponent(_component_DocumentDrivenNotFound, null, null, _parent2, _scopeId));
            }
          } else {
            return [
              unref(page) ? (openBlock(), createBlock(_component_ContentRenderer, {
                key: unref(page)._id,
                value: unref(page)
              }, {
                empty: withCtx(({ value }) => [
                  createVNode(_component_DocumentDrivenEmpty, { value }, null, 8, ["value"])
                ]),
                _: 1
              }, 8, ["value"])) : (openBlock(), createBlock(_component_DocumentDrivenNotFound, { key: 1 }))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/content/dist/runtime/pages/document-driven.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=document-driven-27005915.mjs.map
