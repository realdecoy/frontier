import { withBase } from 'ufo';
import { b as useRuntimeConfig, e as useRequestEvent, u as useNuxtApp, f as useRoute, _ as __nuxt_component_0$2 } from './app.config-832f5f68.mjs';
import { useSSRContext, defineComponent, ref, computed, watch, withAsyncContext, unref, mergeProps, createVNode, resolveDynamicComponent, withCtx, openBlock, createBlock, createCommentVNode, toDisplayString } from 'vue';
import { a as useAppConfig, u as useState, b as useDocus } from './useDocus-928368c4.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderVNode, ssrInterpolate, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
import { Icon as Icon$1 } from '@iconify/vue/dist/offline';
import { loadIcon } from '@iconify/vue';
import { _ as _export_sfc } from './Container-1291608c.mjs';
import 'hookable';
import 'unctx';
import 'h3';
import 'nanoid';
import 'scule';
import 'defu';

const TEXT_TAGS = ["p", "h1", "h2", "h3", "h4", "h5", "h6", "li"];
function isTag(vnode, tag) {
  if (vnode.type === tag) {
    return true;
  }
  if (typeof vnode.type === "object" && vnode.type.tag === tag) {
    return true;
  }
  if (vnode.tag === tag) {
    return true;
  }
  return false;
}
function isText(vnode) {
  return isTag(vnode, "text") || typeof vnode.children === "string";
}
function nodeChildren(node) {
  if (Array.isArray(node.children) || typeof node.children === "string") {
    return node.children;
  }
  if (typeof node.children.default === "function") {
    return node.children.default();
  }
  return [];
}
function nodeTextContent(node) {
  if (!node) {
    return "";
  }
  if (Array.isArray(node)) {
    return node.map(nodeTextContent).join("");
  }
  if (isText(node)) {
    return node.children || node.value;
  }
  const children = nodeChildren(node);
  if (Array.isArray(children)) {
    return children.map(nodeTextContent).join("");
  }
  return "";
}
function unwrap(vnode, tags = ["p"]) {
  if (Array.isArray(vnode)) {
    return vnode.flatMap((node) => unwrap(node, tags));
  }
  let result = vnode;
  if (tags.some((tag) => tag === "*" || isTag(vnode, tag))) {
    result = nodeChildren(vnode) || vnode;
    if (!Array.isArray(result) && TEXT_TAGS.some((tag) => isTag(vnode, tag))) {
      result = [result];
    }
  }
  return result;
}
function flatUnwrap(vnodes, tags = ["p"]) {
  vnodes = Array.isArray(vnodes) ? vnodes : [vnodes];
  if (!tags.length) {
    return vnodes;
  }
  return vnodes.flatMap((vnode) => flatUnwrap(unwrap(vnode, [tags[0]]), tags.slice(1))).filter((vnode) => !(isText(vnode) && nodeTextContent(vnode).trim() === ""));
}
const withContentBase = (url) => withBase(url, useRuntimeConfig().public.content.api.baseURL);
const useUnwrap = () => ({
  unwrap,
  flatUnwrap
});
const addPrerenderPath = (path) => {
  const event = useRequestEvent();
  event.res.setHeader(
    "x-nitro-prerender",
    [
      event.res.getHeader("x-nitro-prerender"),
      path
    ].filter(Boolean).join(",")
  );
};
const shouldUseClientDB = () => {
  useRuntimeConfig().content;
  {
    return false;
  }
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Icon",
  __ssrInlineRender: true,
  props: {
    name: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: ""
    }
  },
  async setup(__props) {
    var _a;
    let __temp, __restore;
    const props = __props;
    const nuxtApp = useNuxtApp();
    const appConfig = useAppConfig();
    ((_a = appConfig == null ? void 0 : appConfig.nuxtIcon) == null ? void 0 : _a.aliases) || {};
    const state = useState("icons", () => ({}));
    const isFetching = ref(false);
    const iconName = computed(() => {
      var _a2;
      return (((_a2 = appConfig == null ? void 0 : appConfig.nuxtIcon) == null ? void 0 : _a2.aliases) || {})[props.name] || props.name;
    });
    const icon = computed(() => {
      var _a2;
      return (_a2 = state.value) == null ? void 0 : _a2[iconName.value];
    });
    const component = computed(() => nuxtApp.vueApp.component(iconName.value));
    const sSize = computed(() => {
      var _a2;
      const size = props.size || ((_a2 = appConfig.nuxtIcon) == null ? void 0 : _a2.size) || "1em";
      if (String(Number(size)) === size) {
        return `${size}px`;
      }
      return size;
    });
    const className = computed(() => {
      var _a3;
      var _a2;
      return (_a3 = (_a2 = appConfig == null ? void 0 : appConfig.nuxtIcon) == null ? void 0 : _a2.class) != null ? _a3 : "icon";
    });
    async function loadIconComponent() {
      var _a2;
      if (component.value) {
        return;
      }
      if (!((_a2 = state.value) == null ? void 0 : _a2[iconName.value])) {
        isFetching.value = true;
        state.value[iconName.value] = await loadIcon(iconName.value).catch(() => void 0);
        isFetching.value = false;
      }
    }
    watch(() => iconName.value, loadIconComponent);
    !component.value && ([__temp, __restore] = withAsyncContext(() => loadIconComponent()), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(isFetching)) {
        _push(`<span${ssrRenderAttrs(mergeProps({
          class: unref(className),
          width: unref(sSize),
          height: unref(sSize)
        }, _attrs))} data-v-28b5b508></span>`);
      } else if (unref(icon)) {
        _push(ssrRenderComponent(unref(Icon$1), mergeProps({
          icon: unref(icon),
          class: unref(className),
          width: unref(sSize),
          height: unref(sSize)
        }, _attrs), null, _parent));
      } else if (unref(component)) {
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(component)), mergeProps({
          class: unref(className),
          width: unref(sSize),
          height: unref(sSize)
        }, _attrs), null), _parent);
      } else {
        _push(`<span${ssrRenderAttrs(mergeProps({
          class: unref(className),
          style: { fontSize: unref(sSize), lineHeight: unref(sSize), width: unref(sSize), height: unref(sSize) }
        }, _attrs))} data-v-28b5b508>${ssrInterpolate(__props.name)}</span>`);
      }
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt-icon/dist/runtime/Icon.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-28b5b508"]]);
const Icon = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: __nuxt_component_0$1
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DocsAsideTree",
  __ssrInlineRender: true,
  props: {
    links: {
      type: Array,
      default: () => []
    },
    level: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: null
    },
    parent: {
      type: Object,
      default: null
    }
  },
  setup(__props) {
    var _a;
    const props = __props;
    const route = useRoute();
    const { config } = useDocus();
    const collapsedMap = useState(`docus-docs-aside-collapse-map-${((_a = props.parent) == null ? void 0 : _a._path) || "/"}`, () => {
      if (props.level === 0) {
        return {};
      }
      return props.links.filter((link) => !!link.children).reduce((map, link) => {
        map[link._path] = true;
        return map;
      }, {});
    });
    const isActive = (link) => {
      return route.path === link._path;
    };
    const isCollapsed = (link) => {
      var _a2, _b, _c, _d;
      if (link.children) {
        if (typeof collapsedMap.value[link._path] !== "undefined") {
          return collapsedMap.value[link._path];
        }
        if ((_a2 = link == null ? void 0 : link.aside) == null ? void 0 : _a2.collapsed) {
          return link.aside.collapsed;
        }
        if (link == null ? void 0 : link.collapsed) {
          return link == null ? void 0 : link.collapsed;
        }
        if ((_c = (_b = config == null ? void 0 : config.value) == null ? void 0 : _b.aside) == null ? void 0 : _c.collapsed) {
          return (_d = config.value.aside) == null ? void 0 : _d.collapsed;
        }
      }
      return false;
    };
    const hasNesting = computed(() => props.links.some((link) => link.children));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0$1;
      const _component_NuxtLink = __nuxt_component_0$2;
      const _component_DocsAsideTree = __nuxt_component_0;
      _push(`<ul${ssrRenderAttrs(mergeProps({ class: "docs-aside-tree" }, _attrs))} data-v-1b6cf603><!--[-->`);
      ssrRenderList(__props.links, (link) => {
        var _a2, _b, _c, _d, _e;
        _push(`<li class="${ssrRenderClass({
          "has-parent-icon": (_a2 = __props.parent) == null ? void 0 : _a2.icon,
          "has-children": __props.level > 0 && link.children,
          "bordered": __props.level > 0 || !unref(hasNesting),
          "active": isActive(link)
        })}" data-v-1b6cf603>`);
        if (link.children) {
          _push(`<button class="title-collapsible-button" data-v-1b6cf603><span class="content" data-v-1b6cf603>`);
          if (((_b = link == null ? void 0 : link.navigation) == null ? void 0 : _b.icon) || link.icon) {
            _push(ssrRenderComponent(_component_Icon, {
              name: ((_c = link == null ? void 0 : link.navigation) == null ? void 0 : _c.icon) || link.icon,
              class: "icon"
            }, null, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`<span data-v-1b6cf603>${ssrInterpolate(((_d = link == null ? void 0 : link.navigation) == null ? void 0 : _d.title) || link.title || link._path)}</span></span><span data-v-1b6cf603>`);
          _push(ssrRenderComponent(_component_Icon, {
            name: isCollapsed(link) ? "lucide:chevrons-up-down" : "lucide:chevrons-down-up",
            class: "collapsible-icon"
          }, null, _parent));
          _push(`</span></button>`);
        } else {
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: link.redirect ? link.redirect : link._path,
            class: ["link", {
              "padded": __props.level > 0 || !unref(hasNesting),
              "active": isActive(link)
            }],
            exact: link.exact
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              var _a3, _b2, _c2, _d2, _e2, _f;
              if (_push2) {
                _push2(`<span class="content" data-v-1b6cf603${_scopeId}>`);
                if (((_a3 = link == null ? void 0 : link.navigation) == null ? void 0 : _a3.icon) || link.icon) {
                  _push2(ssrRenderComponent(_component_Icon, {
                    name: ((_b2 = link == null ? void 0 : link.navigation) == null ? void 0 : _b2.icon) || link.icon,
                    class: "icon"
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<span data-v-1b6cf603${_scopeId}>${ssrInterpolate(((_c2 = link == null ? void 0 : link.navigation) == null ? void 0 : _c2.title) || link.title || link._path)}</span></span>`);
              } else {
                return [
                  createVNode("span", { class: "content" }, [
                    ((_d2 = link == null ? void 0 : link.navigation) == null ? void 0 : _d2.icon) || link.icon ? (openBlock(), createBlock(_component_Icon, {
                      key: 0,
                      name: ((_e2 = link == null ? void 0 : link.navigation) == null ? void 0 : _e2.icon) || link.icon,
                      class: "icon"
                    }, null, 8, ["name"])) : createCommentVNode("", true),
                    createVNode("span", null, toDisplayString(((_f = link == null ? void 0 : link.navigation) == null ? void 0 : _f.title) || link.title || link._path), 1)
                  ])
                ];
              }
            }),
            _: 2
          }, _parent));
        }
        if (((_e = link.children) == null ? void 0 : _e.length) && (__props.max === null || __props.level + 1 < __props.max)) {
          _push(ssrRenderComponent(_component_DocsAsideTree, {
            style: !isCollapsed(link) ? null : { display: "none" },
            links: link.children,
            level: __props.level + 1,
            parent: link,
            max: __props.max,
            class: "recursive"
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</li>`);
      });
      _push(`<!--]--></ul>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/docus/components/docs/DocsAsideTree.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1b6cf603"]]);
const DocsAsideTree = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: __nuxt_component_0
});

export { DocsAsideTree as D, Icon as I, __nuxt_component_0$1 as _, addPrerenderPath as a, __nuxt_component_0 as b, shouldUseClientDB as s, useUnwrap as u, withContentBase as w };
//# sourceMappingURL=DocsAsideTree-136bd08b.mjs.map
