import _sfc_main$1 from './NuxtImg-89991070.mjs';
import { useSSRContext, defineComponent, computed, ref, mergeProps, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from './Container-1291608c.mjs';
import './app.config-832f5f68.mjs';
import 'hookable';
import 'unctx';
import 'ufo';
import 'h3';
import 'nanoid';
import 'scule';
import 'defu';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "VideoPlayer",
  __ssrInlineRender: true,
  props: {
    poster: {
      type: String,
      default: ""
    },
    src: {
      type: String,
      default: ""
    },
    sources: {
      type: Array,
      default: () => []
    },
    autoplay: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const props = __props;
    const provider = computed(() => {
      if (props.src && props.src.includes("youtube.com/watch")) {
        const match = props.src.match(/\?v=([^&]*)/);
        return {
          name: "youtube",
          src: `https://www.youtube-nocookie.com/embed/${(match == null ? void 0 : match[1]) || ""}?autoplay=1`,
          poster: props.poster || `https://i3.ytimg.com/vi/${(match == null ? void 0 : match[1]) || ""}/hqdefault.jpg`
        };
      }
    });
    const loaded = ref(false);
    if (!props.src && !props.sources.length) {
      throw new Error("VideoPlayer: you need to provide either `src` or `sources` props");
    }
    const src = computed(() => {
      var _a, _b;
      return props.src || ((_b = (_a = props.sources) == null ? void 0 : _a[0]) == null ? void 0 : _b.src) || false;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["video-player", { loaded: unref(loaded) }]
      }, _attrs))} data-v-3c798ec4>`);
      if (unref(provider) ? unref(provider).poster : __props.poster) {
        _push(ssrRenderComponent(_component_NuxtImg, {
          src: unref(provider) ? unref(provider).poster : __props.poster
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(loaded)) {
        _push(`<div class="loaded" data-v-3c798ec4>`);
        if (!unref(provider)) {
          _push(`<video${ssrRenderAttr("poster", __props.poster)} controls autoplay data-v-3c798ec4>`);
          if (unref(src)) {
            _push(`<source${ssrRenderAttr("src", unref(src))} data-v-3c798ec4>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<!--[-->`);
          ssrRenderList(__props.sources, (source) => {
            _push(`<source${ssrRenderAttr("src", source.src || source)}${ssrRenderAttr("type", source.type)} data-v-3c798ec4>`);
          });
          _push(`<!--]--></video>`);
        } else if (unref(provider).name === "youtube") {
          _push(`<iframe allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"${ssrIncludeBooleanAttr(__props.autoplay) ? " autoplay" : ""}${ssrRenderAttr("src", unref(provider).src)} data-v-3c798ec4></iframe>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (!unref(loaded)) {
        _push(`<div class="play-button" data-v-3c798ec4><button data-v-3c798ec4></button></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/elements/components/globals/VideoPlayer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const VideoPlayer = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3c798ec4"]]);

export { VideoPlayer as default };
//# sourceMappingURL=VideoPlayer-2b282302.mjs.map
