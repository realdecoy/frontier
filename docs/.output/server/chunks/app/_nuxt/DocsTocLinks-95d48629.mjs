import { useSSRContext, defineComponent, mergeProps, unref, ref, watch } from 'vue';
import { _ as _export_sfc } from './Container-1291608c.mjs';
import { g as useRouter } from './app.config-832f5f68.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import 'nanoid';
import 'scule';
import 'defu';
import 'hookable';
import 'unctx';
import 'ufo';
import 'h3';

const useScrollspy = () => {
  const observer = ref();
  const visibleHeadings = ref([]);
  const activeHeadings = ref([]);
  const updateHeadings = (headings) => headings.forEach((heading) => {
    observer.value.observe(heading);
  });
  watch(visibleHeadings, (val, oldVal) => {
    if (val.length === 0) {
      activeHeadings.value = oldVal;
    } else {
      activeHeadings.value = val;
    }
  }, { deep: true });
  return {
    visibleHeadings,
    activeHeadings,
    updateHeadings
  };
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DocsTocLinks",
  __ssrInlineRender: true,
  props: {
    links: {
      type: Array,
      default: () => []
    }
  },
  emits: ["move"],
  setup(__props, { emit }) {
    useRouter();
    const { activeHeadings, updateHeadings } = useScrollspy();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DocsTocLinks = __nuxt_component_0;
      _push(`<ul${ssrRenderAttrs(mergeProps({ class: "docs-toc-links" }, _attrs))} data-v-8d68a659><!--[-->`);
      ssrRenderList(__props.links, (link) => {
        _push(`<li class="${ssrRenderClass([`depth-${link.depth}`])}" data-v-8d68a659><a${ssrRenderAttr("href", `#${link.id}`)} class="${ssrRenderClass([unref(activeHeadings).includes(link.id) && "active"])}" data-v-8d68a659>${ssrInterpolate(link.text)}</a>`);
        if (link.children) {
          _push(ssrRenderComponent(_component_DocsTocLinks, {
            links: link.children
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/docus/components/docs/DocsTocLinks.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8d68a659"]]);

export { __nuxt_component_0 as default };
//# sourceMappingURL=DocsTocLinks-95d48629.mjs.map
