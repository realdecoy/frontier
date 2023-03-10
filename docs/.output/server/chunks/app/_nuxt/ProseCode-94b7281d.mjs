import { _ as __nuxt_component_0$1 } from './DocsAsideTree-136bd08b.mjs';
import { useSSRContext, defineComponent, ref, mergeProps, unref } from 'vue';
import { a as useAppConfig } from './useDocus-928368c4.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';
import { u as useClipboard } from './index-1624a23e.mjs';
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

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ProseCodeCopyButton",
  __ssrInlineRender: true,
  props: {
    content: {
      type: String,
      default: ""
    },
    show: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    useClipboard();
    const { prose } = useAppConfig();
    const state = ref("init");
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_Icon = __nuxt_component_0$1;
      _push(`<button${ssrRenderAttrs(mergeProps({
        class: [(__props.show || state.value === "copied") && "show"]
      }, _attrs))} data-v-5fa3121e><span class="sr-only" data-v-5fa3121e>Copy to clipboard</span><span class="icon-wrapper" data-v-5fa3121e>`);
      if (state.value === "copied") {
        _push(ssrRenderComponent(_component_Icon, {
          name: (_a = unref(prose).copyButton) == null ? void 0 : _a.iconCopied,
          size: "18",
          class: "copied"
        }, null, _parent));
      } else {
        _push(ssrRenderComponent(_component_Icon, {
          name: (_b = unref(prose).copyButton) == null ? void 0 : _b.iconCopy,
          size: "18"
        }, null, _parent));
      }
      _push(`</span></button>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/typography/components/ProseCodeCopyButton.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-5fa3121e"]]);
const ProseCodeCopyButton = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: __nuxt_component_0
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ProseCode",
  __ssrInlineRender: true,
  props: {
    code: {
      type: String,
      default: ""
    },
    language: {
      type: String,
      default: null
    },
    filename: {
      type: String,
      default: null
    },
    highlights: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    const hovered = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ProseCodeCopyButton = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: [[`highlight-${__props.language}`], "prose-code"]
      }, _attrs))} data-v-0f086f28>`);
      if (__props.filename) {
        _push(`<span class="filename" data-v-0f086f28>${ssrInterpolate(__props.filename)}</span>`);
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(ssrRenderComponent(_component_ProseCodeCopyButton, {
        show: hovered.value,
        content: __props.code,
        class: "copy-button"
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/typography/components/global/ProseCode.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ProseCode = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0f086f28"]]);
const ProseCode$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: ProseCode
});

export { ProseCodeCopyButton as P, ProseCode$1 as a };
//# sourceMappingURL=ProseCode-94b7281d.mjs.map
