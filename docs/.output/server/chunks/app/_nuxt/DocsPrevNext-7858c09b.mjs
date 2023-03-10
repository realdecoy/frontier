import { _ as __nuxt_component_0 } from './app.config-832f5f68.mjs';
import { _ as __nuxt_component_0$1 } from './DocsAsideTree-136bd08b.mjs';
import { c as useContent, e as useContentHelpers } from './useDocus-928368c4.mjs';
import { useSSRContext, defineComponent, unref, mergeProps, withCtx, createVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { upperFirst } from 'scule';
import { _ as _export_sfc } from './Container-1291608c.mjs';
import 'hookable';
import 'unctx';
import 'ufo';
import 'h3';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import 'nanoid';
import 'defu';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DocsPrevNext",
  __ssrInlineRender: true,
  setup(__props) {
    const { prev, next, navigation } = useContent();
    const { navDirFromPath } = useContentHelpers();
    const directory = (link) => {
      const nav = navDirFromPath(link._path, navigation.value || []);
      if (nav && nav[0]) {
        return nav[0]._path;
      } else {
        const dirs = link.split("/");
        const directory2 = dirs.length > 1 ? dirs[dirs.length - 2] : "";
        return directory2.split("-").map(upperFirst).join(" ");
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Icon = __nuxt_component_0$1;
      if (unref(prev) || unref(next)) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "docs-prev-next" }, _attrs))} data-v-c087c434>`);
        if (unref(prev)) {
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: unref(prev)._path,
            class: "prev"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_Icon, {
                  name: "heroicons-outline:arrow-sm-left",
                  class: "icon"
                }, null, _parent2, _scopeId));
                _push2(`<div class="wrapper" data-v-c087c434${_scopeId}><span class="directory" data-v-c087c434${_scopeId}>${ssrInterpolate(directory(unref(prev)._path))}</span><span class="title" data-v-c087c434${_scopeId}>${ssrInterpolate(unref(prev).title)}</span></div>`);
              } else {
                return [
                  createVNode(_component_Icon, {
                    name: "heroicons-outline:arrow-sm-left",
                    class: "icon"
                  }),
                  createVNode("div", { class: "wrapper" }, [
                    createVNode("span", { class: "directory" }, toDisplayString(directory(unref(prev)._path)), 1),
                    createVNode("span", { class: "title" }, toDisplayString(unref(prev).title), 1)
                  ])
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<span data-v-c087c434></span>`);
        }
        if (unref(next)) {
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: unref(next)._path,
            class: "next"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="wrapper" data-v-c087c434${_scopeId}><span class="directory" data-v-c087c434${_scopeId}>${ssrInterpolate(directory(unref(next)._path))}</span><span class="title" data-v-c087c434${_scopeId}>${ssrInterpolate(unref(next).title)}</span></div>`);
                _push2(ssrRenderComponent(_component_Icon, {
                  name: "heroicons-outline:arrow-sm-right",
                  class: "icon"
                }, null, _parent2, _scopeId));
              } else {
                return [
                  createVNode("div", { class: "wrapper" }, [
                    createVNode("span", { class: "directory" }, toDisplayString(directory(unref(next)._path)), 1),
                    createVNode("span", { class: "title" }, toDisplayString(unref(next).title), 1)
                  ]),
                  createVNode(_component_Icon, {
                    name: "heroicons-outline:arrow-sm-right",
                    class: "icon"
                  })
                ];
              }
            }),
            _: 1
          }, _parent));
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/docus/components/docs/DocsPrevNext.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c087c434"]]);

export { __nuxt_component_5 as default };
//# sourceMappingURL=DocsPrevNext-7858c09b.mjs.map
