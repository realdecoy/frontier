import { u as useUnwrap, _ as __nuxt_component_0$1 } from './DocsAsideTree-136bd08b.mjs';
import ContentSlot from './ContentSlot-deb25102.mjs';
import { defineComponent, useSlots, computed, h, useSSRContext } from 'vue';
import { _ as _export_sfc } from './Container-1291608c.mjs';
import 'ufo';
import './app.config-832f5f68.mjs';
import 'hookable';
import 'unctx';
import 'h3';
import './useDocus-928368c4.mjs';
import 'vue/server-renderer';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import 'nanoid';
import 'scule';
import 'defu';

const iconTypeMap = {
  primary: "heroicons-outline:check",
  info: "heroicons-outline:information-circle",
  success: "heroicons-outline:check-circle",
  warning: "heroicons-outline:exclamation",
  danger: "heroicons-outline:exclamation-circle"
};
const _sfc_main = defineComponent({
  props: {
    /**
     * Used to override the default <code>type</code> icon, check out the
     *  <a href="https://github.com/nuxt/content/tree/dev/packages/theme-docs/src/components/global/icons">icons available</a>
     */
    icon: {
      type: String,
      default: null
    },
    /**
     * Type of list
     */
    type: {
      type: String,
      default: "primary",
      validator: (value) => ["primary", "info", "success", "warning", "danger"].includes(value)
    }
  },
  setup(props) {
    const slots = useSlots();
    const { flatUnwrap, unwrap } = useUnwrap();
    const iconName = computed(() => props.icon || iconTypeMap[props.type]);
    return () => {
      var _a;
      const items = flatUnwrap((_a = slots.default && slots.default()) != null ? _a : [], ["ul"]).map((li) => unwrap(li, ["li"]));
      return h(
        "ul",
        items.map(
          (item) => h("li", [
            h("span", { class: `list-icon ${props.type}` }, h(__nuxt_component_0$1, { name: iconName.value, class: "icon" })),
            h("span", h(ContentSlot, { use: () => item }))
          ])
        )
      );
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/elements/components/globals/List.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const List = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f4e70c29"]]);

export { List as default };
//# sourceMappingURL=List-12ebf73c.mjs.map
