import { useSSRContext, defineComponent, ref, watch, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _export_sfc } from './Container-1291608c.mjs';
import 'nanoid';
import 'scule';
import 'defu';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TabsHeader",
  __ssrInlineRender: true,
  props: {
    tabs: {
      type: Array,
      required: true
    },
    activeTabIndex: {
      type: Number,
      required: true
    }
  },
  emits: ["update:activeTabIndex"],
  setup(__props, { emit }) {
    const props = __props;
    const tabsRef = ref();
    const highlightUnderline = ref();
    const updateHighlightUnderlinePosition = (activeTab) => {
      if (!activeTab) {
        return;
      }
      highlightUnderline.value.style.left = `${activeTab.offsetLeft}px`;
      highlightUnderline.value.style.width = `${activeTab.clientWidth}px`;
    };
    watch(
      tabsRef,
      (newVal) => {
        if (!newVal) {
          return;
        }
        setTimeout(() => {
          updateHighlightUnderlinePosition(tabsRef.value.children[props.activeTabIndex]);
        }, 50);
      },
      {
        immediate: true
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "tabs-header" }, _attrs))} data-v-fa060d5c>`);
      if (__props.tabs) {
        _push(`<div class="tabs" data-v-fa060d5c><!--[-->`);
        ssrRenderList(__props.tabs, ({ label }, i) => {
          _push(`<button class="${ssrRenderClass([__props.activeTabIndex === i ? "active" : "not-active"])}" data-v-fa060d5c>${ssrInterpolate(label)}</button>`);
        });
        _push(`<!--]--><span class="highlight-underline" data-v-fa060d5c><span class="tab" data-v-fa060d5c></span></span></div>`);
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "footer", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/elements/components/globals/TabsHeader.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-fa060d5c"]]);

export { __nuxt_component_0 as default };
//# sourceMappingURL=TabsHeader-c9b56dab.mjs.map
