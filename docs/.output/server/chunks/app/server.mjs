import { version, defineAsyncComponent, useSSRContext, defineComponent, ref, createElementBlock, unref, watch, h, Suspense, nextTick, Transition, computed, provide, reactive, shallowRef, isReadonly, mergeProps, withCtx, openBlock, createBlock, createCommentVNode, createVNode, resolveDynamicComponent, toDisplayString, createTextVNode, createElementVNode, Fragment as Fragment$1, renderList, createApp, toRef, onErrorCaptured, onServerPrefetch } from 'vue';
import { $fetch as $fetch$1 } from 'ofetch';
import { u as useNuxtApp, d as defineNuxtPlugin, a as defineNuxtRouteMiddleware, b as useRuntimeConfig$1, f as useRoute, i as normalizePlugins, c as callWithNuxt, g as useRouter, h as addRouteMiddleware, e as useRequestEvent, j as createNuxtApp, k as applyPlugins, n as navigateTo, _ as __nuxt_component_0$2 } from './_nuxt/app.config-832f5f68.mjs';
import { useHead as useHead$1, createHead as createHead$1 } from '@unhead/vue';
import { renderDOMHead, debouncedRenderDOMHead } from '@unhead/dom';
import { renderSSRHead } from '@unhead/ssr';
import { executeAsync } from 'unctx';
import { RouterView, createMemoryHistory, createRouter } from 'vue-router';
import { createError as createError$1 } from 'h3';
import { withLeadingSlash, joinURL, withoutTrailingSlash, isEqual, hasProtocol, withTrailingSlash } from 'ufo';
import { u as useState, a as useAppConfig, b as useDocus, c as useContent, d as useContentState, e as useContentHelpers } from './_nuxt/useDocus-928368c4.mjs';
import { hash } from 'ohash';
import { c as createQuery, u as useCookie } from './_nuxt/query-dd064fd9.mjs';
import { w as withContentBase, a as addPrerenderPath, s as shouldUseClientDB, _ as __nuxt_component_0$1$1, b as __nuxt_component_0$3 } from './_nuxt/DocsAsideTree-136bd08b.mjs';
import { p as plugin, _ as _export_sfc, a as __nuxt_component_0$4 } from './_nuxt/Container-1291608c.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrRenderTeleport, ssrRenderVNode, ssrInterpolate, ssrRenderAttr, ssrRenderSlot, ssrRenderSuspense } from 'vue/server-renderer';
import { defu } from 'defu';
import { u as useRuntimeConfig } from '../nitro/config.mjs';
import 'hookable';
import 'cookie-es';
import 'destr';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import 'nanoid';
import 'scule';

const appConfig = useRuntimeConfig().app;
const baseURL = () => appConfig.baseURL;
const useError = () => toRef(useNuxtApp().payload, "error");
const showError = (_err) => {
  const err = createError(_err);
  try {
    const nuxtApp = useNuxtApp();
    nuxtApp.callHook("app:error", err);
    const error = useError();
    error.value = error.value || err;
  } catch {
    throw err;
  }
  return err;
};
const createError = (err) => {
  const _err = createError$1(err);
  _err.__nuxt_error = true;
  return _err;
};
function createHead(initHeadObject) {
  const unhead = createHead$1();
  const legacyHead = {
    unhead,
    install(app) {
      if (version.startsWith("3")) {
        app.config.globalProperties.$head = unhead;
        app.provide("usehead", unhead);
      }
    },
    use(plugin2) {
      unhead.use(plugin2);
    },
    resolveTags() {
      return unhead.resolveTags();
    },
    headEntries() {
      return unhead.headEntries();
    },
    headTags() {
      return unhead.resolveTags();
    },
    push(input, options) {
      return unhead.push(input, options);
    },
    addEntry(input, options) {
      return unhead.push(input, options);
    },
    addHeadObjs(input, options) {
      return unhead.push(input, options);
    },
    addReactiveEntry(input, options) {
      const api = useHead$1(input, options);
      if (typeof api !== "undefined")
        return api.dispose;
      return () => {
      };
    },
    removeHeadObjs() {
    },
    updateDOM(document2, force) {
      if (force)
        renderDOMHead(unhead, { document: document2 });
      else
        debouncedRenderDOMHead(unhead, { delayFn: (fn) => setTimeout(() => fn(), 50), document: document2 });
    },
    internalHooks: unhead.hooks,
    hooks: {
      "before:dom": [],
      "resolved:tags": [],
      "resolved:entries": []
    }
  };
  unhead.addHeadObjs = legacyHead.addHeadObjs;
  unhead.updateDOM = legacyHead.updateDOM;
  unhead.hooks.hook("dom:beforeRender", (ctx) => {
    for (const hook of legacyHead.hooks["before:dom"]) {
      if (hook() === false)
        ctx.shouldRender = false;
    }
  });
  if (initHeadObject)
    legacyHead.addHeadObjs(initHeadObject);
  return legacyHead;
}
version.startsWith("2.");
function useHead(input, options) {
  return useNuxtApp()._useHead(input, options);
}
const components = {
  ExampleCard: defineAsyncComponent(() => import(
    './_nuxt/ExampleCard-95e9f743.mjs'
    /* webpackChunkName: "components/example-card" */
  ).then((c) => c.default || c)),
  ExampleHero: defineAsyncComponent(() => import(
    './_nuxt/ExampleHero-8fe98ee8.mjs'
    /* webpackChunkName: "components/example-hero" */
  ).then((c) => c.default || c)),
  ExampleIconCard: defineAsyncComponent(() => import(
    './_nuxt/ExampleIconCard-a87d1258.mjs'
    /* webpackChunkName: "components/example-icon-card" */
  ).then((c) => c.default || c)),
  ExampleMultiselect: defineAsyncComponent(() => import(
    './_nuxt/ExampleMultiselect-915c74fe.mjs'
    /* webpackChunkName: "components/example-multiselect" */
  ).then((c) => c.default || c)),
  ExampleTheTitle: defineAsyncComponent(() => import(
    './_nuxt/ExampleTheTitle-9f1c4a8d.mjs'
    /* webpackChunkName: "components/example-the-title" */
  ).then((c) => c.default || c)),
  HeroAnnouncement: defineAsyncComponent(() => import(
    './_nuxt/HeroAnnouncement-a479df93.mjs'
    /* webpackChunkName: "components/hero-announcement" */
  ).then((c) => c.default || c)),
  IconMarkdown: defineAsyncComponent(() => import(
    './_nuxt/IconMarkdown-092c828f.mjs'
    /* webpackChunkName: "components/icon-markdown" */
  ).then((c) => c.default || c)),
  Logo: defineAsyncComponent(() => Promise.resolve().then(function() {
    return Logo;
  }).then((c) => c.default || c)),
  MyButton: defineAsyncComponent(() => import(
    './_nuxt/MyButton-a7c11108.mjs'
    /* webpackChunkName: "components/my-button" */
  ).then((c) => c.default || c)),
  PropInspector: defineAsyncComponent(() => import(
    './_nuxt/PropInspector-d4a70134.mjs'
    /* webpackChunkName: "components/prop-inspector" */
  ).then((c) => c.default || c)),
  ReadMore: defineAsyncComponent(() => import(
    './_nuxt/ReadMore-4e2f1622.mjs'
    /* webpackChunkName: "components/read-more" */
  ).then((c) => c.default || c)),
  AppFooter: defineAsyncComponent(() => Promise.resolve().then(function() {
    return AppFooter;
  }).then((c) => c.default || c)),
  AppHeader: defineAsyncComponent(() => Promise.resolve().then(function() {
    return AppHeader;
  }).then((c) => c.default || c)),
  AppHeaderDialog: defineAsyncComponent(() => Promise.resolve().then(function() {
    return AppHeaderDialog;
  }).then((c) => c.default || c)),
  AppHeaderLogo: defineAsyncComponent(() => Promise.resolve().then(function() {
    return AppHeaderLogo;
  }).then((c) => c.default || c)),
  AppHeaderNavigation: defineAsyncComponent(() => Promise.resolve().then(function() {
    return AppHeaderNavigation;
  }).then((c) => c.default || c)),
  AppLayout: defineAsyncComponent(() => Promise.resolve().then(function() {
    return AppLayout;
  }).then((c) => c.default || c)),
  AppLoadingBar: defineAsyncComponent(() => Promise.resolve().then(function() {
    return AppLoadingBar;
  }).then((c) => c.default || c)),
  AppSearch: defineAsyncComponent(() => Promise.resolve().then(function() {
    return AppSearch;
  }).then((c) => c.default || c)),
  AppSocialIcons: defineAsyncComponent(() => Promise.resolve().then(function() {
    return AppSocialIcons;
  }).then((c) => c.default || c)),
  DocumentDrivenNotFound: defineAsyncComponent(() => import(
    './_nuxt/DocumentDrivenNotFound-4b73ea08.mjs'
    /* webpackChunkName: "components/document-driven-not-found" */
  ).then((c) => c.default || c)),
  ThemeSelect: defineAsyncComponent(() => Promise.resolve().then(function() {
    return ThemeSelect;
  }).then((c) => c.default || c)),
  DocsAside: defineAsyncComponent(() => import(
    './_nuxt/DocsAside-a41d5eb9.mjs'
    /* webpackChunkName: "components/docs-aside" */
  ).then((c) => c.default || c)),
  DocsAsideTree: defineAsyncComponent(() => import(
    './_nuxt/DocsAsideTree-136bd08b.mjs'
    /* webpackChunkName: "components/docs-aside-tree" */
  ).then(function(n) {
    return n.D;
  }).then((c) => c.default || c)),
  DocsPageBottom: defineAsyncComponent(() => import(
    './_nuxt/DocsPageBottom-270eacfc.mjs'
    /* webpackChunkName: "components/docs-page-bottom" */
  ).then((c) => c.default || c)),
  DocsPageLayout: defineAsyncComponent(() => import(
    './_nuxt/DocsPageLayout-4c2ead4a.mjs'
    /* webpackChunkName: "components/docs-page-layout" */
  ).then((c) => c.default || c)),
  DocsPrevNext: defineAsyncComponent(() => import(
    './_nuxt/DocsPrevNext-7858c09b.mjs'
    /* webpackChunkName: "components/docs-prev-next" */
  ).then((c) => c.default || c)),
  DocsToc: defineAsyncComponent(() => import(
    './_nuxt/DocsToc-e4f6bd56.mjs'
    /* webpackChunkName: "components/docs-toc" */
  ).then((c) => c.default || c)),
  DocsTocLinks: defineAsyncComponent(() => import(
    './_nuxt/DocsTocLinks-95d48629.mjs'
    /* webpackChunkName: "components/docs-toc-links" */
  ).then((c) => c.default || c)),
  EditOnLink: defineAsyncComponent(() => import(
    './_nuxt/EditOnLink-e55cd3a0.mjs'
    /* webpackChunkName: "components/edit-on-link" */
  ).then((c) => c.default || c)),
  ProseA: defineAsyncComponent(() => import(
    './_nuxt/ProseA-86ef3985.mjs'
    /* webpackChunkName: "components/prose-a" */
  ).then((c) => c.default || c)),
  ProseBlockquote: defineAsyncComponent(() => import(
    './_nuxt/ProseBlockquote-faf6e310.mjs'
    /* webpackChunkName: "components/prose-blockquote" */
  ).then((c) => c.default || c)),
  ProseCode: defineAsyncComponent(() => import(
    './_nuxt/ProseCode-94b7281d.mjs'
    /* webpackChunkName: "components/prose-code" */
  ).then(function(n) {
    return n.a;
  }).then((c) => c.default || c)),
  ProseCodeInline: defineAsyncComponent(() => import(
    './_nuxt/ProseCodeInline-960b9a43.mjs'
    /* webpackChunkName: "components/prose-code-inline" */
  ).then((c) => c.default || c)),
  ProseEm: defineAsyncComponent(() => import(
    './_nuxt/ProseEm-f52fc33d.mjs'
    /* webpackChunkName: "components/prose-em" */
  ).then((c) => c.default || c)),
  ProseH1: defineAsyncComponent(() => import(
    './_nuxt/ProseH1-81b8c44a.mjs'
    /* webpackChunkName: "components/prose-h1" */
  ).then((c) => c.default || c)),
  ProseH2: defineAsyncComponent(() => import(
    './_nuxt/ProseH2-abc0d7da.mjs'
    /* webpackChunkName: "components/prose-h2" */
  ).then((c) => c.default || c)),
  ProseH3: defineAsyncComponent(() => import(
    './_nuxt/ProseH3-6c54494a.mjs'
    /* webpackChunkName: "components/prose-h3" */
  ).then((c) => c.default || c)),
  ProseH4: defineAsyncComponent(() => import(
    './_nuxt/ProseH4-4f0da863.mjs'
    /* webpackChunkName: "components/prose-h4" */
  ).then((c) => c.default || c)),
  ProseH5: defineAsyncComponent(() => import(
    './_nuxt/ProseH5-0c6e8cd8.mjs'
    /* webpackChunkName: "components/prose-h5" */
  ).then((c) => c.default || c)),
  ProseH6: defineAsyncComponent(() => import(
    './_nuxt/ProseH6-cffb1b40.mjs'
    /* webpackChunkName: "components/prose-h6" */
  ).then((c) => c.default || c)),
  ProseHr: defineAsyncComponent(() => import(
    './_nuxt/ProseHr-fa0af264.mjs'
    /* webpackChunkName: "components/prose-hr" */
  ).then((c) => c.default || c)),
  ProseImg: defineAsyncComponent(() => import(
    './_nuxt/ProseImg-f3012414.mjs'
    /* webpackChunkName: "components/prose-img" */
  ).then((c) => c.default || c)),
  ProseLi: defineAsyncComponent(() => import(
    './_nuxt/ProseLi-948accef.mjs'
    /* webpackChunkName: "components/prose-li" */
  ).then((c) => c.default || c)),
  ProseOl: defineAsyncComponent(() => import(
    './_nuxt/ProseOl-b8e80875.mjs'
    /* webpackChunkName: "components/prose-ol" */
  ).then((c) => c.default || c)),
  ProseP: defineAsyncComponent(() => import(
    './_nuxt/ProseP-a91aeff7.mjs'
    /* webpackChunkName: "components/prose-p" */
  ).then((c) => c.default || c)),
  ProseStrong: defineAsyncComponent(() => import(
    './_nuxt/ProseStrong-246281a0.mjs'
    /* webpackChunkName: "components/prose-strong" */
  ).then((c) => c.default || c)),
  ProseTable: defineAsyncComponent(() => import(
    './_nuxt/ProseTable-425d227b.mjs'
    /* webpackChunkName: "components/prose-table" */
  ).then((c) => c.default || c)),
  ProseTbody: defineAsyncComponent(() => import(
    './_nuxt/ProseTbody-f622755a.mjs'
    /* webpackChunkName: "components/prose-tbody" */
  ).then((c) => c.default || c)),
  ProseTd: defineAsyncComponent(() => import(
    './_nuxt/ProseTd-ce60dd42.mjs'
    /* webpackChunkName: "components/prose-td" */
  ).then((c) => c.default || c)),
  ProseTh: defineAsyncComponent(() => import(
    './_nuxt/ProseTh-8250ce9f.mjs'
    /* webpackChunkName: "components/prose-th" */
  ).then((c) => c.default || c)),
  ProseThead: defineAsyncComponent(() => import(
    './_nuxt/ProseThead-7ba76e48.mjs'
    /* webpackChunkName: "components/prose-thead" */
  ).then((c) => c.default || c)),
  ProseTr: defineAsyncComponent(() => import(
    './_nuxt/ProseTr-6559f7d8.mjs'
    /* webpackChunkName: "components/prose-tr" */
  ).then((c) => c.default || c)),
  ProseUl: defineAsyncComponent(() => import(
    './_nuxt/ProseUl-79ecc4c5.mjs'
    /* webpackChunkName: "components/prose-ul" */
  ).then((c) => c.default || c)),
  Alert: defineAsyncComponent(() => import(
    './_nuxt/Alert-2b29f746.mjs'
    /* webpackChunkName: "components/alert" */
  ).then((c) => c.default || c)),
  Badge: defineAsyncComponent(() => import(
    './_nuxt/Badge-5f9ab214.mjs'
    /* webpackChunkName: "components/badge" */
  ).then((c) => c.default || c)),
  ButtonLink: defineAsyncComponent(() => import(
    './_nuxt/ButtonLink-df4791d5.mjs'
    /* webpackChunkName: "components/button-link" */
  ).then((c) => c.default || c)),
  Callout: defineAsyncComponent(() => import(
    './_nuxt/Callout-fc92c8b7.mjs'
    /* webpackChunkName: "components/callout" */
  ).then((c) => c.default || c)),
  CodeBlock: defineAsyncComponent(() => import(
    './_nuxt/CodeBlock-f6f4711b.mjs'
    /* webpackChunkName: "components/code-block" */
  ).then((c) => c.default || c)),
  CodeGroup: defineAsyncComponent(() => import(
    './_nuxt/CodeGroup-67aa2302.mjs'
    /* webpackChunkName: "components/code-group" */
  ).then((c) => c.default || c)),
  Container: defineAsyncComponent(() => import(
    './_nuxt/Container-1291608c.mjs'
    /* webpackChunkName: "components/container" */
  ).then(function(n) {
    return n.C;
  }).then((c) => c.default || c)),
  CopyButton: defineAsyncComponent(() => import(
    './_nuxt/CopyButton-155eba98.mjs'
    /* webpackChunkName: "components/copy-button" */
  ).then((c) => c.default || c)),
  Ellipsis: defineAsyncComponent(() => import(
    './_nuxt/Ellipsis-b69b027e.mjs'
    /* webpackChunkName: "components/ellipsis" */
  ).then((c) => c.default || c)),
  List: defineAsyncComponent(() => import(
    './_nuxt/List-12ebf73c.mjs'
    /* webpackChunkName: "components/list" */
  ).then((c) => c.default || c)),
  NuxtImg: defineAsyncComponent(() => import(
    './_nuxt/NuxtImg-89991070.mjs'
    /* webpackChunkName: "components/nuxt-img" */
  ).then((c) => c.default || c)),
  Props: defineAsyncComponent(() => import(
    './_nuxt/Props-c617d5b2.mjs'
    /* webpackChunkName: "components/props" */
  ).then((c) => c.default || c)),
  Sandbox: defineAsyncComponent(() => import(
    './_nuxt/Sandbox-3e5bdd00.mjs'
    /* webpackChunkName: "components/sandbox" */
  ).then((c) => c.default || c)),
  SourceLink: defineAsyncComponent(() => import(
    './_nuxt/SourceLink-c27fde85.mjs'
    /* webpackChunkName: "components/source-link" */
  ).then((c) => c.default || c)),
  TabsHeader: defineAsyncComponent(() => import(
    './_nuxt/TabsHeader-c9b56dab.mjs'
    /* webpackChunkName: "components/tabs-header" */
  ).then((c) => c.default || c)),
  Terminal: defineAsyncComponent(() => import(
    './_nuxt/Terminal-35e8f795.mjs'
    /* webpackChunkName: "components/terminal" */
  ).then((c) => c.default || c)),
  VideoPlayer: defineAsyncComponent(() => import(
    './_nuxt/VideoPlayer-2b282302.mjs'
    /* webpackChunkName: "components/video-player" */
  ).then((c) => c.default || c)),
  IconCodeSandBox: defineAsyncComponent(() => import(
    './_nuxt/IconCodeSandBox-289e2c7f.mjs'
    /* webpackChunkName: "components/icon-code-sand-box" */
  ).then((c) => c.default || c)),
  IconDocus: defineAsyncComponent(() => import(
    './_nuxt/IconDocus-12d300be.mjs'
    /* webpackChunkName: "components/icon-docus" */
  ).then((c) => c.default || c)),
  IconNuxt: defineAsyncComponent(() => import(
    './_nuxt/IconNuxt-c11c3c9c.mjs'
    /* webpackChunkName: "components/icon-nuxt" */
  ).then((c) => c.default || c)),
  IconNuxtContent: defineAsyncComponent(() => import(
    './_nuxt/IconNuxtContent-f8fb6ffc.mjs'
    /* webpackChunkName: "components/icon-nuxt-content" */
  ).then((c) => c.default || c)),
  IconNuxtLabs: defineAsyncComponent(() => import(
    './_nuxt/IconNuxtLabs-1b2b0005.mjs'
    /* webpackChunkName: "components/icon-nuxt-labs" */
  ).then((c) => c.default || c)),
  IconNuxtStudio: defineAsyncComponent(() => import(
    './_nuxt/IconNuxtStudio-8ac5eaa5.mjs'
    /* webpackChunkName: "components/icon-nuxt-studio" */
  ).then((c) => c.default || c)),
  IconStackBlitz: defineAsyncComponent(() => import(
    './_nuxt/IconStackBlitz-def46545.mjs'
    /* webpackChunkName: "components/icon-stack-blitz" */
  ).then((c) => c.default || c)),
  IconVueTelescope: defineAsyncComponent(() => import(
    './_nuxt/IconVueTelescope-96109b9a.mjs'
    /* webpackChunkName: "components/icon-vue-telescope" */
  ).then((c) => c.default || c)),
  BlockHero: defineAsyncComponent(() => import(
    './_nuxt/BlockHero-f586796f.mjs'
    /* webpackChunkName: "components/block-hero" */
  ).then((c) => c.default || c)),
  Card: defineAsyncComponent(() => import(
    './_nuxt/Card-2052047f.mjs'
    /* webpackChunkName: "components/card" */
  ).then((c) => c.default || c)),
  CardGrid: defineAsyncComponent(() => import(
    './_nuxt/CardGrid-160bcd85.mjs'
    /* webpackChunkName: "components/card-grid" */
  ).then((c) => c.default || c)),
  VoltaBoard: defineAsyncComponent(() => import(
    './_nuxt/VoltaBoard-98820156.mjs'
    /* webpackChunkName: "components/volta-board" */
  ).then((c) => c.default || c)),
  ComponentPlayground: defineAsyncComponent(() => import(
    './_nuxt/ComponentPlayground-c7ca07d7.mjs'
    /* webpackChunkName: "components/component-playground" */
  ).then((c) => c.default || c)),
  ComponentPlaygroundData: defineAsyncComponent(() => import(
    './_nuxt/ComponentPlaygroundData-d25a0f8e.mjs'
    /* webpackChunkName: "components/component-playground-data" */
  ).then((c) => c.default || c)),
  ComponentPlaygroundProps: defineAsyncComponent(() => import(
    './_nuxt/ComponentPlaygroundProps-8f45f1a7.mjs'
    /* webpackChunkName: "components/component-playground-props" */
  ).then((c) => c.default || c)),
  ComponentPlaygroundSlots: defineAsyncComponent(() => import(
    './_nuxt/ComponentPlaygroundSlots-0dbd767a.mjs'
    /* webpackChunkName: "components/component-playground-slots" */
  ).then((c) => c.default || c)),
  ComponentPlaygroundTokens: defineAsyncComponent(() => import(
    './_nuxt/ComponentPlaygroundTokens-548a0a2d.mjs'
    /* webpackChunkName: "components/component-playground-tokens" */
  ).then((c) => c.default || c)),
  TokensPlayground: defineAsyncComponent(() => import(
    './_nuxt/TokensPlayground-84b52014.mjs'
    /* webpackChunkName: "components/tokens-playground" */
  ).then((c) => c.default || c)),
  ContentDoc: defineAsyncComponent(() => import(
    './_nuxt/ContentDoc-608dc79a.mjs'
    /* webpackChunkName: "components/content-doc" */
  ).then((c) => c.default || c)),
  ContentList: defineAsyncComponent(() => import(
    './_nuxt/ContentList-b4b0de0d.mjs'
    /* webpackChunkName: "components/content-list" */
  ).then((c) => c.default || c)),
  ContentNavigation: defineAsyncComponent(() => import(
    './_nuxt/ContentNavigation-8bed293a.mjs'
    /* webpackChunkName: "components/content-navigation" */
  ).then((c) => c.default || c)),
  ContentQuery: defineAsyncComponent(() => import(
    './_nuxt/ContentQuery-8668b0af.mjs'
    /* webpackChunkName: "components/content-query" */
  ).then((c) => c.default || c)),
  ContentRenderer: defineAsyncComponent(() => import(
    './_nuxt/ContentRenderer-06a7c657.mjs'
    /* webpackChunkName: "components/content-renderer" */
  ).then((c) => c.default || c)),
  ContentRendererMarkdown: defineAsyncComponent(() => import(
    './_nuxt/ContentRendererMarkdown-bebf42c8.mjs'
    /* webpackChunkName: "components/content-renderer-markdown" */
  ).then((c) => c.default || c)),
  ContentSlot: defineAsyncComponent(() => import(
    './_nuxt/ContentSlot-deb25102.mjs'
    /* webpackChunkName: "components/content-slot" */
  ).then((c) => c.default || c)),
  DocumentDrivenEmpty: defineAsyncComponent(() => import(
    './_nuxt/DocumentDrivenEmpty-8338ce9f.mjs'
    /* webpackChunkName: "components/document-driven-empty" */
  ).then((c) => c.default || c)),
  Markdown: defineAsyncComponent(() => import(
    './_nuxt/Markdown-1885a814.mjs'
    /* webpackChunkName: "components/markdown" */
  ).then((c) => c.default || c)),
  GithubRepository: defineAsyncComponent(() => import(
    './_nuxt/GithubRepository-8db11ede.mjs'
    /* webpackChunkName: "components/github-repository" */
  ).then((c) => c.default || c)),
  GithubLink: defineAsyncComponent(() => import(
    './_nuxt/GithubLink-f632fd3b.mjs'
    /* webpackChunkName: "components/github-link" */
  ).then((c) => c.default || c)),
  GithubReadme: defineAsyncComponent(() => import(
    './_nuxt/GithubReadme-9e48e600.mjs'
    /* webpackChunkName: "components/github-readme" */
  ).then((c) => c.default || c)),
  GithubReleases: defineAsyncComponent(() => import(
    './_nuxt/GithubReleases-2ab96fb8.mjs'
    /* webpackChunkName: "components/github-releases" */
  ).then((c) => c.default || c)),
  GithubLastRelease: defineAsyncComponent(() => import(
    './_nuxt/GithubLastRelease-b4d6e912.mjs'
    /* webpackChunkName: "components/github-last-release" */
  ).then((c) => c.default || c)),
  GithubRelease: defineAsyncComponent(() => import(
    './_nuxt/GithubRelease-140d3d2e.mjs'
    /* webpackChunkName: "components/github-release" */
  ).then((c) => c.default || c)),
  GithubContributors: defineAsyncComponent(() => import(
    './_nuxt/GithubContributors-1aa0f22f.mjs'
    /* webpackChunkName: "components/github-contributors" */
  ).then((c) => c.default || c)),
  GithubFileContributors: defineAsyncComponent(() => import(
    './_nuxt/GithubFileContributors-285e4522.mjs'
    /* webpackChunkName: "components/github-file-contributors" */
  ).then((c) => c.default || c)),
  GithubCommits: defineAsyncComponent(() => import(
    './_nuxt/GithubCommits-b7b81c66.mjs'
    /* webpackChunkName: "components/github-commits" */
  ).then((c) => c.default || c)),
  Icon: defineAsyncComponent(() => import(
    './_nuxt/DocsAsideTree-136bd08b.mjs'
    /* webpackChunkName: "components/icon" */
  ).then(function(n) {
    return n.I;
  }).then((c) => c.default || c))
};
const components_plugin_KR1HBZs4kY = defineNuxtPlugin((nuxtApp) => {
  for (const name in components) {
    nuxtApp.vueApp.component(name, components[name]);
    nuxtApp.vueApp.component("Lazy" + name, components[name]);
  }
});
const appHead = { "meta": [{ "name": "viewport", "content": "width=device-width, initial-scale=1" }, { "charset": "utf-8" }], "link": [], "style": [], "script": [{ "defer": true, "data-domain": "frontier.realdecoy.com", "src": "https://plausible.io/js/script.js" }], "noscript": [] };
const appLayoutTransition = false;
const appPageTransition = false;
const appKeepalive = false;
const vueuse_head_plugin_D7WGfuP1A0 = defineNuxtPlugin((nuxtApp) => {
  const head = createHead();
  head.push(appHead);
  nuxtApp.vueApp.use(head);
  nuxtApp._useHead = useHead$1;
  {
    nuxtApp.ssrContext.renderMeta = async () => {
      const meta = await renderSSRHead(head.unhead);
      return {
        ...meta,
        bodyScriptsPrepend: meta.bodyTagsOpen,
        // resolves naming difference with NuxtMeta and @vueuse/head
        bodyScripts: meta.bodyTags
      };
    };
  }
});
const __nuxt_page_meta$1 = {};
const __nuxt_page_meta = {};
const _routes = [
  {
    name: (__nuxt_page_meta$1 == null ? void 0 : __nuxt_page_meta$1.name) ?? "slug",
    path: (__nuxt_page_meta$1 == null ? void 0 : __nuxt_page_meta$1.path) ?? "/:slug(.*)*",
    children: [],
    meta: __nuxt_page_meta$1,
    alias: (__nuxt_page_meta$1 == null ? void 0 : __nuxt_page_meta$1.alias) || [],
    redirect: (__nuxt_page_meta$1 == null ? void 0 : __nuxt_page_meta$1.redirect) || void 0,
    component: () => import('./_nuxt/document-driven-27005915.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta == null ? void 0 : __nuxt_page_meta.name) ?? "__app_config.json",
    path: (__nuxt_page_meta == null ? void 0 : __nuxt_page_meta.path) ?? "/__app_config.json",
    children: [],
    meta: __nuxt_page_meta,
    alias: (__nuxt_page_meta == null ? void 0 : __nuxt_page_meta.alias) || [],
    redirect: (__nuxt_page_meta == null ? void 0 : __nuxt_page_meta.redirect) || void 0,
    component: () => import('./_nuxt/empty-446a838e.mjs').then((m) => m.default || m)
  }
];
const routerOptions0 = {
  scrollBehavior(to, _form, savedPosition) {
    if (history.state.stop) {
      return;
    }
    if (history.state.smooth) {
      return {
        el: history.state.smooth,
        behavior: "smooth"
      };
    }
    if (to.hash) {
      const el = document.querySelector(to.hash);
      if (!el) {
        return;
      }
      const { marginTop } = getComputedStyle(el);
      const marginTopValue = parseInt(marginTop);
      const offset = document.querySelector(to.hash).offsetTop - marginTopValue;
      return {
        top: offset,
        behavior: "smooth"
      };
    }
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  }
};
const routerOptions1 = {
  scrollBehavior(to, from, savedPosition) {
    const nuxtApp = useNuxtApp();
    let position = savedPosition || void 0;
    if (!position && from && to && to.meta.scrollToTop !== false && _isDifferentRoute(from, to)) {
      position = { left: 0, top: 0 };
    }
    if (to.path === from.path) {
      if (from.hash && !to.hash) {
        return { left: 0, top: 0 };
      }
      if (to.hash) {
        return { el: to.hash, top: _getHashElementScrollMarginTop(to.hash) };
      }
    }
    const hasTransition = (route) => !!(route.meta.pageTransition ?? appPageTransition);
    const hookToWait = hasTransition(from) && hasTransition(to) ? "page:transition:finish" : "page:finish";
    return new Promise((resolve) => {
      nuxtApp.hooks.hookOnce(hookToWait, async () => {
        await nextTick();
        if (to.hash) {
          position = { el: to.hash, top: _getHashElementScrollMarginTop(to.hash) };
        }
        resolve(position);
      });
    });
  }
};
function _getHashElementScrollMarginTop(selector) {
  try {
    const elem = document.querySelector(selector);
    if (elem) {
      return parseFloat(getComputedStyle(elem).scrollMarginTop);
    }
  } catch {
  }
  return 0;
}
function _isDifferentRoute(a, b) {
  const samePageComponent = a.matched[0] === b.matched[0];
  if (!samePageComponent) {
    return true;
  }
  if (samePageComponent && JSON.stringify(a.params) !== JSON.stringify(b.params)) {
    return true;
  }
  return false;
}
const configRouterOptions = {};
const routerOptions = {
  ...configRouterOptions,
  ...routerOptions1,
  ...routerOptions0
};
const validate = defineNuxtRouteMiddleware(async (to) => {
  var _a;
  let __temp, __restore;
  if (!((_a = to.meta) == null ? void 0 : _a.validate)) {
    return;
  }
  const result = ([__temp, __restore] = executeAsync(() => Promise.resolve(to.meta.validate(to))), __temp = await __temp, __restore(), __temp);
  if (result === true) {
    return;
  }
  return result;
});
const globalMiddleware = [
  validate
];
const namedMiddleware = {};
const router_Pg0DINazwm = defineNuxtPlugin(async (nuxtApp) => {
  var _a, _b;
  let __temp, __restore;
  let routerBase = useRuntimeConfig$1().app.baseURL;
  if (routerOptions.hashMode && !routerBase.includes("#")) {
    routerBase += "#";
  }
  const history2 = ((_a = routerOptions.history) == null ? void 0 : _a.call(routerOptions, routerBase)) ?? createMemoryHistory(routerBase);
  const routes = ((_b = routerOptions.routes) == null ? void 0 : _b.call(routerOptions, _routes)) ?? _routes;
  const initialURL = nuxtApp.ssrContext.url;
  const router = createRouter({
    ...routerOptions,
    history: history2,
    routes
  });
  nuxtApp.vueApp.use(router);
  const previousRoute = shallowRef(router.currentRoute.value);
  router.afterEach((_to, from) => {
    previousRoute.value = from;
  });
  Object.defineProperty(nuxtApp.vueApp.config.globalProperties, "previousRoute", {
    get: () => previousRoute.value
  });
  const _route = shallowRef(router.resolve(initialURL));
  const syncCurrentRoute = () => {
    _route.value = router.currentRoute.value;
  };
  nuxtApp.hook("page:finish", syncCurrentRoute);
  router.afterEach((to, from) => {
    var _a2, _b2, _c, _d;
    if (((_b2 = (_a2 = to.matched[0]) == null ? void 0 : _a2.components) == null ? void 0 : _b2.default) === ((_d = (_c = from.matched[0]) == null ? void 0 : _c.components) == null ? void 0 : _d.default)) {
      syncCurrentRoute();
    }
  });
  const route = {};
  for (const key in _route.value) {
    route[key] = computed(() => _route.value[key]);
  }
  nuxtApp._route = reactive(route);
  nuxtApp._middleware = nuxtApp._middleware || {
    global: [],
    named: {}
  };
  useError();
  try {
    if (true) {
      ;
      [__temp, __restore] = executeAsync(() => router.push(initialURL)), await __temp, __restore();
      ;
    }
    ;
    [__temp, __restore] = executeAsync(() => router.isReady()), await __temp, __restore();
    ;
  } catch (error2) {
    [__temp, __restore] = executeAsync(() => callWithNuxt(nuxtApp, showError, [error2])), await __temp, __restore();
  }
  const initialLayout = useState("_layout");
  router.beforeEach(async (to, from) => {
    var _a2;
    to.meta = reactive(to.meta);
    if (nuxtApp.isHydrating && initialLayout.value && !isReadonly(to.meta.layout)) {
      to.meta.layout = initialLayout.value;
    }
    nuxtApp._processingMiddleware = true;
    const middlewareEntries = /* @__PURE__ */ new Set([...globalMiddleware, ...nuxtApp._middleware.global]);
    for (const component of to.matched) {
      const componentMiddleware = component.meta.middleware;
      if (!componentMiddleware) {
        continue;
      }
      if (Array.isArray(componentMiddleware)) {
        for (const entry2 of componentMiddleware) {
          middlewareEntries.add(entry2);
        }
      } else {
        middlewareEntries.add(componentMiddleware);
      }
    }
    for (const entry2 of middlewareEntries) {
      const middleware = typeof entry2 === "string" ? nuxtApp._middleware.named[entry2] || await ((_a2 = namedMiddleware[entry2]) == null ? void 0 : _a2.call(namedMiddleware).then((r) => r.default || r)) : entry2;
      if (!middleware) {
        throw new Error(`Unknown route middleware: '${entry2}'.`);
      }
      const result = await callWithNuxt(nuxtApp, middleware, [to, from]);
      {
        if (result === false || result instanceof Error) {
          const error2 = result || createError$1({
            statusCode: 404,
            statusMessage: `Page Not Found: ${initialURL}`
          });
          await callWithNuxt(nuxtApp, showError, [error2]);
          return false;
        }
      }
      if (result || result === false) {
        return result;
      }
    }
  });
  router.afterEach(async (to) => {
    delete nuxtApp._processingMiddleware;
    if (to.matched.length === 0) {
      await callWithNuxt(nuxtApp, showError, [createError$1({
        statusCode: 404,
        fatal: false,
        statusMessage: `Page not found: ${to.fullPath}`
      })]);
    } else {
      const currentURL = to.fullPath || "/";
      if (!isEqual(currentURL, initialURL)) {
        const event = await callWithNuxt(nuxtApp, useRequestEvent);
        const options = { redirectCode: event.node.res.statusCode !== 200 ? event.node.res.statusCode || 302 : 302 };
        await callWithNuxt(nuxtApp, navigateTo, [currentURL, options]);
      }
    }
  });
  nuxtApp.hooks.hookOnce("app:created", async () => {
    try {
      await router.replace({
        ...router.resolve(initialURL),
        name: void 0,
        // #4920, #$4982
        force: true
      });
    } catch (error2) {
      await callWithNuxt(nuxtApp, showError, [error2]);
    }
  });
  return { provide: { router } };
});
const docsearch_hvQai9BtgI = defineNuxtPlugin(() => {
  const config = useRuntimeConfig$1();
  const docSearchElement = ref();
  const hasDocSearch = computed(() => {
    var _a, _b;
    return (_b = (_a = config == null ? void 0 : config.public) == null ? void 0 : _a.algolia) == null ? void 0 : _b.docSearch;
  });
  if (hasDocSearch.value) {
    useRoute();
    useRouter();
    computed(() => {
      const { algolia } = useRuntimeConfig$1();
      if (algolia && algolia.docSearch) {
        return algolia;
      }
      return {};
    });
  }
  return {
    provide: {
      docSearch: {
        element: docSearchElement,
        hasDocSearch
      }
    }
  };
});
function jsonStringify(value) {
  return JSON.stringify(value, regExpReplacer);
}
function regExpReplacer(_key, value) {
  if (value instanceof RegExp) {
    return `--REGEX ${value.toString()}`;
  }
  return value;
}
const encodeQueryParams = (params) => {
  let encoded = jsonStringify(params);
  encoded = typeof Buffer !== "undefined" ? Buffer.from(encoded).toString("base64") : btoa(encoded);
  encoded = encoded.replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
  const chunks = encoded.match(/.{1,100}/g) || [];
  return chunks.join("/");
};
const createQueryFetch = () => async (query) => {
  const { content } = useRuntimeConfig$1().public;
  const params = query.params();
  const apiPath = content.experimental.stripQueryParameters ? withContentBase(`/query/${`${hash(params)}.${content.integrity}`}/${encodeQueryParams(params)}.json`) : withContentBase(`/query/${hash(params)}.${content.integrity}.json`);
  {
    addPrerenderPath(apiPath);
  }
  if (shouldUseClientDB()) {
    const db = await import('./_nuxt/client-db-fd379c8e.mjs').then((m) => m.useContentDatabase());
    return db.fetch(query);
  }
  const data = await $fetch(apiPath, {
    method: "GET",
    responseType: "json",
    params: content.experimental.stripQueryParameters ? void 0 : {
      _params: jsonStringify(params),
      previewToken: useCookie("previewToken").value
    }
  });
  if (typeof data === "string" && data.startsWith("<!DOCTYPE html>")) {
    throw new Error("Not found");
  }
  return data;
};
function queryContent(query, ...pathParts) {
  const { content } = useRuntimeConfig$1().public;
  const queryBuilder = createQuery(createQueryFetch(), typeof query !== "string" ? query : {});
  let path;
  if (typeof query === "string") {
    path = withLeadingSlash(joinURL(query, ...pathParts));
  }
  const originalParamsFn = queryBuilder.params;
  queryBuilder.params = () => {
    var _a, _b, _c;
    const params = originalParamsFn();
    if (path) {
      params.where = params.where || [];
      if (params.first && (params.where || []).length === 0) {
        params.where.push({ _path: withoutTrailingSlash(path) });
      } else {
        params.where.push({ _path: new RegExp(`^${path.replace(/[-[\]{}()*+.,^$\s/]/g, "\\$&")}`) });
      }
    }
    if (!((_a = params.sort) == null ? void 0 : _a.length)) {
      params.sort = [{ _file: 1, $numeric: true }];
    }
    if (content.locales.length) {
      const queryLocale = (_c = (_b = params.where) == null ? void 0 : _b.find((w) => w._locale)) == null ? void 0 : _c._locale;
      if (!queryLocale) {
        params.where = params.where || [];
        params.where.push({ _locale: content.defaultLocale });
      }
    }
    return params;
  };
  return queryBuilder;
}
const fetchContentNavigation = async (queryBuilder) => {
  const { content } = useRuntimeConfig$1().public;
  if (typeof (queryBuilder == null ? void 0 : queryBuilder.params) !== "function") {
    queryBuilder = queryContent(queryBuilder);
  }
  const params = queryBuilder.params();
  const apiPath = content.experimental.stripQueryParameters ? withContentBase(`/navigation/${`${hash(params)}.${content.integrity}`}/${encodeQueryParams(params)}.json`) : withContentBase(`/navigation/${hash(params)}.${content.integrity}.json`);
  {
    addPrerenderPath(apiPath);
  }
  if (shouldUseClientDB()) {
    const generateNavigation = await import('./_nuxt/client-db-fd379c8e.mjs').then((m) => m.generateNavigation);
    return generateNavigation(params);
  }
  const data = await $fetch(apiPath, {
    method: "GET",
    responseType: "json",
    params: content.experimental.stripQueryParameters ? void 0 : {
      _params: jsonStringify(params),
      previewToken: useCookie("previewToken").value
    }
  });
  if (typeof data === "string" && data.startsWith("<!DOCTYPE html>")) {
    throw new Error("Not found");
  }
  return data;
};
const layouts = {
  "docs-page": () => import('./_nuxt/docs-page-75eace63.mjs').then((m) => m.default || m),
  default: () => import('./_nuxt/default-cafbf0bc.mjs').then((m) => m.default || m),
  page: () => import('./_nuxt/page-26ac7e13.mjs').then((m) => m.default || m)
};
const documentDriven_9cX98v59ZY = defineNuxtPlugin((nuxt) => {
  var _a, _b;
  const { documentDriven: moduleOptions, experimental } = (_b = (_a = useRuntimeConfig$1()) == null ? void 0 : _a.public) == null ? void 0 : _b.content;
  const findLayout = (to, page2, navigation, globals) => {
    var _a2;
    if (page2 && (page2 == null ? void 0 : page2.layout)) {
      return page2.layout;
    }
    if (to.matched.length && ((_a2 = to.matched[0].meta) == null ? void 0 : _a2.layout)) {
      return to.matched[0].meta.layout;
    }
    if (navigation && page2) {
      const { navKeyFromPath } = useContentHelpers();
      const layoutFromNav = navKeyFromPath(page2._path, "layout", navigation);
      if (layoutFromNav) {
        return layoutFromNav;
      }
    }
    if (moduleOptions.layoutFallbacks && globals) {
      let layoutFallback;
      for (const fallback of moduleOptions.layoutFallbacks) {
        if (globals[fallback] && globals[fallback].layout) {
          layoutFallback = globals[fallback].layout;
          break;
        }
      }
      if (layoutFallback) {
        return layoutFallback;
      }
    }
    return "default";
  };
  const refresh = async (to, dedup = false) => {
    nuxt.callHook("content:document-driven:start", { route: to, dedup });
    const routeConfig = to.meta.documentDriven || {};
    if (to.meta.documentDriven === false) {
      return;
    }
    const { navigation, pages, globals, surrounds } = useContentState();
    const _path = withoutTrailingSlash(to.path);
    const promises = [];
    if (moduleOptions.navigation && routeConfig.navigation !== false) {
      const navigationQuery = () => {
        const { navigation: navigation2 } = useContentState();
        if (navigation2.value && !dedup) {
          return navigation2.value;
        }
        return fetchContentNavigation().then((_navigation) => {
          navigation2.value = _navigation;
          return _navigation;
        }).catch(() => null);
      };
      promises.push(navigationQuery);
    } else {
      promises.push(() => Promise.resolve(null));
    }
    if (moduleOptions.globals) {
      const globalsQuery = () => {
        const { globals: globals2 } = useContentState();
        if (typeof moduleOptions.globals === "object" && Array.isArray(moduleOptions.globals)) {
          console.log("Globals must be a list of keys with QueryBuilderParams as a value.");
          return;
        }
        return Promise.all(
          Object.entries(moduleOptions.globals).map(
            ([key, query]) => {
              if (!dedup && globals2.value[key]) {
                return globals2.value[key];
              }
              let type = "findOne";
              if (query == null ? void 0 : query.type) {
                type = query.type;
              }
              return queryContent(query)[type]().catch(() => null);
            }
          )
        ).then(
          (values) => {
            return values.reduce(
              (acc, value, index) => {
                const key = Object.keys(moduleOptions.globals)[index];
                acc[key] = value;
                return acc;
              },
              {}
            );
          }
        );
      };
      promises.push(globalsQuery);
    } else {
      promises.push(() => Promise.resolve(null));
    }
    if (moduleOptions.page && routeConfig.page !== false) {
      let where = { _path };
      if (typeof routeConfig.page === "string") {
        where = { _path: routeConfig.page };
      }
      if (typeof routeConfig.page === "object") {
        where = routeConfig.page;
      }
      const pageQuery = () => {
        const { pages: pages2 } = useContentState();
        if (!dedup && pages2.value[_path] && pages2.value[_path]._path === _path) {
          return pages2.value[_path];
        }
        return queryContent().where(where).findOne().catch(() => null);
      };
      promises.push(pageQuery);
    } else {
      promises.push(() => Promise.resolve(null));
    }
    if (moduleOptions.surround && routeConfig.surround !== false) {
      let surround = _path;
      if (["string", "object"].includes(typeof routeConfig.page)) {
        surround = routeConfig.page;
      }
      if (["string", "object"].includes(typeof routeConfig.surround)) {
        surround = routeConfig.surround;
      }
      const surroundQuery = () => {
        const { surrounds: surrounds2 } = useContentState();
        if (!dedup && surrounds2.value[_path]) {
          return surrounds2.value[_path];
        }
        return queryContent().where({
          _partial: { $not: true },
          navigation: { $not: false }
        }).without(["body"]).findSurround(surround).catch(() => null);
      };
      promises.push(surroundQuery);
    } else {
      promises.push(() => Promise.resolve(null));
    }
    return await Promise.all(promises.map((promise) => promise())).then(async ([
      _navigation,
      _globals,
      _page,
      _surround
    ]) => {
      var _a2, _b2;
      if (_navigation) {
        navigation.value = _navigation;
      }
      if (_globals) {
        globals.value = _globals;
      }
      if (_surround) {
        surrounds.value[_path] = _surround;
      }
      const redirectTo = (_page == null ? void 0 : _page.redirect) || ((_b2 = (_a2 = _page == null ? void 0 : _page._dir) == null ? void 0 : _a2.navigation) == null ? void 0 : _b2.redirect);
      if (redirectTo) {
        pages.value[_path] = _page;
        return redirectTo;
      }
      if (_page) {
        const layoutName = findLayout(to, _page, _navigation, _globals);
        const layout = layouts[layoutName];
        if (layout && typeof layout === "function") {
          await layout();
        }
        to.meta.layout = layoutName;
        _page.layout = layoutName;
        pages.value[_path] = _page;
      }
      await nuxt.callHook("content:document-driven:finish", { route: to, dedup, page: _page, navigation: _navigation, globals: _globals, surround: _surround });
    });
  };
  addRouteMiddleware(async (to, from) => {
    if (to.path.includes("favicon.ico")) {
      return;
    }
    const redirect = await refresh(to, false);
    if (redirect) {
      if (hasProtocol(redirect)) {
        return callWithNuxt(nuxt, navigateTo, [redirect, { external: true }]);
      } else {
        return redirect;
      }
    }
  });
  {
    delete nuxt.payload.prerenderedAt;
  }
  nuxt.hook("app:data:refresh", async () => false);
});
const stateColors = (value) => {
  return {
    color: `{elements.state.${value}.color.primary} !important`,
    backgroundColor: `{elements.state.${value}.backgroundColor.primary} !important`,
    borderColor: `{elements.state.${value}.borderColor.primary} !important`,
    ":deep(p code)": {
      color: `{elements.state.${value}.color.secondary} !important`,
      backgroundColor: `{elements.state.${value}.backgroundColor.secondary} !important`
    },
    ":deep(code)": {
      color: `{elements.state.${value}.color.primary} !important`,
      backgroundColor: `{elements.state.${value}.backgroundColor.secondary} !important`
    },
    ":deep(a code)": {
      borderColor: `{elements.state.${value}.borderColor.primary} !important`
    },
    ":deep(a)": {
      borderColor: "currentColor",
      code: {
        backgroundColor: `{elements.state.${value}.backgroundColor.primary} !important`
      },
      "&:hover": {
        color: `{elements.state.${value}.color.secondary} !important`,
        borderColor: "currentColor !important",
        code: {
          backgroundColor: `{elements.state.${value}.backgroundColor.secondary} !important`,
          color: `{elements.state.${value}.color.secondary} !important`,
          borderColor: `{elements.state.${value}.borderColor.secondary} !important`
        }
      }
    }
  };
};
const my = (value) => {
  return {
    marginTop: value,
    marginBottom: value
  };
};
const mx = (value) => {
  return {
    marginLeft: value,
    marginRight: value
  };
};
const py = (value) => {
  return {
    paddingTop: value,
    paddingBottom: value
  };
};
const px = (value) => {
  return {
    paddingLeft: value,
    paddingRight: value
  };
};
const truncate = {
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap"
};
const lineClamp = (lines) => ({
  "overflow": "hidden",
  "display": "-webkit-box",
  "-webkit-box-orient": "vertical",
  "-webkit-line-clamp": lines
});
const text = (size) => ({
  fontSize: `{text.${size}.fontSize}`,
  lineHeight: `{text.${size}.lineHeight}`
});
const utils = { stateColors, my, mx, py, px, truncate, lineClamp, text };
const theme = {
  "color": {
    "primary": {
      "50": {
        "value": "#fff2cc",
        "variable": "var(--color-primary-50)",
        "original": "#fff2cc"
      },
      "100": {
        "value": "#ffe599",
        "variable": "var(--color-primary-100)",
        "original": "#ffe599"
      },
      "200": {
        "value": "#ffd966",
        "variable": "var(--color-primary-200)",
        "original": "#ffd966"
      },
      "300": {
        "value": "#f1c232",
        "variable": "var(--color-primary-300)",
        "original": "#f1c232"
      },
      "400": {
        "value": "#f1c232",
        "variable": "var(--color-primary-400)",
        "original": "#f1c232"
      },
      "500": {
        "value": "#f1c232",
        "variable": "var(--color-primary-500)",
        "original": "#f1c232"
      },
      "600": {
        "value": "#f1c232",
        "variable": "var(--color-primary-600)",
        "original": "#f1c232"
      },
      "700": {
        "value": "#f1c232",
        "variable": "var(--color-primary-700)",
        "original": "#f1c232"
      },
      "800": {
        "value": "#f1c232",
        "variable": "var(--color-primary-800)",
        "original": "#f1c232"
      },
      "900": {
        "value": "#f1c232",
        "variable": "var(--color-primary-900)",
        "original": "#f1c232"
      }
    },
    "white": {
      "value": "#ffffff",
      "variable": "var(--color-white)",
      "original": "#ffffff"
    },
    "black": {
      "value": "#0c0c0d",
      "variable": "var(--color-black)",
      "original": "#0c0c0d"
    },
    "secondary": {
      "50": {
        "value": "var(--color-gray-50)",
        "variable": "var(--color-secondary-50)",
        "original": "{color.gray.50}"
      },
      "100": {
        "value": "var(--color-gray-100)",
        "variable": "var(--color-secondary-100)",
        "original": "{color.gray.100}"
      },
      "200": {
        "value": "var(--color-gray-200)",
        "variable": "var(--color-secondary-200)",
        "original": "{color.gray.200}"
      },
      "300": {
        "value": "var(--color-gray-300)",
        "variable": "var(--color-secondary-300)",
        "original": "{color.gray.300}"
      },
      "400": {
        "value": "var(--color-gray-400)",
        "variable": "var(--color-secondary-400)",
        "original": "{color.gray.400}"
      },
      "500": {
        "value": "var(--color-gray-500)",
        "variable": "var(--color-secondary-500)",
        "original": "{color.gray.500}"
      },
      "600": {
        "value": "var(--color-gray-600)",
        "variable": "var(--color-secondary-600)",
        "original": "{color.gray.600}"
      },
      "700": {
        "value": "var(--color-gray-700)",
        "variable": "var(--color-secondary-700)",
        "original": "{color.gray.700}"
      },
      "800": {
        "value": "var(--color-gray-800)",
        "variable": "var(--color-secondary-800)",
        "original": "{color.gray.800}"
      },
      "900": {
        "value": "var(--color-gray-900)",
        "variable": "var(--color-secondary-900)",
        "original": "{color.gray.900}"
      }
    },
    "gray": {
      "50": {
        "value": "#fafafa",
        "variable": "var(--color-gray-50)",
        "original": "#fafafa"
      },
      "100": {
        "value": "#f4f4f5",
        "variable": "var(--color-gray-100)",
        "original": "#f4f4f5"
      },
      "200": {
        "value": "#e4e4e7",
        "variable": "var(--color-gray-200)",
        "original": "#e4e4e7"
      },
      "300": {
        "value": "#D4d4d8",
        "variable": "var(--color-gray-300)",
        "original": "#D4d4d8"
      },
      "400": {
        "value": "#a1a1aa",
        "variable": "var(--color-gray-400)",
        "original": "#a1a1aa"
      },
      "500": {
        "value": "#71717A",
        "variable": "var(--color-gray-500)",
        "original": "#71717A"
      },
      "600": {
        "value": "#52525B",
        "variable": "var(--color-gray-600)",
        "original": "#52525B"
      },
      "700": {
        "value": "#3f3f46",
        "variable": "var(--color-gray-700)",
        "original": "#3f3f46"
      },
      "800": {
        "value": "#27272A",
        "variable": "var(--color-gray-800)",
        "original": "#27272A"
      },
      "900": {
        "value": "#18181B",
        "variable": "var(--color-gray-900)",
        "original": "#18181B"
      }
    },
    "green": {
      "50": {
        "value": "#d6ffee",
        "variable": "var(--color-green-50)",
        "original": "#d6ffee"
      },
      "100": {
        "value": "#acffdd",
        "variable": "var(--color-green-100)",
        "original": "#acffdd"
      },
      "200": {
        "value": "#83ffcc",
        "variable": "var(--color-green-200)",
        "original": "#83ffcc"
      },
      "300": {
        "value": "#30ffaa",
        "variable": "var(--color-green-300)",
        "original": "#30ffaa"
      },
      "400": {
        "value": "#00dc82",
        "variable": "var(--color-green-400)",
        "original": "#00dc82"
      },
      "500": {
        "value": "#00bd6f",
        "variable": "var(--color-green-500)",
        "original": "#00bd6f"
      },
      "600": {
        "value": "#009d5d",
        "variable": "var(--color-green-600)",
        "original": "#009d5d"
      },
      "700": {
        "value": "#007e4a",
        "variable": "var(--color-green-700)",
        "original": "#007e4a"
      },
      "800": {
        "value": "#005e38",
        "variable": "var(--color-green-800)",
        "original": "#005e38"
      },
      "900": {
        "value": "#003f25",
        "variable": "var(--color-green-900)",
        "original": "#003f25"
      }
    },
    "yellow": {
      "50": {
        "value": "#fdf6db",
        "variable": "var(--color-yellow-50)",
        "original": "#fdf6db"
      },
      "100": {
        "value": "#fcedb7",
        "variable": "var(--color-yellow-100)",
        "original": "#fcedb7"
      },
      "200": {
        "value": "#fae393",
        "variable": "var(--color-yellow-200)",
        "original": "#fae393"
      },
      "300": {
        "value": "#f8da70",
        "variable": "var(--color-yellow-300)",
        "original": "#f8da70"
      },
      "400": {
        "value": "#f7d14c",
        "variable": "var(--color-yellow-400)",
        "original": "#f7d14c"
      },
      "500": {
        "value": "#f5c828",
        "variable": "var(--color-yellow-500)",
        "original": "#f5c828"
      },
      "600": {
        "value": "#daac0a",
        "variable": "var(--color-yellow-600)",
        "original": "#daac0a"
      },
      "700": {
        "value": "#a38108",
        "variable": "var(--color-yellow-700)",
        "original": "#a38108"
      },
      "800": {
        "value": "#6d5605",
        "variable": "var(--color-yellow-800)",
        "original": "#6d5605"
      },
      "900": {
        "value": "#362b03",
        "variable": "var(--color-yellow-900)",
        "original": "#362b03"
      }
    },
    "orange": {
      "50": {
        "value": "#ffe9d9",
        "variable": "var(--color-orange-50)",
        "original": "#ffe9d9"
      },
      "100": {
        "value": "#ffd3b3",
        "variable": "var(--color-orange-100)",
        "original": "#ffd3b3"
      },
      "200": {
        "value": "#ffbd8d",
        "variable": "var(--color-orange-200)",
        "original": "#ffbd8d"
      },
      "300": {
        "value": "#ffa666",
        "variable": "var(--color-orange-300)",
        "original": "#ffa666"
      },
      "400": {
        "value": "#ff9040",
        "variable": "var(--color-orange-400)",
        "original": "#ff9040"
      },
      "500": {
        "value": "#ff7a1a",
        "variable": "var(--color-orange-500)",
        "original": "#ff7a1a"
      },
      "600": {
        "value": "#e15e00",
        "variable": "var(--color-orange-600)",
        "original": "#e15e00"
      },
      "700": {
        "value": "#a94700",
        "variable": "var(--color-orange-700)",
        "original": "#a94700"
      },
      "800": {
        "value": "#702f00",
        "variable": "var(--color-orange-800)",
        "original": "#702f00"
      },
      "900": {
        "value": "#381800",
        "variable": "var(--color-orange-900)",
        "original": "#381800"
      }
    },
    "red": {
      "50": {
        "value": "#ffdbd9",
        "variable": "var(--color-red-50)",
        "original": "#ffdbd9"
      },
      "100": {
        "value": "#ffb7b3",
        "variable": "var(--color-red-100)",
        "original": "#ffb7b3"
      },
      "200": {
        "value": "#ff948d",
        "variable": "var(--color-red-200)",
        "original": "#ff948d"
      },
      "300": {
        "value": "#ff7066",
        "variable": "var(--color-red-300)",
        "original": "#ff7066"
      },
      "400": {
        "value": "#ff4c40",
        "variable": "var(--color-red-400)",
        "original": "#ff4c40"
      },
      "500": {
        "value": "#ff281a",
        "variable": "var(--color-red-500)",
        "original": "#ff281a"
      },
      "600": {
        "value": "#e10e00",
        "variable": "var(--color-red-600)",
        "original": "#e10e00"
      },
      "700": {
        "value": "#a90a00",
        "variable": "var(--color-red-700)",
        "original": "#a90a00"
      },
      "800": {
        "value": "#700700",
        "variable": "var(--color-red-800)",
        "original": "#700700"
      },
      "900": {
        "value": "#380300",
        "variable": "var(--color-red-900)",
        "original": "#380300"
      }
    },
    "pear": {
      "50": {
        "value": "#f7f8dc",
        "variable": "var(--color-pear-50)",
        "original": "#f7f8dc"
      },
      "100": {
        "value": "#eff0ba",
        "variable": "var(--color-pear-100)",
        "original": "#eff0ba"
      },
      "200": {
        "value": "#e8e997",
        "variable": "var(--color-pear-200)",
        "original": "#e8e997"
      },
      "300": {
        "value": "#e0e274",
        "variable": "var(--color-pear-300)",
        "original": "#e0e274"
      },
      "400": {
        "value": "#d8da52",
        "variable": "var(--color-pear-400)",
        "original": "#d8da52"
      },
      "500": {
        "value": "#d0d32f",
        "variable": "var(--color-pear-500)",
        "original": "#d0d32f"
      },
      "600": {
        "value": "#a8aa24",
        "variable": "var(--color-pear-600)",
        "original": "#a8aa24"
      },
      "700": {
        "value": "#7e801b",
        "variable": "var(--color-pear-700)",
        "original": "#7e801b"
      },
      "800": {
        "value": "#545512",
        "variable": "var(--color-pear-800)",
        "original": "#545512"
      },
      "900": {
        "value": "#2a2b09",
        "variable": "var(--color-pear-900)",
        "original": "#2a2b09"
      }
    },
    "teal": {
      "50": {
        "value": "#d7faf8",
        "variable": "var(--color-teal-50)",
        "original": "#d7faf8"
      },
      "100": {
        "value": "#aff4f0",
        "variable": "var(--color-teal-100)",
        "original": "#aff4f0"
      },
      "200": {
        "value": "#87efe9",
        "variable": "var(--color-teal-200)",
        "original": "#87efe9"
      },
      "300": {
        "value": "#5fe9e1",
        "variable": "var(--color-teal-300)",
        "original": "#5fe9e1"
      },
      "400": {
        "value": "#36e4da",
        "variable": "var(--color-teal-400)",
        "original": "#36e4da"
      },
      "500": {
        "value": "#1cd1c6",
        "variable": "var(--color-teal-500)",
        "original": "#1cd1c6"
      },
      "600": {
        "value": "#16a79e",
        "variable": "var(--color-teal-600)",
        "original": "#16a79e"
      },
      "700": {
        "value": "#117d77",
        "variable": "var(--color-teal-700)",
        "original": "#117d77"
      },
      "800": {
        "value": "#0b544f",
        "variable": "var(--color-teal-800)",
        "original": "#0b544f"
      },
      "900": {
        "value": "#062a28",
        "variable": "var(--color-teal-900)",
        "original": "#062a28"
      }
    },
    "lightblue": {
      "50": {
        "value": "#d9f8ff",
        "variable": "var(--color-lightblue-50)",
        "original": "#d9f8ff"
      },
      "100": {
        "value": "#b3f1ff",
        "variable": "var(--color-lightblue-100)",
        "original": "#b3f1ff"
      },
      "200": {
        "value": "#8deaff",
        "variable": "var(--color-lightblue-200)",
        "original": "#8deaff"
      },
      "300": {
        "value": "#66e4ff",
        "variable": "var(--color-lightblue-300)",
        "original": "#66e4ff"
      },
      "400": {
        "value": "#40ddff",
        "variable": "var(--color-lightblue-400)",
        "original": "#40ddff"
      },
      "500": {
        "value": "#1ad6ff",
        "variable": "var(--color-lightblue-500)",
        "original": "#1ad6ff"
      },
      "600": {
        "value": "#00b9e1",
        "variable": "var(--color-lightblue-600)",
        "original": "#00b9e1"
      },
      "700": {
        "value": "#008aa9",
        "variable": "var(--color-lightblue-700)",
        "original": "#008aa9"
      },
      "800": {
        "value": "#005c70",
        "variable": "var(--color-lightblue-800)",
        "original": "#005c70"
      },
      "900": {
        "value": "#002e38",
        "variable": "var(--color-lightblue-900)",
        "original": "#002e38"
      }
    },
    "blue": {
      "50": {
        "value": "#d9f1ff",
        "variable": "var(--color-blue-50)",
        "original": "#d9f1ff"
      },
      "100": {
        "value": "#b3e4ff",
        "variable": "var(--color-blue-100)",
        "original": "#b3e4ff"
      },
      "200": {
        "value": "#8dd6ff",
        "variable": "var(--color-blue-200)",
        "original": "#8dd6ff"
      },
      "300": {
        "value": "#66c8ff",
        "variable": "var(--color-blue-300)",
        "original": "#66c8ff"
      },
      "400": {
        "value": "#40bbff",
        "variable": "var(--color-blue-400)",
        "original": "#40bbff"
      },
      "500": {
        "value": "#1aadff",
        "variable": "var(--color-blue-500)",
        "original": "#1aadff"
      },
      "600": {
        "value": "#0090e1",
        "variable": "var(--color-blue-600)",
        "original": "#0090e1"
      },
      "700": {
        "value": "#006ca9",
        "variable": "var(--color-blue-700)",
        "original": "#006ca9"
      },
      "800": {
        "value": "#004870",
        "variable": "var(--color-blue-800)",
        "original": "#004870"
      },
      "900": {
        "value": "#002438",
        "variable": "var(--color-blue-900)",
        "original": "#002438"
      }
    },
    "indigoblue": {
      "50": {
        "value": "#d9e5ff",
        "variable": "var(--color-indigoblue-50)",
        "original": "#d9e5ff"
      },
      "100": {
        "value": "#b3cbff",
        "variable": "var(--color-indigoblue-100)",
        "original": "#b3cbff"
      },
      "200": {
        "value": "#8db0ff",
        "variable": "var(--color-indigoblue-200)",
        "original": "#8db0ff"
      },
      "300": {
        "value": "#6696ff",
        "variable": "var(--color-indigoblue-300)",
        "original": "#6696ff"
      },
      "400": {
        "value": "#407cff",
        "variable": "var(--color-indigoblue-400)",
        "original": "#407cff"
      },
      "500": {
        "value": "#1a62ff",
        "variable": "var(--color-indigoblue-500)",
        "original": "#1a62ff"
      },
      "600": {
        "value": "#0047e1",
        "variable": "var(--color-indigoblue-600)",
        "original": "#0047e1"
      },
      "700": {
        "value": "#0035a9",
        "variable": "var(--color-indigoblue-700)",
        "original": "#0035a9"
      },
      "800": {
        "value": "#002370",
        "variable": "var(--color-indigoblue-800)",
        "original": "#002370"
      },
      "900": {
        "value": "#001238",
        "variable": "var(--color-indigoblue-900)",
        "original": "#001238"
      }
    },
    "royalblue": {
      "50": {
        "value": "#dfdbfb",
        "variable": "var(--color-royalblue-50)",
        "original": "#dfdbfb"
      },
      "100": {
        "value": "#c0b7f7",
        "variable": "var(--color-royalblue-100)",
        "original": "#c0b7f7"
      },
      "200": {
        "value": "#a093f3",
        "variable": "var(--color-royalblue-200)",
        "original": "#a093f3"
      },
      "300": {
        "value": "#806ff0",
        "variable": "var(--color-royalblue-300)",
        "original": "#806ff0"
      },
      "400": {
        "value": "#614bec",
        "variable": "var(--color-royalblue-400)",
        "original": "#614bec"
      },
      "500": {
        "value": "#4127e8",
        "variable": "var(--color-royalblue-500)",
        "original": "#4127e8"
      },
      "600": {
        "value": "#2c15c4",
        "variable": "var(--color-royalblue-600)",
        "original": "#2c15c4"
      },
      "700": {
        "value": "#211093",
        "variable": "var(--color-royalblue-700)",
        "original": "#211093"
      },
      "800": {
        "value": "#160a62",
        "variable": "var(--color-royalblue-800)",
        "original": "#160a62"
      },
      "900": {
        "value": "#0b0531",
        "variable": "var(--color-royalblue-900)",
        "original": "#0b0531"
      }
    },
    "purple": {
      "50": {
        "value": "#ead9ff",
        "variable": "var(--color-purple-50)",
        "original": "#ead9ff"
      },
      "100": {
        "value": "#d5b3ff",
        "variable": "var(--color-purple-100)",
        "original": "#d5b3ff"
      },
      "200": {
        "value": "#c08dff",
        "variable": "var(--color-purple-200)",
        "original": "#c08dff"
      },
      "300": {
        "value": "#ab66ff",
        "variable": "var(--color-purple-300)",
        "original": "#ab66ff"
      },
      "400": {
        "value": "#9640ff",
        "variable": "var(--color-purple-400)",
        "original": "#9640ff"
      },
      "500": {
        "value": "#811aff",
        "variable": "var(--color-purple-500)",
        "original": "#811aff"
      },
      "600": {
        "value": "#6500e1",
        "variable": "var(--color-purple-600)",
        "original": "#6500e1"
      },
      "700": {
        "value": "#4c00a9",
        "variable": "var(--color-purple-700)",
        "original": "#4c00a9"
      },
      "800": {
        "value": "#330070",
        "variable": "var(--color-purple-800)",
        "original": "#330070"
      },
      "900": {
        "value": "#190038",
        "variable": "var(--color-purple-900)",
        "original": "#190038"
      }
    },
    "pink": {
      "50": {
        "value": "#ffd9f2",
        "variable": "var(--color-pink-50)",
        "original": "#ffd9f2"
      },
      "100": {
        "value": "#ffb3e5",
        "variable": "var(--color-pink-100)",
        "original": "#ffb3e5"
      },
      "200": {
        "value": "#ff8dd8",
        "variable": "var(--color-pink-200)",
        "original": "#ff8dd8"
      },
      "300": {
        "value": "#ff66cc",
        "variable": "var(--color-pink-300)",
        "original": "#ff66cc"
      },
      "400": {
        "value": "#ff40bf",
        "variable": "var(--color-pink-400)",
        "original": "#ff40bf"
      },
      "500": {
        "value": "#ff1ab2",
        "variable": "var(--color-pink-500)",
        "original": "#ff1ab2"
      },
      "600": {
        "value": "#e10095",
        "variable": "var(--color-pink-600)",
        "original": "#e10095"
      },
      "700": {
        "value": "#a90070",
        "variable": "var(--color-pink-700)",
        "original": "#a90070"
      },
      "800": {
        "value": "#70004b",
        "variable": "var(--color-pink-800)",
        "original": "#70004b"
      },
      "900": {
        "value": "#380025",
        "variable": "var(--color-pink-900)",
        "original": "#380025"
      }
    },
    "ruby": {
      "50": {
        "value": "#ffd9e4",
        "variable": "var(--color-ruby-50)",
        "original": "#ffd9e4"
      },
      "100": {
        "value": "#ffb3c9",
        "variable": "var(--color-ruby-100)",
        "original": "#ffb3c9"
      },
      "200": {
        "value": "#ff8dae",
        "variable": "var(--color-ruby-200)",
        "original": "#ff8dae"
      },
      "300": {
        "value": "#ff6694",
        "variable": "var(--color-ruby-300)",
        "original": "#ff6694"
      },
      "400": {
        "value": "#ff4079",
        "variable": "var(--color-ruby-400)",
        "original": "#ff4079"
      },
      "500": {
        "value": "#ff1a5e",
        "variable": "var(--color-ruby-500)",
        "original": "#ff1a5e"
      },
      "600": {
        "value": "#e10043",
        "variable": "var(--color-ruby-600)",
        "original": "#e10043"
      },
      "700": {
        "value": "#a90032",
        "variable": "var(--color-ruby-700)",
        "original": "#a90032"
      },
      "800": {
        "value": "#700021",
        "variable": "var(--color-ruby-800)",
        "original": "#700021"
      },
      "900": {
        "value": "#380011",
        "variable": "var(--color-ruby-900)",
        "original": "#380011"
      }
    }
  },
  "elements": {
    "text": {
      "primary": {
        "color": {
          "static": {
            "value": {
              "initial": "var(--color-gray-900)",
              "dark": "var(--color-gray-50)"
            },
            "variable": "var(--elements-text-primary-color-static)",
            "original": {
              "initial": "{color.gray.900}",
              "dark": "{color.gray.50}"
            }
          },
          "hover": {}
        }
      },
      "secondary": {
        "color": {
          "static": {
            "value": {
              "initial": "var(--color-gray-500)",
              "dark": "var(--color-gray-400)"
            },
            "variable": "var(--elements-text-secondary-color-static)",
            "original": {
              "initial": "{color.gray.500}",
              "dark": "{color.gray.400}"
            }
          },
          "hover": {
            "value": {
              "initial": "var(--color-gray-700)",
              "dark": "var(--color-gray-200)"
            },
            "variable": "var(--elements-text-secondary-color-hover)",
            "original": {
              "initial": "{color.gray.700}",
              "dark": "{color.gray.200}"
            }
          }
        }
      }
    },
    "container": {
      "maxWidth": {
        "value": "80rem",
        "variable": "var(--elements-container-maxWidth)",
        "original": "80rem"
      },
      "padding": {
        "mobile": {
          "value": "var(--space-4)",
          "variable": "var(--elements-container-padding-mobile)",
          "original": "{space.4}"
        },
        "xs": {
          "value": "var(--space-4)",
          "variable": "var(--elements-container-padding-xs)",
          "original": "{space.4}"
        },
        "sm": {
          "value": "var(--space-6)",
          "variable": "var(--elements-container-padding-sm)",
          "original": "{space.6}"
        },
        "md": {
          "value": "var(--space-6)",
          "variable": "var(--elements-container-padding-md)",
          "original": "{space.6}"
        }
      }
    },
    "backdrop": {
      "filter": {
        "value": "saturate(200%) blur(20px)",
        "variable": "var(--elements-backdrop-filter)",
        "original": "saturate(200%) blur(20px)"
      },
      "background": {
        "value": {
          "initial": "#fffc",
          "dark": "#0c0d0ccc"
        },
        "variable": "var(--elements-backdrop-background)",
        "original": {
          "initial": "#fffc",
          "dark": "#0c0d0ccc"
        }
      }
    },
    "border": {
      "primary": {
        "static": {
          "value": {
            "initial": "var(--color-gray-100)",
            "dark": "var(--color-gray-900)"
          },
          "variable": "var(--elements-border-primary-static)",
          "original": {
            "initial": "{color.gray.100}",
            "dark": "{color.gray.900}"
          }
        },
        "hover": {
          "value": {
            "initial": "var(--color-gray-200)",
            "dark": "var(--color-gray-800)"
          },
          "variable": "var(--elements-border-primary-hover)",
          "original": {
            "initial": "{color.gray.200}",
            "dark": "{color.gray.800}"
          }
        }
      },
      "secondary": {
        "static": {
          "value": {
            "initial": "var(--color-gray-200)",
            "dark": "var(--color-gray-800)"
          },
          "variable": "var(--elements-border-secondary-static)",
          "original": {
            "initial": "{color.gray.200}",
            "dark": "{color.gray.800}"
          }
        },
        "hover": {
          "value": {
            "initial": "",
            "dark": ""
          },
          "variable": "var(--elements-border-secondary-hover)",
          "original": {
            "initial": "",
            "dark": ""
          }
        }
      }
    },
    "surface": {
      "background": {
        "base": {
          "value": {
            "initial": "var(--color-gray-100)",
            "dark": "var(--color-gray-900)"
          },
          "variable": "var(--elements-surface-background-base)",
          "original": {
            "initial": "{color.gray.100}",
            "dark": "{color.gray.900}"
          }
        }
      }
    },
    "state": {
      "primary": {
        "color": {
          "primary": {
            "value": {
              "initial": "var(--color-primary-600)",
              "dark": "var(--color-primary-400)"
            },
            "variable": "var(--elements-state-primary-color-primary)",
            "original": {
              "initial": "{color.primary.600}",
              "dark": "{color.primary.400}"
            }
          },
          "secondary": {
            "value": {
              "initial": "var(--color-primary-700)",
              "dark": "var(--color-primary-200)"
            },
            "variable": "var(--elements-state-primary-color-secondary)",
            "original": {
              "initial": "{color.primary.700}",
              "dark": "{color.primary.200}"
            }
          }
        },
        "backgroundColor": {
          "primary": {
            "value": {
              "initial": "var(--color-primary-50)",
              "dark": "var(--color-primary-900)"
            },
            "variable": "var(--elements-state-primary-backgroundColor-primary)",
            "original": {
              "initial": "{color.primary.50}",
              "dark": "{color.primary.900}"
            }
          },
          "secondary": {
            "value": {
              "initial": "var(--color-primary-100)",
              "dark": "var(--color-primary-800)"
            },
            "variable": "var(--elements-state-primary-backgroundColor-secondary)",
            "original": {
              "initial": "{color.primary.100}",
              "dark": "{color.primary.800}"
            }
          }
        },
        "borderColor": {
          "primary": {
            "value": {
              "initial": "var(--color-primary-100)",
              "dark": "var(--color-primary-800)"
            },
            "variable": "var(--elements-state-primary-borderColor-primary)",
            "original": {
              "initial": "{color.primary.100}",
              "dark": "{color.primary.800}"
            }
          },
          "secondary": {
            "value": {
              "initial": "var(--color-primary-200)",
              "dark": "var(--color-primary-700)"
            },
            "variable": "var(--elements-state-primary-borderColor-secondary)",
            "original": {
              "initial": "{color.primary.200}",
              "dark": "{color.primary.700}"
            }
          }
        }
      },
      "info": {
        "color": {
          "primary": {
            "value": {
              "initial": "var(--color-blue-500)",
              "dark": "var(--color-blue-400)"
            },
            "variable": "var(--elements-state-info-color-primary)",
            "original": {
              "initial": "{color.blue.500}",
              "dark": "{color.blue.400}"
            }
          },
          "secondary": {
            "value": {
              "initial": "var(--color-blue-600)",
              "dark": "var(--color-blue-200)"
            },
            "variable": "var(--elements-state-info-color-secondary)",
            "original": {
              "initial": "{color.blue.600}",
              "dark": "{color.blue.200}"
            }
          }
        },
        "backgroundColor": {
          "primary": {
            "value": {
              "initial": "var(--color-blue-50)",
              "dark": "var(--color-blue-900)"
            },
            "variable": "var(--elements-state-info-backgroundColor-primary)",
            "original": {
              "initial": "{color.blue.50}",
              "dark": "{color.blue.900}"
            }
          },
          "secondary": {
            "value": {
              "initial": "var(--color-blue-100)",
              "dark": "var(--color-blue-800)"
            },
            "variable": "var(--elements-state-info-backgroundColor-secondary)",
            "original": {
              "initial": "{color.blue.100}",
              "dark": "{color.blue.800}"
            }
          }
        },
        "borderColor": {
          "primary": {
            "value": {
              "initial": "var(--color-blue-100)",
              "dark": "var(--color-blue-800)"
            },
            "variable": "var(--elements-state-info-borderColor-primary)",
            "original": {
              "initial": "{color.blue.100}",
              "dark": "{color.blue.800}"
            }
          },
          "secondary": {
            "value": {
              "initial": "var(--color-blue-200)",
              "dark": "var(--color-blue-700)"
            },
            "variable": "var(--elements-state-info-borderColor-secondary)",
            "original": {
              "initial": "{color.blue.200}",
              "dark": "{color.blue.700}"
            }
          }
        }
      },
      "success": {
        "color": {
          "primary": {
            "value": {
              "initial": "var(--color-green-500)",
              "dark": "var(--color-green-400)"
            },
            "variable": "var(--elements-state-success-color-primary)",
            "original": {
              "initial": "{color.green.500}",
              "dark": "{color.green.400}"
            }
          },
          "secondary": {
            "value": {
              "initial": "var(--color-green-600)",
              "dark": "var(--color-green-200)"
            },
            "variable": "var(--elements-state-success-color-secondary)",
            "original": {
              "initial": "{color.green.600}",
              "dark": "{color.green.200}"
            }
          }
        },
        "backgroundColor": {
          "primary": {
            "value": {
              "initial": "var(--color-green-50)",
              "dark": "var(--color-green-900)"
            },
            "variable": "var(--elements-state-success-backgroundColor-primary)",
            "original": {
              "initial": "{color.green.50}",
              "dark": "{color.green.900}"
            }
          },
          "secondary": {
            "value": {
              "initial": "var(--color-green-100)",
              "dark": "var(--color-green-800)"
            },
            "variable": "var(--elements-state-success-backgroundColor-secondary)",
            "original": {
              "initial": "{color.green.100}",
              "dark": "{color.green.800}"
            }
          }
        },
        "borderColor": {
          "primary": {
            "value": {
              "initial": "var(--color-green-100)",
              "dark": "var(--color-green-800)"
            },
            "variable": "var(--elements-state-success-borderColor-primary)",
            "original": {
              "initial": "{color.green.100}",
              "dark": "{color.green.800}"
            }
          },
          "secondary": {
            "value": {
              "initial": "var(--color-green-200)",
              "dark": "var(--color-green-700)"
            },
            "variable": "var(--elements-state-success-borderColor-secondary)",
            "original": {
              "initial": "{color.green.200}",
              "dark": "{color.green.700}"
            }
          }
        }
      },
      "warning": {
        "color": {
          "primary": {
            "value": {
              "initial": "var(--color-yellow-600)",
              "dark": "var(--color-yellow-400)"
            },
            "variable": "var(--elements-state-warning-color-primary)",
            "original": {
              "initial": "{color.yellow.600}",
              "dark": "{color.yellow.400}"
            }
          },
          "secondary": {
            "value": {
              "initial": "var(--color-yellow-700)",
              "dark": "var(--color-yellow-200)"
            },
            "variable": "var(--elements-state-warning-color-secondary)",
            "original": {
              "initial": "{color.yellow.700}",
              "dark": "{color.yellow.200}"
            }
          }
        },
        "backgroundColor": {
          "primary": {
            "value": {
              "initial": "var(--color-yellow-50)",
              "dark": "var(--color-yellow-900)"
            },
            "variable": "var(--elements-state-warning-backgroundColor-primary)",
            "original": {
              "initial": "{color.yellow.50}",
              "dark": "{color.yellow.900}"
            }
          },
          "secondary": {
            "value": {
              "initial": "var(--color-yellow-100)",
              "dark": "var(--color-yellow-800)"
            },
            "variable": "var(--elements-state-warning-backgroundColor-secondary)",
            "original": {
              "initial": "{color.yellow.100}",
              "dark": "{color.yellow.800}"
            }
          }
        },
        "borderColor": {
          "primary": {
            "value": {
              "initial": "var(--color-yellow-100)",
              "dark": "var(--color-yellow-800)"
            },
            "variable": "var(--elements-state-warning-borderColor-primary)",
            "original": {
              "initial": "{color.yellow.100}",
              "dark": "{color.yellow.800}"
            }
          },
          "secondary": {
            "value": {
              "initial": "var(--color-yellow-200)",
              "dark": "var(--color-yellow-700)"
            },
            "variable": "var(--elements-state-warning-borderColor-secondary)",
            "original": {
              "initial": "{color.yellow.200}",
              "dark": "{color.yellow.700}"
            }
          }
        }
      },
      "danger": {
        "color": {
          "primary": {
            "value": {
              "initial": "var(--color-red-500)",
              "dark": "var(--color-red-300)"
            },
            "variable": "var(--elements-state-danger-color-primary)",
            "original": {
              "initial": "{color.red.500}",
              "dark": "{color.red.300}"
            }
          },
          "secondary": {
            "value": {
              "initial": "var(--color-red-600)",
              "dark": "var(--color-red-200)"
            },
            "variable": "var(--elements-state-danger-color-secondary)",
            "original": {
              "initial": "{color.red.600}",
              "dark": "{color.red.200}"
            }
          }
        },
        "backgroundColor": {
          "primary": {
            "value": {
              "initial": "var(--color-red-50)",
              "dark": "var(--color-red-900)"
            },
            "variable": "var(--elements-state-danger-backgroundColor-primary)",
            "original": {
              "initial": "{color.red.50}",
              "dark": "{color.red.900}"
            }
          },
          "secondary": {
            "value": {
              "initial": "var(--color-red-100)",
              "dark": "var(--color-red-800)"
            },
            "variable": "var(--elements-state-danger-backgroundColor-secondary)",
            "original": {
              "initial": "{color.red.100}",
              "dark": "{color.red.800}"
            }
          }
        },
        "borderColor": {
          "primary": {
            "value": {
              "initial": "var(--color-red-100)",
              "dark": "var(--color-red-800)"
            },
            "variable": "var(--elements-state-danger-borderColor-primary)",
            "original": {
              "initial": "{color.red.100}",
              "dark": "{color.red.800}"
            }
          },
          "secondary": {
            "value": {
              "initial": "var(--color-red-200)",
              "dark": "var(--color-red-700)"
            },
            "variable": "var(--elements-state-danger-borderColor-secondary)",
            "original": {
              "initial": "{color.red.200}",
              "dark": "{color.red.700}"
            }
          }
        }
      }
    }
  },
  "typography": {
    "verticalMargin": {
      "sm": {
        "value": "16px",
        "variable": "var(--typography-verticalMargin-sm)",
        "original": "16px"
      },
      "base": {
        "value": "32px",
        "variable": "var(--typography-verticalMargin-base)",
        "original": "32px"
      }
    },
    "letterSpacing": {
      "tight": {
        "value": "-0.025em",
        "variable": "var(--typography-letterSpacing-tight)",
        "original": "-0.025em"
      },
      "wide": {
        "value": "0.025em",
        "variable": "var(--typography-letterSpacing-wide)",
        "original": "0.025em"
      }
    },
    "fontSize": {
      "xs": {
        "value": "12px",
        "variable": "var(--typography-fontSize-xs)",
        "original": "12px"
      },
      "sm": {
        "value": "14px",
        "variable": "var(--typography-fontSize-sm)",
        "original": "14px"
      },
      "base": {
        "value": "16px",
        "variable": "var(--typography-fontSize-base)",
        "original": "16px"
      },
      "lg": {
        "value": "18px",
        "variable": "var(--typography-fontSize-lg)",
        "original": "18px"
      },
      "xl": {
        "value": "20px",
        "variable": "var(--typography-fontSize-xl)",
        "original": "20px"
      },
      "2xl": {
        "value": "24px",
        "variable": "var(--typography-fontSize-2xl)",
        "original": "24px"
      },
      "3xl": {
        "value": "30px",
        "variable": "var(--typography-fontSize-3xl)",
        "original": "30px"
      },
      "4xl": {
        "value": "36px",
        "variable": "var(--typography-fontSize-4xl)",
        "original": "36px"
      },
      "5xl": {
        "value": "48px",
        "variable": "var(--typography-fontSize-5xl)",
        "original": "48px"
      },
      "6xl": {
        "value": "60px",
        "variable": "var(--typography-fontSize-6xl)",
        "original": "60px"
      },
      "7xl": {
        "value": "72px",
        "variable": "var(--typography-fontSize-7xl)",
        "original": "72px"
      },
      "8xl": {
        "value": "96px",
        "variable": "var(--typography-fontSize-8xl)",
        "original": "96px"
      },
      "9xl": {
        "value": "128px",
        "variable": "var(--typography-fontSize-9xl)",
        "original": "128px"
      }
    },
    "fontWeight": {
      "thin": {
        "value": "100",
        "variable": "var(--typography-fontWeight-thin)",
        "original": "100"
      },
      "extralight": {
        "value": "200",
        "variable": "var(--typography-fontWeight-extralight)",
        "original": "200"
      },
      "light": {
        "value": "300",
        "variable": "var(--typography-fontWeight-light)",
        "original": "300"
      },
      "normal": {
        "value": "400",
        "variable": "var(--typography-fontWeight-normal)",
        "original": "400"
      },
      "medium": {
        "value": "500",
        "variable": "var(--typography-fontWeight-medium)",
        "original": "500"
      },
      "semibold": {
        "value": "600",
        "variable": "var(--typography-fontWeight-semibold)",
        "original": "600"
      },
      "bold": {
        "value": "700",
        "variable": "var(--typography-fontWeight-bold)",
        "original": "700"
      },
      "extrabold": {
        "value": "800",
        "variable": "var(--typography-fontWeight-extrabold)",
        "original": "800"
      },
      "black": {
        "value": "900",
        "variable": "var(--typography-fontWeight-black)",
        "original": "900"
      }
    },
    "lead": {
      "none": {
        "value": "1",
        "variable": "var(--typography-lead-none)",
        "original": "1"
      },
      "tight": {
        "value": "1.25",
        "variable": "var(--typography-lead-tight)",
        "original": "1.25"
      },
      "snug": {
        "value": "1.375",
        "variable": "var(--typography-lead-snug)",
        "original": "1.375"
      },
      "normal": {
        "value": "1.5",
        "variable": "var(--typography-lead-normal)",
        "original": "1.5"
      },
      "relaxed": {
        "value": "1.625",
        "variable": "var(--typography-lead-relaxed)",
        "original": "1.625"
      },
      "loose": {
        "value": "2",
        "variable": "var(--typography-lead-loose)",
        "original": "2"
      }
    },
    "font": {
      "display": {
        "value": "var(--font-sans)",
        "variable": "var(--typography-font-display)",
        "original": "{font.sans}"
      },
      "body": {
        "value": "var(--font-sans)",
        "variable": "var(--typography-font-body)",
        "original": "{font.sans}"
      },
      "code": {
        "value": "var(--font-mono)",
        "variable": "var(--typography-font-code)",
        "original": "{font.mono}"
      }
    },
    "color": {
      "primary": {
        "50": {
          "value": "var(--color-primary-50)",
          "variable": "var(--typography-color-primary-50)",
          "original": "{color.primary.50}"
        },
        "100": {
          "value": "var(--color-primary-100)",
          "variable": "var(--typography-color-primary-100)",
          "original": "{color.primary.100}"
        },
        "200": {
          "value": "var(--color-primary-200)",
          "variable": "var(--typography-color-primary-200)",
          "original": "{color.primary.200}"
        },
        "300": {
          "value": "var(--color-primary-300)",
          "variable": "var(--typography-color-primary-300)",
          "original": "{color.primary.300}"
        },
        "400": {
          "value": "var(--color-primary-400)",
          "variable": "var(--typography-color-primary-400)",
          "original": "{color.primary.400}"
        },
        "500": {
          "value": "var(--color-primary-500)",
          "variable": "var(--typography-color-primary-500)",
          "original": "{color.primary.500}"
        },
        "600": {
          "value": "var(--color-primary-600)",
          "variable": "var(--typography-color-primary-600)",
          "original": "{color.primary.600}"
        },
        "700": {
          "value": "var(--color-primary-700)",
          "variable": "var(--typography-color-primary-700)",
          "original": "{color.primary.700}"
        },
        "800": {
          "value": "var(--color-primary-800)",
          "variable": "var(--typography-color-primary-800)",
          "original": "{color.primary.800}"
        },
        "900": {
          "value": "var(--color-primary-900)",
          "variable": "var(--typography-color-primary-900)",
          "original": "{color.primary.900}"
        }
      },
      "secondary": {
        "50": {
          "value": "var(--color-gray-50)",
          "variable": "var(--typography-color-secondary-50)",
          "original": "{color.gray.50}"
        },
        "100": {
          "value": "var(--color-gray-100)",
          "variable": "var(--typography-color-secondary-100)",
          "original": "{color.gray.100}"
        },
        "200": {
          "value": "var(--color-gray-200)",
          "variable": "var(--typography-color-secondary-200)",
          "original": "{color.gray.200}"
        },
        "300": {
          "value": "var(--color-gray-300)",
          "variable": "var(--typography-color-secondary-300)",
          "original": "{color.gray.300}"
        },
        "400": {
          "value": "var(--color-gray-400)",
          "variable": "var(--typography-color-secondary-400)",
          "original": "{color.gray.400}"
        },
        "500": {
          "value": "var(--color-gray-500)",
          "variable": "var(--typography-color-secondary-500)",
          "original": "{color.gray.500}"
        },
        "600": {
          "value": "var(--color-gray-600)",
          "variable": "var(--typography-color-secondary-600)",
          "original": "{color.gray.600}"
        },
        "700": {
          "value": "var(--color-gray-700)",
          "variable": "var(--typography-color-secondary-700)",
          "original": "{color.gray.700}"
        },
        "800": {
          "value": "var(--color-gray-800)",
          "variable": "var(--typography-color-secondary-800)",
          "original": "{color.gray.800}"
        },
        "900": {
          "value": "var(--color-gray-900)",
          "variable": "var(--typography-color-secondary-900)",
          "original": "{color.gray.900}"
        }
      }
    }
  },
  "prose": {
    "p": {
      "fontSize": {
        "value": "var(--typography-fontSize-base)",
        "variable": "var(--prose-p-fontSize)",
        "original": "{typography.fontSize.base}"
      },
      "lineHeight": {
        "value": "var(--typography-lead-normal)",
        "variable": "var(--prose-p-lineHeight)",
        "original": "{typography.lead.normal}"
      },
      "margin": {
        "value": "var(--typography-verticalMargin-base) 0",
        "variable": "var(--prose-p-margin)",
        "original": "{typography.verticalMargin.base} 0"
      },
      "br": {
        "margin": {
          "value": "var(--typography-verticalMargin-base) 0 0 0",
          "variable": "var(--prose-p-br-margin)",
          "original": "{typography.verticalMargin.base} 0 0 0"
        }
      }
    },
    "h1": {
      "margin": {
        "value": "0 0 2rem",
        "variable": "var(--prose-h1-margin)",
        "original": "0 0 2rem"
      },
      "fontSize": {
        "value": "var(--typography-fontSize-5xl)",
        "variable": "var(--prose-h1-fontSize)",
        "original": "{typography.fontSize.5xl}"
      },
      "lineHeight": {
        "value": "var(--typography-lead-tight)",
        "variable": "var(--prose-h1-lineHeight)",
        "original": "{typography.lead.tight}"
      },
      "fontWeight": {
        "value": "var(--typography-fontWeight-bold)",
        "variable": "var(--prose-h1-fontWeight)",
        "original": "{typography.fontWeight.bold}"
      },
      "letterSpacing": {
        "value": "var(--typography-letterSpacing-tight)",
        "variable": "var(--prose-h1-letterSpacing)",
        "original": "{typography.letterSpacing.tight}"
      },
      "iconSize": {
        "value": "var(--typography-fontSize-3xl)",
        "variable": "var(--prose-h1-iconSize)",
        "original": "{typography.fontSize.3xl}"
      }
    },
    "h2": {
      "margin": {
        "value": "3rem 0 2rem",
        "variable": "var(--prose-h2-margin)",
        "original": "3rem 0 2rem"
      },
      "fontSize": {
        "value": "var(--typography-fontSize-4xl)",
        "variable": "var(--prose-h2-fontSize)",
        "original": "{typography.fontSize.4xl}"
      },
      "lineHeight": {
        "value": "var(--typography-lead-tight)",
        "variable": "var(--prose-h2-lineHeight)",
        "original": "{typography.lead.tight}"
      },
      "fontWeight": {
        "value": "var(--typography-fontWeight-semibold)",
        "variable": "var(--prose-h2-fontWeight)",
        "original": "{typography.fontWeight.semibold}"
      },
      "letterSpacing": {
        "value": "var(--typography-letterSpacing-tight)",
        "variable": "var(--prose-h2-letterSpacing)",
        "original": "{typography.letterSpacing.tight}"
      },
      "iconSize": {
        "value": "var(--typography-fontSize-2xl)",
        "variable": "var(--prose-h2-iconSize)",
        "original": "{typography.fontSize.2xl}"
      }
    },
    "h3": {
      "margin": {
        "value": "3rem 0 2rem",
        "variable": "var(--prose-h3-margin)",
        "original": "3rem 0 2rem"
      },
      "fontSize": {
        "value": "var(--typography-fontSize-3xl)",
        "variable": "var(--prose-h3-fontSize)",
        "original": "{typography.fontSize.3xl}"
      },
      "lineHeight": {
        "value": "var(--typography-lead-snug)",
        "variable": "var(--prose-h3-lineHeight)",
        "original": "{typography.lead.snug}"
      },
      "fontWeight": {
        "value": "var(--typography-fontWeight-semibold)",
        "variable": "var(--prose-h3-fontWeight)",
        "original": "{typography.fontWeight.semibold}"
      },
      "letterSpacing": {
        "value": "var(--typography-letterSpacing-tight)",
        "variable": "var(--prose-h3-letterSpacing)",
        "original": "{typography.letterSpacing.tight}"
      },
      "iconSize": {
        "value": "var(--typography-fontSize-xl)",
        "variable": "var(--prose-h3-iconSize)",
        "original": "{typography.fontSize.xl}"
      }
    },
    "h4": {
      "margin": {
        "value": "3rem 0 2rem",
        "variable": "var(--prose-h4-margin)",
        "original": "3rem 0 2rem"
      },
      "fontSize": {
        "value": "var(--typography-fontSize-2xl)",
        "variable": "var(--prose-h4-fontSize)",
        "original": "{typography.fontSize.2xl}"
      },
      "lineHeight": {
        "value": "var(--typography-lead-snug)",
        "variable": "var(--prose-h4-lineHeight)",
        "original": "{typography.lead.snug}"
      },
      "fontWeight": {
        "value": "var(--typography-fontWeight-semibold)",
        "variable": "var(--prose-h4-fontWeight)",
        "original": "{typography.fontWeight.semibold}"
      },
      "letterSpacing": {
        "value": "var(--typography-letterSpacing-tight)",
        "variable": "var(--prose-h4-letterSpacing)",
        "original": "{typography.letterSpacing.tight}"
      },
      "iconSize": {
        "value": "var(--typography-fontSize-lg)",
        "variable": "var(--prose-h4-iconSize)",
        "original": "{typography.fontSize.lg}"
      }
    },
    "h5": {
      "margin": {
        "value": "3rem 0 2rem",
        "variable": "var(--prose-h5-margin)",
        "original": "3rem 0 2rem"
      },
      "fontSize": {
        "value": "var(--typography-fontSize-xl)",
        "variable": "var(--prose-h5-fontSize)",
        "original": "{typography.fontSize.xl}"
      },
      "lineHeight": {
        "value": "var(--typography-lead-snug)",
        "variable": "var(--prose-h5-lineHeight)",
        "original": "{typography.lead.snug}"
      },
      "fontWeight": {
        "value": "var(--typography-fontWeight-semibold)",
        "variable": "var(--prose-h5-fontWeight)",
        "original": "{typography.fontWeight.semibold}"
      },
      "iconSize": {
        "value": "var(--typography-fontSize-lg)",
        "variable": "var(--prose-h5-iconSize)",
        "original": "{typography.fontSize.lg}"
      }
    },
    "h6": {
      "margin": {
        "value": "3rem 0 2rem",
        "variable": "var(--prose-h6-margin)",
        "original": "3rem 0 2rem"
      },
      "fontSize": {
        "value": "var(--typography-fontSize-lg)",
        "variable": "var(--prose-h6-fontSize)",
        "original": "{typography.fontSize.lg}"
      },
      "lineHeight": {
        "value": "var(--typography-lead-normal)",
        "variable": "var(--prose-h6-lineHeight)",
        "original": "{typography.lead.normal}"
      },
      "fontWeight": {
        "value": "var(--typography-fontWeight-semibold)",
        "variable": "var(--prose-h6-fontWeight)",
        "original": "{typography.fontWeight.semibold}"
      },
      "iconSize": {
        "value": "var(--typography-fontSize-base)",
        "variable": "var(--prose-h6-iconSize)",
        "original": "{typography.fontSize.base}"
      }
    },
    "strong": {
      "fontWeight": {
        "value": "var(--typography-fontWeight-semibold)",
        "variable": "var(--prose-strong-fontWeight)",
        "original": "{typography.fontWeight.semibold}"
      }
    },
    "img": {
      "margin": {
        "value": "var(--typography-verticalMargin-base) 0",
        "variable": "var(--prose-img-margin)",
        "original": "{typography.verticalMargin.base} 0"
      }
    },
    "a": {
      "textDecoration": {
        "value": "none",
        "variable": "var(--prose-a-textDecoration)",
        "original": "none"
      },
      "color": {
        "static": {
          "value": {
            "initial": "inherit",
            "dark": "inherit"
          },
          "variable": "var(--prose-a-color-static)",
          "original": {
            "initial": "inherit",
            "dark": "inherit"
          }
        },
        "hover": {
          "value": {
            "initial": "var(--typography-color-primary-500)",
            "dark": "var(--typography-color-primary-400)"
          },
          "variable": "var(--prose-a-color-hover)",
          "original": {
            "initial": "{typography.color.primary.500}",
            "dark": "{typography.color.primary.400}"
          }
        }
      },
      "border": {
        "width": {
          "value": "1px",
          "variable": "var(--prose-a-border-width)",
          "original": "1px"
        },
        "style": {
          "static": {
            "value": "dashed",
            "variable": "var(--prose-a-border-style-static)",
            "original": "dashed"
          },
          "hover": {
            "value": "solid",
            "variable": "var(--prose-a-border-style-hover)",
            "original": "solid"
          }
        },
        "color": {
          "static": {
            "value": {
              "initial": "currentColor",
              "dark": "currentColor"
            },
            "variable": "var(--prose-a-border-color-static)",
            "original": {
              "initial": "currentColor",
              "dark": "currentColor"
            }
          },
          "hover": {
            "value": {
              "initial": "currentColor",
              "dark": "currentColor"
            },
            "variable": "var(--prose-a-border-color-hover)",
            "original": {
              "initial": "currentColor",
              "dark": "currentColor"
            }
          }
        },
        "distance": {
          "value": "2px",
          "variable": "var(--prose-a-border-distance)",
          "original": "2px"
        }
      },
      "fontWeight": {
        "value": "var(--typography-fontWeight-medium)",
        "variable": "var(--prose-a-fontWeight)",
        "original": "{typography.fontWeight.medium}"
      },
      "hasCode": {
        "borderBottom": {
          "value": "none",
          "variable": "var(--prose-a-hasCode-borderBottom)",
          "original": "none"
        }
      },
      "code": {
        "border": {
          "width": {
            "value": "var(--prose-a-border-width)",
            "variable": "var(--prose-a-code-border-width)",
            "original": "{prose.a.border.width}"
          },
          "style": {
            "value": "var(--prose-a-border-style-static)",
            "variable": "var(--prose-a-code-border-style)",
            "original": "{prose.a.border.style.static}"
          },
          "color": {
            "static": {
              "value": {
                "initial": "var(--typography-color-secondary-400)",
                "dark": "var(--typography-color-secondary-600)"
              },
              "variable": "var(--prose-a-code-border-color-static)",
              "original": {
                "initial": "{typography.color.secondary.400}",
                "dark": "{typography.color.secondary.600}"
              }
            },
            "hover": {
              "value": {
                "initial": "var(--typography-color-primary-500)",
                "dark": "var(--typography-color-primary-600)"
              },
              "variable": "var(--prose-a-code-border-color-hover)",
              "original": {
                "initial": "{typography.color.primary.500}",
                "dark": "{typography.color.primary.600}"
              }
            }
          }
        },
        "color": {
          "static": {
            "value": {
              "initial": "currentColor",
              "dark": "currentColor"
            },
            "variable": "var(--prose-a-code-color-static)",
            "original": {
              "initial": "currentColor",
              "dark": "currentColor"
            }
          },
          "hover": {
            "value": {
              "initial": "currentColor",
              "dark": "currentColor"
            },
            "variable": "var(--prose-a-code-color-hover)",
            "original": {
              "initial": "currentColor",
              "dark": "currentColor"
            }
          }
        },
        "background": {
          "static": {},
          "hover": {
            "value": {
              "initial": "var(--typography-color-primary-50)",
              "dark": "var(--typography-color-primary-900)"
            },
            "variable": "var(--prose-a-code-background-hover)",
            "original": {
              "initial": "{typography.color.primary.50}",
              "dark": "{typography.color.primary.900}"
            }
          }
        }
      }
    },
    "blockquote": {
      "margin": {
        "value": "var(--typography-verticalMargin-base) 0",
        "variable": "var(--prose-blockquote-margin)",
        "original": "{typography.verticalMargin.base} 0"
      },
      "padding": {
        "value": "0 0 0 24px",
        "variable": "var(--prose-blockquote-padding)",
        "original": "0 0 0 24px"
      },
      "quotes": {
        "value": "'201C' '201D' '2018' '2019'",
        "variable": "var(--prose-blockquote-quotes)",
        "original": "'201C' '201D' '2018' '2019'"
      },
      "color": {
        "value": {
          "initial": "var(--typography-color-secondary-500)",
          "dark": "var(--typography-color-secondary-400)"
        },
        "variable": "var(--prose-blockquote-color)",
        "original": {
          "initial": "{typography.color.secondary.500}",
          "dark": "{typography.color.secondary.400}"
        }
      },
      "border": {
        "width": {
          "value": "4px",
          "variable": "var(--prose-blockquote-border-width)",
          "original": "4px"
        },
        "style": {
          "value": "solid",
          "variable": "var(--prose-blockquote-border-style)",
          "original": "solid"
        },
        "color": {
          "value": {
            "initial": "var(--typography-color-secondary-200)",
            "dark": "var(--typography-color-secondary-700)"
          },
          "variable": "var(--prose-blockquote-border-color)",
          "original": {
            "initial": "{typography.color.secondary.200}",
            "dark": "{typography.color.secondary.700}"
          }
        }
      }
    },
    "ul": {
      "listStyleType": {
        "value": "disc",
        "variable": "var(--prose-ul-listStyleType)",
        "original": "disc"
      },
      "margin": {
        "value": "var(--typography-verticalMargin-base) 0",
        "variable": "var(--prose-ul-margin)",
        "original": "{typography.verticalMargin.base} 0"
      },
      "padding": {
        "value": "0 0 0 21px",
        "variable": "var(--prose-ul-padding)",
        "original": "0 0 0 21px"
      },
      "li": {
        "markerColor": {
          "value": {
            "initial": "var(--typography-color-secondary-400)",
            "dark": "var(--typography-color-secondary-500)"
          },
          "variable": "var(--prose-ul-li-markerColor)",
          "original": {
            "initial": "{typography.color.secondary.400}",
            "dark": "{typography.color.secondary.500}"
          }
        }
      }
    },
    "ol": {
      "listStyleType": {
        "value": "decimal",
        "variable": "var(--prose-ol-listStyleType)",
        "original": "decimal"
      },
      "margin": {
        "value": "var(--typography-verticalMargin-base) 0",
        "variable": "var(--prose-ol-margin)",
        "original": "{typography.verticalMargin.base} 0"
      },
      "padding": {
        "value": "0 0 0 21px",
        "variable": "var(--prose-ol-padding)",
        "original": "0 0 0 21px"
      },
      "li": {
        "markerColor": {
          "value": {
            "initial": "var(--typography-color-secondary-500)",
            "dark": "var(--typography-color-secondary-500)"
          },
          "variable": "var(--prose-ol-li-markerColor)",
          "original": {
            "initial": "{typography.color.secondary.500}",
            "dark": "{typography.color.secondary.500}"
          }
        }
      }
    },
    "li": {
      "margin": {
        "value": "var(--typography-verticalMargin-sm) 0",
        "variable": "var(--prose-li-margin)",
        "original": "{typography.verticalMargin.sm} 0"
      },
      "listStylePosition": {
        "value": "outside",
        "variable": "var(--prose-li-listStylePosition)",
        "original": "outside"
      }
    },
    "hr": {
      "margin": {
        "value": "var(--typography-verticalMargin-base) 0",
        "variable": "var(--prose-hr-margin)",
        "original": "{typography.verticalMargin.base} 0"
      },
      "style": {
        "value": "solid",
        "variable": "var(--prose-hr-style)",
        "original": "solid"
      },
      "width": {
        "value": "1px",
        "variable": "var(--prose-hr-width)",
        "original": "1px"
      },
      "color": {
        "value": {
          "initial": "var(--typography-color-secondary-200)",
          "dark": "var(--typography-color-secondary-800)"
        },
        "variable": "var(--prose-hr-color)",
        "original": {
          "initial": "{typography.color.secondary.200}",
          "dark": "{typography.color.secondary.800}"
        }
      }
    },
    "table": {
      "margin": {
        "value": "var(--typography-verticalMargin-base) 0",
        "variable": "var(--prose-table-margin)",
        "original": "{typography.verticalMargin.base} 0"
      },
      "textAlign": {
        "value": "left",
        "variable": "var(--prose-table-textAlign)",
        "original": "left"
      },
      "fontSize": {
        "value": "var(--typography-fontSize-sm)",
        "variable": "var(--prose-table-fontSize)",
        "original": "{typography.fontSize.sm}"
      },
      "lineHeight": {
        "value": "inherit",
        "variable": "var(--prose-table-lineHeight)",
        "original": "inherit"
      }
    },
    "thead": {
      "border": {
        "width": {
          "value": "0px",
          "variable": "var(--prose-thead-border-width)",
          "original": "0px"
        },
        "style": {
          "value": "solid",
          "variable": "var(--prose-thead-border-style)",
          "original": "solid"
        },
        "color": {
          "value": {
            "initial": "var(--typography-color-secondary-300)",
            "dark": "var(--typography-color-secondary-600)"
          },
          "variable": "var(--prose-thead-border-color)",
          "original": {
            "initial": "{typography.color.secondary.300}",
            "dark": "{typography.color.secondary.600}"
          }
        }
      },
      "borderBottom": {
        "width": {
          "value": "1px",
          "variable": "var(--prose-thead-borderBottom-width)",
          "original": "1px"
        },
        "style": {
          "value": "solid",
          "variable": "var(--prose-thead-borderBottom-style)",
          "original": "solid"
        },
        "color": {
          "value": {
            "initial": "var(--typography-color-secondary-300)",
            "dark": "var(--typography-color-secondary-600)"
          },
          "variable": "var(--prose-thead-borderBottom-color)",
          "original": {
            "initial": "{typography.color.secondary.300}",
            "dark": "{typography.color.secondary.600}"
          }
        }
      }
    },
    "th": {
      "color": {
        "value": {
          "initial": "var(--typography-color-secondary-600)",
          "dark": "var(--typography-color-secondary-400)"
        },
        "variable": "var(--prose-th-color)",
        "original": {
          "initial": "{typography.color.secondary.600}",
          "dark": "{typography.color.secondary.400}"
        }
      },
      "padding": {
        "value": "0 var(--typography-verticalMargin-sm) var(--typography-verticalMargin-sm) var(--typography-verticalMargin-sm)",
        "variable": "var(--prose-th-padding)",
        "original": "0 {typography.verticalMargin.sm} {typography.verticalMargin.sm} {typography.verticalMargin.sm}"
      },
      "fontWeight": {
        "value": "var(--typography-fontWeight-semibold)",
        "variable": "var(--prose-th-fontWeight)",
        "original": "{typography.fontWeight.semibold}"
      }
    },
    "tbody": {
      "tr": {
        "borderBottom": {
          "width": {
            "value": "1px",
            "variable": "var(--prose-tbody-tr-borderBottom-width)",
            "original": "1px"
          },
          "style": {
            "value": "dashed",
            "variable": "var(--prose-tbody-tr-borderBottom-style)",
            "original": "dashed"
          },
          "color": {
            "value": {
              "initial": "var(--typography-color-secondary-300)",
              "dark": "var(--typography-color-secondary-700)"
            },
            "variable": "var(--prose-tbody-tr-borderBottom-color)",
            "original": {
              "initial": "{typography.color.secondary.300}",
              "dark": "{typography.color.secondary.700}"
            }
          }
        }
      },
      "td": {
        "padding": {
          "value": "var(--typography-verticalMargin-sm)",
          "variable": "var(--prose-tbody-td-padding)",
          "original": "{typography.verticalMargin.sm}"
        }
      },
      "code": {
        "inline": {
          "fontSize": {
            "value": "var(--typography-fontSize-sm)",
            "variable": "var(--prose-tbody-code-inline-fontSize)",
            "original": "{typography.fontSize.sm}"
          }
        }
      }
    },
    "code": {
      "block": {
        "fontSize": {
          "value": "var(--typography-fontSize-sm)",
          "variable": "var(--prose-code-block-fontSize)",
          "original": "{typography.fontSize.sm}"
        },
        "margin": {
          "value": "var(--typography-verticalMargin-base) 0",
          "variable": "var(--prose-code-block-margin)",
          "original": "{typography.verticalMargin.base} 0"
        },
        "border": {
          "width": {
            "value": "1px",
            "variable": "var(--prose-code-block-border-width)",
            "original": "1px"
          },
          "style": {
            "value": "solid",
            "variable": "var(--prose-code-block-border-style)",
            "original": "solid"
          },
          "color": {
            "value": {
              "initial": "var(--typography-color-secondary-200)",
              "dark": "var(--typography-color-secondary-800)"
            },
            "variable": "var(--prose-code-block-border-color)",
            "original": {
              "initial": "{typography.color.secondary.200}",
              "dark": "{typography.color.secondary.800}"
            }
          }
        },
        "color": {
          "value": {
            "initial": "var(--typography-color-secondary-700)",
            "dark": "var(--typography-color-secondary-200)"
          },
          "variable": "var(--prose-code-block-color)",
          "original": {
            "initial": "{typography.color.secondary.700}",
            "dark": "{typography.color.secondary.200}"
          }
        },
        "backgroundColor": {
          "value": {
            "initial": "var(--typography-color-secondary-100)",
            "dark": "var(--typography-color-secondary-900)"
          },
          "variable": "var(--prose-code-block-backgroundColor)",
          "original": {
            "initial": "{typography.color.secondary.100}",
            "dark": "{typography.color.secondary.900}"
          }
        },
        "pre": {
          "padding": {
            "value": "var(--typography-verticalMargin-sm)",
            "variable": "var(--prose-code-block-pre-padding)",
            "original": "{typography.verticalMargin.sm}"
          }
        }
      },
      "inline": {
        "borderRadius": {
          "value": "0.375rem",
          "variable": "var(--prose-code-inline-borderRadius)",
          "original": "0.375rem"
        },
        "padding": {
          "value": "0.25rem 0.375rem 0.25rem 0.375rem",
          "variable": "var(--prose-code-inline-padding)",
          "original": "0.25rem 0.375rem 0.25rem 0.375rem"
        },
        "fontSize": {
          "value": "var(--typography-fontSize-sm)",
          "variable": "var(--prose-code-inline-fontSize)",
          "original": "{typography.fontSize.sm}"
        },
        "fontWeight": {
          "value": "var(--typography-fontWeight-normal)",
          "variable": "var(--prose-code-inline-fontWeight)",
          "original": "{typography.fontWeight.normal}"
        },
        "color": {
          "value": {
            "initial": "var(--typography-color-secondary-700)",
            "dark": "var(--typography-color-secondary-200)"
          },
          "variable": "var(--prose-code-inline-color)",
          "original": {
            "initial": "{typography.color.secondary.700}",
            "dark": "{typography.color.secondary.200}"
          }
        },
        "backgroundColor": {
          "value": {
            "initial": "var(--typography-color-secondary-100)",
            "dark": "var(--typography-color-secondary-900)"
          },
          "variable": "var(--prose-code-inline-backgroundColor)",
          "original": {
            "initial": "{typography.color.secondary.100}",
            "dark": "{typography.color.secondary.900}"
          }
        }
      }
    }
  },
  "radii": {
    "sm": {
      "value": "0.375rem",
      "variable": "var(--radii-sm)",
      "original": "0.375rem"
    },
    "md": {
      "value": "0.5rem",
      "variable": "var(--radii-md)",
      "original": "0.5rem"
    },
    "lg": {
      "value": "0.75rem",
      "variable": "var(--radii-lg)",
      "original": "0.75rem"
    },
    "none": {
      "value": "0px",
      "variable": "var(--radii-none)",
      "original": "0px"
    },
    "2xs": {
      "value": "0.125rem",
      "variable": "var(--radii-2xs)",
      "original": "0.125rem"
    },
    "xs": {
      "value": "0.25rem",
      "variable": "var(--radii-xs)",
      "original": "0.25rem"
    },
    "xl": {
      "value": "1rem",
      "variable": "var(--radii-xl)",
      "original": "1rem"
    },
    "2xl": {
      "value": "1.5rem",
      "variable": "var(--radii-2xl)",
      "original": "1.5rem"
    },
    "3xl": {
      "value": "1.75rem",
      "variable": "var(--radii-3xl)",
      "original": "1.75rem"
    },
    "full": {
      "value": "9999px",
      "variable": "var(--radii-full)",
      "original": "9999px"
    }
  },
  "fontSize": {
    "xs": {
      "value": "0.75rem",
      "variable": "var(--fontSize-xs)",
      "original": "0.75rem"
    },
    "sm": {
      "value": "0.875rem",
      "variable": "var(--fontSize-sm)",
      "original": "0.875rem"
    },
    "base": {
      "value": "1rem",
      "variable": "var(--fontSize-base)",
      "original": "1rem"
    },
    "lg": {
      "value": "1.125rem",
      "variable": "var(--fontSize-lg)",
      "original": "1.125rem"
    },
    "xl": {
      "value": "1.25rem",
      "variable": "var(--fontSize-xl)",
      "original": "1.25rem"
    },
    "2xl": {
      "value": "1.5rem",
      "variable": "var(--fontSize-2xl)",
      "original": "1.5rem"
    },
    "3xl": {
      "value": "1.875rem",
      "variable": "var(--fontSize-3xl)",
      "original": "1.875rem"
    },
    "4xl": {
      "value": "2.25rem",
      "variable": "var(--fontSize-4xl)",
      "original": "2.25rem"
    },
    "5xl": {
      "value": "3rem",
      "variable": "var(--fontSize-5xl)",
      "original": "3rem"
    },
    "6xl": {
      "value": "3.75rem",
      "variable": "var(--fontSize-6xl)",
      "original": "3.75rem"
    },
    "7xl": {
      "value": "4.5rem",
      "variable": "var(--fontSize-7xl)",
      "original": "4.5rem"
    },
    "8xl": {
      "value": "6rem",
      "variable": "var(--fontSize-8xl)",
      "original": "6rem"
    },
    "9xl": {
      "value": "8rem",
      "variable": "var(--fontSize-9xl)",
      "original": "8rem"
    }
  },
  "lead": {
    "1": {
      "value": ".025rem",
      "variable": "var(--lead-1)",
      "original": ".025rem"
    },
    "2": {
      "value": ".5rem",
      "variable": "var(--lead-2)",
      "original": ".5rem"
    },
    "3": {
      "value": ".75rem",
      "variable": "var(--lead-3)",
      "original": ".75rem"
    },
    "4": {
      "value": "1rem",
      "variable": "var(--lead-4)",
      "original": "1rem"
    },
    "5": {
      "value": "1.25rem",
      "variable": "var(--lead-5)",
      "original": "1.25rem"
    },
    "6": {
      "value": "1.5rem",
      "variable": "var(--lead-6)",
      "original": "1.5rem"
    },
    "7": {
      "value": "1.75rem",
      "variable": "var(--lead-7)",
      "original": "1.75rem"
    },
    "8": {
      "value": "2rem",
      "variable": "var(--lead-8)",
      "original": "2rem"
    },
    "9": {
      "value": "2.25rem",
      "variable": "var(--lead-9)",
      "original": "2.25rem"
    },
    "10": {
      "value": "2.5rem",
      "variable": "var(--lead-10)",
      "original": "2.5rem"
    },
    "none": {
      "value": "1",
      "variable": "var(--lead-none)",
      "original": "1"
    },
    "tight": {
      "value": "1.25",
      "variable": "var(--lead-tight)",
      "original": "1.25"
    },
    "snug": {
      "value": "1.375",
      "variable": "var(--lead-snug)",
      "original": "1.375"
    },
    "normal": {
      "value": "1.5",
      "variable": "var(--lead-normal)",
      "original": "1.5"
    },
    "relaxed": {
      "value": "1.625",
      "variable": "var(--lead-relaxed)",
      "original": "1.625"
    },
    "loose": {
      "value": "2",
      "variable": "var(--lead-loose)",
      "original": "2"
    }
  },
  "font": {
    "sans": {
      "value": "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji",
      "variable": "var(--font-sans)",
      "original": "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji"
    },
    "serif": {
      "value": "ui-serif, Georgia, Cambria, Times New Roman, Times, serif",
      "variable": "var(--font-serif)",
      "original": "ui-serif, Georgia, Cambria, Times New Roman, Times, serif"
    },
    "mono": {
      "value": "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
      "variable": "var(--font-mono)",
      "original": "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace"
    }
  },
  "docus": {
    "header": {
      "height": {
        "value": "64px",
        "variable": "var(--docus-header-height)",
        "original": "64px"
      }
    },
    "footer": {
      "padding": {
        "value": "var(--space-4) 0",
        "variable": "var(--docus-footer-padding)",
        "original": "{space.4} 0"
      }
    },
    "readableLine": {
      "value": "78ch",
      "variable": "var(--docus-readableLine)",
      "original": "78ch"
    },
    "loadingBar": {
      "height": {
        "value": "3px",
        "variable": "var(--docus-loadingBar-height)",
        "original": "3px"
      },
      "gradientColorStop1": {
        "value": "#00dc82",
        "variable": "var(--docus-loadingBar-gradientColorStop1)",
        "original": "#00dc82"
      },
      "gradientColorStop2": {
        "value": "#34cdfe",
        "variable": "var(--docus-loadingBar-gradientColorStop2)",
        "original": "#34cdfe"
      },
      "gradientColorStop3": {
        "value": "#0047e1",
        "variable": "var(--docus-loadingBar-gradientColorStop3)",
        "original": "#0047e1"
      }
    }
  },
  "media": {
    "xs": {
      "value": "(min-width: 475px)",
      "variable": "var(--media-xs)",
      "original": "(min-width: 475px)"
    },
    "sm": {
      "value": "(min-width: 640px)",
      "variable": "var(--media-sm)",
      "original": "(min-width: 640px)"
    },
    "md": {
      "value": "(min-width: 768px)",
      "variable": "var(--media-md)",
      "original": "(min-width: 768px)"
    },
    "lg": {
      "value": "(min-width: 1024px)",
      "variable": "var(--media-lg)",
      "original": "(min-width: 1024px)"
    },
    "xl": {
      "value": "(min-width: 1280px)",
      "variable": "var(--media-xl)",
      "original": "(min-width: 1280px)"
    },
    "2xl": {
      "value": "(min-width: 1536px)",
      "variable": "var(--media-2xl)",
      "original": "(min-width: 1536px)"
    },
    "rm": {
      "value": "(prefers-reduced-motion: reduce)",
      "variable": "var(--media-rm)",
      "original": "(prefers-reduced-motion: reduce)"
    },
    "landscape": {
      "value": "only screen and (orientation: landscape)",
      "variable": "var(--media-landscape)",
      "original": "only screen and (orientation: landscape)"
    },
    "portrait": {
      "value": "only screen and (orientation: portrait)",
      "variable": "var(--media-portrait)",
      "original": "only screen and (orientation: portrait)"
    }
  },
  "width": {
    "screen": {
      "value": "100vw",
      "variable": "var(--width-screen)",
      "original": "100vw"
    }
  },
  "height": {
    "screen": {
      "value": "100vh",
      "variable": "var(--height-screen)",
      "original": "100vh"
    }
  },
  "shadow": {
    "xs": {
      "value": "0px 1px 2px 0px #000000",
      "variable": "var(--shadow-xs)",
      "original": "0px 1px 2px 0px #000000"
    },
    "sm": {
      "value": "0px 1px 3px 0px #000000, 0px 1px 2px -1px #000000",
      "variable": "var(--shadow-sm)",
      "original": "0px 1px 3px 0px #000000, 0px 1px 2px -1px #000000"
    },
    "md": {
      "value": "0px 4px 6px -1px #000000, 0px 2px 4px -2px #000000",
      "variable": "var(--shadow-md)",
      "original": "0px 4px 6px -1px #000000, 0px 2px 4px -2px #000000"
    },
    "lg": {
      "value": "0px 10px 15px -3px #000000, 0px 4px 6px -4px #000000",
      "variable": "var(--shadow-lg)",
      "original": "0px 10px 15px -3px #000000, 0px 4px 6px -4px #000000"
    },
    "xl": {
      "value": "0px 20px 25px -5px var(--color-gray-400), 0px 8px 10px -6px #000000",
      "variable": "var(--shadow-xl)",
      "original": "0px 20px 25px -5px {color.gray.400}, 0px 8px 10px -6px #000000"
    },
    "2xl": {
      "value": "0px 25px 50px -12px var(--color-gray-900)",
      "variable": "var(--shadow-2xl)",
      "original": "0px 25px 50px -12px {color.gray.900}"
    },
    "none": {
      "value": "0px 0px 0px 0px transparent",
      "variable": "var(--shadow-none)",
      "original": "0px 0px 0px 0px transparent"
    }
  },
  "size": {
    "0": {
      "value": "0px",
      "variable": "var(--size-0)",
      "original": "0px"
    },
    "2": {
      "value": "2px",
      "variable": "var(--size-2)",
      "original": "2px"
    },
    "4": {
      "value": "4px",
      "variable": "var(--size-4)",
      "original": "4px"
    },
    "6": {
      "value": "6px",
      "variable": "var(--size-6)",
      "original": "6px"
    },
    "8": {
      "value": "8px",
      "variable": "var(--size-8)",
      "original": "8px"
    },
    "12": {
      "value": "12px",
      "variable": "var(--size-12)",
      "original": "12px"
    },
    "16": {
      "value": "16px",
      "variable": "var(--size-16)",
      "original": "16px"
    },
    "20": {
      "value": "20px",
      "variable": "var(--size-20)",
      "original": "20px"
    },
    "24": {
      "value": "24px",
      "variable": "var(--size-24)",
      "original": "24px"
    },
    "32": {
      "value": "32px",
      "variable": "var(--size-32)",
      "original": "32px"
    },
    "40": {
      "value": "40px",
      "variable": "var(--size-40)",
      "original": "40px"
    },
    "48": {
      "value": "48px",
      "variable": "var(--size-48)",
      "original": "48px"
    },
    "56": {
      "value": "56px",
      "variable": "var(--size-56)",
      "original": "56px"
    },
    "64": {
      "value": "64px",
      "variable": "var(--size-64)",
      "original": "64px"
    },
    "80": {
      "value": "80px",
      "variable": "var(--size-80)",
      "original": "80px"
    },
    "104": {
      "value": "104px",
      "variable": "var(--size-104)",
      "original": "104px"
    },
    "200": {
      "value": "200px",
      "variable": "var(--size-200)",
      "original": "200px"
    },
    "xs": {
      "value": "20rem",
      "variable": "var(--size-xs)",
      "original": "20rem"
    },
    "sm": {
      "value": "24rem",
      "variable": "var(--size-sm)",
      "original": "24rem"
    },
    "md": {
      "value": "28rem",
      "variable": "var(--size-md)",
      "original": "28rem"
    },
    "lg": {
      "value": "32rem",
      "variable": "var(--size-lg)",
      "original": "32rem"
    },
    "xl": {
      "value": "36rem",
      "variable": "var(--size-xl)",
      "original": "36rem"
    },
    "2xl": {
      "value": "42rem",
      "variable": "var(--size-2xl)",
      "original": "42rem"
    },
    "3xl": {
      "value": "48rem",
      "variable": "var(--size-3xl)",
      "original": "48rem"
    },
    "4xl": {
      "value": "56rem",
      "variable": "var(--size-4xl)",
      "original": "56rem"
    },
    "5xl": {
      "value": "64rem",
      "variable": "var(--size-5xl)",
      "original": "64rem"
    },
    "6xl": {
      "value": "72rem",
      "variable": "var(--size-6xl)",
      "original": "72rem"
    },
    "7xl": {
      "value": "80rem",
      "variable": "var(--size-7xl)",
      "original": "80rem"
    },
    "full": {
      "value": "100%",
      "variable": "var(--size-full)",
      "original": "100%"
    }
  },
  "space": {
    "0": {
      "value": "0px",
      "variable": "var(--space-0)",
      "original": "0px"
    },
    "1": {
      "value": "0.25rem",
      "variable": "var(--space-1)",
      "original": "0.25rem"
    },
    "2": {
      "value": "0.5rem",
      "variable": "var(--space-2)",
      "original": "0.5rem"
    },
    "3": {
      "value": "0.75rem",
      "variable": "var(--space-3)",
      "original": "0.75rem"
    },
    "4": {
      "value": "1rem",
      "variable": "var(--space-4)",
      "original": "1rem"
    },
    "5": {
      "value": "1.25rem",
      "variable": "var(--space-5)",
      "original": "1.25rem"
    },
    "6": {
      "value": "1.5rem",
      "variable": "var(--space-6)",
      "original": "1.5rem"
    },
    "7": {
      "value": "1.75rem",
      "variable": "var(--space-7)",
      "original": "1.75rem"
    },
    "8": {
      "value": "2rem",
      "variable": "var(--space-8)",
      "original": "2rem"
    },
    "9": {
      "value": "2.25rem",
      "variable": "var(--space-9)",
      "original": "2.25rem"
    },
    "10": {
      "value": "2.5rem",
      "variable": "var(--space-10)",
      "original": "2.5rem"
    },
    "11": {
      "value": "2.75rem",
      "variable": "var(--space-11)",
      "original": "2.75rem"
    },
    "12": {
      "value": "3rem",
      "variable": "var(--space-12)",
      "original": "3rem"
    },
    "14": {
      "value": "3.5rem",
      "variable": "var(--space-14)",
      "original": "3.5rem"
    },
    "16": {
      "value": "4rem",
      "variable": "var(--space-16)",
      "original": "4rem"
    },
    "20": {
      "value": "5rem",
      "variable": "var(--space-20)",
      "original": "5rem"
    },
    "24": {
      "value": "6rem",
      "variable": "var(--space-24)",
      "original": "6rem"
    },
    "28": {
      "value": "7rem",
      "variable": "var(--space-28)",
      "original": "7rem"
    },
    "32": {
      "value": "8rem",
      "variable": "var(--space-32)",
      "original": "8rem"
    },
    "36": {
      "value": "9rem",
      "variable": "var(--space-36)",
      "original": "9rem"
    },
    "40": {
      "value": "10rem",
      "variable": "var(--space-40)",
      "original": "10rem"
    },
    "44": {
      "value": "11rem",
      "variable": "var(--space-44)",
      "original": "11rem"
    },
    "48": {
      "value": "12rem",
      "variable": "var(--space-48)",
      "original": "12rem"
    },
    "52": {
      "value": "13rem",
      "variable": "var(--space-52)",
      "original": "13rem"
    },
    "56": {
      "value": "14rem",
      "variable": "var(--space-56)",
      "original": "14rem"
    },
    "60": {
      "value": "15rem",
      "variable": "var(--space-60)",
      "original": "15rem"
    },
    "64": {
      "value": "16rem",
      "variable": "var(--space-64)",
      "original": "16rem"
    },
    "72": {
      "value": "18rem",
      "variable": "var(--space-72)",
      "original": "18rem"
    },
    "80": {
      "value": "20rem",
      "variable": "var(--space-80)",
      "original": "20rem"
    },
    "96": {
      "value": "24rem",
      "variable": "var(--space-96)",
      "original": "24rem"
    },
    "px": {
      "value": "1px",
      "variable": "var(--space-px)",
      "original": "1px"
    },
    "rem": {
      "125": {
        "value": "0.125rem",
        "variable": "var(--space-rem-125)",
        "original": "0.125rem"
      },
      "375": {
        "value": "0.375rem",
        "variable": "var(--space-rem-375)",
        "original": "0.375rem"
      },
      "625": {
        "value": "0.625rem",
        "variable": "var(--space-rem-625)",
        "original": "0.625rem"
      },
      "875": {
        "value": "0.875rem",
        "variable": "var(--space-rem-875)",
        "original": "0.875rem"
      }
    }
  },
  "borderWidth": {
    "noBorder": {
      "value": "0",
      "variable": "var(--borderWidth-noBorder)",
      "original": "0"
    },
    "sm": {
      "value": "1px",
      "variable": "var(--borderWidth-sm)",
      "original": "1px"
    },
    "md": {
      "value": "2px",
      "variable": "var(--borderWidth-md)",
      "original": "2px"
    },
    "lg": {
      "value": "3px",
      "variable": "var(--borderWidth-lg)",
      "original": "3px"
    }
  },
  "opacity": {
    "noOpacity": {
      "value": "0",
      "variable": "var(--opacity-noOpacity)",
      "original": "0"
    },
    "bright": {
      "value": "0.1",
      "variable": "var(--opacity-bright)",
      "original": "0.1"
    },
    "light": {
      "value": "0.15",
      "variable": "var(--opacity-light)",
      "original": "0.15"
    },
    "soft": {
      "value": "0.3",
      "variable": "var(--opacity-soft)",
      "original": "0.3"
    },
    "medium": {
      "value": "0.5",
      "variable": "var(--opacity-medium)",
      "original": "0.5"
    },
    "high": {
      "value": "0.8",
      "variable": "var(--opacity-high)",
      "original": "0.8"
    },
    "total": {
      "value": "1",
      "variable": "var(--opacity-total)",
      "original": "1"
    }
  },
  "fontWeight": {
    "thin": {
      "value": "100",
      "variable": "var(--fontWeight-thin)",
      "original": "100"
    },
    "extralight": {
      "value": "200",
      "variable": "var(--fontWeight-extralight)",
      "original": "200"
    },
    "light": {
      "value": "300",
      "variable": "var(--fontWeight-light)",
      "original": "300"
    },
    "normal": {
      "value": "400",
      "variable": "var(--fontWeight-normal)",
      "original": "400"
    },
    "medium": {
      "value": "500",
      "variable": "var(--fontWeight-medium)",
      "original": "500"
    },
    "semibold": {
      "value": "600",
      "variable": "var(--fontWeight-semibold)",
      "original": "600"
    },
    "bold": {
      "value": "700",
      "variable": "var(--fontWeight-bold)",
      "original": "700"
    },
    "extrabold": {
      "value": "800",
      "variable": "var(--fontWeight-extrabold)",
      "original": "800"
    },
    "black": {
      "value": "900",
      "variable": "var(--fontWeight-black)",
      "original": "900"
    }
  },
  "letterSpacing": {
    "tighter": {
      "value": "-0.05em",
      "variable": "var(--letterSpacing-tighter)",
      "original": "-0.05em"
    },
    "tight": {
      "value": "-0.025em",
      "variable": "var(--letterSpacing-tight)",
      "original": "-0.025em"
    },
    "normal": {
      "value": "0em",
      "variable": "var(--letterSpacing-normal)",
      "original": "0em"
    },
    "wide": {
      "value": "0.025em",
      "variable": "var(--letterSpacing-wide)",
      "original": "0.025em"
    },
    "wider": {
      "value": "0.05em",
      "variable": "var(--letterSpacing-wider)",
      "original": "0.05em"
    },
    "widest": {
      "value": "0.1em",
      "variable": "var(--letterSpacing-widest)",
      "original": "0.1em"
    }
  },
  "text": {
    "xs": {
      "fontSize": {
        "value": "var(--fontSize-xs)",
        "variable": "var(--text-xs-fontSize)",
        "original": "{fontSize.xs}"
      },
      "lineHeight": {
        "value": "var(--lead-4)",
        "variable": "var(--text-xs-lineHeight)",
        "original": "{lead.4}"
      }
    },
    "sm": {
      "fontSize": {
        "value": "var(--fontSize-sm)",
        "variable": "var(--text-sm-fontSize)",
        "original": "{fontSize.sm}"
      },
      "lineHeight": {
        "value": "var(--lead-5)",
        "variable": "var(--text-sm-lineHeight)",
        "original": "{lead.5}"
      }
    },
    "base": {
      "fontSize": {
        "value": "var(--fontSize-base)",
        "variable": "var(--text-base-fontSize)",
        "original": "{fontSize.base}"
      },
      "lineHeight": {
        "value": "var(--lead-6)",
        "variable": "var(--text-base-lineHeight)",
        "original": "{lead.6}"
      }
    },
    "lg": {
      "fontSize": {
        "value": "var(--fontSize-lg)",
        "variable": "var(--text-lg-fontSize)",
        "original": "{fontSize.lg}"
      },
      "lineHeight": {
        "value": "var(--lead-7)",
        "variable": "var(--text-lg-lineHeight)",
        "original": "{lead.7}"
      }
    },
    "xl": {
      "fontSize": {
        "value": "var(--fontSize-xl)",
        "variable": "var(--text-xl-fontSize)",
        "original": "{fontSize.xl}"
      },
      "lineHeight": {
        "value": "var(--lead-7)",
        "variable": "var(--text-xl-lineHeight)",
        "original": "{lead.7}"
      }
    },
    "2xl": {
      "fontSize": {
        "value": "var(--fontSize-2xl)",
        "variable": "var(--text-2xl-fontSize)",
        "original": "{fontSize.2xl}"
      },
      "lineHeight": {
        "value": "var(--lead-8)",
        "variable": "var(--text-2xl-lineHeight)",
        "original": "{lead.8}"
      }
    },
    "3xl": {
      "fontSize": {
        "value": "var(--fontSize-3xl)",
        "variable": "var(--text-3xl-fontSize)",
        "original": "{fontSize.3xl}"
      },
      "lineHeight": {
        "value": "var(--lead-9)",
        "variable": "var(--text-3xl-lineHeight)",
        "original": "{lead.9}"
      }
    },
    "4xl": {
      "fontSize": {
        "value": "var(--fontSize-4xl)",
        "variable": "var(--text-4xl-fontSize)",
        "original": "{fontSize.4xl}"
      },
      "lineHeight": {
        "value": "var(--lead-10)",
        "variable": "var(--text-4xl-lineHeight)",
        "original": "{lead.10}"
      }
    },
    "5xl": {
      "fontSize": {
        "value": "var(--fontSize-5xl)",
        "variable": "var(--text-5xl-fontSize)",
        "original": "{fontSize.5xl}"
      },
      "lineHeight": {
        "value": "var(--lead-none)",
        "variable": "var(--text-5xl-lineHeight)",
        "original": "{lead.none}"
      }
    },
    "6xl": {
      "fontSize": {
        "value": "var(--fontSize-6xl)",
        "variable": "var(--text-6xl-fontSize)",
        "original": "{fontSize.6xl}"
      },
      "lineHeight": {
        "value": "var(--lead-none)",
        "variable": "var(--text-6xl-lineHeight)",
        "original": "{lead.none}"
      }
    }
  }
};
const pinceau_nuxt_plugin_server_KEuz79zT4K = defineNuxtPlugin(async (nuxtApp) => {
  nuxtApp.vueApp.use(plugin, { colorSchemeMode: "class", theme, utils });
  useRuntimeConfig$1();
  nuxtApp.hook("app:rendered", async (app) => {
    app.ssrContext.event.pinceauContent = app.ssrContext.event.pinceauContent || {};
    const content = app.ssrContext.nuxt.vueApp.config.globalProperties.$pinceauSsr.get();
    app.ssrContext.event.pinceauContent.runtime = content;
  });
});
const schema = {
  "properties": {
    "id": "#tokensConfig",
    "properties": {
      "color": {
        "title": "Your website color palette.",
        "tags": [
          "@studioInput design-token",
          "@studioInputTokenType color",
          "@studioIcon ph:palette"
        ],
        "id": "#tokensConfig/color",
        "properties": {
          "primary": {
            "id": "#tokensConfig/color/primary",
            "properties": {
              "50": {
                "id": "#tokensConfig/color/primary/50",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/primary/50/value",
                    "default": "#fff2cc"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#fff2cc"
                }
              },
              "100": {
                "id": "#tokensConfig/color/primary/100",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/primary/100/value",
                    "default": "#ffe599"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#ffe599"
                }
              },
              "200": {
                "id": "#tokensConfig/color/primary/200",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/primary/200/value",
                    "default": "#ffd966"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#ffd966"
                }
              },
              "300": {
                "id": "#tokensConfig/color/primary/300",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/primary/300/value",
                    "default": "#f1c232"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#f1c232"
                }
              },
              "400": {
                "id": "#tokensConfig/color/primary/400",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/primary/400/value",
                    "default": "#f1c232"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#f1c232"
                }
              },
              "500": {
                "id": "#tokensConfig/color/primary/500",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/primary/500/value",
                    "default": "#f1c232"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#f1c232"
                }
              },
              "600": {
                "id": "#tokensConfig/color/primary/600",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/primary/600/value",
                    "default": "#f1c232"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#f1c232"
                }
              },
              "700": {
                "id": "#tokensConfig/color/primary/700",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/primary/700/value",
                    "default": "#f1c232"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#f1c232"
                }
              },
              "800": {
                "id": "#tokensConfig/color/primary/800",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/primary/800/value",
                    "default": "#f1c232"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#f1c232"
                }
              },
              "900": {
                "id": "#tokensConfig/color/primary/900",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/primary/900/value",
                    "default": "#f1c232"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#f1c232"
                }
              }
            },
            "type": "object",
            "default": {
              "50": {
                "value": "#fff2cc"
              },
              "100": {
                "value": "#ffe599"
              },
              "200": {
                "value": "#ffd966"
              },
              "300": {
                "value": "#f1c232"
              },
              "400": {
                "value": "#f1c232"
              },
              "500": {
                "value": "#f1c232"
              },
              "600": {
                "value": "#f1c232"
              },
              "700": {
                "value": "#f1c232"
              },
              "800": {
                "value": "#f1c232"
              },
              "900": {
                "value": "#f1c232"
              }
            }
          },
          "white": {
            "id": "#tokensConfig/color/white",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/color/white/value",
                "default": "#ffffff"
              }
            },
            "type": "object",
            "default": {
              "value": "#ffffff"
            }
          },
          "black": {
            "id": "#tokensConfig/color/black",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/color/black/value",
                "default": "#0c0c0d"
              }
            },
            "type": "object",
            "default": {
              "value": "#0c0c0d"
            }
          },
          "secondary": {
            "id": "#tokensConfig/color/secondary",
            "properties": {
              "50": {
                "id": "#tokensConfig/color/secondary/50",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/secondary/50/value",
                    "default": "{color.gray.50}"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{color.gray.50}"
                }
              },
              "100": {
                "id": "#tokensConfig/color/secondary/100",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/secondary/100/value",
                    "default": "{color.gray.100}"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{color.gray.100}"
                }
              },
              "200": {
                "id": "#tokensConfig/color/secondary/200",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/secondary/200/value",
                    "default": "{color.gray.200}"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{color.gray.200}"
                }
              },
              "300": {
                "id": "#tokensConfig/color/secondary/300",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/secondary/300/value",
                    "default": "{color.gray.300}"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{color.gray.300}"
                }
              },
              "400": {
                "id": "#tokensConfig/color/secondary/400",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/secondary/400/value",
                    "default": "{color.gray.400}"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{color.gray.400}"
                }
              },
              "500": {
                "id": "#tokensConfig/color/secondary/500",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/secondary/500/value",
                    "default": "{color.gray.500}"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{color.gray.500}"
                }
              },
              "600": {
                "id": "#tokensConfig/color/secondary/600",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/secondary/600/value",
                    "default": "{color.gray.600}"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{color.gray.600}"
                }
              },
              "700": {
                "id": "#tokensConfig/color/secondary/700",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/secondary/700/value",
                    "default": "{color.gray.700}"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{color.gray.700}"
                }
              },
              "800": {
                "id": "#tokensConfig/color/secondary/800",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/secondary/800/value",
                    "default": "{color.gray.800}"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{color.gray.800}"
                }
              },
              "900": {
                "id": "#tokensConfig/color/secondary/900",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/secondary/900/value",
                    "default": "{color.gray.900}"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{color.gray.900}"
                }
              }
            },
            "type": "object",
            "default": {
              "50": {
                "value": "{color.gray.50}"
              },
              "100": {
                "value": "{color.gray.100}"
              },
              "200": {
                "value": "{color.gray.200}"
              },
              "300": {
                "value": "{color.gray.300}"
              },
              "400": {
                "value": "{color.gray.400}"
              },
              "500": {
                "value": "{color.gray.500}"
              },
              "600": {
                "value": "{color.gray.600}"
              },
              "700": {
                "value": "{color.gray.700}"
              },
              "800": {
                "value": "{color.gray.800}"
              },
              "900": {
                "value": "{color.gray.900}"
              }
            }
          },
          "gray": {
            "id": "#tokensConfig/color/gray",
            "properties": {
              "50": {
                "id": "#tokensConfig/color/gray/50",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/gray/50/value",
                    "default": "#fafafa"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#fafafa"
                }
              },
              "100": {
                "id": "#tokensConfig/color/gray/100",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/gray/100/value",
                    "default": "#f4f4f5"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#f4f4f5"
                }
              },
              "200": {
                "id": "#tokensConfig/color/gray/200",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/gray/200/value",
                    "default": "#e4e4e7"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#e4e4e7"
                }
              },
              "300": {
                "id": "#tokensConfig/color/gray/300",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/gray/300/value",
                    "default": "#D4d4d8"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#D4d4d8"
                }
              },
              "400": {
                "id": "#tokensConfig/color/gray/400",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/gray/400/value",
                    "default": "#a1a1aa"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#a1a1aa"
                }
              },
              "500": {
                "id": "#tokensConfig/color/gray/500",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/gray/500/value",
                    "default": "#71717A"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#71717A"
                }
              },
              "600": {
                "id": "#tokensConfig/color/gray/600",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/gray/600/value",
                    "default": "#52525B"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#52525B"
                }
              },
              "700": {
                "id": "#tokensConfig/color/gray/700",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/gray/700/value",
                    "default": "#3f3f46"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#3f3f46"
                }
              },
              "800": {
                "id": "#tokensConfig/color/gray/800",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/gray/800/value",
                    "default": "#27272A"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#27272A"
                }
              },
              "900": {
                "id": "#tokensConfig/color/gray/900",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/gray/900/value",
                    "default": "#18181B"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#18181B"
                }
              }
            },
            "type": "object",
            "default": {
              "50": {
                "value": "#fafafa"
              },
              "100": {
                "value": "#f4f4f5"
              },
              "200": {
                "value": "#e4e4e7"
              },
              "300": {
                "value": "#D4d4d8"
              },
              "400": {
                "value": "#a1a1aa"
              },
              "500": {
                "value": "#71717A"
              },
              "600": {
                "value": "#52525B"
              },
              "700": {
                "value": "#3f3f46"
              },
              "800": {
                "value": "#27272A"
              },
              "900": {
                "value": "#18181B"
              }
            }
          },
          "green": {
            "id": "#tokensConfig/color/green",
            "properties": {
              "50": {
                "id": "#tokensConfig/color/green/50",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/green/50/value",
                    "default": "#d6ffee"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#d6ffee"
                }
              },
              "100": {
                "id": "#tokensConfig/color/green/100",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/green/100/value",
                    "default": "#acffdd"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#acffdd"
                }
              },
              "200": {
                "id": "#tokensConfig/color/green/200",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/green/200/value",
                    "default": "#83ffcc"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#83ffcc"
                }
              },
              "300": {
                "id": "#tokensConfig/color/green/300",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/green/300/value",
                    "default": "#30ffaa"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#30ffaa"
                }
              },
              "400": {
                "id": "#tokensConfig/color/green/400",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/green/400/value",
                    "default": "#00dc82"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#00dc82"
                }
              },
              "500": {
                "id": "#tokensConfig/color/green/500",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/green/500/value",
                    "default": "#00bd6f"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#00bd6f"
                }
              },
              "600": {
                "id": "#tokensConfig/color/green/600",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/green/600/value",
                    "default": "#009d5d"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#009d5d"
                }
              },
              "700": {
                "id": "#tokensConfig/color/green/700",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/green/700/value",
                    "default": "#007e4a"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#007e4a"
                }
              },
              "800": {
                "id": "#tokensConfig/color/green/800",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/green/800/value",
                    "default": "#005e38"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#005e38"
                }
              },
              "900": {
                "id": "#tokensConfig/color/green/900",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/green/900/value",
                    "default": "#003f25"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#003f25"
                }
              }
            },
            "type": "object",
            "default": {
              "50": {
                "value": "#d6ffee"
              },
              "100": {
                "value": "#acffdd"
              },
              "200": {
                "value": "#83ffcc"
              },
              "300": {
                "value": "#30ffaa"
              },
              "400": {
                "value": "#00dc82"
              },
              "500": {
                "value": "#00bd6f"
              },
              "600": {
                "value": "#009d5d"
              },
              "700": {
                "value": "#007e4a"
              },
              "800": {
                "value": "#005e38"
              },
              "900": {
                "value": "#003f25"
              }
            }
          },
          "yellow": {
            "id": "#tokensConfig/color/yellow",
            "properties": {
              "50": {
                "id": "#tokensConfig/color/yellow/50",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/yellow/50/value",
                    "default": "#fdf6db"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#fdf6db"
                }
              },
              "100": {
                "id": "#tokensConfig/color/yellow/100",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/yellow/100/value",
                    "default": "#fcedb7"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#fcedb7"
                }
              },
              "200": {
                "id": "#tokensConfig/color/yellow/200",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/yellow/200/value",
                    "default": "#fae393"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#fae393"
                }
              },
              "300": {
                "id": "#tokensConfig/color/yellow/300",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/yellow/300/value",
                    "default": "#f8da70"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#f8da70"
                }
              },
              "400": {
                "id": "#tokensConfig/color/yellow/400",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/yellow/400/value",
                    "default": "#f7d14c"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#f7d14c"
                }
              },
              "500": {
                "id": "#tokensConfig/color/yellow/500",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/yellow/500/value",
                    "default": "#f5c828"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#f5c828"
                }
              },
              "600": {
                "id": "#tokensConfig/color/yellow/600",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/yellow/600/value",
                    "default": "#daac0a"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#daac0a"
                }
              },
              "700": {
                "id": "#tokensConfig/color/yellow/700",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/yellow/700/value",
                    "default": "#a38108"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#a38108"
                }
              },
              "800": {
                "id": "#tokensConfig/color/yellow/800",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/yellow/800/value",
                    "default": "#6d5605"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#6d5605"
                }
              },
              "900": {
                "id": "#tokensConfig/color/yellow/900",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/yellow/900/value",
                    "default": "#362b03"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#362b03"
                }
              }
            },
            "type": "object",
            "default": {
              "50": {
                "value": "#fdf6db"
              },
              "100": {
                "value": "#fcedb7"
              },
              "200": {
                "value": "#fae393"
              },
              "300": {
                "value": "#f8da70"
              },
              "400": {
                "value": "#f7d14c"
              },
              "500": {
                "value": "#f5c828"
              },
              "600": {
                "value": "#daac0a"
              },
              "700": {
                "value": "#a38108"
              },
              "800": {
                "value": "#6d5605"
              },
              "900": {
                "value": "#362b03"
              }
            }
          },
          "orange": {
            "id": "#tokensConfig/color/orange",
            "properties": {
              "50": {
                "id": "#tokensConfig/color/orange/50",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/orange/50/value",
                    "default": "#ffe9d9"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#ffe9d9"
                }
              },
              "100": {
                "id": "#tokensConfig/color/orange/100",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/orange/100/value",
                    "default": "#ffd3b3"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#ffd3b3"
                }
              },
              "200": {
                "id": "#tokensConfig/color/orange/200",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/orange/200/value",
                    "default": "#ffbd8d"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#ffbd8d"
                }
              },
              "300": {
                "id": "#tokensConfig/color/orange/300",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/orange/300/value",
                    "default": "#ffa666"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#ffa666"
                }
              },
              "400": {
                "id": "#tokensConfig/color/orange/400",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/orange/400/value",
                    "default": "#ff9040"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#ff9040"
                }
              },
              "500": {
                "id": "#tokensConfig/color/orange/500",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/orange/500/value",
                    "default": "#ff7a1a"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#ff7a1a"
                }
              },
              "600": {
                "id": "#tokensConfig/color/orange/600",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/orange/600/value",
                    "default": "#e15e00"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#e15e00"
                }
              },
              "700": {
                "id": "#tokensConfig/color/orange/700",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/orange/700/value",
                    "default": "#a94700"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#a94700"
                }
              },
              "800": {
                "id": "#tokensConfig/color/orange/800",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/orange/800/value",
                    "default": "#702f00"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#702f00"
                }
              },
              "900": {
                "id": "#tokensConfig/color/orange/900",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/orange/900/value",
                    "default": "#381800"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#381800"
                }
              }
            },
            "type": "object",
            "default": {
              "50": {
                "value": "#ffe9d9"
              },
              "100": {
                "value": "#ffd3b3"
              },
              "200": {
                "value": "#ffbd8d"
              },
              "300": {
                "value": "#ffa666"
              },
              "400": {
                "value": "#ff9040"
              },
              "500": {
                "value": "#ff7a1a"
              },
              "600": {
                "value": "#e15e00"
              },
              "700": {
                "value": "#a94700"
              },
              "800": {
                "value": "#702f00"
              },
              "900": {
                "value": "#381800"
              }
            }
          },
          "red": {
            "id": "#tokensConfig/color/red",
            "properties": {
              "50": {
                "id": "#tokensConfig/color/red/50",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/red/50/value",
                    "default": "#ffdbd9"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#ffdbd9"
                }
              },
              "100": {
                "id": "#tokensConfig/color/red/100",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/red/100/value",
                    "default": "#ffb7b3"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#ffb7b3"
                }
              },
              "200": {
                "id": "#tokensConfig/color/red/200",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/red/200/value",
                    "default": "#ff948d"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#ff948d"
                }
              },
              "300": {
                "id": "#tokensConfig/color/red/300",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/red/300/value",
                    "default": "#ff7066"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#ff7066"
                }
              },
              "400": {
                "id": "#tokensConfig/color/red/400",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/red/400/value",
                    "default": "#ff4c40"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#ff4c40"
                }
              },
              "500": {
                "id": "#tokensConfig/color/red/500",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/red/500/value",
                    "default": "#ff281a"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#ff281a"
                }
              },
              "600": {
                "id": "#tokensConfig/color/red/600",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/red/600/value",
                    "default": "#e10e00"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#e10e00"
                }
              },
              "700": {
                "id": "#tokensConfig/color/red/700",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/red/700/value",
                    "default": "#a90a00"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#a90a00"
                }
              },
              "800": {
                "id": "#tokensConfig/color/red/800",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/red/800/value",
                    "default": "#700700"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#700700"
                }
              },
              "900": {
                "id": "#tokensConfig/color/red/900",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/red/900/value",
                    "default": "#380300"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#380300"
                }
              }
            },
            "type": "object",
            "default": {
              "50": {
                "value": "#ffdbd9"
              },
              "100": {
                "value": "#ffb7b3"
              },
              "200": {
                "value": "#ff948d"
              },
              "300": {
                "value": "#ff7066"
              },
              "400": {
                "value": "#ff4c40"
              },
              "500": {
                "value": "#ff281a"
              },
              "600": {
                "value": "#e10e00"
              },
              "700": {
                "value": "#a90a00"
              },
              "800": {
                "value": "#700700"
              },
              "900": {
                "value": "#380300"
              }
            }
          },
          "pear": {
            "id": "#tokensConfig/color/pear",
            "properties": {
              "50": {
                "id": "#tokensConfig/color/pear/50",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/pear/50/value",
                    "default": "#f7f8dc"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#f7f8dc"
                }
              },
              "100": {
                "id": "#tokensConfig/color/pear/100",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/pear/100/value",
                    "default": "#eff0ba"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#eff0ba"
                }
              },
              "200": {
                "id": "#tokensConfig/color/pear/200",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/pear/200/value",
                    "default": "#e8e997"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#e8e997"
                }
              },
              "300": {
                "id": "#tokensConfig/color/pear/300",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/pear/300/value",
                    "default": "#e0e274"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#e0e274"
                }
              },
              "400": {
                "id": "#tokensConfig/color/pear/400",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/pear/400/value",
                    "default": "#d8da52"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#d8da52"
                }
              },
              "500": {
                "id": "#tokensConfig/color/pear/500",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/pear/500/value",
                    "default": "#d0d32f"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#d0d32f"
                }
              },
              "600": {
                "id": "#tokensConfig/color/pear/600",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/pear/600/value",
                    "default": "#a8aa24"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#a8aa24"
                }
              },
              "700": {
                "id": "#tokensConfig/color/pear/700",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/pear/700/value",
                    "default": "#7e801b"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#7e801b"
                }
              },
              "800": {
                "id": "#tokensConfig/color/pear/800",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/pear/800/value",
                    "default": "#545512"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#545512"
                }
              },
              "900": {
                "id": "#tokensConfig/color/pear/900",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/pear/900/value",
                    "default": "#2a2b09"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#2a2b09"
                }
              }
            },
            "type": "object",
            "default": {
              "50": {
                "value": "#f7f8dc"
              },
              "100": {
                "value": "#eff0ba"
              },
              "200": {
                "value": "#e8e997"
              },
              "300": {
                "value": "#e0e274"
              },
              "400": {
                "value": "#d8da52"
              },
              "500": {
                "value": "#d0d32f"
              },
              "600": {
                "value": "#a8aa24"
              },
              "700": {
                "value": "#7e801b"
              },
              "800": {
                "value": "#545512"
              },
              "900": {
                "value": "#2a2b09"
              }
            }
          },
          "teal": {
            "id": "#tokensConfig/color/teal",
            "properties": {
              "50": {
                "id": "#tokensConfig/color/teal/50",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/teal/50/value",
                    "default": "#d7faf8"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#d7faf8"
                }
              },
              "100": {
                "id": "#tokensConfig/color/teal/100",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/teal/100/value",
                    "default": "#aff4f0"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#aff4f0"
                }
              },
              "200": {
                "id": "#tokensConfig/color/teal/200",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/teal/200/value",
                    "default": "#87efe9"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#87efe9"
                }
              },
              "300": {
                "id": "#tokensConfig/color/teal/300",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/teal/300/value",
                    "default": "#5fe9e1"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#5fe9e1"
                }
              },
              "400": {
                "id": "#tokensConfig/color/teal/400",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/teal/400/value",
                    "default": "#36e4da"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#36e4da"
                }
              },
              "500": {
                "id": "#tokensConfig/color/teal/500",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/teal/500/value",
                    "default": "#1cd1c6"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#1cd1c6"
                }
              },
              "600": {
                "id": "#tokensConfig/color/teal/600",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/teal/600/value",
                    "default": "#16a79e"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#16a79e"
                }
              },
              "700": {
                "id": "#tokensConfig/color/teal/700",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/teal/700/value",
                    "default": "#117d77"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#117d77"
                }
              },
              "800": {
                "id": "#tokensConfig/color/teal/800",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/teal/800/value",
                    "default": "#0b544f"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#0b544f"
                }
              },
              "900": {
                "id": "#tokensConfig/color/teal/900",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/teal/900/value",
                    "default": "#062a28"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#062a28"
                }
              }
            },
            "type": "object",
            "default": {
              "50": {
                "value": "#d7faf8"
              },
              "100": {
                "value": "#aff4f0"
              },
              "200": {
                "value": "#87efe9"
              },
              "300": {
                "value": "#5fe9e1"
              },
              "400": {
                "value": "#36e4da"
              },
              "500": {
                "value": "#1cd1c6"
              },
              "600": {
                "value": "#16a79e"
              },
              "700": {
                "value": "#117d77"
              },
              "800": {
                "value": "#0b544f"
              },
              "900": {
                "value": "#062a28"
              }
            }
          },
          "lightblue": {
            "id": "#tokensConfig/color/lightblue",
            "properties": {
              "50": {
                "id": "#tokensConfig/color/lightblue/50",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/lightblue/50/value",
                    "default": "#d9f8ff"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#d9f8ff"
                }
              },
              "100": {
                "id": "#tokensConfig/color/lightblue/100",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/lightblue/100/value",
                    "default": "#b3f1ff"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#b3f1ff"
                }
              },
              "200": {
                "id": "#tokensConfig/color/lightblue/200",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/lightblue/200/value",
                    "default": "#8deaff"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#8deaff"
                }
              },
              "300": {
                "id": "#tokensConfig/color/lightblue/300",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/lightblue/300/value",
                    "default": "#66e4ff"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#66e4ff"
                }
              },
              "400": {
                "id": "#tokensConfig/color/lightblue/400",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/lightblue/400/value",
                    "default": "#40ddff"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#40ddff"
                }
              },
              "500": {
                "id": "#tokensConfig/color/lightblue/500",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/lightblue/500/value",
                    "default": "#1ad6ff"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#1ad6ff"
                }
              },
              "600": {
                "id": "#tokensConfig/color/lightblue/600",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/lightblue/600/value",
                    "default": "#00b9e1"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#00b9e1"
                }
              },
              "700": {
                "id": "#tokensConfig/color/lightblue/700",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/lightblue/700/value",
                    "default": "#008aa9"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#008aa9"
                }
              },
              "800": {
                "id": "#tokensConfig/color/lightblue/800",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/lightblue/800/value",
                    "default": "#005c70"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#005c70"
                }
              },
              "900": {
                "id": "#tokensConfig/color/lightblue/900",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/lightblue/900/value",
                    "default": "#002e38"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#002e38"
                }
              }
            },
            "type": "object",
            "default": {
              "50": {
                "value": "#d9f8ff"
              },
              "100": {
                "value": "#b3f1ff"
              },
              "200": {
                "value": "#8deaff"
              },
              "300": {
                "value": "#66e4ff"
              },
              "400": {
                "value": "#40ddff"
              },
              "500": {
                "value": "#1ad6ff"
              },
              "600": {
                "value": "#00b9e1"
              },
              "700": {
                "value": "#008aa9"
              },
              "800": {
                "value": "#005c70"
              },
              "900": {
                "value": "#002e38"
              }
            }
          },
          "blue": {
            "id": "#tokensConfig/color/blue",
            "properties": {
              "50": {
                "id": "#tokensConfig/color/blue/50",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/blue/50/value",
                    "default": "#d9f1ff"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#d9f1ff"
                }
              },
              "100": {
                "id": "#tokensConfig/color/blue/100",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/blue/100/value",
                    "default": "#b3e4ff"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#b3e4ff"
                }
              },
              "200": {
                "id": "#tokensConfig/color/blue/200",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/blue/200/value",
                    "default": "#8dd6ff"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#8dd6ff"
                }
              },
              "300": {
                "id": "#tokensConfig/color/blue/300",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/blue/300/value",
                    "default": "#66c8ff"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#66c8ff"
                }
              },
              "400": {
                "id": "#tokensConfig/color/blue/400",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/blue/400/value",
                    "default": "#40bbff"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#40bbff"
                }
              },
              "500": {
                "id": "#tokensConfig/color/blue/500",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/blue/500/value",
                    "default": "#1aadff"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#1aadff"
                }
              },
              "600": {
                "id": "#tokensConfig/color/blue/600",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/blue/600/value",
                    "default": "#0090e1"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#0090e1"
                }
              },
              "700": {
                "id": "#tokensConfig/color/blue/700",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/blue/700/value",
                    "default": "#006ca9"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#006ca9"
                }
              },
              "800": {
                "id": "#tokensConfig/color/blue/800",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/blue/800/value",
                    "default": "#004870"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#004870"
                }
              },
              "900": {
                "id": "#tokensConfig/color/blue/900",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/blue/900/value",
                    "default": "#002438"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#002438"
                }
              }
            },
            "type": "object",
            "default": {
              "50": {
                "value": "#d9f1ff"
              },
              "100": {
                "value": "#b3e4ff"
              },
              "200": {
                "value": "#8dd6ff"
              },
              "300": {
                "value": "#66c8ff"
              },
              "400": {
                "value": "#40bbff"
              },
              "500": {
                "value": "#1aadff"
              },
              "600": {
                "value": "#0090e1"
              },
              "700": {
                "value": "#006ca9"
              },
              "800": {
                "value": "#004870"
              },
              "900": {
                "value": "#002438"
              }
            }
          },
          "indigoblue": {
            "id": "#tokensConfig/color/indigoblue",
            "properties": {
              "50": {
                "id": "#tokensConfig/color/indigoblue/50",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/indigoblue/50/value",
                    "default": "#d9e5ff"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#d9e5ff"
                }
              },
              "100": {
                "id": "#tokensConfig/color/indigoblue/100",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/indigoblue/100/value",
                    "default": "#b3cbff"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#b3cbff"
                }
              },
              "200": {
                "id": "#tokensConfig/color/indigoblue/200",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/indigoblue/200/value",
                    "default": "#8db0ff"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#8db0ff"
                }
              },
              "300": {
                "id": "#tokensConfig/color/indigoblue/300",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/indigoblue/300/value",
                    "default": "#6696ff"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#6696ff"
                }
              },
              "400": {
                "id": "#tokensConfig/color/indigoblue/400",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/indigoblue/400/value",
                    "default": "#407cff"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#407cff"
                }
              },
              "500": {
                "id": "#tokensConfig/color/indigoblue/500",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/indigoblue/500/value",
                    "default": "#1a62ff"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#1a62ff"
                }
              },
              "600": {
                "id": "#tokensConfig/color/indigoblue/600",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/indigoblue/600/value",
                    "default": "#0047e1"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#0047e1"
                }
              },
              "700": {
                "id": "#tokensConfig/color/indigoblue/700",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/indigoblue/700/value",
                    "default": "#0035a9"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#0035a9"
                }
              },
              "800": {
                "id": "#tokensConfig/color/indigoblue/800",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/indigoblue/800/value",
                    "default": "#002370"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#002370"
                }
              },
              "900": {
                "id": "#tokensConfig/color/indigoblue/900",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/indigoblue/900/value",
                    "default": "#001238"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#001238"
                }
              }
            },
            "type": "object",
            "default": {
              "50": {
                "value": "#d9e5ff"
              },
              "100": {
                "value": "#b3cbff"
              },
              "200": {
                "value": "#8db0ff"
              },
              "300": {
                "value": "#6696ff"
              },
              "400": {
                "value": "#407cff"
              },
              "500": {
                "value": "#1a62ff"
              },
              "600": {
                "value": "#0047e1"
              },
              "700": {
                "value": "#0035a9"
              },
              "800": {
                "value": "#002370"
              },
              "900": {
                "value": "#001238"
              }
            }
          },
          "royalblue": {
            "id": "#tokensConfig/color/royalblue",
            "properties": {
              "50": {
                "id": "#tokensConfig/color/royalblue/50",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/royalblue/50/value",
                    "default": "#dfdbfb"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#dfdbfb"
                }
              },
              "100": {
                "id": "#tokensConfig/color/royalblue/100",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/royalblue/100/value",
                    "default": "#c0b7f7"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#c0b7f7"
                }
              },
              "200": {
                "id": "#tokensConfig/color/royalblue/200",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/royalblue/200/value",
                    "default": "#a093f3"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#a093f3"
                }
              },
              "300": {
                "id": "#tokensConfig/color/royalblue/300",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/royalblue/300/value",
                    "default": "#806ff0"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#806ff0"
                }
              },
              "400": {
                "id": "#tokensConfig/color/royalblue/400",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/royalblue/400/value",
                    "default": "#614bec"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#614bec"
                }
              },
              "500": {
                "id": "#tokensConfig/color/royalblue/500",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/royalblue/500/value",
                    "default": "#4127e8"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#4127e8"
                }
              },
              "600": {
                "id": "#tokensConfig/color/royalblue/600",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/royalblue/600/value",
                    "default": "#2c15c4"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#2c15c4"
                }
              },
              "700": {
                "id": "#tokensConfig/color/royalblue/700",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/royalblue/700/value",
                    "default": "#211093"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#211093"
                }
              },
              "800": {
                "id": "#tokensConfig/color/royalblue/800",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/royalblue/800/value",
                    "default": "#160a62"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#160a62"
                }
              },
              "900": {
                "id": "#tokensConfig/color/royalblue/900",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/royalblue/900/value",
                    "default": "#0b0531"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#0b0531"
                }
              }
            },
            "type": "object",
            "default": {
              "50": {
                "value": "#dfdbfb"
              },
              "100": {
                "value": "#c0b7f7"
              },
              "200": {
                "value": "#a093f3"
              },
              "300": {
                "value": "#806ff0"
              },
              "400": {
                "value": "#614bec"
              },
              "500": {
                "value": "#4127e8"
              },
              "600": {
                "value": "#2c15c4"
              },
              "700": {
                "value": "#211093"
              },
              "800": {
                "value": "#160a62"
              },
              "900": {
                "value": "#0b0531"
              }
            }
          },
          "purple": {
            "id": "#tokensConfig/color/purple",
            "properties": {
              "50": {
                "id": "#tokensConfig/color/purple/50",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/purple/50/value",
                    "default": "#ead9ff"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#ead9ff"
                }
              },
              "100": {
                "id": "#tokensConfig/color/purple/100",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/purple/100/value",
                    "default": "#d5b3ff"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#d5b3ff"
                }
              },
              "200": {
                "id": "#tokensConfig/color/purple/200",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/purple/200/value",
                    "default": "#c08dff"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#c08dff"
                }
              },
              "300": {
                "id": "#tokensConfig/color/purple/300",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/purple/300/value",
                    "default": "#ab66ff"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#ab66ff"
                }
              },
              "400": {
                "id": "#tokensConfig/color/purple/400",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/purple/400/value",
                    "default": "#9640ff"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#9640ff"
                }
              },
              "500": {
                "id": "#tokensConfig/color/purple/500",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/purple/500/value",
                    "default": "#811aff"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#811aff"
                }
              },
              "600": {
                "id": "#tokensConfig/color/purple/600",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/purple/600/value",
                    "default": "#6500e1"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#6500e1"
                }
              },
              "700": {
                "id": "#tokensConfig/color/purple/700",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/purple/700/value",
                    "default": "#4c00a9"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#4c00a9"
                }
              },
              "800": {
                "id": "#tokensConfig/color/purple/800",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/purple/800/value",
                    "default": "#330070"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#330070"
                }
              },
              "900": {
                "id": "#tokensConfig/color/purple/900",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/purple/900/value",
                    "default": "#190038"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#190038"
                }
              }
            },
            "type": "object",
            "default": {
              "50": {
                "value": "#ead9ff"
              },
              "100": {
                "value": "#d5b3ff"
              },
              "200": {
                "value": "#c08dff"
              },
              "300": {
                "value": "#ab66ff"
              },
              "400": {
                "value": "#9640ff"
              },
              "500": {
                "value": "#811aff"
              },
              "600": {
                "value": "#6500e1"
              },
              "700": {
                "value": "#4c00a9"
              },
              "800": {
                "value": "#330070"
              },
              "900": {
                "value": "#190038"
              }
            }
          },
          "pink": {
            "id": "#tokensConfig/color/pink",
            "properties": {
              "50": {
                "id": "#tokensConfig/color/pink/50",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/pink/50/value",
                    "default": "#ffd9f2"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#ffd9f2"
                }
              },
              "100": {
                "id": "#tokensConfig/color/pink/100",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/pink/100/value",
                    "default": "#ffb3e5"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#ffb3e5"
                }
              },
              "200": {
                "id": "#tokensConfig/color/pink/200",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/pink/200/value",
                    "default": "#ff8dd8"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#ff8dd8"
                }
              },
              "300": {
                "id": "#tokensConfig/color/pink/300",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/pink/300/value",
                    "default": "#ff66cc"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#ff66cc"
                }
              },
              "400": {
                "id": "#tokensConfig/color/pink/400",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/pink/400/value",
                    "default": "#ff40bf"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#ff40bf"
                }
              },
              "500": {
                "id": "#tokensConfig/color/pink/500",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/pink/500/value",
                    "default": "#ff1ab2"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#ff1ab2"
                }
              },
              "600": {
                "id": "#tokensConfig/color/pink/600",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/pink/600/value",
                    "default": "#e10095"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#e10095"
                }
              },
              "700": {
                "id": "#tokensConfig/color/pink/700",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/pink/700/value",
                    "default": "#a90070"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#a90070"
                }
              },
              "800": {
                "id": "#tokensConfig/color/pink/800",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/pink/800/value",
                    "default": "#70004b"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#70004b"
                }
              },
              "900": {
                "id": "#tokensConfig/color/pink/900",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/pink/900/value",
                    "default": "#380025"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#380025"
                }
              }
            },
            "type": "object",
            "default": {
              "50": {
                "value": "#ffd9f2"
              },
              "100": {
                "value": "#ffb3e5"
              },
              "200": {
                "value": "#ff8dd8"
              },
              "300": {
                "value": "#ff66cc"
              },
              "400": {
                "value": "#ff40bf"
              },
              "500": {
                "value": "#ff1ab2"
              },
              "600": {
                "value": "#e10095"
              },
              "700": {
                "value": "#a90070"
              },
              "800": {
                "value": "#70004b"
              },
              "900": {
                "value": "#380025"
              }
            }
          },
          "ruby": {
            "id": "#tokensConfig/color/ruby",
            "properties": {
              "50": {
                "id": "#tokensConfig/color/ruby/50",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/ruby/50/value",
                    "default": "#ffd9e4"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#ffd9e4"
                }
              },
              "100": {
                "id": "#tokensConfig/color/ruby/100",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/ruby/100/value",
                    "default": "#ffb3c9"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#ffb3c9"
                }
              },
              "200": {
                "id": "#tokensConfig/color/ruby/200",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/ruby/200/value",
                    "default": "#ff8dae"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#ff8dae"
                }
              },
              "300": {
                "id": "#tokensConfig/color/ruby/300",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/ruby/300/value",
                    "default": "#ff6694"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#ff6694"
                }
              },
              "400": {
                "id": "#tokensConfig/color/ruby/400",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/ruby/400/value",
                    "default": "#ff4079"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#ff4079"
                }
              },
              "500": {
                "id": "#tokensConfig/color/ruby/500",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/ruby/500/value",
                    "default": "#ff1a5e"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#ff1a5e"
                }
              },
              "600": {
                "id": "#tokensConfig/color/ruby/600",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/ruby/600/value",
                    "default": "#e10043"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#e10043"
                }
              },
              "700": {
                "id": "#tokensConfig/color/ruby/700",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/ruby/700/value",
                    "default": "#a90032"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#a90032"
                }
              },
              "800": {
                "id": "#tokensConfig/color/ruby/800",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/ruby/800/value",
                    "default": "#700021"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#700021"
                }
              },
              "900": {
                "id": "#tokensConfig/color/ruby/900",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/ruby/900/value",
                    "default": "#380011"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#380011"
                }
              }
            },
            "type": "object",
            "default": {
              "50": {
                "value": "#ffd9e4"
              },
              "100": {
                "value": "#ffb3c9"
              },
              "200": {
                "value": "#ff8dae"
              },
              "300": {
                "value": "#ff6694"
              },
              "400": {
                "value": "#ff4079"
              },
              "500": {
                "value": "#ff1a5e"
              },
              "600": {
                "value": "#e10043"
              },
              "700": {
                "value": "#a90032"
              },
              "800": {
                "value": "#700021"
              },
              "900": {
                "value": "#380011"
              }
            }
          }
        },
        "type": "object",
        "default": {
          "primary": {
            "50": {
              "value": "#fff2cc"
            },
            "100": {
              "value": "#ffe599"
            },
            "200": {
              "value": "#ffd966"
            },
            "300": {
              "value": "#f1c232"
            },
            "400": {
              "value": "#f1c232"
            },
            "500": {
              "value": "#f1c232"
            },
            "600": {
              "value": "#f1c232"
            },
            "700": {
              "value": "#f1c232"
            },
            "800": {
              "value": "#f1c232"
            },
            "900": {
              "value": "#f1c232"
            }
          },
          "white": {
            "value": "#ffffff"
          },
          "black": {
            "value": "#0c0c0d"
          },
          "secondary": {
            "50": {
              "value": "{color.gray.50}"
            },
            "100": {
              "value": "{color.gray.100}"
            },
            "200": {
              "value": "{color.gray.200}"
            },
            "300": {
              "value": "{color.gray.300}"
            },
            "400": {
              "value": "{color.gray.400}"
            },
            "500": {
              "value": "{color.gray.500}"
            },
            "600": {
              "value": "{color.gray.600}"
            },
            "700": {
              "value": "{color.gray.700}"
            },
            "800": {
              "value": "{color.gray.800}"
            },
            "900": {
              "value": "{color.gray.900}"
            }
          },
          "gray": {
            "50": {
              "value": "#fafafa"
            },
            "100": {
              "value": "#f4f4f5"
            },
            "200": {
              "value": "#e4e4e7"
            },
            "300": {
              "value": "#D4d4d8"
            },
            "400": {
              "value": "#a1a1aa"
            },
            "500": {
              "value": "#71717A"
            },
            "600": {
              "value": "#52525B"
            },
            "700": {
              "value": "#3f3f46"
            },
            "800": {
              "value": "#27272A"
            },
            "900": {
              "value": "#18181B"
            }
          },
          "green": {
            "50": {
              "value": "#d6ffee"
            },
            "100": {
              "value": "#acffdd"
            },
            "200": {
              "value": "#83ffcc"
            },
            "300": {
              "value": "#30ffaa"
            },
            "400": {
              "value": "#00dc82"
            },
            "500": {
              "value": "#00bd6f"
            },
            "600": {
              "value": "#009d5d"
            },
            "700": {
              "value": "#007e4a"
            },
            "800": {
              "value": "#005e38"
            },
            "900": {
              "value": "#003f25"
            }
          },
          "yellow": {
            "50": {
              "value": "#fdf6db"
            },
            "100": {
              "value": "#fcedb7"
            },
            "200": {
              "value": "#fae393"
            },
            "300": {
              "value": "#f8da70"
            },
            "400": {
              "value": "#f7d14c"
            },
            "500": {
              "value": "#f5c828"
            },
            "600": {
              "value": "#daac0a"
            },
            "700": {
              "value": "#a38108"
            },
            "800": {
              "value": "#6d5605"
            },
            "900": {
              "value": "#362b03"
            }
          },
          "orange": {
            "50": {
              "value": "#ffe9d9"
            },
            "100": {
              "value": "#ffd3b3"
            },
            "200": {
              "value": "#ffbd8d"
            },
            "300": {
              "value": "#ffa666"
            },
            "400": {
              "value": "#ff9040"
            },
            "500": {
              "value": "#ff7a1a"
            },
            "600": {
              "value": "#e15e00"
            },
            "700": {
              "value": "#a94700"
            },
            "800": {
              "value": "#702f00"
            },
            "900": {
              "value": "#381800"
            }
          },
          "red": {
            "50": {
              "value": "#ffdbd9"
            },
            "100": {
              "value": "#ffb7b3"
            },
            "200": {
              "value": "#ff948d"
            },
            "300": {
              "value": "#ff7066"
            },
            "400": {
              "value": "#ff4c40"
            },
            "500": {
              "value": "#ff281a"
            },
            "600": {
              "value": "#e10e00"
            },
            "700": {
              "value": "#a90a00"
            },
            "800": {
              "value": "#700700"
            },
            "900": {
              "value": "#380300"
            }
          },
          "pear": {
            "50": {
              "value": "#f7f8dc"
            },
            "100": {
              "value": "#eff0ba"
            },
            "200": {
              "value": "#e8e997"
            },
            "300": {
              "value": "#e0e274"
            },
            "400": {
              "value": "#d8da52"
            },
            "500": {
              "value": "#d0d32f"
            },
            "600": {
              "value": "#a8aa24"
            },
            "700": {
              "value": "#7e801b"
            },
            "800": {
              "value": "#545512"
            },
            "900": {
              "value": "#2a2b09"
            }
          },
          "teal": {
            "50": {
              "value": "#d7faf8"
            },
            "100": {
              "value": "#aff4f0"
            },
            "200": {
              "value": "#87efe9"
            },
            "300": {
              "value": "#5fe9e1"
            },
            "400": {
              "value": "#36e4da"
            },
            "500": {
              "value": "#1cd1c6"
            },
            "600": {
              "value": "#16a79e"
            },
            "700": {
              "value": "#117d77"
            },
            "800": {
              "value": "#0b544f"
            },
            "900": {
              "value": "#062a28"
            }
          },
          "lightblue": {
            "50": {
              "value": "#d9f8ff"
            },
            "100": {
              "value": "#b3f1ff"
            },
            "200": {
              "value": "#8deaff"
            },
            "300": {
              "value": "#66e4ff"
            },
            "400": {
              "value": "#40ddff"
            },
            "500": {
              "value": "#1ad6ff"
            },
            "600": {
              "value": "#00b9e1"
            },
            "700": {
              "value": "#008aa9"
            },
            "800": {
              "value": "#005c70"
            },
            "900": {
              "value": "#002e38"
            }
          },
          "blue": {
            "50": {
              "value": "#d9f1ff"
            },
            "100": {
              "value": "#b3e4ff"
            },
            "200": {
              "value": "#8dd6ff"
            },
            "300": {
              "value": "#66c8ff"
            },
            "400": {
              "value": "#40bbff"
            },
            "500": {
              "value": "#1aadff"
            },
            "600": {
              "value": "#0090e1"
            },
            "700": {
              "value": "#006ca9"
            },
            "800": {
              "value": "#004870"
            },
            "900": {
              "value": "#002438"
            }
          },
          "indigoblue": {
            "50": {
              "value": "#d9e5ff"
            },
            "100": {
              "value": "#b3cbff"
            },
            "200": {
              "value": "#8db0ff"
            },
            "300": {
              "value": "#6696ff"
            },
            "400": {
              "value": "#407cff"
            },
            "500": {
              "value": "#1a62ff"
            },
            "600": {
              "value": "#0047e1"
            },
            "700": {
              "value": "#0035a9"
            },
            "800": {
              "value": "#002370"
            },
            "900": {
              "value": "#001238"
            }
          },
          "royalblue": {
            "50": {
              "value": "#dfdbfb"
            },
            "100": {
              "value": "#c0b7f7"
            },
            "200": {
              "value": "#a093f3"
            },
            "300": {
              "value": "#806ff0"
            },
            "400": {
              "value": "#614bec"
            },
            "500": {
              "value": "#4127e8"
            },
            "600": {
              "value": "#2c15c4"
            },
            "700": {
              "value": "#211093"
            },
            "800": {
              "value": "#160a62"
            },
            "900": {
              "value": "#0b0531"
            }
          },
          "purple": {
            "50": {
              "value": "#ead9ff"
            },
            "100": {
              "value": "#d5b3ff"
            },
            "200": {
              "value": "#c08dff"
            },
            "300": {
              "value": "#ab66ff"
            },
            "400": {
              "value": "#9640ff"
            },
            "500": {
              "value": "#811aff"
            },
            "600": {
              "value": "#6500e1"
            },
            "700": {
              "value": "#4c00a9"
            },
            "800": {
              "value": "#330070"
            },
            "900": {
              "value": "#190038"
            }
          },
          "pink": {
            "50": {
              "value": "#ffd9f2"
            },
            "100": {
              "value": "#ffb3e5"
            },
            "200": {
              "value": "#ff8dd8"
            },
            "300": {
              "value": "#ff66cc"
            },
            "400": {
              "value": "#ff40bf"
            },
            "500": {
              "value": "#ff1ab2"
            },
            "600": {
              "value": "#e10095"
            },
            "700": {
              "value": "#a90070"
            },
            "800": {
              "value": "#70004b"
            },
            "900": {
              "value": "#380025"
            }
          },
          "ruby": {
            "50": {
              "value": "#ffd9e4"
            },
            "100": {
              "value": "#ffb3c9"
            },
            "200": {
              "value": "#ff8dae"
            },
            "300": {
              "value": "#ff6694"
            },
            "400": {
              "value": "#ff4079"
            },
            "500": {
              "value": "#ff1a5e"
            },
            "600": {
              "value": "#e10043"
            },
            "700": {
              "value": "#a90032"
            },
            "800": {
              "value": "#700021"
            },
            "900": {
              "value": "#380011"
            }
          }
        }
      },
      "elements": {
        "title": "All the configurable tokens for your Elements.",
        "tags": [
          "@studioIcon uiw:component"
        ],
        "id": "#tokensConfig/elements",
        "properties": {
          "text": {
            "id": "#tokensConfig/elements/text",
            "properties": {
              "primary": {
                "id": "#tokensConfig/elements/text/primary",
                "properties": {
                  "color": {
                    "id": "#tokensConfig/elements/text/primary/color",
                    "properties": {
                      "static": {
                        "id": "#tokensConfig/elements/text/primary/color/static",
                        "properties": {
                          "value": {
                            "id": "#tokensConfig/elements/text/primary/color/static/value",
                            "properties": {
                              "initial": {
                                "type": "string",
                                "id": "#tokensConfig/elements/text/primary/color/static/value/initial",
                                "default": "{color.gray.900}"
                              },
                              "dark": {
                                "type": "string",
                                "id": "#tokensConfig/elements/text/primary/color/static/value/dark",
                                "default": "{color.gray.50}"
                              }
                            },
                            "type": "object",
                            "default": {
                              "initial": "{color.gray.900}",
                              "dark": "{color.gray.50}"
                            }
                          }
                        },
                        "type": "object",
                        "default": {
                          "value": {
                            "initial": "{color.gray.900}",
                            "dark": "{color.gray.50}"
                          }
                        }
                      },
                      "hover": {
                        "id": "#tokensConfig/elements/text/primary/color/hover",
                        "type": "any",
                        "default": {}
                      }
                    },
                    "type": "object",
                    "default": {
                      "static": {
                        "value": {
                          "initial": "{color.gray.900}",
                          "dark": "{color.gray.50}"
                        }
                      },
                      "hover": {}
                    }
                  }
                },
                "type": "object",
                "default": {
                  "color": {
                    "static": {
                      "value": {
                        "initial": "{color.gray.900}",
                        "dark": "{color.gray.50}"
                      }
                    },
                    "hover": {}
                  }
                }
              },
              "secondary": {
                "id": "#tokensConfig/elements/text/secondary",
                "properties": {
                  "color": {
                    "id": "#tokensConfig/elements/text/secondary/color",
                    "properties": {
                      "static": {
                        "id": "#tokensConfig/elements/text/secondary/color/static",
                        "properties": {
                          "value": {
                            "id": "#tokensConfig/elements/text/secondary/color/static/value",
                            "properties": {
                              "initial": {
                                "type": "string",
                                "id": "#tokensConfig/elements/text/secondary/color/static/value/initial",
                                "default": "{color.gray.500}"
                              },
                              "dark": {
                                "type": "string",
                                "id": "#tokensConfig/elements/text/secondary/color/static/value/dark",
                                "default": "{color.gray.400}"
                              }
                            },
                            "type": "object",
                            "default": {
                              "initial": "{color.gray.500}",
                              "dark": "{color.gray.400}"
                            }
                          }
                        },
                        "type": "object",
                        "default": {
                          "value": {
                            "initial": "{color.gray.500}",
                            "dark": "{color.gray.400}"
                          }
                        }
                      },
                      "hover": {
                        "id": "#tokensConfig/elements/text/secondary/color/hover",
                        "properties": {
                          "value": {
                            "id": "#tokensConfig/elements/text/secondary/color/hover/value",
                            "properties": {
                              "initial": {
                                "type": "string",
                                "id": "#tokensConfig/elements/text/secondary/color/hover/value/initial",
                                "default": "{color.gray.700}"
                              },
                              "dark": {
                                "type": "string",
                                "id": "#tokensConfig/elements/text/secondary/color/hover/value/dark",
                                "default": "{color.gray.200}"
                              }
                            },
                            "type": "object",
                            "default": {
                              "initial": "{color.gray.700}",
                              "dark": "{color.gray.200}"
                            }
                          }
                        },
                        "type": "object",
                        "default": {
                          "value": {
                            "initial": "{color.gray.700}",
                            "dark": "{color.gray.200}"
                          }
                        }
                      }
                    },
                    "type": "object",
                    "default": {
                      "static": {
                        "value": {
                          "initial": "{color.gray.500}",
                          "dark": "{color.gray.400}"
                        }
                      },
                      "hover": {
                        "value": {
                          "initial": "{color.gray.700}",
                          "dark": "{color.gray.200}"
                        }
                      }
                    }
                  }
                },
                "type": "object",
                "default": {
                  "color": {
                    "static": {
                      "value": {
                        "initial": "{color.gray.500}",
                        "dark": "{color.gray.400}"
                      }
                    },
                    "hover": {
                      "value": {
                        "initial": "{color.gray.700}",
                        "dark": "{color.gray.200}"
                      }
                    }
                  }
                }
              }
            },
            "type": "object",
            "default": {
              "primary": {
                "color": {
                  "static": {
                    "value": {
                      "initial": "{color.gray.900}",
                      "dark": "{color.gray.50}"
                    }
                  },
                  "hover": {}
                }
              },
              "secondary": {
                "color": {
                  "static": {
                    "value": {
                      "initial": "{color.gray.500}",
                      "dark": "{color.gray.400}"
                    }
                  },
                  "hover": {
                    "value": {
                      "initial": "{color.gray.700}",
                      "dark": "{color.gray.200}"
                    }
                  }
                }
              }
            }
          },
          "container": {
            "title": "Main container sizings.",
            "tags": [
              "@studioInput design-token",
              "@studioInputTokenType size",
              "@studioIcon material-symbols:width-full-outline"
            ],
            "id": "#tokensConfig/elements/container",
            "properties": {
              "maxWidth": {
                "id": "#tokensConfig/elements/container/maxWidth",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/elements/container/maxWidth/value",
                    "default": "80rem"
                  }
                },
                "type": "object",
                "default": {
                  "value": "80rem"
                }
              },
              "padding": {
                "id": "#tokensConfig/elements/container/padding",
                "properties": {
                  "mobile": {
                    "id": "#tokensConfig/elements/container/padding/mobile",
                    "properties": {
                      "value": {
                        "type": "string",
                        "id": "#tokensConfig/elements/container/padding/mobile/value",
                        "default": "{space.4}"
                      }
                    },
                    "type": "object",
                    "default": {
                      "value": "{space.4}"
                    }
                  },
                  "xs": {
                    "id": "#tokensConfig/elements/container/padding/xs",
                    "properties": {
                      "value": {
                        "type": "string",
                        "id": "#tokensConfig/elements/container/padding/xs/value",
                        "default": "{space.4}"
                      }
                    },
                    "type": "object",
                    "default": {
                      "value": "{space.4}"
                    }
                  },
                  "sm": {
                    "id": "#tokensConfig/elements/container/padding/sm",
                    "properties": {
                      "value": {
                        "type": "string",
                        "id": "#tokensConfig/elements/container/padding/sm/value",
                        "default": "{space.6}"
                      }
                    },
                    "type": "object",
                    "default": {
                      "value": "{space.6}"
                    }
                  },
                  "md": {
                    "id": "#tokensConfig/elements/container/padding/md",
                    "properties": {
                      "value": {
                        "type": "string",
                        "id": "#tokensConfig/elements/container/padding/md/value",
                        "default": "{space.6}"
                      }
                    },
                    "type": "object",
                    "default": {
                      "value": "{space.6}"
                    }
                  }
                },
                "type": "object",
                "default": {
                  "mobile": {
                    "value": "{space.4}"
                  },
                  "xs": {
                    "value": "{space.4}"
                  },
                  "sm": {
                    "value": "{space.6}"
                  },
                  "md": {
                    "value": "{space.6}"
                  }
                }
              }
            },
            "type": "object",
            "default": {
              "maxWidth": {
                "value": "80rem"
              },
              "padding": {
                "mobile": {
                  "value": "{space.4}"
                },
                "xs": {
                  "value": "{space.4}"
                },
                "sm": {
                  "value": "{space.6}"
                },
                "md": {
                  "value": "{space.6}"
                }
              }
            }
          },
          "backdrop": {
            "title": "Backdrops used in Elements.",
            "tags": [
              "@studioInput design-token",
              "@studioInputTokenType size",
              "@studioIcon material-symbols:blur-circular"
            ],
            "id": "#tokensConfig/elements/backdrop",
            "properties": {
              "filter": {
                "id": "#tokensConfig/elements/backdrop/filter",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/elements/backdrop/filter/value",
                    "default": "saturate(200%) blur(20px)"
                  }
                },
                "type": "object",
                "default": {
                  "value": "saturate(200%) blur(20px)"
                }
              },
              "background": {
                "id": "#tokensConfig/elements/backdrop/background",
                "properties": {
                  "value": {
                    "id": "#tokensConfig/elements/backdrop/background/value",
                    "properties": {
                      "initial": {
                        "type": "string",
                        "id": "#tokensConfig/elements/backdrop/background/value/initial",
                        "default": "#fffc"
                      },
                      "dark": {
                        "type": "string",
                        "id": "#tokensConfig/elements/backdrop/background/value/dark",
                        "default": "#0c0d0ccc"
                      }
                    },
                    "type": "object",
                    "default": {
                      "initial": "#fffc",
                      "dark": "#0c0d0ccc"
                    }
                  }
                },
                "type": "object",
                "default": {
                  "value": {
                    "initial": "#fffc",
                    "dark": "#0c0d0ccc"
                  }
                }
              }
            },
            "type": "object",
            "default": {
              "filter": {
                "value": "saturate(200%) blur(20px)"
              },
              "background": {
                "value": {
                  "initial": "#fffc",
                  "dark": "#0c0d0ccc"
                }
              }
            }
          },
          "border": {
            "title": "Borders used in Elements.",
            "tags": [
              "@studioInput design-token",
              "@studioInputTokenType color",
              "@studioIcon material-symbols:border-all-outline-rounded"
            ],
            "id": "#tokensConfig/elements/border",
            "properties": {
              "primary": {
                "id": "#tokensConfig/elements/border/primary",
                "properties": {
                  "static": {
                    "id": "#tokensConfig/elements/border/primary/static",
                    "properties": {
                      "value": {
                        "id": "#tokensConfig/elements/border/primary/static/value",
                        "properties": {
                          "initial": {
                            "type": "string",
                            "id": "#tokensConfig/elements/border/primary/static/value/initial",
                            "default": "{color.gray.100}"
                          },
                          "dark": {
                            "type": "string",
                            "id": "#tokensConfig/elements/border/primary/static/value/dark",
                            "default": "{color.gray.900}"
                          }
                        },
                        "type": "object",
                        "default": {
                          "initial": "{color.gray.100}",
                          "dark": "{color.gray.900}"
                        }
                      }
                    },
                    "type": "object",
                    "default": {
                      "value": {
                        "initial": "{color.gray.100}",
                        "dark": "{color.gray.900}"
                      }
                    }
                  },
                  "hover": {
                    "id": "#tokensConfig/elements/border/primary/hover",
                    "properties": {
                      "value": {
                        "id": "#tokensConfig/elements/border/primary/hover/value",
                        "properties": {
                          "initial": {
                            "type": "string",
                            "id": "#tokensConfig/elements/border/primary/hover/value/initial",
                            "default": "{color.gray.200}"
                          },
                          "dark": {
                            "type": "string",
                            "id": "#tokensConfig/elements/border/primary/hover/value/dark",
                            "default": "{color.gray.800}"
                          }
                        },
                        "type": "object",
                        "default": {
                          "initial": "{color.gray.200}",
                          "dark": "{color.gray.800}"
                        }
                      }
                    },
                    "type": "object",
                    "default": {
                      "value": {
                        "initial": "{color.gray.200}",
                        "dark": "{color.gray.800}"
                      }
                    }
                  }
                },
                "type": "object",
                "default": {
                  "static": {
                    "value": {
                      "initial": "{color.gray.100}",
                      "dark": "{color.gray.900}"
                    }
                  },
                  "hover": {
                    "value": {
                      "initial": "{color.gray.200}",
                      "dark": "{color.gray.800}"
                    }
                  }
                }
              },
              "secondary": {
                "id": "#tokensConfig/elements/border/secondary",
                "properties": {
                  "static": {
                    "id": "#tokensConfig/elements/border/secondary/static",
                    "properties": {
                      "value": {
                        "id": "#tokensConfig/elements/border/secondary/static/value",
                        "properties": {
                          "initial": {
                            "type": "string",
                            "id": "#tokensConfig/elements/border/secondary/static/value/initial",
                            "default": "{color.gray.200}"
                          },
                          "dark": {
                            "type": "string",
                            "id": "#tokensConfig/elements/border/secondary/static/value/dark",
                            "default": "{color.gray.800}"
                          }
                        },
                        "type": "object",
                        "default": {
                          "initial": "{color.gray.200}",
                          "dark": "{color.gray.800}"
                        }
                      }
                    },
                    "type": "object",
                    "default": {
                      "value": {
                        "initial": "{color.gray.200}",
                        "dark": "{color.gray.800}"
                      }
                    }
                  },
                  "hover": {
                    "id": "#tokensConfig/elements/border/secondary/hover",
                    "properties": {
                      "value": {
                        "id": "#tokensConfig/elements/border/secondary/hover/value",
                        "properties": {
                          "initial": {
                            "type": "string",
                            "id": "#tokensConfig/elements/border/secondary/hover/value/initial",
                            "default": ""
                          },
                          "dark": {
                            "type": "string",
                            "id": "#tokensConfig/elements/border/secondary/hover/value/dark",
                            "default": ""
                          }
                        },
                        "type": "object",
                        "default": {
                          "initial": "",
                          "dark": ""
                        }
                      }
                    },
                    "type": "object",
                    "default": {
                      "value": {
                        "initial": "",
                        "dark": ""
                      }
                    }
                  }
                },
                "type": "object",
                "default": {
                  "static": {
                    "value": {
                      "initial": "{color.gray.200}",
                      "dark": "{color.gray.800}"
                    }
                  },
                  "hover": {
                    "value": {
                      "initial": "",
                      "dark": ""
                    }
                  }
                }
              }
            },
            "type": "object",
            "default": {
              "primary": {
                "static": {
                  "value": {
                    "initial": "{color.gray.100}",
                    "dark": "{color.gray.900}"
                  }
                },
                "hover": {
                  "value": {
                    "initial": "{color.gray.200}",
                    "dark": "{color.gray.800}"
                  }
                }
              },
              "secondary": {
                "static": {
                  "value": {
                    "initial": "{color.gray.200}",
                    "dark": "{color.gray.800}"
                  }
                },
                "hover": {
                  "value": {
                    "initial": "",
                    "dark": ""
                  }
                }
              }
            }
          },
          "surface": {
            "title": "Surfaces used in Elements.",
            "tags": [
              "@studioInput design-token",
              "@studioInputTokenType color",
              "@studioIcon fluent:surface-hub-20-filled"
            ],
            "id": "#tokensConfig/elements/surface",
            "properties": {
              "background": {
                "id": "#tokensConfig/elements/surface/background",
                "properties": {
                  "base": {
                    "id": "#tokensConfig/elements/surface/background/base",
                    "properties": {
                      "value": {
                        "id": "#tokensConfig/elements/surface/background/base/value",
                        "properties": {
                          "initial": {
                            "type": "string",
                            "id": "#tokensConfig/elements/surface/background/base/value/initial",
                            "default": "{color.gray.100}"
                          },
                          "dark": {
                            "type": "string",
                            "id": "#tokensConfig/elements/surface/background/base/value/dark",
                            "default": "{color.gray.900}"
                          }
                        },
                        "type": "object",
                        "default": {
                          "initial": "{color.gray.100}",
                          "dark": "{color.gray.900}"
                        }
                      }
                    },
                    "type": "object",
                    "default": {
                      "value": {
                        "initial": "{color.gray.100}",
                        "dark": "{color.gray.900}"
                      }
                    }
                  }
                },
                "type": "object",
                "default": {
                  "base": {
                    "value": {
                      "initial": "{color.gray.100}",
                      "dark": "{color.gray.900}"
                    }
                  }
                }
              }
            },
            "type": "object",
            "default": {
              "background": {
                "base": {
                  "value": {
                    "initial": "{color.gray.100}",
                    "dark": "{color.gray.900}"
                  }
                }
              }
            }
          },
          "state": {
            "title": "Color states used in Elements.",
            "tags": [
              "@studioInput design-token",
              "@studioInputTokenType color",
              "@studioIcon mdi:palette-advanced"
            ],
            "id": "#tokensConfig/elements/state",
            "properties": {
              "primary": {
                "id": "#tokensConfig/elements/state/primary",
                "properties": {
                  "color": {
                    "id": "#tokensConfig/elements/state/primary/color",
                    "properties": {
                      "primary": {
                        "id": "#tokensConfig/elements/state/primary/color/primary",
                        "properties": {
                          "value": {
                            "id": "#tokensConfig/elements/state/primary/color/primary/value",
                            "properties": {
                              "initial": {
                                "type": "string",
                                "id": "#tokensConfig/elements/state/primary/color/primary/value/initial",
                                "default": "{color.primary.600}"
                              },
                              "dark": {
                                "type": "string",
                                "id": "#tokensConfig/elements/state/primary/color/primary/value/dark",
                                "default": "{color.primary.400}"
                              }
                            },
                            "type": "object",
                            "default": {
                              "initial": "{color.primary.600}",
                              "dark": "{color.primary.400}"
                            }
                          }
                        },
                        "type": "object",
                        "default": {
                          "value": {
                            "initial": "{color.primary.600}",
                            "dark": "{color.primary.400}"
                          }
                        }
                      },
                      "secondary": {
                        "id": "#tokensConfig/elements/state/primary/color/secondary",
                        "properties": {
                          "value": {
                            "id": "#tokensConfig/elements/state/primary/color/secondary/value",
                            "properties": {
                              "initial": {
                                "type": "string",
                                "id": "#tokensConfig/elements/state/primary/color/secondary/value/initial",
                                "default": "{color.primary.700}"
                              },
                              "dark": {
                                "type": "string",
                                "id": "#tokensConfig/elements/state/primary/color/secondary/value/dark",
                                "default": "{color.primary.200}"
                              }
                            },
                            "type": "object",
                            "default": {
                              "initial": "{color.primary.700}",
                              "dark": "{color.primary.200}"
                            }
                          }
                        },
                        "type": "object",
                        "default": {
                          "value": {
                            "initial": "{color.primary.700}",
                            "dark": "{color.primary.200}"
                          }
                        }
                      }
                    },
                    "type": "object",
                    "default": {
                      "primary": {
                        "value": {
                          "initial": "{color.primary.600}",
                          "dark": "{color.primary.400}"
                        }
                      },
                      "secondary": {
                        "value": {
                          "initial": "{color.primary.700}",
                          "dark": "{color.primary.200}"
                        }
                      }
                    }
                  },
                  "backgroundColor": {
                    "id": "#tokensConfig/elements/state/primary/backgroundColor",
                    "properties": {
                      "primary": {
                        "id": "#tokensConfig/elements/state/primary/backgroundColor/primary",
                        "properties": {
                          "value": {
                            "id": "#tokensConfig/elements/state/primary/backgroundColor/primary/value",
                            "properties": {
                              "initial": {
                                "type": "string",
                                "id": "#tokensConfig/elements/state/primary/backgroundColor/primary/value/initial",
                                "default": "{color.primary.50}"
                              },
                              "dark": {
                                "type": "string",
                                "id": "#tokensConfig/elements/state/primary/backgroundColor/primary/value/dark",
                                "default": "{color.primary.900}"
                              }
                            },
                            "type": "object",
                            "default": {
                              "initial": "{color.primary.50}",
                              "dark": "{color.primary.900}"
                            }
                          }
                        },
                        "type": "object",
                        "default": {
                          "value": {
                            "initial": "{color.primary.50}",
                            "dark": "{color.primary.900}"
                          }
                        }
                      },
                      "secondary": {
                        "id": "#tokensConfig/elements/state/primary/backgroundColor/secondary",
                        "properties": {
                          "value": {
                            "id": "#tokensConfig/elements/state/primary/backgroundColor/secondary/value",
                            "properties": {
                              "initial": {
                                "type": "string",
                                "id": "#tokensConfig/elements/state/primary/backgroundColor/secondary/value/initial",
                                "default": "{color.primary.100}"
                              },
                              "dark": {
                                "type": "string",
                                "id": "#tokensConfig/elements/state/primary/backgroundColor/secondary/value/dark",
                                "default": "{color.primary.800}"
                              }
                            },
                            "type": "object",
                            "default": {
                              "initial": "{color.primary.100}",
                              "dark": "{color.primary.800}"
                            }
                          }
                        },
                        "type": "object",
                        "default": {
                          "value": {
                            "initial": "{color.primary.100}",
                            "dark": "{color.primary.800}"
                          }
                        }
                      }
                    },
                    "type": "object",
                    "default": {
                      "primary": {
                        "value": {
                          "initial": "{color.primary.50}",
                          "dark": "{color.primary.900}"
                        }
                      },
                      "secondary": {
                        "value": {
                          "initial": "{color.primary.100}",
                          "dark": "{color.primary.800}"
                        }
                      }
                    }
                  },
                  "borderColor": {
                    "id": "#tokensConfig/elements/state/primary/borderColor",
                    "properties": {
                      "primary": {
                        "id": "#tokensConfig/elements/state/primary/borderColor/primary",
                        "properties": {
                          "value": {
                            "id": "#tokensConfig/elements/state/primary/borderColor/primary/value",
                            "properties": {
                              "initial": {
                                "type": "string",
                                "id": "#tokensConfig/elements/state/primary/borderColor/primary/value/initial",
                                "default": "{color.primary.100}"
                              },
                              "dark": {
                                "type": "string",
                                "id": "#tokensConfig/elements/state/primary/borderColor/primary/value/dark",
                                "default": "{color.primary.800}"
                              }
                            },
                            "type": "object",
                            "default": {
                              "initial": "{color.primary.100}",
                              "dark": "{color.primary.800}"
                            }
                          }
                        },
                        "type": "object",
                        "default": {
                          "value": {
                            "initial": "{color.primary.100}",
                            "dark": "{color.primary.800}"
                          }
                        }
                      },
                      "secondary": {
                        "id": "#tokensConfig/elements/state/primary/borderColor/secondary",
                        "properties": {
                          "value": {
                            "id": "#tokensConfig/elements/state/primary/borderColor/secondary/value",
                            "properties": {
                              "initial": {
                                "type": "string",
                                "id": "#tokensConfig/elements/state/primary/borderColor/secondary/value/initial",
                                "default": "{color.primary.200}"
                              },
                              "dark": {
                                "type": "string",
                                "id": "#tokensConfig/elements/state/primary/borderColor/secondary/value/dark",
                                "default": "{color.primary.700}"
                              }
                            },
                            "type": "object",
                            "default": {
                              "initial": "{color.primary.200}",
                              "dark": "{color.primary.700}"
                            }
                          }
                        },
                        "type": "object",
                        "default": {
                          "value": {
                            "initial": "{color.primary.200}",
                            "dark": "{color.primary.700}"
                          }
                        }
                      }
                    },
                    "type": "object",
                    "default": {
                      "primary": {
                        "value": {
                          "initial": "{color.primary.100}",
                          "dark": "{color.primary.800}"
                        }
                      },
                      "secondary": {
                        "value": {
                          "initial": "{color.primary.200}",
                          "dark": "{color.primary.700}"
                        }
                      }
                    }
                  }
                },
                "type": "object",
                "default": {
                  "color": {
                    "primary": {
                      "value": {
                        "initial": "{color.primary.600}",
                        "dark": "{color.primary.400}"
                      }
                    },
                    "secondary": {
                      "value": {
                        "initial": "{color.primary.700}",
                        "dark": "{color.primary.200}"
                      }
                    }
                  },
                  "backgroundColor": {
                    "primary": {
                      "value": {
                        "initial": "{color.primary.50}",
                        "dark": "{color.primary.900}"
                      }
                    },
                    "secondary": {
                      "value": {
                        "initial": "{color.primary.100}",
                        "dark": "{color.primary.800}"
                      }
                    }
                  },
                  "borderColor": {
                    "primary": {
                      "value": {
                        "initial": "{color.primary.100}",
                        "dark": "{color.primary.800}"
                      }
                    },
                    "secondary": {
                      "value": {
                        "initial": "{color.primary.200}",
                        "dark": "{color.primary.700}"
                      }
                    }
                  }
                }
              },
              "info": {
                "id": "#tokensConfig/elements/state/info",
                "properties": {
                  "color": {
                    "id": "#tokensConfig/elements/state/info/color",
                    "properties": {
                      "primary": {
                        "id": "#tokensConfig/elements/state/info/color/primary",
                        "properties": {
                          "value": {
                            "id": "#tokensConfig/elements/state/info/color/primary/value",
                            "properties": {
                              "initial": {
                                "type": "string",
                                "id": "#tokensConfig/elements/state/info/color/primary/value/initial",
                                "default": "{color.blue.500}"
                              },
                              "dark": {
                                "type": "string",
                                "id": "#tokensConfig/elements/state/info/color/primary/value/dark",
                                "default": "{color.blue.400}"
                              }
                            },
                            "type": "object",
                            "default": {
                              "initial": "{color.blue.500}",
                              "dark": "{color.blue.400}"
                            }
                          }
                        },
                        "type": "object",
                        "default": {
                          "value": {
                            "initial": "{color.blue.500}",
                            "dark": "{color.blue.400}"
                          }
                        }
                      },
                      "secondary": {
                        "id": "#tokensConfig/elements/state/info/color/secondary",
                        "properties": {
                          "value": {
                            "id": "#tokensConfig/elements/state/info/color/secondary/value",
                            "properties": {
                              "initial": {
                                "type": "string",
                                "id": "#tokensConfig/elements/state/info/color/secondary/value/initial",
                                "default": "{color.blue.600}"
                              },
                              "dark": {
                                "type": "string",
                                "id": "#tokensConfig/elements/state/info/color/secondary/value/dark",
                                "default": "{color.blue.200}"
                              }
                            },
                            "type": "object",
                            "default": {
                              "initial": "{color.blue.600}",
                              "dark": "{color.blue.200}"
                            }
                          }
                        },
                        "type": "object",
                        "default": {
                          "value": {
                            "initial": "{color.blue.600}",
                            "dark": "{color.blue.200}"
                          }
                        }
                      }
                    },
                    "type": "object",
                    "default": {
                      "primary": {
                        "value": {
                          "initial": "{color.blue.500}",
                          "dark": "{color.blue.400}"
                        }
                      },
                      "secondary": {
                        "value": {
                          "initial": "{color.blue.600}",
                          "dark": "{color.blue.200}"
                        }
                      }
                    }
                  },
                  "backgroundColor": {
                    "id": "#tokensConfig/elements/state/info/backgroundColor",
                    "properties": {
                      "primary": {
                        "id": "#tokensConfig/elements/state/info/backgroundColor/primary",
                        "properties": {
                          "value": {
                            "id": "#tokensConfig/elements/state/info/backgroundColor/primary/value",
                            "properties": {
                              "initial": {
                                "type": "string",
                                "id": "#tokensConfig/elements/state/info/backgroundColor/primary/value/initial",
                                "default": "{color.blue.50}"
                              },
                              "dark": {
                                "type": "string",
                                "id": "#tokensConfig/elements/state/info/backgroundColor/primary/value/dark",
                                "default": "{color.blue.900}"
                              }
                            },
                            "type": "object",
                            "default": {
                              "initial": "{color.blue.50}",
                              "dark": "{color.blue.900}"
                            }
                          }
                        },
                        "type": "object",
                        "default": {
                          "value": {
                            "initial": "{color.blue.50}",
                            "dark": "{color.blue.900}"
                          }
                        }
                      },
                      "secondary": {
                        "id": "#tokensConfig/elements/state/info/backgroundColor/secondary",
                        "properties": {
                          "value": {
                            "id": "#tokensConfig/elements/state/info/backgroundColor/secondary/value",
                            "properties": {
                              "initial": {
                                "type": "string",
                                "id": "#tokensConfig/elements/state/info/backgroundColor/secondary/value/initial",
                                "default": "{color.blue.100}"
                              },
                              "dark": {
                                "type": "string",
                                "id": "#tokensConfig/elements/state/info/backgroundColor/secondary/value/dark",
                                "default": "{color.blue.800}"
                              }
                            },
                            "type": "object",
                            "default": {
                              "initial": "{color.blue.100}",
                              "dark": "{color.blue.800}"
                            }
                          }
                        },
                        "type": "object",
                        "default": {
                          "value": {
                            "initial": "{color.blue.100}",
                            "dark": "{color.blue.800}"
                          }
                        }
                      }
                    },
                    "type": "object",
                    "default": {
                      "primary": {
                        "value": {
                          "initial": "{color.blue.50}",
                          "dark": "{color.blue.900}"
                        }
                      },
                      "secondary": {
                        "value": {
                          "initial": "{color.blue.100}",
                          "dark": "{color.blue.800}"
                        }
                      }
                    }
                  },
                  "borderColor": {
                    "id": "#tokensConfig/elements/state/info/borderColor",
                    "properties": {
                      "primary": {
                        "id": "#tokensConfig/elements/state/info/borderColor/primary",
                        "properties": {
                          "value": {
                            "id": "#tokensConfig/elements/state/info/borderColor/primary/value",
                            "properties": {
                              "initial": {
                                "type": "string",
                                "id": "#tokensConfig/elements/state/info/borderColor/primary/value/initial",
                                "default": "{color.blue.100}"
                              },
                              "dark": {
                                "type": "string",
                                "id": "#tokensConfig/elements/state/info/borderColor/primary/value/dark",
                                "default": "{color.blue.800}"
                              }
                            },
                            "type": "object",
                            "default": {
                              "initial": "{color.blue.100}",
                              "dark": "{color.blue.800}"
                            }
                          }
                        },
                        "type": "object",
                        "default": {
                          "value": {
                            "initial": "{color.blue.100}",
                            "dark": "{color.blue.800}"
                          }
                        }
                      },
                      "secondary": {
                        "id": "#tokensConfig/elements/state/info/borderColor/secondary",
                        "properties": {
                          "value": {
                            "id": "#tokensConfig/elements/state/info/borderColor/secondary/value",
                            "properties": {
                              "initial": {
                                "type": "string",
                                "id": "#tokensConfig/elements/state/info/borderColor/secondary/value/initial",
                                "default": "{color.blue.200}"
                              },
                              "dark": {
                                "type": "string",
                                "id": "#tokensConfig/elements/state/info/borderColor/secondary/value/dark",
                                "default": "{color.blue.700}"
                              }
                            },
                            "type": "object",
                            "default": {
                              "initial": "{color.blue.200}",
                              "dark": "{color.blue.700}"
                            }
                          }
                        },
                        "type": "object",
                        "default": {
                          "value": {
                            "initial": "{color.blue.200}",
                            "dark": "{color.blue.700}"
                          }
                        }
                      }
                    },
                    "type": "object",
                    "default": {
                      "primary": {
                        "value": {
                          "initial": "{color.blue.100}",
                          "dark": "{color.blue.800}"
                        }
                      },
                      "secondary": {
                        "value": {
                          "initial": "{color.blue.200}",
                          "dark": "{color.blue.700}"
                        }
                      }
                    }
                  }
                },
                "type": "object",
                "default": {
                  "color": {
                    "primary": {
                      "value": {
                        "initial": "{color.blue.500}",
                        "dark": "{color.blue.400}"
                      }
                    },
                    "secondary": {
                      "value": {
                        "initial": "{color.blue.600}",
                        "dark": "{color.blue.200}"
                      }
                    }
                  },
                  "backgroundColor": {
                    "primary": {
                      "value": {
                        "initial": "{color.blue.50}",
                        "dark": "{color.blue.900}"
                      }
                    },
                    "secondary": {
                      "value": {
                        "initial": "{color.blue.100}",
                        "dark": "{color.blue.800}"
                      }
                    }
                  },
                  "borderColor": {
                    "primary": {
                      "value": {
                        "initial": "{color.blue.100}",
                        "dark": "{color.blue.800}"
                      }
                    },
                    "secondary": {
                      "value": {
                        "initial": "{color.blue.200}",
                        "dark": "{color.blue.700}"
                      }
                    }
                  }
                }
              },
              "success": {
                "id": "#tokensConfig/elements/state/success",
                "properties": {
                  "color": {
                    "id": "#tokensConfig/elements/state/success/color",
                    "properties": {
                      "primary": {
                        "id": "#tokensConfig/elements/state/success/color/primary",
                        "properties": {
                          "value": {
                            "id": "#tokensConfig/elements/state/success/color/primary/value",
                            "properties": {
                              "initial": {
                                "type": "string",
                                "id": "#tokensConfig/elements/state/success/color/primary/value/initial",
                                "default": "{color.green.500}"
                              },
                              "dark": {
                                "type": "string",
                                "id": "#tokensConfig/elements/state/success/color/primary/value/dark",
                                "default": "{color.green.400}"
                              }
                            },
                            "type": "object",
                            "default": {
                              "initial": "{color.green.500}",
                              "dark": "{color.green.400}"
                            }
                          }
                        },
                        "type": "object",
                        "default": {
                          "value": {
                            "initial": "{color.green.500}",
                            "dark": "{color.green.400}"
                          }
                        }
                      },
                      "secondary": {
                        "id": "#tokensConfig/elements/state/success/color/secondary",
                        "properties": {
                          "value": {
                            "id": "#tokensConfig/elements/state/success/color/secondary/value",
                            "properties": {
                              "initial": {
                                "type": "string",
                                "id": "#tokensConfig/elements/state/success/color/secondary/value/initial",
                                "default": "{color.green.600}"
                              },
                              "dark": {
                                "type": "string",
                                "id": "#tokensConfig/elements/state/success/color/secondary/value/dark",
                                "default": "{color.green.200}"
                              }
                            },
                            "type": "object",
                            "default": {
                              "initial": "{color.green.600}",
                              "dark": "{color.green.200}"
                            }
                          }
                        },
                        "type": "object",
                        "default": {
                          "value": {
                            "initial": "{color.green.600}",
                            "dark": "{color.green.200}"
                          }
                        }
                      }
                    },
                    "type": "object",
                    "default": {
                      "primary": {
                        "value": {
                          "initial": "{color.green.500}",
                          "dark": "{color.green.400}"
                        }
                      },
                      "secondary": {
                        "value": {
                          "initial": "{color.green.600}",
                          "dark": "{color.green.200}"
                        }
                      }
                    }
                  },
                  "backgroundColor": {
                    "id": "#tokensConfig/elements/state/success/backgroundColor",
                    "properties": {
                      "primary": {
                        "id": "#tokensConfig/elements/state/success/backgroundColor/primary",
                        "properties": {
                          "value": {
                            "id": "#tokensConfig/elements/state/success/backgroundColor/primary/value",
                            "properties": {
                              "initial": {
                                "type": "string",
                                "id": "#tokensConfig/elements/state/success/backgroundColor/primary/value/initial",
                                "default": "{color.green.50}"
                              },
                              "dark": {
                                "type": "string",
                                "id": "#tokensConfig/elements/state/success/backgroundColor/primary/value/dark",
                                "default": "{color.green.900}"
                              }
                            },
                            "type": "object",
                            "default": {
                              "initial": "{color.green.50}",
                              "dark": "{color.green.900}"
                            }
                          }
                        },
                        "type": "object",
                        "default": {
                          "value": {
                            "initial": "{color.green.50}",
                            "dark": "{color.green.900}"
                          }
                        }
                      },
                      "secondary": {
                        "id": "#tokensConfig/elements/state/success/backgroundColor/secondary",
                        "properties": {
                          "value": {
                            "id": "#tokensConfig/elements/state/success/backgroundColor/secondary/value",
                            "properties": {
                              "initial": {
                                "type": "string",
                                "id": "#tokensConfig/elements/state/success/backgroundColor/secondary/value/initial",
                                "default": "{color.green.100}"
                              },
                              "dark": {
                                "type": "string",
                                "id": "#tokensConfig/elements/state/success/backgroundColor/secondary/value/dark",
                                "default": "{color.green.800}"
                              }
                            },
                            "type": "object",
                            "default": {
                              "initial": "{color.green.100}",
                              "dark": "{color.green.800}"
                            }
                          }
                        },
                        "type": "object",
                        "default": {
                          "value": {
                            "initial": "{color.green.100}",
                            "dark": "{color.green.800}"
                          }
                        }
                      }
                    },
                    "type": "object",
                    "default": {
                      "primary": {
                        "value": {
                          "initial": "{color.green.50}",
                          "dark": "{color.green.900}"
                        }
                      },
                      "secondary": {
                        "value": {
                          "initial": "{color.green.100}",
                          "dark": "{color.green.800}"
                        }
                      }
                    }
                  },
                  "borderColor": {
                    "id": "#tokensConfig/elements/state/success/borderColor",
                    "properties": {
                      "primary": {
                        "id": "#tokensConfig/elements/state/success/borderColor/primary",
                        "properties": {
                          "value": {
                            "id": "#tokensConfig/elements/state/success/borderColor/primary/value",
                            "properties": {
                              "initial": {
                                "type": "string",
                                "id": "#tokensConfig/elements/state/success/borderColor/primary/value/initial",
                                "default": "{color.green.100}"
                              },
                              "dark": {
                                "type": "string",
                                "id": "#tokensConfig/elements/state/success/borderColor/primary/value/dark",
                                "default": "{color.green.800}"
                              }
                            },
                            "type": "object",
                            "default": {
                              "initial": "{color.green.100}",
                              "dark": "{color.green.800}"
                            }
                          }
                        },
                        "type": "object",
                        "default": {
                          "value": {
                            "initial": "{color.green.100}",
                            "dark": "{color.green.800}"
                          }
                        }
                      },
                      "secondary": {
                        "id": "#tokensConfig/elements/state/success/borderColor/secondary",
                        "properties": {
                          "value": {
                            "id": "#tokensConfig/elements/state/success/borderColor/secondary/value",
                            "properties": {
                              "initial": {
                                "type": "string",
                                "id": "#tokensConfig/elements/state/success/borderColor/secondary/value/initial",
                                "default": "{color.green.200}"
                              },
                              "dark": {
                                "type": "string",
                                "id": "#tokensConfig/elements/state/success/borderColor/secondary/value/dark",
                                "default": "{color.green.700}"
                              }
                            },
                            "type": "object",
                            "default": {
                              "initial": "{color.green.200}",
                              "dark": "{color.green.700}"
                            }
                          }
                        },
                        "type": "object",
                        "default": {
                          "value": {
                            "initial": "{color.green.200}",
                            "dark": "{color.green.700}"
                          }
                        }
                      }
                    },
                    "type": "object",
                    "default": {
                      "primary": {
                        "value": {
                          "initial": "{color.green.100}",
                          "dark": "{color.green.800}"
                        }
                      },
                      "secondary": {
                        "value": {
                          "initial": "{color.green.200}",
                          "dark": "{color.green.700}"
                        }
                      }
                    }
                  }
                },
                "type": "object",
                "default": {
                  "color": {
                    "primary": {
                      "value": {
                        "initial": "{color.green.500}",
                        "dark": "{color.green.400}"
                      }
                    },
                    "secondary": {
                      "value": {
                        "initial": "{color.green.600}",
                        "dark": "{color.green.200}"
                      }
                    }
                  },
                  "backgroundColor": {
                    "primary": {
                      "value": {
                        "initial": "{color.green.50}",
                        "dark": "{color.green.900}"
                      }
                    },
                    "secondary": {
                      "value": {
                        "initial": "{color.green.100}",
                        "dark": "{color.green.800}"
                      }
                    }
                  },
                  "borderColor": {
                    "primary": {
                      "value": {
                        "initial": "{color.green.100}",
                        "dark": "{color.green.800}"
                      }
                    },
                    "secondary": {
                      "value": {
                        "initial": "{color.green.200}",
                        "dark": "{color.green.700}"
                      }
                    }
                  }
                }
              },
              "warning": {
                "id": "#tokensConfig/elements/state/warning",
                "properties": {
                  "color": {
                    "id": "#tokensConfig/elements/state/warning/color",
                    "properties": {
                      "primary": {
                        "id": "#tokensConfig/elements/state/warning/color/primary",
                        "properties": {
                          "value": {
                            "id": "#tokensConfig/elements/state/warning/color/primary/value",
                            "properties": {
                              "initial": {
                                "type": "string",
                                "id": "#tokensConfig/elements/state/warning/color/primary/value/initial",
                                "default": "{color.yellow.600}"
                              },
                              "dark": {
                                "type": "string",
                                "id": "#tokensConfig/elements/state/warning/color/primary/value/dark",
                                "default": "{color.yellow.400}"
                              }
                            },
                            "type": "object",
                            "default": {
                              "initial": "{color.yellow.600}",
                              "dark": "{color.yellow.400}"
                            }
                          }
                        },
                        "type": "object",
                        "default": {
                          "value": {
                            "initial": "{color.yellow.600}",
                            "dark": "{color.yellow.400}"
                          }
                        }
                      },
                      "secondary": {
                        "id": "#tokensConfig/elements/state/warning/color/secondary",
                        "properties": {
                          "value": {
                            "id": "#tokensConfig/elements/state/warning/color/secondary/value",
                            "properties": {
                              "initial": {
                                "type": "string",
                                "id": "#tokensConfig/elements/state/warning/color/secondary/value/initial",
                                "default": "{color.yellow.700}"
                              },
                              "dark": {
                                "type": "string",
                                "id": "#tokensConfig/elements/state/warning/color/secondary/value/dark",
                                "default": "{color.yellow.200}"
                              }
                            },
                            "type": "object",
                            "default": {
                              "initial": "{color.yellow.700}",
                              "dark": "{color.yellow.200}"
                            }
                          }
                        },
                        "type": "object",
                        "default": {
                          "value": {
                            "initial": "{color.yellow.700}",
                            "dark": "{color.yellow.200}"
                          }
                        }
                      }
                    },
                    "type": "object",
                    "default": {
                      "primary": {
                        "value": {
                          "initial": "{color.yellow.600}",
                          "dark": "{color.yellow.400}"
                        }
                      },
                      "secondary": {
                        "value": {
                          "initial": "{color.yellow.700}",
                          "dark": "{color.yellow.200}"
                        }
                      }
                    }
                  },
                  "backgroundColor": {
                    "id": "#tokensConfig/elements/state/warning/backgroundColor",
                    "properties": {
                      "primary": {
                        "id": "#tokensConfig/elements/state/warning/backgroundColor/primary",
                        "properties": {
                          "value": {
                            "id": "#tokensConfig/elements/state/warning/backgroundColor/primary/value",
                            "properties": {
                              "initial": {
                                "type": "string",
                                "id": "#tokensConfig/elements/state/warning/backgroundColor/primary/value/initial",
                                "default": "{color.yellow.50}"
                              },
                              "dark": {
                                "type": "string",
                                "id": "#tokensConfig/elements/state/warning/backgroundColor/primary/value/dark",
                                "default": "{color.yellow.900}"
                              }
                            },
                            "type": "object",
                            "default": {
                              "initial": "{color.yellow.50}",
                              "dark": "{color.yellow.900}"
                            }
                          }
                        },
                        "type": "object",
                        "default": {
                          "value": {
                            "initial": "{color.yellow.50}",
                            "dark": "{color.yellow.900}"
                          }
                        }
                      },
                      "secondary": {
                        "id": "#tokensConfig/elements/state/warning/backgroundColor/secondary",
                        "properties": {
                          "value": {
                            "id": "#tokensConfig/elements/state/warning/backgroundColor/secondary/value",
                            "properties": {
                              "initial": {
                                "type": "string",
                                "id": "#tokensConfig/elements/state/warning/backgroundColor/secondary/value/initial",
                                "default": "{color.yellow.100}"
                              },
                              "dark": {
                                "type": "string",
                                "id": "#tokensConfig/elements/state/warning/backgroundColor/secondary/value/dark",
                                "default": "{color.yellow.800}"
                              }
                            },
                            "type": "object",
                            "default": {
                              "initial": "{color.yellow.100}",
                              "dark": "{color.yellow.800}"
                            }
                          }
                        },
                        "type": "object",
                        "default": {
                          "value": {
                            "initial": "{color.yellow.100}",
                            "dark": "{color.yellow.800}"
                          }
                        }
                      }
                    },
                    "type": "object",
                    "default": {
                      "primary": {
                        "value": {
                          "initial": "{color.yellow.50}",
                          "dark": "{color.yellow.900}"
                        }
                      },
                      "secondary": {
                        "value": {
                          "initial": "{color.yellow.100}",
                          "dark": "{color.yellow.800}"
                        }
                      }
                    }
                  },
                  "borderColor": {
                    "id": "#tokensConfig/elements/state/warning/borderColor",
                    "properties": {
                      "primary": {
                        "id": "#tokensConfig/elements/state/warning/borderColor/primary",
                        "properties": {
                          "value": {
                            "id": "#tokensConfig/elements/state/warning/borderColor/primary/value",
                            "properties": {
                              "initial": {
                                "type": "string",
                                "id": "#tokensConfig/elements/state/warning/borderColor/primary/value/initial",
                                "default": "{color.yellow.100}"
                              },
                              "dark": {
                                "type": "string",
                                "id": "#tokensConfig/elements/state/warning/borderColor/primary/value/dark",
                                "default": "{color.yellow.800}"
                              }
                            },
                            "type": "object",
                            "default": {
                              "initial": "{color.yellow.100}",
                              "dark": "{color.yellow.800}"
                            }
                          }
                        },
                        "type": "object",
                        "default": {
                          "value": {
                            "initial": "{color.yellow.100}",
                            "dark": "{color.yellow.800}"
                          }
                        }
                      },
                      "secondary": {
                        "id": "#tokensConfig/elements/state/warning/borderColor/secondary",
                        "properties": {
                          "value": {
                            "id": "#tokensConfig/elements/state/warning/borderColor/secondary/value",
                            "properties": {
                              "initial": {
                                "type": "string",
                                "id": "#tokensConfig/elements/state/warning/borderColor/secondary/value/initial",
                                "default": "{color.yellow.200}"
                              },
                              "dark": {
                                "type": "string",
                                "id": "#tokensConfig/elements/state/warning/borderColor/secondary/value/dark",
                                "default": "{color.yellow.700}"
                              }
                            },
                            "type": "object",
                            "default": {
                              "initial": "{color.yellow.200}",
                              "dark": "{color.yellow.700}"
                            }
                          }
                        },
                        "type": "object",
                        "default": {
                          "value": {
                            "initial": "{color.yellow.200}",
                            "dark": "{color.yellow.700}"
                          }
                        }
                      }
                    },
                    "type": "object",
                    "default": {
                      "primary": {
                        "value": {
                          "initial": "{color.yellow.100}",
                          "dark": "{color.yellow.800}"
                        }
                      },
                      "secondary": {
                        "value": {
                          "initial": "{color.yellow.200}",
                          "dark": "{color.yellow.700}"
                        }
                      }
                    }
                  }
                },
                "type": "object",
                "default": {
                  "color": {
                    "primary": {
                      "value": {
                        "initial": "{color.yellow.600}",
                        "dark": "{color.yellow.400}"
                      }
                    },
                    "secondary": {
                      "value": {
                        "initial": "{color.yellow.700}",
                        "dark": "{color.yellow.200}"
                      }
                    }
                  },
                  "backgroundColor": {
                    "primary": {
                      "value": {
                        "initial": "{color.yellow.50}",
                        "dark": "{color.yellow.900}"
                      }
                    },
                    "secondary": {
                      "value": {
                        "initial": "{color.yellow.100}",
                        "dark": "{color.yellow.800}"
                      }
                    }
                  },
                  "borderColor": {
                    "primary": {
                      "value": {
                        "initial": "{color.yellow.100}",
                        "dark": "{color.yellow.800}"
                      }
                    },
                    "secondary": {
                      "value": {
                        "initial": "{color.yellow.200}",
                        "dark": "{color.yellow.700}"
                      }
                    }
                  }
                }
              },
              "danger": {
                "id": "#tokensConfig/elements/state/danger",
                "properties": {
                  "color": {
                    "id": "#tokensConfig/elements/state/danger/color",
                    "properties": {
                      "primary": {
                        "id": "#tokensConfig/elements/state/danger/color/primary",
                        "properties": {
                          "value": {
                            "id": "#tokensConfig/elements/state/danger/color/primary/value",
                            "properties": {
                              "initial": {
                                "type": "string",
                                "id": "#tokensConfig/elements/state/danger/color/primary/value/initial",
                                "default": "{color.red.500}"
                              },
                              "dark": {
                                "type": "string",
                                "id": "#tokensConfig/elements/state/danger/color/primary/value/dark",
                                "default": "{color.red.300}"
                              }
                            },
                            "type": "object",
                            "default": {
                              "initial": "{color.red.500}",
                              "dark": "{color.red.300}"
                            }
                          }
                        },
                        "type": "object",
                        "default": {
                          "value": {
                            "initial": "{color.red.500}",
                            "dark": "{color.red.300}"
                          }
                        }
                      },
                      "secondary": {
                        "id": "#tokensConfig/elements/state/danger/color/secondary",
                        "properties": {
                          "value": {
                            "id": "#tokensConfig/elements/state/danger/color/secondary/value",
                            "properties": {
                              "initial": {
                                "type": "string",
                                "id": "#tokensConfig/elements/state/danger/color/secondary/value/initial",
                                "default": "{color.red.600}"
                              },
                              "dark": {
                                "type": "string",
                                "id": "#tokensConfig/elements/state/danger/color/secondary/value/dark",
                                "default": "{color.red.200}"
                              }
                            },
                            "type": "object",
                            "default": {
                              "initial": "{color.red.600}",
                              "dark": "{color.red.200}"
                            }
                          }
                        },
                        "type": "object",
                        "default": {
                          "value": {
                            "initial": "{color.red.600}",
                            "dark": "{color.red.200}"
                          }
                        }
                      }
                    },
                    "type": "object",
                    "default": {
                      "primary": {
                        "value": {
                          "initial": "{color.red.500}",
                          "dark": "{color.red.300}"
                        }
                      },
                      "secondary": {
                        "value": {
                          "initial": "{color.red.600}",
                          "dark": "{color.red.200}"
                        }
                      }
                    }
                  },
                  "backgroundColor": {
                    "id": "#tokensConfig/elements/state/danger/backgroundColor",
                    "properties": {
                      "primary": {
                        "id": "#tokensConfig/elements/state/danger/backgroundColor/primary",
                        "properties": {
                          "value": {
                            "id": "#tokensConfig/elements/state/danger/backgroundColor/primary/value",
                            "properties": {
                              "initial": {
                                "type": "string",
                                "id": "#tokensConfig/elements/state/danger/backgroundColor/primary/value/initial",
                                "default": "{color.red.50}"
                              },
                              "dark": {
                                "type": "string",
                                "id": "#tokensConfig/elements/state/danger/backgroundColor/primary/value/dark",
                                "default": "{color.red.900}"
                              }
                            },
                            "type": "object",
                            "default": {
                              "initial": "{color.red.50}",
                              "dark": "{color.red.900}"
                            }
                          }
                        },
                        "type": "object",
                        "default": {
                          "value": {
                            "initial": "{color.red.50}",
                            "dark": "{color.red.900}"
                          }
                        }
                      },
                      "secondary": {
                        "id": "#tokensConfig/elements/state/danger/backgroundColor/secondary",
                        "properties": {
                          "value": {
                            "id": "#tokensConfig/elements/state/danger/backgroundColor/secondary/value",
                            "properties": {
                              "initial": {
                                "type": "string",
                                "id": "#tokensConfig/elements/state/danger/backgroundColor/secondary/value/initial",
                                "default": "{color.red.100}"
                              },
                              "dark": {
                                "type": "string",
                                "id": "#tokensConfig/elements/state/danger/backgroundColor/secondary/value/dark",
                                "default": "{color.red.800}"
                              }
                            },
                            "type": "object",
                            "default": {
                              "initial": "{color.red.100}",
                              "dark": "{color.red.800}"
                            }
                          }
                        },
                        "type": "object",
                        "default": {
                          "value": {
                            "initial": "{color.red.100}",
                            "dark": "{color.red.800}"
                          }
                        }
                      }
                    },
                    "type": "object",
                    "default": {
                      "primary": {
                        "value": {
                          "initial": "{color.red.50}",
                          "dark": "{color.red.900}"
                        }
                      },
                      "secondary": {
                        "value": {
                          "initial": "{color.red.100}",
                          "dark": "{color.red.800}"
                        }
                      }
                    }
                  },
                  "borderColor": {
                    "id": "#tokensConfig/elements/state/danger/borderColor",
                    "properties": {
                      "primary": {
                        "id": "#tokensConfig/elements/state/danger/borderColor/primary",
                        "properties": {
                          "value": {
                            "id": "#tokensConfig/elements/state/danger/borderColor/primary/value",
                            "properties": {
                              "initial": {
                                "type": "string",
                                "id": "#tokensConfig/elements/state/danger/borderColor/primary/value/initial",
                                "default": "{color.red.100}"
                              },
                              "dark": {
                                "type": "string",
                                "id": "#tokensConfig/elements/state/danger/borderColor/primary/value/dark",
                                "default": "{color.red.800}"
                              }
                            },
                            "type": "object",
                            "default": {
                              "initial": "{color.red.100}",
                              "dark": "{color.red.800}"
                            }
                          }
                        },
                        "type": "object",
                        "default": {
                          "value": {
                            "initial": "{color.red.100}",
                            "dark": "{color.red.800}"
                          }
                        }
                      },
                      "secondary": {
                        "id": "#tokensConfig/elements/state/danger/borderColor/secondary",
                        "properties": {
                          "value": {
                            "id": "#tokensConfig/elements/state/danger/borderColor/secondary/value",
                            "properties": {
                              "initial": {
                                "type": "string",
                                "id": "#tokensConfig/elements/state/danger/borderColor/secondary/value/initial",
                                "default": "{color.red.200}"
                              },
                              "dark": {
                                "type": "string",
                                "id": "#tokensConfig/elements/state/danger/borderColor/secondary/value/dark",
                                "default": "{color.red.700}"
                              }
                            },
                            "type": "object",
                            "default": {
                              "initial": "{color.red.200}",
                              "dark": "{color.red.700}"
                            }
                          }
                        },
                        "type": "object",
                        "default": {
                          "value": {
                            "initial": "{color.red.200}",
                            "dark": "{color.red.700}"
                          }
                        }
                      }
                    },
                    "type": "object",
                    "default": {
                      "primary": {
                        "value": {
                          "initial": "{color.red.100}",
                          "dark": "{color.red.800}"
                        }
                      },
                      "secondary": {
                        "value": {
                          "initial": "{color.red.200}",
                          "dark": "{color.red.700}"
                        }
                      }
                    }
                  }
                },
                "type": "object",
                "default": {
                  "color": {
                    "primary": {
                      "value": {
                        "initial": "{color.red.500}",
                        "dark": "{color.red.300}"
                      }
                    },
                    "secondary": {
                      "value": {
                        "initial": "{color.red.600}",
                        "dark": "{color.red.200}"
                      }
                    }
                  },
                  "backgroundColor": {
                    "primary": {
                      "value": {
                        "initial": "{color.red.50}",
                        "dark": "{color.red.900}"
                      }
                    },
                    "secondary": {
                      "value": {
                        "initial": "{color.red.100}",
                        "dark": "{color.red.800}"
                      }
                    }
                  },
                  "borderColor": {
                    "primary": {
                      "value": {
                        "initial": "{color.red.100}",
                        "dark": "{color.red.800}"
                      }
                    },
                    "secondary": {
                      "value": {
                        "initial": "{color.red.200}",
                        "dark": "{color.red.700}"
                      }
                    }
                  }
                }
              }
            },
            "type": "object",
            "default": {
              "primary": {
                "color": {
                  "primary": {
                    "value": {
                      "initial": "{color.primary.600}",
                      "dark": "{color.primary.400}"
                    }
                  },
                  "secondary": {
                    "value": {
                      "initial": "{color.primary.700}",
                      "dark": "{color.primary.200}"
                    }
                  }
                },
                "backgroundColor": {
                  "primary": {
                    "value": {
                      "initial": "{color.primary.50}",
                      "dark": "{color.primary.900}"
                    }
                  },
                  "secondary": {
                    "value": {
                      "initial": "{color.primary.100}",
                      "dark": "{color.primary.800}"
                    }
                  }
                },
                "borderColor": {
                  "primary": {
                    "value": {
                      "initial": "{color.primary.100}",
                      "dark": "{color.primary.800}"
                    }
                  },
                  "secondary": {
                    "value": {
                      "initial": "{color.primary.200}",
                      "dark": "{color.primary.700}"
                    }
                  }
                }
              },
              "info": {
                "color": {
                  "primary": {
                    "value": {
                      "initial": "{color.blue.500}",
                      "dark": "{color.blue.400}"
                    }
                  },
                  "secondary": {
                    "value": {
                      "initial": "{color.blue.600}",
                      "dark": "{color.blue.200}"
                    }
                  }
                },
                "backgroundColor": {
                  "primary": {
                    "value": {
                      "initial": "{color.blue.50}",
                      "dark": "{color.blue.900}"
                    }
                  },
                  "secondary": {
                    "value": {
                      "initial": "{color.blue.100}",
                      "dark": "{color.blue.800}"
                    }
                  }
                },
                "borderColor": {
                  "primary": {
                    "value": {
                      "initial": "{color.blue.100}",
                      "dark": "{color.blue.800}"
                    }
                  },
                  "secondary": {
                    "value": {
                      "initial": "{color.blue.200}",
                      "dark": "{color.blue.700}"
                    }
                  }
                }
              },
              "success": {
                "color": {
                  "primary": {
                    "value": {
                      "initial": "{color.green.500}",
                      "dark": "{color.green.400}"
                    }
                  },
                  "secondary": {
                    "value": {
                      "initial": "{color.green.600}",
                      "dark": "{color.green.200}"
                    }
                  }
                },
                "backgroundColor": {
                  "primary": {
                    "value": {
                      "initial": "{color.green.50}",
                      "dark": "{color.green.900}"
                    }
                  },
                  "secondary": {
                    "value": {
                      "initial": "{color.green.100}",
                      "dark": "{color.green.800}"
                    }
                  }
                },
                "borderColor": {
                  "primary": {
                    "value": {
                      "initial": "{color.green.100}",
                      "dark": "{color.green.800}"
                    }
                  },
                  "secondary": {
                    "value": {
                      "initial": "{color.green.200}",
                      "dark": "{color.green.700}"
                    }
                  }
                }
              },
              "warning": {
                "color": {
                  "primary": {
                    "value": {
                      "initial": "{color.yellow.600}",
                      "dark": "{color.yellow.400}"
                    }
                  },
                  "secondary": {
                    "value": {
                      "initial": "{color.yellow.700}",
                      "dark": "{color.yellow.200}"
                    }
                  }
                },
                "backgroundColor": {
                  "primary": {
                    "value": {
                      "initial": "{color.yellow.50}",
                      "dark": "{color.yellow.900}"
                    }
                  },
                  "secondary": {
                    "value": {
                      "initial": "{color.yellow.100}",
                      "dark": "{color.yellow.800}"
                    }
                  }
                },
                "borderColor": {
                  "primary": {
                    "value": {
                      "initial": "{color.yellow.100}",
                      "dark": "{color.yellow.800}"
                    }
                  },
                  "secondary": {
                    "value": {
                      "initial": "{color.yellow.200}",
                      "dark": "{color.yellow.700}"
                    }
                  }
                }
              },
              "danger": {
                "color": {
                  "primary": {
                    "value": {
                      "initial": "{color.red.500}",
                      "dark": "{color.red.300}"
                    }
                  },
                  "secondary": {
                    "value": {
                      "initial": "{color.red.600}",
                      "dark": "{color.red.200}"
                    }
                  }
                },
                "backgroundColor": {
                  "primary": {
                    "value": {
                      "initial": "{color.red.50}",
                      "dark": "{color.red.900}"
                    }
                  },
                  "secondary": {
                    "value": {
                      "initial": "{color.red.100}",
                      "dark": "{color.red.800}"
                    }
                  }
                },
                "borderColor": {
                  "primary": {
                    "value": {
                      "initial": "{color.red.100}",
                      "dark": "{color.red.800}"
                    }
                  },
                  "secondary": {
                    "value": {
                      "initial": "{color.red.200}",
                      "dark": "{color.red.700}"
                    }
                  }
                }
              }
            }
          }
        },
        "type": "object",
        "default": {
          "text": {
            "primary": {
              "color": {
                "static": {
                  "value": {
                    "initial": "{color.gray.900}",
                    "dark": "{color.gray.50}"
                  }
                },
                "hover": {}
              }
            },
            "secondary": {
              "color": {
                "static": {
                  "value": {
                    "initial": "{color.gray.500}",
                    "dark": "{color.gray.400}"
                  }
                },
                "hover": {
                  "value": {
                    "initial": "{color.gray.700}",
                    "dark": "{color.gray.200}"
                  }
                }
              }
            }
          },
          "container": {
            "maxWidth": {
              "value": "80rem"
            },
            "padding": {
              "mobile": {
                "value": "{space.4}"
              },
              "xs": {
                "value": "{space.4}"
              },
              "sm": {
                "value": "{space.6}"
              },
              "md": {
                "value": "{space.6}"
              }
            }
          },
          "backdrop": {
            "filter": {
              "value": "saturate(200%) blur(20px)"
            },
            "background": {
              "value": {
                "initial": "#fffc",
                "dark": "#0c0d0ccc"
              }
            }
          },
          "border": {
            "primary": {
              "static": {
                "value": {
                  "initial": "{color.gray.100}",
                  "dark": "{color.gray.900}"
                }
              },
              "hover": {
                "value": {
                  "initial": "{color.gray.200}",
                  "dark": "{color.gray.800}"
                }
              }
            },
            "secondary": {
              "static": {
                "value": {
                  "initial": "{color.gray.200}",
                  "dark": "{color.gray.800}"
                }
              },
              "hover": {
                "value": {
                  "initial": "",
                  "dark": ""
                }
              }
            }
          },
          "surface": {
            "background": {
              "base": {
                "value": {
                  "initial": "{color.gray.100}",
                  "dark": "{color.gray.900}"
                }
              }
            }
          },
          "state": {
            "primary": {
              "color": {
                "primary": {
                  "value": {
                    "initial": "{color.primary.600}",
                    "dark": "{color.primary.400}"
                  }
                },
                "secondary": {
                  "value": {
                    "initial": "{color.primary.700}",
                    "dark": "{color.primary.200}"
                  }
                }
              },
              "backgroundColor": {
                "primary": {
                  "value": {
                    "initial": "{color.primary.50}",
                    "dark": "{color.primary.900}"
                  }
                },
                "secondary": {
                  "value": {
                    "initial": "{color.primary.100}",
                    "dark": "{color.primary.800}"
                  }
                }
              },
              "borderColor": {
                "primary": {
                  "value": {
                    "initial": "{color.primary.100}",
                    "dark": "{color.primary.800}"
                  }
                },
                "secondary": {
                  "value": {
                    "initial": "{color.primary.200}",
                    "dark": "{color.primary.700}"
                  }
                }
              }
            },
            "info": {
              "color": {
                "primary": {
                  "value": {
                    "initial": "{color.blue.500}",
                    "dark": "{color.blue.400}"
                  }
                },
                "secondary": {
                  "value": {
                    "initial": "{color.blue.600}",
                    "dark": "{color.blue.200}"
                  }
                }
              },
              "backgroundColor": {
                "primary": {
                  "value": {
                    "initial": "{color.blue.50}",
                    "dark": "{color.blue.900}"
                  }
                },
                "secondary": {
                  "value": {
                    "initial": "{color.blue.100}",
                    "dark": "{color.blue.800}"
                  }
                }
              },
              "borderColor": {
                "primary": {
                  "value": {
                    "initial": "{color.blue.100}",
                    "dark": "{color.blue.800}"
                  }
                },
                "secondary": {
                  "value": {
                    "initial": "{color.blue.200}",
                    "dark": "{color.blue.700}"
                  }
                }
              }
            },
            "success": {
              "color": {
                "primary": {
                  "value": {
                    "initial": "{color.green.500}",
                    "dark": "{color.green.400}"
                  }
                },
                "secondary": {
                  "value": {
                    "initial": "{color.green.600}",
                    "dark": "{color.green.200}"
                  }
                }
              },
              "backgroundColor": {
                "primary": {
                  "value": {
                    "initial": "{color.green.50}",
                    "dark": "{color.green.900}"
                  }
                },
                "secondary": {
                  "value": {
                    "initial": "{color.green.100}",
                    "dark": "{color.green.800}"
                  }
                }
              },
              "borderColor": {
                "primary": {
                  "value": {
                    "initial": "{color.green.100}",
                    "dark": "{color.green.800}"
                  }
                },
                "secondary": {
                  "value": {
                    "initial": "{color.green.200}",
                    "dark": "{color.green.700}"
                  }
                }
              }
            },
            "warning": {
              "color": {
                "primary": {
                  "value": {
                    "initial": "{color.yellow.600}",
                    "dark": "{color.yellow.400}"
                  }
                },
                "secondary": {
                  "value": {
                    "initial": "{color.yellow.700}",
                    "dark": "{color.yellow.200}"
                  }
                }
              },
              "backgroundColor": {
                "primary": {
                  "value": {
                    "initial": "{color.yellow.50}",
                    "dark": "{color.yellow.900}"
                  }
                },
                "secondary": {
                  "value": {
                    "initial": "{color.yellow.100}",
                    "dark": "{color.yellow.800}"
                  }
                }
              },
              "borderColor": {
                "primary": {
                  "value": {
                    "initial": "{color.yellow.100}",
                    "dark": "{color.yellow.800}"
                  }
                },
                "secondary": {
                  "value": {
                    "initial": "{color.yellow.200}",
                    "dark": "{color.yellow.700}"
                  }
                }
              }
            },
            "danger": {
              "color": {
                "primary": {
                  "value": {
                    "initial": "{color.red.500}",
                    "dark": "{color.red.300}"
                  }
                },
                "secondary": {
                  "value": {
                    "initial": "{color.red.600}",
                    "dark": "{color.red.200}"
                  }
                }
              },
              "backgroundColor": {
                "primary": {
                  "value": {
                    "initial": "{color.red.50}",
                    "dark": "{color.red.900}"
                  }
                },
                "secondary": {
                  "value": {
                    "initial": "{color.red.100}",
                    "dark": "{color.red.800}"
                  }
                }
              },
              "borderColor": {
                "primary": {
                  "value": {
                    "initial": "{color.red.100}",
                    "dark": "{color.red.800}"
                  }
                },
                "secondary": {
                  "value": {
                    "initial": "{color.red.200}",
                    "dark": "{color.red.700}"
                  }
                }
              }
            }
          }
        }
      },
      "typography": {
        "title": "All the configurable tokens for your Typography.",
        "tags": [
          "@studioInput design-token",
          "@studioInputTokenType color",
          "@studioIcon material-symbols:article"
        ],
        "id": "#tokensConfig/typography",
        "properties": {
          "verticalMargin": {
            "title": "Vertical spacings between paragraphs.",
            "tags": [
              "@studioInput design-token",
              "@studioInputTokenType size",
              "@studioIcon mingcute:line-height-line"
            ],
            "id": "#tokensConfig/typography/verticalMargin",
            "properties": {
              "sm": {
                "id": "#tokensConfig/typography/verticalMargin/sm",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/typography/verticalMargin/sm/value",
                    "default": "16px"
                  }
                },
                "type": "object",
                "default": {
                  "value": "16px"
                }
              },
              "base": {
                "id": "#tokensConfig/typography/verticalMargin/base",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/typography/verticalMargin/base/value",
                    "default": "32px"
                  }
                },
                "type": "object",
                "default": {
                  "value": "32px"
                }
              }
            },
            "type": "object",
            "default": {
              "sm": {
                "value": "16px"
              },
              "base": {
                "value": "32px"
              }
            }
          },
          "letterSpacing": {
            "title": "Horizontal spacings between letters.",
            "tags": [
              "@studioInput design-token",
              "@studioInputTokenType size",
              "@studioIcon mingcute:letter-spacing-line"
            ],
            "id": "#tokensConfig/typography/letterSpacing",
            "properties": {
              "tight": {
                "id": "#tokensConfig/typography/letterSpacing/tight",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/typography/letterSpacing/tight/value",
                    "default": "-0.025em"
                  }
                },
                "type": "object",
                "default": {
                  "value": "-0.025em"
                }
              },
              "wide": {
                "id": "#tokensConfig/typography/letterSpacing/wide",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/typography/letterSpacing/wide/value",
                    "default": "0.025em"
                  }
                },
                "type": "object",
                "default": {
                  "value": "0.025em"
                }
              }
            },
            "type": "object",
            "default": {
              "tight": {
                "value": "-0.025em"
              },
              "wide": {
                "value": "0.025em"
              }
            }
          },
          "fontSize": {
            "title": "Horizontal spacings between letters.",
            "tags": [
              "@studioInput design-token",
              "@studioInputTokenType font-size",
              "@studioIcon mingcute:font-size-fill"
            ],
            "id": "#tokensConfig/typography/fontSize",
            "properties": {
              "xs": {
                "id": "#tokensConfig/typography/fontSize/xs",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/typography/fontSize/xs/value",
                    "default": "12px"
                  }
                },
                "type": "object",
                "default": {
                  "value": "12px"
                }
              },
              "sm": {
                "id": "#tokensConfig/typography/fontSize/sm",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/typography/fontSize/sm/value",
                    "default": "14px"
                  }
                },
                "type": "object",
                "default": {
                  "value": "14px"
                }
              },
              "base": {
                "id": "#tokensConfig/typography/fontSize/base",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/typography/fontSize/base/value",
                    "default": "16px"
                  }
                },
                "type": "object",
                "default": {
                  "value": "16px"
                }
              },
              "lg": {
                "id": "#tokensConfig/typography/fontSize/lg",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/typography/fontSize/lg/value",
                    "default": "18px"
                  }
                },
                "type": "object",
                "default": {
                  "value": "18px"
                }
              },
              "xl": {
                "id": "#tokensConfig/typography/fontSize/xl",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/typography/fontSize/xl/value",
                    "default": "20px"
                  }
                },
                "type": "object",
                "default": {
                  "value": "20px"
                }
              },
              "2xl": {
                "id": "#tokensConfig/typography/fontSize/2xl",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/typography/fontSize/2xl/value",
                    "default": "24px"
                  }
                },
                "type": "object",
                "default": {
                  "value": "24px"
                }
              },
              "3xl": {
                "id": "#tokensConfig/typography/fontSize/3xl",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/typography/fontSize/3xl/value",
                    "default": "30px"
                  }
                },
                "type": "object",
                "default": {
                  "value": "30px"
                }
              },
              "4xl": {
                "id": "#tokensConfig/typography/fontSize/4xl",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/typography/fontSize/4xl/value",
                    "default": "36px"
                  }
                },
                "type": "object",
                "default": {
                  "value": "36px"
                }
              },
              "5xl": {
                "id": "#tokensConfig/typography/fontSize/5xl",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/typography/fontSize/5xl/value",
                    "default": "48px"
                  }
                },
                "type": "object",
                "default": {
                  "value": "48px"
                }
              },
              "6xl": {
                "id": "#tokensConfig/typography/fontSize/6xl",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/typography/fontSize/6xl/value",
                    "default": "60px"
                  }
                },
                "type": "object",
                "default": {
                  "value": "60px"
                }
              },
              "7xl": {
                "id": "#tokensConfig/typography/fontSize/7xl",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/typography/fontSize/7xl/value",
                    "default": "72px"
                  }
                },
                "type": "object",
                "default": {
                  "value": "72px"
                }
              },
              "8xl": {
                "id": "#tokensConfig/typography/fontSize/8xl",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/typography/fontSize/8xl/value",
                    "default": "96px"
                  }
                },
                "type": "object",
                "default": {
                  "value": "96px"
                }
              },
              "9xl": {
                "id": "#tokensConfig/typography/fontSize/9xl",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/typography/fontSize/9xl/value",
                    "default": "128px"
                  }
                },
                "type": "object",
                "default": {
                  "value": "128px"
                }
              }
            },
            "type": "object",
            "default": {
              "xs": {
                "value": "12px"
              },
              "sm": {
                "value": "14px"
              },
              "base": {
                "value": "16px"
              },
              "lg": {
                "value": "18px"
              },
              "xl": {
                "value": "20px"
              },
              "2xl": {
                "value": "24px"
              },
              "3xl": {
                "value": "30px"
              },
              "4xl": {
                "value": "36px"
              },
              "5xl": {
                "value": "48px"
              },
              "6xl": {
                "value": "60px"
              },
              "7xl": {
                "value": "72px"
              },
              "8xl": {
                "value": "96px"
              },
              "9xl": {
                "value": "128px"
              }
            }
          },
          "fontWeight": {
            "title": "Font weights used in typography.",
            "tags": [
              "@studioInput design-token",
              "@studioInputTokenType font-size",
              "@studioIcon mingcute:bold-fill"
            ],
            "id": "#tokensConfig/typography/fontWeight",
            "properties": {
              "thin": {
                "id": "#tokensConfig/typography/fontWeight/thin",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/typography/fontWeight/thin/value",
                    "default": "100"
                  }
                },
                "type": "object",
                "default": {
                  "value": "100"
                }
              },
              "extralight": {
                "id": "#tokensConfig/typography/fontWeight/extralight",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/typography/fontWeight/extralight/value",
                    "default": "200"
                  }
                },
                "type": "object",
                "default": {
                  "value": "200"
                }
              },
              "light": {
                "id": "#tokensConfig/typography/fontWeight/light",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/typography/fontWeight/light/value",
                    "default": "300"
                  }
                },
                "type": "object",
                "default": {
                  "value": "300"
                }
              },
              "normal": {
                "id": "#tokensConfig/typography/fontWeight/normal",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/typography/fontWeight/normal/value",
                    "default": "400"
                  }
                },
                "type": "object",
                "default": {
                  "value": "400"
                }
              },
              "medium": {
                "id": "#tokensConfig/typography/fontWeight/medium",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/typography/fontWeight/medium/value",
                    "default": "500"
                  }
                },
                "type": "object",
                "default": {
                  "value": "500"
                }
              },
              "semibold": {
                "id": "#tokensConfig/typography/fontWeight/semibold",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/typography/fontWeight/semibold/value",
                    "default": "600"
                  }
                },
                "type": "object",
                "default": {
                  "value": "600"
                }
              },
              "bold": {
                "id": "#tokensConfig/typography/fontWeight/bold",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/typography/fontWeight/bold/value",
                    "default": "700"
                  }
                },
                "type": "object",
                "default": {
                  "value": "700"
                }
              },
              "extrabold": {
                "id": "#tokensConfig/typography/fontWeight/extrabold",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/typography/fontWeight/extrabold/value",
                    "default": "800"
                  }
                },
                "type": "object",
                "default": {
                  "value": "800"
                }
              },
              "black": {
                "id": "#tokensConfig/typography/fontWeight/black",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/typography/fontWeight/black/value",
                    "default": "900"
                  }
                },
                "type": "object",
                "default": {
                  "value": "900"
                }
              }
            },
            "type": "object",
            "default": {
              "thin": {
                "value": "100"
              },
              "extralight": {
                "value": "200"
              },
              "light": {
                "value": "300"
              },
              "normal": {
                "value": "400"
              },
              "medium": {
                "value": "500"
              },
              "semibold": {
                "value": "600"
              },
              "bold": {
                "value": "700"
              },
              "extrabold": {
                "value": "800"
              },
              "black": {
                "value": "900"
              }
            }
          },
          "lead": {
            "title": "Line heights used in your typography.",
            "tags": [
              "@studioInput design-token",
              "@studioInputTokenType font-size",
              "@studioIcon material-symbols:height-rounded"
            ],
            "id": "#tokensConfig/typography/lead",
            "properties": {
              "none": {
                "id": "#tokensConfig/typography/lead/none",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/typography/lead/none/value",
                    "default": "1"
                  }
                },
                "type": "object",
                "default": {
                  "value": "1"
                }
              },
              "tight": {
                "id": "#tokensConfig/typography/lead/tight",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/typography/lead/tight/value",
                    "default": "1.25"
                  }
                },
                "type": "object",
                "default": {
                  "value": "1.25"
                }
              },
              "snug": {
                "id": "#tokensConfig/typography/lead/snug",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/typography/lead/snug/value",
                    "default": "1.375"
                  }
                },
                "type": "object",
                "default": {
                  "value": "1.375"
                }
              },
              "normal": {
                "id": "#tokensConfig/typography/lead/normal",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/typography/lead/normal/value",
                    "default": "1.5"
                  }
                },
                "type": "object",
                "default": {
                  "value": "1.5"
                }
              },
              "relaxed": {
                "id": "#tokensConfig/typography/lead/relaxed",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/typography/lead/relaxed/value",
                    "default": "1.625"
                  }
                },
                "type": "object",
                "default": {
                  "value": "1.625"
                }
              },
              "loose": {
                "id": "#tokensConfig/typography/lead/loose",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/typography/lead/loose/value",
                    "default": "2"
                  }
                },
                "type": "object",
                "default": {
                  "value": "2"
                }
              }
            },
            "type": "object",
            "default": {
              "none": {
                "value": "1"
              },
              "tight": {
                "value": "1.25"
              },
              "snug": {
                "value": "1.375"
              },
              "normal": {
                "value": "1.5"
              },
              "relaxed": {
                "value": "1.625"
              },
              "loose": {
                "value": "2"
              }
            }
          },
          "font": {
            "title": "Your typography fonts",
            "tags": [
              "@studioInput design-token",
              "@studioInputTokenType font",
              "@studioIcon material-symbols:font-download-rounded"
            ],
            "id": "#tokensConfig/typography/font",
            "properties": {
              "display": {
                "id": "#tokensConfig/typography/font/display",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/typography/font/display/value",
                    "default": "{font.sans}"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{font.sans}"
                }
              },
              "body": {
                "id": "#tokensConfig/typography/font/body",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/typography/font/body/value",
                    "default": "{font.sans}"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{font.sans}"
                }
              },
              "code": {
                "id": "#tokensConfig/typography/font/code",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/typography/font/code/value",
                    "default": "{font.mono}"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{font.mono}"
                }
              }
            },
            "type": "object",
            "default": {
              "display": {
                "value": "{font.sans}"
              },
              "body": {
                "value": "{font.sans}"
              },
              "code": {
                "value": "{font.mono}"
              }
            }
          },
          "color": {
            "title": "Your typography color palette.",
            "tags": [
              "@studioInput design-token",
              "@studioInputTokenType color",
              "@studioIcon ph:palette"
            ],
            "id": "#tokensConfig/typography/color",
            "properties": {
              "primary": {
                "id": "#tokensConfig/typography/color/primary",
                "properties": {
                  "50": {
                    "id": "#tokensConfig/typography/color/primary/50",
                    "properties": {
                      "value": {
                        "type": "string",
                        "id": "#tokensConfig/typography/color/primary/50/value",
                        "default": "{color.primary.50}"
                      }
                    },
                    "type": "object",
                    "default": {
                      "value": "{color.primary.50}"
                    }
                  },
                  "100": {
                    "id": "#tokensConfig/typography/color/primary/100",
                    "properties": {
                      "value": {
                        "type": "string",
                        "id": "#tokensConfig/typography/color/primary/100/value",
                        "default": "{color.primary.100}"
                      }
                    },
                    "type": "object",
                    "default": {
                      "value": "{color.primary.100}"
                    }
                  },
                  "200": {
                    "id": "#tokensConfig/typography/color/primary/200",
                    "properties": {
                      "value": {
                        "type": "string",
                        "id": "#tokensConfig/typography/color/primary/200/value",
                        "default": "{color.primary.200}"
                      }
                    },
                    "type": "object",
                    "default": {
                      "value": "{color.primary.200}"
                    }
                  },
                  "300": {
                    "id": "#tokensConfig/typography/color/primary/300",
                    "properties": {
                      "value": {
                        "type": "string",
                        "id": "#tokensConfig/typography/color/primary/300/value",
                        "default": "{color.primary.300}"
                      }
                    },
                    "type": "object",
                    "default": {
                      "value": "{color.primary.300}"
                    }
                  },
                  "400": {
                    "id": "#tokensConfig/typography/color/primary/400",
                    "properties": {
                      "value": {
                        "type": "string",
                        "id": "#tokensConfig/typography/color/primary/400/value",
                        "default": "{color.primary.400}"
                      }
                    },
                    "type": "object",
                    "default": {
                      "value": "{color.primary.400}"
                    }
                  },
                  "500": {
                    "id": "#tokensConfig/typography/color/primary/500",
                    "properties": {
                      "value": {
                        "type": "string",
                        "id": "#tokensConfig/typography/color/primary/500/value",
                        "default": "{color.primary.500}"
                      }
                    },
                    "type": "object",
                    "default": {
                      "value": "{color.primary.500}"
                    }
                  },
                  "600": {
                    "id": "#tokensConfig/typography/color/primary/600",
                    "properties": {
                      "value": {
                        "type": "string",
                        "id": "#tokensConfig/typography/color/primary/600/value",
                        "default": "{color.primary.600}"
                      }
                    },
                    "type": "object",
                    "default": {
                      "value": "{color.primary.600}"
                    }
                  },
                  "700": {
                    "id": "#tokensConfig/typography/color/primary/700",
                    "properties": {
                      "value": {
                        "type": "string",
                        "id": "#tokensConfig/typography/color/primary/700/value",
                        "default": "{color.primary.700}"
                      }
                    },
                    "type": "object",
                    "default": {
                      "value": "{color.primary.700}"
                    }
                  },
                  "800": {
                    "id": "#tokensConfig/typography/color/primary/800",
                    "properties": {
                      "value": {
                        "type": "string",
                        "id": "#tokensConfig/typography/color/primary/800/value",
                        "default": "{color.primary.800}"
                      }
                    },
                    "type": "object",
                    "default": {
                      "value": "{color.primary.800}"
                    }
                  },
                  "900": {
                    "id": "#tokensConfig/typography/color/primary/900",
                    "properties": {
                      "value": {
                        "type": "string",
                        "id": "#tokensConfig/typography/color/primary/900/value",
                        "default": "{color.primary.900}"
                      }
                    },
                    "type": "object",
                    "default": {
                      "value": "{color.primary.900}"
                    }
                  }
                },
                "type": "object",
                "default": {
                  "50": {
                    "value": "{color.primary.50}"
                  },
                  "100": {
                    "value": "{color.primary.100}"
                  },
                  "200": {
                    "value": "{color.primary.200}"
                  },
                  "300": {
                    "value": "{color.primary.300}"
                  },
                  "400": {
                    "value": "{color.primary.400}"
                  },
                  "500": {
                    "value": "{color.primary.500}"
                  },
                  "600": {
                    "value": "{color.primary.600}"
                  },
                  "700": {
                    "value": "{color.primary.700}"
                  },
                  "800": {
                    "value": "{color.primary.800}"
                  },
                  "900": {
                    "value": "{color.primary.900}"
                  }
                }
              },
              "secondary": {
                "id": "#tokensConfig/typography/color/secondary",
                "properties": {
                  "50": {
                    "id": "#tokensConfig/typography/color/secondary/50",
                    "properties": {
                      "value": {
                        "type": "string",
                        "id": "#tokensConfig/typography/color/secondary/50/value",
                        "default": "{color.gray.50}"
                      }
                    },
                    "type": "object",
                    "default": {
                      "value": "{color.gray.50}"
                    }
                  },
                  "100": {
                    "id": "#tokensConfig/typography/color/secondary/100",
                    "properties": {
                      "value": {
                        "type": "string",
                        "id": "#tokensConfig/typography/color/secondary/100/value",
                        "default": "{color.gray.100}"
                      }
                    },
                    "type": "object",
                    "default": {
                      "value": "{color.gray.100}"
                    }
                  },
                  "200": {
                    "id": "#tokensConfig/typography/color/secondary/200",
                    "properties": {
                      "value": {
                        "type": "string",
                        "id": "#tokensConfig/typography/color/secondary/200/value",
                        "default": "{color.gray.200}"
                      }
                    },
                    "type": "object",
                    "default": {
                      "value": "{color.gray.200}"
                    }
                  },
                  "300": {
                    "id": "#tokensConfig/typography/color/secondary/300",
                    "properties": {
                      "value": {
                        "type": "string",
                        "id": "#tokensConfig/typography/color/secondary/300/value",
                        "default": "{color.gray.300}"
                      }
                    },
                    "type": "object",
                    "default": {
                      "value": "{color.gray.300}"
                    }
                  },
                  "400": {
                    "id": "#tokensConfig/typography/color/secondary/400",
                    "properties": {
                      "value": {
                        "type": "string",
                        "id": "#tokensConfig/typography/color/secondary/400/value",
                        "default": "{color.gray.400}"
                      }
                    },
                    "type": "object",
                    "default": {
                      "value": "{color.gray.400}"
                    }
                  },
                  "500": {
                    "id": "#tokensConfig/typography/color/secondary/500",
                    "properties": {
                      "value": {
                        "type": "string",
                        "id": "#tokensConfig/typography/color/secondary/500/value",
                        "default": "{color.gray.500}"
                      }
                    },
                    "type": "object",
                    "default": {
                      "value": "{color.gray.500}"
                    }
                  },
                  "600": {
                    "id": "#tokensConfig/typography/color/secondary/600",
                    "properties": {
                      "value": {
                        "type": "string",
                        "id": "#tokensConfig/typography/color/secondary/600/value",
                        "default": "{color.gray.600}"
                      }
                    },
                    "type": "object",
                    "default": {
                      "value": "{color.gray.600}"
                    }
                  },
                  "700": {
                    "id": "#tokensConfig/typography/color/secondary/700",
                    "properties": {
                      "value": {
                        "type": "string",
                        "id": "#tokensConfig/typography/color/secondary/700/value",
                        "default": "{color.gray.700}"
                      }
                    },
                    "type": "object",
                    "default": {
                      "value": "{color.gray.700}"
                    }
                  },
                  "800": {
                    "id": "#tokensConfig/typography/color/secondary/800",
                    "properties": {
                      "value": {
                        "type": "string",
                        "id": "#tokensConfig/typography/color/secondary/800/value",
                        "default": "{color.gray.800}"
                      }
                    },
                    "type": "object",
                    "default": {
                      "value": "{color.gray.800}"
                    }
                  },
                  "900": {
                    "id": "#tokensConfig/typography/color/secondary/900",
                    "properties": {
                      "value": {
                        "type": "string",
                        "id": "#tokensConfig/typography/color/secondary/900/value",
                        "default": "{color.gray.900}"
                      }
                    },
                    "type": "object",
                    "default": {
                      "value": "{color.gray.900}"
                    }
                  }
                },
                "type": "object",
                "default": {
                  "50": {
                    "value": "{color.gray.50}"
                  },
                  "100": {
                    "value": "{color.gray.100}"
                  },
                  "200": {
                    "value": "{color.gray.200}"
                  },
                  "300": {
                    "value": "{color.gray.300}"
                  },
                  "400": {
                    "value": "{color.gray.400}"
                  },
                  "500": {
                    "value": "{color.gray.500}"
                  },
                  "600": {
                    "value": "{color.gray.600}"
                  },
                  "700": {
                    "value": "{color.gray.700}"
                  },
                  "800": {
                    "value": "{color.gray.800}"
                  },
                  "900": {
                    "value": "{color.gray.900}"
                  }
                }
              }
            },
            "type": "object",
            "default": {
              "primary": {
                "50": {
                  "value": "{color.primary.50}"
                },
                "100": {
                  "value": "{color.primary.100}"
                },
                "200": {
                  "value": "{color.primary.200}"
                },
                "300": {
                  "value": "{color.primary.300}"
                },
                "400": {
                  "value": "{color.primary.400}"
                },
                "500": {
                  "value": "{color.primary.500}"
                },
                "600": {
                  "value": "{color.primary.600}"
                },
                "700": {
                  "value": "{color.primary.700}"
                },
                "800": {
                  "value": "{color.primary.800}"
                },
                "900": {
                  "value": "{color.primary.900}"
                }
              },
              "secondary": {
                "50": {
                  "value": "{color.gray.50}"
                },
                "100": {
                  "value": "{color.gray.100}"
                },
                "200": {
                  "value": "{color.gray.200}"
                },
                "300": {
                  "value": "{color.gray.300}"
                },
                "400": {
                  "value": "{color.gray.400}"
                },
                "500": {
                  "value": "{color.gray.500}"
                },
                "600": {
                  "value": "{color.gray.600}"
                },
                "700": {
                  "value": "{color.gray.700}"
                },
                "800": {
                  "value": "{color.gray.800}"
                },
                "900": {
                  "value": "{color.gray.900}"
                }
              }
            }
          }
        },
        "type": "object",
        "default": {
          "verticalMargin": {
            "sm": {
              "value": "16px"
            },
            "base": {
              "value": "32px"
            }
          },
          "letterSpacing": {
            "tight": {
              "value": "-0.025em"
            },
            "wide": {
              "value": "0.025em"
            }
          },
          "fontSize": {
            "xs": {
              "value": "12px"
            },
            "sm": {
              "value": "14px"
            },
            "base": {
              "value": "16px"
            },
            "lg": {
              "value": "18px"
            },
            "xl": {
              "value": "20px"
            },
            "2xl": {
              "value": "24px"
            },
            "3xl": {
              "value": "30px"
            },
            "4xl": {
              "value": "36px"
            },
            "5xl": {
              "value": "48px"
            },
            "6xl": {
              "value": "60px"
            },
            "7xl": {
              "value": "72px"
            },
            "8xl": {
              "value": "96px"
            },
            "9xl": {
              "value": "128px"
            }
          },
          "fontWeight": {
            "thin": {
              "value": "100"
            },
            "extralight": {
              "value": "200"
            },
            "light": {
              "value": "300"
            },
            "normal": {
              "value": "400"
            },
            "medium": {
              "value": "500"
            },
            "semibold": {
              "value": "600"
            },
            "bold": {
              "value": "700"
            },
            "extrabold": {
              "value": "800"
            },
            "black": {
              "value": "900"
            }
          },
          "lead": {
            "none": {
              "value": "1"
            },
            "tight": {
              "value": "1.25"
            },
            "snug": {
              "value": "1.375"
            },
            "normal": {
              "value": "1.5"
            },
            "relaxed": {
              "value": "1.625"
            },
            "loose": {
              "value": "2"
            }
          },
          "font": {
            "display": {
              "value": "{font.sans}"
            },
            "body": {
              "value": "{font.sans}"
            },
            "code": {
              "value": "{font.mono}"
            }
          },
          "color": {
            "primary": {
              "50": {
                "value": "{color.primary.50}"
              },
              "100": {
                "value": "{color.primary.100}"
              },
              "200": {
                "value": "{color.primary.200}"
              },
              "300": {
                "value": "{color.primary.300}"
              },
              "400": {
                "value": "{color.primary.400}"
              },
              "500": {
                "value": "{color.primary.500}"
              },
              "600": {
                "value": "{color.primary.600}"
              },
              "700": {
                "value": "{color.primary.700}"
              },
              "800": {
                "value": "{color.primary.800}"
              },
              "900": {
                "value": "{color.primary.900}"
              }
            },
            "secondary": {
              "50": {
                "value": "{color.gray.50}"
              },
              "100": {
                "value": "{color.gray.100}"
              },
              "200": {
                "value": "{color.gray.200}"
              },
              "300": {
                "value": "{color.gray.300}"
              },
              "400": {
                "value": "{color.gray.400}"
              },
              "500": {
                "value": "{color.gray.500}"
              },
              "600": {
                "value": "{color.gray.600}"
              },
              "700": {
                "value": "{color.gray.700}"
              },
              "800": {
                "value": "{color.gray.800}"
              },
              "900": {
                "value": "{color.gray.900}"
              }
            }
          }
        }
      },
      "prose": {
        "title": "All the configurable tokens for your Prose components.",
        "tags": [
          "@studioInput design-token",
          "@studioInputTokenType font-size",
          "@studioIcon lucide:component"
        ],
        "id": "#tokensConfig/prose",
        "properties": {
          "p": {
            "id": "#tokensConfig/prose/p",
            "properties": {
              "fontSize": {
                "id": "#tokensConfig/prose/p/fontSize",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/prose/p/fontSize/value",
                    "default": "{typography.fontSize.base}"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{typography.fontSize.base}"
                }
              },
              "lineHeight": {
                "id": "#tokensConfig/prose/p/lineHeight",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/prose/p/lineHeight/value",
                    "default": "{typography.lead.normal}"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{typography.lead.normal}"
                }
              },
              "margin": {
                "id": "#tokensConfig/prose/p/margin",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/prose/p/margin/value",
                    "default": "{typography.verticalMargin.base} 0"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{typography.verticalMargin.base} 0"
                }
              },
              "br": {
                "id": "#tokensConfig/prose/p/br",
                "properties": {
                  "margin": {
                    "id": "#tokensConfig/prose/p/br/margin",
                    "properties": {
                      "value": {
                        "type": "string",
                        "id": "#tokensConfig/prose/p/br/margin/value",
                        "default": "{typography.verticalMargin.base} 0 0 0"
                      }
                    },
                    "type": "object",
                    "default": {
                      "value": "{typography.verticalMargin.base} 0 0 0"
                    }
                  }
                },
                "type": "object",
                "default": {
                  "margin": {
                    "value": "{typography.verticalMargin.base} 0 0 0"
                  }
                }
              }
            },
            "type": "object",
            "default": {
              "fontSize": {
                "value": "{typography.fontSize.base}"
              },
              "lineHeight": {
                "value": "{typography.lead.normal}"
              },
              "margin": {
                "value": "{typography.verticalMargin.base} 0"
              },
              "br": {
                "margin": {
                  "value": "{typography.verticalMargin.base} 0 0 0"
                }
              }
            }
          },
          "h1": {
            "id": "#tokensConfig/prose/h1",
            "properties": {
              "margin": {
                "id": "#tokensConfig/prose/h1/margin",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/prose/h1/margin/value",
                    "default": "0 0 2rem"
                  }
                },
                "type": "object",
                "default": {
                  "value": "0 0 2rem"
                }
              },
              "fontSize": {
                "id": "#tokensConfig/prose/h1/fontSize",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/prose/h1/fontSize/value",
                    "default": "{typography.fontSize.5xl}"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{typography.fontSize.5xl}"
                }
              },
              "lineHeight": {
                "id": "#tokensConfig/prose/h1/lineHeight",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/prose/h1/lineHeight/value",
                    "default": "{typography.lead.tight}"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{typography.lead.tight}"
                }
              },
              "fontWeight": {
                "id": "#tokensConfig/prose/h1/fontWeight",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/prose/h1/fontWeight/value",
                    "default": "{typography.fontWeight.bold}"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{typography.fontWeight.bold}"
                }
              },
              "letterSpacing": {
                "id": "#tokensConfig/prose/h1/letterSpacing",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/prose/h1/letterSpacing/value",
                    "default": "{typography.letterSpacing.tight}"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{typography.letterSpacing.tight}"
                }
              },
              "iconSize": {
                "id": "#tokensConfig/prose/h1/iconSize",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/prose/h1/iconSize/value",
                    "default": "{typography.fontSize.3xl}"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{typography.fontSize.3xl}"
                }
              }
            },
            "type": "object",
            "default": {
              "margin": {
                "value": "0 0 2rem"
              },
              "fontSize": {
                "value": "{typography.fontSize.5xl}"
              },
              "lineHeight": {
                "value": "{typography.lead.tight}"
              },
              "fontWeight": {
                "value": "{typography.fontWeight.bold}"
              },
              "letterSpacing": {
                "value": "{typography.letterSpacing.tight}"
              },
              "iconSize": {
                "value": "{typography.fontSize.3xl}"
              }
            }
          },
          "h2": {
            "id": "#tokensConfig/prose/h2",
            "properties": {
              "margin": {
                "id": "#tokensConfig/prose/h2/margin",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/prose/h2/margin/value",
                    "default": "3rem 0 2rem"
                  }
                },
                "type": "object",
                "default": {
                  "value": "3rem 0 2rem"
                }
              },
              "fontSize": {
                "id": "#tokensConfig/prose/h2/fontSize",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/prose/h2/fontSize/value",
                    "default": "{typography.fontSize.4xl}"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{typography.fontSize.4xl}"
                }
              },
              "lineHeight": {
                "id": "#tokensConfig/prose/h2/lineHeight",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/prose/h2/lineHeight/value",
                    "default": "{typography.lead.tight}"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{typography.lead.tight}"
                }
              },
              "fontWeight": {
                "id": "#tokensConfig/prose/h2/fontWeight",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/prose/h2/fontWeight/value",
                    "default": "{typography.fontWeight.semibold}"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{typography.fontWeight.semibold}"
                }
              },
              "letterSpacing": {
                "id": "#tokensConfig/prose/h2/letterSpacing",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/prose/h2/letterSpacing/value",
                    "default": "{typography.letterSpacing.tight}"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{typography.letterSpacing.tight}"
                }
              },
              "iconSize": {
                "id": "#tokensConfig/prose/h2/iconSize",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/prose/h2/iconSize/value",
                    "default": "{typography.fontSize.2xl}"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{typography.fontSize.2xl}"
                }
              }
            },
            "type": "object",
            "default": {
              "margin": {
                "value": "3rem 0 2rem"
              },
              "fontSize": {
                "value": "{typography.fontSize.4xl}"
              },
              "lineHeight": {
                "value": "{typography.lead.tight}"
              },
              "fontWeight": {
                "value": "{typography.fontWeight.semibold}"
              },
              "letterSpacing": {
                "value": "{typography.letterSpacing.tight}"
              },
              "iconSize": {
                "value": "{typography.fontSize.2xl}"
              }
            }
          },
          "h3": {
            "id": "#tokensConfig/prose/h3",
            "properties": {
              "margin": {
                "id": "#tokensConfig/prose/h3/margin",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/prose/h3/margin/value",
                    "default": "3rem 0 2rem"
                  }
                },
                "type": "object",
                "default": {
                  "value": "3rem 0 2rem"
                }
              },
              "fontSize": {
                "id": "#tokensConfig/prose/h3/fontSize",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/prose/h3/fontSize/value",
                    "default": "{typography.fontSize.3xl}"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{typography.fontSize.3xl}"
                }
              },
              "lineHeight": {
                "id": "#tokensConfig/prose/h3/lineHeight",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/prose/h3/lineHeight/value",
                    "default": "{typography.lead.snug}"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{typography.lead.snug}"
                }
              },
              "fontWeight": {
                "id": "#tokensConfig/prose/h3/fontWeight",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/prose/h3/fontWeight/value",
                    "default": "{typography.fontWeight.semibold}"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{typography.fontWeight.semibold}"
                }
              },
              "letterSpacing": {
                "id": "#tokensConfig/prose/h3/letterSpacing",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/prose/h3/letterSpacing/value",
                    "default": "{typography.letterSpacing.tight}"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{typography.letterSpacing.tight}"
                }
              },
              "iconSize": {
                "id": "#tokensConfig/prose/h3/iconSize",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/prose/h3/iconSize/value",
                    "default": "{typography.fontSize.xl}"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{typography.fontSize.xl}"
                }
              }
            },
            "type": "object",
            "default": {
              "margin": {
                "value": "3rem 0 2rem"
              },
              "fontSize": {
                "value": "{typography.fontSize.3xl}"
              },
              "lineHeight": {
                "value": "{typography.lead.snug}"
              },
              "fontWeight": {
                "value": "{typography.fontWeight.semibold}"
              },
              "letterSpacing": {
                "value": "{typography.letterSpacing.tight}"
              },
              "iconSize": {
                "value": "{typography.fontSize.xl}"
              }
            }
          },
          "h4": {
            "id": "#tokensConfig/prose/h4",
            "properties": {
              "margin": {
                "id": "#tokensConfig/prose/h4/margin",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/prose/h4/margin/value",
                    "default": "3rem 0 2rem"
                  }
                },
                "type": "object",
                "default": {
                  "value": "3rem 0 2rem"
                }
              },
              "fontSize": {
                "id": "#tokensConfig/prose/h4/fontSize",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/prose/h4/fontSize/value",
                    "default": "{typography.fontSize.2xl}"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{typography.fontSize.2xl}"
                }
              },
              "lineHeight": {
                "id": "#tokensConfig/prose/h4/lineHeight",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/prose/h4/lineHeight/value",
                    "default": "{typography.lead.snug}"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{typography.lead.snug}"
                }
              },
              "fontWeight": {
                "id": "#tokensConfig/prose/h4/fontWeight",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/prose/h4/fontWeight/value",
                    "default": "{typography.fontWeight.semibold}"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{typography.fontWeight.semibold}"
                }
              },
              "letterSpacing": {
                "id": "#tokensConfig/prose/h4/letterSpacing",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/prose/h4/letterSpacing/value",
                    "default": "{typography.letterSpacing.tight}"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{typography.letterSpacing.tight}"
                }
              },
              "iconSize": {
                "id": "#tokensConfig/prose/h4/iconSize",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/prose/h4/iconSize/value",
                    "default": "{typography.fontSize.lg}"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{typography.fontSize.lg}"
                }
              }
            },
            "type": "object",
            "default": {
              "margin": {
                "value": "3rem 0 2rem"
              },
              "fontSize": {
                "value": "{typography.fontSize.2xl}"
              },
              "lineHeight": {
                "value": "{typography.lead.snug}"
              },
              "fontWeight": {
                "value": "{typography.fontWeight.semibold}"
              },
              "letterSpacing": {
                "value": "{typography.letterSpacing.tight}"
              },
              "iconSize": {
                "value": "{typography.fontSize.lg}"
              }
            }
          },
          "h5": {
            "id": "#tokensConfig/prose/h5",
            "properties": {
              "margin": {
                "id": "#tokensConfig/prose/h5/margin",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/prose/h5/margin/value",
                    "default": "3rem 0 2rem"
                  }
                },
                "type": "object",
                "default": {
                  "value": "3rem 0 2rem"
                }
              },
              "fontSize": {
                "id": "#tokensConfig/prose/h5/fontSize",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/prose/h5/fontSize/value",
                    "default": "{typography.fontSize.xl}"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{typography.fontSize.xl}"
                }
              },
              "lineHeight": {
                "id": "#tokensConfig/prose/h5/lineHeight",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/prose/h5/lineHeight/value",
                    "default": "{typography.lead.snug}"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{typography.lead.snug}"
                }
              },
              "fontWeight": {
                "id": "#tokensConfig/prose/h5/fontWeight",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/prose/h5/fontWeight/value",
                    "default": "{typography.fontWeight.semibold}"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{typography.fontWeight.semibold}"
                }
              },
              "iconSize": {
                "id": "#tokensConfig/prose/h5/iconSize",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/prose/h5/iconSize/value",
                    "default": "{typography.fontSize.lg}"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{typography.fontSize.lg}"
                }
              }
            },
            "type": "object",
            "default": {
              "margin": {
                "value": "3rem 0 2rem"
              },
              "fontSize": {
                "value": "{typography.fontSize.xl}"
              },
              "lineHeight": {
                "value": "{typography.lead.snug}"
              },
              "fontWeight": {
                "value": "{typography.fontWeight.semibold}"
              },
              "iconSize": {
                "value": "{typography.fontSize.lg}"
              }
            }
          },
          "h6": {
            "id": "#tokensConfig/prose/h6",
            "properties": {
              "margin": {
                "id": "#tokensConfig/prose/h6/margin",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/prose/h6/margin/value",
                    "default": "3rem 0 2rem"
                  }
                },
                "type": "object",
                "default": {
                  "value": "3rem 0 2rem"
                }
              },
              "fontSize": {
                "id": "#tokensConfig/prose/h6/fontSize",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/prose/h6/fontSize/value",
                    "default": "{typography.fontSize.lg}"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{typography.fontSize.lg}"
                }
              },
              "lineHeight": {
                "id": "#tokensConfig/prose/h6/lineHeight",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/prose/h6/lineHeight/value",
                    "default": "{typography.lead.normal}"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{typography.lead.normal}"
                }
              },
              "fontWeight": {
                "id": "#tokensConfig/prose/h6/fontWeight",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/prose/h6/fontWeight/value",
                    "default": "{typography.fontWeight.semibold}"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{typography.fontWeight.semibold}"
                }
              },
              "iconSize": {
                "id": "#tokensConfig/prose/h6/iconSize",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/prose/h6/iconSize/value",
                    "default": "{typography.fontSize.base}"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{typography.fontSize.base}"
                }
              }
            },
            "type": "object",
            "default": {
              "margin": {
                "value": "3rem 0 2rem"
              },
              "fontSize": {
                "value": "{typography.fontSize.lg}"
              },
              "lineHeight": {
                "value": "{typography.lead.normal}"
              },
              "fontWeight": {
                "value": "{typography.fontWeight.semibold}"
              },
              "iconSize": {
                "value": "{typography.fontSize.base}"
              }
            }
          },
          "strong": {
            "id": "#tokensConfig/prose/strong",
            "properties": {
              "fontWeight": {
                "id": "#tokensConfig/prose/strong/fontWeight",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/prose/strong/fontWeight/value",
                    "default": "{typography.fontWeight.semibold}"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{typography.fontWeight.semibold}"
                }
              }
            },
            "type": "object",
            "default": {
              "fontWeight": {
                "value": "{typography.fontWeight.semibold}"
              }
            }
          },
          "img": {
            "id": "#tokensConfig/prose/img",
            "properties": {
              "margin": {
                "id": "#tokensConfig/prose/img/margin",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/prose/img/margin/value",
                    "default": "{typography.verticalMargin.base} 0"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{typography.verticalMargin.base} 0"
                }
              }
            },
            "type": "object",
            "default": {
              "margin": {
                "value": "{typography.verticalMargin.base} 0"
              }
            }
          },
          "a": {
            "id": "#tokensConfig/prose/a",
            "properties": {
              "textDecoration": {
                "id": "#tokensConfig/prose/a/textDecoration",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/prose/a/textDecoration/value",
                    "default": "none"
                  }
                },
                "type": "object",
                "default": {
                  "value": "none"
                }
              },
              "color": {
                "id": "#tokensConfig/prose/a/color",
                "properties": {
                  "static": {
                    "id": "#tokensConfig/prose/a/color/static",
                    "properties": {
                      "value": {
                        "id": "#tokensConfig/prose/a/color/static/value",
                        "properties": {
                          "initial": {
                            "type": "string",
                            "id": "#tokensConfig/prose/a/color/static/value/initial",
                            "default": "inherit"
                          },
                          "dark": {
                            "type": "string",
                            "id": "#tokensConfig/prose/a/color/static/value/dark",
                            "default": "inherit"
                          }
                        },
                        "type": "object",
                        "default": {
                          "initial": "inherit",
                          "dark": "inherit"
                        }
                      }
                    },
                    "type": "object",
                    "default": {
                      "value": {
                        "initial": "inherit",
                        "dark": "inherit"
                      }
                    }
                  },
                  "hover": {
                    "id": "#tokensConfig/prose/a/color/hover",
                    "properties": {
                      "value": {
                        "id": "#tokensConfig/prose/a/color/hover/value",
                        "properties": {
                          "initial": {
                            "type": "string",
                            "id": "#tokensConfig/prose/a/color/hover/value/initial",
                            "default": "{typography.color.primary.500}"
                          },
                          "dark": {
                            "type": "string",
                            "id": "#tokensConfig/prose/a/color/hover/value/dark",
                            "default": "{typography.color.primary.400}"
                          }
                        },
                        "type": "object",
                        "default": {
                          "initial": "{typography.color.primary.500}",
                          "dark": "{typography.color.primary.400}"
                        }
                      }
                    },
                    "type": "object",
                    "default": {
                      "value": {
                        "initial": "{typography.color.primary.500}",
                        "dark": "{typography.color.primary.400}"
                      }
                    }
                  }
                },
                "type": "object",
                "default": {
                  "static": {
                    "value": {
                      "initial": "inherit",
                      "dark": "inherit"
                    }
                  },
                  "hover": {
                    "value": {
                      "initial": "{typography.color.primary.500}",
                      "dark": "{typography.color.primary.400}"
                    }
                  }
                }
              },
              "border": {
                "id": "#tokensConfig/prose/a/border",
                "properties": {
                  "width": {
                    "id": "#tokensConfig/prose/a/border/width",
                    "properties": {
                      "value": {
                        "type": "string",
                        "id": "#tokensConfig/prose/a/border/width/value",
                        "default": "1px"
                      }
                    },
                    "type": "object",
                    "default": {
                      "value": "1px"
                    }
                  },
                  "style": {
                    "id": "#tokensConfig/prose/a/border/style",
                    "properties": {
                      "static": {
                        "id": "#tokensConfig/prose/a/border/style/static",
                        "properties": {
                          "value": {
                            "type": "string",
                            "id": "#tokensConfig/prose/a/border/style/static/value",
                            "default": "dashed"
                          }
                        },
                        "type": "object",
                        "default": {
                          "value": "dashed"
                        }
                      },
                      "hover": {
                        "id": "#tokensConfig/prose/a/border/style/hover",
                        "properties": {
                          "value": {
                            "type": "string",
                            "id": "#tokensConfig/prose/a/border/style/hover/value",
                            "default": "solid"
                          }
                        },
                        "type": "object",
                        "default": {
                          "value": "solid"
                        }
                      }
                    },
                    "type": "object",
                    "default": {
                      "static": {
                        "value": "dashed"
                      },
                      "hover": {
                        "value": "solid"
                      }
                    }
                  },
                  "color": {
                    "id": "#tokensConfig/prose/a/border/color",
                    "properties": {
                      "static": {
                        "id": "#tokensConfig/prose/a/border/color/static",
                        "properties": {
                          "value": {
                            "id": "#tokensConfig/prose/a/border/color/static/value",
                            "properties": {
                              "initial": {
                                "type": "string",
                                "id": "#tokensConfig/prose/a/border/color/static/value/initial",
                                "default": "currentColor"
                              },
                              "dark": {
                                "type": "string",
                                "id": "#tokensConfig/prose/a/border/color/static/value/dark",
                                "default": "currentColor"
                              }
                            },
                            "type": "object",
                            "default": {
                              "initial": "currentColor",
                              "dark": "currentColor"
                            }
                          }
                        },
                        "type": "object",
                        "default": {
                          "value": {
                            "initial": "currentColor",
                            "dark": "currentColor"
                          }
                        }
                      },
                      "hover": {
                        "id": "#tokensConfig/prose/a/border/color/hover",
                        "properties": {
                          "value": {
                            "id": "#tokensConfig/prose/a/border/color/hover/value",
                            "properties": {
                              "initial": {
                                "type": "string",
                                "id": "#tokensConfig/prose/a/border/color/hover/value/initial",
                                "default": "currentColor"
                              },
                              "dark": {
                                "type": "string",
                                "id": "#tokensConfig/prose/a/border/color/hover/value/dark",
                                "default": "currentColor"
                              }
                            },
                            "type": "object",
                            "default": {
                              "initial": "currentColor",
                              "dark": "currentColor"
                            }
                          }
                        },
                        "type": "object",
                        "default": {
                          "value": {
                            "initial": "currentColor",
                            "dark": "currentColor"
                          }
                        }
                      }
                    },
                    "type": "object",
                    "default": {
                      "static": {
                        "value": {
                          "initial": "currentColor",
                          "dark": "currentColor"
                        }
                      },
                      "hover": {
                        "value": {
                          "initial": "currentColor",
                          "dark": "currentColor"
                        }
                      }
                    }
                  },
                  "distance": {
                    "id": "#tokensConfig/prose/a/border/distance",
                    "properties": {
                      "value": {
                        "type": "string",
                        "id": "#tokensConfig/prose/a/border/distance/value",
                        "default": "2px"
                      }
                    },
                    "type": "object",
                    "default": {
                      "value": "2px"
                    }
                  }
                },
                "type": "object",
                "default": {
                  "width": {
                    "value": "1px"
                  },
                  "style": {
                    "static": {
                      "value": "dashed"
                    },
                    "hover": {
                      "value": "solid"
                    }
                  },
                  "color": {
                    "static": {
                      "value": {
                        "initial": "currentColor",
                        "dark": "currentColor"
                      }
                    },
                    "hover": {
                      "value": {
                        "initial": "currentColor",
                        "dark": "currentColor"
                      }
                    }
                  },
                  "distance": {
                    "value": "2px"
                  }
                }
              },
              "fontWeight": {
                "id": "#tokensConfig/prose/a/fontWeight",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/prose/a/fontWeight/value",
                    "default": "{typography.fontWeight.medium}"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{typography.fontWeight.medium}"
                }
              },
              "hasCode": {
                "id": "#tokensConfig/prose/a/hasCode",
                "properties": {
                  "borderBottom": {
                    "id": "#tokensConfig/prose/a/hasCode/borderBottom",
                    "properties": {
                      "value": {
                        "type": "string",
                        "id": "#tokensConfig/prose/a/hasCode/borderBottom/value",
                        "default": "none"
                      }
                    },
                    "type": "object",
                    "default": {
                      "value": "none"
                    }
                  }
                },
                "type": "object",
                "default": {
                  "borderBottom": {
                    "value": "none"
                  }
                }
              },
              "code": {
                "id": "#tokensConfig/prose/a/code",
                "properties": {
                  "border": {
                    "id": "#tokensConfig/prose/a/code/border",
                    "properties": {
                      "width": {
                        "id": "#tokensConfig/prose/a/code/border/width",
                        "properties": {
                          "value": {
                            "type": "string",
                            "id": "#tokensConfig/prose/a/code/border/width/value",
                            "default": "{prose.a.border.width}"
                          }
                        },
                        "type": "object",
                        "default": {
                          "value": "{prose.a.border.width}"
                        }
                      },
                      "style": {
                        "id": "#tokensConfig/prose/a/code/border/style",
                        "properties": {
                          "value": {
                            "type": "string",
                            "id": "#tokensConfig/prose/a/code/border/style/value",
                            "default": "{prose.a.border.style.static}"
                          }
                        },
                        "type": "object",
                        "default": {
                          "value": "{prose.a.border.style.static}"
                        }
                      },
                      "color": {
                        "id": "#tokensConfig/prose/a/code/border/color",
                        "properties": {
                          "static": {
                            "id": "#tokensConfig/prose/a/code/border/color/static",
                            "properties": {
                              "value": {
                                "id": "#tokensConfig/prose/a/code/border/color/static/value",
                                "properties": {
                                  "initial": {
                                    "type": "string",
                                    "id": "#tokensConfig/prose/a/code/border/color/static/value/initial",
                                    "default": "{typography.color.secondary.400}"
                                  },
                                  "dark": {
                                    "type": "string",
                                    "id": "#tokensConfig/prose/a/code/border/color/static/value/dark",
                                    "default": "{typography.color.secondary.600}"
                                  }
                                },
                                "type": "object",
                                "default": {
                                  "initial": "{typography.color.secondary.400}",
                                  "dark": "{typography.color.secondary.600}"
                                }
                              }
                            },
                            "type": "object",
                            "default": {
                              "value": {
                                "initial": "{typography.color.secondary.400}",
                                "dark": "{typography.color.secondary.600}"
                              }
                            }
                          },
                          "hover": {
                            "id": "#tokensConfig/prose/a/code/border/color/hover",
                            "properties": {
                              "value": {
                                "id": "#tokensConfig/prose/a/code/border/color/hover/value",
                                "properties": {
                                  "initial": {
                                    "type": "string",
                                    "id": "#tokensConfig/prose/a/code/border/color/hover/value/initial",
                                    "default": "{typography.color.primary.500}"
                                  },
                                  "dark": {
                                    "type": "string",
                                    "id": "#tokensConfig/prose/a/code/border/color/hover/value/dark",
                                    "default": "{typography.color.primary.600}"
                                  }
                                },
                                "type": "object",
                                "default": {
                                  "initial": "{typography.color.primary.500}",
                                  "dark": "{typography.color.primary.600}"
                                }
                              }
                            },
                            "type": "object",
                            "default": {
                              "value": {
                                "initial": "{typography.color.primary.500}",
                                "dark": "{typography.color.primary.600}"
                              }
                            }
                          }
                        },
                        "type": "object",
                        "default": {
                          "static": {
                            "value": {
                              "initial": "{typography.color.secondary.400}",
                              "dark": "{typography.color.secondary.600}"
                            }
                          },
                          "hover": {
                            "value": {
                              "initial": "{typography.color.primary.500}",
                              "dark": "{typography.color.primary.600}"
                            }
                          }
                        }
                      }
                    },
                    "type": "object",
                    "default": {
                      "width": {
                        "value": "{prose.a.border.width}"
                      },
                      "style": {
                        "value": "{prose.a.border.style.static}"
                      },
                      "color": {
                        "static": {
                          "value": {
                            "initial": "{typography.color.secondary.400}",
                            "dark": "{typography.color.secondary.600}"
                          }
                        },
                        "hover": {
                          "value": {
                            "initial": "{typography.color.primary.500}",
                            "dark": "{typography.color.primary.600}"
                          }
                        }
                      }
                    }
                  },
                  "color": {
                    "id": "#tokensConfig/prose/a/code/color",
                    "properties": {
                      "static": {
                        "id": "#tokensConfig/prose/a/code/color/static",
                        "properties": {
                          "value": {
                            "id": "#tokensConfig/prose/a/code/color/static/value",
                            "properties": {
                              "initial": {
                                "type": "string",
                                "id": "#tokensConfig/prose/a/code/color/static/value/initial",
                                "default": "currentColor"
                              },
                              "dark": {
                                "type": "string",
                                "id": "#tokensConfig/prose/a/code/color/static/value/dark",
                                "default": "currentColor"
                              }
                            },
                            "type": "object",
                            "default": {
                              "initial": "currentColor",
                              "dark": "currentColor"
                            }
                          }
                        },
                        "type": "object",
                        "default": {
                          "value": {
                            "initial": "currentColor",
                            "dark": "currentColor"
                          }
                        }
                      },
                      "hover": {
                        "id": "#tokensConfig/prose/a/code/color/hover",
                        "properties": {
                          "value": {
                            "id": "#tokensConfig/prose/a/code/color/hover/value",
                            "properties": {
                              "initial": {
                                "type": "string",
                                "id": "#tokensConfig/prose/a/code/color/hover/value/initial",
                                "default": "currentColor"
                              },
                              "dark": {
                                "type": "string",
                                "id": "#tokensConfig/prose/a/code/color/hover/value/dark",
                                "default": "currentColor"
                              }
                            },
                            "type": "object",
                            "default": {
                              "initial": "currentColor",
                              "dark": "currentColor"
                            }
                          }
                        },
                        "type": "object",
                        "default": {
                          "value": {
                            "initial": "currentColor",
                            "dark": "currentColor"
                          }
                        }
                      }
                    },
                    "type": "object",
                    "default": {
                      "static": {
                        "value": {
                          "initial": "currentColor",
                          "dark": "currentColor"
                        }
                      },
                      "hover": {
                        "value": {
                          "initial": "currentColor",
                          "dark": "currentColor"
                        }
                      }
                    }
                  },
                  "background": {
                    "id": "#tokensConfig/prose/a/code/background",
                    "properties": {
                      "static": {
                        "id": "#tokensConfig/prose/a/code/background/static",
                        "type": "any",
                        "default": {}
                      },
                      "hover": {
                        "id": "#tokensConfig/prose/a/code/background/hover",
                        "properties": {
                          "value": {
                            "id": "#tokensConfig/prose/a/code/background/hover/value",
                            "properties": {
                              "initial": {
                                "type": "string",
                                "id": "#tokensConfig/prose/a/code/background/hover/value/initial",
                                "default": "{typography.color.primary.50}"
                              },
                              "dark": {
                                "type": "string",
                                "id": "#tokensConfig/prose/a/code/background/hover/value/dark",
                                "default": "{typography.color.primary.900}"
                              }
                            },
                            "type": "object",
                            "default": {
                              "initial": "{typography.color.primary.50}",
                              "dark": "{typography.color.primary.900}"
                            }
                          }
                        },
                        "type": "object",
                        "default": {
                          "value": {
                            "initial": "{typography.color.primary.50}",
                            "dark": "{typography.color.primary.900}"
                          }
                        }
                      }
                    },
                    "type": "object",
                    "default": {
                      "static": {},
                      "hover": {
                        "value": {
                          "initial": "{typography.color.primary.50}",
                          "dark": "{typography.color.primary.900}"
                        }
                      }
                    }
                  }
                },
                "type": "object",
                "default": {
                  "border": {
                    "width": {
                      "value": "{prose.a.border.width}"
                    },
                    "style": {
                      "value": "{prose.a.border.style.static}"
                    },
                    "color": {
                      "static": {
                        "value": {
                          "initial": "{typography.color.secondary.400}",
                          "dark": "{typography.color.secondary.600}"
                        }
                      },
                      "hover": {
                        "value": {
                          "initial": "{typography.color.primary.500}",
                          "dark": "{typography.color.primary.600}"
                        }
                      }
                    }
                  },
                  "color": {
                    "static": {
                      "value": {
                        "initial": "currentColor",
                        "dark": "currentColor"
                      }
                    },
                    "hover": {
                      "value": {
                        "initial": "currentColor",
                        "dark": "currentColor"
                      }
                    }
                  },
                  "background": {
                    "static": {},
                    "hover": {
                      "value": {
                        "initial": "{typography.color.primary.50}",
                        "dark": "{typography.color.primary.900}"
                      }
                    }
                  }
                }
              }
            },
            "type": "object",
            "default": {
              "textDecoration": {
                "value": "none"
              },
              "color": {
                "static": {
                  "value": {
                    "initial": "inherit",
                    "dark": "inherit"
                  }
                },
                "hover": {
                  "value": {
                    "initial": "{typography.color.primary.500}",
                    "dark": "{typography.color.primary.400}"
                  }
                }
              },
              "border": {
                "width": {
                  "value": "1px"
                },
                "style": {
                  "static": {
                    "value": "dashed"
                  },
                  "hover": {
                    "value": "solid"
                  }
                },
                "color": {
                  "static": {
                    "value": {
                      "initial": "currentColor",
                      "dark": "currentColor"
                    }
                  },
                  "hover": {
                    "value": {
                      "initial": "currentColor",
                      "dark": "currentColor"
                    }
                  }
                },
                "distance": {
                  "value": "2px"
                }
              },
              "fontWeight": {
                "value": "{typography.fontWeight.medium}"
              },
              "hasCode": {
                "borderBottom": {
                  "value": "none"
                }
              },
              "code": {
                "border": {
                  "width": {
                    "value": "{prose.a.border.width}"
                  },
                  "style": {
                    "value": "{prose.a.border.style.static}"
                  },
                  "color": {
                    "static": {
                      "value": {
                        "initial": "{typography.color.secondary.400}",
                        "dark": "{typography.color.secondary.600}"
                      }
                    },
                    "hover": {
                      "value": {
                        "initial": "{typography.color.primary.500}",
                        "dark": "{typography.color.primary.600}"
                      }
                    }
                  }
                },
                "color": {
                  "static": {
                    "value": {
                      "initial": "currentColor",
                      "dark": "currentColor"
                    }
                  },
                  "hover": {
                    "value": {
                      "initial": "currentColor",
                      "dark": "currentColor"
                    }
                  }
                },
                "background": {
                  "static": {},
                  "hover": {
                    "value": {
                      "initial": "{typography.color.primary.50}",
                      "dark": "{typography.color.primary.900}"
                    }
                  }
                }
              }
            }
          },
          "blockquote": {
            "id": "#tokensConfig/prose/blockquote",
            "properties": {
              "margin": {
                "id": "#tokensConfig/prose/blockquote/margin",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/prose/blockquote/margin/value",
                    "default": "{typography.verticalMargin.base} 0"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{typography.verticalMargin.base} 0"
                }
              },
              "padding": {
                "id": "#tokensConfig/prose/blockquote/padding",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/prose/blockquote/padding/value",
                    "default": "0 0 0 24px"
                  }
                },
                "type": "object",
                "default": {
                  "value": "0 0 0 24px"
                }
              },
              "quotes": {
                "id": "#tokensConfig/prose/blockquote/quotes",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/prose/blockquote/quotes/value",
                    "default": "'201C' '201D' '2018' '2019'"
                  }
                },
                "type": "object",
                "default": {
                  "value": "'201C' '201D' '2018' '2019'"
                }
              },
              "color": {
                "id": "#tokensConfig/prose/blockquote/color",
                "properties": {
                  "value": {
                    "id": "#tokensConfig/prose/blockquote/color/value",
                    "properties": {
                      "initial": {
                        "type": "string",
                        "id": "#tokensConfig/prose/blockquote/color/value/initial",
                        "default": "{typography.color.secondary.500}"
                      },
                      "dark": {
                        "type": "string",
                        "id": "#tokensConfig/prose/blockquote/color/value/dark",
                        "default": "{typography.color.secondary.400}"
                      }
                    },
                    "type": "object",
                    "default": {
                      "initial": "{typography.color.secondary.500}",
                      "dark": "{typography.color.secondary.400}"
                    }
                  }
                },
                "type": "object",
                "default": {
                  "value": {
                    "initial": "{typography.color.secondary.500}",
                    "dark": "{typography.color.secondary.400}"
                  }
                }
              },
              "border": {
                "id": "#tokensConfig/prose/blockquote/border",
                "properties": {
                  "width": {
                    "id": "#tokensConfig/prose/blockquote/border/width",
                    "properties": {
                      "value": {
                        "type": "string",
                        "id": "#tokensConfig/prose/blockquote/border/width/value",
                        "default": "4px"
                      }
                    },
                    "type": "object",
                    "default": {
                      "value": "4px"
                    }
                  },
                  "style": {
                    "id": "#tokensConfig/prose/blockquote/border/style",
                    "properties": {
                      "value": {
                        "type": "string",
                        "id": "#tokensConfig/prose/blockquote/border/style/value",
                        "default": "solid"
                      }
                    },
                    "type": "object",
                    "default": {
                      "value": "solid"
                    }
                  },
                  "color": {
                    "id": "#tokensConfig/prose/blockquote/border/color",
                    "properties": {
                      "value": {
                        "id": "#tokensConfig/prose/blockquote/border/color/value",
                        "properties": {
                          "initial": {
                            "type": "string",
                            "id": "#tokensConfig/prose/blockquote/border/color/value/initial",
                            "default": "{typography.color.secondary.200}"
                          },
                          "dark": {
                            "type": "string",
                            "id": "#tokensConfig/prose/blockquote/border/color/value/dark",
                            "default": "{typography.color.secondary.700}"
                          }
                        },
                        "type": "object",
                        "default": {
                          "initial": "{typography.color.secondary.200}",
                          "dark": "{typography.color.secondary.700}"
                        }
                      }
                    },
                    "type": "object",
                    "default": {
                      "value": {
                        "initial": "{typography.color.secondary.200}",
                        "dark": "{typography.color.secondary.700}"
                      }
                    }
                  }
                },
                "type": "object",
                "default": {
                  "width": {
                    "value": "4px"
                  },
                  "style": {
                    "value": "solid"
                  },
                  "color": {
                    "value": {
                      "initial": "{typography.color.secondary.200}",
                      "dark": "{typography.color.secondary.700}"
                    }
                  }
                }
              }
            },
            "type": "object",
            "default": {
              "margin": {
                "value": "{typography.verticalMargin.base} 0"
              },
              "padding": {
                "value": "0 0 0 24px"
              },
              "quotes": {
                "value": "'201C' '201D' '2018' '2019'"
              },
              "color": {
                "value": {
                  "initial": "{typography.color.secondary.500}",
                  "dark": "{typography.color.secondary.400}"
                }
              },
              "border": {
                "width": {
                  "value": "4px"
                },
                "style": {
                  "value": "solid"
                },
                "color": {
                  "value": {
                    "initial": "{typography.color.secondary.200}",
                    "dark": "{typography.color.secondary.700}"
                  }
                }
              }
            }
          },
          "ul": {
            "id": "#tokensConfig/prose/ul",
            "properties": {
              "listStyleType": {
                "id": "#tokensConfig/prose/ul/listStyleType",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/prose/ul/listStyleType/value",
                    "default": "disc"
                  }
                },
                "type": "object",
                "default": {
                  "value": "disc"
                }
              },
              "margin": {
                "id": "#tokensConfig/prose/ul/margin",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/prose/ul/margin/value",
                    "default": "{typography.verticalMargin.base} 0"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{typography.verticalMargin.base} 0"
                }
              },
              "padding": {
                "id": "#tokensConfig/prose/ul/padding",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/prose/ul/padding/value",
                    "default": "0 0 0 21px"
                  }
                },
                "type": "object",
                "default": {
                  "value": "0 0 0 21px"
                }
              },
              "li": {
                "id": "#tokensConfig/prose/ul/li",
                "properties": {
                  "markerColor": {
                    "id": "#tokensConfig/prose/ul/li/markerColor",
                    "properties": {
                      "value": {
                        "id": "#tokensConfig/prose/ul/li/markerColor/value",
                        "properties": {
                          "initial": {
                            "type": "string",
                            "id": "#tokensConfig/prose/ul/li/markerColor/value/initial",
                            "default": "{typography.color.secondary.400}"
                          },
                          "dark": {
                            "type": "string",
                            "id": "#tokensConfig/prose/ul/li/markerColor/value/dark",
                            "default": "{typography.color.secondary.500}"
                          }
                        },
                        "type": "object",
                        "default": {
                          "initial": "{typography.color.secondary.400}",
                          "dark": "{typography.color.secondary.500}"
                        }
                      }
                    },
                    "type": "object",
                    "default": {
                      "value": {
                        "initial": "{typography.color.secondary.400}",
                        "dark": "{typography.color.secondary.500}"
                      }
                    }
                  }
                },
                "type": "object",
                "default": {
                  "markerColor": {
                    "value": {
                      "initial": "{typography.color.secondary.400}",
                      "dark": "{typography.color.secondary.500}"
                    }
                  }
                }
              }
            },
            "type": "object",
            "default": {
              "listStyleType": {
                "value": "disc"
              },
              "margin": {
                "value": "{typography.verticalMargin.base} 0"
              },
              "padding": {
                "value": "0 0 0 21px"
              },
              "li": {
                "markerColor": {
                  "value": {
                    "initial": "{typography.color.secondary.400}",
                    "dark": "{typography.color.secondary.500}"
                  }
                }
              }
            }
          },
          "ol": {
            "id": "#tokensConfig/prose/ol",
            "properties": {
              "listStyleType": {
                "id": "#tokensConfig/prose/ol/listStyleType",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/prose/ol/listStyleType/value",
                    "default": "decimal"
                  }
                },
                "type": "object",
                "default": {
                  "value": "decimal"
                }
              },
              "margin": {
                "id": "#tokensConfig/prose/ol/margin",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/prose/ol/margin/value",
                    "default": "{typography.verticalMargin.base} 0"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{typography.verticalMargin.base} 0"
                }
              },
              "padding": {
                "id": "#tokensConfig/prose/ol/padding",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/prose/ol/padding/value",
                    "default": "0 0 0 21px"
                  }
                },
                "type": "object",
                "default": {
                  "value": "0 0 0 21px"
                }
              },
              "li": {
                "id": "#tokensConfig/prose/ol/li",
                "properties": {
                  "markerColor": {
                    "id": "#tokensConfig/prose/ol/li/markerColor",
                    "properties": {
                      "value": {
                        "id": "#tokensConfig/prose/ol/li/markerColor/value",
                        "properties": {
                          "initial": {
                            "type": "string",
                            "id": "#tokensConfig/prose/ol/li/markerColor/value/initial",
                            "default": "{typography.color.secondary.500}"
                          },
                          "dark": {
                            "type": "string",
                            "id": "#tokensConfig/prose/ol/li/markerColor/value/dark",
                            "default": "{typography.color.secondary.500}"
                          }
                        },
                        "type": "object",
                        "default": {
                          "initial": "{typography.color.secondary.500}",
                          "dark": "{typography.color.secondary.500}"
                        }
                      }
                    },
                    "type": "object",
                    "default": {
                      "value": {
                        "initial": "{typography.color.secondary.500}",
                        "dark": "{typography.color.secondary.500}"
                      }
                    }
                  }
                },
                "type": "object",
                "default": {
                  "markerColor": {
                    "value": {
                      "initial": "{typography.color.secondary.500}",
                      "dark": "{typography.color.secondary.500}"
                    }
                  }
                }
              }
            },
            "type": "object",
            "default": {
              "listStyleType": {
                "value": "decimal"
              },
              "margin": {
                "value": "{typography.verticalMargin.base} 0"
              },
              "padding": {
                "value": "0 0 0 21px"
              },
              "li": {
                "markerColor": {
                  "value": {
                    "initial": "{typography.color.secondary.500}",
                    "dark": "{typography.color.secondary.500}"
                  }
                }
              }
            }
          },
          "li": {
            "id": "#tokensConfig/prose/li",
            "properties": {
              "margin": {
                "id": "#tokensConfig/prose/li/margin",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/prose/li/margin/value",
                    "default": "{typography.verticalMargin.sm} 0"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{typography.verticalMargin.sm} 0"
                }
              },
              "listStylePosition": {
                "id": "#tokensConfig/prose/li/listStylePosition",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/prose/li/listStylePosition/value",
                    "default": "outside"
                  }
                },
                "type": "object",
                "default": {
                  "value": "outside"
                }
              }
            },
            "type": "object",
            "default": {
              "margin": {
                "value": "{typography.verticalMargin.sm} 0"
              },
              "listStylePosition": {
                "value": "outside"
              }
            }
          },
          "hr": {
            "id": "#tokensConfig/prose/hr",
            "properties": {
              "margin": {
                "id": "#tokensConfig/prose/hr/margin",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/prose/hr/margin/value",
                    "default": "{typography.verticalMargin.base} 0"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{typography.verticalMargin.base} 0"
                }
              },
              "style": {
                "id": "#tokensConfig/prose/hr/style",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/prose/hr/style/value",
                    "default": "solid"
                  }
                },
                "type": "object",
                "default": {
                  "value": "solid"
                }
              },
              "width": {
                "id": "#tokensConfig/prose/hr/width",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/prose/hr/width/value",
                    "default": "1px"
                  }
                },
                "type": "object",
                "default": {
                  "value": "1px"
                }
              },
              "color": {
                "id": "#tokensConfig/prose/hr/color",
                "properties": {
                  "value": {
                    "id": "#tokensConfig/prose/hr/color/value",
                    "properties": {
                      "initial": {
                        "type": "string",
                        "id": "#tokensConfig/prose/hr/color/value/initial",
                        "default": "{typography.color.secondary.200}"
                      },
                      "dark": {
                        "type": "string",
                        "id": "#tokensConfig/prose/hr/color/value/dark",
                        "default": "{typography.color.secondary.800}"
                      }
                    },
                    "type": "object",
                    "default": {
                      "initial": "{typography.color.secondary.200}",
                      "dark": "{typography.color.secondary.800}"
                    }
                  }
                },
                "type": "object",
                "default": {
                  "value": {
                    "initial": "{typography.color.secondary.200}",
                    "dark": "{typography.color.secondary.800}"
                  }
                }
              }
            },
            "type": "object",
            "default": {
              "margin": {
                "value": "{typography.verticalMargin.base} 0"
              },
              "style": {
                "value": "solid"
              },
              "width": {
                "value": "1px"
              },
              "color": {
                "value": {
                  "initial": "{typography.color.secondary.200}",
                  "dark": "{typography.color.secondary.800}"
                }
              }
            }
          },
          "table": {
            "id": "#tokensConfig/prose/table",
            "properties": {
              "margin": {
                "id": "#tokensConfig/prose/table/margin",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/prose/table/margin/value",
                    "default": "{typography.verticalMargin.base} 0"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{typography.verticalMargin.base} 0"
                }
              },
              "textAlign": {
                "id": "#tokensConfig/prose/table/textAlign",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/prose/table/textAlign/value",
                    "default": "left"
                  }
                },
                "type": "object",
                "default": {
                  "value": "left"
                }
              },
              "fontSize": {
                "id": "#tokensConfig/prose/table/fontSize",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/prose/table/fontSize/value",
                    "default": "{typography.fontSize.sm}"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{typography.fontSize.sm}"
                }
              },
              "lineHeight": {
                "id": "#tokensConfig/prose/table/lineHeight",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/prose/table/lineHeight/value",
                    "default": "inherit"
                  }
                },
                "type": "object",
                "default": {
                  "value": "inherit"
                }
              }
            },
            "type": "object",
            "default": {
              "margin": {
                "value": "{typography.verticalMargin.base} 0"
              },
              "textAlign": {
                "value": "left"
              },
              "fontSize": {
                "value": "{typography.fontSize.sm}"
              },
              "lineHeight": {
                "value": "inherit"
              }
            }
          },
          "thead": {
            "id": "#tokensConfig/prose/thead",
            "properties": {
              "border": {
                "id": "#tokensConfig/prose/thead/border",
                "properties": {
                  "width": {
                    "id": "#tokensConfig/prose/thead/border/width",
                    "properties": {
                      "value": {
                        "type": "string",
                        "id": "#tokensConfig/prose/thead/border/width/value",
                        "default": "0px"
                      }
                    },
                    "type": "object",
                    "default": {
                      "value": "0px"
                    }
                  },
                  "style": {
                    "id": "#tokensConfig/prose/thead/border/style",
                    "properties": {
                      "value": {
                        "type": "string",
                        "id": "#tokensConfig/prose/thead/border/style/value",
                        "default": "solid"
                      }
                    },
                    "type": "object",
                    "default": {
                      "value": "solid"
                    }
                  },
                  "color": {
                    "id": "#tokensConfig/prose/thead/border/color",
                    "properties": {
                      "value": {
                        "id": "#tokensConfig/prose/thead/border/color/value",
                        "properties": {
                          "initial": {
                            "type": "string",
                            "id": "#tokensConfig/prose/thead/border/color/value/initial",
                            "default": "{typography.color.secondary.300}"
                          },
                          "dark": {
                            "type": "string",
                            "id": "#tokensConfig/prose/thead/border/color/value/dark",
                            "default": "{typography.color.secondary.600}"
                          }
                        },
                        "type": "object",
                        "default": {
                          "initial": "{typography.color.secondary.300}",
                          "dark": "{typography.color.secondary.600}"
                        }
                      }
                    },
                    "type": "object",
                    "default": {
                      "value": {
                        "initial": "{typography.color.secondary.300}",
                        "dark": "{typography.color.secondary.600}"
                      }
                    }
                  }
                },
                "type": "object",
                "default": {
                  "width": {
                    "value": "0px"
                  },
                  "style": {
                    "value": "solid"
                  },
                  "color": {
                    "value": {
                      "initial": "{typography.color.secondary.300}",
                      "dark": "{typography.color.secondary.600}"
                    }
                  }
                }
              },
              "borderBottom": {
                "id": "#tokensConfig/prose/thead/borderBottom",
                "properties": {
                  "width": {
                    "id": "#tokensConfig/prose/thead/borderBottom/width",
                    "properties": {
                      "value": {
                        "type": "string",
                        "id": "#tokensConfig/prose/thead/borderBottom/width/value",
                        "default": "1px"
                      }
                    },
                    "type": "object",
                    "default": {
                      "value": "1px"
                    }
                  },
                  "style": {
                    "id": "#tokensConfig/prose/thead/borderBottom/style",
                    "properties": {
                      "value": {
                        "type": "string",
                        "id": "#tokensConfig/prose/thead/borderBottom/style/value",
                        "default": "solid"
                      }
                    },
                    "type": "object",
                    "default": {
                      "value": "solid"
                    }
                  },
                  "color": {
                    "id": "#tokensConfig/prose/thead/borderBottom/color",
                    "properties": {
                      "value": {
                        "id": "#tokensConfig/prose/thead/borderBottom/color/value",
                        "properties": {
                          "initial": {
                            "type": "string",
                            "id": "#tokensConfig/prose/thead/borderBottom/color/value/initial",
                            "default": "{typography.color.secondary.300}"
                          },
                          "dark": {
                            "type": "string",
                            "id": "#tokensConfig/prose/thead/borderBottom/color/value/dark",
                            "default": "{typography.color.secondary.600}"
                          }
                        },
                        "type": "object",
                        "default": {
                          "initial": "{typography.color.secondary.300}",
                          "dark": "{typography.color.secondary.600}"
                        }
                      }
                    },
                    "type": "object",
                    "default": {
                      "value": {
                        "initial": "{typography.color.secondary.300}",
                        "dark": "{typography.color.secondary.600}"
                      }
                    }
                  }
                },
                "type": "object",
                "default": {
                  "width": {
                    "value": "1px"
                  },
                  "style": {
                    "value": "solid"
                  },
                  "color": {
                    "value": {
                      "initial": "{typography.color.secondary.300}",
                      "dark": "{typography.color.secondary.600}"
                    }
                  }
                }
              }
            },
            "type": "object",
            "default": {
              "border": {
                "width": {
                  "value": "0px"
                },
                "style": {
                  "value": "solid"
                },
                "color": {
                  "value": {
                    "initial": "{typography.color.secondary.300}",
                    "dark": "{typography.color.secondary.600}"
                  }
                }
              },
              "borderBottom": {
                "width": {
                  "value": "1px"
                },
                "style": {
                  "value": "solid"
                },
                "color": {
                  "value": {
                    "initial": "{typography.color.secondary.300}",
                    "dark": "{typography.color.secondary.600}"
                  }
                }
              }
            }
          },
          "th": {
            "id": "#tokensConfig/prose/th",
            "properties": {
              "color": {
                "id": "#tokensConfig/prose/th/color",
                "properties": {
                  "value": {
                    "id": "#tokensConfig/prose/th/color/value",
                    "properties": {
                      "initial": {
                        "type": "string",
                        "id": "#tokensConfig/prose/th/color/value/initial",
                        "default": "{typography.color.secondary.600}"
                      },
                      "dark": {
                        "type": "string",
                        "id": "#tokensConfig/prose/th/color/value/dark",
                        "default": "{typography.color.secondary.400}"
                      }
                    },
                    "type": "object",
                    "default": {
                      "initial": "{typography.color.secondary.600}",
                      "dark": "{typography.color.secondary.400}"
                    }
                  }
                },
                "type": "object",
                "default": {
                  "value": {
                    "initial": "{typography.color.secondary.600}",
                    "dark": "{typography.color.secondary.400}"
                  }
                }
              },
              "padding": {
                "id": "#tokensConfig/prose/th/padding",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/prose/th/padding/value",
                    "default": "0 {typography.verticalMargin.sm} {typography.verticalMargin.sm} {typography.verticalMargin.sm}"
                  }
                },
                "type": "object",
                "default": {
                  "value": "0 {typography.verticalMargin.sm} {typography.verticalMargin.sm} {typography.verticalMargin.sm}"
                }
              },
              "fontWeight": {
                "id": "#tokensConfig/prose/th/fontWeight",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/prose/th/fontWeight/value",
                    "default": "{typography.fontWeight.semibold}"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{typography.fontWeight.semibold}"
                }
              }
            },
            "type": "object",
            "default": {
              "color": {
                "value": {
                  "initial": "{typography.color.secondary.600}",
                  "dark": "{typography.color.secondary.400}"
                }
              },
              "padding": {
                "value": "0 {typography.verticalMargin.sm} {typography.verticalMargin.sm} {typography.verticalMargin.sm}"
              },
              "fontWeight": {
                "value": "{typography.fontWeight.semibold}"
              }
            }
          },
          "tbody": {
            "id": "#tokensConfig/prose/tbody",
            "properties": {
              "tr": {
                "id": "#tokensConfig/prose/tbody/tr",
                "properties": {
                  "borderBottom": {
                    "id": "#tokensConfig/prose/tbody/tr/borderBottom",
                    "properties": {
                      "width": {
                        "id": "#tokensConfig/prose/tbody/tr/borderBottom/width",
                        "properties": {
                          "value": {
                            "type": "string",
                            "id": "#tokensConfig/prose/tbody/tr/borderBottom/width/value",
                            "default": "1px"
                          }
                        },
                        "type": "object",
                        "default": {
                          "value": "1px"
                        }
                      },
                      "style": {
                        "id": "#tokensConfig/prose/tbody/tr/borderBottom/style",
                        "properties": {
                          "value": {
                            "type": "string",
                            "id": "#tokensConfig/prose/tbody/tr/borderBottom/style/value",
                            "default": "dashed"
                          }
                        },
                        "type": "object",
                        "default": {
                          "value": "dashed"
                        }
                      },
                      "color": {
                        "id": "#tokensConfig/prose/tbody/tr/borderBottom/color",
                        "properties": {
                          "value": {
                            "id": "#tokensConfig/prose/tbody/tr/borderBottom/color/value",
                            "properties": {
                              "initial": {
                                "type": "string",
                                "id": "#tokensConfig/prose/tbody/tr/borderBottom/color/value/initial",
                                "default": "{typography.color.secondary.300}"
                              },
                              "dark": {
                                "type": "string",
                                "id": "#tokensConfig/prose/tbody/tr/borderBottom/color/value/dark",
                                "default": "{typography.color.secondary.700}"
                              }
                            },
                            "type": "object",
                            "default": {
                              "initial": "{typography.color.secondary.300}",
                              "dark": "{typography.color.secondary.700}"
                            }
                          }
                        },
                        "type": "object",
                        "default": {
                          "value": {
                            "initial": "{typography.color.secondary.300}",
                            "dark": "{typography.color.secondary.700}"
                          }
                        }
                      }
                    },
                    "type": "object",
                    "default": {
                      "width": {
                        "value": "1px"
                      },
                      "style": {
                        "value": "dashed"
                      },
                      "color": {
                        "value": {
                          "initial": "{typography.color.secondary.300}",
                          "dark": "{typography.color.secondary.700}"
                        }
                      }
                    }
                  }
                },
                "type": "object",
                "default": {
                  "borderBottom": {
                    "width": {
                      "value": "1px"
                    },
                    "style": {
                      "value": "dashed"
                    },
                    "color": {
                      "value": {
                        "initial": "{typography.color.secondary.300}",
                        "dark": "{typography.color.secondary.700}"
                      }
                    }
                  }
                }
              },
              "td": {
                "id": "#tokensConfig/prose/tbody/td",
                "properties": {
                  "padding": {
                    "id": "#tokensConfig/prose/tbody/td/padding",
                    "properties": {
                      "value": {
                        "type": "string",
                        "id": "#tokensConfig/prose/tbody/td/padding/value",
                        "default": "{typography.verticalMargin.sm}"
                      }
                    },
                    "type": "object",
                    "default": {
                      "value": "{typography.verticalMargin.sm}"
                    }
                  }
                },
                "type": "object",
                "default": {
                  "padding": {
                    "value": "{typography.verticalMargin.sm}"
                  }
                }
              },
              "code": {
                "id": "#tokensConfig/prose/tbody/code",
                "properties": {
                  "inline": {
                    "id": "#tokensConfig/prose/tbody/code/inline",
                    "properties": {
                      "fontSize": {
                        "id": "#tokensConfig/prose/tbody/code/inline/fontSize",
                        "properties": {
                          "value": {
                            "type": "string",
                            "id": "#tokensConfig/prose/tbody/code/inline/fontSize/value",
                            "default": "{typography.fontSize.sm}"
                          }
                        },
                        "type": "object",
                        "default": {
                          "value": "{typography.fontSize.sm}"
                        }
                      }
                    },
                    "type": "object",
                    "default": {
                      "fontSize": {
                        "value": "{typography.fontSize.sm}"
                      }
                    }
                  }
                },
                "type": "object",
                "default": {
                  "inline": {
                    "fontSize": {
                      "value": "{typography.fontSize.sm}"
                    }
                  }
                }
              }
            },
            "type": "object",
            "default": {
              "tr": {
                "borderBottom": {
                  "width": {
                    "value": "1px"
                  },
                  "style": {
                    "value": "dashed"
                  },
                  "color": {
                    "value": {
                      "initial": "{typography.color.secondary.300}",
                      "dark": "{typography.color.secondary.700}"
                    }
                  }
                }
              },
              "td": {
                "padding": {
                  "value": "{typography.verticalMargin.sm}"
                }
              },
              "code": {
                "inline": {
                  "fontSize": {
                    "value": "{typography.fontSize.sm}"
                  }
                }
              }
            }
          },
          "code": {
            "id": "#tokensConfig/prose/code",
            "properties": {
              "block": {
                "id": "#tokensConfig/prose/code/block",
                "properties": {
                  "fontSize": {
                    "id": "#tokensConfig/prose/code/block/fontSize",
                    "properties": {
                      "value": {
                        "type": "string",
                        "id": "#tokensConfig/prose/code/block/fontSize/value",
                        "default": "{typography.fontSize.sm}"
                      }
                    },
                    "type": "object",
                    "default": {
                      "value": "{typography.fontSize.sm}"
                    }
                  },
                  "margin": {
                    "id": "#tokensConfig/prose/code/block/margin",
                    "properties": {
                      "value": {
                        "type": "string",
                        "id": "#tokensConfig/prose/code/block/margin/value",
                        "default": "{typography.verticalMargin.base} 0"
                      }
                    },
                    "type": "object",
                    "default": {
                      "value": "{typography.verticalMargin.base} 0"
                    }
                  },
                  "border": {
                    "id": "#tokensConfig/prose/code/block/border",
                    "properties": {
                      "width": {
                        "id": "#tokensConfig/prose/code/block/border/width",
                        "properties": {
                          "value": {
                            "type": "string",
                            "id": "#tokensConfig/prose/code/block/border/width/value",
                            "default": "1px"
                          }
                        },
                        "type": "object",
                        "default": {
                          "value": "1px"
                        }
                      },
                      "style": {
                        "id": "#tokensConfig/prose/code/block/border/style",
                        "properties": {
                          "value": {
                            "type": "string",
                            "id": "#tokensConfig/prose/code/block/border/style/value",
                            "default": "solid"
                          }
                        },
                        "type": "object",
                        "default": {
                          "value": "solid"
                        }
                      },
                      "color": {
                        "id": "#tokensConfig/prose/code/block/border/color",
                        "properties": {
                          "value": {
                            "id": "#tokensConfig/prose/code/block/border/color/value",
                            "properties": {
                              "initial": {
                                "type": "string",
                                "id": "#tokensConfig/prose/code/block/border/color/value/initial",
                                "default": "{typography.color.secondary.200}"
                              },
                              "dark": {
                                "type": "string",
                                "id": "#tokensConfig/prose/code/block/border/color/value/dark",
                                "default": "{typography.color.secondary.800}"
                              }
                            },
                            "type": "object",
                            "default": {
                              "initial": "{typography.color.secondary.200}",
                              "dark": "{typography.color.secondary.800}"
                            }
                          }
                        },
                        "type": "object",
                        "default": {
                          "value": {
                            "initial": "{typography.color.secondary.200}",
                            "dark": "{typography.color.secondary.800}"
                          }
                        }
                      }
                    },
                    "type": "object",
                    "default": {
                      "width": {
                        "value": "1px"
                      },
                      "style": {
                        "value": "solid"
                      },
                      "color": {
                        "value": {
                          "initial": "{typography.color.secondary.200}",
                          "dark": "{typography.color.secondary.800}"
                        }
                      }
                    }
                  },
                  "color": {
                    "id": "#tokensConfig/prose/code/block/color",
                    "properties": {
                      "value": {
                        "id": "#tokensConfig/prose/code/block/color/value",
                        "properties": {
                          "initial": {
                            "type": "string",
                            "id": "#tokensConfig/prose/code/block/color/value/initial",
                            "default": "{typography.color.secondary.700}"
                          },
                          "dark": {
                            "type": "string",
                            "id": "#tokensConfig/prose/code/block/color/value/dark",
                            "default": "{typography.color.secondary.200}"
                          }
                        },
                        "type": "object",
                        "default": {
                          "initial": "{typography.color.secondary.700}",
                          "dark": "{typography.color.secondary.200}"
                        }
                      }
                    },
                    "type": "object",
                    "default": {
                      "value": {
                        "initial": "{typography.color.secondary.700}",
                        "dark": "{typography.color.secondary.200}"
                      }
                    }
                  },
                  "backgroundColor": {
                    "id": "#tokensConfig/prose/code/block/backgroundColor",
                    "properties": {
                      "value": {
                        "id": "#tokensConfig/prose/code/block/backgroundColor/value",
                        "properties": {
                          "initial": {
                            "type": "string",
                            "id": "#tokensConfig/prose/code/block/backgroundColor/value/initial",
                            "default": "{typography.color.secondary.100}"
                          },
                          "dark": {
                            "type": "string",
                            "id": "#tokensConfig/prose/code/block/backgroundColor/value/dark",
                            "default": "{typography.color.secondary.900}"
                          }
                        },
                        "type": "object",
                        "default": {
                          "initial": "{typography.color.secondary.100}",
                          "dark": "{typography.color.secondary.900}"
                        }
                      }
                    },
                    "type": "object",
                    "default": {
                      "value": {
                        "initial": "{typography.color.secondary.100}",
                        "dark": "{typography.color.secondary.900}"
                      }
                    }
                  },
                  "pre": {
                    "id": "#tokensConfig/prose/code/block/pre",
                    "properties": {
                      "padding": {
                        "id": "#tokensConfig/prose/code/block/pre/padding",
                        "properties": {
                          "value": {
                            "type": "string",
                            "id": "#tokensConfig/prose/code/block/pre/padding/value",
                            "default": "{typography.verticalMargin.sm}"
                          }
                        },
                        "type": "object",
                        "default": {
                          "value": "{typography.verticalMargin.sm}"
                        }
                      }
                    },
                    "type": "object",
                    "default": {
                      "padding": {
                        "value": "{typography.verticalMargin.sm}"
                      }
                    }
                  }
                },
                "type": "object",
                "default": {
                  "fontSize": {
                    "value": "{typography.fontSize.sm}"
                  },
                  "margin": {
                    "value": "{typography.verticalMargin.base} 0"
                  },
                  "border": {
                    "width": {
                      "value": "1px"
                    },
                    "style": {
                      "value": "solid"
                    },
                    "color": {
                      "value": {
                        "initial": "{typography.color.secondary.200}",
                        "dark": "{typography.color.secondary.800}"
                      }
                    }
                  },
                  "color": {
                    "value": {
                      "initial": "{typography.color.secondary.700}",
                      "dark": "{typography.color.secondary.200}"
                    }
                  },
                  "backgroundColor": {
                    "value": {
                      "initial": "{typography.color.secondary.100}",
                      "dark": "{typography.color.secondary.900}"
                    }
                  },
                  "pre": {
                    "padding": {
                      "value": "{typography.verticalMargin.sm}"
                    }
                  }
                }
              },
              "inline": {
                "id": "#tokensConfig/prose/code/inline",
                "properties": {
                  "borderRadius": {
                    "id": "#tokensConfig/prose/code/inline/borderRadius",
                    "properties": {
                      "value": {
                        "type": "string",
                        "id": "#tokensConfig/prose/code/inline/borderRadius/value",
                        "default": "0.375rem"
                      }
                    },
                    "type": "object",
                    "default": {
                      "value": "0.375rem"
                    }
                  },
                  "padding": {
                    "id": "#tokensConfig/prose/code/inline/padding",
                    "properties": {
                      "value": {
                        "type": "string",
                        "id": "#tokensConfig/prose/code/inline/padding/value",
                        "default": "0.25rem 0.375rem 0.25rem 0.375rem"
                      }
                    },
                    "type": "object",
                    "default": {
                      "value": "0.25rem 0.375rem 0.25rem 0.375rem"
                    }
                  },
                  "fontSize": {
                    "id": "#tokensConfig/prose/code/inline/fontSize",
                    "properties": {
                      "value": {
                        "type": "string",
                        "id": "#tokensConfig/prose/code/inline/fontSize/value",
                        "default": "{typography.fontSize.sm}"
                      }
                    },
                    "type": "object",
                    "default": {
                      "value": "{typography.fontSize.sm}"
                    }
                  },
                  "fontWeight": {
                    "id": "#tokensConfig/prose/code/inline/fontWeight",
                    "properties": {
                      "value": {
                        "type": "string",
                        "id": "#tokensConfig/prose/code/inline/fontWeight/value",
                        "default": "{typography.fontWeight.normal}"
                      }
                    },
                    "type": "object",
                    "default": {
                      "value": "{typography.fontWeight.normal}"
                    }
                  },
                  "color": {
                    "id": "#tokensConfig/prose/code/inline/color",
                    "properties": {
                      "value": {
                        "id": "#tokensConfig/prose/code/inline/color/value",
                        "properties": {
                          "initial": {
                            "type": "string",
                            "id": "#tokensConfig/prose/code/inline/color/value/initial",
                            "default": "{typography.color.secondary.700}"
                          },
                          "dark": {
                            "type": "string",
                            "id": "#tokensConfig/prose/code/inline/color/value/dark",
                            "default": "{typography.color.secondary.200}"
                          }
                        },
                        "type": "object",
                        "default": {
                          "initial": "{typography.color.secondary.700}",
                          "dark": "{typography.color.secondary.200}"
                        }
                      }
                    },
                    "type": "object",
                    "default": {
                      "value": {
                        "initial": "{typography.color.secondary.700}",
                        "dark": "{typography.color.secondary.200}"
                      }
                    }
                  },
                  "backgroundColor": {
                    "id": "#tokensConfig/prose/code/inline/backgroundColor",
                    "properties": {
                      "value": {
                        "id": "#tokensConfig/prose/code/inline/backgroundColor/value",
                        "properties": {
                          "initial": {
                            "type": "string",
                            "id": "#tokensConfig/prose/code/inline/backgroundColor/value/initial",
                            "default": "{typography.color.secondary.100}"
                          },
                          "dark": {
                            "type": "string",
                            "id": "#tokensConfig/prose/code/inline/backgroundColor/value/dark",
                            "default": "{typography.color.secondary.900}"
                          }
                        },
                        "type": "object",
                        "default": {
                          "initial": "{typography.color.secondary.100}",
                          "dark": "{typography.color.secondary.900}"
                        }
                      }
                    },
                    "type": "object",
                    "default": {
                      "value": {
                        "initial": "{typography.color.secondary.100}",
                        "dark": "{typography.color.secondary.900}"
                      }
                    }
                  }
                },
                "type": "object",
                "default": {
                  "borderRadius": {
                    "value": "0.375rem"
                  },
                  "padding": {
                    "value": "0.25rem 0.375rem 0.25rem 0.375rem"
                  },
                  "fontSize": {
                    "value": "{typography.fontSize.sm}"
                  },
                  "fontWeight": {
                    "value": "{typography.fontWeight.normal}"
                  },
                  "color": {
                    "value": {
                      "initial": "{typography.color.secondary.700}",
                      "dark": "{typography.color.secondary.200}"
                    }
                  },
                  "backgroundColor": {
                    "value": {
                      "initial": "{typography.color.secondary.100}",
                      "dark": "{typography.color.secondary.900}"
                    }
                  }
                }
              }
            },
            "type": "object",
            "default": {
              "block": {
                "fontSize": {
                  "value": "{typography.fontSize.sm}"
                },
                "margin": {
                  "value": "{typography.verticalMargin.base} 0"
                },
                "border": {
                  "width": {
                    "value": "1px"
                  },
                  "style": {
                    "value": "solid"
                  },
                  "color": {
                    "value": {
                      "initial": "{typography.color.secondary.200}",
                      "dark": "{typography.color.secondary.800}"
                    }
                  }
                },
                "color": {
                  "value": {
                    "initial": "{typography.color.secondary.700}",
                    "dark": "{typography.color.secondary.200}"
                  }
                },
                "backgroundColor": {
                  "value": {
                    "initial": "{typography.color.secondary.100}",
                    "dark": "{typography.color.secondary.900}"
                  }
                },
                "pre": {
                  "padding": {
                    "value": "{typography.verticalMargin.sm}"
                  }
                }
              },
              "inline": {
                "borderRadius": {
                  "value": "0.375rem"
                },
                "padding": {
                  "value": "0.25rem 0.375rem 0.25rem 0.375rem"
                },
                "fontSize": {
                  "value": "{typography.fontSize.sm}"
                },
                "fontWeight": {
                  "value": "{typography.fontWeight.normal}"
                },
                "color": {
                  "value": {
                    "initial": "{typography.color.secondary.700}",
                    "dark": "{typography.color.secondary.200}"
                  }
                },
                "backgroundColor": {
                  "value": {
                    "initial": "{typography.color.secondary.100}",
                    "dark": "{typography.color.secondary.900}"
                  }
                }
              }
            }
          }
        },
        "type": "object",
        "default": {
          "p": {
            "fontSize": {
              "value": "{typography.fontSize.base}"
            },
            "lineHeight": {
              "value": "{typography.lead.normal}"
            },
            "margin": {
              "value": "{typography.verticalMargin.base} 0"
            },
            "br": {
              "margin": {
                "value": "{typography.verticalMargin.base} 0 0 0"
              }
            }
          },
          "h1": {
            "margin": {
              "value": "0 0 2rem"
            },
            "fontSize": {
              "value": "{typography.fontSize.5xl}"
            },
            "lineHeight": {
              "value": "{typography.lead.tight}"
            },
            "fontWeight": {
              "value": "{typography.fontWeight.bold}"
            },
            "letterSpacing": {
              "value": "{typography.letterSpacing.tight}"
            },
            "iconSize": {
              "value": "{typography.fontSize.3xl}"
            }
          },
          "h2": {
            "margin": {
              "value": "3rem 0 2rem"
            },
            "fontSize": {
              "value": "{typography.fontSize.4xl}"
            },
            "lineHeight": {
              "value": "{typography.lead.tight}"
            },
            "fontWeight": {
              "value": "{typography.fontWeight.semibold}"
            },
            "letterSpacing": {
              "value": "{typography.letterSpacing.tight}"
            },
            "iconSize": {
              "value": "{typography.fontSize.2xl}"
            }
          },
          "h3": {
            "margin": {
              "value": "3rem 0 2rem"
            },
            "fontSize": {
              "value": "{typography.fontSize.3xl}"
            },
            "lineHeight": {
              "value": "{typography.lead.snug}"
            },
            "fontWeight": {
              "value": "{typography.fontWeight.semibold}"
            },
            "letterSpacing": {
              "value": "{typography.letterSpacing.tight}"
            },
            "iconSize": {
              "value": "{typography.fontSize.xl}"
            }
          },
          "h4": {
            "margin": {
              "value": "3rem 0 2rem"
            },
            "fontSize": {
              "value": "{typography.fontSize.2xl}"
            },
            "lineHeight": {
              "value": "{typography.lead.snug}"
            },
            "fontWeight": {
              "value": "{typography.fontWeight.semibold}"
            },
            "letterSpacing": {
              "value": "{typography.letterSpacing.tight}"
            },
            "iconSize": {
              "value": "{typography.fontSize.lg}"
            }
          },
          "h5": {
            "margin": {
              "value": "3rem 0 2rem"
            },
            "fontSize": {
              "value": "{typography.fontSize.xl}"
            },
            "lineHeight": {
              "value": "{typography.lead.snug}"
            },
            "fontWeight": {
              "value": "{typography.fontWeight.semibold}"
            },
            "iconSize": {
              "value": "{typography.fontSize.lg}"
            }
          },
          "h6": {
            "margin": {
              "value": "3rem 0 2rem"
            },
            "fontSize": {
              "value": "{typography.fontSize.lg}"
            },
            "lineHeight": {
              "value": "{typography.lead.normal}"
            },
            "fontWeight": {
              "value": "{typography.fontWeight.semibold}"
            },
            "iconSize": {
              "value": "{typography.fontSize.base}"
            }
          },
          "strong": {
            "fontWeight": {
              "value": "{typography.fontWeight.semibold}"
            }
          },
          "img": {
            "margin": {
              "value": "{typography.verticalMargin.base} 0"
            }
          },
          "a": {
            "textDecoration": {
              "value": "none"
            },
            "color": {
              "static": {
                "value": {
                  "initial": "inherit",
                  "dark": "inherit"
                }
              },
              "hover": {
                "value": {
                  "initial": "{typography.color.primary.500}",
                  "dark": "{typography.color.primary.400}"
                }
              }
            },
            "border": {
              "width": {
                "value": "1px"
              },
              "style": {
                "static": {
                  "value": "dashed"
                },
                "hover": {
                  "value": "solid"
                }
              },
              "color": {
                "static": {
                  "value": {
                    "initial": "currentColor",
                    "dark": "currentColor"
                  }
                },
                "hover": {
                  "value": {
                    "initial": "currentColor",
                    "dark": "currentColor"
                  }
                }
              },
              "distance": {
                "value": "2px"
              }
            },
            "fontWeight": {
              "value": "{typography.fontWeight.medium}"
            },
            "hasCode": {
              "borderBottom": {
                "value": "none"
              }
            },
            "code": {
              "border": {
                "width": {
                  "value": "{prose.a.border.width}"
                },
                "style": {
                  "value": "{prose.a.border.style.static}"
                },
                "color": {
                  "static": {
                    "value": {
                      "initial": "{typography.color.secondary.400}",
                      "dark": "{typography.color.secondary.600}"
                    }
                  },
                  "hover": {
                    "value": {
                      "initial": "{typography.color.primary.500}",
                      "dark": "{typography.color.primary.600}"
                    }
                  }
                }
              },
              "color": {
                "static": {
                  "value": {
                    "initial": "currentColor",
                    "dark": "currentColor"
                  }
                },
                "hover": {
                  "value": {
                    "initial": "currentColor",
                    "dark": "currentColor"
                  }
                }
              },
              "background": {
                "static": {},
                "hover": {
                  "value": {
                    "initial": "{typography.color.primary.50}",
                    "dark": "{typography.color.primary.900}"
                  }
                }
              }
            }
          },
          "blockquote": {
            "margin": {
              "value": "{typography.verticalMargin.base} 0"
            },
            "padding": {
              "value": "0 0 0 24px"
            },
            "quotes": {
              "value": "'201C' '201D' '2018' '2019'"
            },
            "color": {
              "value": {
                "initial": "{typography.color.secondary.500}",
                "dark": "{typography.color.secondary.400}"
              }
            },
            "border": {
              "width": {
                "value": "4px"
              },
              "style": {
                "value": "solid"
              },
              "color": {
                "value": {
                  "initial": "{typography.color.secondary.200}",
                  "dark": "{typography.color.secondary.700}"
                }
              }
            }
          },
          "ul": {
            "listStyleType": {
              "value": "disc"
            },
            "margin": {
              "value": "{typography.verticalMargin.base} 0"
            },
            "padding": {
              "value": "0 0 0 21px"
            },
            "li": {
              "markerColor": {
                "value": {
                  "initial": "{typography.color.secondary.400}",
                  "dark": "{typography.color.secondary.500}"
                }
              }
            }
          },
          "ol": {
            "listStyleType": {
              "value": "decimal"
            },
            "margin": {
              "value": "{typography.verticalMargin.base} 0"
            },
            "padding": {
              "value": "0 0 0 21px"
            },
            "li": {
              "markerColor": {
                "value": {
                  "initial": "{typography.color.secondary.500}",
                  "dark": "{typography.color.secondary.500}"
                }
              }
            }
          },
          "li": {
            "margin": {
              "value": "{typography.verticalMargin.sm} 0"
            },
            "listStylePosition": {
              "value": "outside"
            }
          },
          "hr": {
            "margin": {
              "value": "{typography.verticalMargin.base} 0"
            },
            "style": {
              "value": "solid"
            },
            "width": {
              "value": "1px"
            },
            "color": {
              "value": {
                "initial": "{typography.color.secondary.200}",
                "dark": "{typography.color.secondary.800}"
              }
            }
          },
          "table": {
            "margin": {
              "value": "{typography.verticalMargin.base} 0"
            },
            "textAlign": {
              "value": "left"
            },
            "fontSize": {
              "value": "{typography.fontSize.sm}"
            },
            "lineHeight": {
              "value": "inherit"
            }
          },
          "thead": {
            "border": {
              "width": {
                "value": "0px"
              },
              "style": {
                "value": "solid"
              },
              "color": {
                "value": {
                  "initial": "{typography.color.secondary.300}",
                  "dark": "{typography.color.secondary.600}"
                }
              }
            },
            "borderBottom": {
              "width": {
                "value": "1px"
              },
              "style": {
                "value": "solid"
              },
              "color": {
                "value": {
                  "initial": "{typography.color.secondary.300}",
                  "dark": "{typography.color.secondary.600}"
                }
              }
            }
          },
          "th": {
            "color": {
              "value": {
                "initial": "{typography.color.secondary.600}",
                "dark": "{typography.color.secondary.400}"
              }
            },
            "padding": {
              "value": "0 {typography.verticalMargin.sm} {typography.verticalMargin.sm} {typography.verticalMargin.sm}"
            },
            "fontWeight": {
              "value": "{typography.fontWeight.semibold}"
            }
          },
          "tbody": {
            "tr": {
              "borderBottom": {
                "width": {
                  "value": "1px"
                },
                "style": {
                  "value": "dashed"
                },
                "color": {
                  "value": {
                    "initial": "{typography.color.secondary.300}",
                    "dark": "{typography.color.secondary.700}"
                  }
                }
              }
            },
            "td": {
              "padding": {
                "value": "{typography.verticalMargin.sm}"
              }
            },
            "code": {
              "inline": {
                "fontSize": {
                  "value": "{typography.fontSize.sm}"
                }
              }
            }
          },
          "code": {
            "block": {
              "fontSize": {
                "value": "{typography.fontSize.sm}"
              },
              "margin": {
                "value": "{typography.verticalMargin.base} 0"
              },
              "border": {
                "width": {
                  "value": "1px"
                },
                "style": {
                  "value": "solid"
                },
                "color": {
                  "value": {
                    "initial": "{typography.color.secondary.200}",
                    "dark": "{typography.color.secondary.800}"
                  }
                }
              },
              "color": {
                "value": {
                  "initial": "{typography.color.secondary.700}",
                  "dark": "{typography.color.secondary.200}"
                }
              },
              "backgroundColor": {
                "value": {
                  "initial": "{typography.color.secondary.100}",
                  "dark": "{typography.color.secondary.900}"
                }
              },
              "pre": {
                "padding": {
                  "value": "{typography.verticalMargin.sm}"
                }
              }
            },
            "inline": {
              "borderRadius": {
                "value": "0.375rem"
              },
              "padding": {
                "value": "0.25rem 0.375rem 0.25rem 0.375rem"
              },
              "fontSize": {
                "value": "{typography.fontSize.sm}"
              },
              "fontWeight": {
                "value": "{typography.fontWeight.normal}"
              },
              "color": {
                "value": {
                  "initial": "{typography.color.secondary.700}",
                  "dark": "{typography.color.secondary.200}"
                }
              },
              "backgroundColor": {
                "value": {
                  "initial": "{typography.color.secondary.100}",
                  "dark": "{typography.color.secondary.900}"
                }
              }
            }
          }
        }
      },
      "radii": {
        "title": "Your website border radiuses.",
        "tags": [
          "@studioInput design-token",
          "@studioInpuTokenType size",
          "@studioIcon material-symbols:rounded-corner",
          "@studioInputTokenType size"
        ],
        "id": "#tokensConfig/radii",
        "properties": {
          "sm": {
            "id": "#tokensConfig/radii/sm",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/radii/sm/value",
                "default": "0.375rem"
              }
            },
            "type": "object",
            "default": {
              "value": "0.375rem"
            }
          },
          "md": {
            "id": "#tokensConfig/radii/md",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/radii/md/value",
                "default": "0.5rem"
              }
            },
            "type": "object",
            "default": {
              "value": "0.5rem"
            }
          },
          "lg": {
            "id": "#tokensConfig/radii/lg",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/radii/lg/value",
                "default": "0.75rem"
              }
            },
            "type": "object",
            "default": {
              "value": "0.75rem"
            }
          },
          "none": {
            "id": "#tokensConfig/radii/none",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/radii/none/value",
                "default": "0px"
              }
            },
            "type": "object",
            "default": {
              "value": "0px"
            }
          },
          "2xs": {
            "id": "#tokensConfig/radii/2xs",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/radii/2xs/value",
                "default": "0.125rem"
              }
            },
            "type": "object",
            "default": {
              "value": "0.125rem"
            }
          },
          "xs": {
            "id": "#tokensConfig/radii/xs",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/radii/xs/value",
                "default": "0.25rem"
              }
            },
            "type": "object",
            "default": {
              "value": "0.25rem"
            }
          },
          "xl": {
            "id": "#tokensConfig/radii/xl",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/radii/xl/value",
                "default": "1rem"
              }
            },
            "type": "object",
            "default": {
              "value": "1rem"
            }
          },
          "2xl": {
            "id": "#tokensConfig/radii/2xl",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/radii/2xl/value",
                "default": "1.5rem"
              }
            },
            "type": "object",
            "default": {
              "value": "1.5rem"
            }
          },
          "3xl": {
            "id": "#tokensConfig/radii/3xl",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/radii/3xl/value",
                "default": "1.75rem"
              }
            },
            "type": "object",
            "default": {
              "value": "1.75rem"
            }
          },
          "full": {
            "id": "#tokensConfig/radii/full",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/radii/full/value",
                "default": "9999px"
              }
            },
            "type": "object",
            "default": {
              "value": "9999px"
            }
          }
        },
        "type": "object",
        "default": {
          "sm": {
            "value": "0.375rem"
          },
          "md": {
            "value": "0.5rem"
          },
          "lg": {
            "value": "0.75rem"
          },
          "none": {
            "value": "0px"
          },
          "2xs": {
            "value": "0.125rem"
          },
          "xs": {
            "value": "0.25rem"
          },
          "xl": {
            "value": "1rem"
          },
          "2xl": {
            "value": "1.5rem"
          },
          "3xl": {
            "value": "1.75rem"
          },
          "full": {
            "value": "9999px"
          }
        }
      },
      "fontSize": {
        "title": "Your website font sizes.",
        "tags": [
          "@studioInput design-token",
          "@studioInputTokenType font-size",
          "@studioIcon radix-icons:font-style"
        ],
        "id": "#tokensConfig/fontSize",
        "properties": {
          "xs": {
            "id": "#tokensConfig/fontSize/xs",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/fontSize/xs/value",
                "default": "0.75rem"
              }
            },
            "type": "object",
            "default": {
              "value": "0.75rem"
            }
          },
          "sm": {
            "id": "#tokensConfig/fontSize/sm",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/fontSize/sm/value",
                "default": "0.875rem"
              }
            },
            "type": "object",
            "default": {
              "value": "0.875rem"
            }
          },
          "base": {
            "id": "#tokensConfig/fontSize/base",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/fontSize/base/value",
                "default": "1rem"
              }
            },
            "type": "object",
            "default": {
              "value": "1rem"
            }
          },
          "lg": {
            "id": "#tokensConfig/fontSize/lg",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/fontSize/lg/value",
                "default": "1.125rem"
              }
            },
            "type": "object",
            "default": {
              "value": "1.125rem"
            }
          },
          "xl": {
            "id": "#tokensConfig/fontSize/xl",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/fontSize/xl/value",
                "default": "1.25rem"
              }
            },
            "type": "object",
            "default": {
              "value": "1.25rem"
            }
          },
          "2xl": {
            "id": "#tokensConfig/fontSize/2xl",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/fontSize/2xl/value",
                "default": "1.5rem"
              }
            },
            "type": "object",
            "default": {
              "value": "1.5rem"
            }
          },
          "3xl": {
            "id": "#tokensConfig/fontSize/3xl",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/fontSize/3xl/value",
                "default": "1.875rem"
              }
            },
            "type": "object",
            "default": {
              "value": "1.875rem"
            }
          },
          "4xl": {
            "id": "#tokensConfig/fontSize/4xl",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/fontSize/4xl/value",
                "default": "2.25rem"
              }
            },
            "type": "object",
            "default": {
              "value": "2.25rem"
            }
          },
          "5xl": {
            "id": "#tokensConfig/fontSize/5xl",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/fontSize/5xl/value",
                "default": "3rem"
              }
            },
            "type": "object",
            "default": {
              "value": "3rem"
            }
          },
          "6xl": {
            "id": "#tokensConfig/fontSize/6xl",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/fontSize/6xl/value",
                "default": "3.75rem"
              }
            },
            "type": "object",
            "default": {
              "value": "3.75rem"
            }
          },
          "7xl": {
            "id": "#tokensConfig/fontSize/7xl",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/fontSize/7xl/value",
                "default": "4.5rem"
              }
            },
            "type": "object",
            "default": {
              "value": "4.5rem"
            }
          },
          "8xl": {
            "id": "#tokensConfig/fontSize/8xl",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/fontSize/8xl/value",
                "default": "6rem"
              }
            },
            "type": "object",
            "default": {
              "value": "6rem"
            }
          },
          "9xl": {
            "id": "#tokensConfig/fontSize/9xl",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/fontSize/9xl/value",
                "default": "8rem"
              }
            },
            "type": "object",
            "default": {
              "value": "8rem"
            }
          }
        },
        "type": "object",
        "default": {
          "xs": {
            "value": "0.75rem"
          },
          "sm": {
            "value": "0.875rem"
          },
          "base": {
            "value": "1rem"
          },
          "lg": {
            "value": "1.125rem"
          },
          "xl": {
            "value": "1.25rem"
          },
          "2xl": {
            "value": "1.5rem"
          },
          "3xl": {
            "value": "1.875rem"
          },
          "4xl": {
            "value": "2.25rem"
          },
          "5xl": {
            "value": "3rem"
          },
          "6xl": {
            "value": "3.75rem"
          },
          "7xl": {
            "value": "4.5rem"
          },
          "8xl": {
            "value": "6rem"
          },
          "9xl": {
            "value": "8rem"
          }
        }
      },
      "lead": {
        "title": "Your website line heights.",
        "tags": [
          "@studioInput design-token",
          "@studioInputTokenType size",
          "@studioIcon icon-park-outline:auto-line-height"
        ],
        "id": "#tokensConfig/lead",
        "properties": {
          "1": {
            "id": "#tokensConfig/lead/1",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/lead/1/value",
                "default": ".025rem"
              }
            },
            "type": "object",
            "default": {
              "value": ".025rem"
            }
          },
          "2": {
            "id": "#tokensConfig/lead/2",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/lead/2/value",
                "default": ".5rem"
              }
            },
            "type": "object",
            "default": {
              "value": ".5rem"
            }
          },
          "3": {
            "id": "#tokensConfig/lead/3",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/lead/3/value",
                "default": ".75rem"
              }
            },
            "type": "object",
            "default": {
              "value": ".75rem"
            }
          },
          "4": {
            "id": "#tokensConfig/lead/4",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/lead/4/value",
                "default": "1rem"
              }
            },
            "type": "object",
            "default": {
              "value": "1rem"
            }
          },
          "5": {
            "id": "#tokensConfig/lead/5",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/lead/5/value",
                "default": "1.25rem"
              }
            },
            "type": "object",
            "default": {
              "value": "1.25rem"
            }
          },
          "6": {
            "id": "#tokensConfig/lead/6",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/lead/6/value",
                "default": "1.5rem"
              }
            },
            "type": "object",
            "default": {
              "value": "1.5rem"
            }
          },
          "7": {
            "id": "#tokensConfig/lead/7",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/lead/7/value",
                "default": "1.75rem"
              }
            },
            "type": "object",
            "default": {
              "value": "1.75rem"
            }
          },
          "8": {
            "id": "#tokensConfig/lead/8",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/lead/8/value",
                "default": "2rem"
              }
            },
            "type": "object",
            "default": {
              "value": "2rem"
            }
          },
          "9": {
            "id": "#tokensConfig/lead/9",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/lead/9/value",
                "default": "2.25rem"
              }
            },
            "type": "object",
            "default": {
              "value": "2.25rem"
            }
          },
          "10": {
            "id": "#tokensConfig/lead/10",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/lead/10/value",
                "default": "2.5rem"
              }
            },
            "type": "object",
            "default": {
              "value": "2.5rem"
            }
          },
          "none": {
            "id": "#tokensConfig/lead/none",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/lead/none/value",
                "default": "1"
              }
            },
            "type": "object",
            "default": {
              "value": "1"
            }
          },
          "tight": {
            "id": "#tokensConfig/lead/tight",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/lead/tight/value",
                "default": "1.25"
              }
            },
            "type": "object",
            "default": {
              "value": "1.25"
            }
          },
          "snug": {
            "id": "#tokensConfig/lead/snug",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/lead/snug/value",
                "default": "1.375"
              }
            },
            "type": "object",
            "default": {
              "value": "1.375"
            }
          },
          "normal": {
            "id": "#tokensConfig/lead/normal",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/lead/normal/value",
                "default": "1.5"
              }
            },
            "type": "object",
            "default": {
              "value": "1.5"
            }
          },
          "relaxed": {
            "id": "#tokensConfig/lead/relaxed",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/lead/relaxed/value",
                "default": "1.625"
              }
            },
            "type": "object",
            "default": {
              "value": "1.625"
            }
          },
          "loose": {
            "id": "#tokensConfig/lead/loose",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/lead/loose/value",
                "default": "2"
              }
            },
            "type": "object",
            "default": {
              "value": "2"
            }
          }
        },
        "type": "object",
        "default": {
          "1": {
            "value": ".025rem"
          },
          "2": {
            "value": ".5rem"
          },
          "3": {
            "value": ".75rem"
          },
          "4": {
            "value": "1rem"
          },
          "5": {
            "value": "1.25rem"
          },
          "6": {
            "value": "1.5rem"
          },
          "7": {
            "value": "1.75rem"
          },
          "8": {
            "value": "2rem"
          },
          "9": {
            "value": "2.25rem"
          },
          "10": {
            "value": "2.5rem"
          },
          "none": {
            "value": "1"
          },
          "tight": {
            "value": "1.25"
          },
          "snug": {
            "value": "1.375"
          },
          "normal": {
            "value": "1.5"
          },
          "relaxed": {
            "value": "1.625"
          },
          "loose": {
            "value": "2"
          }
        }
      },
      "font": {
        "title": "Your website fonts",
        "tags": [
          "@studioInput design-token",
          "@studioInputTokenType font",
          "@studioIcon material-symbols:font-download-rounded"
        ],
        "id": "#tokensConfig/font",
        "properties": {
          "sans": {
            "id": "#tokensConfig/font/sans",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/font/sans/value",
                "default": "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji"
              }
            },
            "type": "object",
            "default": {
              "value": "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji"
            }
          },
          "serif": {
            "id": "#tokensConfig/font/serif",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/font/serif/value",
                "default": "ui-serif, Georgia, Cambria, Times New Roman, Times, serif"
              }
            },
            "type": "object",
            "default": {
              "value": "ui-serif, Georgia, Cambria, Times New Roman, Times, serif"
            }
          },
          "mono": {
            "id": "#tokensConfig/font/mono",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/font/mono/value",
                "default": "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace"
              }
            },
            "type": "object",
            "default": {
              "value": "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace"
            }
          }
        },
        "type": "object",
        "default": {
          "sans": {
            "value": "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji"
          },
          "serif": {
            "value": "ui-serif, Georgia, Cambria, Times New Roman, Times, serif"
          },
          "mono": {
            "value": "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace"
          }
        }
      },
      "docus": {
        "title": "All the configurable tokens from Docus.",
        "tags": [
          "@studioIcon material-symbols:docs"
        ],
        "id": "#tokensConfig/docus",
        "properties": {
          "header": {
            "id": "#tokensConfig/docus/header",
            "properties": {
              "height": {
                "id": "#tokensConfig/docus/header/height",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/docus/header/height/value",
                    "default": "64px"
                  }
                },
                "type": "object",
                "default": {
                  "value": "64px"
                }
              }
            },
            "type": "object",
            "default": {
              "height": {
                "value": "64px"
              }
            }
          },
          "footer": {
            "id": "#tokensConfig/docus/footer",
            "properties": {
              "padding": {
                "id": "#tokensConfig/docus/footer/padding",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/docus/footer/padding/value",
                    "default": "{space.4} 0"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{space.4} 0"
                }
              }
            },
            "type": "object",
            "default": {
              "padding": {
                "value": "{space.4} 0"
              }
            }
          },
          "readableLine": {
            "id": "#tokensConfig/docus/readableLine",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/docus/readableLine/value",
                "default": "78ch"
              }
            },
            "type": "object",
            "default": {
              "value": "78ch"
            }
          },
          "loadingBar": {
            "id": "#tokensConfig/docus/loadingBar",
            "properties": {
              "height": {
                "id": "#tokensConfig/docus/loadingBar/height",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/docus/loadingBar/height/value",
                    "default": "3px"
                  }
                },
                "type": "object",
                "default": {
                  "value": "3px"
                }
              },
              "gradientColorStop1": {
                "id": "#tokensConfig/docus/loadingBar/gradientColorStop1",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/docus/loadingBar/gradientColorStop1/value",
                    "default": "#00dc82"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#00dc82"
                }
              },
              "gradientColorStop2": {
                "id": "#tokensConfig/docus/loadingBar/gradientColorStop2",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/docus/loadingBar/gradientColorStop2/value",
                    "default": "#34cdfe"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#34cdfe"
                }
              },
              "gradientColorStop3": {
                "id": "#tokensConfig/docus/loadingBar/gradientColorStop3",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/docus/loadingBar/gradientColorStop3/value",
                    "default": "#0047e1"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#0047e1"
                }
              }
            },
            "type": "object",
            "default": {
              "height": {
                "value": "3px"
              },
              "gradientColorStop1": {
                "value": "#00dc82"
              },
              "gradientColorStop2": {
                "value": "#34cdfe"
              },
              "gradientColorStop3": {
                "value": "#0047e1"
              }
            }
          }
        },
        "type": "object",
        "default": {
          "header": {
            "height": {
              "value": "64px"
            }
          },
          "footer": {
            "padding": {
              "value": "{space.4} 0"
            }
          },
          "readableLine": {
            "value": "78ch"
          },
          "loadingBar": {
            "height": {
              "value": "3px"
            },
            "gradientColorStop1": {
              "value": "#00dc82"
            },
            "gradientColorStop2": {
              "value": "#34cdfe"
            },
            "gradientColorStop3": {
              "value": "#0047e1"
            }
          }
        }
      },
      "media": {
        "title": "Your website media queries.",
        "tags": [
          "@studioInput design-token",
          "@studioInputTokenType color",
          "@studioIcon material-symbols:screenshot-monitor-outline-rounded"
        ],
        "id": "#tokensConfig/media",
        "properties": {
          "xs": {
            "id": "#tokensConfig/media/xs",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/media/xs/value",
                "default": "(min-width: 475px)"
              }
            },
            "type": "object",
            "default": {
              "value": "(min-width: 475px)"
            }
          },
          "sm": {
            "id": "#tokensConfig/media/sm",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/media/sm/value",
                "default": "(min-width: 640px)"
              }
            },
            "type": "object",
            "default": {
              "value": "(min-width: 640px)"
            }
          },
          "md": {
            "id": "#tokensConfig/media/md",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/media/md/value",
                "default": "(min-width: 768px)"
              }
            },
            "type": "object",
            "default": {
              "value": "(min-width: 768px)"
            }
          },
          "lg": {
            "id": "#tokensConfig/media/lg",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/media/lg/value",
                "default": "(min-width: 1024px)"
              }
            },
            "type": "object",
            "default": {
              "value": "(min-width: 1024px)"
            }
          },
          "xl": {
            "id": "#tokensConfig/media/xl",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/media/xl/value",
                "default": "(min-width: 1280px)"
              }
            },
            "type": "object",
            "default": {
              "value": "(min-width: 1280px)"
            }
          },
          "2xl": {
            "id": "#tokensConfig/media/2xl",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/media/2xl/value",
                "default": "(min-width: 1536px)"
              }
            },
            "type": "object",
            "default": {
              "value": "(min-width: 1536px)"
            }
          },
          "rm": {
            "id": "#tokensConfig/media/rm",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/media/rm/value",
                "default": "(prefers-reduced-motion: reduce)"
              }
            },
            "type": "object",
            "default": {
              "value": "(prefers-reduced-motion: reduce)"
            }
          },
          "landscape": {
            "id": "#tokensConfig/media/landscape",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/media/landscape/value",
                "default": "only screen and (orientation: landscape)"
              }
            },
            "type": "object",
            "default": {
              "value": "only screen and (orientation: landscape)"
            }
          },
          "portrait": {
            "id": "#tokensConfig/media/portrait",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/media/portrait/value",
                "default": "only screen and (orientation: portrait)"
              }
            },
            "type": "object",
            "default": {
              "value": "only screen and (orientation: portrait)"
            }
          }
        },
        "type": "object",
        "default": {
          "xs": {
            "value": "(min-width: 475px)"
          },
          "sm": {
            "value": "(min-width: 640px)"
          },
          "md": {
            "value": "(min-width: 768px)"
          },
          "lg": {
            "value": "(min-width: 1024px)"
          },
          "xl": {
            "value": "(min-width: 1280px)"
          },
          "2xl": {
            "value": "(min-width: 1536px)"
          },
          "rm": {
            "value": "(prefers-reduced-motion: reduce)"
          },
          "landscape": {
            "value": "only screen and (orientation: landscape)"
          },
          "portrait": {
            "value": "only screen and (orientation: portrait)"
          }
        }
      },
      "width": {
        "title": "Your website screen sizings.",
        "tags": [
          "@studioInput design-token",
          "@studioInputTokenType size",
          "@studioIcon ph:ruler"
        ],
        "id": "#tokensConfig/width",
        "properties": {
          "screen": {
            "id": "#tokensConfig/width/screen",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/width/screen/value",
                "default": "100vw"
              }
            },
            "type": "object",
            "default": {
              "value": "100vw"
            }
          }
        },
        "type": "object",
        "default": {
          "screen": {
            "value": "100vw"
          }
        }
      },
      "height": {
        "title": "Your website screen sizings.",
        "tags": [
          "@studioInput design-token",
          "@studioInputTokenType size",
          "@studioIcon ph:ruler"
        ],
        "id": "#tokensConfig/height",
        "properties": {
          "screen": {
            "id": "#tokensConfig/height/screen",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/height/screen/value",
                "default": "100vh"
              }
            },
            "type": "object",
            "default": {
              "value": "100vh"
            }
          }
        },
        "type": "object",
        "default": {
          "screen": {
            "value": "100vh"
          }
        }
      },
      "shadow": {
        "title": "Your website shadows.",
        "tags": [
          "@studioInput design-token",
          "@studioInputTokenType shadow",
          "@studioIcon mdi:box-shadow"
        ],
        "id": "#tokensConfig/shadow",
        "properties": {
          "xs": {
            "id": "#tokensConfig/shadow/xs",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/shadow/xs/value",
                "default": "0px 1px 2px 0px #000000"
              }
            },
            "type": "object",
            "default": {
              "value": "0px 1px 2px 0px #000000"
            }
          },
          "sm": {
            "id": "#tokensConfig/shadow/sm",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/shadow/sm/value",
                "default": "0px 1px 3px 0px #000000, 0px 1px 2px -1px #000000"
              }
            },
            "type": "object",
            "default": {
              "value": "0px 1px 3px 0px #000000, 0px 1px 2px -1px #000000"
            }
          },
          "md": {
            "id": "#tokensConfig/shadow/md",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/shadow/md/value",
                "default": "0px 4px 6px -1px #000000, 0px 2px 4px -2px #000000"
              }
            },
            "type": "object",
            "default": {
              "value": "0px 4px 6px -1px #000000, 0px 2px 4px -2px #000000"
            }
          },
          "lg": {
            "id": "#tokensConfig/shadow/lg",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/shadow/lg/value",
                "default": "0px 10px 15px -3px #000000, 0px 4px 6px -4px #000000"
              }
            },
            "type": "object",
            "default": {
              "value": "0px 10px 15px -3px #000000, 0px 4px 6px -4px #000000"
            }
          },
          "xl": {
            "id": "#tokensConfig/shadow/xl",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/shadow/xl/value",
                "default": "0px 20px 25px -5px {color.gray.400}, 0px 8px 10px -6px #000000"
              }
            },
            "type": "object",
            "default": {
              "value": "0px 20px 25px -5px {color.gray.400}, 0px 8px 10px -6px #000000"
            }
          },
          "2xl": {
            "id": "#tokensConfig/shadow/2xl",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/shadow/2xl/value",
                "default": "0px 25px 50px -12px {color.gray.900}"
              }
            },
            "type": "object",
            "default": {
              "value": "0px 25px 50px -12px {color.gray.900}"
            }
          },
          "none": {
            "id": "#tokensConfig/shadow/none",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/shadow/none/value",
                "default": "0px 0px 0px 0px transparent"
              }
            },
            "type": "object",
            "default": {
              "value": "0px 0px 0px 0px transparent"
            }
          }
        },
        "type": "object",
        "default": {
          "xs": {
            "value": "0px 1px 2px 0px #000000"
          },
          "sm": {
            "value": "0px 1px 3px 0px #000000, 0px 1px 2px -1px #000000"
          },
          "md": {
            "value": "0px 4px 6px -1px #000000, 0px 2px 4px -2px #000000"
          },
          "lg": {
            "value": "0px 10px 15px -3px #000000, 0px 4px 6px -4px #000000"
          },
          "xl": {
            "value": "0px 20px 25px -5px {color.gray.400}, 0px 8px 10px -6px #000000"
          },
          "2xl": {
            "value": "0px 25px 50px -12px {color.gray.900}"
          },
          "none": {
            "value": "0px 0px 0px 0px transparent"
          }
        }
      },
      "size": {
        "title": "Your website sizings.",
        "tags": [
          "@studioInput design-token",
          "@studioInputTokenType size",
          "@studioIcon ph:ruler"
        ],
        "id": "#tokensConfig/size",
        "properties": {
          "0": {
            "id": "#tokensConfig/size/0",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/size/0/value",
                "default": "0px"
              }
            },
            "type": "object",
            "default": {
              "value": "0px"
            }
          },
          "2": {
            "id": "#tokensConfig/size/2",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/size/2/value",
                "default": "2px"
              }
            },
            "type": "object",
            "default": {
              "value": "2px"
            }
          },
          "4": {
            "id": "#tokensConfig/size/4",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/size/4/value",
                "default": "4px"
              }
            },
            "type": "object",
            "default": {
              "value": "4px"
            }
          },
          "6": {
            "id": "#tokensConfig/size/6",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/size/6/value",
                "default": "6px"
              }
            },
            "type": "object",
            "default": {
              "value": "6px"
            }
          },
          "8": {
            "id": "#tokensConfig/size/8",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/size/8/value",
                "default": "8px"
              }
            },
            "type": "object",
            "default": {
              "value": "8px"
            }
          },
          "12": {
            "id": "#tokensConfig/size/12",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/size/12/value",
                "default": "12px"
              }
            },
            "type": "object",
            "default": {
              "value": "12px"
            }
          },
          "16": {
            "id": "#tokensConfig/size/16",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/size/16/value",
                "default": "16px"
              }
            },
            "type": "object",
            "default": {
              "value": "16px"
            }
          },
          "20": {
            "id": "#tokensConfig/size/20",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/size/20/value",
                "default": "20px"
              }
            },
            "type": "object",
            "default": {
              "value": "20px"
            }
          },
          "24": {
            "id": "#tokensConfig/size/24",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/size/24/value",
                "default": "24px"
              }
            },
            "type": "object",
            "default": {
              "value": "24px"
            }
          },
          "32": {
            "id": "#tokensConfig/size/32",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/size/32/value",
                "default": "32px"
              }
            },
            "type": "object",
            "default": {
              "value": "32px"
            }
          },
          "40": {
            "id": "#tokensConfig/size/40",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/size/40/value",
                "default": "40px"
              }
            },
            "type": "object",
            "default": {
              "value": "40px"
            }
          },
          "48": {
            "id": "#tokensConfig/size/48",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/size/48/value",
                "default": "48px"
              }
            },
            "type": "object",
            "default": {
              "value": "48px"
            }
          },
          "56": {
            "id": "#tokensConfig/size/56",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/size/56/value",
                "default": "56px"
              }
            },
            "type": "object",
            "default": {
              "value": "56px"
            }
          },
          "64": {
            "id": "#tokensConfig/size/64",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/size/64/value",
                "default": "64px"
              }
            },
            "type": "object",
            "default": {
              "value": "64px"
            }
          },
          "80": {
            "id": "#tokensConfig/size/80",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/size/80/value",
                "default": "80px"
              }
            },
            "type": "object",
            "default": {
              "value": "80px"
            }
          },
          "104": {
            "id": "#tokensConfig/size/104",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/size/104/value",
                "default": "104px"
              }
            },
            "type": "object",
            "default": {
              "value": "104px"
            }
          },
          "200": {
            "id": "#tokensConfig/size/200",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/size/200/value",
                "default": "200px"
              }
            },
            "type": "object",
            "default": {
              "value": "200px"
            }
          },
          "xs": {
            "id": "#tokensConfig/size/xs",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/size/xs/value",
                "default": "20rem"
              }
            },
            "type": "object",
            "default": {
              "value": "20rem"
            }
          },
          "sm": {
            "id": "#tokensConfig/size/sm",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/size/sm/value",
                "default": "24rem"
              }
            },
            "type": "object",
            "default": {
              "value": "24rem"
            }
          },
          "md": {
            "id": "#tokensConfig/size/md",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/size/md/value",
                "default": "28rem"
              }
            },
            "type": "object",
            "default": {
              "value": "28rem"
            }
          },
          "lg": {
            "id": "#tokensConfig/size/lg",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/size/lg/value",
                "default": "32rem"
              }
            },
            "type": "object",
            "default": {
              "value": "32rem"
            }
          },
          "xl": {
            "id": "#tokensConfig/size/xl",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/size/xl/value",
                "default": "36rem"
              }
            },
            "type": "object",
            "default": {
              "value": "36rem"
            }
          },
          "2xl": {
            "id": "#tokensConfig/size/2xl",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/size/2xl/value",
                "default": "42rem"
              }
            },
            "type": "object",
            "default": {
              "value": "42rem"
            }
          },
          "3xl": {
            "id": "#tokensConfig/size/3xl",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/size/3xl/value",
                "default": "48rem"
              }
            },
            "type": "object",
            "default": {
              "value": "48rem"
            }
          },
          "4xl": {
            "id": "#tokensConfig/size/4xl",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/size/4xl/value",
                "default": "56rem"
              }
            },
            "type": "object",
            "default": {
              "value": "56rem"
            }
          },
          "5xl": {
            "id": "#tokensConfig/size/5xl",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/size/5xl/value",
                "default": "64rem"
              }
            },
            "type": "object",
            "default": {
              "value": "64rem"
            }
          },
          "6xl": {
            "id": "#tokensConfig/size/6xl",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/size/6xl/value",
                "default": "72rem"
              }
            },
            "type": "object",
            "default": {
              "value": "72rem"
            }
          },
          "7xl": {
            "id": "#tokensConfig/size/7xl",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/size/7xl/value",
                "default": "80rem"
              }
            },
            "type": "object",
            "default": {
              "value": "80rem"
            }
          },
          "full": {
            "id": "#tokensConfig/size/full",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/size/full/value",
                "default": "100%"
              }
            },
            "type": "object",
            "default": {
              "value": "100%"
            }
          }
        },
        "type": "object",
        "default": {
          "0": {
            "value": "0px"
          },
          "2": {
            "value": "2px"
          },
          "4": {
            "value": "4px"
          },
          "6": {
            "value": "6px"
          },
          "8": {
            "value": "8px"
          },
          "12": {
            "value": "12px"
          },
          "16": {
            "value": "16px"
          },
          "20": {
            "value": "20px"
          },
          "24": {
            "value": "24px"
          },
          "32": {
            "value": "32px"
          },
          "40": {
            "value": "40px"
          },
          "48": {
            "value": "48px"
          },
          "56": {
            "value": "56px"
          },
          "64": {
            "value": "64px"
          },
          "80": {
            "value": "80px"
          },
          "104": {
            "value": "104px"
          },
          "200": {
            "value": "200px"
          },
          "xs": {
            "value": "20rem"
          },
          "sm": {
            "value": "24rem"
          },
          "md": {
            "value": "28rem"
          },
          "lg": {
            "value": "32rem"
          },
          "xl": {
            "value": "36rem"
          },
          "2xl": {
            "value": "42rem"
          },
          "3xl": {
            "value": "48rem"
          },
          "4xl": {
            "value": "56rem"
          },
          "5xl": {
            "value": "64rem"
          },
          "6xl": {
            "value": "72rem"
          },
          "7xl": {
            "value": "80rem"
          },
          "full": {
            "value": "100%"
          }
        }
      },
      "space": {
        "title": "Your website spacings.",
        "tags": [
          "@studioInput design-token",
          "@studioInputTokenType size",
          "@studioIcon ph:ruler"
        ],
        "id": "#tokensConfig/space",
        "properties": {
          "0": {
            "id": "#tokensConfig/space/0",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/space/0/value",
                "default": "0px"
              }
            },
            "type": "object",
            "default": {
              "value": "0px"
            }
          },
          "1": {
            "id": "#tokensConfig/space/1",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/space/1/value",
                "default": "0.25rem"
              }
            },
            "type": "object",
            "default": {
              "value": "0.25rem"
            }
          },
          "2": {
            "id": "#tokensConfig/space/2",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/space/2/value",
                "default": "0.5rem"
              }
            },
            "type": "object",
            "default": {
              "value": "0.5rem"
            }
          },
          "3": {
            "id": "#tokensConfig/space/3",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/space/3/value",
                "default": "0.75rem"
              }
            },
            "type": "object",
            "default": {
              "value": "0.75rem"
            }
          },
          "4": {
            "id": "#tokensConfig/space/4",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/space/4/value",
                "default": "1rem"
              }
            },
            "type": "object",
            "default": {
              "value": "1rem"
            }
          },
          "5": {
            "id": "#tokensConfig/space/5",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/space/5/value",
                "default": "1.25rem"
              }
            },
            "type": "object",
            "default": {
              "value": "1.25rem"
            }
          },
          "6": {
            "id": "#tokensConfig/space/6",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/space/6/value",
                "default": "1.5rem"
              }
            },
            "type": "object",
            "default": {
              "value": "1.5rem"
            }
          },
          "7": {
            "id": "#tokensConfig/space/7",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/space/7/value",
                "default": "1.75rem"
              }
            },
            "type": "object",
            "default": {
              "value": "1.75rem"
            }
          },
          "8": {
            "id": "#tokensConfig/space/8",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/space/8/value",
                "default": "2rem"
              }
            },
            "type": "object",
            "default": {
              "value": "2rem"
            }
          },
          "9": {
            "id": "#tokensConfig/space/9",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/space/9/value",
                "default": "2.25rem"
              }
            },
            "type": "object",
            "default": {
              "value": "2.25rem"
            }
          },
          "10": {
            "id": "#tokensConfig/space/10",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/space/10/value",
                "default": "2.5rem"
              }
            },
            "type": "object",
            "default": {
              "value": "2.5rem"
            }
          },
          "11": {
            "id": "#tokensConfig/space/11",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/space/11/value",
                "default": "2.75rem"
              }
            },
            "type": "object",
            "default": {
              "value": "2.75rem"
            }
          },
          "12": {
            "id": "#tokensConfig/space/12",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/space/12/value",
                "default": "3rem"
              }
            },
            "type": "object",
            "default": {
              "value": "3rem"
            }
          },
          "14": {
            "id": "#tokensConfig/space/14",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/space/14/value",
                "default": "3.5rem"
              }
            },
            "type": "object",
            "default": {
              "value": "3.5rem"
            }
          },
          "16": {
            "id": "#tokensConfig/space/16",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/space/16/value",
                "default": "4rem"
              }
            },
            "type": "object",
            "default": {
              "value": "4rem"
            }
          },
          "20": {
            "id": "#tokensConfig/space/20",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/space/20/value",
                "default": "5rem"
              }
            },
            "type": "object",
            "default": {
              "value": "5rem"
            }
          },
          "24": {
            "id": "#tokensConfig/space/24",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/space/24/value",
                "default": "6rem"
              }
            },
            "type": "object",
            "default": {
              "value": "6rem"
            }
          },
          "28": {
            "id": "#tokensConfig/space/28",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/space/28/value",
                "default": "7rem"
              }
            },
            "type": "object",
            "default": {
              "value": "7rem"
            }
          },
          "32": {
            "id": "#tokensConfig/space/32",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/space/32/value",
                "default": "8rem"
              }
            },
            "type": "object",
            "default": {
              "value": "8rem"
            }
          },
          "36": {
            "id": "#tokensConfig/space/36",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/space/36/value",
                "default": "9rem"
              }
            },
            "type": "object",
            "default": {
              "value": "9rem"
            }
          },
          "40": {
            "id": "#tokensConfig/space/40",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/space/40/value",
                "default": "10rem"
              }
            },
            "type": "object",
            "default": {
              "value": "10rem"
            }
          },
          "44": {
            "id": "#tokensConfig/space/44",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/space/44/value",
                "default": "11rem"
              }
            },
            "type": "object",
            "default": {
              "value": "11rem"
            }
          },
          "48": {
            "id": "#tokensConfig/space/48",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/space/48/value",
                "default": "12rem"
              }
            },
            "type": "object",
            "default": {
              "value": "12rem"
            }
          },
          "52": {
            "id": "#tokensConfig/space/52",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/space/52/value",
                "default": "13rem"
              }
            },
            "type": "object",
            "default": {
              "value": "13rem"
            }
          },
          "56": {
            "id": "#tokensConfig/space/56",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/space/56/value",
                "default": "14rem"
              }
            },
            "type": "object",
            "default": {
              "value": "14rem"
            }
          },
          "60": {
            "id": "#tokensConfig/space/60",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/space/60/value",
                "default": "15rem"
              }
            },
            "type": "object",
            "default": {
              "value": "15rem"
            }
          },
          "64": {
            "id": "#tokensConfig/space/64",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/space/64/value",
                "default": "16rem"
              }
            },
            "type": "object",
            "default": {
              "value": "16rem"
            }
          },
          "72": {
            "id": "#tokensConfig/space/72",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/space/72/value",
                "default": "18rem"
              }
            },
            "type": "object",
            "default": {
              "value": "18rem"
            }
          },
          "80": {
            "id": "#tokensConfig/space/80",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/space/80/value",
                "default": "20rem"
              }
            },
            "type": "object",
            "default": {
              "value": "20rem"
            }
          },
          "96": {
            "id": "#tokensConfig/space/96",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/space/96/value",
                "default": "24rem"
              }
            },
            "type": "object",
            "default": {
              "value": "24rem"
            }
          },
          "px": {
            "id": "#tokensConfig/space/px",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/space/px/value",
                "default": "1px"
              }
            },
            "type": "object",
            "default": {
              "value": "1px"
            }
          },
          "rem": {
            "id": "#tokensConfig/space/rem",
            "properties": {
              "125": {
                "id": "#tokensConfig/space/rem/125",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/space/rem/125/value",
                    "default": "0.125rem"
                  }
                },
                "type": "object",
                "default": {
                  "value": "0.125rem"
                }
              },
              "375": {
                "id": "#tokensConfig/space/rem/375",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/space/rem/375/value",
                    "default": "0.375rem"
                  }
                },
                "type": "object",
                "default": {
                  "value": "0.375rem"
                }
              },
              "625": {
                "id": "#tokensConfig/space/rem/625",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/space/rem/625/value",
                    "default": "0.625rem"
                  }
                },
                "type": "object",
                "default": {
                  "value": "0.625rem"
                }
              },
              "875": {
                "id": "#tokensConfig/space/rem/875",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/space/rem/875/value",
                    "default": "0.875rem"
                  }
                },
                "type": "object",
                "default": {
                  "value": "0.875rem"
                }
              }
            },
            "type": "object",
            "default": {
              "125": {
                "value": "0.125rem"
              },
              "375": {
                "value": "0.375rem"
              },
              "625": {
                "value": "0.625rem"
              },
              "875": {
                "value": "0.875rem"
              }
            }
          }
        },
        "type": "object",
        "default": {
          "0": {
            "value": "0px"
          },
          "1": {
            "value": "0.25rem"
          },
          "2": {
            "value": "0.5rem"
          },
          "3": {
            "value": "0.75rem"
          },
          "4": {
            "value": "1rem"
          },
          "5": {
            "value": "1.25rem"
          },
          "6": {
            "value": "1.5rem"
          },
          "7": {
            "value": "1.75rem"
          },
          "8": {
            "value": "2rem"
          },
          "9": {
            "value": "2.25rem"
          },
          "10": {
            "value": "2.5rem"
          },
          "11": {
            "value": "2.75rem"
          },
          "12": {
            "value": "3rem"
          },
          "14": {
            "value": "3.5rem"
          },
          "16": {
            "value": "4rem"
          },
          "20": {
            "value": "5rem"
          },
          "24": {
            "value": "6rem"
          },
          "28": {
            "value": "7rem"
          },
          "32": {
            "value": "8rem"
          },
          "36": {
            "value": "9rem"
          },
          "40": {
            "value": "10rem"
          },
          "44": {
            "value": "11rem"
          },
          "48": {
            "value": "12rem"
          },
          "52": {
            "value": "13rem"
          },
          "56": {
            "value": "14rem"
          },
          "60": {
            "value": "15rem"
          },
          "64": {
            "value": "16rem"
          },
          "72": {
            "value": "18rem"
          },
          "80": {
            "value": "20rem"
          },
          "96": {
            "value": "24rem"
          },
          "px": {
            "value": "1px"
          },
          "rem": {
            "125": {
              "value": "0.125rem"
            },
            "375": {
              "value": "0.375rem"
            },
            "625": {
              "value": "0.625rem"
            },
            "875": {
              "value": "0.875rem"
            }
          }
        }
      },
      "borderWidth": {
        "title": "Your website border widths.",
        "tags": [
          "@studioInput design-token",
          "@studioInputTokenType size",
          "@studioIcon material-symbols:border-all-outline-rounded"
        ],
        "id": "#tokensConfig/borderWidth",
        "properties": {
          "noBorder": {
            "id": "#tokensConfig/borderWidth/noBorder",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/borderWidth/noBorder/value",
                "default": "0"
              }
            },
            "type": "object",
            "default": {
              "value": "0"
            }
          },
          "sm": {
            "id": "#tokensConfig/borderWidth/sm",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/borderWidth/sm/value",
                "default": "1px"
              }
            },
            "type": "object",
            "default": {
              "value": "1px"
            }
          },
          "md": {
            "id": "#tokensConfig/borderWidth/md",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/borderWidth/md/value",
                "default": "2px"
              }
            },
            "type": "object",
            "default": {
              "value": "2px"
            }
          },
          "lg": {
            "id": "#tokensConfig/borderWidth/lg",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/borderWidth/lg/value",
                "default": "3px"
              }
            },
            "type": "object",
            "default": {
              "value": "3px"
            }
          }
        },
        "type": "object",
        "default": {
          "noBorder": {
            "value": "0"
          },
          "sm": {
            "value": "1px"
          },
          "md": {
            "value": "2px"
          },
          "lg": {
            "value": "3px"
          }
        }
      },
      "opacity": {
        "title": "Your website opacities.",
        "tags": [
          "@studioInput design-token",
          "@studioInputTokenType opacity",
          "@studioIcon material-symbols:opacity"
        ],
        "id": "#tokensConfig/opacity",
        "properties": {
          "noOpacity": {
            "id": "#tokensConfig/opacity/noOpacity",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/opacity/noOpacity/value",
                "default": "0"
              }
            },
            "type": "object",
            "default": {
              "value": "0"
            }
          },
          "bright": {
            "id": "#tokensConfig/opacity/bright",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/opacity/bright/value",
                "default": "0.1"
              }
            },
            "type": "object",
            "default": {
              "value": "0.1"
            }
          },
          "light": {
            "id": "#tokensConfig/opacity/light",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/opacity/light/value",
                "default": "0.15"
              }
            },
            "type": "object",
            "default": {
              "value": "0.15"
            }
          },
          "soft": {
            "id": "#tokensConfig/opacity/soft",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/opacity/soft/value",
                "default": "0.3"
              }
            },
            "type": "object",
            "default": {
              "value": "0.3"
            }
          },
          "medium": {
            "id": "#tokensConfig/opacity/medium",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/opacity/medium/value",
                "default": "0.5"
              }
            },
            "type": "object",
            "default": {
              "value": "0.5"
            }
          },
          "high": {
            "id": "#tokensConfig/opacity/high",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/opacity/high/value",
                "default": "0.8"
              }
            },
            "type": "object",
            "default": {
              "value": "0.8"
            }
          },
          "total": {
            "id": "#tokensConfig/opacity/total",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/opacity/total/value",
                "default": "1"
              }
            },
            "type": "object",
            "default": {
              "value": "1"
            }
          }
        },
        "type": "object",
        "default": {
          "noOpacity": {
            "value": "0"
          },
          "bright": {
            "value": "0.1"
          },
          "light": {
            "value": "0.15"
          },
          "soft": {
            "value": "0.3"
          },
          "medium": {
            "value": "0.5"
          },
          "high": {
            "value": "0.8"
          },
          "total": {
            "value": "1"
          }
        }
      },
      "fontWeight": {
        "title": "Your website font weights.",
        "tags": [
          "@studioInput design-token",
          "@studioInputTokenType font-weight",
          "@studioIcon radix-icons:font-style"
        ],
        "id": "#tokensConfig/fontWeight",
        "properties": {
          "thin": {
            "id": "#tokensConfig/fontWeight/thin",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/fontWeight/thin/value",
                "default": "100"
              }
            },
            "type": "object",
            "default": {
              "value": "100"
            }
          },
          "extralight": {
            "id": "#tokensConfig/fontWeight/extralight",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/fontWeight/extralight/value",
                "default": "200"
              }
            },
            "type": "object",
            "default": {
              "value": "200"
            }
          },
          "light": {
            "id": "#tokensConfig/fontWeight/light",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/fontWeight/light/value",
                "default": "300"
              }
            },
            "type": "object",
            "default": {
              "value": "300"
            }
          },
          "normal": {
            "id": "#tokensConfig/fontWeight/normal",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/fontWeight/normal/value",
                "default": "400"
              }
            },
            "type": "object",
            "default": {
              "value": "400"
            }
          },
          "medium": {
            "id": "#tokensConfig/fontWeight/medium",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/fontWeight/medium/value",
                "default": "500"
              }
            },
            "type": "object",
            "default": {
              "value": "500"
            }
          },
          "semibold": {
            "id": "#tokensConfig/fontWeight/semibold",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/fontWeight/semibold/value",
                "default": "600"
              }
            },
            "type": "object",
            "default": {
              "value": "600"
            }
          },
          "bold": {
            "id": "#tokensConfig/fontWeight/bold",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/fontWeight/bold/value",
                "default": "700"
              }
            },
            "type": "object",
            "default": {
              "value": "700"
            }
          },
          "extrabold": {
            "id": "#tokensConfig/fontWeight/extrabold",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/fontWeight/extrabold/value",
                "default": "800"
              }
            },
            "type": "object",
            "default": {
              "value": "800"
            }
          },
          "black": {
            "id": "#tokensConfig/fontWeight/black",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/fontWeight/black/value",
                "default": "900"
              }
            },
            "type": "object",
            "default": {
              "value": "900"
            }
          }
        },
        "type": "object",
        "default": {
          "thin": {
            "value": "100"
          },
          "extralight": {
            "value": "200"
          },
          "light": {
            "value": "300"
          },
          "normal": {
            "value": "400"
          },
          "medium": {
            "value": "500"
          },
          "semibold": {
            "value": "600"
          },
          "bold": {
            "value": "700"
          },
          "extrabold": {
            "value": "800"
          },
          "black": {
            "value": "900"
          }
        }
      },
      "letterSpacing": {
        "title": "Your website letter spacings.",
        "tags": [
          "@studioInput design-token",
          "@studioInputTokenType letter-spacing",
          "@studioIcon fluent:font-space-tracking-out-24-filled"
        ],
        "id": "#tokensConfig/letterSpacing",
        "properties": {
          "tighter": {
            "id": "#tokensConfig/letterSpacing/tighter",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/letterSpacing/tighter/value",
                "default": "-0.05em"
              }
            },
            "type": "object",
            "default": {
              "value": "-0.05em"
            }
          },
          "tight": {
            "id": "#tokensConfig/letterSpacing/tight",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/letterSpacing/tight/value",
                "default": "-0.025em"
              }
            },
            "type": "object",
            "default": {
              "value": "-0.025em"
            }
          },
          "normal": {
            "id": "#tokensConfig/letterSpacing/normal",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/letterSpacing/normal/value",
                "default": "0em"
              }
            },
            "type": "object",
            "default": {
              "value": "0em"
            }
          },
          "wide": {
            "id": "#tokensConfig/letterSpacing/wide",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/letterSpacing/wide/value",
                "default": "0.025em"
              }
            },
            "type": "object",
            "default": {
              "value": "0.025em"
            }
          },
          "wider": {
            "id": "#tokensConfig/letterSpacing/wider",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/letterSpacing/wider/value",
                "default": "0.05em"
              }
            },
            "type": "object",
            "default": {
              "value": "0.05em"
            }
          },
          "widest": {
            "id": "#tokensConfig/letterSpacing/widest",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/letterSpacing/widest/value",
                "default": "0.1em"
              }
            },
            "type": "object",
            "default": {
              "value": "0.1em"
            }
          }
        },
        "type": "object",
        "default": {
          "tighter": {
            "value": "-0.05em"
          },
          "tight": {
            "value": "-0.025em"
          },
          "normal": {
            "value": "0em"
          },
          "wide": {
            "value": "0.025em"
          },
          "wider": {
            "value": "0.05em"
          },
          "widest": {
            "value": "0.1em"
          }
        }
      },
      "text": {
        "title": "Your website text scales.",
        "tags": [
          "@studioInput design-token",
          "@studioInputTokenType size",
          "@studioIcon material-symbols:format-size-rounded"
        ],
        "id": "#tokensConfig/text",
        "properties": {
          "xs": {
            "id": "#tokensConfig/text/xs",
            "properties": {
              "fontSize": {
                "id": "#tokensConfig/text/xs/fontSize",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/text/xs/fontSize/value",
                    "default": "{fontSize.xs}"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{fontSize.xs}"
                }
              },
              "lineHeight": {
                "id": "#tokensConfig/text/xs/lineHeight",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/text/xs/lineHeight/value",
                    "default": "{lead.4}"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{lead.4}"
                }
              }
            },
            "type": "object",
            "default": {
              "fontSize": {
                "value": "{fontSize.xs}"
              },
              "lineHeight": {
                "value": "{lead.4}"
              }
            }
          },
          "sm": {
            "id": "#tokensConfig/text/sm",
            "properties": {
              "fontSize": {
                "id": "#tokensConfig/text/sm/fontSize",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/text/sm/fontSize/value",
                    "default": "{fontSize.sm}"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{fontSize.sm}"
                }
              },
              "lineHeight": {
                "id": "#tokensConfig/text/sm/lineHeight",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/text/sm/lineHeight/value",
                    "default": "{lead.5}"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{lead.5}"
                }
              }
            },
            "type": "object",
            "default": {
              "fontSize": {
                "value": "{fontSize.sm}"
              },
              "lineHeight": {
                "value": "{lead.5}"
              }
            }
          },
          "base": {
            "id": "#tokensConfig/text/base",
            "properties": {
              "fontSize": {
                "id": "#tokensConfig/text/base/fontSize",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/text/base/fontSize/value",
                    "default": "{fontSize.base}"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{fontSize.base}"
                }
              },
              "lineHeight": {
                "id": "#tokensConfig/text/base/lineHeight",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/text/base/lineHeight/value",
                    "default": "{lead.6}"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{lead.6}"
                }
              }
            },
            "type": "object",
            "default": {
              "fontSize": {
                "value": "{fontSize.base}"
              },
              "lineHeight": {
                "value": "{lead.6}"
              }
            }
          },
          "lg": {
            "id": "#tokensConfig/text/lg",
            "properties": {
              "fontSize": {
                "id": "#tokensConfig/text/lg/fontSize",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/text/lg/fontSize/value",
                    "default": "{fontSize.lg}"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{fontSize.lg}"
                }
              },
              "lineHeight": {
                "id": "#tokensConfig/text/lg/lineHeight",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/text/lg/lineHeight/value",
                    "default": "{lead.7}"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{lead.7}"
                }
              }
            },
            "type": "object",
            "default": {
              "fontSize": {
                "value": "{fontSize.lg}"
              },
              "lineHeight": {
                "value": "{lead.7}"
              }
            }
          },
          "xl": {
            "id": "#tokensConfig/text/xl",
            "properties": {
              "fontSize": {
                "id": "#tokensConfig/text/xl/fontSize",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/text/xl/fontSize/value",
                    "default": "{fontSize.xl}"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{fontSize.xl}"
                }
              },
              "lineHeight": {
                "id": "#tokensConfig/text/xl/lineHeight",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/text/xl/lineHeight/value",
                    "default": "{lead.7}"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{lead.7}"
                }
              }
            },
            "type": "object",
            "default": {
              "fontSize": {
                "value": "{fontSize.xl}"
              },
              "lineHeight": {
                "value": "{lead.7}"
              }
            }
          },
          "2xl": {
            "id": "#tokensConfig/text/2xl",
            "properties": {
              "fontSize": {
                "id": "#tokensConfig/text/2xl/fontSize",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/text/2xl/fontSize/value",
                    "default": "{fontSize.2xl}"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{fontSize.2xl}"
                }
              },
              "lineHeight": {
                "id": "#tokensConfig/text/2xl/lineHeight",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/text/2xl/lineHeight/value",
                    "default": "{lead.8}"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{lead.8}"
                }
              }
            },
            "type": "object",
            "default": {
              "fontSize": {
                "value": "{fontSize.2xl}"
              },
              "lineHeight": {
                "value": "{lead.8}"
              }
            }
          },
          "3xl": {
            "id": "#tokensConfig/text/3xl",
            "properties": {
              "fontSize": {
                "id": "#tokensConfig/text/3xl/fontSize",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/text/3xl/fontSize/value",
                    "default": "{fontSize.3xl}"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{fontSize.3xl}"
                }
              },
              "lineHeight": {
                "id": "#tokensConfig/text/3xl/lineHeight",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/text/3xl/lineHeight/value",
                    "default": "{lead.9}"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{lead.9}"
                }
              }
            },
            "type": "object",
            "default": {
              "fontSize": {
                "value": "{fontSize.3xl}"
              },
              "lineHeight": {
                "value": "{lead.9}"
              }
            }
          },
          "4xl": {
            "id": "#tokensConfig/text/4xl",
            "properties": {
              "fontSize": {
                "id": "#tokensConfig/text/4xl/fontSize",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/text/4xl/fontSize/value",
                    "default": "{fontSize.4xl}"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{fontSize.4xl}"
                }
              },
              "lineHeight": {
                "id": "#tokensConfig/text/4xl/lineHeight",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/text/4xl/lineHeight/value",
                    "default": "{lead.10}"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{lead.10}"
                }
              }
            },
            "type": "object",
            "default": {
              "fontSize": {
                "value": "{fontSize.4xl}"
              },
              "lineHeight": {
                "value": "{lead.10}"
              }
            }
          },
          "5xl": {
            "id": "#tokensConfig/text/5xl",
            "properties": {
              "fontSize": {
                "id": "#tokensConfig/text/5xl/fontSize",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/text/5xl/fontSize/value",
                    "default": "{fontSize.5xl}"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{fontSize.5xl}"
                }
              },
              "lineHeight": {
                "id": "#tokensConfig/text/5xl/lineHeight",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/text/5xl/lineHeight/value",
                    "default": "{lead.none}"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{lead.none}"
                }
              }
            },
            "type": "object",
            "default": {
              "fontSize": {
                "value": "{fontSize.5xl}"
              },
              "lineHeight": {
                "value": "{lead.none}"
              }
            }
          },
          "6xl": {
            "id": "#tokensConfig/text/6xl",
            "properties": {
              "fontSize": {
                "id": "#tokensConfig/text/6xl/fontSize",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/text/6xl/fontSize/value",
                    "default": "{fontSize.6xl}"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{fontSize.6xl}"
                }
              },
              "lineHeight": {
                "id": "#tokensConfig/text/6xl/lineHeight",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/text/6xl/lineHeight/value",
                    "default": "{lead.none}"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{lead.none}"
                }
              }
            },
            "type": "object",
            "default": {
              "fontSize": {
                "value": "{fontSize.6xl}"
              },
              "lineHeight": {
                "value": "{lead.none}"
              }
            }
          }
        },
        "type": "object",
        "default": {
          "xs": {
            "fontSize": {
              "value": "{fontSize.xs}"
            },
            "lineHeight": {
              "value": "{lead.4}"
            }
          },
          "sm": {
            "fontSize": {
              "value": "{fontSize.sm}"
            },
            "lineHeight": {
              "value": "{lead.5}"
            }
          },
          "base": {
            "fontSize": {
              "value": "{fontSize.base}"
            },
            "lineHeight": {
              "value": "{lead.6}"
            }
          },
          "lg": {
            "fontSize": {
              "value": "{fontSize.lg}"
            },
            "lineHeight": {
              "value": "{lead.7}"
            }
          },
          "xl": {
            "fontSize": {
              "value": "{fontSize.xl}"
            },
            "lineHeight": {
              "value": "{lead.7}"
            }
          },
          "2xl": {
            "fontSize": {
              "value": "{fontSize.2xl}"
            },
            "lineHeight": {
              "value": "{lead.8}"
            }
          },
          "3xl": {
            "fontSize": {
              "value": "{fontSize.3xl}"
            },
            "lineHeight": {
              "value": "{lead.9}"
            }
          },
          "4xl": {
            "fontSize": {
              "value": "{fontSize.4xl}"
            },
            "lineHeight": {
              "value": "{lead.10}"
            }
          },
          "5xl": {
            "fontSize": {
              "value": "{fontSize.5xl}"
            },
            "lineHeight": {
              "value": "{lead.none}"
            }
          },
          "6xl": {
            "fontSize": {
              "value": "{fontSize.6xl}"
            },
            "lineHeight": {
              "value": "{lead.none}"
            }
          }
        }
      }
    },
    "type": "object",
    "default": {
      "color": {
        "primary": {
          "50": {
            "value": "#fff2cc"
          },
          "100": {
            "value": "#ffe599"
          },
          "200": {
            "value": "#ffd966"
          },
          "300": {
            "value": "#f1c232"
          },
          "400": {
            "value": "#f1c232"
          },
          "500": {
            "value": "#f1c232"
          },
          "600": {
            "value": "#f1c232"
          },
          "700": {
            "value": "#f1c232"
          },
          "800": {
            "value": "#f1c232"
          },
          "900": {
            "value": "#f1c232"
          }
        },
        "white": {
          "value": "#ffffff"
        },
        "black": {
          "value": "#0c0c0d"
        },
        "secondary": {
          "50": {
            "value": "{color.gray.50}"
          },
          "100": {
            "value": "{color.gray.100}"
          },
          "200": {
            "value": "{color.gray.200}"
          },
          "300": {
            "value": "{color.gray.300}"
          },
          "400": {
            "value": "{color.gray.400}"
          },
          "500": {
            "value": "{color.gray.500}"
          },
          "600": {
            "value": "{color.gray.600}"
          },
          "700": {
            "value": "{color.gray.700}"
          },
          "800": {
            "value": "{color.gray.800}"
          },
          "900": {
            "value": "{color.gray.900}"
          }
        },
        "gray": {
          "50": {
            "value": "#fafafa"
          },
          "100": {
            "value": "#f4f4f5"
          },
          "200": {
            "value": "#e4e4e7"
          },
          "300": {
            "value": "#D4d4d8"
          },
          "400": {
            "value": "#a1a1aa"
          },
          "500": {
            "value": "#71717A"
          },
          "600": {
            "value": "#52525B"
          },
          "700": {
            "value": "#3f3f46"
          },
          "800": {
            "value": "#27272A"
          },
          "900": {
            "value": "#18181B"
          }
        },
        "green": {
          "50": {
            "value": "#d6ffee"
          },
          "100": {
            "value": "#acffdd"
          },
          "200": {
            "value": "#83ffcc"
          },
          "300": {
            "value": "#30ffaa"
          },
          "400": {
            "value": "#00dc82"
          },
          "500": {
            "value": "#00bd6f"
          },
          "600": {
            "value": "#009d5d"
          },
          "700": {
            "value": "#007e4a"
          },
          "800": {
            "value": "#005e38"
          },
          "900": {
            "value": "#003f25"
          }
        },
        "yellow": {
          "50": {
            "value": "#fdf6db"
          },
          "100": {
            "value": "#fcedb7"
          },
          "200": {
            "value": "#fae393"
          },
          "300": {
            "value": "#f8da70"
          },
          "400": {
            "value": "#f7d14c"
          },
          "500": {
            "value": "#f5c828"
          },
          "600": {
            "value": "#daac0a"
          },
          "700": {
            "value": "#a38108"
          },
          "800": {
            "value": "#6d5605"
          },
          "900": {
            "value": "#362b03"
          }
        },
        "orange": {
          "50": {
            "value": "#ffe9d9"
          },
          "100": {
            "value": "#ffd3b3"
          },
          "200": {
            "value": "#ffbd8d"
          },
          "300": {
            "value": "#ffa666"
          },
          "400": {
            "value": "#ff9040"
          },
          "500": {
            "value": "#ff7a1a"
          },
          "600": {
            "value": "#e15e00"
          },
          "700": {
            "value": "#a94700"
          },
          "800": {
            "value": "#702f00"
          },
          "900": {
            "value": "#381800"
          }
        },
        "red": {
          "50": {
            "value": "#ffdbd9"
          },
          "100": {
            "value": "#ffb7b3"
          },
          "200": {
            "value": "#ff948d"
          },
          "300": {
            "value": "#ff7066"
          },
          "400": {
            "value": "#ff4c40"
          },
          "500": {
            "value": "#ff281a"
          },
          "600": {
            "value": "#e10e00"
          },
          "700": {
            "value": "#a90a00"
          },
          "800": {
            "value": "#700700"
          },
          "900": {
            "value": "#380300"
          }
        },
        "pear": {
          "50": {
            "value": "#f7f8dc"
          },
          "100": {
            "value": "#eff0ba"
          },
          "200": {
            "value": "#e8e997"
          },
          "300": {
            "value": "#e0e274"
          },
          "400": {
            "value": "#d8da52"
          },
          "500": {
            "value": "#d0d32f"
          },
          "600": {
            "value": "#a8aa24"
          },
          "700": {
            "value": "#7e801b"
          },
          "800": {
            "value": "#545512"
          },
          "900": {
            "value": "#2a2b09"
          }
        },
        "teal": {
          "50": {
            "value": "#d7faf8"
          },
          "100": {
            "value": "#aff4f0"
          },
          "200": {
            "value": "#87efe9"
          },
          "300": {
            "value": "#5fe9e1"
          },
          "400": {
            "value": "#36e4da"
          },
          "500": {
            "value": "#1cd1c6"
          },
          "600": {
            "value": "#16a79e"
          },
          "700": {
            "value": "#117d77"
          },
          "800": {
            "value": "#0b544f"
          },
          "900": {
            "value": "#062a28"
          }
        },
        "lightblue": {
          "50": {
            "value": "#d9f8ff"
          },
          "100": {
            "value": "#b3f1ff"
          },
          "200": {
            "value": "#8deaff"
          },
          "300": {
            "value": "#66e4ff"
          },
          "400": {
            "value": "#40ddff"
          },
          "500": {
            "value": "#1ad6ff"
          },
          "600": {
            "value": "#00b9e1"
          },
          "700": {
            "value": "#008aa9"
          },
          "800": {
            "value": "#005c70"
          },
          "900": {
            "value": "#002e38"
          }
        },
        "blue": {
          "50": {
            "value": "#d9f1ff"
          },
          "100": {
            "value": "#b3e4ff"
          },
          "200": {
            "value": "#8dd6ff"
          },
          "300": {
            "value": "#66c8ff"
          },
          "400": {
            "value": "#40bbff"
          },
          "500": {
            "value": "#1aadff"
          },
          "600": {
            "value": "#0090e1"
          },
          "700": {
            "value": "#006ca9"
          },
          "800": {
            "value": "#004870"
          },
          "900": {
            "value": "#002438"
          }
        },
        "indigoblue": {
          "50": {
            "value": "#d9e5ff"
          },
          "100": {
            "value": "#b3cbff"
          },
          "200": {
            "value": "#8db0ff"
          },
          "300": {
            "value": "#6696ff"
          },
          "400": {
            "value": "#407cff"
          },
          "500": {
            "value": "#1a62ff"
          },
          "600": {
            "value": "#0047e1"
          },
          "700": {
            "value": "#0035a9"
          },
          "800": {
            "value": "#002370"
          },
          "900": {
            "value": "#001238"
          }
        },
        "royalblue": {
          "50": {
            "value": "#dfdbfb"
          },
          "100": {
            "value": "#c0b7f7"
          },
          "200": {
            "value": "#a093f3"
          },
          "300": {
            "value": "#806ff0"
          },
          "400": {
            "value": "#614bec"
          },
          "500": {
            "value": "#4127e8"
          },
          "600": {
            "value": "#2c15c4"
          },
          "700": {
            "value": "#211093"
          },
          "800": {
            "value": "#160a62"
          },
          "900": {
            "value": "#0b0531"
          }
        },
        "purple": {
          "50": {
            "value": "#ead9ff"
          },
          "100": {
            "value": "#d5b3ff"
          },
          "200": {
            "value": "#c08dff"
          },
          "300": {
            "value": "#ab66ff"
          },
          "400": {
            "value": "#9640ff"
          },
          "500": {
            "value": "#811aff"
          },
          "600": {
            "value": "#6500e1"
          },
          "700": {
            "value": "#4c00a9"
          },
          "800": {
            "value": "#330070"
          },
          "900": {
            "value": "#190038"
          }
        },
        "pink": {
          "50": {
            "value": "#ffd9f2"
          },
          "100": {
            "value": "#ffb3e5"
          },
          "200": {
            "value": "#ff8dd8"
          },
          "300": {
            "value": "#ff66cc"
          },
          "400": {
            "value": "#ff40bf"
          },
          "500": {
            "value": "#ff1ab2"
          },
          "600": {
            "value": "#e10095"
          },
          "700": {
            "value": "#a90070"
          },
          "800": {
            "value": "#70004b"
          },
          "900": {
            "value": "#380025"
          }
        },
        "ruby": {
          "50": {
            "value": "#ffd9e4"
          },
          "100": {
            "value": "#ffb3c9"
          },
          "200": {
            "value": "#ff8dae"
          },
          "300": {
            "value": "#ff6694"
          },
          "400": {
            "value": "#ff4079"
          },
          "500": {
            "value": "#ff1a5e"
          },
          "600": {
            "value": "#e10043"
          },
          "700": {
            "value": "#a90032"
          },
          "800": {
            "value": "#700021"
          },
          "900": {
            "value": "#380011"
          }
        }
      },
      "elements": {
        "text": {
          "primary": {
            "color": {
              "static": {
                "value": {
                  "initial": "{color.gray.900}",
                  "dark": "{color.gray.50}"
                }
              },
              "hover": {}
            }
          },
          "secondary": {
            "color": {
              "static": {
                "value": {
                  "initial": "{color.gray.500}",
                  "dark": "{color.gray.400}"
                }
              },
              "hover": {
                "value": {
                  "initial": "{color.gray.700}",
                  "dark": "{color.gray.200}"
                }
              }
            }
          }
        },
        "container": {
          "maxWidth": {
            "value": "80rem"
          },
          "padding": {
            "mobile": {
              "value": "{space.4}"
            },
            "xs": {
              "value": "{space.4}"
            },
            "sm": {
              "value": "{space.6}"
            },
            "md": {
              "value": "{space.6}"
            }
          }
        },
        "backdrop": {
          "filter": {
            "value": "saturate(200%) blur(20px)"
          },
          "background": {
            "value": {
              "initial": "#fffc",
              "dark": "#0c0d0ccc"
            }
          }
        },
        "border": {
          "primary": {
            "static": {
              "value": {
                "initial": "{color.gray.100}",
                "dark": "{color.gray.900}"
              }
            },
            "hover": {
              "value": {
                "initial": "{color.gray.200}",
                "dark": "{color.gray.800}"
              }
            }
          },
          "secondary": {
            "static": {
              "value": {
                "initial": "{color.gray.200}",
                "dark": "{color.gray.800}"
              }
            },
            "hover": {
              "value": {
                "initial": "",
                "dark": ""
              }
            }
          }
        },
        "surface": {
          "background": {
            "base": {
              "value": {
                "initial": "{color.gray.100}",
                "dark": "{color.gray.900}"
              }
            }
          }
        },
        "state": {
          "primary": {
            "color": {
              "primary": {
                "value": {
                  "initial": "{color.primary.600}",
                  "dark": "{color.primary.400}"
                }
              },
              "secondary": {
                "value": {
                  "initial": "{color.primary.700}",
                  "dark": "{color.primary.200}"
                }
              }
            },
            "backgroundColor": {
              "primary": {
                "value": {
                  "initial": "{color.primary.50}",
                  "dark": "{color.primary.900}"
                }
              },
              "secondary": {
                "value": {
                  "initial": "{color.primary.100}",
                  "dark": "{color.primary.800}"
                }
              }
            },
            "borderColor": {
              "primary": {
                "value": {
                  "initial": "{color.primary.100}",
                  "dark": "{color.primary.800}"
                }
              },
              "secondary": {
                "value": {
                  "initial": "{color.primary.200}",
                  "dark": "{color.primary.700}"
                }
              }
            }
          },
          "info": {
            "color": {
              "primary": {
                "value": {
                  "initial": "{color.blue.500}",
                  "dark": "{color.blue.400}"
                }
              },
              "secondary": {
                "value": {
                  "initial": "{color.blue.600}",
                  "dark": "{color.blue.200}"
                }
              }
            },
            "backgroundColor": {
              "primary": {
                "value": {
                  "initial": "{color.blue.50}",
                  "dark": "{color.blue.900}"
                }
              },
              "secondary": {
                "value": {
                  "initial": "{color.blue.100}",
                  "dark": "{color.blue.800}"
                }
              }
            },
            "borderColor": {
              "primary": {
                "value": {
                  "initial": "{color.blue.100}",
                  "dark": "{color.blue.800}"
                }
              },
              "secondary": {
                "value": {
                  "initial": "{color.blue.200}",
                  "dark": "{color.blue.700}"
                }
              }
            }
          },
          "success": {
            "color": {
              "primary": {
                "value": {
                  "initial": "{color.green.500}",
                  "dark": "{color.green.400}"
                }
              },
              "secondary": {
                "value": {
                  "initial": "{color.green.600}",
                  "dark": "{color.green.200}"
                }
              }
            },
            "backgroundColor": {
              "primary": {
                "value": {
                  "initial": "{color.green.50}",
                  "dark": "{color.green.900}"
                }
              },
              "secondary": {
                "value": {
                  "initial": "{color.green.100}",
                  "dark": "{color.green.800}"
                }
              }
            },
            "borderColor": {
              "primary": {
                "value": {
                  "initial": "{color.green.100}",
                  "dark": "{color.green.800}"
                }
              },
              "secondary": {
                "value": {
                  "initial": "{color.green.200}",
                  "dark": "{color.green.700}"
                }
              }
            }
          },
          "warning": {
            "color": {
              "primary": {
                "value": {
                  "initial": "{color.yellow.600}",
                  "dark": "{color.yellow.400}"
                }
              },
              "secondary": {
                "value": {
                  "initial": "{color.yellow.700}",
                  "dark": "{color.yellow.200}"
                }
              }
            },
            "backgroundColor": {
              "primary": {
                "value": {
                  "initial": "{color.yellow.50}",
                  "dark": "{color.yellow.900}"
                }
              },
              "secondary": {
                "value": {
                  "initial": "{color.yellow.100}",
                  "dark": "{color.yellow.800}"
                }
              }
            },
            "borderColor": {
              "primary": {
                "value": {
                  "initial": "{color.yellow.100}",
                  "dark": "{color.yellow.800}"
                }
              },
              "secondary": {
                "value": {
                  "initial": "{color.yellow.200}",
                  "dark": "{color.yellow.700}"
                }
              }
            }
          },
          "danger": {
            "color": {
              "primary": {
                "value": {
                  "initial": "{color.red.500}",
                  "dark": "{color.red.300}"
                }
              },
              "secondary": {
                "value": {
                  "initial": "{color.red.600}",
                  "dark": "{color.red.200}"
                }
              }
            },
            "backgroundColor": {
              "primary": {
                "value": {
                  "initial": "{color.red.50}",
                  "dark": "{color.red.900}"
                }
              },
              "secondary": {
                "value": {
                  "initial": "{color.red.100}",
                  "dark": "{color.red.800}"
                }
              }
            },
            "borderColor": {
              "primary": {
                "value": {
                  "initial": "{color.red.100}",
                  "dark": "{color.red.800}"
                }
              },
              "secondary": {
                "value": {
                  "initial": "{color.red.200}",
                  "dark": "{color.red.700}"
                }
              }
            }
          }
        }
      },
      "typography": {
        "verticalMargin": {
          "sm": {
            "value": "16px"
          },
          "base": {
            "value": "32px"
          }
        },
        "letterSpacing": {
          "tight": {
            "value": "-0.025em"
          },
          "wide": {
            "value": "0.025em"
          }
        },
        "fontSize": {
          "xs": {
            "value": "12px"
          },
          "sm": {
            "value": "14px"
          },
          "base": {
            "value": "16px"
          },
          "lg": {
            "value": "18px"
          },
          "xl": {
            "value": "20px"
          },
          "2xl": {
            "value": "24px"
          },
          "3xl": {
            "value": "30px"
          },
          "4xl": {
            "value": "36px"
          },
          "5xl": {
            "value": "48px"
          },
          "6xl": {
            "value": "60px"
          },
          "7xl": {
            "value": "72px"
          },
          "8xl": {
            "value": "96px"
          },
          "9xl": {
            "value": "128px"
          }
        },
        "fontWeight": {
          "thin": {
            "value": "100"
          },
          "extralight": {
            "value": "200"
          },
          "light": {
            "value": "300"
          },
          "normal": {
            "value": "400"
          },
          "medium": {
            "value": "500"
          },
          "semibold": {
            "value": "600"
          },
          "bold": {
            "value": "700"
          },
          "extrabold": {
            "value": "800"
          },
          "black": {
            "value": "900"
          }
        },
        "lead": {
          "none": {
            "value": "1"
          },
          "tight": {
            "value": "1.25"
          },
          "snug": {
            "value": "1.375"
          },
          "normal": {
            "value": "1.5"
          },
          "relaxed": {
            "value": "1.625"
          },
          "loose": {
            "value": "2"
          }
        },
        "font": {
          "display": {
            "value": "{font.sans}"
          },
          "body": {
            "value": "{font.sans}"
          },
          "code": {
            "value": "{font.mono}"
          }
        },
        "color": {
          "primary": {
            "50": {
              "value": "{color.primary.50}"
            },
            "100": {
              "value": "{color.primary.100}"
            },
            "200": {
              "value": "{color.primary.200}"
            },
            "300": {
              "value": "{color.primary.300}"
            },
            "400": {
              "value": "{color.primary.400}"
            },
            "500": {
              "value": "{color.primary.500}"
            },
            "600": {
              "value": "{color.primary.600}"
            },
            "700": {
              "value": "{color.primary.700}"
            },
            "800": {
              "value": "{color.primary.800}"
            },
            "900": {
              "value": "{color.primary.900}"
            }
          },
          "secondary": {
            "50": {
              "value": "{color.gray.50}"
            },
            "100": {
              "value": "{color.gray.100}"
            },
            "200": {
              "value": "{color.gray.200}"
            },
            "300": {
              "value": "{color.gray.300}"
            },
            "400": {
              "value": "{color.gray.400}"
            },
            "500": {
              "value": "{color.gray.500}"
            },
            "600": {
              "value": "{color.gray.600}"
            },
            "700": {
              "value": "{color.gray.700}"
            },
            "800": {
              "value": "{color.gray.800}"
            },
            "900": {
              "value": "{color.gray.900}"
            }
          }
        }
      },
      "prose": {
        "p": {
          "fontSize": {
            "value": "{typography.fontSize.base}"
          },
          "lineHeight": {
            "value": "{typography.lead.normal}"
          },
          "margin": {
            "value": "{typography.verticalMargin.base} 0"
          },
          "br": {
            "margin": {
              "value": "{typography.verticalMargin.base} 0 0 0"
            }
          }
        },
        "h1": {
          "margin": {
            "value": "0 0 2rem"
          },
          "fontSize": {
            "value": "{typography.fontSize.5xl}"
          },
          "lineHeight": {
            "value": "{typography.lead.tight}"
          },
          "fontWeight": {
            "value": "{typography.fontWeight.bold}"
          },
          "letterSpacing": {
            "value": "{typography.letterSpacing.tight}"
          },
          "iconSize": {
            "value": "{typography.fontSize.3xl}"
          }
        },
        "h2": {
          "margin": {
            "value": "3rem 0 2rem"
          },
          "fontSize": {
            "value": "{typography.fontSize.4xl}"
          },
          "lineHeight": {
            "value": "{typography.lead.tight}"
          },
          "fontWeight": {
            "value": "{typography.fontWeight.semibold}"
          },
          "letterSpacing": {
            "value": "{typography.letterSpacing.tight}"
          },
          "iconSize": {
            "value": "{typography.fontSize.2xl}"
          }
        },
        "h3": {
          "margin": {
            "value": "3rem 0 2rem"
          },
          "fontSize": {
            "value": "{typography.fontSize.3xl}"
          },
          "lineHeight": {
            "value": "{typography.lead.snug}"
          },
          "fontWeight": {
            "value": "{typography.fontWeight.semibold}"
          },
          "letterSpacing": {
            "value": "{typography.letterSpacing.tight}"
          },
          "iconSize": {
            "value": "{typography.fontSize.xl}"
          }
        },
        "h4": {
          "margin": {
            "value": "3rem 0 2rem"
          },
          "fontSize": {
            "value": "{typography.fontSize.2xl}"
          },
          "lineHeight": {
            "value": "{typography.lead.snug}"
          },
          "fontWeight": {
            "value": "{typography.fontWeight.semibold}"
          },
          "letterSpacing": {
            "value": "{typography.letterSpacing.tight}"
          },
          "iconSize": {
            "value": "{typography.fontSize.lg}"
          }
        },
        "h5": {
          "margin": {
            "value": "3rem 0 2rem"
          },
          "fontSize": {
            "value": "{typography.fontSize.xl}"
          },
          "lineHeight": {
            "value": "{typography.lead.snug}"
          },
          "fontWeight": {
            "value": "{typography.fontWeight.semibold}"
          },
          "iconSize": {
            "value": "{typography.fontSize.lg}"
          }
        },
        "h6": {
          "margin": {
            "value": "3rem 0 2rem"
          },
          "fontSize": {
            "value": "{typography.fontSize.lg}"
          },
          "lineHeight": {
            "value": "{typography.lead.normal}"
          },
          "fontWeight": {
            "value": "{typography.fontWeight.semibold}"
          },
          "iconSize": {
            "value": "{typography.fontSize.base}"
          }
        },
        "strong": {
          "fontWeight": {
            "value": "{typography.fontWeight.semibold}"
          }
        },
        "img": {
          "margin": {
            "value": "{typography.verticalMargin.base} 0"
          }
        },
        "a": {
          "textDecoration": {
            "value": "none"
          },
          "color": {
            "static": {
              "value": {
                "initial": "inherit",
                "dark": "inherit"
              }
            },
            "hover": {
              "value": {
                "initial": "{typography.color.primary.500}",
                "dark": "{typography.color.primary.400}"
              }
            }
          },
          "border": {
            "width": {
              "value": "1px"
            },
            "style": {
              "static": {
                "value": "dashed"
              },
              "hover": {
                "value": "solid"
              }
            },
            "color": {
              "static": {
                "value": {
                  "initial": "currentColor",
                  "dark": "currentColor"
                }
              },
              "hover": {
                "value": {
                  "initial": "currentColor",
                  "dark": "currentColor"
                }
              }
            },
            "distance": {
              "value": "2px"
            }
          },
          "fontWeight": {
            "value": "{typography.fontWeight.medium}"
          },
          "hasCode": {
            "borderBottom": {
              "value": "none"
            }
          },
          "code": {
            "border": {
              "width": {
                "value": "{prose.a.border.width}"
              },
              "style": {
                "value": "{prose.a.border.style.static}"
              },
              "color": {
                "static": {
                  "value": {
                    "initial": "{typography.color.secondary.400}",
                    "dark": "{typography.color.secondary.600}"
                  }
                },
                "hover": {
                  "value": {
                    "initial": "{typography.color.primary.500}",
                    "dark": "{typography.color.primary.600}"
                  }
                }
              }
            },
            "color": {
              "static": {
                "value": {
                  "initial": "currentColor",
                  "dark": "currentColor"
                }
              },
              "hover": {
                "value": {
                  "initial": "currentColor",
                  "dark": "currentColor"
                }
              }
            },
            "background": {
              "static": {},
              "hover": {
                "value": {
                  "initial": "{typography.color.primary.50}",
                  "dark": "{typography.color.primary.900}"
                }
              }
            }
          }
        },
        "blockquote": {
          "margin": {
            "value": "{typography.verticalMargin.base} 0"
          },
          "padding": {
            "value": "0 0 0 24px"
          },
          "quotes": {
            "value": "'201C' '201D' '2018' '2019'"
          },
          "color": {
            "value": {
              "initial": "{typography.color.secondary.500}",
              "dark": "{typography.color.secondary.400}"
            }
          },
          "border": {
            "width": {
              "value": "4px"
            },
            "style": {
              "value": "solid"
            },
            "color": {
              "value": {
                "initial": "{typography.color.secondary.200}",
                "dark": "{typography.color.secondary.700}"
              }
            }
          }
        },
        "ul": {
          "listStyleType": {
            "value": "disc"
          },
          "margin": {
            "value": "{typography.verticalMargin.base} 0"
          },
          "padding": {
            "value": "0 0 0 21px"
          },
          "li": {
            "markerColor": {
              "value": {
                "initial": "{typography.color.secondary.400}",
                "dark": "{typography.color.secondary.500}"
              }
            }
          }
        },
        "ol": {
          "listStyleType": {
            "value": "decimal"
          },
          "margin": {
            "value": "{typography.verticalMargin.base} 0"
          },
          "padding": {
            "value": "0 0 0 21px"
          },
          "li": {
            "markerColor": {
              "value": {
                "initial": "{typography.color.secondary.500}",
                "dark": "{typography.color.secondary.500}"
              }
            }
          }
        },
        "li": {
          "margin": {
            "value": "{typography.verticalMargin.sm} 0"
          },
          "listStylePosition": {
            "value": "outside"
          }
        },
        "hr": {
          "margin": {
            "value": "{typography.verticalMargin.base} 0"
          },
          "style": {
            "value": "solid"
          },
          "width": {
            "value": "1px"
          },
          "color": {
            "value": {
              "initial": "{typography.color.secondary.200}",
              "dark": "{typography.color.secondary.800}"
            }
          }
        },
        "table": {
          "margin": {
            "value": "{typography.verticalMargin.base} 0"
          },
          "textAlign": {
            "value": "left"
          },
          "fontSize": {
            "value": "{typography.fontSize.sm}"
          },
          "lineHeight": {
            "value": "inherit"
          }
        },
        "thead": {
          "border": {
            "width": {
              "value": "0px"
            },
            "style": {
              "value": "solid"
            },
            "color": {
              "value": {
                "initial": "{typography.color.secondary.300}",
                "dark": "{typography.color.secondary.600}"
              }
            }
          },
          "borderBottom": {
            "width": {
              "value": "1px"
            },
            "style": {
              "value": "solid"
            },
            "color": {
              "value": {
                "initial": "{typography.color.secondary.300}",
                "dark": "{typography.color.secondary.600}"
              }
            }
          }
        },
        "th": {
          "color": {
            "value": {
              "initial": "{typography.color.secondary.600}",
              "dark": "{typography.color.secondary.400}"
            }
          },
          "padding": {
            "value": "0 {typography.verticalMargin.sm} {typography.verticalMargin.sm} {typography.verticalMargin.sm}"
          },
          "fontWeight": {
            "value": "{typography.fontWeight.semibold}"
          }
        },
        "tbody": {
          "tr": {
            "borderBottom": {
              "width": {
                "value": "1px"
              },
              "style": {
                "value": "dashed"
              },
              "color": {
                "value": {
                  "initial": "{typography.color.secondary.300}",
                  "dark": "{typography.color.secondary.700}"
                }
              }
            }
          },
          "td": {
            "padding": {
              "value": "{typography.verticalMargin.sm}"
            }
          },
          "code": {
            "inline": {
              "fontSize": {
                "value": "{typography.fontSize.sm}"
              }
            }
          }
        },
        "code": {
          "block": {
            "fontSize": {
              "value": "{typography.fontSize.sm}"
            },
            "margin": {
              "value": "{typography.verticalMargin.base} 0"
            },
            "border": {
              "width": {
                "value": "1px"
              },
              "style": {
                "value": "solid"
              },
              "color": {
                "value": {
                  "initial": "{typography.color.secondary.200}",
                  "dark": "{typography.color.secondary.800}"
                }
              }
            },
            "color": {
              "value": {
                "initial": "{typography.color.secondary.700}",
                "dark": "{typography.color.secondary.200}"
              }
            },
            "backgroundColor": {
              "value": {
                "initial": "{typography.color.secondary.100}",
                "dark": "{typography.color.secondary.900}"
              }
            },
            "pre": {
              "padding": {
                "value": "{typography.verticalMargin.sm}"
              }
            }
          },
          "inline": {
            "borderRadius": {
              "value": "0.375rem"
            },
            "padding": {
              "value": "0.25rem 0.375rem 0.25rem 0.375rem"
            },
            "fontSize": {
              "value": "{typography.fontSize.sm}"
            },
            "fontWeight": {
              "value": "{typography.fontWeight.normal}"
            },
            "color": {
              "value": {
                "initial": "{typography.color.secondary.700}",
                "dark": "{typography.color.secondary.200}"
              }
            },
            "backgroundColor": {
              "value": {
                "initial": "{typography.color.secondary.100}",
                "dark": "{typography.color.secondary.900}"
              }
            }
          }
        }
      },
      "radii": {
        "sm": {
          "value": "0.375rem"
        },
        "md": {
          "value": "0.5rem"
        },
        "lg": {
          "value": "0.75rem"
        },
        "none": {
          "value": "0px"
        },
        "2xs": {
          "value": "0.125rem"
        },
        "xs": {
          "value": "0.25rem"
        },
        "xl": {
          "value": "1rem"
        },
        "2xl": {
          "value": "1.5rem"
        },
        "3xl": {
          "value": "1.75rem"
        },
        "full": {
          "value": "9999px"
        }
      },
      "fontSize": {
        "xs": {
          "value": "0.75rem"
        },
        "sm": {
          "value": "0.875rem"
        },
        "base": {
          "value": "1rem"
        },
        "lg": {
          "value": "1.125rem"
        },
        "xl": {
          "value": "1.25rem"
        },
        "2xl": {
          "value": "1.5rem"
        },
        "3xl": {
          "value": "1.875rem"
        },
        "4xl": {
          "value": "2.25rem"
        },
        "5xl": {
          "value": "3rem"
        },
        "6xl": {
          "value": "3.75rem"
        },
        "7xl": {
          "value": "4.5rem"
        },
        "8xl": {
          "value": "6rem"
        },
        "9xl": {
          "value": "8rem"
        }
      },
      "lead": {
        "1": {
          "value": ".025rem"
        },
        "2": {
          "value": ".5rem"
        },
        "3": {
          "value": ".75rem"
        },
        "4": {
          "value": "1rem"
        },
        "5": {
          "value": "1.25rem"
        },
        "6": {
          "value": "1.5rem"
        },
        "7": {
          "value": "1.75rem"
        },
        "8": {
          "value": "2rem"
        },
        "9": {
          "value": "2.25rem"
        },
        "10": {
          "value": "2.5rem"
        },
        "none": {
          "value": "1"
        },
        "tight": {
          "value": "1.25"
        },
        "snug": {
          "value": "1.375"
        },
        "normal": {
          "value": "1.5"
        },
        "relaxed": {
          "value": "1.625"
        },
        "loose": {
          "value": "2"
        }
      },
      "font": {
        "sans": {
          "value": "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji"
        },
        "serif": {
          "value": "ui-serif, Georgia, Cambria, Times New Roman, Times, serif"
        },
        "mono": {
          "value": "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace"
        }
      },
      "docus": {
        "header": {
          "height": {
            "value": "64px"
          }
        },
        "footer": {
          "padding": {
            "value": "{space.4} 0"
          }
        },
        "readableLine": {
          "value": "78ch"
        },
        "loadingBar": {
          "height": {
            "value": "3px"
          },
          "gradientColorStop1": {
            "value": "#00dc82"
          },
          "gradientColorStop2": {
            "value": "#34cdfe"
          },
          "gradientColorStop3": {
            "value": "#0047e1"
          }
        }
      },
      "media": {
        "xs": {
          "value": "(min-width: 475px)"
        },
        "sm": {
          "value": "(min-width: 640px)"
        },
        "md": {
          "value": "(min-width: 768px)"
        },
        "lg": {
          "value": "(min-width: 1024px)"
        },
        "xl": {
          "value": "(min-width: 1280px)"
        },
        "2xl": {
          "value": "(min-width: 1536px)"
        },
        "rm": {
          "value": "(prefers-reduced-motion: reduce)"
        },
        "landscape": {
          "value": "only screen and (orientation: landscape)"
        },
        "portrait": {
          "value": "only screen and (orientation: portrait)"
        }
      },
      "width": {
        "screen": {
          "value": "100vw"
        }
      },
      "height": {
        "screen": {
          "value": "100vh"
        }
      },
      "shadow": {
        "xs": {
          "value": "0px 1px 2px 0px #000000"
        },
        "sm": {
          "value": "0px 1px 3px 0px #000000, 0px 1px 2px -1px #000000"
        },
        "md": {
          "value": "0px 4px 6px -1px #000000, 0px 2px 4px -2px #000000"
        },
        "lg": {
          "value": "0px 10px 15px -3px #000000, 0px 4px 6px -4px #000000"
        },
        "xl": {
          "value": "0px 20px 25px -5px {color.gray.400}, 0px 8px 10px -6px #000000"
        },
        "2xl": {
          "value": "0px 25px 50px -12px {color.gray.900}"
        },
        "none": {
          "value": "0px 0px 0px 0px transparent"
        }
      },
      "size": {
        "0": {
          "value": "0px"
        },
        "2": {
          "value": "2px"
        },
        "4": {
          "value": "4px"
        },
        "6": {
          "value": "6px"
        },
        "8": {
          "value": "8px"
        },
        "12": {
          "value": "12px"
        },
        "16": {
          "value": "16px"
        },
        "20": {
          "value": "20px"
        },
        "24": {
          "value": "24px"
        },
        "32": {
          "value": "32px"
        },
        "40": {
          "value": "40px"
        },
        "48": {
          "value": "48px"
        },
        "56": {
          "value": "56px"
        },
        "64": {
          "value": "64px"
        },
        "80": {
          "value": "80px"
        },
        "104": {
          "value": "104px"
        },
        "200": {
          "value": "200px"
        },
        "xs": {
          "value": "20rem"
        },
        "sm": {
          "value": "24rem"
        },
        "md": {
          "value": "28rem"
        },
        "lg": {
          "value": "32rem"
        },
        "xl": {
          "value": "36rem"
        },
        "2xl": {
          "value": "42rem"
        },
        "3xl": {
          "value": "48rem"
        },
        "4xl": {
          "value": "56rem"
        },
        "5xl": {
          "value": "64rem"
        },
        "6xl": {
          "value": "72rem"
        },
        "7xl": {
          "value": "80rem"
        },
        "full": {
          "value": "100%"
        }
      },
      "space": {
        "0": {
          "value": "0px"
        },
        "1": {
          "value": "0.25rem"
        },
        "2": {
          "value": "0.5rem"
        },
        "3": {
          "value": "0.75rem"
        },
        "4": {
          "value": "1rem"
        },
        "5": {
          "value": "1.25rem"
        },
        "6": {
          "value": "1.5rem"
        },
        "7": {
          "value": "1.75rem"
        },
        "8": {
          "value": "2rem"
        },
        "9": {
          "value": "2.25rem"
        },
        "10": {
          "value": "2.5rem"
        },
        "11": {
          "value": "2.75rem"
        },
        "12": {
          "value": "3rem"
        },
        "14": {
          "value": "3.5rem"
        },
        "16": {
          "value": "4rem"
        },
        "20": {
          "value": "5rem"
        },
        "24": {
          "value": "6rem"
        },
        "28": {
          "value": "7rem"
        },
        "32": {
          "value": "8rem"
        },
        "36": {
          "value": "9rem"
        },
        "40": {
          "value": "10rem"
        },
        "44": {
          "value": "11rem"
        },
        "48": {
          "value": "12rem"
        },
        "52": {
          "value": "13rem"
        },
        "56": {
          "value": "14rem"
        },
        "60": {
          "value": "15rem"
        },
        "64": {
          "value": "16rem"
        },
        "72": {
          "value": "18rem"
        },
        "80": {
          "value": "20rem"
        },
        "96": {
          "value": "24rem"
        },
        "px": {
          "value": "1px"
        },
        "rem": {
          "125": {
            "value": "0.125rem"
          },
          "375": {
            "value": "0.375rem"
          },
          "625": {
            "value": "0.625rem"
          },
          "875": {
            "value": "0.875rem"
          }
        }
      },
      "borderWidth": {
        "noBorder": {
          "value": "0"
        },
        "sm": {
          "value": "1px"
        },
        "md": {
          "value": "2px"
        },
        "lg": {
          "value": "3px"
        }
      },
      "opacity": {
        "noOpacity": {
          "value": "0"
        },
        "bright": {
          "value": "0.1"
        },
        "light": {
          "value": "0.15"
        },
        "soft": {
          "value": "0.3"
        },
        "medium": {
          "value": "0.5"
        },
        "high": {
          "value": "0.8"
        },
        "total": {
          "value": "1"
        }
      },
      "fontWeight": {
        "thin": {
          "value": "100"
        },
        "extralight": {
          "value": "200"
        },
        "light": {
          "value": "300"
        },
        "normal": {
          "value": "400"
        },
        "medium": {
          "value": "500"
        },
        "semibold": {
          "value": "600"
        },
        "bold": {
          "value": "700"
        },
        "extrabold": {
          "value": "800"
        },
        "black": {
          "value": "900"
        }
      },
      "letterSpacing": {
        "tighter": {
          "value": "-0.05em"
        },
        "tight": {
          "value": "-0.025em"
        },
        "normal": {
          "value": "0em"
        },
        "wide": {
          "value": "0.025em"
        },
        "wider": {
          "value": "0.05em"
        },
        "widest": {
          "value": "0.1em"
        }
      },
      "text": {
        "xs": {
          "fontSize": {
            "value": "{fontSize.xs}"
          },
          "lineHeight": {
            "value": "{lead.4}"
          }
        },
        "sm": {
          "fontSize": {
            "value": "{fontSize.sm}"
          },
          "lineHeight": {
            "value": "{lead.5}"
          }
        },
        "base": {
          "fontSize": {
            "value": "{fontSize.base}"
          },
          "lineHeight": {
            "value": "{lead.6}"
          }
        },
        "lg": {
          "fontSize": {
            "value": "{fontSize.lg}"
          },
          "lineHeight": {
            "value": "{lead.7}"
          }
        },
        "xl": {
          "fontSize": {
            "value": "{fontSize.xl}"
          },
          "lineHeight": {
            "value": "{lead.7}"
          }
        },
        "2xl": {
          "fontSize": {
            "value": "{fontSize.2xl}"
          },
          "lineHeight": {
            "value": "{lead.8}"
          }
        },
        "3xl": {
          "fontSize": {
            "value": "{fontSize.3xl}"
          },
          "lineHeight": {
            "value": "{lead.9}"
          }
        },
        "4xl": {
          "fontSize": {
            "value": "{fontSize.4xl}"
          },
          "lineHeight": {
            "value": "{lead.10}"
          }
        },
        "5xl": {
          "fontSize": {
            "value": "{fontSize.5xl}"
          },
          "lineHeight": {
            "value": "{lead.none}"
          }
        },
        "6xl": {
          "fontSize": {
            "value": "{fontSize.6xl}"
          },
          "lineHeight": {
            "value": "{lead.none}"
          }
        }
      }
    }
  },
  "default": {
    "color": {
      "primary": {
        "50": {
          "value": "#fff2cc"
        },
        "100": {
          "value": "#ffe599"
        },
        "200": {
          "value": "#ffd966"
        },
        "300": {
          "value": "#f1c232"
        },
        "400": {
          "value": "#f1c232"
        },
        "500": {
          "value": "#f1c232"
        },
        "600": {
          "value": "#f1c232"
        },
        "700": {
          "value": "#f1c232"
        },
        "800": {
          "value": "#f1c232"
        },
        "900": {
          "value": "#f1c232"
        }
      },
      "white": {
        "value": "#ffffff"
      },
      "black": {
        "value": "#0c0c0d"
      },
      "secondary": {
        "50": {
          "value": "{color.gray.50}"
        },
        "100": {
          "value": "{color.gray.100}"
        },
        "200": {
          "value": "{color.gray.200}"
        },
        "300": {
          "value": "{color.gray.300}"
        },
        "400": {
          "value": "{color.gray.400}"
        },
        "500": {
          "value": "{color.gray.500}"
        },
        "600": {
          "value": "{color.gray.600}"
        },
        "700": {
          "value": "{color.gray.700}"
        },
        "800": {
          "value": "{color.gray.800}"
        },
        "900": {
          "value": "{color.gray.900}"
        }
      },
      "gray": {
        "50": {
          "value": "#fafafa"
        },
        "100": {
          "value": "#f4f4f5"
        },
        "200": {
          "value": "#e4e4e7"
        },
        "300": {
          "value": "#D4d4d8"
        },
        "400": {
          "value": "#a1a1aa"
        },
        "500": {
          "value": "#71717A"
        },
        "600": {
          "value": "#52525B"
        },
        "700": {
          "value": "#3f3f46"
        },
        "800": {
          "value": "#27272A"
        },
        "900": {
          "value": "#18181B"
        }
      },
      "green": {
        "50": {
          "value": "#d6ffee"
        },
        "100": {
          "value": "#acffdd"
        },
        "200": {
          "value": "#83ffcc"
        },
        "300": {
          "value": "#30ffaa"
        },
        "400": {
          "value": "#00dc82"
        },
        "500": {
          "value": "#00bd6f"
        },
        "600": {
          "value": "#009d5d"
        },
        "700": {
          "value": "#007e4a"
        },
        "800": {
          "value": "#005e38"
        },
        "900": {
          "value": "#003f25"
        }
      },
      "yellow": {
        "50": {
          "value": "#fdf6db"
        },
        "100": {
          "value": "#fcedb7"
        },
        "200": {
          "value": "#fae393"
        },
        "300": {
          "value": "#f8da70"
        },
        "400": {
          "value": "#f7d14c"
        },
        "500": {
          "value": "#f5c828"
        },
        "600": {
          "value": "#daac0a"
        },
        "700": {
          "value": "#a38108"
        },
        "800": {
          "value": "#6d5605"
        },
        "900": {
          "value": "#362b03"
        }
      },
      "orange": {
        "50": {
          "value": "#ffe9d9"
        },
        "100": {
          "value": "#ffd3b3"
        },
        "200": {
          "value": "#ffbd8d"
        },
        "300": {
          "value": "#ffa666"
        },
        "400": {
          "value": "#ff9040"
        },
        "500": {
          "value": "#ff7a1a"
        },
        "600": {
          "value": "#e15e00"
        },
        "700": {
          "value": "#a94700"
        },
        "800": {
          "value": "#702f00"
        },
        "900": {
          "value": "#381800"
        }
      },
      "red": {
        "50": {
          "value": "#ffdbd9"
        },
        "100": {
          "value": "#ffb7b3"
        },
        "200": {
          "value": "#ff948d"
        },
        "300": {
          "value": "#ff7066"
        },
        "400": {
          "value": "#ff4c40"
        },
        "500": {
          "value": "#ff281a"
        },
        "600": {
          "value": "#e10e00"
        },
        "700": {
          "value": "#a90a00"
        },
        "800": {
          "value": "#700700"
        },
        "900": {
          "value": "#380300"
        }
      },
      "pear": {
        "50": {
          "value": "#f7f8dc"
        },
        "100": {
          "value": "#eff0ba"
        },
        "200": {
          "value": "#e8e997"
        },
        "300": {
          "value": "#e0e274"
        },
        "400": {
          "value": "#d8da52"
        },
        "500": {
          "value": "#d0d32f"
        },
        "600": {
          "value": "#a8aa24"
        },
        "700": {
          "value": "#7e801b"
        },
        "800": {
          "value": "#545512"
        },
        "900": {
          "value": "#2a2b09"
        }
      },
      "teal": {
        "50": {
          "value": "#d7faf8"
        },
        "100": {
          "value": "#aff4f0"
        },
        "200": {
          "value": "#87efe9"
        },
        "300": {
          "value": "#5fe9e1"
        },
        "400": {
          "value": "#36e4da"
        },
        "500": {
          "value": "#1cd1c6"
        },
        "600": {
          "value": "#16a79e"
        },
        "700": {
          "value": "#117d77"
        },
        "800": {
          "value": "#0b544f"
        },
        "900": {
          "value": "#062a28"
        }
      },
      "lightblue": {
        "50": {
          "value": "#d9f8ff"
        },
        "100": {
          "value": "#b3f1ff"
        },
        "200": {
          "value": "#8deaff"
        },
        "300": {
          "value": "#66e4ff"
        },
        "400": {
          "value": "#40ddff"
        },
        "500": {
          "value": "#1ad6ff"
        },
        "600": {
          "value": "#00b9e1"
        },
        "700": {
          "value": "#008aa9"
        },
        "800": {
          "value": "#005c70"
        },
        "900": {
          "value": "#002e38"
        }
      },
      "blue": {
        "50": {
          "value": "#d9f1ff"
        },
        "100": {
          "value": "#b3e4ff"
        },
        "200": {
          "value": "#8dd6ff"
        },
        "300": {
          "value": "#66c8ff"
        },
        "400": {
          "value": "#40bbff"
        },
        "500": {
          "value": "#1aadff"
        },
        "600": {
          "value": "#0090e1"
        },
        "700": {
          "value": "#006ca9"
        },
        "800": {
          "value": "#004870"
        },
        "900": {
          "value": "#002438"
        }
      },
      "indigoblue": {
        "50": {
          "value": "#d9e5ff"
        },
        "100": {
          "value": "#b3cbff"
        },
        "200": {
          "value": "#8db0ff"
        },
        "300": {
          "value": "#6696ff"
        },
        "400": {
          "value": "#407cff"
        },
        "500": {
          "value": "#1a62ff"
        },
        "600": {
          "value": "#0047e1"
        },
        "700": {
          "value": "#0035a9"
        },
        "800": {
          "value": "#002370"
        },
        "900": {
          "value": "#001238"
        }
      },
      "royalblue": {
        "50": {
          "value": "#dfdbfb"
        },
        "100": {
          "value": "#c0b7f7"
        },
        "200": {
          "value": "#a093f3"
        },
        "300": {
          "value": "#806ff0"
        },
        "400": {
          "value": "#614bec"
        },
        "500": {
          "value": "#4127e8"
        },
        "600": {
          "value": "#2c15c4"
        },
        "700": {
          "value": "#211093"
        },
        "800": {
          "value": "#160a62"
        },
        "900": {
          "value": "#0b0531"
        }
      },
      "purple": {
        "50": {
          "value": "#ead9ff"
        },
        "100": {
          "value": "#d5b3ff"
        },
        "200": {
          "value": "#c08dff"
        },
        "300": {
          "value": "#ab66ff"
        },
        "400": {
          "value": "#9640ff"
        },
        "500": {
          "value": "#811aff"
        },
        "600": {
          "value": "#6500e1"
        },
        "700": {
          "value": "#4c00a9"
        },
        "800": {
          "value": "#330070"
        },
        "900": {
          "value": "#190038"
        }
      },
      "pink": {
        "50": {
          "value": "#ffd9f2"
        },
        "100": {
          "value": "#ffb3e5"
        },
        "200": {
          "value": "#ff8dd8"
        },
        "300": {
          "value": "#ff66cc"
        },
        "400": {
          "value": "#ff40bf"
        },
        "500": {
          "value": "#ff1ab2"
        },
        "600": {
          "value": "#e10095"
        },
        "700": {
          "value": "#a90070"
        },
        "800": {
          "value": "#70004b"
        },
        "900": {
          "value": "#380025"
        }
      },
      "ruby": {
        "50": {
          "value": "#ffd9e4"
        },
        "100": {
          "value": "#ffb3c9"
        },
        "200": {
          "value": "#ff8dae"
        },
        "300": {
          "value": "#ff6694"
        },
        "400": {
          "value": "#ff4079"
        },
        "500": {
          "value": "#ff1a5e"
        },
        "600": {
          "value": "#e10043"
        },
        "700": {
          "value": "#a90032"
        },
        "800": {
          "value": "#700021"
        },
        "900": {
          "value": "#380011"
        }
      }
    },
    "elements": {
      "text": {
        "primary": {
          "color": {
            "static": {
              "value": {
                "initial": "{color.gray.900}",
                "dark": "{color.gray.50}"
              }
            },
            "hover": {}
          }
        },
        "secondary": {
          "color": {
            "static": {
              "value": {
                "initial": "{color.gray.500}",
                "dark": "{color.gray.400}"
              }
            },
            "hover": {
              "value": {
                "initial": "{color.gray.700}",
                "dark": "{color.gray.200}"
              }
            }
          }
        }
      },
      "container": {
        "maxWidth": {
          "value": "80rem"
        },
        "padding": {
          "mobile": {
            "value": "{space.4}"
          },
          "xs": {
            "value": "{space.4}"
          },
          "sm": {
            "value": "{space.6}"
          },
          "md": {
            "value": "{space.6}"
          }
        }
      },
      "backdrop": {
        "filter": {
          "value": "saturate(200%) blur(20px)"
        },
        "background": {
          "value": {
            "initial": "#fffc",
            "dark": "#0c0d0ccc"
          }
        }
      },
      "border": {
        "primary": {
          "static": {
            "value": {
              "initial": "{color.gray.100}",
              "dark": "{color.gray.900}"
            }
          },
          "hover": {
            "value": {
              "initial": "{color.gray.200}",
              "dark": "{color.gray.800}"
            }
          }
        },
        "secondary": {
          "static": {
            "value": {
              "initial": "{color.gray.200}",
              "dark": "{color.gray.800}"
            }
          },
          "hover": {
            "value": {
              "initial": "",
              "dark": ""
            }
          }
        }
      },
      "surface": {
        "background": {
          "base": {
            "value": {
              "initial": "{color.gray.100}",
              "dark": "{color.gray.900}"
            }
          }
        }
      },
      "state": {
        "primary": {
          "color": {
            "primary": {
              "value": {
                "initial": "{color.primary.600}",
                "dark": "{color.primary.400}"
              }
            },
            "secondary": {
              "value": {
                "initial": "{color.primary.700}",
                "dark": "{color.primary.200}"
              }
            }
          },
          "backgroundColor": {
            "primary": {
              "value": {
                "initial": "{color.primary.50}",
                "dark": "{color.primary.900}"
              }
            },
            "secondary": {
              "value": {
                "initial": "{color.primary.100}",
                "dark": "{color.primary.800}"
              }
            }
          },
          "borderColor": {
            "primary": {
              "value": {
                "initial": "{color.primary.100}",
                "dark": "{color.primary.800}"
              }
            },
            "secondary": {
              "value": {
                "initial": "{color.primary.200}",
                "dark": "{color.primary.700}"
              }
            }
          }
        },
        "info": {
          "color": {
            "primary": {
              "value": {
                "initial": "{color.blue.500}",
                "dark": "{color.blue.400}"
              }
            },
            "secondary": {
              "value": {
                "initial": "{color.blue.600}",
                "dark": "{color.blue.200}"
              }
            }
          },
          "backgroundColor": {
            "primary": {
              "value": {
                "initial": "{color.blue.50}",
                "dark": "{color.blue.900}"
              }
            },
            "secondary": {
              "value": {
                "initial": "{color.blue.100}",
                "dark": "{color.blue.800}"
              }
            }
          },
          "borderColor": {
            "primary": {
              "value": {
                "initial": "{color.blue.100}",
                "dark": "{color.blue.800}"
              }
            },
            "secondary": {
              "value": {
                "initial": "{color.blue.200}",
                "dark": "{color.blue.700}"
              }
            }
          }
        },
        "success": {
          "color": {
            "primary": {
              "value": {
                "initial": "{color.green.500}",
                "dark": "{color.green.400}"
              }
            },
            "secondary": {
              "value": {
                "initial": "{color.green.600}",
                "dark": "{color.green.200}"
              }
            }
          },
          "backgroundColor": {
            "primary": {
              "value": {
                "initial": "{color.green.50}",
                "dark": "{color.green.900}"
              }
            },
            "secondary": {
              "value": {
                "initial": "{color.green.100}",
                "dark": "{color.green.800}"
              }
            }
          },
          "borderColor": {
            "primary": {
              "value": {
                "initial": "{color.green.100}",
                "dark": "{color.green.800}"
              }
            },
            "secondary": {
              "value": {
                "initial": "{color.green.200}",
                "dark": "{color.green.700}"
              }
            }
          }
        },
        "warning": {
          "color": {
            "primary": {
              "value": {
                "initial": "{color.yellow.600}",
                "dark": "{color.yellow.400}"
              }
            },
            "secondary": {
              "value": {
                "initial": "{color.yellow.700}",
                "dark": "{color.yellow.200}"
              }
            }
          },
          "backgroundColor": {
            "primary": {
              "value": {
                "initial": "{color.yellow.50}",
                "dark": "{color.yellow.900}"
              }
            },
            "secondary": {
              "value": {
                "initial": "{color.yellow.100}",
                "dark": "{color.yellow.800}"
              }
            }
          },
          "borderColor": {
            "primary": {
              "value": {
                "initial": "{color.yellow.100}",
                "dark": "{color.yellow.800}"
              }
            },
            "secondary": {
              "value": {
                "initial": "{color.yellow.200}",
                "dark": "{color.yellow.700}"
              }
            }
          }
        },
        "danger": {
          "color": {
            "primary": {
              "value": {
                "initial": "{color.red.500}",
                "dark": "{color.red.300}"
              }
            },
            "secondary": {
              "value": {
                "initial": "{color.red.600}",
                "dark": "{color.red.200}"
              }
            }
          },
          "backgroundColor": {
            "primary": {
              "value": {
                "initial": "{color.red.50}",
                "dark": "{color.red.900}"
              }
            },
            "secondary": {
              "value": {
                "initial": "{color.red.100}",
                "dark": "{color.red.800}"
              }
            }
          },
          "borderColor": {
            "primary": {
              "value": {
                "initial": "{color.red.100}",
                "dark": "{color.red.800}"
              }
            },
            "secondary": {
              "value": {
                "initial": "{color.red.200}",
                "dark": "{color.red.700}"
              }
            }
          }
        }
      }
    },
    "typography": {
      "verticalMargin": {
        "sm": {
          "value": "16px"
        },
        "base": {
          "value": "32px"
        }
      },
      "letterSpacing": {
        "tight": {
          "value": "-0.025em"
        },
        "wide": {
          "value": "0.025em"
        }
      },
      "fontSize": {
        "xs": {
          "value": "12px"
        },
        "sm": {
          "value": "14px"
        },
        "base": {
          "value": "16px"
        },
        "lg": {
          "value": "18px"
        },
        "xl": {
          "value": "20px"
        },
        "2xl": {
          "value": "24px"
        },
        "3xl": {
          "value": "30px"
        },
        "4xl": {
          "value": "36px"
        },
        "5xl": {
          "value": "48px"
        },
        "6xl": {
          "value": "60px"
        },
        "7xl": {
          "value": "72px"
        },
        "8xl": {
          "value": "96px"
        },
        "9xl": {
          "value": "128px"
        }
      },
      "fontWeight": {
        "thin": {
          "value": "100"
        },
        "extralight": {
          "value": "200"
        },
        "light": {
          "value": "300"
        },
        "normal": {
          "value": "400"
        },
        "medium": {
          "value": "500"
        },
        "semibold": {
          "value": "600"
        },
        "bold": {
          "value": "700"
        },
        "extrabold": {
          "value": "800"
        },
        "black": {
          "value": "900"
        }
      },
      "lead": {
        "none": {
          "value": "1"
        },
        "tight": {
          "value": "1.25"
        },
        "snug": {
          "value": "1.375"
        },
        "normal": {
          "value": "1.5"
        },
        "relaxed": {
          "value": "1.625"
        },
        "loose": {
          "value": "2"
        }
      },
      "font": {
        "display": {
          "value": "{font.sans}"
        },
        "body": {
          "value": "{font.sans}"
        },
        "code": {
          "value": "{font.mono}"
        }
      },
      "color": {
        "primary": {
          "50": {
            "value": "{color.primary.50}"
          },
          "100": {
            "value": "{color.primary.100}"
          },
          "200": {
            "value": "{color.primary.200}"
          },
          "300": {
            "value": "{color.primary.300}"
          },
          "400": {
            "value": "{color.primary.400}"
          },
          "500": {
            "value": "{color.primary.500}"
          },
          "600": {
            "value": "{color.primary.600}"
          },
          "700": {
            "value": "{color.primary.700}"
          },
          "800": {
            "value": "{color.primary.800}"
          },
          "900": {
            "value": "{color.primary.900}"
          }
        },
        "secondary": {
          "50": {
            "value": "{color.gray.50}"
          },
          "100": {
            "value": "{color.gray.100}"
          },
          "200": {
            "value": "{color.gray.200}"
          },
          "300": {
            "value": "{color.gray.300}"
          },
          "400": {
            "value": "{color.gray.400}"
          },
          "500": {
            "value": "{color.gray.500}"
          },
          "600": {
            "value": "{color.gray.600}"
          },
          "700": {
            "value": "{color.gray.700}"
          },
          "800": {
            "value": "{color.gray.800}"
          },
          "900": {
            "value": "{color.gray.900}"
          }
        }
      }
    },
    "prose": {
      "p": {
        "fontSize": {
          "value": "{typography.fontSize.base}"
        },
        "lineHeight": {
          "value": "{typography.lead.normal}"
        },
        "margin": {
          "value": "{typography.verticalMargin.base} 0"
        },
        "br": {
          "margin": {
            "value": "{typography.verticalMargin.base} 0 0 0"
          }
        }
      },
      "h1": {
        "margin": {
          "value": "0 0 2rem"
        },
        "fontSize": {
          "value": "{typography.fontSize.5xl}"
        },
        "lineHeight": {
          "value": "{typography.lead.tight}"
        },
        "fontWeight": {
          "value": "{typography.fontWeight.bold}"
        },
        "letterSpacing": {
          "value": "{typography.letterSpacing.tight}"
        },
        "iconSize": {
          "value": "{typography.fontSize.3xl}"
        }
      },
      "h2": {
        "margin": {
          "value": "3rem 0 2rem"
        },
        "fontSize": {
          "value": "{typography.fontSize.4xl}"
        },
        "lineHeight": {
          "value": "{typography.lead.tight}"
        },
        "fontWeight": {
          "value": "{typography.fontWeight.semibold}"
        },
        "letterSpacing": {
          "value": "{typography.letterSpacing.tight}"
        },
        "iconSize": {
          "value": "{typography.fontSize.2xl}"
        }
      },
      "h3": {
        "margin": {
          "value": "3rem 0 2rem"
        },
        "fontSize": {
          "value": "{typography.fontSize.3xl}"
        },
        "lineHeight": {
          "value": "{typography.lead.snug}"
        },
        "fontWeight": {
          "value": "{typography.fontWeight.semibold}"
        },
        "letterSpacing": {
          "value": "{typography.letterSpacing.tight}"
        },
        "iconSize": {
          "value": "{typography.fontSize.xl}"
        }
      },
      "h4": {
        "margin": {
          "value": "3rem 0 2rem"
        },
        "fontSize": {
          "value": "{typography.fontSize.2xl}"
        },
        "lineHeight": {
          "value": "{typography.lead.snug}"
        },
        "fontWeight": {
          "value": "{typography.fontWeight.semibold}"
        },
        "letterSpacing": {
          "value": "{typography.letterSpacing.tight}"
        },
        "iconSize": {
          "value": "{typography.fontSize.lg}"
        }
      },
      "h5": {
        "margin": {
          "value": "3rem 0 2rem"
        },
        "fontSize": {
          "value": "{typography.fontSize.xl}"
        },
        "lineHeight": {
          "value": "{typography.lead.snug}"
        },
        "fontWeight": {
          "value": "{typography.fontWeight.semibold}"
        },
        "iconSize": {
          "value": "{typography.fontSize.lg}"
        }
      },
      "h6": {
        "margin": {
          "value": "3rem 0 2rem"
        },
        "fontSize": {
          "value": "{typography.fontSize.lg}"
        },
        "lineHeight": {
          "value": "{typography.lead.normal}"
        },
        "fontWeight": {
          "value": "{typography.fontWeight.semibold}"
        },
        "iconSize": {
          "value": "{typography.fontSize.base}"
        }
      },
      "strong": {
        "fontWeight": {
          "value": "{typography.fontWeight.semibold}"
        }
      },
      "img": {
        "margin": {
          "value": "{typography.verticalMargin.base} 0"
        }
      },
      "a": {
        "textDecoration": {
          "value": "none"
        },
        "color": {
          "static": {
            "value": {
              "initial": "inherit",
              "dark": "inherit"
            }
          },
          "hover": {
            "value": {
              "initial": "{typography.color.primary.500}",
              "dark": "{typography.color.primary.400}"
            }
          }
        },
        "border": {
          "width": {
            "value": "1px"
          },
          "style": {
            "static": {
              "value": "dashed"
            },
            "hover": {
              "value": "solid"
            }
          },
          "color": {
            "static": {
              "value": {
                "initial": "currentColor",
                "dark": "currentColor"
              }
            },
            "hover": {
              "value": {
                "initial": "currentColor",
                "dark": "currentColor"
              }
            }
          },
          "distance": {
            "value": "2px"
          }
        },
        "fontWeight": {
          "value": "{typography.fontWeight.medium}"
        },
        "hasCode": {
          "borderBottom": {
            "value": "none"
          }
        },
        "code": {
          "border": {
            "width": {
              "value": "{prose.a.border.width}"
            },
            "style": {
              "value": "{prose.a.border.style.static}"
            },
            "color": {
              "static": {
                "value": {
                  "initial": "{typography.color.secondary.400}",
                  "dark": "{typography.color.secondary.600}"
                }
              },
              "hover": {
                "value": {
                  "initial": "{typography.color.primary.500}",
                  "dark": "{typography.color.primary.600}"
                }
              }
            }
          },
          "color": {
            "static": {
              "value": {
                "initial": "currentColor",
                "dark": "currentColor"
              }
            },
            "hover": {
              "value": {
                "initial": "currentColor",
                "dark": "currentColor"
              }
            }
          },
          "background": {
            "static": {},
            "hover": {
              "value": {
                "initial": "{typography.color.primary.50}",
                "dark": "{typography.color.primary.900}"
              }
            }
          }
        }
      },
      "blockquote": {
        "margin": {
          "value": "{typography.verticalMargin.base} 0"
        },
        "padding": {
          "value": "0 0 0 24px"
        },
        "quotes": {
          "value": "'201C' '201D' '2018' '2019'"
        },
        "color": {
          "value": {
            "initial": "{typography.color.secondary.500}",
            "dark": "{typography.color.secondary.400}"
          }
        },
        "border": {
          "width": {
            "value": "4px"
          },
          "style": {
            "value": "solid"
          },
          "color": {
            "value": {
              "initial": "{typography.color.secondary.200}",
              "dark": "{typography.color.secondary.700}"
            }
          }
        }
      },
      "ul": {
        "listStyleType": {
          "value": "disc"
        },
        "margin": {
          "value": "{typography.verticalMargin.base} 0"
        },
        "padding": {
          "value": "0 0 0 21px"
        },
        "li": {
          "markerColor": {
            "value": {
              "initial": "{typography.color.secondary.400}",
              "dark": "{typography.color.secondary.500}"
            }
          }
        }
      },
      "ol": {
        "listStyleType": {
          "value": "decimal"
        },
        "margin": {
          "value": "{typography.verticalMargin.base} 0"
        },
        "padding": {
          "value": "0 0 0 21px"
        },
        "li": {
          "markerColor": {
            "value": {
              "initial": "{typography.color.secondary.500}",
              "dark": "{typography.color.secondary.500}"
            }
          }
        }
      },
      "li": {
        "margin": {
          "value": "{typography.verticalMargin.sm} 0"
        },
        "listStylePosition": {
          "value": "outside"
        }
      },
      "hr": {
        "margin": {
          "value": "{typography.verticalMargin.base} 0"
        },
        "style": {
          "value": "solid"
        },
        "width": {
          "value": "1px"
        },
        "color": {
          "value": {
            "initial": "{typography.color.secondary.200}",
            "dark": "{typography.color.secondary.800}"
          }
        }
      },
      "table": {
        "margin": {
          "value": "{typography.verticalMargin.base} 0"
        },
        "textAlign": {
          "value": "left"
        },
        "fontSize": {
          "value": "{typography.fontSize.sm}"
        },
        "lineHeight": {
          "value": "inherit"
        }
      },
      "thead": {
        "border": {
          "width": {
            "value": "0px"
          },
          "style": {
            "value": "solid"
          },
          "color": {
            "value": {
              "initial": "{typography.color.secondary.300}",
              "dark": "{typography.color.secondary.600}"
            }
          }
        },
        "borderBottom": {
          "width": {
            "value": "1px"
          },
          "style": {
            "value": "solid"
          },
          "color": {
            "value": {
              "initial": "{typography.color.secondary.300}",
              "dark": "{typography.color.secondary.600}"
            }
          }
        }
      },
      "th": {
        "color": {
          "value": {
            "initial": "{typography.color.secondary.600}",
            "dark": "{typography.color.secondary.400}"
          }
        },
        "padding": {
          "value": "0 {typography.verticalMargin.sm} {typography.verticalMargin.sm} {typography.verticalMargin.sm}"
        },
        "fontWeight": {
          "value": "{typography.fontWeight.semibold}"
        }
      },
      "tbody": {
        "tr": {
          "borderBottom": {
            "width": {
              "value": "1px"
            },
            "style": {
              "value": "dashed"
            },
            "color": {
              "value": {
                "initial": "{typography.color.secondary.300}",
                "dark": "{typography.color.secondary.700}"
              }
            }
          }
        },
        "td": {
          "padding": {
            "value": "{typography.verticalMargin.sm}"
          }
        },
        "code": {
          "inline": {
            "fontSize": {
              "value": "{typography.fontSize.sm}"
            }
          }
        }
      },
      "code": {
        "block": {
          "fontSize": {
            "value": "{typography.fontSize.sm}"
          },
          "margin": {
            "value": "{typography.verticalMargin.base} 0"
          },
          "border": {
            "width": {
              "value": "1px"
            },
            "style": {
              "value": "solid"
            },
            "color": {
              "value": {
                "initial": "{typography.color.secondary.200}",
                "dark": "{typography.color.secondary.800}"
              }
            }
          },
          "color": {
            "value": {
              "initial": "{typography.color.secondary.700}",
              "dark": "{typography.color.secondary.200}"
            }
          },
          "backgroundColor": {
            "value": {
              "initial": "{typography.color.secondary.100}",
              "dark": "{typography.color.secondary.900}"
            }
          },
          "pre": {
            "padding": {
              "value": "{typography.verticalMargin.sm}"
            }
          }
        },
        "inline": {
          "borderRadius": {
            "value": "0.375rem"
          },
          "padding": {
            "value": "0.25rem 0.375rem 0.25rem 0.375rem"
          },
          "fontSize": {
            "value": "{typography.fontSize.sm}"
          },
          "fontWeight": {
            "value": "{typography.fontWeight.normal}"
          },
          "color": {
            "value": {
              "initial": "{typography.color.secondary.700}",
              "dark": "{typography.color.secondary.200}"
            }
          },
          "backgroundColor": {
            "value": {
              "initial": "{typography.color.secondary.100}",
              "dark": "{typography.color.secondary.900}"
            }
          }
        }
      }
    },
    "radii": {
      "sm": {
        "value": "0.375rem"
      },
      "md": {
        "value": "0.5rem"
      },
      "lg": {
        "value": "0.75rem"
      },
      "none": {
        "value": "0px"
      },
      "2xs": {
        "value": "0.125rem"
      },
      "xs": {
        "value": "0.25rem"
      },
      "xl": {
        "value": "1rem"
      },
      "2xl": {
        "value": "1.5rem"
      },
      "3xl": {
        "value": "1.75rem"
      },
      "full": {
        "value": "9999px"
      }
    },
    "fontSize": {
      "xs": {
        "value": "0.75rem"
      },
      "sm": {
        "value": "0.875rem"
      },
      "base": {
        "value": "1rem"
      },
      "lg": {
        "value": "1.125rem"
      },
      "xl": {
        "value": "1.25rem"
      },
      "2xl": {
        "value": "1.5rem"
      },
      "3xl": {
        "value": "1.875rem"
      },
      "4xl": {
        "value": "2.25rem"
      },
      "5xl": {
        "value": "3rem"
      },
      "6xl": {
        "value": "3.75rem"
      },
      "7xl": {
        "value": "4.5rem"
      },
      "8xl": {
        "value": "6rem"
      },
      "9xl": {
        "value": "8rem"
      }
    },
    "lead": {
      "1": {
        "value": ".025rem"
      },
      "2": {
        "value": ".5rem"
      },
      "3": {
        "value": ".75rem"
      },
      "4": {
        "value": "1rem"
      },
      "5": {
        "value": "1.25rem"
      },
      "6": {
        "value": "1.5rem"
      },
      "7": {
        "value": "1.75rem"
      },
      "8": {
        "value": "2rem"
      },
      "9": {
        "value": "2.25rem"
      },
      "10": {
        "value": "2.5rem"
      },
      "none": {
        "value": "1"
      },
      "tight": {
        "value": "1.25"
      },
      "snug": {
        "value": "1.375"
      },
      "normal": {
        "value": "1.5"
      },
      "relaxed": {
        "value": "1.625"
      },
      "loose": {
        "value": "2"
      }
    },
    "font": {
      "sans": {
        "value": "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji"
      },
      "serif": {
        "value": "ui-serif, Georgia, Cambria, Times New Roman, Times, serif"
      },
      "mono": {
        "value": "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace"
      }
    },
    "docus": {
      "header": {
        "height": {
          "value": "64px"
        }
      },
      "footer": {
        "padding": {
          "value": "{space.4} 0"
        }
      },
      "readableLine": {
        "value": "78ch"
      },
      "loadingBar": {
        "height": {
          "value": "3px"
        },
        "gradientColorStop1": {
          "value": "#00dc82"
        },
        "gradientColorStop2": {
          "value": "#34cdfe"
        },
        "gradientColorStop3": {
          "value": "#0047e1"
        }
      }
    },
    "media": {
      "xs": {
        "value": "(min-width: 475px)"
      },
      "sm": {
        "value": "(min-width: 640px)"
      },
      "md": {
        "value": "(min-width: 768px)"
      },
      "lg": {
        "value": "(min-width: 1024px)"
      },
      "xl": {
        "value": "(min-width: 1280px)"
      },
      "2xl": {
        "value": "(min-width: 1536px)"
      },
      "rm": {
        "value": "(prefers-reduced-motion: reduce)"
      },
      "landscape": {
        "value": "only screen and (orientation: landscape)"
      },
      "portrait": {
        "value": "only screen and (orientation: portrait)"
      }
    },
    "width": {
      "screen": {
        "value": "100vw"
      }
    },
    "height": {
      "screen": {
        "value": "100vh"
      }
    },
    "shadow": {
      "xs": {
        "value": "0px 1px 2px 0px #000000"
      },
      "sm": {
        "value": "0px 1px 3px 0px #000000, 0px 1px 2px -1px #000000"
      },
      "md": {
        "value": "0px 4px 6px -1px #000000, 0px 2px 4px -2px #000000"
      },
      "lg": {
        "value": "0px 10px 15px -3px #000000, 0px 4px 6px -4px #000000"
      },
      "xl": {
        "value": "0px 20px 25px -5px {color.gray.400}, 0px 8px 10px -6px #000000"
      },
      "2xl": {
        "value": "0px 25px 50px -12px {color.gray.900}"
      },
      "none": {
        "value": "0px 0px 0px 0px transparent"
      }
    },
    "size": {
      "0": {
        "value": "0px"
      },
      "2": {
        "value": "2px"
      },
      "4": {
        "value": "4px"
      },
      "6": {
        "value": "6px"
      },
      "8": {
        "value": "8px"
      },
      "12": {
        "value": "12px"
      },
      "16": {
        "value": "16px"
      },
      "20": {
        "value": "20px"
      },
      "24": {
        "value": "24px"
      },
      "32": {
        "value": "32px"
      },
      "40": {
        "value": "40px"
      },
      "48": {
        "value": "48px"
      },
      "56": {
        "value": "56px"
      },
      "64": {
        "value": "64px"
      },
      "80": {
        "value": "80px"
      },
      "104": {
        "value": "104px"
      },
      "200": {
        "value": "200px"
      },
      "xs": {
        "value": "20rem"
      },
      "sm": {
        "value": "24rem"
      },
      "md": {
        "value": "28rem"
      },
      "lg": {
        "value": "32rem"
      },
      "xl": {
        "value": "36rem"
      },
      "2xl": {
        "value": "42rem"
      },
      "3xl": {
        "value": "48rem"
      },
      "4xl": {
        "value": "56rem"
      },
      "5xl": {
        "value": "64rem"
      },
      "6xl": {
        "value": "72rem"
      },
      "7xl": {
        "value": "80rem"
      },
      "full": {
        "value": "100%"
      }
    },
    "space": {
      "0": {
        "value": "0px"
      },
      "1": {
        "value": "0.25rem"
      },
      "2": {
        "value": "0.5rem"
      },
      "3": {
        "value": "0.75rem"
      },
      "4": {
        "value": "1rem"
      },
      "5": {
        "value": "1.25rem"
      },
      "6": {
        "value": "1.5rem"
      },
      "7": {
        "value": "1.75rem"
      },
      "8": {
        "value": "2rem"
      },
      "9": {
        "value": "2.25rem"
      },
      "10": {
        "value": "2.5rem"
      },
      "11": {
        "value": "2.75rem"
      },
      "12": {
        "value": "3rem"
      },
      "14": {
        "value": "3.5rem"
      },
      "16": {
        "value": "4rem"
      },
      "20": {
        "value": "5rem"
      },
      "24": {
        "value": "6rem"
      },
      "28": {
        "value": "7rem"
      },
      "32": {
        "value": "8rem"
      },
      "36": {
        "value": "9rem"
      },
      "40": {
        "value": "10rem"
      },
      "44": {
        "value": "11rem"
      },
      "48": {
        "value": "12rem"
      },
      "52": {
        "value": "13rem"
      },
      "56": {
        "value": "14rem"
      },
      "60": {
        "value": "15rem"
      },
      "64": {
        "value": "16rem"
      },
      "72": {
        "value": "18rem"
      },
      "80": {
        "value": "20rem"
      },
      "96": {
        "value": "24rem"
      },
      "px": {
        "value": "1px"
      },
      "rem": {
        "125": {
          "value": "0.125rem"
        },
        "375": {
          "value": "0.375rem"
        },
        "625": {
          "value": "0.625rem"
        },
        "875": {
          "value": "0.875rem"
        }
      }
    },
    "borderWidth": {
      "noBorder": {
        "value": "0"
      },
      "sm": {
        "value": "1px"
      },
      "md": {
        "value": "2px"
      },
      "lg": {
        "value": "3px"
      }
    },
    "opacity": {
      "noOpacity": {
        "value": "0"
      },
      "bright": {
        "value": "0.1"
      },
      "light": {
        "value": "0.15"
      },
      "soft": {
        "value": "0.3"
      },
      "medium": {
        "value": "0.5"
      },
      "high": {
        "value": "0.8"
      },
      "total": {
        "value": "1"
      }
    },
    "fontWeight": {
      "thin": {
        "value": "100"
      },
      "extralight": {
        "value": "200"
      },
      "light": {
        "value": "300"
      },
      "normal": {
        "value": "400"
      },
      "medium": {
        "value": "500"
      },
      "semibold": {
        "value": "600"
      },
      "bold": {
        "value": "700"
      },
      "extrabold": {
        "value": "800"
      },
      "black": {
        "value": "900"
      }
    },
    "letterSpacing": {
      "tighter": {
        "value": "-0.05em"
      },
      "tight": {
        "value": "-0.025em"
      },
      "normal": {
        "value": "0em"
      },
      "wide": {
        "value": "0.025em"
      },
      "wider": {
        "value": "0.05em"
      },
      "widest": {
        "value": "0.1em"
      }
    },
    "text": {
      "xs": {
        "fontSize": {
          "value": "{fontSize.xs}"
        },
        "lineHeight": {
          "value": "{lead.4}"
        }
      },
      "sm": {
        "fontSize": {
          "value": "{fontSize.sm}"
        },
        "lineHeight": {
          "value": "{lead.5}"
        }
      },
      "base": {
        "fontSize": {
          "value": "{fontSize.base}"
        },
        "lineHeight": {
          "value": "{lead.6}"
        }
      },
      "lg": {
        "fontSize": {
          "value": "{fontSize.lg}"
        },
        "lineHeight": {
          "value": "{lead.7}"
        }
      },
      "xl": {
        "fontSize": {
          "value": "{fontSize.xl}"
        },
        "lineHeight": {
          "value": "{lead.7}"
        }
      },
      "2xl": {
        "fontSize": {
          "value": "{fontSize.2xl}"
        },
        "lineHeight": {
          "value": "{lead.8}"
        }
      },
      "3xl": {
        "fontSize": {
          "value": "{fontSize.3xl}"
        },
        "lineHeight": {
          "value": "{lead.9}"
        }
      },
      "4xl": {
        "fontSize": {
          "value": "{fontSize.4xl}"
        },
        "lineHeight": {
          "value": "{lead.10}"
        }
      },
      "5xl": {
        "fontSize": {
          "value": "{fontSize.5xl}"
        },
        "lineHeight": {
          "value": "{lead.none}"
        }
      },
      "6xl": {
        "fontSize": {
          "value": "{fontSize.6xl}"
        },
        "lineHeight": {
          "value": "{lead.none}"
        }
      }
    }
  }
};
const schema_server_zIxGbBm233 = defineNuxtPlugin(() => {
  const event = useRequestEvent();
  if (event.path === "/__pinceau_tokens_config.json") {
    event.node.res.setHeader("Content-Type", "application/json");
    event.node.res.statusCode = 200;
    event.node.res.end(JSON.stringify(theme, null, 2));
  }
  if (event.path === "/__pinceau_tokens_schema.json") {
    event.node.res.setHeader("Content-Type", "application/json");
    event.node.res.statusCode = 200;
    event.node.res.end(JSON.stringify(schema, null, 2));
  }
});
const preference = "dark";
const componentName = "ColorScheme";
const dataValue = "theme";
const plugin_server_XNCxeHyTuP = defineNuxtPlugin((nuxtApp) => {
  const colorMode = useState("color-mode", () => reactive({
    preference,
    value: preference,
    unknown: true,
    forced: false
  })).value;
  const htmlAttrs = {};
  {
    useHead({ htmlAttrs });
  }
  useRouter().afterEach((to) => {
    const forcedColorMode = to.meta.colorMode;
    if (forcedColorMode && forcedColorMode !== "system") {
      colorMode.value = htmlAttrs["data-color-mode-forced"] = forcedColorMode;
      {
        htmlAttrs[`data-${dataValue}`] = colorMode.value;
      }
      colorMode.forced = true;
    } else if (forcedColorMode === "system") {
      console.warn("You cannot force the colorMode to system at the page level.");
    }
  });
  nuxtApp.provide("colorMode", colorMode);
});
const app_config_server_3EJd2il4WQ = defineNuxtPlugin(() => {
  const event = useRequestEvent();
  if (event.path === "/__app_config.json") {
    event.node.res.setHeader("Content-Type", "application/json");
    event.node.res.statusCode = 200;
    event.node.res.end(JSON.stringify(useAppConfig(), null, 2));
  }
});
const preview_detector_wuXocrN5Sn = defineNuxtPlugin((nuxtApp) => {
  const runtimeConfig = useRuntimeConfig$1().public.studio || {};
  const route = useRoute();
  const previewToken = useCookie("previewToken", { sameSite: "none", secure: true });
  async function initializePreview() {
    const useStudio = await import('./_nuxt/useStudio-7ec450fb.mjs').then((m) => m.useStudio);
    const { mountPreviewUI } = useStudio();
    mountPreviewUI();
    queryContent("/non-existing-path").findOne();
  }
  if (runtimeConfig.apiURL) {
    if (Object.prototype.hasOwnProperty.call(route.query, "preview") && !route.query.preview) {
      return;
    }
    if (!route.query.preview && !previewToken.value) {
      return;
    }
    if (route.query.preview && previewToken.value !== route.query.preview) {
      previewToken.value = String(route.query.preview);
    }
    nuxtApp.hook("app:mounted", async () => {
      await initializePreview();
    });
  }
});
const menu_13PGuw7IWk = defineNuxtPlugin((ctx) => {
  const visible = ref(false);
  const open = () => visible.value = true;
  const close = () => visible.value = false;
  const toggle = () => visible.value = !visible.value;
  ctx.$router.afterEach(() => setTimeout(close, 50));
  return {
    provide: {
      menu: {
        visible,
        close,
        open,
        toggle
      }
    }
  };
});
const _plugins = [
  components_plugin_KR1HBZs4kY,
  vueuse_head_plugin_D7WGfuP1A0,
  router_Pg0DINazwm,
  docsearch_hvQai9BtgI,
  documentDriven_9cX98v59ZY,
  pinceau_nuxt_plugin_server_KEuz79zT4K,
  schema_server_zIxGbBm233,
  plugin_server_XNCxeHyTuP,
  app_config_server_3EJd2il4WQ,
  preview_detector_wuXocrN5Sn,
  menu_13PGuw7IWk
];
const _sfc_main$d = {
  __name: "AppLoadingBar",
  __ssrInlineRender: true,
  props: {
    throttle: {
      type: Number,
      default: 200
    },
    duration: {
      type: Number,
      default: 2e3
    }
  },
  setup(__props) {
    const props = __props;
    const nuxtApp = useNuxtApp();
    const data = reactive({
      percent: 0,
      show: false,
      canSucceed: true
    });
    let _timer = null;
    let _throttle = null;
    let _cut;
    function clear() {
      _timer && clearInterval(_timer);
      _throttle && clearTimeout(_throttle);
      _timer = null;
    }
    function start() {
      if (data.show) {
        return;
      }
      clear();
      data.percent = 0;
      data.canSucceed = true;
      if (props.throttle) {
        _throttle = setTimeout(startTimer, props.throttle);
      } else {
        startTimer();
      }
    }
    function increase(num) {
      data.percent = Math.min(100, Math.floor(data.percent + num));
    }
    function finish() {
      data.percent = 100;
      hide();
    }
    function hide() {
      clear();
      setTimeout(() => {
        data.show = false;
        setTimeout(() => {
          data.percent = 0;
        }, 400);
      }, 500);
    }
    function startTimer() {
      data.show = true;
      _cut = 1e4 / Math.floor(props.duration);
      _timer = setInterval(() => {
        increase(_cut);
      }, 100);
    }
    nuxtApp.hook("content:middleware:start", start);
    nuxtApp.hook("page:start", start);
    nuxtApp.hook("page:finish", finish);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["nuxt-progress", {
          "nuxt-progress-failed": !unref(data).canSucceed
        }],
        style: {
          width: `${unref(data).percent}%`,
          left: unref(data).left,
          opacity: unref(data).show ? 1 : 0,
          backgroundSize: `${100 / unref(data).percent * 100}% auto`
        }
      }, _attrs))}></div>`);
    };
  }
};
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/docus/components/app/AppLoadingBar.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const AppLoadingBar = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: _sfc_main$d
});
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "AppSocialIcons",
  __ssrInlineRender: true,
  setup(__props) {
    const socials = ["twitter", "facebook", "instagram", "youtube", "github", "medium"];
    const { config } = useDocus();
    const icons = computed(() => {
      return Object.entries(config.value.socials || {}).map(([key, value]) => {
        if (typeof value === "object") {
          return value;
        } else if (typeof value === "string" && value && socials.includes(key)) {
          return {
            href: `https://${key}.com/${value}`,
            icon: `fa-brands:${key}`,
            label: value
          };
        } else {
          return null;
        }
      }).filter(Boolean);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$2;
      const _component_Icon = __nuxt_component_0$1$1;
      _push(`<!--[-->`);
      ssrRenderList(unref(icons), (icon) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: icon.label,
          rel: "noopener noreferrer",
          title: icon.label,
          "aria-label": icon.label,
          href: icon.href,
          target: "_blank"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (icon.icon) {
                _push2(ssrRenderComponent(_component_Icon, {
                  name: icon.icon
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                icon.icon ? (openBlock(), createBlock(_component_Icon, {
                  key: 0,
                  name: icon.icon
                }, null, 8, ["name"])) : createCommentVNode("", true)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/docus/components/app/AppSocialIcons.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const __nuxt_component_3$1 = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__scopeId", "data-v-224b171c"]]);
const AppSocialIcons = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: __nuxt_component_3$1
});
const useMenu = () => {
  const { $menu } = useNuxtApp();
  return $menu;
};
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "AppHeaderDialog",
  __ssrInlineRender: true,
  setup(__props) {
    const { navigation } = useContent();
    const { config } = useDocus();
    const filtered = computed(() => {
      var _a;
      return ((_a = config.value.aside) == null ? void 0 : _a.exclude) || [];
    });
    const links = computed(() => {
      return (navigation.value || []).filter((item) => {
        if (filtered.value.includes(item._path)) {
          return false;
        }
        return true;
      });
    });
    const { visible, open, close } = useMenu();
    watch(visible, (v) => v ? open() : close());
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0$1$1;
      const _component_AppSocialIcons = __nuxt_component_3$1;
      const _component_DocsAsideTree = __nuxt_component_0$3;
      _push(`<!--[--><button aria-label="Menu" data-v-291983a4>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "heroicons-outline:menu",
        "aria-hidden": "”true”"
      }, null, _parent));
      _push(`</button>`);
      ssrRenderTeleport(_push, (_push2) => {
        if (unref(visible)) {
          _push2(`<nav class="dialog" data-v-291983a4><div data-v-291983a4><div class="wrapper" data-v-291983a4><button aria-label="Menu" data-v-291983a4>`);
          _push2(ssrRenderComponent(_component_Icon, {
            name: "heroicons-outline:x",
            "aria-hidden": "”true”"
          }, null, _parent));
          _push2(`</button><div class="icons" data-v-291983a4>`);
          _push2(ssrRenderComponent(_component_AppSocialIcons, null, null, _parent));
          _push2(`</div></div>`);
          _push2(ssrRenderComponent(_component_DocsAsideTree, { links: unref(links) }, null, _parent));
          _push2(`</div></nav>`);
        } else {
          _push2(`<!---->`);
        }
      }, "body", false, _parent);
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/docus/components/app/AppHeaderDialog.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const __nuxt_component_1$3 = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__scopeId", "data-v-291983a4"]]);
const AppHeaderDialog = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: __nuxt_component_1$3
});
const _sfc_main$a = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    viewBox: "133.827 188.259 264.992 112.316",
    width: "100",
    height: "50",
    style: { "height": "50px" }
  }, _attrs))}><defs><clipPath id="519b099e47"><path d="M 75.277344 75.191406 L 340.269531 75.191406 L 340.269531 187.507812 L 75.277344 187.507812 Z M 75.277344 75.191406 " clip-rule="nonzero"></path></clipPath><clipPath id="2303c043c0"><path d="M 92.496094 75.191406 L 323.003906 75.191406 C 327.570312 75.191406 331.949219 77.007812 335.179688 80.234375 C 338.410156 83.464844 340.222656 87.847656 340.222656 92.414062 L 340.222656 170.285156 C 340.222656 174.851562 338.410156 179.234375 335.179688 182.460938 C 331.949219 185.691406 327.570312 187.507812 323.003906 187.507812 L 92.496094 187.507812 C 87.929688 187.507812 83.550781 185.691406 80.320312 182.460938 C 77.089844 179.234375 75.277344 174.851562 75.277344 170.285156 L 75.277344 92.414062 C 75.277344 87.847656 77.089844 83.464844 80.320312 80.234375 C 83.550781 77.007812 87.929688 75.191406 92.496094 75.191406 " clip-rule="nonzero"></path></clipPath></defs><g clip-path="url(#519b099e47)" transform="matrix(1, 0, 0, 1, 58.549454, 113.06736)"><g clip-path="url(#2303c043c0)"><path fill="#ffdf4b" d="M 75.277344 75.191406 L 340.269531 75.191406 L 340.269531 187.507812 L 75.277344 187.507812 Z M 75.277344 75.191406 " fill-opacity="1" fill-rule="nonzero"></path></g></g><g fill="#000000" fill-opacity="1" transform="matrix(1, 0, 0, 1, 58.549454, 113.06736)"><g transform="translate(96.344231, 148.945261)"><g><path d="M 13.90625 -28.390625 L 13.90625 -20.40625 L 29.953125 -20.40625 L 29.953125 -12.453125 L 13.90625 -12.453125 L 13.90625 0 L 3.640625 0 L 3.640625 -36.328125 L 32.125 -36.328125 L 32.125 -28.390625 Z M 13.90625 -28.390625 "></path></g></g></g><g fill="#000000" fill-opacity="1" transform="matrix(1, 0, 0, 1, 58.549454, 113.06736)"><g transform="translate(129.670915, 148.945261)"><g><path d="M 12.5625 -24.765625 C 13.5625 -26.046875 14.863281 -27.003906 16.46875 -27.640625 C 18.082031 -28.273438 19.929688 -28.59375 22.015625 -28.59375 L 22.015625 -19.71875 C 21.109375 -19.820312 20.363281 -19.875 19.78125 -19.875 C 17.664062 -19.875 16.007812 -19.300781 14.8125 -18.15625 C 13.625 -17.019531 13.03125 -15.273438 13.03125 -12.921875 L 13.03125 0 L 3.171875 0 L 3.171875 -28.140625 L 12.5625 -28.140625 Z M 12.5625 -24.765625 "></path></g></g></g><g fill="#000000" fill-opacity="1" transform="matrix(1, 0, 0, 1, 58.549454, 113.06736)"><g transform="translate(152.66737, 148.945261)"><g><path d="M 17.28125 0.46875 C 14.269531 0.46875 11.550781 -0.148438 9.125 -1.390625 C 6.707031 -2.640625 4.816406 -4.375 3.453125 -6.59375 C 2.085938 -8.8125 1.40625 -11.320312 1.40625 -14.125 C 1.40625 -16.882812 2.085938 -19.375 3.453125 -21.59375 C 4.816406 -23.8125 6.703125 -25.53125 9.109375 -26.75 C 11.515625 -27.976562 14.238281 -28.59375 17.28125 -28.59375 C 20.332031 -28.59375 23.066406 -27.976562 25.484375 -26.75 C 27.910156 -25.53125 29.796875 -23.820312 31.140625 -21.625 C 32.492188 -19.425781 33.171875 -16.925781 33.171875 -14.125 C 33.171875 -11.320312 32.492188 -8.8125 31.140625 -6.59375 C 29.796875 -4.375 27.910156 -2.640625 25.484375 -1.390625 C 23.066406 -0.148438 20.332031 0.46875 17.28125 0.46875 Z M 17.28125 -7.375 C 19.007812 -7.375 20.425781 -7.96875 21.53125 -9.15625 C 22.644531 -10.351562 23.203125 -12.007812 23.203125 -14.125 C 23.203125 -16.195312 22.644531 -17.820312 21.53125 -19 C 20.425781 -20.175781 19.007812 -20.765625 17.28125 -20.765625 C 15.550781 -20.765625 14.132812 -20.175781 13.03125 -19 C 11.925781 -17.820312 11.375 -16.195312 11.375 -14.125 C 11.375 -12.007812 11.925781 -10.351562 13.03125 -9.15625 C 14.132812 -7.96875 15.550781 -7.375 17.28125 -7.375 Z M 17.28125 -7.375 "></path></g></g></g><g fill="#000000" fill-opacity="1" transform="matrix(1, 0, 0, 1, 58.549454, 113.06736)"><g transform="translate(187.239917, 148.945261)"><g><path d="M 21.484375 -28.59375 C 24.984375 -28.59375 27.796875 -27.554688 29.921875 -25.484375 C 32.046875 -23.410156 33.109375 -20.28125 33.109375 -16.09375 L 33.109375 0 L 23.25 0 L 23.25 -14.484375 C 23.25 -18.328125 21.710938 -20.25 18.640625 -20.25 C 16.941406 -20.25 15.582031 -19.691406 14.5625 -18.578125 C 13.539062 -17.472656 13.03125 -15.8125 13.03125 -13.59375 L 13.03125 0 L 3.171875 0 L 3.171875 -28.140625 L 12.5625 -28.140625 L 12.5625 -25.078125 C 13.664062 -26.210938 14.976562 -27.082031 16.5 -27.6875 C 18.03125 -28.289062 19.691406 -28.59375 21.484375 -28.59375 Z M 21.484375 -28.59375 "></path></g></g></g><g fill="#000000" fill-opacity="1" transform="matrix(1, 0, 0, 1, 58.549454, 113.06736)"><g transform="translate(223.369779, 148.945261)"><g><path d="M 22.578125 -1.140625 C 21.742188 -0.617188 20.726562 -0.222656 19.53125 0.046875 C 18.34375 0.328125 17.078125 0.46875 15.734375 0.46875 C 12.054688 0.46875 9.234375 -0.429688 7.265625 -2.234375 C 5.296875 -4.035156 4.3125 -6.71875 4.3125 -10.28125 L 4.3125 -19.71875 L 0.203125 -19.71875 L 0.203125 -27.09375 L 4.3125 -27.09375 L 4.3125 -34.40625 L 14.171875 -34.40625 L 14.171875 -27.09375 L 20.609375 -27.09375 L 20.609375 -19.71875 L 14.171875 -19.71875 L 14.171875 -10.375 C 14.171875 -9.375 14.4375 -8.585938 14.96875 -8.015625 C 15.507812 -7.441406 16.226562 -7.15625 17.125 -7.15625 C 18.269531 -7.15625 19.273438 -7.453125 20.140625 -8.046875 Z M 22.578125 -1.140625 "></path></g></g></g><g fill="#000000" fill-opacity="1" transform="matrix(1, 0, 0, 1, 58.549454, 113.06736)"><g transform="translate(246.573878, 148.945261)"><g><path d="M 3.171875 -28.140625 L 13.03125 -28.140625 L 13.03125 0 L 3.171875 0 Z M 8.09375 -31.25 C 6.300781 -31.25 4.847656 -31.75 3.734375 -32.75 C 2.628906 -33.757812 2.078125 -35.003906 2.078125 -36.484375 C 2.078125 -37.972656 2.628906 -39.21875 3.734375 -40.21875 C 4.847656 -41.226562 6.300781 -41.734375 8.09375 -41.734375 C 9.894531 -41.734375 11.347656 -41.253906 12.453125 -40.296875 C 13.566406 -39.347656 14.125 -38.128906 14.125 -36.640625 C 14.125 -35.085938 13.566406 -33.800781 12.453125 -32.78125 C 11.347656 -31.757812 9.894531 -31.25 8.09375 -31.25 Z M 8.09375 -31.25 "></path></g></g></g><g fill="#000000" fill-opacity="1" transform="matrix(1, 0, 0, 1, 58.549454, 113.06736)"><g transform="translate(262.821939, 148.945261)"><g><path d="M 31.921875 -14.015625 C 31.921875 -13.941406 31.867188 -13.128906 31.765625 -11.578125 L 11.3125 -11.578125 C 11.726562 -10.117188 12.53125 -9 13.71875 -8.21875 C 14.914062 -7.445312 16.414062 -7.0625 18.21875 -7.0625 C 19.570312 -7.0625 20.738281 -7.25 21.71875 -7.625 C 22.707031 -8.007812 23.703125 -8.632812 24.703125 -9.5 L 29.890625 -4.09375 C 27.160156 -1.050781 23.164062 0.46875 17.90625 0.46875 C 14.625 0.46875 11.734375 -0.148438 9.234375 -1.390625 C 6.742188 -2.640625 4.816406 -4.375 3.453125 -6.59375 C 2.085938 -8.8125 1.40625 -11.320312 1.40625 -14.125 C 1.40625 -16.882812 2.066406 -19.363281 3.390625 -21.5625 C 4.722656 -23.757812 6.566406 -25.476562 8.921875 -26.71875 C 11.273438 -27.96875 13.925781 -28.59375 16.875 -28.59375 C 19.675781 -28.59375 22.21875 -28.015625 24.5 -26.859375 C 26.78125 -25.703125 28.585938 -24.023438 29.921875 -21.828125 C 31.253906 -19.628906 31.921875 -17.023438 31.921875 -14.015625 Z M 16.921875 -21.59375 C 15.398438 -21.59375 14.128906 -21.160156 13.109375 -20.296875 C 12.085938 -19.429688 11.4375 -18.253906 11.15625 -16.765625 L 22.6875 -16.765625 C 22.40625 -18.253906 21.753906 -19.429688 20.734375 -20.296875 C 19.710938 -21.160156 18.441406 -21.59375 16.921875 -21.59375 Z M 16.921875 -21.59375 "></path></g></g></g><g fill="#000000" fill-opacity="1" transform="matrix(1, 0, 0, 1, 58.549454, 113.06736)"><g transform="translate(296.148612, 148.945261)"><g><path d="M 12.5625 -24.765625 C 13.5625 -26.046875 14.863281 -27.003906 16.46875 -27.640625 C 18.082031 -28.273438 19.929688 -28.59375 22.015625 -28.59375 L 22.015625 -19.71875 C 21.109375 -19.820312 20.363281 -19.875 19.78125 -19.875 C 17.664062 -19.875 16.007812 -19.300781 14.8125 -18.15625 C 13.625 -17.019531 13.03125 -15.273438 13.03125 -12.921875 L 13.03125 0 L 3.171875 0 L 3.171875 -28.140625 L 12.5625 -28.140625 Z M 12.5625 -24.765625 "></path></g></g></g></svg>`);
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/content/Logo.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const __nuxt_component_1$2 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender$2]]);
const Logo = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: __nuxt_component_1$2
});
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "AppHeaderLogo",
  __ssrInlineRender: true,
  setup(__props) {
    const { config } = useDocus();
    const logo = computed(() => {
      var _a;
      return ((_a = config.value.header) == null ? void 0 : _a.logo) || false;
    });
    const title = computed(() => {
      var _a;
      return ((_a = config.value.header) == null ? void 0 : _a.title) || config.value.title;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$2;
      const _component_Logo = __nuxt_component_1$2;
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        class: "navbar-logo",
        to: "/",
        "aria-label": unref(title)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(logo) && typeof unref(logo) === "string") {
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(unref(logo)), null, null), _parent2, _scopeId);
            } else if (unref(logo)) {
              _push2(ssrRenderComponent(_component_Logo, null, null, _parent2, _scopeId));
            } else {
              _push2(`<span data-v-0e437bbb${_scopeId}>${ssrInterpolate(unref(title))}</span>`);
            }
          } else {
            return [
              unref(logo) && typeof unref(logo) === "string" ? (openBlock(), createBlock(resolveDynamicComponent(unref(logo)), { key: 0 })) : unref(logo) ? (openBlock(), createBlock(_component_Logo, { key: 1 })) : (openBlock(), createBlock("span", { key: 2 }, toDisplayString(unref(title)), 1))
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/docus/components/app/AppHeaderLogo.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_2$1 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-0e437bbb"]]);
const AppHeaderLogo = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: __nuxt_component_2$1
});
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "AppHeaderNavigation",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const { navBottomLink } = useContentHelpers();
    const { navigation } = useContent();
    const { config } = useDocus();
    const hasNavigation = computed(() => {
      var _a;
      return !!((_a = config.value.aside) == null ? void 0 : _a.level);
    });
    const filtered = computed(() => {
      var _a;
      return ((_a = config.value.header) == null ? void 0 : _a.exclude) || [];
    });
    const tree = computed(() => {
      return (navigation.value || []).filter((item) => {
        if (filtered.value.includes(item._path)) {
          return false;
        }
        return true;
      });
    });
    const isActive = (link) => link.exact ? route.fullPath === link._path : route.fullPath.startsWith(link._path);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$2;
      const _component_Icon = __nuxt_component_0$1$1;
      if (unref(hasNavigation)) {
        _push(`<nav${ssrRenderAttrs(_attrs)} data-v-01b60614><ul data-v-01b60614><!--[-->`);
        ssrRenderList(unref(tree), (link) => {
          _push(`<li data-v-01b60614>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            class: ["link", { active: isActive(link) }],
            to: link.redirect ? link.redirect : unref(navBottomLink)(link)
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              var _a, _b, _c, _d;
              if (_push2) {
                if (link.icon && ((_b = (_a = unref(config)) == null ? void 0 : _a.header) == null ? void 0 : _b.showLinkIcon)) {
                  _push2(ssrRenderComponent(_component_Icon, {
                    name: link.icon
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                _push2(` ${ssrInterpolate(link.title)}`);
              } else {
                return [
                  link.icon && ((_d = (_c = unref(config)) == null ? void 0 : _c.header) == null ? void 0 : _d.showLinkIcon) ? (openBlock(), createBlock(_component_Icon, {
                    key: 0,
                    name: link.icon
                  }, null, 8, ["name"])) : createCommentVNode("", true),
                  createTextVNode(" " + toDisplayString(link.title), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</li>`);
        });
        _push(`<!--]--></ul></nav>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/docus/components/app/AppHeaderNavigation.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-01b60614"]]);
const AppHeaderNavigation = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: __nuxt_component_3
});
const useDocSearch = () => {
  const { $docSearch } = useNuxtApp();
  if (!$docSearch) {
    return {
      hasDocSearch: ref(false)
    };
  }
  return $docSearch;
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "AppSearch",
  __ssrInlineRender: true,
  setup(__props) {
    useDocSearch();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0$1$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "doc-search" }, _attrs))} data-v-1e99f08b><button type="button" aria-label="Search" data-v-1e99f08b><span class="content" data-v-1e99f08b>`);
      _push(ssrRenderComponent(_component_Icon, { name: "heroicons-outline:search" }, null, _parent));
      _push(`<span data-v-1e99f08b>Search</span><span data-v-1e99f08b><kbd data-v-1e99f08b>⌘</kbd><kbd data-v-1e99f08b>K</kbd></span></span></button></div>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/docus/components/app/AppSearch.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-1e99f08b"]]);
const AppSearch = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: __nuxt_component_4
});
const __nuxt_component_0$1 = defineComponent({
  name: "ClientOnly",
  inheritAttrs: false,
  // eslint-disable-next-line vue/require-prop-types
  props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
  setup(_, { slots, attrs }) {
    const mounted = ref(false);
    return (props) => {
      var _a;
      if (mounted.value) {
        return (_a = slots.default) == null ? void 0 : _a.call(slots);
      }
      const slot = slots.fallback || slots.placeholder;
      if (slot) {
        return slot();
      }
      const fallbackStr = props.fallback || props.placeholder || "";
      const fallbackTag = props.fallbackTag || props.placeholderTag || "span";
      return createElementBlock(fallbackTag, attrs, fallbackStr);
    };
  }
});
const cache = /* @__PURE__ */ new WeakMap();
function createClientOnly(component) {
  if (cache.has(component)) {
    return cache.get(component);
  }
  const clone = { ...component };
  if (clone.render) {
    clone.render = (ctx, ...args) => {
      if (ctx.mounted$) {
        const res = component.render(ctx, ...args);
        return res.children === null || typeof res.children === "string" ? createElementVNode(res.type, res.props, res.children, res.patchFlag, res.dynamicProps, res.shapeFlag) : h(res);
      } else {
        return h("div", ctx.$attrs ?? ctx._.attrs);
      }
    };
  } else if (clone.template) {
    clone.template = `
      <template v-if="mounted$">${component.template}</template>
      <template v-else><div></div></template>
    `;
  }
  clone.setup = (props, ctx) => {
    var _a;
    const mounted$ = ref(false);
    return Promise.resolve(((_a = component.setup) == null ? void 0 : _a.call(component, props, ctx)) || {}).then((setupState) => {
      return typeof setupState !== "function" ? { ...setupState, mounted$ } : (...args) => {
        if (mounted$.value) {
          const res = setupState(...args);
          return res.children === null || typeof res.children === "string" ? createElementVNode(res.type, res.props, res.children, res.patchFlag, res.dynamicProps, res.shapeFlag) : h(res);
        } else {
          return h("div", ctx.attrs);
        }
      };
    });
  };
  cache.set(component, clone);
  return clone;
}
const clientOnly = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  createClientOnly,
  default: __nuxt_component_0$1
});
const _sfc_main$6 = {
  name: componentName,
  props: {
    placeholder: String,
    tag: {
      type: String,
      default: "span"
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ClientOnly = __nuxt_component_0$1;
  _push(ssrRenderComponent(_component_ClientOnly, mergeProps({
    placeholder: $props.placeholder,
    "placeholder-tag": $props.tag
  }, _attrs), null, _parent));
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxtjs/color-mode/dist/runtime/component.vue3.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$1]]);
const component_vue3 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: __nuxt_component_0
});
const useColorMode = () => {
  return useState("color-mode").value;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "ThemeSelect",
  __ssrInlineRender: true,
  setup(__props) {
    const colorMode = useColorMode();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ColorScheme = __nuxt_component_0;
      const _component_Icon = __nuxt_component_0$1$1;
      _push(`<button${ssrRenderAttrs(mergeProps({ "aria-label": "Color Mode" }, _attrs))} data-v-4a6c39b0>`);
      _push(ssrRenderComponent(_component_ColorScheme, { placeholder: "..." }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(colorMode).preference === "dark") {
              _push2(ssrRenderComponent(_component_Icon, { name: "uil:moon" }, null, _parent2, _scopeId));
            } else if (unref(colorMode).preference === "light") {
              _push2(ssrRenderComponent(_component_Icon, { name: "uil:sun" }, null, _parent2, _scopeId));
            } else {
              _push2(ssrRenderComponent(_component_Icon, { name: "uil:desktop" }, null, _parent2, _scopeId));
            }
          } else {
            return [
              unref(colorMode).preference === "dark" ? (openBlock(), createBlock(_component_Icon, {
                key: 0,
                name: "uil:moon"
              })) : unref(colorMode).preference === "light" ? (openBlock(), createBlock(_component_Icon, {
                key: 1,
                name: "uil:sun"
              })) : (openBlock(), createBlock(_component_Icon, {
                key: 2,
                name: "uil:desktop"
              }))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</button>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/docus/components/app/ThemeSelect.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-4a6c39b0"]]);
const ThemeSelect = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: __nuxt_component_5
});
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "AppHeader",
  __ssrInlineRender: true,
  props: {},
  setup(__props) {
    const { config } = useDocus();
    const { navigation } = useContent();
    const { hasDocSearch } = useDocSearch();
    const hasDialog = computed(() => {
      var _a;
      return ((_a = navigation.value) == null ? void 0 : _a.length) > 1;
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_Container = __nuxt_component_0$4;
      const _component_AppHeaderDialog = __nuxt_component_1$3;
      const _component_AppHeaderLogo = __nuxt_component_2$1;
      const _component_AppHeaderNavigation = __nuxt_component_3;
      const _component_AppSearch = __nuxt_component_4;
      const _component_ThemeSelect = __nuxt_component_5;
      const _component_AppSocialIcons = __nuxt_component_3$1;
      _push(`<header${ssrRenderAttrs(mergeProps({
        class: { "has-dialog": unref(hasDialog), "has-doc-search": unref(hasDocSearch) }
      }, _attrs))} data-v-8375ebf7>`);
      _push(ssrRenderComponent(_component_Container, {
        fluid: (_b = (_a = unref(config)) == null ? void 0 : _a.header) == null ? void 0 : _b.fluid
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="section left" data-v-8375ebf7${_scopeId}>`);
            if (unref(hasDialog)) {
              _push2(ssrRenderComponent(_component_AppHeaderDialog, null, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_component_AppHeaderLogo, null, null, _parent2, _scopeId));
            _push2(`</div><div class="section center" data-v-8375ebf7${_scopeId}>`);
            if (unref(hasDialog)) {
              _push2(ssrRenderComponent(_component_AppHeaderLogo, null, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_component_AppHeaderNavigation, null, null, _parent2, _scopeId));
            _push2(`</div><div class="section right" data-v-8375ebf7${_scopeId}>`);
            if (unref(hasDocSearch)) {
              _push2(ssrRenderComponent(_component_AppSearch, null, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_component_ThemeSelect, null, null, _parent2, _scopeId));
            _push2(`<div class="social-icons" data-v-8375ebf7${_scopeId}>`);
            _push2(ssrRenderComponent(_component_AppSocialIcons, null, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "section left" }, [
                unref(hasDialog) ? (openBlock(), createBlock(_component_AppHeaderDialog, { key: 0 })) : createCommentVNode("", true),
                createVNode(_component_AppHeaderLogo)
              ]),
              createVNode("div", { class: "section center" }, [
                unref(hasDialog) ? (openBlock(), createBlock(_component_AppHeaderLogo, { key: 0 })) : createCommentVNode("", true),
                createVNode(_component_AppHeaderNavigation)
              ]),
              createVNode("div", { class: "section right" }, [
                unref(hasDocSearch) ? (openBlock(), createBlock(_component_AppSearch, { key: 0 })) : createCommentVNode("", true),
                createVNode(_component_ThemeSelect),
                createVNode("div", { class: "social-icons" }, [
                  createVNode(_component_AppSocialIcons)
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</header>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/docus/components/app/AppHeader.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-8375ebf7"]]);
const AppHeader = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: __nuxt_component_1$1
});
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "AppFooter",
  __ssrInlineRender: true,
  setup(__props) {
    const { config } = useDocus();
    const socialIcons = ref(null);
    const icons = computed(() => {
      var _a, _b;
      return ((_b = (_a = config.value) == null ? void 0 : _a.footer) == null ? void 0 : _b.iconLinks) || [];
    });
    const textLinks = computed(() => {
      var _a, _b;
      return ((_b = (_a = config.value) == null ? void 0 : _a.footer) == null ? void 0 : _b.textLinks) || [];
    });
    const socialIconsCount = computed(() => {
      var _a;
      return Object.entries(((_a = config.value) == null ? void 0 : _a.socials) || {}).filter(([_, v]) => v).length;
    });
    const nbSocialIcons = computed(() => socialIcons.value ? socialIconsCount.value : 0);
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_Container = __nuxt_component_0$4;
      const _component_NuxtLink = __nuxt_component_0$2;
      const _component_Icon = __nuxt_component_0$1$1;
      const _component_AppSocialIcons = __nuxt_component_3$1;
      _push(`<footer${ssrRenderAttrs(_attrs)} data-v-eebf8ee0>`);
      _push(ssrRenderComponent(_component_Container, {
        fluid: (_b = (_a = unref(config)) == null ? void 0 : _a.footer) == null ? void 0 : _b.fluid,
        padded: "",
        class: "footer-container"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b2, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B;
          if (_push2) {
            _push2(`<div class="left" data-v-eebf8ee0${_scopeId}>`);
            if ((_b2 = (_a2 = unref(config)) == null ? void 0 : _a2.footer) == null ? void 0 : _b2.credits) {
              _push2(`<a${ssrRenderAttr("href", ((_e = (_d = (_c = unref(config)) == null ? void 0 : _c.footer) == null ? void 0 : _d.credits) == null ? void 0 : _e.href) || "#")} rel="noopener" target="_blank" data-v-eebf8ee0${_scopeId}>`);
              if ((_h = (_g = (_f = unref(config)) == null ? void 0 : _f.footer) == null ? void 0 : _g.credits) == null ? void 0 : _h.icon) {
                ssrRenderVNode(_push2, createVNode(resolveDynamicComponent((_k = (_j = (_i = unref(config)) == null ? void 0 : _i.footer) == null ? void 0 : _j.credits) == null ? void 0 : _k.icon), { class: "left-icon" }, null), _parent2, _scopeId);
              } else {
                _push2(`<!---->`);
              }
              if ((_n = (_m = (_l = unref(config)) == null ? void 0 : _l.footer) == null ? void 0 : _m.credits) == null ? void 0 : _n.text) {
                _push2(`<p data-v-eebf8ee0${_scopeId}>${ssrInterpolate(unref(config).footer.credits.text)}</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</a>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="center" data-v-eebf8ee0${_scopeId}><!--[-->`);
            ssrRenderList(unref(textLinks), (link) => {
              _push2(ssrRenderComponent(_component_NuxtLink, {
                key: link.href,
                class: "text-link",
                "aria-label": link.text,
                href: link.href,
                target: link.target || "_self"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(link.text)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(link.text), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--></div><div class="right" data-v-eebf8ee0${_scopeId}><!--[-->`);
            ssrRenderList(unref(icons).slice(0, 6 - unref(nbSocialIcons)), (icon) => {
              _push2(`<a class="icon-link" rel="noopener"${ssrRenderAttr("aria-label", icon.label)}${ssrRenderAttr("href", icon.href)} target="_blank" data-v-eebf8ee0${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: icon.icon
              }, null, _parent2, _scopeId));
              _push2(`</a>`);
            });
            _push2(`<!--]-->`);
            _push2(ssrRenderComponent(_component_AppSocialIcons, {
              ref_key: "socialIcons",
              ref: socialIcons
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "left" }, [
                ((_p = (_o = unref(config)) == null ? void 0 : _o.footer) == null ? void 0 : _p.credits) ? (openBlock(), createBlock("a", {
                  key: 0,
                  href: ((_s = (_r = (_q = unref(config)) == null ? void 0 : _q.footer) == null ? void 0 : _r.credits) == null ? void 0 : _s.href) || "#",
                  rel: "noopener",
                  target: "_blank"
                }, [
                  ((_v = (_u = (_t = unref(config)) == null ? void 0 : _t.footer) == null ? void 0 : _u.credits) == null ? void 0 : _v.icon) ? (openBlock(), createBlock(resolveDynamicComponent((_y = (_x = (_w = unref(config)) == null ? void 0 : _w.footer) == null ? void 0 : _x.credits) == null ? void 0 : _y.icon), {
                    key: 0,
                    class: "left-icon"
                  })) : createCommentVNode("", true),
                  ((_B = (_A = (_z = unref(config)) == null ? void 0 : _z.footer) == null ? void 0 : _A.credits) == null ? void 0 : _B.text) ? (openBlock(), createBlock("p", { key: 1 }, toDisplayString(unref(config).footer.credits.text), 1)) : createCommentVNode("", true)
                ], 8, ["href"])) : createCommentVNode("", true)
              ]),
              createVNode("div", { class: "center" }, [
                (openBlock(true), createBlock(Fragment$1, null, renderList(unref(textLinks), (link) => {
                  return openBlock(), createBlock(_component_NuxtLink, {
                    key: link.href,
                    class: "text-link",
                    "aria-label": link.text,
                    href: link.href,
                    target: link.target || "_self"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(link.text), 1)
                    ]),
                    _: 2
                  }, 1032, ["aria-label", "href", "target"]);
                }), 128))
              ]),
              createVNode("div", { class: "right" }, [
                (openBlock(true), createBlock(Fragment$1, null, renderList(unref(icons).slice(0, 6 - unref(nbSocialIcons)), (icon) => {
                  return openBlock(), createBlock("a", {
                    key: icon.label,
                    class: "icon-link",
                    rel: "noopener",
                    "aria-label": icon.label,
                    href: icon.href,
                    target: "_blank"
                  }, [
                    createVNode(_component_Icon, {
                      name: icon.icon
                    }, null, 8, ["name"])
                  ], 8, ["aria-label", "href"]);
                }), 128)),
                createVNode(_component_AppSocialIcons, {
                  ref_key: "socialIcons",
                  ref: socialIcons
                }, null, 512)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</footer>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/docus/components/app/AppFooter.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-eebf8ee0"]]);
const AppFooter = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: __nuxt_component_2
});
const useContentHead = (_content, to = useRoute()) => {
  const content = unref(_content);
  const config = useRuntimeConfig$1();
  const refreshHead = (data = content) => {
    if (!to.path || !data) {
      return;
    }
    const head = Object.assign({}, (data == null ? void 0 : data.head) || {});
    head.meta = [...head.meta || []];
    head.link = [...head.link || []];
    const title = head.title || (data == null ? void 0 : data.title);
    if (title) {
      head.title = title;
      if (!head.meta.some((m) => m.property === "og:title")) {
        head.meta.push({
          name: "og:title",
          content: title
        });
      }
    }
    const host = config.public.content.host;
    if (host) {
      const _url = joinURL(host ?? "/", config.app.baseURL, to.fullPath);
      const url = config.public.content.trailingSlash ? withTrailingSlash(_url) : withoutTrailingSlash(_url);
      if (!head.meta.some((m) => m.property === "og:url")) {
        head.meta.push({
          name: "og:url",
          content: url
        });
      }
      if (!head.link.some((m) => m.rel === "canonical")) {
        head.link.push({
          rel: "canonical",
          href: url
        });
      }
    }
    const description = (head == null ? void 0 : head.description) || (data == null ? void 0 : data.description);
    if (description && head.meta.filter((m) => m.name === "description").length === 0) {
      head.meta.push({
        name: "description",
        content: description
      });
    }
    if (description && !head.meta.some((m) => m.property === "og:description")) {
      head.meta.push({
        name: "og:description",
        content: description
      });
    }
    const image = (head == null ? void 0 : head.image) || (data == null ? void 0 : data.image);
    if (image && head.meta.filter((m) => m.property === "og:image").length === 0) {
      if (typeof image === "string") {
        head.meta.push({
          property: "og:image",
          // @ts-ignore - We expect `head.image` from Nuxt configurations...
          content: host && !hasProtocol(image) ? new URL(joinURL(config.app.baseURL, image), host).href : image
        });
      }
      if (typeof image === "object") {
        const imageKeys = [
          "src",
          "secure_url",
          "type",
          "width",
          "height",
          "alt"
        ];
        for (const key of imageKeys) {
          if (key === "src" && image.src) {
            const isAbsoluteURL = hasProtocol(image.src);
            const imageURL = isAbsoluteURL ? image.src : joinURL(config.app.baseURL, image.src ?? "/");
            head.meta.push({
              property: "og:image",
              content: host && !isAbsoluteURL ? new URL(imageURL, host).href : imageURL
            });
          } else if (image[key]) {
            head.meta.push({
              property: `og:image:${key}`,
              content: image[key]
            });
          }
        }
      }
    }
    {
      useHead(head);
    }
  };
  watch(() => unref(_content), refreshHead, { immediate: true });
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "AppLayout",
  __ssrInlineRender: true,
  setup(__props) {
    const { config } = useDocus();
    useHead({
      titleTemplate: config.value.titleTemplate,
      meta: [
        { name: "twitter:card", content: "summary_large_image" }
      ]
    });
    watch(
      () => config.value.titleTemplate,
      () => useHead({ titleTemplate: config.value.titleTemplate })
    );
    useContentHead(config.value);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppLoadingBar = _sfc_main$d;
      const _component_AppHeader = __nuxt_component_1$1;
      const _component_AppFooter = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_AppLoadingBar, null, null, _parent));
      _push(ssrRenderComponent(_component_AppHeader, null, null, _parent));
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(ssrRenderComponent(_component_AppFooter, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/docus/components/app/AppLayout.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const AppLayout = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: _sfc_main$2
});
const interpolatePath = (route, match) => {
  return match.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, (r) => {
    var _a;
    return ((_a = route.params[r.slice(1)]) == null ? void 0 : _a.toString()) || "";
  });
};
const generateRouteKey = (routeProps, override) => {
  const matchedRoute = routeProps.route.matched.find((m) => {
    var _a;
    return ((_a = m.components) == null ? void 0 : _a.default) === routeProps.Component.type;
  });
  const source = override ?? (matchedRoute == null ? void 0 : matchedRoute.meta.key) ?? (matchedRoute && interpolatePath(routeProps.route, matchedRoute));
  return typeof source === "function" ? source(routeProps.route) : source;
};
const wrapInKeepAlive = (props, children) => {
  return { default: () => children };
};
const Fragment = defineComponent({
  name: "FragmentWrapper",
  setup(_props, { slots }) {
    return () => {
      var _a;
      return (_a = slots.default) == null ? void 0 : _a.call(slots);
    };
  }
});
const _wrapIf = (component, props, slots) => {
  return { default: () => props ? h(component, props === true ? {} : props, slots) : h(Fragment, {}, slots) };
};
const __nuxt_component_1 = defineComponent({
  name: "NuxtPage",
  inheritAttrs: false,
  props: {
    name: {
      type: String
    },
    transition: {
      type: [Boolean, Object],
      default: void 0
    },
    keepalive: {
      type: [Boolean, Object],
      default: void 0
    },
    route: {
      type: Object
    },
    pageKey: {
      type: [Function, String],
      default: null
    }
  },
  setup(props, { attrs }) {
    const nuxtApp = useNuxtApp();
    return () => {
      return h(RouterView, { name: props.name, route: props.route, ...attrs }, {
        default: (routeProps) => {
          if (!routeProps.Component) {
            return;
          }
          const key = generateRouteKey(routeProps, props.pageKey);
          const done = nuxtApp.deferHydration();
          const hasTransition = !!(props.transition ?? routeProps.route.meta.pageTransition ?? appPageTransition);
          const transitionProps = hasTransition && _mergeTransitionProps([
            props.transition,
            routeProps.route.meta.pageTransition,
            appPageTransition,
            { onAfterLeave: () => {
              nuxtApp.callHook("page:transition:finish", routeProps.Component);
            } }
          ].filter(Boolean));
          return _wrapIf(
            Transition,
            hasTransition && transitionProps,
            wrapInKeepAlive(
              props.keepalive ?? routeProps.route.meta.keepalive ?? appKeepalive,
              h(Suspense, {
                onPending: () => nuxtApp.callHook("page:start", routeProps.Component),
                onResolve: () => {
                  nextTick(() => nuxtApp.callHook("page:finish", routeProps.Component).finally(done));
                }
              }, { default: () => h(RouteProvider, { key, routeProps, pageKey: key, hasTransition }) })
            )
          ).default();
        }
      });
    };
  }
});
function _toArray(val) {
  return Array.isArray(val) ? val : val ? [val] : [];
}
function _mergeTransitionProps(routeProps) {
  const _props = routeProps.map((prop) => ({
    ...prop,
    onAfterLeave: _toArray(prop.onAfterLeave)
  }));
  return defu(..._props);
}
const RouteProvider = defineComponent({
  name: "RouteProvider",
  // TODO: Type props
  // eslint-disable-next-line vue/require-prop-types
  props: ["routeProps", "pageKey", "hasTransition"],
  setup(props) {
    const previousKey = props.pageKey;
    const previousRoute = props.routeProps.route;
    const route = {};
    for (const key in props.routeProps.route) {
      route[key] = computed(() => previousKey === props.pageKey ? props.routeProps.route[key] : previousRoute[key]);
    }
    provide("_route", reactive(route));
    return () => {
      return h(props.routeProps.Component);
    };
  }
});
const page = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: __nuxt_component_1
});
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_AppLayout = _sfc_main$2;
  const _component_NuxtPage = __nuxt_component_1;
  _push(ssrRenderComponent(_component_AppLayout, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_NuxtPage, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_NuxtPage)
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/docus/app.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const AppComponent = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "nuxt-root",
  __ssrInlineRender: true,
  setup(__props) {
    const ErrorComponent = defineAsyncComponent(() => import('./_nuxt/error-component-969bdc5d.mjs').then((r) => r.default || r));
    const IslandRendererer = defineAsyncComponent(() => import('./_nuxt/island-renderer-862b92a0.mjs').then((r) => r.default || r));
    const nuxtApp = useNuxtApp();
    nuxtApp.deferHydration();
    provide("_route", useRoute());
    nuxtApp.hooks.callHookWith((hooks) => hooks.map((hook) => hook()), "vue:setup");
    const error = useError();
    onErrorCaptured((err, target, info) => {
      nuxtApp.hooks.callHook("vue:error", err, target, info).catch((hookError) => console.error("[nuxt] Error in `vue:error` hook", hookError));
      {
        const p = callWithNuxt(nuxtApp, showError, [err]);
        onServerPrefetch(() => p);
      }
    });
    const { islandContext } = nuxtApp.ssrContext;
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderSuspense(_push, {
        default: () => {
          if (unref(error)) {
            _push(ssrRenderComponent(unref(ErrorComponent), { error: unref(error) }, null, _parent));
          } else if (unref(islandContext)) {
            _push(ssrRenderComponent(unref(IslandRendererer), { context: unref(islandContext) }, null, _parent));
          } else {
            _push(ssrRenderComponent(unref(AppComponent), null, null, _parent));
          }
        },
        _: 1
      });
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/nuxt-root.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
if (!globalThis.$fetch) {
  globalThis.$fetch = $fetch$1.create({
    baseURL: baseURL()
  });
}
let entry;
const plugins = normalizePlugins(_plugins);
{
  entry = async function createNuxtAppServer(ssrContext) {
    const vueApp = createApp(_sfc_main);
    const nuxt = createNuxtApp({ vueApp, ssrContext });
    try {
      await applyPlugins(nuxt, plugins);
      await nuxt.hooks.callHook("app:created", vueApp);
    } catch (err) {
      await nuxt.callHook("app:error", err);
      nuxt.payload.error = nuxt.payload.error || err;
    }
    return vueApp;
  };
}
const entry$1 = (ctx) => entry(ctx);

export { AppLoadingBar as A, Logo as L, ThemeSelect as T, _wrapIf as _, useContentHead as a, useHead as b, createError as c, appLayoutTransition as d, entry$1 as default, AppSocialIcons as e, fetchContentNavigation as f, AppHeaderDialog as g, AppHeaderLogo as h, AppHeaderNavigation as i, AppSearch as j, clientOnly as k, layouts as l, component_vue3 as m, AppHeader as n, AppFooter as o, AppLayout as p, queryContent as q, page as r, useColorMode as u };
//# sourceMappingURL=server.mjs.map
