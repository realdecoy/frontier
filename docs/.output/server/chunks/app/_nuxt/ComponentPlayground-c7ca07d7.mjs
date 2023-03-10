import { defineComponent, computed, resolveComponent, ref, h, useSSRContext, unref } from 'vue';
import { u as useNuxtApp } from './app.config-832f5f68.mjs';
import { u as useAsyncData } from './asyncData-c43d4319.mjs';
import Ellipsis from './Ellipsis-b69b027e.mjs';
import ComponentPlaygroundData from './ComponentPlaygroundData-d25a0f8e.mjs';
import { _ as _export_sfc } from './Container-1291608c.mjs';
import 'hookable';
import 'unctx';
import 'ufo';
import 'h3';
import '../server.mjs';
import 'ofetch';
import '@unhead/vue';
import '@unhead/dom';
import '@unhead/ssr';
import 'vue-router';
import './useDocus-928368c4.mjs';
import 'ohash';
import './query-dd064fd9.mjs';
import 'cookie-es';
import 'destr';
import './DocsAsideTree-136bd08b.mjs';
import 'vue/server-renderer';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import 'nanoid';
import 'scule';
import 'defu';
import '../../nitro/config.mjs';
import './TabsHeader-c9b56dab.mjs';
import './ComponentPlaygroundProps-8f45f1a7.mjs';
import './ProseH4-4f0da863.mjs';
import './ProseCodeInline-960b9a43.mjs';
import './Badge-5f9ab214.mjs';
import './ContentSlot-deb25102.mjs';
import './ProseP-a91aeff7.mjs';
import './index-1624a23e.mjs';
import './ComponentPlaygroundSlots-0dbd767a.mjs';
import './ComponentPlaygroundTokens-548a0a2d.mjs';

async function useComponentMeta(componentName) {
  useNuxtApp();
  const _componentName = unref(componentName);
  {
    const { data } = await useAsyncData(
      `nuxt-component-meta${_componentName ? `-${_componentName}` : ""}`,
      () => {
        return $fetch(`/api/component-meta${_componentName ? `/${_componentName}` : ""}`);
      }
    );
    return computed(() => data.value);
  }
}
const _sfc_main = defineComponent({
  props: {
    component: {
      type: String,
      required: true
    },
    props: {
      type: Object,
      required: false,
      default: () => ({})
    }
  },
  async setup(props) {
    const as = computed(() => resolveComponent(props.component));
    const formProps = ref({
      ...props.props
    });
    const componentData = await useComponentMeta(props.component);
    return {
      as,
      formProps,
      componentData
    };
  },
  render(ctx) {
    const componentSlots = Object.entries(this.$slots).reduce(
      (acc, [key, slot]) => {
        if (key.startsWith("component-")) {
          const slotKey = key.replace("component-", "");
          acc[slotKey] = slot;
        }
        return acc;
      },
      {}
    );
    return h(
      "div",
      {
        class: "component-playground"
      },
      [
        h(
          "div",
          {
            class: "component-playground-wrapper"
          },
          [
            h(
              Ellipsis,
              {
                class: "component-playground-ellipsis",
                blur: "5vw",
                height: "100%",
                width: "100%"
              }
            ),
            h(
              ctx.as,
              {
                ...ctx.formProps,
                class: "component-playground-component"
              },
              {
                ...componentSlots
              }
            )
          ]
        ),
        h(
          ComponentPlaygroundData,
          {
            modelValue: ctx.formProps,
            componentData: ctx.componentData,
            "onUpdate:modelValue": (val) => ctx.formProps = val
          }
        )
      ]
    );
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/elements/components/meta/ComponentPlayground.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ComponentPlayground = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9ca9b996"]]);

export { ComponentPlayground as default };
//# sourceMappingURL=ComponentPlayground-c7ca07d7.mjs.map
