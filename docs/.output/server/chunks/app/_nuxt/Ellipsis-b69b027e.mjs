import { useSSRContext, defineComponent, computed, ref, mergeProps, unref } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc, u as utils, b as usePinceauRuntime } from './Container-1291608c.mjs';
import 'nanoid';
import 'scule';
import 'defu';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Ellipsis",
  __ssrInlineRender: true,
  props: {
    width: {
      type: String,
      default: "10rem"
    },
    height: {
      type: String,
      default: "10rem"
    },
    zIndex: {
      type: String,
      default: "10"
    },
    top: {
      type: String,
      default: "0"
    },
    left: {
      type: String,
      default: "auto"
    },
    right: {
      type: String,
      default: "auto"
    },
    blur: {
      type: String,
      default: "50px"
    },
    colors: {
      type: Array,
      default: () => ["rgba(0, 71, 225, 0.22)", "rgba(26, 214, 255, 0.22)", "rgba(0, 220, 130, 0.22)"]
    }
  },
  setup(__props) {
    const __$pProps = __props;
    const _cCN_top = computed(() => ((props = __$pProps, utils$1 = utils) => props.top)());
    const _eih_left = computed(() => ((props = __$pProps, utils$1 = utils) => props.left)());
    const _hvR_right = computed(() => ((props = __$pProps, utils$1 = utils) => props.right)());
    const _29W_zIndex = computed(() => ((props = __$pProps, utils$1 = utils) => props.zIndex)());
    const _X8m_maxWidth = computed(() => ((props = __$pProps, utils$1 = utils) => props.width)());
    const _UBM_height = computed(() => ((props = __$pProps, utils$1 = utils) => props.height)());
    const _gOh_filter = computed(() => ((props = __$pProps, utils$1 = utils) => `blur(${props.blur})`)());
    const _60h_background = computed(() => ((props = __$pProps, utils$1 = utils) => {
      var _a, _b, _c;
      return `linear-gradient(97.62deg, ${(_a = props == null ? void 0 : props.colors) == null ? void 0 : _a[0]} 2.27%, ${(_b = props == null ? void 0 : props.colors) == null ? void 0 : _b[1]} 50.88%, ${(_c = props == null ? void 0 : props.colors) == null ? void 0 : _c[2]} 98.48%)`;
    })());
    const { $pinceau } = usePinceauRuntime(computed(() => __$pProps), void 0, ref({ _cCN_top, _eih_left, _hvR_right, _29W_zIndex, _X8m_maxWidth, _UBM_height, _gOh_filter, _60h_background }));
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["ellipsis", [unref($pinceau)]]
      }, _attrs))} data-v-861d2ab7><div class="ellipsis-item" data-v-861d2ab7></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/elements/components/globals/Ellipsis.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Ellipsis = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-861d2ab7"]]);

export { Ellipsis as default };
//# sourceMappingURL=Ellipsis-b69b027e.mjs.map
