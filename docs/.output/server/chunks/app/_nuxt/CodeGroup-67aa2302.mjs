import { defineComponent, h, useSSRContext } from 'vue';
import __nuxt_component_0 from './TabsHeader-c9b56dab.mjs';
import { _ as _export_sfc } from './Container-1291608c.mjs';
import 'vue/server-renderer';
import 'nanoid';
import 'scule';
import 'defu';

const isTag = (slot, tag) => {
  return slot.type && slot.type.tag && slot.type.tag === tag;
};
const _sfc_main = defineComponent({
  data() {
    return {
      activeTabIndex: 0,
      /**
       * A simple number that increases on every changes
       */
      counter: 0
    };
  },
  render() {
    var _a, _b;
    const slots = ((_b = (_a = this.$slots) == null ? void 0 : _a.default) == null ? void 0 : _b.call(_a)) || [];
    const tabs = slots.filter((slot) => isTag(slot, "code-block") || isTag(slot, "code")).map((slot, index) => {
      var _a2, _b2, _c;
      return {
        label: ((_a2 = slot == null ? void 0 : slot.props) == null ? void 0 : _a2.filename) || ((_b2 = slot == null ? void 0 : slot.props) == null ? void 0 : _b2.label) || `${index}`,
        active: ((_c = slot == null ? void 0 : slot.props) == null ? void 0 : _c.active) || false,
        component: slot
      };
    });
    return h(
      "div",
      {
        class: {
          "code-group": true,
          "first-tab": this.activeTabIndex === 0
        }
      },
      [
        h(__nuxt_component_0, {
          ref: "tabs-header",
          activeTabIndex: this.activeTabIndex,
          tabs,
          "onUpdate:activeTabIndex": ($event) => this.activeTabIndex = $event
        }),
        h(
          "div",
          {
            class: "code-group-content",
            text: this.activeTabIndex
          },
          // Map slots to content children
          slots.map(
            (slot, index) => {
              var _a2, _b2;
              return h(
                "div",
                {
                  // Current slot is displayed, others are hidden
                  style: {
                    display: index === this.activeTabIndex ? "block" : "none"
                  },
                  class: {
                    "": !isTag(slot, "code")
                  }
                },
                // Display direct children if not a ```code``` block
                [
                  isTag(slot, "code") ? slot : h(
                    "div",
                    {
                      class: {
                        "preview-canvas": true
                      }
                    },
                    [((_b2 = (_a2 = slot.children) == null ? void 0 : _a2.default) == null ? void 0 : _b2.call(_a2)) || h("div")]
                  )
                ]
              );
            }
          )
        )
      ]
    );
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/elements/components/globals/CodeGroup.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CodeGroup = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3e3370af"]]);

export { CodeGroup as default };
//# sourceMappingURL=CodeGroup-67aa2302.mjs.map
