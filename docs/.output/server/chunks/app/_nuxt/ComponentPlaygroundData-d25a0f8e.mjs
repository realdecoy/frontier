import __nuxt_component_0 from './TabsHeader-c9b56dab.mjs';
import __nuxt_component_1 from './ComponentPlaygroundProps-8f45f1a7.mjs';
import _sfc_main$1 from './ComponentPlaygroundSlots-0dbd767a.mjs';
import _sfc_main$2 from './ComponentPlaygroundTokens-548a0a2d.mjs';
import { useSSRContext, defineComponent, ref, mergeProps, unref, isRef } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { a as useVModel } from './index-1624a23e.mjs';
import { _ as _export_sfc } from './Container-1291608c.mjs';
import 'nanoid';
import 'scule';
import 'defu';
import './ProseH4-4f0da863.mjs';
import './app.config-832f5f68.mjs';
import 'hookable';
import 'unctx';
import 'ufo';
import 'h3';
import './DocsAsideTree-136bd08b.mjs';
import './useDocus-928368c4.mjs';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import './ProseCodeInline-960b9a43.mjs';
import './Badge-5f9ab214.mjs';
import './ContentSlot-deb25102.mjs';
import './ProseP-a91aeff7.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ComponentPlaygroundData",
  __ssrInlineRender: true,
  props: {
    modelValue: {
      type: Object,
      required: false,
      default: () => ({})
    },
    componentData: {
      type: Object,
      required: false,
      default: () => ({})
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const formData = useVModel(props, "modelValue", emits);
    const activeTabIndex = ref(0);
    const tabs = [
      {
        label: "Props"
      },
      {
        label: "Slots"
      },
      {
        label: "Design Tokens"
      }
    ];
    const updateTab = (i) => activeTabIndex.value = i;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TabsHeader = __nuxt_component_0;
      const _component_ComponentPlaygroundProps = __nuxt_component_1;
      const _component_ComponentPlaygroundSlots = _sfc_main$1;
      const _component_ComponentPlaygroundTokens = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "component-playground-data" }, _attrs))} data-v-ff75821c>`);
      _push(ssrRenderComponent(_component_TabsHeader, {
        "active-tab-index": unref(activeTabIndex),
        tabs,
        "onUpdate:activeTabIndex": updateTab
      }, null, _parent));
      if (unref(activeTabIndex) === 0) {
        _push(ssrRenderComponent(_component_ComponentPlaygroundProps, {
          modelValue: unref(formData),
          "onUpdate:modelValue": ($event) => isRef(formData) ? formData.value = $event : null,
          "component-data": __props.componentData
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(activeTabIndex) === 1) {
        _push(ssrRenderComponent(_component_ComponentPlaygroundSlots, { "component-data": __props.componentData }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(activeTabIndex) === 2) {
        _push(ssrRenderComponent(_component_ComponentPlaygroundTokens, { "component-data": __props.componentData }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/elements/components/meta/ComponentPlaygroundData.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ComponentPlaygroundData = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ff75821c"]]);

export { ComponentPlaygroundData as default };
//# sourceMappingURL=ComponentPlaygroundData-d25a0f8e.mjs.map
