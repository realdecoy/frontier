import ContentSlot from './ContentSlot-deb25102.mjs';
import __nuxt_component_1 from './ButtonLink-df4791d5.mjs';
import __nuxt_component_2 from './Terminal-35e8f795.mjs';
import { useSSRContext, defineComponent, mergeProps, withCtx, createTextVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _export_sfc } from './Container-1291608c.mjs';
import './DocsAsideTree-136bd08b.mjs';
import 'ufo';
import './app.config-832f5f68.mjs';
import 'hookable';
import 'unctx';
import 'h3';
import './useDocus-928368c4.mjs';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import 'nanoid';
import 'scule';
import 'defu';
import './index-1624a23e.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "BlockHero",
  __ssrInlineRender: true,
  props: {
    cta: {
      type: Array,
      required: false
    },
    secondary: {
      type: Array,
      required: false
    },
    snippet: {
      type: String,
      required: false
    },
    video: {
      type: Array,
      required: false
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ContentSlot = ContentSlot;
      const _component_ButtonLink = __nuxt_component_1;
      const _component_Terminal = __nuxt_component_2;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "block-hero" }, _attrs))} data-v-27211c58><div class="layout" data-v-27211c58><div class="content" data-v-27211c58>`);
      if (_ctx.$slots.announce) {
        _push(`<p class="announce" data-v-27211c58>`);
        _push(ssrRenderComponent(_component_ContentSlot, {
          use: _ctx.$slots.announce,
          unwrap: "p"
        }, null, _parent));
        _push(`</p>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.$slots.title) {
        _push(`<h1 class="title" data-v-27211c58>`);
        _push(ssrRenderComponent(_component_ContentSlot, {
          use: _ctx.$slots.title,
          unwrap: "p"
        }, null, _parent));
        _push(`</h1>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.$slots.description) {
        _push(`<p class="description" data-v-27211c58>`);
        _push(ssrRenderComponent(_component_ContentSlot, {
          use: _ctx.$slots.description,
          unwrap: "p"
        }, null, _parent));
        _push(`</p>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.$slots.extra) {
        _push(`<div class="extra" data-v-27211c58>`);
        _push(ssrRenderComponent(_component_ContentSlot, {
          use: _ctx.$slots.extra,
          unwrap: "p"
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="actions" data-v-27211c58>`);
      if (!_ctx.$slots.actions) {
        _push(`<!--[-->`);
        if (__props.cta) {
          _push(ssrRenderComponent(_component_ButtonLink, {
            class: "cta",
            bold: "",
            size: "medium",
            href: __props.cta[1]
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(__props.cta[0])}`);
              } else {
                return [
                  createTextVNode(toDisplayString(__props.cta[0]), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        if (__props.secondary) {
          _push(`<a${ssrRenderAttr("href", __props.secondary[1])} class="secondary" data-v-27211c58>${ssrInterpolate(__props.secondary[0])}</a>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      } else {
        _push(ssrRenderComponent(_component_ContentSlot, {
          use: _ctx.$slots.actions,
          unwrap: "p"
        }, null, _parent));
      }
      _push(`</div></div><div class="support" data-v-27211c58>`);
      ssrRenderSlot(_ctx.$slots, "support", {}, () => {
        if (__props.snippet) {
          _push(ssrRenderComponent(_component_Terminal, { content: __props.snippet }, null, _parent));
        } else {
          _push(`<!---->`);
        }
      }, _push, _parent);
      _push(`</div></div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/elements/components/landing/BlockHero.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const BlockHero = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-27211c58"]]);

export { BlockHero as default };
//# sourceMappingURL=BlockHero-f586796f.mjs.map
