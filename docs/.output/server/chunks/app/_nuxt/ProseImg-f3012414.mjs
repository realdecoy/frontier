import { b as useRuntimeConfig } from './app.config-832f5f68.mjs';
import { useSSRContext, defineComponent, computed, mergeProps, unref } from 'vue';
import { withBase } from 'ufo';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from './Container-1291608c.mjs';
import 'hookable';
import 'unctx';
import 'h3';
import 'nanoid';
import 'scule';
import 'defu';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ProseImg",
  __ssrInlineRender: true,
  props: {
    src: {
      type: String,
      default: ""
    },
    alt: {
      type: String,
      default: ""
    },
    width: {
      type: [String, Number],
      default: void 0
    },
    height: {
      type: [String, Number],
      default: void 0
    }
  },
  setup(__props) {
    const props = __props;
    const refinedSrc = computed(() => {
      var _a;
      if (((_a = props.src) == null ? void 0 : _a.startsWith("/")) && !props.src.startsWith("//")) {
        return withBase(props.src, useRuntimeConfig().app.baseURL);
      }
      return props.src;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<img${ssrRenderAttrs(mergeProps(_ctx.$attrs, {
        src: unref(refinedSrc),
        alt: __props.alt,
        width: __props.width,
        height: __props.height
      }, _attrs))} data-v-2ef15301>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/typography/components/global/ProseImg.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ProseImg = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2ef15301"]]);

export { ProseImg as default };
//# sourceMappingURL=ProseImg-f3012414.mjs.map
