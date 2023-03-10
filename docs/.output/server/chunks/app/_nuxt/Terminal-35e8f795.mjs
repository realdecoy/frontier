import { useSSRContext, defineComponent, ref, mergeProps, unref } from 'vue';
import { ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';
import { u as useClipboard } from './index-1624a23e.mjs';
import { _ as _export_sfc } from './Container-1291608c.mjs';
import 'nanoid';
import 'scule';
import 'defu';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Terminal",
  __ssrInlineRender: true,
  props: {
    content: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    useClipboard();
    const state = ref("init");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "terminal" }, _attrs))} data-v-d84ad68b>`);
      if (unref(state) === "copied") {
        _push(`<div class="copied" data-v-d84ad68b><div class="scrim" data-v-d84ad68b></div><div class="content" data-v-d84ad68b> Copied! </div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="header" data-v-d84ad68b><div class="controls" data-v-d84ad68b><div data-v-d84ad68b></div><div data-v-d84ad68b></div><div data-v-d84ad68b></div></div><div class="title" data-v-d84ad68b> Bash </div></div><div class="window" data-v-d84ad68b><span class="sign" data-v-d84ad68b>$</span><span class="content" data-v-d84ad68b>${ssrInterpolate(__props.content)}</span></div>`);
      if (unref(state) !== "copied") {
        _push(`<div class="prompt" data-v-d84ad68b> Click to copy </div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/elements/components/globals/Terminal.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d84ad68b"]]);

export { __nuxt_component_2 as default };
//# sourceMappingURL=Terminal-35e8f795.mjs.map
