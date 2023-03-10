import { u as useNuxtApp } from './app.config-832f5f68.mjs';
import { useSSRContext, defineComponent, ref, onUnmounted } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './Container-1291608c.mjs';
import 'hookable';
import 'unctx';
import 'ufo';
import 'h3';
import 'nanoid';
import 'scule';
import 'defu';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ContentPreviewMode",
  __ssrInlineRender: true,
  props: {
    previewToken: {
      type: Object,
      required: true
    },
    apiURL: {
      type: String,
      required: true
    },
    syncPreview: {
      type: Function,
      required: true
    },
    requestPreviewSyncAPI: {
      type: Function,
      required: true
    }
  },
  setup(__props) {
    const previewClasses = ["__nuxt_preview", "__preview_enabled"];
    useNuxtApp();
    const open = ref(true);
    const refreshing = ref(false);
    const previewReady = ref(false);
    const error = ref("");
    onUnmounted(() => {
      document.body.classList.remove(...previewClasses);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-572e7d1a>`);
      if (open.value) {
        _push(`<div id="__nuxt_preview" class="${ssrRenderClass({ __preview_ready: previewReady.value, __preview_refreshing: refreshing.value })}" data-v-572e7d1a>`);
        if (previewReady.value) {
          _push(`<!--[--><svg viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-572e7d1a><path d="M50.0016 71.0999h29.2561c.9293.0001 1.8422-.241 2.6469-.6992.8047-.4582 1.4729-1.1173 1.9373-1.9109.4645-.7936.7088-1.6939.7083-2.6102-.0004-.9162-.2455-1.8163-.7106-2.6095L64.192 29.713c-.4644-.7934-1.1325-1.4523-1.937-1.9105-.8046-.4581-1.7173-.6993-2.6463-.6993-.9291 0-1.8418.2412-2.6463.6993-.8046.4582-1.4726 1.1171-1.937 1.9105l-5.0238 8.5861-9.8224-16.7898c-.4648-.7934-1.1332-1.4522-1.938-1.9102-.8047-.4581-1.7176-.6992-2.6468-.6992-.9292 0-1.842.2411-2.6468.6992-.8048.458-1.4731 1.1168-1.9379 1.9102L6.56062 63.2701c-.46512.7932-.71021 1.6933-.71061 2.6095-.00041.9163.24389 1.8166.70831 2.6102.46443.7936 1.1326 1.4527 1.93732 1.9109.80473.4582 1.71766.6993 2.64686.6992h18.3646c7.2763 0 12.6422-3.1516 16.3345-9.3002l8.9642-15.3081 4.8015-8.1925 14.4099 24.6083H54.8058l-4.8042 8.1925ZM29.2077 62.899l-12.8161-.0028L35.603 30.0869l9.5857 16.4047-6.418 10.9645c-2.4521 3.9894-5.2377 5.4429-9.563 5.4429Z" fill="currentColor" data-v-572e7d1a></path></svg><span data-v-572e7d1a>Preview mode enabled</span><button data-v-572e7d1a> Close </button><!--]-->`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (open.value && !previewReady.value && !error.value) {
        _push(`<div data-v-572e7d1a><div id="__preview_background" data-v-572e7d1a></div><div id="__preview_loader" data-v-572e7d1a><svg id="__preview_loading_icon" width="32" height="32" viewBox="0 0 24 24" data-v-572e7d1a><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 0 0 4.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 0 1-15.357-2m15.357 2H15" data-v-572e7d1a></path></svg><p data-v-572e7d1a>Initializing the preview...</p><button data-v-572e7d1a> Cancel </button></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (error.value) {
        _push(`<div data-v-572e7d1a><div id="__preview_background" data-v-572e7d1a></div><div id="__preview_loader" data-v-572e7d1a><p data-v-572e7d1a>${ssrInterpolate(error.value)}</p><button data-v-572e7d1a> Exit preview </button></div></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxthq/studio/dist/runtime/components/ContentPreviewMode.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ContentPreviewMode = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-572e7d1a"]]);

export { ContentPreviewMode as default };
//# sourceMappingURL=ContentPreviewMode-97e009a4.mjs.map
