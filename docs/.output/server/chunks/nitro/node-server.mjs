globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import 'node-fetch-native/polyfill';
import { Server as Server$1 } from 'node:http';
import { Server } from 'node:https';
import destr from 'destr';
import { defineEventHandler, handleCacheHeaders, createEvent, eventHandler, setHeaders, sendRedirect, proxyRequest, getRequestHeader, getRequestHeaders, setResponseHeader, createError, getQuery, getCookie, appendHeader, createApp, createRouter as createRouter$1, toNodeListener, fetchWithEvent, lazyEventHandler } from 'h3';
import { createFetch as createFetch$1, Headers } from 'ofetch';
import { createCall, createFetch } from 'unenv/runtime/fetch/index';
import { createHooks } from 'hookable';
import { u as useRuntimeConfig } from './config.mjs';
import { hash } from 'ohash';
import { parseURL, withoutBase, joinURL, withQuery, withLeadingSlash, withoutTrailingSlash, isRelative } from 'ufo';
import { createStorage, prefixStorage } from 'unstorage';
import overlay from 'unstorage/drivers/overlay';
import memory$1 from 'unstorage/drivers/memory';
import defu, { defu as defu$1 } from 'defu';
import { toRouteMatcher, createRouter } from 'radix3';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve, extname, join } from 'pathe';
import { graphql } from '@octokit/graphql';
import remarkGithub from 'remark-github';
import { kebabCase, pascalCase, camelCase } from 'scule';
import { unified } from 'unified';
import { toString } from 'mdast-util-to-string';
import { preprocess } from 'micromark/lib/preprocess.js';
import { postprocess } from 'micromark/lib/postprocess.js';
import { stringifyPosition } from 'unist-util-stringify-position';
import { markdownLineEnding, markdownSpace } from 'micromark-util-character';
import { push, splice } from 'micromark-util-chunked';
import { resolveAll } from 'micromark-util-resolve-all';
import remarkEmoji from 'remark-emoji';
import rehypeSlug from 'rehype-slug';
import remarkSqueezeParagraphs from 'remark-squeeze-paragraphs';
import rehypeExternalLinks from 'rehype-external-links';
import remarkGfm from 'remark-gfm';
import rehypeSortAttributeValues from 'rehype-sort-attribute-values';
import rehypeSortAttributes from 'rehype-sort-attributes';
import rehypeRaw from 'rehype-raw';
import remarkMDC, { parseFrontMatter } from 'remark-mdc';
import remarkParse from 'remark-parse';
import remark2rehype from 'remark-rehype';
import { all } from 'mdast-util-to-hast';
import { detab } from 'detab';
import { u } from 'unist-builder';
import { encode } from 'mdurl';
import slugify from 'slugify';
import { position } from 'unist-util-position';
import { visit } from 'unist-util-visit';
import { BUNDLED_LANGUAGES, BUNDLED_THEMES, getHighlighter } from 'shiki-es';
import consola from 'unenv/runtime/npm/consola';

const _assets = {
  ["nitro:bundled:pinceau:index.css"]: {
    import: () => import('../raw/index.mjs').then(r => r.default || r),
    meta: {"type":"text/css; charset=utf-8","etag":"\"5f49-wkgHG+fscqOKcp8QoWSQGkApyyA\"","mtime":"2023-03-10T02:07:57.266Z"}
  },
  ["nitro:bundled:cache:content:content-index.json"]: {
    import: () => import('../raw/content-index.mjs').then(r => r.default || r),
    meta: {"type":"application/json","etag":"\"110f-Q8i8Db2x+oA1NvEjtxlrcoPxbGA\"","mtime":"2023-03-10T02:07:57.266Z"}
  },
  ["nitro:bundled:cache:content:content-navigation.json"]: {
    import: () => import('../raw/content-navigation.mjs').then(r => r.default || r),
    meta: {"type":"application/json","etag":"\"121a-7FSAkxwC/f2uyKwPbauntnZX9Yk\"","mtime":"2023-03-10T02:07:57.266Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:1.index.md"]: {
    import: () => import('../raw/1.index.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"14b4-2cNecKm5K5KZUBwTHhZtlBP6I6I\"","mtime":"2023-03-10T02:07:57.267Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:4.Spectre:_dir.yml"]: {
    import: () => import('../raw/_dir.mjs').then(r => r.default || r),
    meta: {"type":"text/yaml; charset=utf-8","etag":"\"121-derYN4yJ/Et1hEibVxEMtYmaE1g\"","mtime":"2023-03-10T02:07:57.268Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:2.frontier:_dir.yml"]: {
    import: () => import('../raw/_dir2.mjs').then(r => r.default || r),
    meta: {"type":"text/yaml; charset=utf-8","etag":"\"122-ddVnuPO4z8tMZrhhHqSZL8g8n3E\"","mtime":"2023-03-10T02:07:57.268Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:3.rdvue:_dir.yml"]: {
    import: () => import('../raw/_dir3.mjs').then(r => r.default || r),
    meta: {"type":"text/yaml; charset=utf-8","etag":"\"116-3cytTOXFftl+NucgDEYpVNEYCQk\"","mtime":"2023-03-10T02:07:57.268Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:5.mobile:_dir.yml"]: {
    import: () => import('../raw/_dir4.mjs').then(r => r.default || r),
    meta: {"type":"text/yaml; charset=utf-8","etag":"\"115-0T92A0JzHoCvx642nVCSqTJhjX0\"","mtime":"2023-03-10T02:07:57.268Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:6.design:_dir.yml"]: {
    import: () => import('../raw/_dir5.mjs').then(r => r.default || r),
    meta: {"type":"text/yaml; charset=utf-8","etag":"\"115-OclPezYD2+2YjNFEhR5ga2RwQYk\"","mtime":"2023-03-10T02:07:57.268Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:7.IAC:_dir.yml"]: {
    import: () => import('../raw/_dir6.mjs').then(r => r.default || r),
    meta: {"type":"text/yaml; charset=utf-8","etag":"\"109-Ds+Y0RACbGBLB2XwUvMfJ0SYx6o\"","mtime":"2023-03-10T02:07:57.268Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:_partials:hello-world.md"]: {
    import: () => import('../raw/hello-world.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"35f-zFEGkybGAnA9H4pRgzyBf7HtfD0\"","mtime":"2023-03-10T02:07:57.267Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:4.Spectre:1.getting-started:1.introduction.md"]: {
    import: () => import('../raw/1.introduction.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"245-97wfg9MO/muB3v/AfBzbJbA4z7Y\"","mtime":"2023-03-10T02:07:57.268Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:4.Spectre:1.getting-started:_dir.yml"]: {
    import: () => import('../raw/_dir7.mjs').then(r => r.default || r),
    meta: {"type":"text/yaml; charset=utf-8","etag":"\"155-j9pc0bvMd3KMrRMjQD6V0sjpb8s\"","mtime":"2023-03-10T02:07:57.267Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:2.frontier:1.introduction:1.whats-frontier.md"]: {
    import: () => import('../raw/1.whats-frontier.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"253-wZMvrio99XBe80opX+69Fl6+jzY\"","mtime":"2023-03-10T02:07:57.268Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:2.frontier:1.introduction:2.content-directory.md"]: {
    import: () => import('../raw/2.content-directory.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"25d-mt4mhnUOdipn9jZOSfEX/lUzQLY\"","mtime":"2023-03-10T02:07:57.268Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:2.frontier:1.introduction:3.philosophy.md"]: {
    import: () => import('../raw/3.philosophy.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"233-LSDJM8WupHivPT+7h5e5/92pkU8\"","mtime":"2023-03-10T02:07:57.268Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:2.frontier:1.introduction:_dir.yml"]: {
    import: () => import('../raw/_dir8.mjs').then(r => r.default || r),
    meta: {"type":"text/yaml; charset=utf-8","etag":"\"152-b1HsfuBpQFVb4fB/TcfFfZp8gWM\"","mtime":"2023-03-10T02:07:57.268Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:2.frontier:2.installation:1.general.md"]: {
    import: () => import('../raw/1.general.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"22d-Q8IHDIscXnNVwZhUdQzl8NCvSAQ\"","mtime":"2023-03-10T02:07:57.268Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:2.frontier:2.installation:2.development.md"]: {
    import: () => import('../raw/2.development.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"239-K1gGlTTcUKDHB2HpRTys5ylX2Zc\"","mtime":"2023-03-10T02:07:57.268Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:2.frontier:2.installation:3.navigation.md"]: {
    import: () => import('../raw/3.navigation.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"233-l8wUzEsJz6uCHPgF26rPwyBGv5Y\"","mtime":"2023-03-10T02:07:57.268Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:2.frontier:2.installation:_dir.yml"]: {
    import: () => import('../raw/_dir9.mjs').then(r => r.default || r),
    meta: {"type":"text/yaml; charset=utf-8","etag":"\"155-cHBvtH2tMnwis6bC5QQGoNzDrxY\"","mtime":"2023-03-10T02:07:57.269Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:2.frontier:3.cli:1.usage.md"]: {
    import: () => import('../raw/1.usage.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"1f1-Cdo3vdA70+vGhXQiaL1Tml6DeCY\"","mtime":"2023-03-10T02:07:57.268Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:2.frontier:3.cli:2.development.md"]: {
    import: () => import('../raw/2.development2.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"215-dpcseGCniwLKNAZVXroeX+jriYI\"","mtime":"2023-03-10T02:07:57.269Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:2.frontier:3.cli:_dir.yml"]: {
    import: () => import('../raw/_dir10.mjs').then(r => r.default || r),
    meta: {"type":"text/yaml; charset=utf-8","etag":"\"12d-3xGvZTKh3AAeo1DsSjknMpCwgxs\"","mtime":"2023-03-10T02:07:57.268Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:2.frontier:5.libraries:1.typekit.md"]: {
    import: () => import('../raw/1.typekit.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"215-RJ4grj/k4dEBKXnSgHYQc9LK1Cc\"","mtime":"2023-03-10T02:07:57.269Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:2.frontier:5.libraries:2.standard-library.md"]: {
    import: () => import('../raw/2.standard-library.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"24b-iUqRcMTC0WyrnfM6MLzVfTCn/Yc\"","mtime":"2023-03-10T02:07:57.268Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:2.frontier:5.libraries:_dir.yml"]: {
    import: () => import('../raw/_dir11.mjs').then(r => r.default || r),
    meta: {"type":"text/yaml; charset=utf-8","etag":"\"140-vWh8MBOAihH3cqJbsTmFP3YXXcE\"","mtime":"2023-03-10T02:07:57.268Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:2.frontier:4.plugins:1.frontend.md"]: {
    import: () => import('../raw/1.frontend.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"213-yuArzcgpc1X3GqwiI46jMCzSh8c\"","mtime":"2023-03-10T02:07:57.268Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:2.frontier:4.plugins:2.mobile.md"]: {
    import: () => import('../raw/2.mobile.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"207-ZRdd0skW5qBMbfhAAz6dgysNu1s\"","mtime":"2023-03-10T02:07:57.268Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:2.frontier:4.plugins:2.quality.md"]: {
    import: () => import('../raw/2.quality.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"20d-ldp/Trz1Jgk86F3M1FfJbL1iVrM\"","mtime":"2023-03-10T02:07:57.268Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:2.frontier:4.plugins:_dir.yml"]: {
    import: () => import('../raw/_dir12.mjs').then(r => r.default || r),
    meta: {"type":"text/yaml; charset=utf-8","etag":"\"13d-UyR3A5q5caS7caZvY6apW7RdDVU\"","mtime":"2023-03-10T02:07:57.269Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:2.frontier:6.templates:1.dotNet.md"]: {
    import: () => import('../raw/1.dotNet.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"283-gycR6MjDEpWoXom6z4+KCmG0jeM\"","mtime":"2023-03-10T02:07:57.269Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:2.frontier:6.templates:2.typescript.md"]: {
    import: () => import('../raw/2.typescript.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"298-LBAPyExX0lnP8pbWuaA3cQonlUo\"","mtime":"2023-03-10T02:07:57.267Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:2.frontier:6.templates:3.nuxt.md"]: {
    import: () => import('../raw/3.nuxt.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"27d-m1/WnOEz+dKUch03IzZkie5AkYU\"","mtime":"2023-03-10T02:07:57.269Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:2.frontier:6.templates:_dir.yml"]: {
    import: () => import('../raw/_dir13.mjs').then(r => r.default || r),
    meta: {"type":"text/yaml; charset=utf-8","etag":"\"140-b7cNzXwv22RIqJMZ2xXiULvSXvk\"","mtime":"2023-03-10T02:07:57.269Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:3.rdvue:1.getting-started:1.overview.md"]: {
    import: () => import('../raw/1.overview.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"2a20-XZ4+QqYJDCQHNseWq+OS6rCLUjw\"","mtime":"2023-03-10T02:07:57.267Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:3.rdvue:1.getting-started:_dir.yml"]: {
    import: () => import('../raw/_dir14.mjs').then(r => r.default || r),
    meta: {"type":"text/yaml; charset=utf-8","etag":"\"155-dtDX/JuVwNdRDbc+NmdCTtrJD9c\"","mtime":"2023-03-10T02:07:57.268Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:3.rdvue:2.cli-commands:1.usage.md"]: {
    import: () => import('../raw/1.usage2.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"27da-gaj87O9ipCPnXlYXtMLpOt3w0g8\"","mtime":"2023-03-10T02:07:57.268Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:3.rdvue:2.cli-commands:_dir.yml"]: {
    import: () => import('../raw/_dir15.mjs').then(r => r.default || r),
    meta: {"type":"text/yaml; charset=utf-8","etag":"\"14c-G/mCwz0HAugPdVPMZN1focPww6U\"","mtime":"2023-03-10T02:07:57.267Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:3.rdvue:3.scaffilding:1.sitemap.md"]: {
    import: () => import('../raw/1.sitemap.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"50d5-tvYv6qSkiUykYAQ7ByVxIsQsybM\"","mtime":"2023-03-10T02:07:57.267Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:3.rdvue:3.scaffilding:_dir.yml"]: {
    import: () => import('../raw/_dir16.mjs').then(r => r.default || r),
    meta: {"type":"text/yaml; charset=utf-8","etag":"\"144-YqppOvjHnbnHpZKJ/CfPXXfh2p8\"","mtime":"2023-03-10T02:07:57.268Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:3.rdvue:4.template-schema:1.schema.md"]: {
    import: () => import('../raw/1.schema.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"203ed-ihfyBEVDuM7EZPbEnxwWtENenuE\"","mtime":"2023-03-10T02:07:57.268Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:3.rdvue:4.template-schema:_dir.yml"]: {
    import: () => import('../raw/_dir17.mjs').then(r => r.default || r),
    meta: {"type":"text/yaml; charset=utf-8","etag":"\"14f-Po7hvsX8KlUI1OeilyLsQpw0VMU\"","mtime":"2023-03-10T02:07:57.267Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:3.rdvue:5.features:1.features.md"]: {
    import: () => import('../raw/1.features.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"a8fb-VtNj31CbaydNIJLh1wlICtpJ12Q\"","mtime":"2023-03-10T02:07:57.267Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:3.rdvue:5.features:_dir.yml"]: {
    import: () => import('../raw/_dir18.mjs').then(r => r.default || r),
    meta: {"type":"text/yaml; charset=utf-8","etag":"\"133-v956dN7Yj7KLGR6eQkhIb7N7yHc\"","mtime":"2023-03-10T02:07:57.268Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:3.rdvue:6.themeing:1.theming.md"]: {
    import: () => import('../raw/1.theming.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"1612-UsK89BJ5prsYkwgVLvMR+dZpd/k\"","mtime":"2023-03-10T02:07:57.268Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:3.rdvue:6.themeing:_dir.yml"]: {
    import: () => import('../raw/_dir19.mjs').then(r => r.default || r),
    meta: {"type":"text/yaml; charset=utf-8","etag":"\"133-IlVsL234lRaKbFsrs/OguybBZ54\"","mtime":"2023-03-10T02:07:57.268Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:3.rdvue:7.testing:1.testing.md"]: {
    import: () => import('../raw/1.testing.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"2db4-eGcXDYiLpv+lgoX+oZgKjia/f5g\"","mtime":"2023-03-10T02:07:57.268Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:3.rdvue:7.testing:_dir.yml"]: {
    import: () => import('../raw/_dir20.mjs').then(r => r.default || r),
    meta: {"type":"text/yaml; charset=utf-8","etag":"\"12f-ZIH0NT3KRAW4J3cBJHTdoUhIbzA\"","mtime":"2023-03-10T02:07:57.267Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:5.mobile:1.getting-started:1.overview.md"]: {
    import: () => import('../raw/1.overview2.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"4029-S3My/OwabNmhGJn/oVapXf9ROTo\"","mtime":"2023-03-10T02:07:57.268Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:5.mobile:1.getting-started:_dir.yml"]: {
    import: () => import('../raw/_dir21.mjs').then(r => r.default || r),
    meta: {"type":"text/yaml; charset=utf-8","etag":"\"152-FXJm5M2CmaeIFl/8IK6Ae9IJmGM\"","mtime":"2023-03-10T02:07:57.268Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:5.mobile:2.cli-commands:1.usage.md"]: {
    import: () => import('../raw/1.usage3.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"317c-w9nqbg9PokWP2F9Ek2PPVfdAwEA\"","mtime":"2023-03-10T02:07:57.268Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:5.mobile:2.cli-commands:_dir.yml"]: {
    import: () => import('../raw/_dir22.mjs').then(r => r.default || r),
    meta: {"type":"text/yaml; charset=utf-8","etag":"\"14f-VWtvD3EzsRoV3ihbDhwezPHEcU4\"","mtime":"2023-03-10T02:07:57.268Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:5.mobile:3.features:1.features.md"]: {
    import: () => import('../raw/1.features2.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"c116-6A8vZdILM4pYL07ydbokKElQr5o\"","mtime":"2023-03-10T02:07:57.267Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:5.mobile:3.features:_dir.yml"]: {
    import: () => import('../raw/_dir23.mjs').then(r => r.default || r),
    meta: {"type":"text/yaml; charset=utf-8","etag":"\"136-FahGzPuA6Y/1/Nnhcrzr5RNTZVw\"","mtime":"2023-03-10T02:07:57.268Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:5.mobile:4.testing:1.testing.md"]: {
    import: () => import('../raw/1.testing2.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"217-yRiSQsXwHG1ufMsgH9G1uDFkoUw\"","mtime":"2023-03-10T02:07:57.268Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:5.mobile:4.testing:_dir.yml"]: {
    import: () => import('../raw/_dir24.mjs').then(r => r.default || r),
    meta: {"type":"text/yaml; charset=utf-8","etag":"\"132-y2+21Wy+8WPiOrnsj/vOuGEZ+5g\"","mtime":"2023-03-10T02:07:57.268Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:5.mobile:5.deployment:1.deployment.md"]: {
    import: () => import('../raw/1.deployment.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"235-naErFkP1d0eLb2VBJKt3CHCbmTU\"","mtime":"2023-03-10T02:07:57.268Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:5.mobile:5.deployment:_dir.yml"]: {
    import: () => import('../raw/_dir25.mjs').then(r => r.default || r),
    meta: {"type":"text/yaml; charset=utf-8","etag":"\"13e-SjGioHTFwgqKoTY9DmAaU/TAouI\"","mtime":"2023-03-10T02:07:57.268Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:6.design:1.getting-started:2.introduction.md"]: {
    import: () => import('../raw/2.introduction.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"242-lj6AhrGK1ALXO84ICfdFka5YqK8\"","mtime":"2023-03-10T02:07:57.268Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:6.design:1.getting-started:_dir.yml"]: {
    import: () => import('../raw/_dir26.mjs').then(r => r.default || r),
    meta: {"type":"text/yaml; charset=utf-8","etag":"\"152-YOa+3DEald/MjZ1g9wIuiOt3Fdo\"","mtime":"2023-03-10T02:07:57.267Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:7.IAC:1.getting-started:2.introduction.md"]: {
    import: () => import('../raw/2.introduction2.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"239-eu5o9lVZA+Tecz9YFiAxrh4rcxc\"","mtime":"2023-03-10T02:07:57.267Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:7.IAC:1.getting-started:_dir.yml"]: {
    import: () => import('../raw/_dir27.mjs').then(r => r.default || r),
    meta: {"type":"text/yaml; charset=utf-8","etag":"\"149-zzUM8O6q60PbnM3XU1JouGwNfZc\"","mtime":"2023-03-10T02:07:57.268Z"}
  }
};

function normalizeKey(key) {
  if (!key) {
    return "";
  }
  return key.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "");
}

const assets$1 = {
  getKeys() {
    return Promise.resolve(Object.keys(_assets))
  },
  hasItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(id in _assets)
  },
  getItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].import() : null)
  },
  getMeta (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].meta : {})
  }
};

const storage = createStorage({});

const useStorage = () => storage;

storage.mount('/assets', assets$1);

const bundledStorage = ["pinceau","/cache/content"];
for (const base of bundledStorage) {
  storage.mount(base, overlay({
    layers: [
      memory$1(),
      // TODO
      // prefixStorage(storage, base),
      prefixStorage(storage, 'assets:nitro:bundled:' + base)
    ]
  }));
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro";
  const name = opts.name || fn.name || "_";
  const integrity = hash([opts.integrity, fn, opts]);
  const validate = opts.validate || (() => true);
  async function get(key, resolver, shouldInvalidateCache) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || !validate(entry);
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      entry.value = await pending[key];
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry)) {
          useStorage().setItem(cacheKey, entry).catch((error) => console.error("[nitro] [cache]", error));
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (opts.swr && entry.value) {
      _resolvePromise.catch(console.error);
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = opts.shouldInvalidateCache?.(...args);
    const entry = await get(key, () => fn(...args), shouldInvalidateCache);
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : "";
}
function escapeKey(key) {
  return key.replace(/[^\dA-Za-z]/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const key = await opts.getKey?.(event);
      if (key) {
        return escapeKey(key);
      }
      const url = event.node.req.originalUrl || event.node.req.url;
      const friendlyName = escapeKey(decodeURI(parseURL(url).pathname)).slice(
        0,
        16
      );
      const urlHash = hash(url);
      return `${friendlyName}.${urlHash}`;
    },
    validate: (entry) => {
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: [opts.integrity, handler]
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const reqProxy = cloneWithProxy(incomingEvent.node.req, { headers: {} });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            for (const header in headers2) {
              this.setHeader(header, headers2[header]);
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.context = incomingEvent.context;
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = headers.Etag || headers.etag || `W/"${hash(body)}"`;
      headers["last-modified"] = headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString();
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      event.node.res.setHeader(name, response.headers[name]);
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler() {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      return sendRedirect(
        event,
        routeRules.redirect.to,
        routeRules.redirect.statusCode
      );
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      }
      return proxyRequest(event, target, {
        fetch: $fetch.raw,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    const path = new URL(event.node.req.url, "http://localhost").pathname;
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(path, useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

const nitro = (async function(nitro) {
  nitro.hooks.hook("render:html", async (htmlContext, { event }) => {
    const theme = await useStorage().getItem("pinceau:index.css");
    const pinceauContent = event?.pinceauContent || { theme: void 0, runtime: void 0 };
    if (!theme?.runtime) {
      htmlContext.head.splice(2, 0, `<style id="pinceau-runtime-hydratable">${pinceauContent.runtime}</style>`);
    }
    if (!theme?.theme) {
      htmlContext.head.splice(2, 0, `<style id="pinceau-theme">${theme}</style>`);
    }
  });
});

const script = "\"use strict\";const w=window,de=document.documentElement,knownColorSchemes=[\"dark\",\"light\"],preference=window.localStorage.getItem(\"nuxt-color-mode\")||\"dark\";let value=preference===\"system\"?getColorScheme():preference;const forcedColorMode=de.getAttribute(\"data-color-mode-forced\");forcedColorMode&&(value=forcedColorMode),addColorScheme(value),w[\"__NUXT_COLOR_MODE__\"]={preference,value,getColorScheme,addColorScheme,removeColorScheme};function addColorScheme(e){const o=\"\"+e+\"\",t=\"theme\";de.classList?de.classList.add(o):de.className+=\" \"+o,t&&de.setAttribute(\"data-\"+t,e)}function removeColorScheme(e){const o=\"\"+e+\"\",t=\"theme\";de.classList?de.classList.remove(o):de.className=de.className.replace(new RegExp(o,\"g\"),\"\"),t&&de.removeAttribute(\"data-\"+t)}function prefersColorScheme(e){return w.matchMedia(\"(prefers-color-scheme\"+e+\")\")}function getColorScheme(){if(w.matchMedia&&prefersColorScheme(\"\").media!==\"not all\"){for(const e of knownColorSchemes)if(prefersColorScheme(\":\"+e).matches)return e}return\"light\"}\n";

const _cEpUPBChV7 = (function(nitro) {
  nitro.hooks.hook("render:html", (htmlContext) => {
    htmlContext.head.push(`<script>${script}<\/script>`);
  });
});

const plugins = [
  nitro,
_cEpUPBChV7
];

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || event.node.req.url?.endsWith(".json") || event.node.req.url?.includes("/api/");
}
function normalizeError(error) {
  const cwd = typeof process.cwd === "function" ? process.cwd() : "/";
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.node.req.url,
    statusCode,
    statusMessage,
    message,
    stack: "",
    data: error.data
  };
  event.node.res.statusCode = errorObject.statusCode !== 200 && errorObject.statusCode || 500;
  if (errorObject.statusMessage) {
    event.node.res.statusMessage = errorObject.statusMessage;
  }
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (isJsonRequest(event)) {
    event.node.res.setHeader("Content-Type", "application/json");
    event.node.res.end(JSON.stringify(errorObject));
    return;
  }
  const isErrorPage = event.node.req.url?.startsWith("/__nuxt_error");
  const res = !isErrorPage ? await useNitroApp().localFetch(withQuery(joinURL(useRuntimeConfig().app.baseURL, "/__nuxt_error"), errorObject), {
    headers: getRequestHeaders(event),
    redirect: "manual"
  }).catch(() => null) : null;
  if (!res) {
    const { template } = await import('../error-500.mjs');
    event.node.res.setHeader("Content-Type", "text/html;charset=UTF-8");
    event.node.res.end(template(errorObject));
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  if (res.status && res.status !== 200) {
    event.node.res.statusCode = res.status;
  }
  if (res.statusText) {
    event.node.res.statusMessage = res.statusText;
  }
  event.node.res.end(await res.text());
});

const assets = {
  "/__studio.json": {
    "type": "application/json",
    "etag": "\"637ea-zoY6YOsEaOQy1jpguyPclFanLp0\"",
    "mtime": "2023-03-10T02:07:57.162Z",
    "size": 407530,
    "path": "../public/__studio.json"
  },
  "/_redirects": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"0-2jmj7l5rSw0yVb/vlWAYkK/YBwk\"",
    "mtime": "2023-03-10T02:07:52.008Z",
    "size": 0,
    "path": "../public/_redirects"
  },
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"10be-n8egyE9tcb7sKGr/pYCaQ4uWqxI\"",
    "mtime": "2023-03-10T02:07:52.008Z",
    "size": 4286,
    "path": "../public/favicon.ico"
  },
  "/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"17189-iQnzVRFqR0h0gj4Puo0lgPC8GrU\"",
    "mtime": "2023-03-10T02:07:56.249Z",
    "size": 94601,
    "path": "../public/index.html"
  },
  "/_nuxt/Alert.41cb256b.js": {
    "type": "application/javascript",
    "etag": "\"2fb-iKLX1KiYpvAK/QXds3490+ZZGJE\"",
    "mtime": "2023-03-10T02:07:52.007Z",
    "size": 763,
    "path": "../public/_nuxt/Alert.41cb256b.js"
  },
  "/_nuxt/Alert.f24f4058.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1a16-VRNQaIyOAuOBb3PXRl6WhnRkudc\"",
    "mtime": "2023-03-10T02:07:52.007Z",
    "size": 6678,
    "path": "../public/_nuxt/Alert.f24f4058.css"
  },
  "/_nuxt/AppLayout.7354fe11.js": {
    "type": "application/javascript",
    "etag": "\"146-34Rlvhw4ZbDEyvbKntF7hMZzTK4\"",
    "mtime": "2023-03-10T02:07:52.007Z",
    "size": 326,
    "path": "../public/_nuxt/AppLayout.7354fe11.js"
  },
  "/_nuxt/Badge.05529646.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1a36-wZcWUaatyZNJYT/1H8a99Hxtqb4\"",
    "mtime": "2023-03-10T02:07:52.007Z",
    "size": 6710,
    "path": "../public/_nuxt/Badge.05529646.css"
  },
  "/_nuxt/Badge.af643d4e.js": {
    "type": "application/javascript",
    "etag": "\"2b4-exmgn8UrkY+k97tVWMmPusKsOOw\"",
    "mtime": "2023-03-10T02:07:52.006Z",
    "size": 692,
    "path": "../public/_nuxt/Badge.af643d4e.js"
  },
  "/_nuxt/BlockHero.495ede00.js": {
    "type": "application/javascript",
    "etag": "\"7d9-EAuGVB7P/08g/jSmrdtAhjJTwHM\"",
    "mtime": "2023-03-10T02:07:52.006Z",
    "size": 2009,
    "path": "../public/_nuxt/BlockHero.495ede00.js"
  },
  "/_nuxt/BlockHero.4aa0ef8d.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"91d-h6Fg8gqRrUo0hdVTAgWwh5vFIPA\"",
    "mtime": "2023-03-10T02:07:52.006Z",
    "size": 2333,
    "path": "../public/_nuxt/BlockHero.4aa0ef8d.css"
  },
  "/_nuxt/ButtonLink.1b73392c.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1e4-roTiIFrag7HBU68JSKvJFE02aBE\"",
    "mtime": "2023-03-10T02:07:52.006Z",
    "size": 484,
    "path": "../public/_nuxt/ButtonLink.1b73392c.css"
  },
  "/_nuxt/ButtonLink.91883881.js": {
    "type": "application/javascript",
    "etag": "\"72e-EXQvB7sMgx1HRXwQw1ML9FqNisc\"",
    "mtime": "2023-03-10T02:07:52.006Z",
    "size": 1838,
    "path": "../public/_nuxt/ButtonLink.91883881.js"
  },
  "/_nuxt/Callout.12d57ced.js": {
    "type": "application/javascript",
    "etag": "\"49c-jyZVxFvv3D9yveUBq/mMf1XORNg\"",
    "mtime": "2023-03-10T02:07:52.006Z",
    "size": 1180,
    "path": "../public/_nuxt/Callout.12d57ced.js"
  },
  "/_nuxt/Callout.a5db879a.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1ccd-PVf6hQKz6CPZgMy7HKkzqR3Kiso\"",
    "mtime": "2023-03-10T02:07:52.005Z",
    "size": 7373,
    "path": "../public/_nuxt/Callout.a5db879a.css"
  },
  "/_nuxt/Card.178cbb97.js": {
    "type": "application/javascript",
    "etag": "\"442-4bW7xzdA5OWUSEL8dMgDZfJ9o5U\"",
    "mtime": "2023-03-10T02:07:52.005Z",
    "size": 1090,
    "path": "../public/_nuxt/Card.178cbb97.js"
  },
  "/_nuxt/Card.5dfb7f30.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"399-48XDzmd4bWgJVHzUU067EB5nlq0\"",
    "mtime": "2023-03-10T02:07:52.005Z",
    "size": 921,
    "path": "../public/_nuxt/Card.5dfb7f30.css"
  },
  "/_nuxt/CardGrid.54558efd.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"406-ExKq73X5COUUNzbXSSIZM4jO8oU\"",
    "mtime": "2023-03-10T02:07:52.005Z",
    "size": 1030,
    "path": "../public/_nuxt/CardGrid.54558efd.css"
  },
  "/_nuxt/CardGrid.e3a9f75d.js": {
    "type": "application/javascript",
    "etag": "\"312-ZgFk+4GnCp9pAKA6AxYK1NzVtec\"",
    "mtime": "2023-03-10T02:07:52.005Z",
    "size": 786,
    "path": "../public/_nuxt/CardGrid.e3a9f75d.js"
  },
  "/_nuxt/CodeBlock.163820c8.js": {
    "type": "application/javascript",
    "etag": "\"221-ZDybs/HTDmHz0SMvSJOo1O4HCPg\"",
    "mtime": "2023-03-10T02:07:52.005Z",
    "size": 545,
    "path": "../public/_nuxt/CodeBlock.163820c8.js"
  },
  "/_nuxt/CodeBlock.e4cadaca.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"5d-Bx0Xxb29hd822FZyW0gdZyI/vHo\"",
    "mtime": "2023-03-10T02:07:52.004Z",
    "size": 93,
    "path": "../public/_nuxt/CodeBlock.e4cadaca.css"
  },
  "/_nuxt/CodeGroup.92ac881c.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1ed-tEXBRJqzxmZtBEvGIAGqDiPsSAk\"",
    "mtime": "2023-03-10T02:07:52.004Z",
    "size": 493,
    "path": "../public/_nuxt/CodeGroup.92ac881c.css"
  },
  "/_nuxt/CodeGroup.c21eec3c.js": {
    "type": "application/javascript",
    "etag": "\"10d-4x1h7hGnYLXJiDNywtVpaWIWrw4\"",
    "mtime": "2023-03-10T02:07:52.004Z",
    "size": 269,
    "path": "../public/_nuxt/CodeGroup.c21eec3c.js"
  },
  "/_nuxt/CodeGroup.vue.e138b097.js": {
    "type": "application/javascript",
    "etag": "\"452-zdI9oROuGOn9bYaJMbeg9Wpkvsc\"",
    "mtime": "2023-03-10T02:07:52.004Z",
    "size": 1106,
    "path": "../public/_nuxt/CodeGroup.vue.e138b097.js"
  },
  "/_nuxt/ComponentPlayground.3c424a18.js": {
    "type": "application/javascript",
    "etag": "\"38e-Bn7QPCNnzN8AMPIW24kX+40X8EI\"",
    "mtime": "2023-03-10T02:07:52.004Z",
    "size": 910,
    "path": "../public/_nuxt/ComponentPlayground.3c424a18.js"
  },
  "/_nuxt/ComponentPlayground.3f4b16b9.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"32e-ukL5wbG4J9I7TK3tYMV32Nv4wKM\"",
    "mtime": "2023-03-10T02:07:52.003Z",
    "size": 814,
    "path": "../public/_nuxt/ComponentPlayground.3f4b16b9.css"
  },
  "/_nuxt/ComponentPlayground.vue.1e5cc557.js": {
    "type": "application/javascript",
    "etag": "\"4ab-RhWYeP/0O/9B1vEsdxWN0BJGeUg\"",
    "mtime": "2023-03-10T02:07:52.003Z",
    "size": 1195,
    "path": "../public/_nuxt/ComponentPlayground.vue.1e5cc557.js"
  },
  "/_nuxt/ComponentPlaygroundData.2ba66f99.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"e8-eRIBDachbuHQgcxmMyQhlHa6tXo\"",
    "mtime": "2023-03-10T02:07:52.003Z",
    "size": 232,
    "path": "../public/_nuxt/ComponentPlaygroundData.2ba66f99.css"
  },
  "/_nuxt/ComponentPlaygroundData.8cb96cd4.js": {
    "type": "application/javascript",
    "etag": "\"69f-WNpYvSULF+BV60tRv/Klw//fJ6s\"",
    "mtime": "2023-03-10T02:07:52.003Z",
    "size": 1695,
    "path": "../public/_nuxt/ComponentPlaygroundData.8cb96cd4.js"
  },
  "/_nuxt/ComponentPlaygroundProps.54f42c7a.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"339-BJnAxWNkwK91+x6XqFg1Bh8QVR8\"",
    "mtime": "2023-03-10T02:07:52.003Z",
    "size": 825,
    "path": "../public/_nuxt/ComponentPlaygroundProps.54f42c7a.css"
  },
  "/_nuxt/ComponentPlaygroundProps.583c9bda.js": {
    "type": "application/javascript",
    "etag": "\"663-BtKIB7CNEtziOIulpOKeJwTEjhw\"",
    "mtime": "2023-03-10T02:07:52.003Z",
    "size": 1635,
    "path": "../public/_nuxt/ComponentPlaygroundProps.583c9bda.js"
  },
  "/_nuxt/ComponentPlaygroundSlots.71fbb170.js": {
    "type": "application/javascript",
    "etag": "\"84-i9/rel55gmRIhLZwKCADLiw8ph8\"",
    "mtime": "2023-03-10T02:07:52.002Z",
    "size": 132,
    "path": "../public/_nuxt/ComponentPlaygroundSlots.71fbb170.js"
  },
  "/_nuxt/ComponentPlaygroundSlots.vue.d9207f3c.js": {
    "type": "application/javascript",
    "etag": "\"158-arSJJJpjRnZdG2GAW2S68ib8UTY\"",
    "mtime": "2023-03-10T02:07:52.002Z",
    "size": 344,
    "path": "../public/_nuxt/ComponentPlaygroundSlots.vue.d9207f3c.js"
  },
  "/_nuxt/ComponentPlaygroundTokens.334d4f7a.js": {
    "type": "application/javascript",
    "etag": "\"85-wKfpzw1PNJpoY/fTvR3obf7TkrM\"",
    "mtime": "2023-03-10T02:07:52.002Z",
    "size": 133,
    "path": "../public/_nuxt/ComponentPlaygroundTokens.334d4f7a.js"
  },
  "/_nuxt/ComponentPlaygroundTokens.vue.43c587d1.js": {
    "type": "application/javascript",
    "etag": "\"12b-91f94k+oCK6v5EDXDIp1wZ/jPiM\"",
    "mtime": "2023-03-10T02:07:52.002Z",
    "size": 299,
    "path": "../public/_nuxt/ComponentPlaygroundTokens.vue.43c587d1.js"
  },
  "/_nuxt/Container.dc145a5e.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"4b-g+IZZb8vuByFVOoClHpOI93dMrg\"",
    "mtime": "2023-03-10T02:07:52.002Z",
    "size": 75,
    "path": "../public/_nuxt/Container.dc145a5e.css"
  },
  "/_nuxt/Container.f1017aa2.js": {
    "type": "application/javascript",
    "etag": "\"38a3-pROSY/7l/BsD9dq284lFXE8YSwY\"",
    "mtime": "2023-03-10T02:07:52.001Z",
    "size": 14499,
    "path": "../public/_nuxt/Container.f1017aa2.js"
  },
  "/_nuxt/ContentDoc.cbc50263.js": {
    "type": "application/javascript",
    "etag": "\"6a7-2o+EL7cO1+g/QhbwtpYg74+Tdh8\"",
    "mtime": "2023-03-10T02:07:52.001Z",
    "size": 1703,
    "path": "../public/_nuxt/ContentDoc.cbc50263.js"
  },
  "/_nuxt/ContentList.e8a9fb87.js": {
    "type": "application/javascript",
    "etag": "\"47e-JT5NXLZeNwzMLg/0Da6wSUedLiE\"",
    "mtime": "2023-03-10T02:07:52.001Z",
    "size": 1150,
    "path": "../public/_nuxt/ContentList.e8a9fb87.js"
  },
  "/_nuxt/ContentNavigation.cefda237.js": {
    "type": "application/javascript",
    "etag": "\"db41-UlAuZtt2dzNwRKYUqVrL1GbZ3Ao\"",
    "mtime": "2023-03-10T02:07:52.001Z",
    "size": 56129,
    "path": "../public/_nuxt/ContentNavigation.cefda237.js"
  },
  "/_nuxt/ContentNavigation.df5077be.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"3d9a-AmY0fwV/eOrw1cJc8UMD8KI0jLs\"",
    "mtime": "2023-03-10T02:07:52.001Z",
    "size": 15770,
    "path": "../public/_nuxt/ContentNavigation.df5077be.css"
  },
  "/_nuxt/ContentPreviewMode.dea45f14.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"db3-crhtOR9JW4w1+cdVk836+PjEiqA\"",
    "mtime": "2023-03-10T02:07:52.001Z",
    "size": 3507,
    "path": "../public/_nuxt/ContentPreviewMode.dea45f14.css"
  },
  "/_nuxt/ContentPreviewMode.ea418cb0.js": {
    "type": "application/javascript",
    "etag": "\"1100-mHxb5Bdeet9lSiZhOI/Xaulu6+8\"",
    "mtime": "2023-03-10T02:07:52.000Z",
    "size": 4352,
    "path": "../public/_nuxt/ContentPreviewMode.ea418cb0.js"
  },
  "/_nuxt/ContentQuery.9f33890e.js": {
    "type": "application/javascript",
    "etag": "\"9c3-Z0RsED+Dh3IiR9zD80H7aCBGp00\"",
    "mtime": "2023-03-10T02:07:52.000Z",
    "size": 2499,
    "path": "../public/_nuxt/ContentQuery.9f33890e.js"
  },
  "/_nuxt/ContentRenderer.b7732722.js": {
    "type": "application/javascript",
    "etag": "\"524-vnGgzOVV5b/bQGLueL8qyW0WuT0\"",
    "mtime": "2023-03-10T02:07:52.000Z",
    "size": 1316,
    "path": "../public/_nuxt/ContentRenderer.b7732722.js"
  },
  "/_nuxt/ContentRendererMarkdown.e52b62de.js": {
    "type": "application/javascript",
    "etag": "\"56b0-Ax2uyLpC82Z4mOSUMoOJ1mLgcyM\"",
    "mtime": "2023-03-10T02:07:52.000Z",
    "size": 22192,
    "path": "../public/_nuxt/ContentRendererMarkdown.e52b62de.js"
  },
  "/_nuxt/ContentSlot.c5067a4f.js": {
    "type": "application/javascript",
    "etag": "\"49d-gdkw0ns4Pu5KMeGkSqrTo6mWUN0\"",
    "mtime": "2023-03-10T02:07:52.000Z",
    "size": 1181,
    "path": "../public/_nuxt/ContentSlot.c5067a4f.js"
  },
  "/_nuxt/CopyButton.f7858c79.js": {
    "type": "application/javascript",
    "etag": "\"3a8-rwrOT12oFK8KuvOa1THiun4EA1s\"",
    "mtime": "2023-03-10T02:07:52.000Z",
    "size": 936,
    "path": "../public/_nuxt/CopyButton.f7858c79.js"
  },
  "/_nuxt/DocsAside.08a0955d.js": {
    "type": "application/javascript",
    "etag": "\"378-6WYp8oazrbU5Z1tZcy0lOL36dQg\"",
    "mtime": "2023-03-10T02:07:51.999Z",
    "size": 888,
    "path": "../public/_nuxt/DocsAside.08a0955d.js"
  },
  "/_nuxt/DocsAside.d7386185.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"184-OaIRdlbrcpL3aLRHpjv+7bKCT54\"",
    "mtime": "2023-03-10T02:07:51.999Z",
    "size": 388,
    "path": "../public/_nuxt/DocsAside.d7386185.css"
  },
  "/_nuxt/DocsAsideTree.b13c5d2f.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"9e3-XW2soG7jM8nZ+mei259tfOecsbQ\"",
    "mtime": "2023-03-10T02:07:51.999Z",
    "size": 2531,
    "path": "../public/_nuxt/DocsAsideTree.b13c5d2f.css"
  },
  "/_nuxt/DocsAsideTree.b95e55e0.js": {
    "type": "application/javascript",
    "etag": "\"9b2d-m0k8Pb0jr3aheBjZYgFG9AkBteY\"",
    "mtime": "2023-03-10T02:07:51.999Z",
    "size": 39725,
    "path": "../public/_nuxt/DocsAsideTree.b95e55e0.js"
  },
  "/_nuxt/DocsPageBottom.b38ecc43.js": {
    "type": "application/javascript",
    "etag": "\"500-9yHXSafz47rNMJBr9Zh5xvgbRtY\"",
    "mtime": "2023-03-10T02:07:51.999Z",
    "size": 1280,
    "path": "../public/_nuxt/DocsPageBottom.b38ecc43.js"
  },
  "/_nuxt/DocsPageBottom.d9d559e1.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"18d-3SsJYeCkQDp6A8J4aU2CqxW3UrQ\"",
    "mtime": "2023-03-10T02:07:51.999Z",
    "size": 397,
    "path": "../public/_nuxt/DocsPageBottom.d9d559e1.css"
  },
  "/_nuxt/DocsPageLayout.0537ea8c.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"122d-Wv1DA9RCnx5Qe8m8YrroGjkJmPc\"",
    "mtime": "2023-03-10T02:07:51.998Z",
    "size": 4653,
    "path": "../public/_nuxt/DocsPageLayout.0537ea8c.css"
  },
  "/_nuxt/DocsPageLayout.d352cf62.js": {
    "type": "application/javascript",
    "etag": "\"dac-GbmTO9QvMb0PU3VeBRc1kBg2A08\"",
    "mtime": "2023-03-10T02:07:51.998Z",
    "size": 3500,
    "path": "../public/_nuxt/DocsPageLayout.d352cf62.js"
  },
  "/_nuxt/DocsPrevNext.2b9ea48f.js": {
    "type": "application/javascript",
    "etag": "\"59a-jAitHkPUKcXtwZjCG7h+hjUWUS0\"",
    "mtime": "2023-03-10T02:07:51.998Z",
    "size": 1434,
    "path": "../public/_nuxt/DocsPrevNext.2b9ea48f.js"
  },
  "/_nuxt/DocsPrevNext.6bb4ff17.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"7d4-j3afQcMiLKS3uiY7P7Ky+9hE6Us\"",
    "mtime": "2023-03-10T02:07:51.998Z",
    "size": 2004,
    "path": "../public/_nuxt/DocsPrevNext.6bb4ff17.css"
  },
  "/_nuxt/DocsToc.55846f28.js": {
    "type": "application/javascript",
    "etag": "\"3b5-3hdFhb/W7HDTR6lOW7eHQUhMPQg\"",
    "mtime": "2023-03-10T02:07:51.998Z",
    "size": 949,
    "path": "../public/_nuxt/DocsToc.55846f28.js"
  },
  "/_nuxt/DocsToc.6b8d2996.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"152-IGAxzjejnjGbLV2E97EuYir+0vo\"",
    "mtime": "2023-03-10T02:07:51.998Z",
    "size": 338,
    "path": "../public/_nuxt/DocsToc.6b8d2996.css"
  },
  "/_nuxt/DocsTocLinks.2846f127.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2c8-QUA8tmItkDLJ7JYqnd1yDZUBLPY\"",
    "mtime": "2023-03-10T02:07:51.997Z",
    "size": 712,
    "path": "../public/_nuxt/DocsTocLinks.2846f127.css"
  },
  "/_nuxt/DocsTocLinks.644c91ee.js": {
    "type": "application/javascript",
    "etag": "\"70f-QGv+aWNxvwcvyWEpJupFZ7NtUUI\"",
    "mtime": "2023-03-10T02:07:51.997Z",
    "size": 1807,
    "path": "../public/_nuxt/DocsTocLinks.644c91ee.js"
  },
  "/_nuxt/DocumentDrivenEmpty.7ceddd7c.js": {
    "type": "application/javascript",
    "etag": "\"133-b5ycQeQ/xdxZbMciGNut98Q1Qt0\"",
    "mtime": "2023-03-10T02:07:51.997Z",
    "size": 307,
    "path": "../public/_nuxt/DocumentDrivenEmpty.7ceddd7c.js"
  },
  "/_nuxt/DocumentDrivenNotFound.434430ce.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"8a6-I/ZRKgtsMmvaBcyRTuryQiiGjKU\"",
    "mtime": "2023-03-10T02:07:51.997Z",
    "size": 2214,
    "path": "../public/_nuxt/DocumentDrivenNotFound.434430ce.css"
  },
  "/_nuxt/DocumentDrivenNotFound.66d77c6e.js": {
    "type": "application/javascript",
    "etag": "\"416-7EhUkn9m7scoG64qWov4xQKWMsM\"",
    "mtime": "2023-03-10T02:07:51.997Z",
    "size": 1046,
    "path": "../public/_nuxt/DocumentDrivenNotFound.66d77c6e.js"
  },
  "/_nuxt/EditOnLink.77af6984.js": {
    "type": "application/javascript",
    "etag": "\"d2-AoPtGv4/nqWyCFlMa3P6ao/PQQg\"",
    "mtime": "2023-03-10T02:07:51.997Z",
    "size": 210,
    "path": "../public/_nuxt/EditOnLink.77af6984.js"
  },
  "/_nuxt/EditOnLink.vue.1d2292f2.js": {
    "type": "application/javascript",
    "etag": "\"924-4OuRDrg7BL7UdXKsphFEM2KokIo\"",
    "mtime": "2023-03-10T02:07:51.996Z",
    "size": 2340,
    "path": "../public/_nuxt/EditOnLink.vue.1d2292f2.js"
  },
  "/_nuxt/Ellipsis.50580cd1.js": {
    "type": "application/javascript",
    "etag": "\"5bd-IfXQQJ8JiyLgYw5VMJEEV/wueG8\"",
    "mtime": "2023-03-10T02:07:51.996Z",
    "size": 1469,
    "path": "../public/_nuxt/Ellipsis.50580cd1.js"
  },
  "/_nuxt/Ellipsis.f7ff00dc.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"177-vjj6C4cnl9BsP1/phCJx1/W55cY\"",
    "mtime": "2023-03-10T02:07:51.996Z",
    "size": 375,
    "path": "../public/_nuxt/Ellipsis.f7ff00dc.css"
  },
  "/_nuxt/ExampleCard.26f9bb19.js": {
    "type": "application/javascript",
    "etag": "\"157-zD8j/5hXf9R1QTSZ7tSqMzhqucM\"",
    "mtime": "2023-03-10T02:07:51.996Z",
    "size": 343,
    "path": "../public/_nuxt/ExampleCard.26f9bb19.js"
  },
  "/_nuxt/ExampleHero.02aa09cf.js": {
    "type": "application/javascript",
    "etag": "\"155-a6Vu1WlxwMp2wO34xdxX27p0Nt4\"",
    "mtime": "2023-03-10T02:07:51.996Z",
    "size": 341,
    "path": "../public/_nuxt/ExampleHero.02aa09cf.js"
  },
  "/_nuxt/ExampleIconCard.07caa17e.js": {
    "type": "application/javascript",
    "etag": "\"227-OY1HanS0W7oIbpF7YYOKAuY4haM\"",
    "mtime": "2023-03-10T02:07:51.995Z",
    "size": 551,
    "path": "../public/_nuxt/ExampleIconCard.07caa17e.js"
  },
  "/_nuxt/ExampleMultiselect.edfb3bb6.js": {
    "type": "application/javascript",
    "etag": "\"169-M/8IBefgGknTCswtcxubBDcQ70k\"",
    "mtime": "2023-03-10T02:07:51.995Z",
    "size": 361,
    "path": "../public/_nuxt/ExampleMultiselect.edfb3bb6.js"
  },
  "/_nuxt/ExampleTheTitle.f00d8fad.js": {
    "type": "application/javascript",
    "etag": "\"1f4-DxRIvehYqhvITdhDs9y4sVKEiUg\"",
    "mtime": "2023-03-10T02:07:51.995Z",
    "size": 500,
    "path": "../public/_nuxt/ExampleTheTitle.f00d8fad.js"
  },
  "/_nuxt/GithubCommits.35c65eac.js": {
    "type": "application/javascript",
    "etag": "\"331-qG2h5PWhM9ojFnHLhakiqldiUBs\"",
    "mtime": "2023-03-10T02:07:51.995Z",
    "size": 817,
    "path": "../public/_nuxt/GithubCommits.35c65eac.js"
  },
  "/_nuxt/GithubContributors.9ddddad6.js": {
    "type": "application/javascript",
    "etag": "\"345-i3GNq0NSYarDqUNPJSbVtviOP+A\"",
    "mtime": "2023-03-10T02:07:51.995Z",
    "size": 837,
    "path": "../public/_nuxt/GithubContributors.9ddddad6.js"
  },
  "/_nuxt/GithubFileContributors.1ad6f7bf.js": {
    "type": "application/javascript",
    "etag": "\"38f-gS2FZLQj0LZ9AfCWp9N4sksvtfg\"",
    "mtime": "2023-03-10T02:07:51.995Z",
    "size": 911,
    "path": "../public/_nuxt/GithubFileContributors.1ad6f7bf.js"
  },
  "/_nuxt/GithubLastRelease.a4aeb30e.js": {
    "type": "application/javascript",
    "etag": "\"335-NVMYnYCPpHHkdZnJA/ItWkQk8V0\"",
    "mtime": "2023-03-10T02:07:51.994Z",
    "size": 821,
    "path": "../public/_nuxt/GithubLastRelease.a4aeb30e.js"
  },
  "/_nuxt/GithubLink.6cd695ea.js": {
    "type": "application/javascript",
    "etag": "\"7c4-bHA4TCya+uVQlp9eTxvZI/tayQs\"",
    "mtime": "2023-03-10T02:07:51.994Z",
    "size": 1988,
    "path": "../public/_nuxt/GithubLink.6cd695ea.js"
  },
  "/_nuxt/GithubReadme.5eafd6e1.js": {
    "type": "application/javascript",
    "etag": "\"327-0NE4P8m42Z+yWjWJOvtIWzGZyus\"",
    "mtime": "2023-03-10T02:07:51.994Z",
    "size": 807,
    "path": "../public/_nuxt/GithubReadme.5eafd6e1.js"
  },
  "/_nuxt/GithubRelease.d892113d.js": {
    "type": "application/javascript",
    "etag": "\"34d-nehvfkK/4PBwQKzaP28L6lUdH/o\"",
    "mtime": "2023-03-10T02:07:51.994Z",
    "size": 845,
    "path": "../public/_nuxt/GithubRelease.d892113d.js"
  },
  "/_nuxt/GithubReleases.05c52708.js": {
    "type": "application/javascript",
    "etag": "\"331-qbyxcdyB40Q9eYK1MOQk1hgVQWI\"",
    "mtime": "2023-03-10T02:07:51.994Z",
    "size": 817,
    "path": "../public/_nuxt/GithubReleases.05c52708.js"
  },
  "/_nuxt/GithubRepository.345038c7.js": {
    "type": "application/javascript",
    "etag": "\"340-+pK4wn6uZ5M3rSyIPR9yB2nq41A\"",
    "mtime": "2023-03-10T02:07:51.994Z",
    "size": 832,
    "path": "../public/_nuxt/GithubRepository.345038c7.js"
  },
  "/_nuxt/HeroAnnouncement.15bcf84c.js": {
    "type": "application/javascript",
    "etag": "\"2ce-mpokvg7h+kl9REiTrmWdJyYP/ck\"",
    "mtime": "2023-03-10T02:07:51.993Z",
    "size": 718,
    "path": "../public/_nuxt/HeroAnnouncement.15bcf84c.js"
  },
  "/_nuxt/HeroAnnouncement.c8294d82.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"332-7t4hF07XvDJv1oSQC5k6ISaACe0\"",
    "mtime": "2023-03-10T02:07:51.993Z",
    "size": 818,
    "path": "../public/_nuxt/HeroAnnouncement.c8294d82.css"
  },
  "/_nuxt/IconCodeSandBox.c8242608.js": {
    "type": "application/javascript",
    "etag": "\"202-ygfa6jJUx4iGBNq7kClA7xSkRFo\"",
    "mtime": "2023-03-10T02:07:51.993Z",
    "size": 514,
    "path": "../public/_nuxt/IconCodeSandBox.c8242608.js"
  },
  "/_nuxt/IconDocus.288d04af.js": {
    "type": "application/javascript",
    "etag": "\"373-uOgmE2+2wFzXK41/FSo8wxE95aE\"",
    "mtime": "2023-03-10T02:07:51.993Z",
    "size": 883,
    "path": "../public/_nuxt/IconDocus.288d04af.js"
  },
  "/_nuxt/IconMarkdown.abd5e80b.js": {
    "type": "application/javascript",
    "etag": "\"293-V2NB4cZ1kUPRLmRoo5lVltgEoDM\"",
    "mtime": "2023-03-10T02:07:51.993Z",
    "size": 659,
    "path": "../public/_nuxt/IconMarkdown.abd5e80b.js"
  },
  "/_nuxt/IconNuxt.fcd0b256.js": {
    "type": "application/javascript",
    "etag": "\"4eb-RKG7XQIVChjo889Z1/9GCuElfZg\"",
    "mtime": "2023-03-10T02:07:51.992Z",
    "size": 1259,
    "path": "../public/_nuxt/IconNuxt.fcd0b256.js"
  },
  "/_nuxt/IconNuxtContent.e8429861.js": {
    "type": "application/javascript",
    "etag": "\"4eb-hVZBsjRf7vC27iw1b3na3O5q9zU\"",
    "mtime": "2023-03-10T02:07:51.992Z",
    "size": 1259,
    "path": "../public/_nuxt/IconNuxtContent.e8429861.js"
  },
  "/_nuxt/IconNuxtLabs.d57bf3c9.js": {
    "type": "application/javascript",
    "etag": "\"4eb-2PW9eZ2BvyePF48IjgsKFPUObAE\"",
    "mtime": "2023-03-10T02:07:51.992Z",
    "size": 1259,
    "path": "../public/_nuxt/IconNuxtLabs.d57bf3c9.js"
  },
  "/_nuxt/IconNuxtStudio.34390cd8.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"66-AA2ErH34Xmax3511FiYX4lQ+vjs\"",
    "mtime": "2023-03-10T02:07:51.992Z",
    "size": 102,
    "path": "../public/_nuxt/IconNuxtStudio.34390cd8.css"
  },
  "/_nuxt/IconNuxtStudio.af5044e4.js": {
    "type": "application/javascript",
    "etag": "\"571-WUXCs0v+NbMzAtgn7ANltDXe7Do\"",
    "mtime": "2023-03-10T02:07:51.992Z",
    "size": 1393,
    "path": "../public/_nuxt/IconNuxtStudio.af5044e4.js"
  },
  "/_nuxt/IconStackBlitz.8b1569eb.js": {
    "type": "application/javascript",
    "etag": "\"1b9-9uYh/+aked78CAPoqgQdH99YTYI\"",
    "mtime": "2023-03-10T02:07:51.992Z",
    "size": 441,
    "path": "../public/_nuxt/IconStackBlitz.8b1569eb.js"
  },
  "/_nuxt/IconVueTelescope.e930811b.js": {
    "type": "application/javascript",
    "etag": "\"323-C+AQFXqQdFbL3aW3wUxQrbbSL2w\"",
    "mtime": "2023-03-10T02:07:51.991Z",
    "size": 803,
    "path": "../public/_nuxt/IconVueTelescope.e930811b.js"
  },
  "/_nuxt/List.63030545.js": {
    "type": "application/javascript",
    "etag": "\"18a-Wt+QBkU3So8n5vqzW1iJt9ia4ng\"",
    "mtime": "2023-03-10T02:07:51.991Z",
    "size": 394,
    "path": "../public/_nuxt/List.63030545.js"
  },
  "/_nuxt/List.a65f0e81.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2a0-bFZ6WsZ5dY0RxcMye3Xpw+KYZJQ\"",
    "mtime": "2023-03-10T02:07:51.991Z",
    "size": 672,
    "path": "../public/_nuxt/List.a65f0e81.css"
  },
  "/_nuxt/List.vue.98cb48bf.js": {
    "type": "application/javascript",
    "etag": "\"358-Pw+e4mBQrM2Dz13p6KPh6+e2cd0\"",
    "mtime": "2023-03-10T02:07:51.991Z",
    "size": 856,
    "path": "../public/_nuxt/List.vue.98cb48bf.js"
  },
  "/_nuxt/Markdown.7f24e431.js": {
    "type": "application/javascript",
    "etag": "\"21a-yErYlNQE2YeH22gbBZ73i4lIMss\"",
    "mtime": "2023-03-10T02:07:51.991Z",
    "size": 538,
    "path": "../public/_nuxt/Markdown.7f24e431.js"
  },
  "/_nuxt/MyButton.67bdaa98.js": {
    "type": "application/javascript",
    "etag": "\"270-+TUWM97iN2m4ijqCz2Q5hQwqyA4\"",
    "mtime": "2023-03-10T02:07:51.991Z",
    "size": 624,
    "path": "../public/_nuxt/MyButton.67bdaa98.js"
  },
  "/_nuxt/MyButton.c36465b2.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"ef-COTUszQfa+3U6EszfdP59ArQUzw\"",
    "mtime": "2023-03-10T02:07:51.990Z",
    "size": 239,
    "path": "../public/_nuxt/MyButton.c36465b2.css"
  },
  "/_nuxt/NuxtImg.66944f8e.js": {
    "type": "application/javascript",
    "etag": "\"b0-tKjZsx5YXWETg3+8xECxdIBIj64\"",
    "mtime": "2023-03-10T02:07:51.990Z",
    "size": 176,
    "path": "../public/_nuxt/NuxtImg.66944f8e.js"
  },
  "/_nuxt/NuxtImg.vue.a13022c3.js": {
    "type": "application/javascript",
    "etag": "\"29e-XqloQNR8/xLec4Gm9I5zdGp4Djw\"",
    "mtime": "2023-03-10T02:07:51.990Z",
    "size": 670,
    "path": "../public/_nuxt/NuxtImg.vue.a13022c3.js"
  },
  "/_nuxt/PropInspector.83153412.js": {
    "type": "application/javascript",
    "etag": "\"1ce-HCLmi9xRJom40lM7yj7FVuYaPTw\"",
    "mtime": "2023-03-10T02:07:51.990Z",
    "size": 462,
    "path": "../public/_nuxt/PropInspector.83153412.js"
  },
  "/_nuxt/PropInspector.8b357721.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"3c-Z+T55YPv0PDDsd9vkWfllLFxh3c\"",
    "mtime": "2023-03-10T02:07:51.990Z",
    "size": 60,
    "path": "../public/_nuxt/PropInspector.8b357721.css"
  },
  "/_nuxt/Props.876d937c.js": {
    "type": "application/javascript",
    "etag": "\"d5f-Q1Im6mP2joGlDc7X/edtd0pcTDg\"",
    "mtime": "2023-03-10T02:07:51.989Z",
    "size": 3423,
    "path": "../public/_nuxt/Props.876d937c.js"
  },
  "/_nuxt/ProseA.89c7f0ff.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"47f-Rl9v4ghZwVBqBcJpxbawhlUcwWY\"",
    "mtime": "2023-03-10T02:07:51.989Z",
    "size": 1151,
    "path": "../public/_nuxt/ProseA.89c7f0ff.css"
  },
  "/_nuxt/ProseA.a4d07cc8.js": {
    "type": "application/javascript",
    "etag": "\"261-uRry9Ig7yIJJl9HwQmS2Dg6WqIQ\"",
    "mtime": "2023-03-10T02:07:51.989Z",
    "size": 609,
    "path": "../public/_nuxt/ProseA.a4d07cc8.js"
  },
  "/_nuxt/ProseBlockquote.e233c07e.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1c7-Y8ekCyMAwxIWbqVn2dV3W0hyVTQ\"",
    "mtime": "2023-03-10T02:07:51.989Z",
    "size": 455,
    "path": "../public/_nuxt/ProseBlockquote.e233c07e.css"
  },
  "/_nuxt/ProseBlockquote.ecc3d96f.js": {
    "type": "application/javascript",
    "etag": "\"16d-IUPhrp34DlJDnVO9fqtMHY2q0qg\"",
    "mtime": "2023-03-10T02:07:51.989Z",
    "size": 365,
    "path": "../public/_nuxt/ProseBlockquote.ecc3d96f.js"
  },
  "/_nuxt/ProseCode.0e5c7be6.js": {
    "type": "application/javascript",
    "etag": "\"436-oAL2NcrOdcev1vIiDgec62btcgE\"",
    "mtime": "2023-03-10T02:07:51.989Z",
    "size": 1078,
    "path": "../public/_nuxt/ProseCode.0e5c7be6.js"
  },
  "/_nuxt/ProseCode.69d80bcc.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"b20-DBU3dUXOH51lRpn827sQ8YJI8gg\"",
    "mtime": "2023-03-10T02:07:51.988Z",
    "size": 2848,
    "path": "../public/_nuxt/ProseCode.69d80bcc.css"
  },
  "/_nuxt/ProseCodeCopyButton.29965c5a.js": {
    "type": "application/javascript",
    "etag": "\"54a-64wouhVNYWF5l39wZvEC29h29T0\"",
    "mtime": "2023-03-10T02:07:51.988Z",
    "size": 1354,
    "path": "../public/_nuxt/ProseCodeCopyButton.29965c5a.js"
  },
  "/_nuxt/ProseCodeInline.aab68857.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2b0-4EmnSBapHvnHVVPjM7hgHxmc280\"",
    "mtime": "2023-03-10T02:07:51.988Z",
    "size": 688,
    "path": "../public/_nuxt/ProseCodeInline.aab68857.css"
  },
  "/_nuxt/ProseCodeInline.dca1a534.js": {
    "type": "application/javascript",
    "etag": "\"13d-0pV/MQBa01X1VCwdKLCaFSVukfU\"",
    "mtime": "2023-03-10T02:07:51.988Z",
    "size": 317,
    "path": "../public/_nuxt/ProseCodeInline.dca1a534.js"
  },
  "/_nuxt/ProseEm.26a085fc.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"4f-/WrDUH4MFh0hLZFKn/kRGt7Vtc0\"",
    "mtime": "2023-03-10T02:07:51.988Z",
    "size": 79,
    "path": "../public/_nuxt/ProseEm.26a085fc.css"
  },
  "/_nuxt/ProseEm.35693543.js": {
    "type": "application/javascript",
    "etag": "\"15d-XDsfGWPqRUm0FwCuLPHcMuJvXSU\"",
    "mtime": "2023-03-10T02:07:51.987Z",
    "size": 349,
    "path": "../public/_nuxt/ProseEm.35693543.js"
  },
  "/_nuxt/ProseH1.c24b90eb.js": {
    "type": "application/javascript",
    "etag": "\"3eb-O/4A6jWvimGV8jRNM4bCCC8uzYE\"",
    "mtime": "2023-03-10T02:07:51.987Z",
    "size": 1003,
    "path": "../public/_nuxt/ProseH1.c24b90eb.js"
  },
  "/_nuxt/ProseH1.e8ed25c4.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1d6-A2yHSI2CSMZS6K6z0Nzi+sTWitQ\"",
    "mtime": "2023-03-10T02:07:51.987Z",
    "size": 470,
    "path": "../public/_nuxt/ProseH1.e8ed25c4.css"
  },
  "/_nuxt/ProseH2.39cb29c9.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1d6-90ewT8iK18zYmQsl82b0oeBo8Zg\"",
    "mtime": "2023-03-10T02:07:51.987Z",
    "size": 470,
    "path": "../public/_nuxt/ProseH2.39cb29c9.css"
  },
  "/_nuxt/ProseH2.957cbe8e.js": {
    "type": "application/javascript",
    "etag": "\"3eb-8WlemkwCSlCUhFGElmh/A+NRxSA\"",
    "mtime": "2023-03-10T02:07:51.987Z",
    "size": 1003,
    "path": "../public/_nuxt/ProseH2.957cbe8e.js"
  },
  "/_nuxt/ProseH3.185f3970.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1d6-Q//VOkESXmidKiv1Bnm1ZEqd9P4\"",
    "mtime": "2023-03-10T02:07:51.987Z",
    "size": 470,
    "path": "../public/_nuxt/ProseH3.185f3970.css"
  },
  "/_nuxt/ProseH3.cb2444de.js": {
    "type": "application/javascript",
    "etag": "\"3eb-FvAWagXkwOH4zkqyIiNZfw+v5mg\"",
    "mtime": "2023-03-10T02:07:51.986Z",
    "size": 1003,
    "path": "../public/_nuxt/ProseH3.cb2444de.js"
  },
  "/_nuxt/ProseH4.63359073.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1d6-gRz87iFA1ePf8szbshq4pbiwRms\"",
    "mtime": "2023-03-10T02:07:51.986Z",
    "size": 470,
    "path": "../public/_nuxt/ProseH4.63359073.css"
  },
  "/_nuxt/ProseH4.77a5278f.js": {
    "type": "application/javascript",
    "etag": "\"3cf-ibFR+OFpNRsv+k0byHtMmCaM0ls\"",
    "mtime": "2023-03-10T02:07:51.986Z",
    "size": 975,
    "path": "../public/_nuxt/ProseH4.77a5278f.js"
  },
  "/_nuxt/ProseH5.85b0a165.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1a8-DiIkZE1iVqRTfthaWIxaMmehov0\"",
    "mtime": "2023-03-10T02:07:51.986Z",
    "size": 424,
    "path": "../public/_nuxt/ProseH5.85b0a165.css"
  },
  "/_nuxt/ProseH5.8dc93198.js": {
    "type": "application/javascript",
    "etag": "\"3eb-Xy4kg49oA86q0t5Ilt3VP0OtZrs\"",
    "mtime": "2023-03-10T02:07:51.986Z",
    "size": 1003,
    "path": "../public/_nuxt/ProseH5.8dc93198.js"
  },
  "/_nuxt/ProseH6.bdc78e01.js": {
    "type": "application/javascript",
    "etag": "\"3eb-y4W491oGpch8yQWSUuDbKtoRp40\"",
    "mtime": "2023-03-10T02:07:51.985Z",
    "size": 1003,
    "path": "../public/_nuxt/ProseH6.bdc78e01.js"
  },
  "/_nuxt/ProseH6.c7358255.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1a8-ydddTZ7z5vRgmywuLIpkBYMO34g\"",
    "mtime": "2023-03-10T02:07:51.985Z",
    "size": 424,
    "path": "../public/_nuxt/ProseH6.c7358255.css"
  },
  "/_nuxt/ProseHr.75e3ac21.js": {
    "type": "application/javascript",
    "etag": "\"12c-PO5pbGWhYQLl/CrS4+n6aOHNydQ\"",
    "mtime": "2023-03-10T02:07:51.985Z",
    "size": 300,
    "path": "../public/_nuxt/ProseHr.75e3ac21.js"
  },
  "/_nuxt/ProseHr.c7c78bbe.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"80-INEPhPPD9t2+R6o6gFRIQ5CI4Ik\"",
    "mtime": "2023-03-10T02:07:51.985Z",
    "size": 128,
    "path": "../public/_nuxt/ProseHr.c7c78bbe.css"
  },
  "/_nuxt/ProseImg.018721e2.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"35-/P+VAtl+aDWpPVCPQAbTsFW52HM\"",
    "mtime": "2023-03-10T02:07:51.985Z",
    "size": 53,
    "path": "../public/_nuxt/ProseImg.018721e2.css"
  },
  "/_nuxt/ProseImg.16c4c81d.js": {
    "type": "application/javascript",
    "etag": "\"303-C/N3b+Klv8yJSkvhHwNir0kV+IU\"",
    "mtime": "2023-03-10T02:07:51.985Z",
    "size": 771,
    "path": "../public/_nuxt/ProseImg.16c4c81d.js"
  },
  "/_nuxt/ProseLi.171f9b22.js": {
    "type": "application/javascript",
    "etag": "\"15d-J30T7FeX9KAg9I+0QskexzY2O1c\"",
    "mtime": "2023-03-10T02:07:51.984Z",
    "size": 349,
    "path": "../public/_nuxt/ProseLi.171f9b22.js"
  },
  "/_nuxt/ProseLi.ac05b421.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"91-eiqKu/ywnE10Nr/KZRFEXPPAFjo\"",
    "mtime": "2023-03-10T02:07:51.984Z",
    "size": 145,
    "path": "../public/_nuxt/ProseLi.ac05b421.css"
  },
  "/_nuxt/ProseOl.8e9d7d6a.js": {
    "type": "application/javascript",
    "etag": "\"15d-tsra9eoc3X2BPkXzEm4QB1ltB1k\"",
    "mtime": "2023-03-10T02:07:51.984Z",
    "size": 349,
    "path": "../public/_nuxt/ProseOl.8e9d7d6a.js"
  },
  "/_nuxt/ProseOl.d78cb0de.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"12a-CmVJKQ9TMOSQudBOJ45XlYa9Rt4\"",
    "mtime": "2023-03-10T02:07:51.984Z",
    "size": 298,
    "path": "../public/_nuxt/ProseOl.d78cb0de.css"
  },
  "/_nuxt/ProseP.945916cd.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"f0-wFnUHeg48g/JyGSDwWH/o0sfb10\"",
    "mtime": "2023-03-10T02:07:51.984Z",
    "size": 240,
    "path": "../public/_nuxt/ProseP.945916cd.css"
  },
  "/_nuxt/ProseP.9fd9b629.js": {
    "type": "application/javascript",
    "etag": "\"13a-9an0h2HDO5xLvYYbFh6Vo/4ZtW4\"",
    "mtime": "2023-03-10T02:07:51.984Z",
    "size": 314,
    "path": "../public/_nuxt/ProseP.9fd9b629.js"
  },
  "/_nuxt/ProseStrong.263d77e1.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"6c-MD65Ps8jSjh1cMdTmfC4f+7oAlU\"",
    "mtime": "2023-03-10T02:07:51.983Z",
    "size": 108,
    "path": "../public/_nuxt/ProseStrong.263d77e1.css"
  },
  "/_nuxt/ProseStrong.3de7628e.js": {
    "type": "application/javascript",
    "etag": "\"165-zLrDw+sYc8gx+DyROZvBzO9TBvQ\"",
    "mtime": "2023-03-10T02:07:51.983Z",
    "size": 357,
    "path": "../public/_nuxt/ProseStrong.3de7628e.js"
  },
  "/_nuxt/ProseTable.a85f8bca.js": {
    "type": "application/javascript",
    "etag": "\"16c-DZkbi1ClNyrFMQT5TL557Mc//Lc\"",
    "mtime": "2023-03-10T02:07:51.983Z",
    "size": 364,
    "path": "../public/_nuxt/ProseTable.a85f8bca.js"
  },
  "/_nuxt/ProseTable.c65fbffe.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"164-lnhXgUriM9WndiBRXv31OET1Xko\"",
    "mtime": "2023-03-10T02:07:51.983Z",
    "size": 356,
    "path": "../public/_nuxt/ProseTable.c65fbffe.css"
  },
  "/_nuxt/ProseTbody.37a7db42.js": {
    "type": "application/javascript",
    "etag": "\"111-dtUdSy6bOAKWsx5xyh5Dq31Q8pY\"",
    "mtime": "2023-03-10T02:07:51.983Z",
    "size": 273,
    "path": "../public/_nuxt/ProseTbody.37a7db42.js"
  },
  "/_nuxt/ProseTd.4df19d93.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"d3-IOjFtJqVlVnVd2OOkWMTAzUA3Uo\"",
    "mtime": "2023-03-10T02:07:51.982Z",
    "size": 211,
    "path": "../public/_nuxt/ProseTd.4df19d93.css"
  },
  "/_nuxt/ProseTd.921f02a8.js": {
    "type": "application/javascript",
    "etag": "\"13b-lEVGW/bjkq/ia9l42AsZTpVHCRw\"",
    "mtime": "2023-03-10T02:07:51.982Z",
    "size": 315,
    "path": "../public/_nuxt/ProseTd.921f02a8.js"
  },
  "/_nuxt/ProseTh.348cb47e.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"101-5WSadBMwRyFuqMc06UKjoM6XXRo\"",
    "mtime": "2023-03-10T02:07:51.982Z",
    "size": 257,
    "path": "../public/_nuxt/ProseTh.348cb47e.css"
  },
  "/_nuxt/ProseTh.d24c1b52.js": {
    "type": "application/javascript",
    "etag": "\"13b-Z0snLRDiuIsAWp/r9cOQJShULxg\"",
    "mtime": "2023-03-10T02:07:51.982Z",
    "size": 315,
    "path": "../public/_nuxt/ProseTh.d24c1b52.js"
  },
  "/_nuxt/ProseThead.40eb8658.js": {
    "type": "application/javascript",
    "etag": "\"13e-Zf0/brzh/wyuLutP2eczZZfotFg\"",
    "mtime": "2023-03-10T02:07:51.982Z",
    "size": 318,
    "path": "../public/_nuxt/ProseThead.40eb8658.js"
  },
  "/_nuxt/ProseThead.65d34604.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"172-6F//E8x9de+1trexOL1Jdlv2OUU\"",
    "mtime": "2023-03-10T02:07:51.982Z",
    "size": 370,
    "path": "../public/_nuxt/ProseThead.65d34604.css"
  },
  "/_nuxt/ProseTr.65bec588.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"a4-8+Ah6srlM/sVnhpyI2/xpaSKd9I\"",
    "mtime": "2023-03-10T02:07:51.981Z",
    "size": 164,
    "path": "../public/_nuxt/ProseTr.65bec588.css"
  },
  "/_nuxt/ProseTr.d0d94723.js": {
    "type": "application/javascript",
    "etag": "\"13b-2nbVWPTHefbmji93/EQKYU/H8gI\"",
    "mtime": "2023-03-10T02:07:51.981Z",
    "size": 315,
    "path": "../public/_nuxt/ProseTr.d0d94723.js"
  },
  "/_nuxt/ProseUl.5ba8de5b.js": {
    "type": "application/javascript",
    "etag": "\"15d-GegWH2wQiKOIZTclAHVVbfi5i5o\"",
    "mtime": "2023-03-10T02:07:51.981Z",
    "size": 349,
    "path": "../public/_nuxt/ProseUl.5ba8de5b.js"
  },
  "/_nuxt/ProseUl.85b434de.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"12a-MyujhbahPk5m73hyEOZRR2wL054\"",
    "mtime": "2023-03-10T02:07:51.981Z",
    "size": 298,
    "path": "../public/_nuxt/ProseUl.85b434de.css"
  },
  "/_nuxt/ReadMore.4d40ce3f.js": {
    "type": "application/javascript",
    "etag": "\"3b6-ZX5aEOfssazZcJWPvmwGO9FKf+8\"",
    "mtime": "2023-03-10T02:07:51.981Z",
    "size": 950,
    "path": "../public/_nuxt/ReadMore.4d40ce3f.js"
  },
  "/_nuxt/Sandbox.68fd6c5d.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1b3-73rS9AzHRNCBXrqRG4hUfznJFuI\"",
    "mtime": "2023-03-10T02:07:51.980Z",
    "size": 435,
    "path": "../public/_nuxt/Sandbox.68fd6c5d.css"
  },
  "/_nuxt/Sandbox.b8bdb0c7.js": {
    "type": "application/javascript",
    "etag": "\"742-RkdjcLF28CuB/S4HWp1tv08zhDY\"",
    "mtime": "2023-03-10T02:07:51.980Z",
    "size": 1858,
    "path": "../public/_nuxt/Sandbox.b8bdb0c7.js"
  },
  "/_nuxt/SourceLink.8b39af38.js": {
    "type": "application/javascript",
    "etag": "\"13c-b9R+Ydzz4KqtFG/t59n2PENoW48\"",
    "mtime": "2023-03-10T02:07:51.980Z",
    "size": 316,
    "path": "../public/_nuxt/SourceLink.8b39af38.js"
  },
  "/_nuxt/TabsHeader.f80c17f8.js": {
    "type": "application/javascript",
    "etag": "\"4d8-FA3FV95gx02YPe+cD5NJr90W2Zc\"",
    "mtime": "2023-03-10T02:07:51.980Z",
    "size": 1240,
    "path": "../public/_nuxt/TabsHeader.f80c17f8.js"
  },
  "/_nuxt/TabsHeader.fed4d9b4.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"698-i4tfB9l9MbY97TuWiTRq74BYmK4\"",
    "mtime": "2023-03-10T02:07:51.980Z",
    "size": 1688,
    "path": "../public/_nuxt/TabsHeader.fed4d9b4.css"
  },
  "/_nuxt/Terminal.55a17588.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"9dc-FeS13RQeBJ07bsRPL4GoBQ0R+bM\"",
    "mtime": "2023-03-10T02:07:51.980Z",
    "size": 2524,
    "path": "../public/_nuxt/Terminal.55a17588.css"
  },
  "/_nuxt/Terminal.e111a4e9.js": {
    "type": "application/javascript",
    "etag": "\"4b2-/AUBpHSUm3WXCdfDAsETdQOqh5g\"",
    "mtime": "2023-03-10T02:07:51.979Z",
    "size": 1202,
    "path": "../public/_nuxt/Terminal.e111a4e9.js"
  },
  "/_nuxt/TokensPlayground.961c6dbe.js": {
    "type": "application/javascript",
    "etag": "\"152-ASMW4kS+zssbBWeIdfjTsmujty4\"",
    "mtime": "2023-03-10T02:07:51.979Z",
    "size": 338,
    "path": "../public/_nuxt/TokensPlayground.961c6dbe.js"
  },
  "/_nuxt/VideoPlayer.065c6aeb.js": {
    "type": "application/javascript",
    "etag": "\"7ea-DCnuFqTt8y5uVyB3VRV973JEUT8\"",
    "mtime": "2023-03-10T02:07:51.979Z",
    "size": 2026,
    "path": "../public/_nuxt/VideoPlayer.065c6aeb.js"
  },
  "/_nuxt/VideoPlayer.e2296f21.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"5ae-ghBYKA63UNWF+O4/hx/uW+DAl74\"",
    "mtime": "2023-03-10T02:07:51.979Z",
    "size": 1454,
    "path": "../public/_nuxt/VideoPlayer.e2296f21.css"
  },
  "/_nuxt/VoltaBoard.1d961799.js": {
    "type": "application/javascript",
    "etag": "\"169-xko4fuhe2k4yeBUuogRSelkMEfs\"",
    "mtime": "2023-03-10T02:07:51.979Z",
    "size": 361,
    "path": "../public/_nuxt/VoltaBoard.1d961799.js"
  },
  "/_nuxt/VoltaBoard.a5d6b336.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"4ce-T4Y7eyTZZLXoes5nCIc24C8K79M\"",
    "mtime": "2023-03-10T02:07:51.979Z",
    "size": 1230,
    "path": "../public/_nuxt/VoltaBoard.a5d6b336.css"
  },
  "/_nuxt/app.config.f41ab05d.js": {
    "type": "application/javascript",
    "etag": "\"3632-O5T+6mNpUme7AQBjiVxtYTJZWsI\"",
    "mtime": "2023-03-10T02:07:51.978Z",
    "size": 13874,
    "path": "../public/_nuxt/app.config.f41ab05d.js"
  },
  "/_nuxt/asyncData.7c06b2d5.js": {
    "type": "application/javascript",
    "etag": "\"9af-VKBCtzIyO9OZ3ysBvLotIJAfcTg\"",
    "mtime": "2023-03-10T02:07:51.978Z",
    "size": 2479,
    "path": "../public/_nuxt/asyncData.7c06b2d5.js"
  },
  "/_nuxt/client-db.514bef37.js": {
    "type": "application/javascript",
    "etag": "\"49f7-ARPbRnu7bjNWHsibVhIjCN987d4\"",
    "mtime": "2023-03-10T02:07:51.978Z",
    "size": 18935,
    "path": "../public/_nuxt/client-db.514bef37.js"
  },
  "/_nuxt/cookie.b9cff64d.js": {
    "type": "application/javascript",
    "etag": "\"c01-aMOp7JmcFd5bMnqR4lrDW+BqeSQ\"",
    "mtime": "2023-03-10T02:07:51.978Z",
    "size": 3073,
    "path": "../public/_nuxt/cookie.b9cff64d.js"
  },
  "/_nuxt/debug.ac300508.js": {
    "type": "application/javascript",
    "etag": "\"266-8cHCxino1pGZx6/CFuzGkiGdqYg\"",
    "mtime": "2023-03-10T02:07:51.977Z",
    "size": 614,
    "path": "../public/_nuxt/debug.ac300508.js"
  },
  "/_nuxt/default.aab8fc36.js": {
    "type": "application/javascript",
    "etag": "\"454-xyybz03s6y5T3ox7Vavihb/HwpE\"",
    "mtime": "2023-03-10T02:07:51.977Z",
    "size": 1108,
    "path": "../public/_nuxt/default.aab8fc36.js"
  },
  "/_nuxt/docs-page.436b5c87.js": {
    "type": "application/javascript",
    "etag": "\"18f-gD7T6Hdi/i/DRRb0SQfhERc2Rng\"",
    "mtime": "2023-03-10T02:07:51.977Z",
    "size": 399,
    "path": "../public/_nuxt/docs-page.436b5c87.js"
  },
  "/_nuxt/docs-page.5b0d6071.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2c-jT0ixNOwbCCYALkQl91jFq+8yNo\"",
    "mtime": "2023-03-10T02:07:51.977Z",
    "size": 44,
    "path": "../public/_nuxt/docs-page.5b0d6071.css"
  },
  "/_nuxt/document-driven.2bce7a6e.js": {
    "type": "application/javascript",
    "etag": "\"48d-5gnhg0oJuSHpOzkN6ZdBwO5ieuU\"",
    "mtime": "2023-03-10T02:07:51.977Z",
    "size": 1165,
    "path": "../public/_nuxt/document-driven.2bce7a6e.js"
  },
  "/_nuxt/empty.9bcab498.js": {
    "type": "application/javascript",
    "etag": "\"eb-3/RCw2npMcVyLOgDyGOMKLmvdzw\"",
    "mtime": "2023-03-10T02:07:51.976Z",
    "size": 235,
    "path": "../public/_nuxt/empty.9bcab498.js"
  },
  "/_nuxt/entry.2e7e04dc.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"350d-o3MeH2HhFoQQbOPOfsKVVxPGrWw\"",
    "mtime": "2023-03-10T02:07:51.976Z",
    "size": 13581,
    "path": "../public/_nuxt/entry.2e7e04dc.css"
  },
  "/_nuxt/entry.f3791b9c.js": {
    "type": "application/javascript",
    "etag": "\"21d7a-+r8wiQPG1CWwpDic6mcIsHWYp+E\"",
    "mtime": "2023-03-10T02:07:51.976Z",
    "size": 138618,
    "path": "../public/_nuxt/entry.f3791b9c.js"
  },
  "/_nuxt/error-404.1576ed15.js": {
    "type": "application/javascript",
    "etag": "\"9c4-ISRAFHSonm4YaEEtMhPhWMYWlV8\"",
    "mtime": "2023-03-10T02:07:51.976Z",
    "size": 2500,
    "path": "../public/_nuxt/error-404.1576ed15.js"
  },
  "/_nuxt/error-404.97011ca1.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1084-jwUCXv5wv0+M+ZZFjvzPnriy9wA\"",
    "mtime": "2023-03-10T02:07:51.975Z",
    "size": 4228,
    "path": "../public/_nuxt/error-404.97011ca1.css"
  },
  "/_nuxt/error-500.421dc5a9.js": {
    "type": "application/javascript",
    "etag": "\"868-NUlSyTKI2SDF2K7suFu+E64Nt/o\"",
    "mtime": "2023-03-10T02:07:51.975Z",
    "size": 2152,
    "path": "../public/_nuxt/error-500.421dc5a9.js"
  },
  "/_nuxt/error-500.82e14f63.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"902-rwmHo71QxN5BefTTkQkEWf7HG0o\"",
    "mtime": "2023-03-10T02:07:51.975Z",
    "size": 2306,
    "path": "../public/_nuxt/error-500.82e14f63.css"
  },
  "/_nuxt/error-component.9c8606a2.js": {
    "type": "application/javascript",
    "etag": "\"6e0-rYRVbOOI7f9VcTPBctSso5s/4EY\"",
    "mtime": "2023-03-10T02:07:51.975Z",
    "size": 1760,
    "path": "../public/_nuxt/error-component.9c8606a2.js"
  },
  "/_nuxt/index.889aa611.js": {
    "type": "application/javascript",
    "etag": "\"1046-B2nlsgGLiqUzEreJi273DmODUJQ\"",
    "mtime": "2023-03-10T02:07:51.975Z",
    "size": 4166,
    "path": "../public/_nuxt/index.889aa611.js"
  },
  "/_nuxt/index.ade63bb5.js": {
    "type": "application/javascript",
    "etag": "\"19fd2-r6FbcMdSgDHC4nnXmQqX3AFThws\"",
    "mtime": "2023-03-10T02:07:51.974Z",
    "size": 106450,
    "path": "../public/_nuxt/index.ade63bb5.js"
  },
  "/_nuxt/index.d2b0cb5e.js": {
    "type": "application/javascript",
    "etag": "\"4ed-OYmPlIJ52HGVNrLQ7PYLJI1aE5A\"",
    "mtime": "2023-03-10T02:07:51.974Z",
    "size": 1261,
    "path": "../public/_nuxt/index.d2b0cb5e.js"
  },
  "/_nuxt/index.e2533f77.js": {
    "type": "application/javascript",
    "etag": "\"9021-pLd3PM+NpdEZAHoeR55ir1TyBto\"",
    "mtime": "2023-03-10T02:07:51.974Z",
    "size": 36897,
    "path": "../public/_nuxt/index.e2533f77.js"
  },
  "/_nuxt/layout.0a22fa4a.js": {
    "type": "application/javascript",
    "etag": "\"3b0-sXH6PXh5x6X52wTnrEdTNVRn9u0\"",
    "mtime": "2023-03-10T02:07:51.974Z",
    "size": 944,
    "path": "../public/_nuxt/layout.0a22fa4a.js"
  },
  "/_nuxt/page.70291227.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"54-uOA00wk0cEmpJxEpeb5dxVl/zhQ\"",
    "mtime": "2023-03-10T02:07:51.973Z",
    "size": 84,
    "path": "../public/_nuxt/page.70291227.css"
  },
  "/_nuxt/page.f33b5a13.js": {
    "type": "application/javascript",
    "etag": "\"2be-zUBHhCwLQIAgPTq2DNXnfBkL+A0\"",
    "mtime": "2023-03-10T02:07:51.973Z",
    "size": 702,
    "path": "../public/_nuxt/page.f33b5a13.js"
  },
  "/_nuxt/query.c3f7607a.js": {
    "type": "application/javascript",
    "etag": "\"61c-lT264b+mooXNiSslFnl/C1hcfBM\"",
    "mtime": "2023-03-10T02:07:51.973Z",
    "size": 1564,
    "path": "../public/_nuxt/query.c3f7607a.js"
  },
  "/_nuxt/runtime-core.esm-bundler.6894272a.js": {
    "type": "application/javascript",
    "etag": "\"f818-B5f0trMNaDQQeeHHot0lKubO7Gk\"",
    "mtime": "2023-03-10T02:07:51.973Z",
    "size": 63512,
    "path": "../public/_nuxt/runtime-core.esm-bundler.6894272a.js"
  },
  "/_nuxt/style.6a49f87f.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"3ba8-E/DSoqk5nPY7atQNoz2jq3iSLzE\"",
    "mtime": "2023-03-10T02:07:51.972Z",
    "size": 15272,
    "path": "../public/_nuxt/style.6a49f87f.css"
  },
  "/_nuxt/useDocus.41ab1ca5.js": {
    "type": "application/javascript",
    "etag": "\"e01-M++tvpOGIFXfCqsFoYQPFTHYhQw\"",
    "mtime": "2023-03-10T02:07:51.972Z",
    "size": 3585,
    "path": "../public/_nuxt/useDocus.41ab1ca5.js"
  },
  "/_nuxt/useGithub.1972ce55.js": {
    "type": "application/javascript",
    "etag": "\"3f2-TDapXKXW6HUOAbRAWSDXKgU+k0w\"",
    "mtime": "2023-03-10T02:07:51.972Z",
    "size": 1010,
    "path": "../public/_nuxt/useGithub.1972ce55.js"
  },
  "/_nuxt/useStudio.ef34e52b.js": {
    "type": "application/javascript",
    "etag": "\"e8f-xOQJOjroT/7Ug9tUbsmu1j5XPQQ\"",
    "mtime": "2023-03-10T02:07:51.971Z",
    "size": 3727,
    "path": "../public/_nuxt/useStudio.ef34e52b.js"
  },
  "/_nuxt/welcome.4086e1c1.js": {
    "type": "application/javascript",
    "etag": "\"181b9-uA5ONh11bVL39FMF49C4PffaC8k\"",
    "mtime": "2023-03-10T02:07:51.971Z",
    "size": 98745,
    "path": "../public/_nuxt/welcome.4086e1c1.js"
  },
  "/api/_github/contributors": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"1c7-NY/w/IAwKeUDzX8NeUzij7ArZbg\"",
    "mtime": "2023-03-10T02:07:56.808Z",
    "size": 455,
    "path": "../public/api/_github/contributors"
  },
  "/api/_github/releases": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"2-l9Fw4VUO7kr8CvBlt4zaMCqXZ0w\"",
    "mtime": "2023-03-10T02:07:56.547Z",
    "size": 2,
    "path": "../public/api/_github/releases"
  },
  "/api/_content/cache.1678414054441.json": {
    "type": "application/json",
    "etag": "\"53973-Tg7N8E+4fLLO30TIJjH3a4V2mW0\"",
    "mtime": "2023-03-10T02:07:55.920Z",
    "size": 342387,
    "path": "../public/api/_content/cache.1678414054441.json"
  },
  "/api/_content/navigation/u7BbTyuhiE.1678414054441.json": {
    "type": "application/json",
    "etag": "\"121a-7FSAkxwC/f2uyKwPbauntnZX9Yk\"",
    "mtime": "2023-03-10T02:07:57.238Z",
    "size": 4634,
    "path": "../public/api/_content/navigation/u7BbTyuhiE.1678414054441.json"
  },
  "/api/_content/query/brX4CwCJoQ.1678414054441.json": {
    "type": "application/json",
    "etag": "\"1495-cQ8nNnK2JQ/uwQ/U7CGk4msLj6w\"",
    "mtime": "2023-03-10T02:07:57.239Z",
    "size": 5269,
    "path": "../public/api/_content/query/brX4CwCJoQ.1678414054441.json"
  },
  "/api/_content/query/xWeY3NfYtX.1678414054441.json": {
    "type": "application/json",
    "etag": "\"b-aFZ/7ev2lVwlEsAuIobymYVHec8\"",
    "mtime": "2023-03-10T02:07:57.248Z",
    "size": 11,
    "path": "../public/api/_content/query/xWeY3NfYtX.1678414054441.json"
  }
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = {};

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _f4b49z = eventHandler((event) => {
  if (event.node.req.method && !METHODS.has(event.node.req.method)) {
    return;
  }
  let id = decodeURIComponent(
    withLeadingSlash(
      withoutTrailingSlash(parseURL(event.node.req.url).pathname)
    )
  );
  let asset;
  const encodingHeader = String(
    event.node.req.headers["accept-encoding"] || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  if (encodings.length > 1) {
    event.node.res.setHeader("Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      event.node.res.removeHeader("cache-control");
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = event.node.req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    event.node.res.statusCode = 304;
    event.node.res.end();
    return;
  }
  const ifModifiedSinceH = event.node.req.headers["if-modified-since"];
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= new Date(asset.mtime)) {
    event.node.res.statusCode = 304;
    event.node.res.end();
    return;
  }
  if (asset.type && !event.node.res.getHeader("Content-Type")) {
    event.node.res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag && !event.node.res.getHeader("ETag")) {
    event.node.res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime && !event.node.res.getHeader("Last-Modified")) {
    event.node.res.setHeader("Last-Modified", asset.mtime);
  }
  if (asset.encoding && !event.node.res.getHeader("Content-Encoding")) {
    event.node.res.setHeader("Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !event.node.res.getHeader("Content-Length")) {
    event.node.res.setHeader("Content-Length", asset.size);
  }
  return readAsset(id);
});

const get = (obj, path) => path.split(".").reduce((acc, part) => acc && acc[part], obj);
const _pick = (obj, condition) => Object.keys(obj).filter(condition).reduce((newObj, key) => Object.assign(newObj, { [key]: obj[key] }), {});
const apply = (fn) => (data) => Array.isArray(data) ? data.map((item) => fn(item)) : fn(data);
const detectProperties = (keys) => {
  const prefixes = [];
  const properties = [];
  for (const key of keys) {
    if (["$", "_"].includes(key)) {
      prefixes.push(key);
    } else {
      properties.push(key);
    }
  }
  return { prefixes, properties };
};
const withoutKeys = (keys = []) => (obj) => {
  if (keys.length === 0 || !obj) {
    return obj;
  }
  const { prefixes, properties } = detectProperties(keys);
  return _pick(obj, (key) => !properties.includes(key) && !prefixes.includes(key[0]));
};
const withKeys = (keys = []) => (obj) => {
  if (keys.length === 0 || !obj) {
    return obj;
  }
  const { prefixes, properties } = detectProperties(keys);
  return _pick(obj, (key) => properties.includes(key) || prefixes.includes(key[0]));
};
const sortList = (data, params) => {
  const comperable = new Intl.Collator(params.$locale, {
    numeric: params.$numeric,
    caseFirst: params.$caseFirst,
    sensitivity: params.$sensitivity
  });
  const keys = Object.keys(params).filter((key) => !key.startsWith("$"));
  for (const key of keys) {
    data = data.sort((a, b) => {
      const values = [get(a, key), get(b, key)].map((value) => {
        if (value === null) {
          return void 0;
        }
        if (value instanceof Date) {
          return value.toISOString();
        }
        return value;
      });
      if (params[key] === -1) {
        values.reverse();
      }
      return comperable.compare(values[0], values[1]);
    });
  }
  return data;
};
const assertArray = (value, message = "Expected an array") => {
  if (!Array.isArray(value)) {
    throw new TypeError(message);
  }
};
const ensureArray = (value) => Array.isArray(value) ? value : value ? [value] : [];

const arrayParams = ["sort", "where", "only", "without"];
const createQuery = (fetcher, intitialParams) => {
  const queryParams = {
    ...intitialParams
  };
  for (const key of arrayParams) {
    if (queryParams[key]) {
      queryParams[key] = ensureArray(queryParams[key]);
    }
  }
  const $set = (key, fn = (v) => v) => {
    return (...values) => {
      queryParams[key] = fn(...values);
      return query;
    };
  };
  const query = {
    params: () => queryParams,
    only: $set("only", ensureArray),
    without: $set("without", ensureArray),
    where: $set("where", (q) => [...ensureArray(queryParams.where), q]),
    sort: $set("sort", (sort) => [...ensureArray(queryParams.sort), ...ensureArray(sort)]),
    limit: $set("limit", (v) => parseInt(String(v), 10)),
    skip: $set("skip", (v) => parseInt(String(v), 10)),
    // find
    find: () => fetcher(query),
    findOne: () => {
      queryParams.first = true;
      return fetcher(query);
    },
    findSurround: (surroundQuery, options) => {
      queryParams.surround = { query: surroundQuery, ...options };
      return fetcher(query);
    },
    // locale
    locale: (_locale) => query.where({ _locale })
  };
  return query;
};

function createMatch(opts = {}) {
  const operators = createOperators(match, opts.operators);
  function match(item, conditions) {
    if (typeof conditions !== "object" || conditions instanceof RegExp) {
      return operators.$eq(item, conditions);
    }
    return Object.keys(conditions || {}).every((key) => {
      const condition = conditions[key];
      if (key.startsWith("$") && operators[key]) {
        const fn = operators[key];
        return typeof fn === "function" ? fn(item, condition) : false;
      }
      return match(get(item, key), condition);
    });
  }
  return match;
}
function createOperators(match, operators = {}) {
  return {
    $match: (item, condition) => match(item, condition),
    /**
     * Match if item equals condition
     **/
    $eq: (item, condition) => condition instanceof RegExp ? condition.test(item) : item === condition,
    /**
     * Match if item not equals condition
     **/
    $ne: (item, condition) => condition instanceof RegExp ? !condition.test(item) : item !== condition,
    /**
     * Match is condition is false
     **/
    $not: (item, condition) => !match(item, condition),
    /**
     * Match only if all of nested conditions are true
     **/
    $and: (item, condition) => {
      assertArray(condition, "$and requires an array as condition");
      return condition.every((cond) => match(item, cond));
    },
    /**
     * Match if any of nested conditions is true
     **/
    $or: (item, condition) => {
      assertArray(condition, "$or requires an array as condition");
      return condition.some((cond) => match(item, cond));
    },
    /**
     * Match if item is in condition array
     **/
    $in: (item, condition) => ensureArray(condition).some(
      (cond) => Array.isArray(item) ? match(item, { $contains: cond }) : match(item, cond)
    ),
    /**
     * Match if item contains every condition or math every rule in condition array
     **/
    $contains: (item, condition) => {
      item = Array.isArray(item) ? item : String(item);
      return ensureArray(condition).every((i) => item.includes(i));
    },
    /**
     * Ignore case contains
     **/
    $icontains: (item, condition) => {
      if (typeof condition !== "string") {
        throw new TypeError("$icontains requires a string, use $contains instead");
      }
      item = String(item).toLocaleLowerCase();
      return ensureArray(condition).every((i) => item.includes(i.toLocaleLowerCase()));
    },
    /**
     * Match if item contains at least one rule from condition array
     */
    $containsAny: (item, condition) => {
      assertArray(condition, "$containsAny requires an array as condition");
      item = Array.isArray(item) ? item : String(item);
      return condition.some((i) => item.includes(i));
    },
    /**
     * Check key existence
     */
    $exists: (item, condition) => condition ? typeof item !== "undefined" : typeof item === "undefined",
    /**
     * Match if type of item equals condition
     */
    $type: (item, condition) => typeof item === String(condition),
    /**
     * Provides regular expression capabilities for pattern matching strings.
     */
    $regex: (item, condition) => {
      if (!(condition instanceof RegExp)) {
        const matched = String(condition).match(/\/(.*)\/([dgimsuy]*)$/);
        condition = matched ? new RegExp(matched[1], matched[2] || "") : new RegExp(condition);
      }
      return condition.test(String(item || ""));
    },
    /**
     * Check if item is less than condition
     */
    $lt: (item, condition) => {
      return item < condition;
    },
    /**
     * Check if item is less than or equal to condition
     */
    $lte: (item, condition) => {
      return item <= condition;
    },
    /**
     * Check if item is greater than condition
     */
    $gt: (item, condition) => {
      return item > condition;
    },
    /**
     * Check if item is greater than or equal to condition
     */
    $gte: (item, condition) => {
      return item >= condition;
    },
    ...operators || {}
  };
}

function createPipelineFetcher(getContentsList) {
  const match = createMatch();
  const surround = (data, { query, before, after }) => {
    const matchQuery = typeof query === "string" ? { _path: query } : query;
    const index = data.findIndex((item) => match(item, matchQuery));
    before = before || 1;
    after = after || 1;
    const slice = new Array(before + after).fill(null, 0);
    return index === -1 ? slice : slice.map((_, i) => data[index - before + i + Number(i >= before)] || null);
  };
  const pipelines = [
    // Conditions
    (data, params) => data.filter((item) => ensureArray(params.where).every((matchQuery) => match(item, matchQuery))),
    // Sort data
    (data, params) => ensureArray(params.sort).forEach((options) => sortList(data, options)),
    // Surround logic
    (data, params) => params.surround ? surround(data, params.surround) : data,
    // Skip first items
    (data, params) => params.skip ? data.slice(params.skip) : data,
    // Pick first items
    (data, params) => params.limit ? data.slice(0, params.limit) : data,
    // Remove unwanted fields
    (data, params) => apply(withoutKeys(params.without))(data),
    // Select only wanted fields
    (data, params) => apply(withKeys(params.only))(data)
  ];
  return async (query) => {
    const data = await getContentsList();
    const params = query.params();
    const filteredData = pipelines.reduce(($data, pipe) => pipe($data, params) || $data, data);
    if (params.first) {
      return filteredData[0];
    }
    return filteredData;
  };
}

const defineTransformer = (transformer) => {
  return transformer;
};
const createSingleton = (fn) => {
  let instance;
  return (...args) => {
    if (!instance) {
      instance = fn(...args);
    }
    return instance;
  };
};

function createTokenizer(parser, initialize, from) {
  let point = Object.assign(
    from ? Object.assign({}, from) : {
      line: 1,
      column: 1,
      offset: 0
    },
    {
      _index: 0,
      _bufferIndex: -1
    }
  );
  const columnStart = {};
  const resolveAllConstructs = [];
  let chunks = [];
  let stack = [];
  const effects = {
    consume,
    enter,
    exit,
    attempt: constructFactory(onsuccessfulconstruct),
    check: constructFactory(onsuccessfulcheck),
    interrupt: constructFactory(onsuccessfulcheck, {
      interrupt: true
    })
  };
  const context = {
    previous: null,
    code: null,
    containerState: {},
    events: [],
    parser,
    sliceStream,
    sliceSerialize,
    now,
    defineSkip,
    write
  };
  let state = initialize.tokenize.call(context, effects);
  if (initialize.resolveAll) {
    resolveAllConstructs.push(initialize);
  }
  return context;
  function write(slice) {
    chunks = push(chunks, slice);
    main();
    if (chunks[chunks.length - 1] !== null) {
      return [];
    }
    addResult(initialize, 0);
    context.events = resolveAll(resolveAllConstructs, context.events, context);
    return context.events;
  }
  function sliceSerialize(token, expandTabs) {
    return serializeChunks(sliceStream(token), expandTabs);
  }
  function sliceStream(token) {
    return sliceChunks(chunks, token);
  }
  function now() {
    return Object.assign({}, point);
  }
  function defineSkip(value) {
    columnStart[value.line] = value.column;
    accountForPotentialSkip();
  }
  function main() {
    let chunkIndex;
    while (point._index < chunks.length) {
      const chunk = chunks[point._index];
      if (typeof chunk === "string") {
        chunkIndex = point._index;
        if (point._bufferIndex < 0) {
          point._bufferIndex = 0;
        }
        while (point._index === chunkIndex && point._bufferIndex < chunk.length) {
          go(chunk.charCodeAt(point._bufferIndex));
        }
      } else {
        go(chunk);
      }
    }
  }
  function go(code) {
    state = state(code);
  }
  function consume(code) {
    if (markdownLineEnding(code)) {
      point.line++;
      point.column = 1;
      point.offset += code === -3 ? 2 : 1;
      accountForPotentialSkip();
    } else if (code !== -1) {
      point.column++;
      point.offset++;
    }
    if (point._bufferIndex < 0) {
      point._index++;
    } else {
      point._bufferIndex++;
      if (point._bufferIndex === chunks[point._index].length) {
        point._bufferIndex = -1;
        point._index++;
      }
    }
    context.previous = code;
  }
  function enter(type, fields) {
    const token = fields || {};
    token.type = type;
    token.start = now();
    context.events.push(["enter", token, context]);
    stack.push(token);
    return token;
  }
  function exit(type) {
    const token = stack.pop();
    token.end = now();
    context.events.push(["exit", token, context]);
    return token;
  }
  function onsuccessfulconstruct(construct, info) {
    addResult(construct, info.from);
  }
  function onsuccessfulcheck(_, info) {
    info.restore();
  }
  function constructFactory(onreturn, fields) {
    return hook;
    function hook(constructs, returnState, bogusState) {
      let listOfConstructs;
      let constructIndex;
      let currentConstruct;
      let info;
      return Array.isArray(constructs) ? (
        /* c8 ignore next 1 */
        handleListOfConstructs(constructs)
      ) : "tokenize" in constructs ? handleListOfConstructs([constructs]) : handleMapOfConstructs(constructs);
      function handleMapOfConstructs(map) {
        return start;
        function start(code) {
          const def = code !== null && map[code];
          const all = code !== null && map.null;
          const list = [
            // To do: add more extension tests.
            /* c8 ignore next 2 */
            ...Array.isArray(def) ? def : def ? [def] : [],
            ...Array.isArray(all) ? all : all ? [all] : []
          ];
          return handleListOfConstructs(list)(code);
        }
      }
      function handleListOfConstructs(list) {
        listOfConstructs = list;
        constructIndex = 0;
        if (list.length === 0) {
          return bogusState;
        }
        return handleConstruct(list[constructIndex]);
      }
      function handleConstruct(construct) {
        return start;
        function start(code) {
          info = store();
          currentConstruct = construct;
          if (!construct.partial) {
            context.currentConstruct = construct;
          }
          if (construct.name && context.parser.constructs.disable.null.includes(construct.name)) {
            return nok();
          }
          return construct.tokenize.call(
            // If we do have fields, create an object w/ `context` as its
            // prototype.
            // This allows a “live binding”, which is needed for `interrupt`.
            fields ? Object.assign(Object.create(context), fields) : context,
            effects,
            ok,
            nok
          )(code);
        }
      }
      function ok(code) {
        onreturn(currentConstruct, info);
        return returnState;
      }
      function nok(code) {
        info.restore();
        if (++constructIndex < listOfConstructs.length) {
          return handleConstruct(listOfConstructs[constructIndex]);
        }
        return bogusState;
      }
    }
  }
  function addResult(construct, from2) {
    if (construct.resolveAll && !resolveAllConstructs.includes(construct)) {
      resolveAllConstructs.push(construct);
    }
    if (construct.resolve) {
      splice(
        context.events,
        from2,
        context.events.length - from2,
        construct.resolve(context.events.slice(from2), context)
      );
    }
    if (construct.resolveTo) {
      context.events = construct.resolveTo(context.events, context);
    }
  }
  function store() {
    const startPoint = now();
    const startPrevious = context.previous;
    const startCurrentConstruct = context.currentConstruct;
    const startEventsIndex = context.events.length;
    const startStack = Array.from(stack);
    return {
      restore,
      from: startEventsIndex
    };
    function restore() {
      point = startPoint;
      context.previous = startPrevious;
      context.currentConstruct = startCurrentConstruct;
      context.events.length = startEventsIndex;
      stack = startStack;
      accountForPotentialSkip();
    }
  }
  function accountForPotentialSkip() {
    if (point.line in columnStart && point.column < 2) {
      point.column = columnStart[point.line];
      point.offset += columnStart[point.line] - 1;
    }
  }
}
function sliceChunks(chunks, token) {
  const startIndex = token.start._index;
  const startBufferIndex = token.start._bufferIndex;
  const endIndex = token.end._index;
  const endBufferIndex = token.end._bufferIndex;
  let view;
  if (startIndex === endIndex) {
    view = [chunks[startIndex].slice(startBufferIndex, endBufferIndex)];
  } else {
    view = chunks.slice(startIndex, endIndex);
    if (startBufferIndex > -1) {
      view[0] = view[0].slice(startBufferIndex);
    }
    if (endBufferIndex > 0) {
      view.push(chunks[endIndex].slice(0, endBufferIndex));
    }
  }
  return view;
}
function serializeChunks(chunks, expandTabs) {
  let index = -1;
  const result = [];
  let atTab;
  while (++index < chunks.length) {
    const chunk = chunks[index];
    let value;
    if (typeof chunk === "string") {
      value = chunk;
    } else
      switch (chunk) {
        case -5: {
          value = "\r";
          break;
        }
        case -4: {
          value = "\n";
          break;
        }
        case -3: {
          value = "\r\n";
          break;
        }
        case -2: {
          value = expandTabs ? " " : "	";
          break;
        }
        case -1: {
          if (!expandTabs && atTab)
            continue;
          value = " ";
          break;
        }
        default: {
          value = String.fromCharCode(chunk);
        }
      }
    atTab = chunk === -2;
    result.push(value);
  }
  return result.join("");
}

function initializeDocument(effects) {
  const self = this;
  const delimiter = (this.parser.delimiter || ",").charCodeAt(0);
  return enterRow;
  function enterRow(code) {
    return effects.attempt(
      { tokenize: attemptLastLine },
      (code2) => {
        effects.consume(code2);
        return enterRow;
      },
      (code2) => {
        effects.enter("row");
        return enterColumn(code2);
      }
    )(code);
  }
  function enterColumn(code) {
    effects.enter("column");
    return content(code);
  }
  function content(code) {
    if (code === null) {
      effects.exit("column");
      effects.exit("row");
      effects.consume(code);
      return content;
    }
    if (code === 34) {
      return quotedData(code);
    }
    if (code === delimiter) {
      if (self.previous === delimiter || markdownLineEnding(self.previous) || self.previous === null) {
        effects.enter("data");
        effects.exit("data");
      }
      effects.exit("column");
      effects.enter("columnSeparator");
      effects.consume(code);
      effects.exit("columnSeparator");
      effects.enter("column");
      return content;
    }
    if (markdownLineEnding(code)) {
      effects.exit("column");
      effects.enter("newline");
      effects.consume(code);
      effects.exit("newline");
      effects.exit("row");
      return enterRow;
    }
    return data(code);
  }
  function data(code) {
    effects.enter("data");
    return dataChunk(code);
  }
  function dataChunk(code) {
    if (code === null || markdownLineEnding(code) || code === delimiter) {
      effects.exit("data");
      return content(code);
    }
    if (code === 92) {
      return escapeCharacter(code);
    }
    effects.consume(code);
    return dataChunk;
  }
  function escapeCharacter(code) {
    effects.consume(code);
    return function(code2) {
      effects.consume(code2);
      return content;
    };
  }
  function quotedData(code) {
    effects.enter("quotedData");
    effects.enter("quotedDataChunk");
    effects.consume(code);
    return quotedDataChunk;
  }
  function quotedDataChunk(code) {
    if (code === 92) {
      return escapeCharacter(code);
    }
    if (code === 34) {
      return effects.attempt(
        { tokenize: attemptDoubleQuote },
        (code2) => {
          effects.exit("quotedDataChunk");
          effects.enter("quotedDataChunk");
          return quotedDataChunk(code2);
        },
        (code2) => {
          effects.consume(code2);
          effects.exit("quotedDataChunk");
          effects.exit("quotedData");
          return content;
        }
      )(code);
    }
    effects.consume(code);
    return quotedDataChunk;
  }
}
function attemptDoubleQuote(effects, ok, nok) {
  return startSequence;
  function startSequence(code) {
    if (code !== 34) {
      return nok(code);
    }
    effects.enter("quoteFence");
    effects.consume(code);
    return sequence;
  }
  function sequence(code) {
    if (code !== 34) {
      return nok(code);
    }
    effects.consume(code);
    effects.exit("quoteFence");
    return (code2) => ok(code2);
  }
}
function attemptLastLine(effects, ok, nok) {
  return enterLine;
  function enterLine(code) {
    if (!markdownSpace(code) && code !== null) {
      return nok(code);
    }
    effects.enter("emptyLine");
    return continueLine(code);
  }
  function continueLine(code) {
    if (markdownSpace(code)) {
      effects.consume(code);
      return continueLine;
    }
    if (code === null) {
      effects.exit("emptyLine");
      return ok(code);
    }
    return nok(code);
  }
}
const parse$1 = (options) => {
  return createTokenizer(
    { ...options },
    { tokenize: initializeDocument },
    void 0
  );
};

const own = {}.hasOwnProperty;
const initialPoint = {
  line: 1,
  column: 1,
  offset: 0
};
const fromCSV = function(value, encoding, options) {
  if (typeof encoding !== "string") {
    options = encoding;
    encoding = void 0;
  }
  return compiler$1()(
    postprocess(
      parse$1(options).write(preprocess()(value, encoding, true))
    )
  );
};
function compiler$1() {
  const config = {
    enter: {
      column: opener(openColumn),
      row: opener(openRow),
      data: onenterdata,
      quotedData: onenterdata
    },
    exit: {
      row: closer(),
      column: closer(),
      data: onexitdata,
      quotedData: onexitQuotedData
    }
  };
  return compile;
  function compile(events) {
    const tree = {
      type: "root",
      children: []
    };
    const stack = [tree];
    const tokenStack = [];
    const context = {
      stack,
      tokenStack,
      config,
      enter,
      exit,
      resume
    };
    let index = -1;
    while (++index < events.length) {
      const handler = config[events[index][0]];
      if (own.call(handler, events[index][1].type)) {
        handler[events[index][1].type].call(
          Object.assign(
            {
              sliceSerialize: events[index][2].sliceSerialize
            },
            context
          ),
          events[index][1]
        );
      }
    }
    if (tokenStack.length > 0) {
      const tail = tokenStack[tokenStack.length - 1];
      const handler = tail[1] || defaultOnError;
      handler.call(context, void 0, tail[0]);
    }
    tree.position = {
      start: point(
        events.length > 0 ? events[0][1].start : initialPoint
      ),
      end: point(
        events.length > 0 ? events[events.length - 2][1].end : initialPoint
      )
    };
    return tree;
  }
  function point(d) {
    return {
      line: d.line,
      column: d.column,
      offset: d.offset
    };
  }
  function opener(create, and) {
    return open;
    function open(token) {
      enter.call(this, create(token), token);
      if (and) {
        and.call(this, token);
      }
    }
  }
  function enter(node, token, errorHandler) {
    const parent = this.stack[this.stack.length - 1];
    parent.children.push(node);
    this.stack.push(node);
    this.tokenStack.push([token, errorHandler]);
    node.position = {
      start: point(token.start)
    };
    return node;
  }
  function closer(and) {
    return close;
    function close(token) {
      if (and) {
        and.call(this, token);
      }
      exit.call(this, token);
    }
  }
  function exit(token, onExitError) {
    const node = this.stack.pop();
    const open = this.tokenStack.pop();
    if (!open) {
      throw new Error(
        "Cannot close `" + token.type + "` (" + stringifyPosition({
          start: token.start,
          end: token.end
        }) + "): it\u2019s not open"
      );
    } else if (open[0].type !== token.type) {
      if (onExitError) {
        onExitError.call(this, token, open[0]);
      } else {
        const handler = open[1] || defaultOnError;
        handler.call(this, token, open[0]);
      }
    }
    node.position.end = point(token.end);
    return node;
  }
  function resume() {
    return toString(this.stack.pop());
  }
  function onenterdata(token) {
    const parent = this.stack[this.stack.length - 1];
    let tail = parent.children[parent.children.length - 1];
    if (!tail || tail.type !== "text") {
      tail = text();
      tail.position = {
        start: point(token.start)
      };
      parent.children.push(tail);
    }
    this.stack.push(tail);
  }
  function onexitdata(token) {
    const tail = this.stack.pop();
    tail.value += this.sliceSerialize(token).trim().replace(/""/g, '"');
    tail.position.end = point(token.end);
  }
  function onexitQuotedData(token) {
    const tail = this.stack.pop();
    const value = this.sliceSerialize(token);
    tail.value += this.sliceSerialize(token).trim().substring(1, value.length - 1).replace(/""/g, '"');
    tail.position.end = point(token.end);
  }
  function text() {
    return {
      type: "text",
      value: ""
    };
  }
  function openColumn() {
    return {
      type: "column",
      children: []
    };
  }
  function openRow() {
    return {
      type: "row",
      children: []
    };
  }
}
function defaultOnError(left, right) {
  if (left) {
    throw new Error(
      "Cannot close `" + left.type + "` (" + stringifyPosition({
        start: left.start,
        end: left.end
      }) + "): a different token (`" + right.type + "`, " + stringifyPosition({
        start: right.start,
        end: right.end
      }) + ") is open"
    );
  } else {
    throw new Error(
      "Cannot close document, a token (`" + right.type + "`, " + stringifyPosition({
        start: right.start,
        end: right.end
      }) + ") is still open"
    );
  }
}

function csvParse(options) {
  const parser = (doc) => {
    return fromCSV(doc, options);
  };
  Object.assign(this, { Parser: parser });
  const toJsonObject = (tree) => {
    const [header, ...rows] = tree.children;
    const columns = header.children.map((col) => col.children[0].value);
    const data = rows.map((row) => {
      return row.children.reduce((acc, col, i) => {
        acc[String(columns[i])] = col.children[0]?.value;
        return acc;
      }, {});
    });
    return data;
  };
  const toJsonArray = (tree) => {
    const data = tree.children.map((row) => {
      return row.children.map((col) => col.children[0]?.value);
    });
    return data;
  };
  const compiler = (doc) => {
    if (options.json) {
      return toJsonObject(doc);
    }
    return toJsonArray(doc);
  };
  Object.assign(this, { Compiler: compiler });
}
const csv = defineTransformer({
  name: "csv",
  extensions: [".csv"],
  parse: async (_id, content, options = {}) => {
    const stream = unified().use(csvParse, {
      delimiter: ",",
      json: true,
      ...options
    });
    const { result } = await stream.process(content);
    return {
      _id,
      _type: "csv",
      body: result
    };
  }
});

function flattenNodeText(node) {
  if (node.type === "text") {
    return node.value || "";
  } else {
    return (node.children || []).reduce((text, child) => {
      return text.concat(flattenNodeText(child));
    }, "");
  }
}
function flattenNode(node, maxDepth = 2, _depth = 0) {
  if (!Array.isArray(node.children) || _depth === maxDepth) {
    return [node];
  }
  return [
    node,
    ...node.children.reduce((acc, child) => acc.concat(flattenNode(child, maxDepth, _depth + 1)), [])
  ];
}

const TOC_TAGS = ["h2", "h3", "h4", "h5", "h6"];
const TOC_TAGS_DEPTH = TOC_TAGS.reduce((tags, tag) => {
  tags[tag] = Number(tag.charAt(tag.length - 1));
  return tags;
}, {});
const getHeaderDepth = (node) => TOC_TAGS_DEPTH[node.tag];
const getTocTags = (depth) => {
  if (depth < 1 || depth > 5) {
    console.log(`\`toc.depth\` is set to ${depth}. It should be a number between 1 and 5. `);
    depth = 1;
  }
  return TOC_TAGS.slice(0, depth);
};
function nestHeaders(headers) {
  if (headers.length <= 1) {
    return headers;
  }
  const toc = [];
  let parent;
  headers.forEach((header) => {
    if (!parent || header.depth <= parent.depth) {
      header.children = [];
      parent = header;
      toc.push(header);
    } else {
      parent.children.push(header);
    }
  });
  toc.forEach((header) => {
    if (header.children?.length) {
      header.children = nestHeaders(header.children);
    } else {
      delete header.children;
    }
  });
  return toc;
}
function generateFlatToc(body, options) {
  const { searchDepth, depth, title = "" } = options;
  const tags = getTocTags(depth);
  const headers = flattenNode(body, searchDepth).filter((node) => tags.includes(node.tag || ""));
  const links = headers.map((node) => ({
    id: node.props?.id,
    depth: getHeaderDepth(node),
    text: flattenNodeText(node)
  }));
  return {
    title,
    searchDepth,
    depth,
    links
  };
}
function generateToc(body, options) {
  const toc = generateFlatToc(body, options);
  toc.links = nestHeaders(toc.links);
  return toc;
}

function emphasis(h, node) {
  return h(node, "em", node.attributes, all(h, node));
}

function parseThematicBlock(lang) {
  if (!lang) {
    return {
      language: void 0,
      highlights: void 0,
      fileName: void 0
    };
  }
  const language = lang.replace(/[{|[](.+)/, "").match(/^[^ \t]+(?=[ \t]|$)/);
  const highlightTokens = lang.match(/{([^}]+)}/);
  const filenameTokens = lang.match(/\[(.+)\]/);
  return {
    language: language ? language[0] : void 0,
    highlights: parseHighlightedLines(highlightTokens && highlightTokens[1]),
    filename: Array.isArray(filenameTokens) ? filenameTokens[1] : void 0
  };
}
function parseHighlightedLines(lines) {
  const lineArray = String(lines || "").split(",").filter(Boolean).flatMap((line) => {
    const [start, end] = line.trim().split("-").map((a) => Number(a.trim()));
    return Array.from({ length: (end || start) - start + 1 }).map((_, i) => start + i);
  });
  return lineArray.length ? lineArray : void 0;
}
const TAG_NAME_REGEXP = /^<\/?([A-Za-z0-9-_]+) ?[^>]*>/;
function getTagName(value) {
  const result = String(value).match(TAG_NAME_REGEXP);
  return result && result[1];
}
function wrap(nodes, loose = false) {
  const result = [];
  let index = -1;
  if (loose) {
    result.push(u("text", "\n"));
  }
  while (++index < nodes.length) {
    if (index) {
      result.push(u("text", "\n"));
    }
    result.push(nodes[index]);
  }
  if (loose && nodes.length > 0) {
    result.push(u("text", "\n"));
  }
  return result;
}

const code = (h, node) => {
  const lang = (node.lang || "") + " " + (node.meta || "");
  const { language, highlights, filename } = parseThematicBlock(lang);
  const code = node.value ? detab(node.value + "\n") : "";
  return h(
    node.position,
    "code",
    {
      language,
      filename,
      highlights,
      meta: node.meta,
      code
    },
    [h(node, "pre", {}, [h(node, "code", { __ignoreMap: "" }, [u("text", code)])])]
  );
};

function html(h, node) {
  const tagName = getTagName(node.value);
  if (tagName && /[A-Z]/.test(tagName)) {
    node.value = node.value.replace(tagName, kebabCase(tagName));
  }
  if (tagName === "code") {
    node.value = node.value.replace(tagName, "code-inline");
  }
  return h.dangerous ? h.augment(node, u("raw", node.value)) : null;
}

function heading(h, node) {
  return h(node, "h" + node.depth, all(h, node));
}

const SEMVER_REGEX = /^(\d+)(\.\d+)*(\.x)?$/;
const describeId = (_id) => {
  const [_source, ...parts] = _id.split(":");
  const [, filename, _extension] = parts[parts.length - 1].match(/(.*)\.([^.]+)$/);
  parts[parts.length - 1] = filename;
  const _path = parts.join("/");
  return {
    _source,
    _path,
    _extension,
    _file: _extension ? `${_path}.${_extension}` : _path
  };
};
const pathMeta = defineTransformer({
  name: "path-meta",
  extensions: [".*"],
  transform(content, options = {}) {
    const { locales = [], defaultLocale = "en" } = options;
    const { _source, _file, _path, _extension } = describeId(content._id);
    const parts = _path.split("/");
    const _locale = locales.includes(parts[0]) ? parts.shift() : defaultLocale;
    const filePath = generatePath(parts.join("/"));
    return {
      _path: filePath,
      _dir: filePath.split("/").slice(-2)[0],
      _draft: isDraft(_path),
      _partial: isPartial(_path),
      _locale,
      ...content,
      // TODO: move title to Markdown parser
      title: content.title || generateTitle(refineUrlPart(parts[parts.length - 1])),
      _source,
      _file,
      _extension
    };
  }
});
const isDraft = (path) => !!path.match(/\.draft(\/|\.|$)/);
const isPartial = (path) => path.split(/[:/]/).some((part) => part.match(/^_.*/));
const generatePath = (path, { forceLeadingSlash = true } = {}) => {
  path = path.split("/").map((part) => slugify(refineUrlPart(part), { lower: true })).join("/");
  return forceLeadingSlash ? withLeadingSlash(withoutTrailingSlash(path)) : path;
};
const generateTitle = (path) => path.split(/[\s-]/g).map(pascalCase).join(" ");
function refineUrlPart(name) {
  name = name.split(/[/:]/).pop();
  if (SEMVER_REGEX.test(name)) {
    return name;
  }
  return name.replace(/(\d+\.)?(.*)/, "$2").replace(/^index(\.draft)?$/, "").replace(/\.draft$/, "");
}

function link(h, node) {
  const props = {
    ...node.attributes || {},
    href: encode(normalizeLink(node.url))
  };
  if (node.title !== null && node.title !== void 0) {
    props.title = node.title;
  }
  return h(node, "a", props, all(h, node));
}
function normalizeLink(link2) {
  if (link2.endsWith(".md") && (isRelative(link2) || !/^https?/.test(link2) && !link2.startsWith("/"))) {
    return generatePath(link2.replace(/\.md$/, ""), { forceLeadingSlash: false });
  } else {
    return link2;
  }
}

function list(h, node) {
  const props = {};
  const name = `${node.ordered ? "ol" : "ul"}`;
  if (typeof node.start === "number" && node.start !== 1) {
    props.start = node.start;
  }
  if ((node.children || []).some((child) => typeof child.checked === "boolean")) {
    props.className = ["contains-task-list"];
  }
  return h(node, name, props, wrap(all(h, node), true));
}

function listItem(h, node, parent) {
  const result = all(h, node);
  const loose = parent ? listLoose(parent) : listItemLoose(node);
  const props = {};
  let wrapped = [];
  let index;
  let child;
  if (typeof node.checked === "boolean") {
    result.unshift(
      h({}, "input", {
        type: "checkbox",
        checked: node.checked,
        disabled: true
      })
    );
    props.className = ["task-list-item"];
  }
  const length = result.length;
  index = -1;
  while (++index < length) {
    child = result[index];
    if (child.tagName === "p" && !loose) {
      wrapped = wrapped.concat(child.children || []);
    } else {
      wrapped.push(child);
    }
  }
  return h(node, "li", props, wrapped);
}
function listLoose(node) {
  let loose = node.spread;
  const children = node.children;
  const length = children.length;
  let index = -1;
  while (!loose && ++index < length) {
    loose = listItemLoose(children[index]);
  }
  return loose;
}
function listItemLoose(node) {
  const spread = node.spread;
  const children = node.children || [];
  return spread === void 0 || spread === null ? children.length > 1 : spread;
}

function table(h, node) {
  const rows = node.children;
  const align = node.align || [];
  const result = rows.map((row, index) => {
    const childres = row.children;
    const name = index === 0 ? "th" : "td";
    let pos = node.align ? align.length : childres.length;
    const out = [];
    while (pos--) {
      const cell = childres[pos];
      out[pos] = h(cell, name, { align: align[pos] }, cell ? all(h, cell) : []);
    }
    return h(row, "tr", wrap(out, true));
  });
  const body = result[1] && h(
    {
      start: position(result[1]).start,
      end: position(result[result.length - 1]).end
    },
    "tbody",
    wrap(result.slice(1), true)
  );
  return h(node, "table", wrap([h(result[0].position, "thead", wrap([result[0]], true))].concat(body || []), true));
}

const htmlTags = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "math",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rb",
  "rp",
  "rt",
  "rtc",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "slot",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "svg",
  "table",
  "tbody",
  "td",
  "template",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr"
];

function paragraph(h, node) {
  if (node.children && node.children[0] && node.children[0].type === "html") {
    const tagName = kebabCase(getTagName(node.children[0].value) || "div");
    if (!htmlTags.includes(tagName)) {
      return all(h, node);
    }
  }
  return h(node, "p", all(h, node));
}

function image(h, node) {
  const props = {
    ...node.attributes,
    src: encode(node.url),
    alt: node.alt
  };
  if (node.title !== null && node.title !== void 0) {
    props.title = node.title;
  }
  return h(node, "img", props);
}

function blockquote(h, node) {
  return h(node, "blockquote", wrap(all(h, node), true));
}

function strong(h, node) {
  return h(node, "strong", node.attributes, all(h, node));
}

function inlineCode(h, node) {
  return h(node, "code-inline", node.attributes, [
    // @ts-ignore
    u("text", node.value.replace(/\r?\n|\r/g, " "))
  ]);
}

function thematicBreak(h, node) {
  return h(node, "hr");
}

function containerComponent(h, node) {
  const hast = h(node, node.tagName, node.attributes, all(h, node));
  hast.attributes = node.attributes;
  hast.fmAttributes = node.fmAttributes;
  return hast;
}

const handlers$1 = {
  emphasis,
  code,
  paragraph,
  html,
  link,
  list,
  listItem,
  heading,
  table,
  image,
  blockquote,
  strong,
  inlineCode,
  thematicBreak,
  containerComponent
};

function compiler(_options) {
  function parseAsJSON(node) {
    if (Array.isArray(node)) {
      return node.map(parseAsJSON).filter(Boolean);
    }
    if (node.tagName?.startsWith("h") && node.properties.id) {
      node.properties.id = node.properties.id.replace(/-+/g, "-").replace(/-$/, "").replace(/^-/, "");
    }
    if (node.type === "element") {
      if (node.tagName === "li") {
        let hasPreviousParagraph = false;
        node.children = node.children.flatMap((child) => {
          if (child.tagName === "p") {
            if (hasPreviousParagraph) {
              child.children.unshift({
                type: "element",
                tagName: "br",
                properties: {}
              });
            }
            hasPreviousParagraph = true;
            return child.children;
          }
          return child;
        });
      }
      if (node.tagName === "component-slot") {
        node.tagName = "template";
      }
      return {
        type: "element",
        tag: node.tagName,
        props: node.properties,
        children: parseAsJSON(node.children || [])
      };
    }
    if (node.type === "text") {
      if (node.value === "\n") {
        return null;
      }
      return {
        type: "text",
        value: node.value
      };
    }
    if (node.type === "comment") {
      return null;
    }
    node.children = parseAsJSON(node.children || []);
    return node;
  }
  this.Compiler = function(root) {
    return {
      type: "root",
      children: parseAsJSON(root.children || [])
    };
  };
}

function isTag(vnode, tag) {
  if (vnode.type === tag) {
    return true;
  }
  if (typeof vnode.type === "object" && vnode.type.tag === tag) {
    return true;
  }
  if (vnode.tag === tag) {
    return true;
  }
  return false;
}
function isText(vnode) {
  return isTag(vnode, "text") || typeof vnode.children === "string";
}
function nodeChildren(node) {
  if (Array.isArray(node.children) || typeof node.children === "string") {
    return node.children;
  }
  if (typeof node.children.default === "function") {
    return node.children.default();
  }
  return [];
}
function nodeTextContent(node) {
  if (!node) {
    return "";
  }
  if (Array.isArray(node)) {
    return node.map(nodeTextContent).join("");
  }
  if (isText(node)) {
    return node.children || node.value;
  }
  const children = nodeChildren(node);
  if (Array.isArray(children)) {
    return children.map(nodeTextContent).join("");
  }
  return "";
}

const usePlugins = (plugins, stream) => {
  for (const plugin of Object.values(plugins)) {
    if (plugin) {
      const { instance, ...options } = plugin;
      stream.use(instance, options);
    }
  }
};
function generateBody(content, options) {
  const rehypeOptions = {
    handlers: handlers$1,
    allowDangerousHtml: true
  };
  return new Promise((resolve, reject) => {
    const stream = unified().use(remarkParse);
    if (options.mdc) {
      stream.use(remarkMDC);
    }
    usePlugins(options.remarkPlugins, stream);
    stream.use(remark2rehype, rehypeOptions);
    usePlugins(options.rehypePlugins, stream);
    stream.use(compiler, options);
    stream.process(
      {
        value: content,
        data: options.data
      },
      (error, file) => {
        if (error) {
          return reject(error);
        }
        Object.assign(options.data, file?.data || {});
        resolve(file?.result);
      }
    );
  });
}
function contentHeading(body) {
  let title = "";
  let description = "";
  const children = body.children.filter((node) => node.type !== "text" && node.tag !== "hr");
  if (children.length && children[0].tag === "h1") {
    const node = children.shift();
    title = nodeTextContent(node);
  }
  if (children.length && children[0].tag === "p") {
    const node = children.shift();
    description = nodeTextContent(node);
  }
  return {
    title,
    description
  };
}

const useDefaultOptions = () => ({
  mdc: true,
  toc: {
    depth: 2,
    searchDepth: 2
  },
  tags: {},
  remarkPlugins: {
    "remark-emoji": {
      instance: remarkEmoji
    },
    "remark-squeeze-paragraphs": {
      instance: remarkSqueezeParagraphs
    },
    "remark-gfm": {
      instance: remarkGfm
    }
  },
  rehypePlugins: {
    "rehype-slug": {
      instance: rehypeSlug
    },
    "rehype-external-links": {
      instance: rehypeExternalLinks
    },
    "rehype-sort-attribute-values": {
      instance: rehypeSortAttributeValues
    },
    "rehype-sort-attributes": {
      instance: rehypeSortAttributes
    },
    "rehype-raw": {
      instance: rehypeRaw,
      passThrough: ["element"]
    }
  }
});
async function parse(file, userOptions = {}) {
  const options = defu(userOptions, useDefaultOptions());
  const { content, data } = await parseFrontMatter(file);
  const body = await generateBody(content, { ...options, data });
  let toc;
  if (data.toc !== false) {
    const tocOption = defu(data.toc || {}, options.toc);
    toc = generateToc(body, tocOption);
  }
  const excerptString = useExcerpt(content);
  const excerpt = excerptString ? await generateBody(excerptString, { ...options, data }) : void 0;
  const heading = contentHeading(body);
  return {
    body: {
      ...body,
      toc
    },
    meta: {
      _empty: content.trim().length === 0,
      title: heading.title,
      description: heading.description,
      excerpt,
      ...data
    }
  };
}
function useExcerpt(content, delimiter = /<!--\s*?more\s*?-->/i) {
  if (!delimiter) {
    return "";
  }
  let idx = -1;
  const match = delimiter.exec(content);
  if (match) {
    idx = match.index;
  }
  if (idx !== -1) {
    return content.slice(0, idx);
  }
}

const markdown = defineTransformer({
  name: "markdown",
  extensions: [".md"],
  parse: async (_id, content, options = {}) => {
    const config = { ...options };
    config.rehypePlugins = await importPlugins(config.rehypePlugins);
    config.remarkPlugins = await importPlugins(config.remarkPlugins);
    const parsed = await parse(content, config);
    return {
      ...parsed.meta,
      body: parsed.body,
      _type: "markdown",
      _id
    };
  }
});
async function importPlugins(plugins = {}) {
  const resolvedPlugins = {};
  for (const [name, plugin] of Object.entries(plugins)) {
    if (plugin) {
      resolvedPlugins[name] = {
        instance: plugin.instance || await import(
          /* @vite-ignore */
          name
        ).then((m) => m.default || m),
        ...plugin
      };
    } else {
      resolvedPlugins[name] = false;
    }
  }
  return resolvedPlugins;
}

const yaml = defineTransformer({
  name: "Yaml",
  extensions: [".yml", ".yaml"],
  parse: async (_id, content) => {
    const { data } = await parseFrontMatter(`---
${content}
---`);
    let parsed = data;
    if (Array.isArray(data)) {
      console.warn(`YAML array is not supported in ${_id}, moving the array into the \`body\` key`);
      parsed = { body: data };
    }
    return {
      ...parsed,
      _id,
      _type: "yaml"
    };
  }
});

const grammar = {
  "information_for_contributors": [
    "This file has been converted from https://github.com/docusgen/vscode-extension/blob/main/syntaxes/mdc.tmLanguage.json",
    "If you want to provide a fix or improvement, please create a pull request against the original repository.",
    "Once accepted there, we are happy to receive an update request."
  ],
  "version": "https://github.com/docusgen/vscode-extension/blob/1303abd16342880a42a4d143a660da049c79ea6c/syntaxes/mdc.tmLanguage.json",
  "name": "markdown",
  "injectionSelector": "L:text.html.markdown",
  "scopeName": "text.markdown.mdc",
  "patterns": [
    {
      "include": "text.html.markdown#frontMatter"
    },
    {
      "include": "#component_block"
    },
    {
      "include": "#block"
    }
  ],
  "repository": {
    "block": {
      "comment": "Same as `text.html.markdown#block`, but without `raw_block`",
      "patterns": [
        {
          "include": "#component_block"
        },
        {
          "include": "text.html.markdown#separator"
        },
        {
          "include": "#heading"
        },
        {
          "include": "#blockquote"
        },
        {
          "include": "#lists"
        },
        {
          "include": "#paragraph"
        },
        {
          "include": "text.html.markdown#fenced_code_block"
        },
        {
          "include": "text.html.markdown#link-def"
        },
        {
          "include": "text.html.markdown#html"
        }
      ]
    },
    "inline": {
      "patterns": [
        {
          "include": "#component_inline"
        },
        {
          "include": "#span"
        },
        {
          "include": "#markdown_attributes"
        }
      ]
    },
    "markdown_attributes": {
      "match": "(?x)([^ ])(               # attributes\n    ({)\n      ([^{]*)\n    (})\n  )",
      "name": "markup.component.attribute",
      "captures": {
        "4": {
          "patterns": [
            {
              "include": "#attribute"
            }
          ]
        }
      }
    },
    "span": {
      "match": "(?x)\n  (\\[)           # Open\n    ([^]]*)\n  (\\])\n  (               # attributes\n    ({)\n      ([^{]*)\n    (})\n  )?",
      "name": "markup.component.span",
      "captures": {
        "2": {
          "name": "string.other.link.description.title.markdown"
        },
        "4": {
          "patterns": [
            {
              "include": "#attributes"
            }
          ]
        }
      }
    },
    "attributes": {
      "match": "(?x)(               # attributes\n    ({)\n      ([^{]*)\n    (})\n  )",
      "name": "markup.attributes",
      "captures": {
        "3": {
          "patterns": [
            {
              "include": "#attribute"
            }
          ]
        }
      }
    },
    "component_inline": {
      "match": "(?x)\n  (^|\\G|\\s+)\n  (:)           # component colon\n  (?i:             # component name\n    (\\w[\\w\\d-]*)\n  )\n  (\n      ({[^}]*})        # attributes\n      (\\[[^\\]]*\\]?) # slot\n      # reverse order\n    | (\\[[^\\]]*\\])  # slot\n      ({[^}]*})?       # attributes\n  )?",
      "name": "markup.component.inline",
      "captures": {
        "2": {
          "name": "punctuation.definition.tag.start.component"
        },
        "3": {
          "name": "entity.name.tag.component"
        },
        "5": {
          "patterns": [
            {
              "include": "#attributes"
            }
          ]
        },
        "6": {
          "patterns": [
            {
              "include": "#span"
            }
          ]
        },
        "7": {
          "patterns": [
            {
              "include": "#span"
            }
          ]
        },
        "8": {
          "patterns": [
            {
              "include": "#attributes"
            }
          ]
        }
      }
    },
    "component_block": {
      "begin": "(?x)\n  (^|\\G)(\\s*)\n  (:{2,})     # component colons\n  (?i:\n    (\\w[\\w\\d-]+)   # component name\n    (                 # folowing spaces or attributes\n        \\s*\n      | {([^{]*)}\n    )\n    $\n  )",
      "name": "markup.component.block",
      "end": "(^|\\G)(\\2)(\\3)\\s*$",
      "beginCaptures": {
        "4": {
          "name": "entity.name.tag.component"
        },
        "5": {
          "patterns": [
            {
              "include": "#attribute"
            }
          ]
        }
      },
      "patterns": [
        {
          "include": "#content"
        }
      ]
    },
    "content": {
      "begin": "(^|\\G)(\\s*)(.*)",
      "while": "(^|\\G)(?!\\s*([:]{2,})\\s*$)",
      "contentName": "meta.embedded.block.component",
      "patterns": [
        {
          "begin": "(^|\\G)(\\s*)(-{3})(\\s*)$",
          "end": "(^|\\G)(\\s*(-{3})(\\s*)$)",
          "patterns": [
            {
              "include": "source.yaml"
            }
          ]
        },
        {
          "match": "^(\\s*)(#[\\w\\-\\_]*)\\s*(<!--(.*)-->)?$",
          "captures": {
            "2": {
              "name": "entity.other.attribute-name.html"
            },
            "3": {
              "name": "comment.block.html"
            }
          }
        },
        {
          "comment": "Block Repository created to disable 4-space raw block inside components",
          "include": "#block"
        }
      ]
    },
    "attribute": {
      "patterns": [
        {
          "match": `(?x)
  (
    ([^=><\\s]*)  # attribute name
    (             # attribute value
        =["]([^"]*)(["])|[']([^']*)(['])
      | =[^\\s'"]*
    )?
    \\s*
  )`,
          "captures": {
            "2": {
              "name": "entity.other.attribute-name.html"
            },
            "3": {
              "patterns": [
                {
                  "include": "#attribute-interior"
                }
              ]
            }
          }
        }
      ]
    },
    "attribute-interior": {
      "comment": "https://github.com/microsoft/vscode/blob/08d59c432609ae9306eb3889815977e93bb548de/extensions/html/syntaxes/html.tmLanguage.json#L376",
      "patterns": [
        {
          "begin": "=",
          "beginCaptures": {
            "0": {
              "name": "punctuation.separator.key-value.html"
            }
          },
          "end": "(?<=[^\\s=])(?!\\s*=)|(?=/?>)",
          "patterns": [
            {
              "match": "([^\\s\"'=<>`/]|/(?!>))+",
              "name": "string.unquoted.html"
            },
            {
              "begin": '"',
              "beginCaptures": {
                "0": {
                  "name": "punctuation.definition.string.begin.html"
                }
              },
              "end": '"',
              "endCaptures": {
                "0": {
                  "name": "punctuation.definition.string.end.html"
                }
              },
              "name": "string.quoted.double.html",
              "patterns": [
                {
                  "include": "#entities"
                }
              ]
            },
            {
              "begin": "'",
              "beginCaptures": {
                "0": {
                  "name": "punctuation.definition.string.begin.html"
                }
              },
              "end": "'",
              "endCaptures": {
                "0": {
                  "name": "punctuation.definition.string.end.html"
                }
              },
              "name": "string.quoted.single.html",
              "patterns": [
                {
                  "include": "#entities"
                }
              ]
            },
            {
              "match": "=",
              "name": "invalid.illegal.unexpected-equals-sign.html"
            }
          ]
        }
      ]
    },
    "entities": {
      "comment": "https://github.com/microsoft/vscode/blob/08d59c432609ae9306eb3889815977e93bb548de/extensions/html/syntaxes/html.tmLanguage.json#L532",
      "patterns": [
        {
          "captures": {
            "1": {
              "name": "punctuation.definition.entity.html"
            },
            "912": {
              "name": "punctuation.definition.entity.html"
            }
          },
          "comment": "Yes this is a bit ridiculous, there are quite a lot of these",
          "match": "(?x)\n						(&)	(?=[a-zA-Z])\n						(\n							(a(s(ymp(eq)?|cr|t)|n(d(slope|d|v|and)?|g(s(t|ph)|zarr|e|le|rt(vb(d)?)?|msd(a(h|c|d|e|f|a|g|b))?)?)|c(y|irc|d|ute|E)?|tilde|o(pf|gon)|uml|p(id|os|prox(eq)?|e|E|acir)?|elig|f(r)?|w(conint|int)|l(pha|e(ph|fsym))|acute|ring|grave|m(p|a(cr|lg))|breve)|A(s(sign|cr)|nd|MP|c(y|irc)|tilde|o(pf|gon)|uml|pplyFunction|fr|Elig|lpha|acute|ring|grave|macr|breve))\n						  | (B(scr|cy|opf|umpeq|e(cause|ta|rnoullis)|fr|a(ckslash|r(v|wed))|reve)|b(s(cr|im(e)?|ol(hsub|b)?|emi)|n(ot|e(quiv)?)|c(y|ong)|ig(s(tar|qcup)|c(irc|up|ap)|triangle(down|up)|o(times|dot|plus)|uplus|vee|wedge)|o(t(tom)?|pf|wtie|x(h(d|u|D|U)?|times|H(d|u|D|U)?|d(R|l|r|L)|u(R|l|r|L)|plus|D(R|l|r|L)|v(R|h|H|l|r|L)?|U(R|l|r|L)|V(R|h|H|l|r|L)?|minus|box))|Not|dquo|u(ll(et)?|mp(e(q)?|E)?)|prime|e(caus(e)?|t(h|ween|a)|psi|rnou|mptyv)|karow|fr|l(ock|k(1(2|4)|34)|a(nk|ck(square|triangle(down|left|right)?|lozenge)))|a(ck(sim(eq)?|cong|prime|epsilon)|r(vee|wed(ge)?))|r(eve|vbar)|brk(tbrk)?))\n						  | (c(s(cr|u(p(e)?|b(e)?))|h(cy|i|eck(mark)?)|ylcty|c(irc|ups(sm)?|edil|a(ps|ron))|tdot|ir(scir|c(eq|le(d(R|circ|S|dash|ast)|arrow(left|right)))?|e|fnint|E|mid)?|o(n(int|g(dot)?)|p(y(sr)?|f|rod)|lon(e(q)?)?|m(p(fn|le(xes|ment))?|ma(t)?))|dot|u(darr(l|r)|p(s|c(up|ap)|or|dot|brcap)?|e(sc|pr)|vee|wed|larr(p)?|r(vearrow(left|right)|ly(eq(succ|prec)|vee|wedge)|arr(m)?|ren))|e(nt(erdot)?|dil|mptyv)|fr|w(conint|int)|lubs(uit)?|a(cute|p(s|c(up|ap)|dot|and|brcup)?|r(on|et))|r(oss|arr))|C(scr|hi|c(irc|onint|edil|aron)|ircle(Minus|Times|Dot|Plus)|Hcy|o(n(tourIntegral|int|gruent)|unterClockwiseContourIntegral|p(f|roduct)|lon(e)?)|dot|up(Cap)?|OPY|e(nterDot|dilla)|fr|lo(seCurly(DoubleQuote|Quote)|ckwiseContourIntegral)|a(yleys|cute|p(italDifferentialD)?)|ross))\n						  | (d(s(c(y|r)|trok|ol)|har(l|r)|c(y|aron)|t(dot|ri(f)?)|i(sin|e|v(ide(ontimes)?|onx)?|am(s|ond(suit)?)?|gamma)|Har|z(cy|igrarr)|o(t(square|plus|eq(dot)?|minus)?|ublebarwedge|pf|wn(harpoon(left|right)|downarrows|arrow)|llar)|d(otseq|a(rr|gger))?|u(har|arr)|jcy|e(lta|g|mptyv)|f(isht|r)|wangle|lc(orn|rop)|a(sh(v)?|leth|rr|gger)|r(c(orn|rop)|bkarow)|b(karow|lac)|Arr)|D(s(cr|trok)|c(y|aron)|Scy|i(fferentialD|a(critical(Grave|Tilde|Do(t|ubleAcute)|Acute)|mond))|o(t(Dot|Equal)?|uble(Right(Tee|Arrow)|ContourIntegral|Do(t|wnArrow)|Up(DownArrow|Arrow)|VerticalBar|L(ong(RightArrow|Left(RightArrow|Arrow))|eft(RightArrow|Tee|Arrow)))|pf|wn(Right(TeeVector|Vector(Bar)?)|Breve|Tee(Arrow)?|arrow|Left(RightVector|TeeVector|Vector(Bar)?)|Arrow(Bar|UpArrow)?))|Zcy|el(ta)?|D(otrahd)?|Jcy|fr|a(shv|rr|gger)))\n						  | (e(s(cr|im|dot)|n(sp|g)|c(y|ir(c)?|olon|aron)|t(h|a)|o(pf|gon)|dot|u(ro|ml)|p(si(v|lon)?|lus|ar(sl)?)|e|D(ot|Dot)|q(s(im|lant(less|gtr))|c(irc|olon)|u(iv(DD)?|est|als)|vparsl)|f(Dot|r)|l(s(dot)?|inters|l)?|a(ster|cute)|r(Dot|arr)|g(s(dot)?|rave)?|x(cl|ist|p(onentiale|ectation))|m(sp(1(3|4))?|pty(set|v)?|acr))|E(s(cr|im)|c(y|irc|aron)|ta|o(pf|gon)|NG|dot|uml|TH|psilon|qu(ilibrium|al(Tilde)?)|fr|lement|acute|grave|x(ists|ponentialE)|m(pty(SmallSquare|VerySmallSquare)|acr)))\n						  | (f(scr|nof|cy|ilig|o(pf|r(k(v)?|all))|jlig|partint|emale|f(ilig|l(ig|lig)|r)|l(tns|lig|at)|allingdotseq|r(own|a(sl|c(1(2|8|3|4|5|6)|78|2(3|5)|3(8|4|5)|45|5(8|6)))))|F(scr|cy|illed(SmallSquare|VerySmallSquare)|o(uriertrf|pf|rAll)|fr))\n						  | (G(scr|c(y|irc|edil)|t|opf|dot|T|Jcy|fr|amma(d)?|reater(Greater|SlantEqual|Tilde|Equal(Less)?|FullEqual|Less)|g|breve)|g(s(cr|im(e|l)?)|n(sim|e(q(q)?)?|E|ap(prox)?)|c(y|irc)|t(c(c|ir)|dot|quest|lPar|r(sim|dot|eq(qless|less)|less|a(pprox|rr)))?|imel|opf|dot|jcy|e(s(cc|dot(o(l)?)?|l(es)?)?|q(slant|q)?|l)?|v(nE|ertneqq)|fr|E(l)?|l(j|E|a)?|a(cute|p|mma(d)?)|rave|g(g)?|breve))\n						  | (h(s(cr|trok|lash)|y(phen|bull)|circ|o(ok(leftarrow|rightarrow)|pf|arr|rbar|mtht)|e(llip|arts(uit)?|rcon)|ks(earow|warow)|fr|a(irsp|lf|r(dcy|r(cir|w)?)|milt)|bar|Arr)|H(s(cr|trok)|circ|ilbertSpace|o(pf|rizontalLine)|ump(DownHump|Equal)|fr|a(cek|t)|ARDcy))\n						  | (i(s(cr|in(s(v)?|dot|v|E)?)|n(care|t(cal|prod|e(rcal|gers)|larhk)?|odot|fin(tie)?)?|c(y|irc)?|t(ilde)?|i(nfin|i(nt|int)|ota)?|o(cy|ta|pf|gon)|u(kcy|ml)|jlig|prod|e(cy|xcl)|quest|f(f|r)|acute|grave|m(of|ped|a(cr|th|g(part|e|line))))|I(scr|n(t(e(rsection|gral))?|visible(Comma|Times))|c(y|irc)|tilde|o(ta|pf|gon)|dot|u(kcy|ml)|Ocy|Jlig|fr|Ecy|acute|grave|m(plies|a(cr|ginaryI))?))\n						  | (j(s(cr|ercy)|c(y|irc)|opf|ukcy|fr|math)|J(s(cr|ercy)|c(y|irc)|opf|ukcy|fr))\n						  | (k(scr|hcy|c(y|edil)|opf|jcy|fr|appa(v)?|green)|K(scr|c(y|edil)|Hcy|opf|Jcy|fr|appa))\n						  | (l(s(h|cr|trok|im(e|g)?|q(uo(r)?|b)|aquo)|h(ar(d|u(l)?)|blk)|n(sim|e(q(q)?)?|E|ap(prox)?)|c(y|ub|e(il|dil)|aron)|Barr|t(hree|c(c|ir)|imes|dot|quest|larr|r(i(e|f)?|Par))?|Har|o(ng(left(arrow|rightarrow)|rightarrow|mapsto)|times|z(enge|f)?|oparrow(left|right)|p(f|lus|ar)|w(ast|bar)|a(ng|rr)|brk)|d(sh|ca|quo(r)?|r(dhar|ushar))|ur(dshar|uhar)|jcy|par(lt)?|e(s(s(sim|dot|eq(qgtr|gtr)|approx|gtr)|cc|dot(o(r)?)?|g(es)?)?|q(slant|q)?|ft(harpoon(down|up)|threetimes|leftarrows|arrow(tail)?|right(squigarrow|harpoons|arrow(s)?))|g)?|v(nE|ertneqq)|f(isht|loor|r)|E(g)?|l(hard|corner|tri|arr)?|a(ng(d|le)?|cute|t(e(s)?|ail)?|p|emptyv|quo|rr(sim|hk|tl|pl|fs|lp|b(fs)?)?|gran|mbda)|r(har(d)?|corner|tri|arr|m)|g(E)?|m(idot|oust(ache)?)|b(arr|r(k(sl(d|u)|e)|ac(e|k))|brk)|A(tail|arr|rr))|L(s(h|cr|trok)|c(y|edil|aron)|t|o(ng(RightArrow|left(arrow|rightarrow)|rightarrow|Left(RightArrow|Arrow))|pf|wer(RightArrow|LeftArrow))|T|e(ss(Greater|SlantEqual|Tilde|EqualGreater|FullEqual|Less)|ft(Right(Vector|Arrow)|Ceiling|T(ee(Vector|Arrow)?|riangle(Bar|Equal)?)|Do(ubleBracket|wn(TeeVector|Vector(Bar)?))|Up(TeeVector|DownVector|Vector(Bar)?)|Vector(Bar)?|arrow|rightarrow|Floor|A(ngleBracket|rrow(RightArrow|Bar)?)))|Jcy|fr|l(eftarrow)?|a(ng|cute|placetrf|rr|mbda)|midot))\n						  | (M(scr|cy|inusPlus|opf|u|e(diumSpace|llintrf)|fr|ap)|m(s(cr|tpos)|ho|nplus|c(y|omma)|i(nus(d(u)?|b)?|cro|d(cir|dot|ast)?)|o(dels|pf)|dash|u(ltimap|map)?|p|easuredangle|DDot|fr|l(cp|dr)|a(cr|p(sto(down|up|left)?)?|l(t(ese)?|e)|rker)))\n						  | (n(s(hort(parallel|mid)|c(cue|e|r)?|im(e(q)?)?|u(cc(eq)?|p(set(eq(q)?)?|e|E)?|b(set(eq(q)?)?|e|E)?)|par|qsu(pe|be)|mid)|Rightarrow|h(par|arr|Arr)|G(t(v)?|g)|c(y|ong(dot)?|up|edil|a(p|ron))|t(ilde|lg|riangle(left(eq)?|right(eq)?)|gl)|i(s(d)?|v)?|o(t(ni(v(c|a|b))?|in(dot|v(c|a|b)|E)?)?|pf)|dash|u(m(sp|ero)?)?|jcy|p(olint|ar(sl|t|allel)?|r(cue|e(c(eq)?)?)?)|e(s(im|ear)|dot|quiv|ar(hk|r(ow)?)|xist(s)?|Arr)?|v(sim|infin|Harr|dash|Dash|l(t(rie)?|e|Arr)|ap|r(trie|Arr)|g(t|e))|fr|w(near|ar(hk|r(ow)?)|Arr)|V(dash|Dash)|l(sim|t(ri(e)?)?|dr|e(s(s)?|q(slant|q)?|ft(arrow|rightarrow))?|E|arr|Arr)|a(ng|cute|tur(al(s)?)?|p(id|os|prox|E)?|bla)|r(tri(e)?|ightarrow|arr(c|w)?|Arr)|g(sim|t(r)?|e(s|q(slant|q)?)?|E)|mid|L(t(v)?|eft(arrow|rightarrow)|l)|b(sp|ump(e)?))|N(scr|c(y|edil|aron)|tilde|o(nBreakingSpace|Break|t(R(ightTriangle(Bar|Equal)?|everseElement)|Greater(Greater|SlantEqual|Tilde|Equal|FullEqual|Less)?|S(u(cceeds(SlantEqual|Tilde|Equal)?|perset(Equal)?|bset(Equal)?)|quareSu(perset(Equal)?|bset(Equal)?))|Hump(DownHump|Equal)|Nested(GreaterGreater|LessLess)|C(ongruent|upCap)|Tilde(Tilde|Equal|FullEqual)?|DoubleVerticalBar|Precedes(SlantEqual|Equal)?|E(qual(Tilde)?|lement|xists)|VerticalBar|Le(ss(Greater|SlantEqual|Tilde|Equal|Less)?|ftTriangle(Bar|Equal)?))?|pf)|u|e(sted(GreaterGreater|LessLess)|wLine|gative(MediumSpace|Thi(nSpace|ckSpace)|VeryThinSpace))|Jcy|fr|acute))\n						  | (o(s(cr|ol|lash)|h(m|bar)|c(y|ir(c)?)|ti(lde|mes(as)?)|S|int|opf|d(sold|iv|ot|ash|blac)|uml|p(erp|lus|ar)|elig|vbar|f(cir|r)|l(c(ir|ross)|t|ine|arr)|a(st|cute)|r(slope|igof|or|d(er(of)?|f|m)?|v|arr)?|g(t|on|rave)|m(i(nus|cron|d)|ega|acr))|O(s(cr|lash)|c(y|irc)|ti(lde|mes)|opf|dblac|uml|penCurly(DoubleQuote|Quote)|ver(B(ar|rac(e|ket))|Parenthesis)|fr|Elig|acute|r|grave|m(icron|ega|acr)))\n						  | (p(s(cr|i)|h(i(v)?|one|mmat)|cy|i(tchfork|v)?|o(intint|und|pf)|uncsp|er(cnt|tenk|iod|p|mil)|fr|l(us(sim|cir|two|d(o|u)|e|acir|mn|b)?|an(ck(h)?|kv))|ar(s(im|l)|t|a(llel)?)?|r(sim|n(sim|E|ap)|cue|ime(s)?|o(d|p(to)?|f(surf|line|alar))|urel|e(c(sim|n(sim|eqq|approx)|curlyeq|eq|approx)?)?|E|ap)?|m)|P(s(cr|i)|hi|cy|i|o(incareplane|pf)|fr|lusMinus|artialD|r(ime|o(duct|portion(al)?)|ecedes(SlantEqual|Tilde|Equal)?)?))\n						  | (q(scr|int|opf|u(ot|est(eq)?|at(int|ernions))|prime|fr)|Q(scr|opf|UOT|fr))\n						  | (R(s(h|cr)|ho|c(y|edil|aron)|Barr|ight(Ceiling|T(ee(Vector|Arrow)?|riangle(Bar|Equal)?)|Do(ubleBracket|wn(TeeVector|Vector(Bar)?))|Up(TeeVector|DownVector|Vector(Bar)?)|Vector(Bar)?|arrow|Floor|A(ngleBracket|rrow(Bar|LeftArrow)?))|o(undImplies|pf)|uleDelayed|e(verse(UpEquilibrium|E(quilibrium|lement)))?|fr|EG|a(ng|cute|rr(tl)?)|rightarrow)|r(s(h|cr|q(uo(r)?|b)|aquo)|h(o(v)?|ar(d|u(l)?))|nmid|c(y|ub|e(il|dil)|aron)|Barr|t(hree|imes|ri(e|f|ltri)?)|i(singdotseq|ng|ght(squigarrow|harpoon(down|up)|threetimes|left(harpoons|arrows)|arrow(tail)?|rightarrows))|Har|o(times|p(f|lus|ar)|a(ng|rr)|brk)|d(sh|ca|quo(r)?|ldhar)|uluhar|p(polint|ar(gt)?)|e(ct|al(s|ine|part)?|g)|f(isht|loor|r)|l(har|arr|m)|a(ng(d|e|le)?|c(ute|e)|t(io(nals)?|ail)|dic|emptyv|quo|rr(sim|hk|c|tl|pl|fs|w|lp|ap|b(fs)?)?)|rarr|x|moust(ache)?|b(arr|r(k(sl(d|u)|e)|ac(e|k))|brk)|A(tail|arr|rr)))\n						  | (s(s(cr|tarf|etmn|mile)|h(y|c(hcy|y)|ort(parallel|mid)|arp)|c(sim|y|n(sim|E|ap)|cue|irc|polint|e(dil)?|E|a(p|ron))?|t(ar(f)?|r(ns|aight(phi|epsilon)))|i(gma(v|f)?|m(ne|dot|plus|e(q)?|l(E)?|rarr|g(E)?)?)|zlig|o(pf|ftcy|l(b(ar)?)?)|dot(e|b)?|u(ng|cc(sim|n(sim|eqq|approx)|curlyeq|eq|approx)?|p(s(im|u(p|b)|et(neq(q)?|eq(q)?)?)|hs(ol|ub)|1|n(e|E)|2|d(sub|ot)|3|plus|e(dot)?|E|larr|mult)?|m|b(s(im|u(p|b)|et(neq(q)?|eq(q)?)?)|n(e|E)|dot|plus|e(dot)?|E|rarr|mult)?)|pa(des(uit)?|r)|e(swar|ct|tm(n|inus)|ar(hk|r(ow)?)|xt|mi|Arr)|q(su(p(set(eq)?|e)?|b(set(eq)?|e)?)|c(up(s)?|ap(s)?)|u(f|ar(e|f))?)|fr(own)?|w(nwar|ar(hk|r(ow)?)|Arr)|larr|acute|rarr|m(t(e(s)?)?|i(d|le)|eparsl|a(shp|llsetminus))|bquo)|S(scr|hort(RightArrow|DownArrow|UpArrow|LeftArrow)|c(y|irc|edil|aron)?|tar|igma|H(cy|CHcy)|opf|u(c(hThat|ceeds(SlantEqual|Tilde|Equal)?)|p(set|erset(Equal)?)?|m|b(set(Equal)?)?)|OFTcy|q(uare(Su(perset(Equal)?|bset(Equal)?)|Intersection|Union)?|rt)|fr|acute|mallCircle))\n						  | (t(s(hcy|c(y|r)|trok)|h(i(nsp|ck(sim|approx))|orn|e(ta(sym|v)?|re(4|fore))|k(sim|ap))|c(y|edil|aron)|i(nt|lde|mes(d|b(ar)?)?)|o(sa|p(cir|f(ork)?|bot)?|ea)|dot|prime|elrec|fr|w(ixt|ohead(leftarrow|rightarrow))|a(u|rget)|r(i(sb|time|dot|plus|e|angle(down|q|left(eq)?|right(eq)?)?|minus)|pezium|ade)|brk)|T(s(cr|trok)|RADE|h(i(nSpace|ckSpace)|e(ta|refore))|c(y|edil|aron)|S(cy|Hcy)|ilde(Tilde|Equal|FullEqual)?|HORN|opf|fr|a(u|b)|ripleDot))\n						  | (u(scr|h(ar(l|r)|blk)|c(y|irc)|t(ilde|dot|ri(f)?)|Har|o(pf|gon)|d(har|arr|blac)|u(arr|ml)|p(si(h|lon)?|harpoon(left|right)|downarrow|uparrows|lus|arrow)|f(isht|r)|wangle|l(c(orn(er)?|rop)|tri)|a(cute|rr)|r(c(orn(er)?|rop)|tri|ing)|grave|m(l|acr)|br(cy|eve)|Arr)|U(scr|n(ion(Plus)?|der(B(ar|rac(e|ket))|Parenthesis))|c(y|irc)|tilde|o(pf|gon)|dblac|uml|p(si(lon)?|downarrow|Tee(Arrow)?|per(RightArrow|LeftArrow)|DownArrow|Equilibrium|arrow|Arrow(Bar|DownArrow)?)|fr|a(cute|rr(ocir)?)|ring|grave|macr|br(cy|eve)))\n						  | (v(s(cr|u(pn(e|E)|bn(e|E)))|nsu(p|b)|cy|Bar(v)?|zigzag|opf|dash|prop|e(e(eq|bar)?|llip|r(t|bar))|Dash|fr|ltri|a(ngrt|r(s(igma|u(psetneq(q)?|bsetneq(q)?))|nothing|t(heta|riangle(left|right))|p(hi|i|ropto)|epsilon|kappa|r(ho)?))|rtri|Arr)|V(scr|cy|opf|dash(l)?|e(e|r(yThinSpace|t(ical(Bar|Separator|Tilde|Line))?|bar))|Dash|vdash|fr|bar))\n						  | (w(scr|circ|opf|p|e(ierp|d(ge(q)?|bar))|fr|r(eath)?)|W(scr|circ|opf|edge|fr))\n						  | (X(scr|i|opf|fr)|x(s(cr|qcup)|h(arr|Arr)|nis|c(irc|up|ap)|i|o(time|dot|p(f|lus))|dtri|u(tri|plus)|vee|fr|wedge|l(arr|Arr)|r(arr|Arr)|map))\n						  | (y(scr|c(y|irc)|icy|opf|u(cy|ml)|en|fr|ac(y|ute))|Y(scr|c(y|irc)|opf|uml|Icy|Ucy|fr|acute|Acy))\n						  | (z(scr|hcy|c(y|aron)|igrarr|opf|dot|e(ta|etrf)|fr|w(nj|j)|acute)|Z(scr|c(y|aron)|Hcy|opf|dot|e(ta|roWidthSpace)|fr|acute))\n						)\n						(;)\n					",
          "name": "constant.character.entity.named.$2.html"
        },
        {
          "captures": {
            "1": {
              "name": "punctuation.definition.entity.html"
            },
            "3": {
              "name": "punctuation.definition.entity.html"
            }
          },
          "match": "(&)#[0-9]+(;)",
          "name": "constant.character.entity.numeric.decimal.html"
        },
        {
          "captures": {
            "1": {
              "name": "punctuation.definition.entity.html"
            },
            "3": {
              "name": "punctuation.definition.entity.html"
            }
          },
          "match": "(&)#[xX][0-9a-fA-F]+(;)",
          "name": "constant.character.entity.numeric.hexadecimal.html"
        },
        {
          "match": "&(?=[a-zA-Z0-9]+;)",
          "name": "invalid.illegal.ambiguous-ampersand.html"
        }
      ]
    },
    "heading": {
      "match": "(?:^|\\G)[ ]*(#{1,6}\\s+(.*?)(\\s+#{1,6})?\\s*)$",
      "captures": {
        "1": {
          "patterns": [
            {
              "match": "(#{6})\\s+(.*?)(?:\\s+(#+))?\\s*$",
              "name": "heading.6.markdown",
              "captures": {
                "1": {
                  "name": "punctuation.definition.heading.markdown"
                },
                "2": {
                  "name": "entity.name.section.markdown",
                  "patterns": [
                    {
                      "include": "text.html.markdown#inline"
                    },
                    {
                      "include": "text.html.derivative"
                    }
                  ]
                },
                "3": {
                  "name": "punctuation.definition.heading.markdown"
                }
              }
            },
            {
              "match": "(#{5})\\s+(.*?)(?:\\s+(#+))?\\s*$",
              "name": "heading.5.markdown",
              "captures": {
                "1": {
                  "name": "punctuation.definition.heading.markdown"
                },
                "2": {
                  "name": "entity.name.section.markdown",
                  "patterns": [
                    {
                      "include": "text.html.markdown#inline"
                    },
                    {
                      "include": "text.html.derivative"
                    }
                  ]
                },
                "3": {
                  "name": "punctuation.definition.heading.markdown"
                }
              }
            },
            {
              "match": "(#{4})\\s+(.*?)(?:\\s+(#+))?\\s*$",
              "name": "heading.4.markdown",
              "captures": {
                "1": {
                  "name": "punctuation.definition.heading.markdown"
                },
                "2": {
                  "name": "entity.name.section.markdown",
                  "patterns": [
                    {
                      "include": "text.html.markdown#inline"
                    },
                    {
                      "include": "text.html.derivative"
                    }
                  ]
                },
                "3": {
                  "name": "punctuation.definition.heading.markdown"
                }
              }
            },
            {
              "match": "(#{3})\\s+(.*?)(?:\\s+(#+))?\\s*$",
              "name": "heading.3.markdown",
              "captures": {
                "1": {
                  "name": "punctuation.definition.heading.markdown"
                },
                "2": {
                  "name": "entity.name.section.markdown",
                  "patterns": [
                    {
                      "include": "text.html.markdown#inline"
                    },
                    {
                      "include": "text.html.derivative"
                    }
                  ]
                },
                "3": {
                  "name": "punctuation.definition.heading.markdown"
                }
              }
            },
            {
              "match": "(#{2})\\s+(.*?)(?:\\s+(#+))?\\s*$",
              "name": "heading.2.markdown",
              "captures": {
                "1": {
                  "name": "punctuation.definition.heading.markdown"
                },
                "2": {
                  "name": "entity.name.section.markdown",
                  "patterns": [
                    {
                      "include": "text.html.markdown#inline"
                    },
                    {
                      "include": "text.html.derivative"
                    }
                  ]
                },
                "3": {
                  "name": "punctuation.definition.heading.markdown"
                }
              }
            },
            {
              "match": "(#{1})\\s+(.*?)(?:\\s+(#+))?\\s*$",
              "name": "heading.1.markdown",
              "captures": {
                "1": {
                  "name": "punctuation.definition.heading.markdown"
                },
                "2": {
                  "name": "entity.name.section.markdown",
                  "patterns": [
                    {
                      "include": "text.html.markdown#inline"
                    },
                    {
                      "include": "text.html.derivative"
                    }
                  ]
                },
                "3": {
                  "name": "punctuation.definition.heading.markdown"
                }
              }
            }
          ]
        }
      },
      "name": "markup.heading.markdown",
      "patterns": [
        {
          "include": "text.html.markdown#inline"
        }
      ]
    },
    "heading-setext": {
      "patterns": [
        {
          "match": "^(={3,})(?=[ \\t]*$\\n?)",
          "name": "markup.heading.setext.1.markdown"
        },
        {
          "match": "^(-{3,})(?=[ \\t]*$\\n?)",
          "name": "markup.heading.setext.2.markdown"
        }
      ]
    },
    "lists": {
      "patterns": [
        {
          "begin": "(^|\\G)([ ]*)([*+-])([ \\t])",
          "beginCaptures": {
            "3": {
              "name": "punctuation.definition.list.begin.markdown"
            }
          },
          "comment": "Currently does not support un-indented second lines.",
          "name": "markup.list.unnumbered.markdown",
          "patterns": [
            {
              "include": "#block"
            },
            {
              "include": "text.html.markdown#list_paragraph"
            }
          ],
          "while": "((^|\\G)([ ]*|\\t))|(^[ \\t]*$)"
        },
        {
          "begin": "(^|\\G)([ ]*)([0-9]+\\.)([ \\t])",
          "beginCaptures": {
            "3": {
              "name": "punctuation.definition.list.begin.markdown"
            }
          },
          "name": "markup.list.numbered.markdown",
          "patterns": [
            {
              "include": "#block"
            },
            {
              "include": "text.html.markdown#list_paragraph"
            }
          ],
          "while": "((^|\\G)([ ]*|\\t))|(^[ \\t]*$)"
        }
      ]
    },
    "paragraph": {
      "begin": "(^|\\G)[ ]*(?=\\S)",
      "name": "meta.paragraph.markdown",
      "patterns": [
        {
          "include": "#inline"
        },
        {
          "include": "text.html.markdown#inline"
        },
        {
          "include": "text.html.derivative"
        },
        {
          "include": "#heading-setext"
        }
      ],
      "while": "(^|\\G)((?=\\s*[-=]{3,}\\s*$)|[ ]{4,}(?=\\S))"
    },
    "blockquote": {
      "begin": "(^|\\G)[ ]*(>) ?",
      "captures": {
        "2": {
          "name": "punctuation.definition.quote.begin.markdown"
        }
      },
      "name": "markup.quote.markdown",
      "patterns": [
        {
          "include": "#block"
        }
      ],
      "while": "(^|\\G)\\s*(>) ?"
    }
  }
};
const mdcTMLanguage = grammar;

const logger = consola.withScope("@nuxt/content");
const resolveLang = (lang) => BUNDLED_LANGUAGES.find((l) => l.id === lang || l.aliases?.includes(lang));
const resolveTheme = (theme) => {
  if (!theme) {
    return;
  }
  if (typeof theme === "string") {
    theme = {
      default: theme
    };
  }
  return Object.entries(theme).reduce((acc, [key, value]) => {
    acc[key] = BUNDLED_THEMES.find((t) => t === value);
    return acc;
  }, {});
};
const useShikiHighlighter = createSingleton((opts) => {
  const { theme, preload } = opts || {};
  let promise;
  const getShikiHighlighter = () => {
    if (!promise) {
      promise = getHighlighter({
        theme: theme?.default || theme || "dark-plus",
        langs: [
          ...preload || [],
          "diff",
          "json",
          "js",
          "ts",
          "css",
          "shell",
          "html",
          "md",
          "yaml",
          "vue",
          {
            id: "md",
            scopeName: "text.markdown.mdc",
            path: "mdc.tmLanguage.json",
            aliases: ["markdown", "md", "mdc"],
            grammar: mdcTMLanguage
          }
        ]
      }).then((highlighter) => {
        const themes = Object.values(typeof theme === "string" ? { default: theme } : theme || {});
        if (themes.length) {
          return Promise.all(themes.map((theme2) => highlighter.loadTheme(theme2))).then(() => highlighter);
        }
        return highlighter;
      });
    }
    return promise;
  };
  const getHighlightedTokens = async (code, lang, theme2) => {
    const highlighter = await getShikiHighlighter();
    code = code.replace(/\n+$/, "");
    lang = resolveLang(lang || "")?.id || lang;
    theme2 = resolveTheme(theme2 || "") || { default: highlighter.getTheme() };
    if (!lang) {
      return [[{ content: code }]];
    }
    if (!highlighter.getLoadedLanguages().includes(lang)) {
      const languageRegistration = resolveLang(lang);
      if (languageRegistration) {
        await highlighter.loadLanguage(languageRegistration);
      } else {
        logger.warn(`Language '${lang}' is not supported by shiki. Skipping highlight.`);
        return [[{ content: code }]];
      }
    }
    const newThemes = Object.values(theme2).filter((t) => !highlighter.getLoadedThemes().includes(t));
    if (newThemes.length) {
      await Promise.all(newThemes.map(highlighter.loadTheme));
    }
    const coloredTokens = Object.entries(theme2).map(([key, theme3]) => {
      const tokens = highlighter.codeToThemedTokens(code, lang, theme3, { includeExplanation: false });
      return {
        key,
        theme: theme3,
        tokens
      };
    });
    const highlightedCode = [];
    for (const line in coloredTokens[0].tokens) {
      highlightedCode[line] = coloredTokens.reduce((acc, color) => {
        return mergeLines({
          key: coloredTokens[0].key,
          tokens: acc
        }, {
          key: color.key,
          tokens: color.tokens[line]
        });
      }, coloredTokens[0].tokens[line]);
    }
    return highlightedCode;
  };
  const getHighlightedAST = async (code, lang, theme2, opts2) => {
    const lines = await getHighlightedTokens(code, lang, theme2);
    const { highlights = [], colorMap = {} } = opts2 || {};
    return lines.map((line, lineIndex) => ({
      type: "element",
      tag: "span",
      props: { class: ["line", highlights.includes(lineIndex + 1) ? "highlight" : ""].join(" ").trim() },
      children: line.map(tokenSpan)
    }));
    function getColorProps(token) {
      if (!token.color) {
        return {};
      }
      if (typeof token.color === "string") {
        return { style: { color: token.color } };
      }
      const key = Object.values(token.color).join("");
      if (!colorMap[key]) {
        colorMap[key] = {
          colors: token.color,
          className: "ct-" + Math.random().toString(16).substring(2, 8)
          // hash(key)
        };
      }
      return { class: colorMap[key].className };
    }
    function tokenSpan(token) {
      return {
        type: "element",
        tag: "span",
        props: getColorProps(token),
        children: [{ type: "text", value: token.content }]
      };
    }
  };
  const getHighlightedCode = async (code, lang, theme2, opts2) => {
    const colorMap = opts2?.colorMap || {};
    const highlights = opts2?.highlights || [];
    const ast = await getHighlightedAST(code, lang, theme2, { colorMap, highlights });
    function renderNode(node) {
      if (node.type === "text") {
        return node.value.replace(/</g, "&lt;").replace(/>/g, "&gt;");
      }
      const children = node.children.map(renderNode).join("");
      return `<${node.tag} class="${node.props.class}">${children}</${node.tag}>`;
    }
    return {
      code: ast.map(renderNode).join(""),
      styles: generateStyles(colorMap)
    };
  };
  const generateStyles = (colorMap) => {
    const colors = [];
    for (const colorClass of Object.values(colorMap)) {
      Object.entries(colorClass.colors).forEach(([variant, color]) => {
        if (variant === "default") {
          colors.unshift(`.${colorClass.className}{color:${color}}`);
        } else {
          colors.push(`.${variant} .${colorClass.className}{color:${color}}`);
        }
      });
    }
    return colors.join("\n");
  };
  return {
    getHighlightedTokens,
    getHighlightedAST,
    getHighlightedCode,
    generateStyles
  };
});
function mergeLines(line1, line2) {
  const mergedTokens = [];
  const getColors = (h, i) => typeof h.tokens[i].color === "string" ? { [h.key]: h.tokens[i].color } : h.tokens[i].color;
  const right = {
    key: line1.key,
    tokens: line1.tokens.slice()
  };
  const left = {
    key: line2.key,
    tokens: line2.tokens.slice()
  };
  let index = 0;
  while (index < right.tokens.length) {
    const rightToken = right.tokens[index];
    const leftToken = left.tokens[index];
    if (rightToken.content === leftToken.content) {
      mergedTokens.push({
        content: rightToken.content,
        color: {
          ...getColors(right, index),
          ...getColors(left, index)
        }
      });
      index += 1;
      continue;
    }
    if (rightToken.content.startsWith(leftToken.content)) {
      const nextRightToken = {
        ...rightToken,
        content: rightToken.content.slice(leftToken.content.length)
      };
      rightToken.content = leftToken.content;
      right.tokens.splice(index + 1, 0, nextRightToken);
      continue;
    }
    if (leftToken.content.startsWith(rightToken.content)) {
      const nextLeftToken = {
        ...leftToken,
        content: leftToken.content.slice(rightToken.content.length)
      };
      leftToken.content = rightToken.content;
      left.tokens.splice(index + 1, 0, nextLeftToken);
      continue;
    }
    throw new Error("Unexpected token");
  }
  return mergedTokens;
}

const shiki = defineTransformer({
  name: "highlight",
  extensions: [".md"],
  transform: async (content, options = {}) => {
    const shikiHighlighter = useShikiHighlighter(options);
    await Promise.all([
      highlight(content.body),
      highlight(content.excerpt)
    ]);
    return content;
    async function highlight(document) {
      if (!document) {
        return;
      }
      const colorMap = {};
      const codeBlocks = [];
      const inlineCodes = [];
      visit(
        document,
        (node) => node?.tag === "code" && node?.props.code || node?.tag === "code-inline" && (node.props?.lang || node.props?.language),
        (node) => {
          if (node?.tag === "code") {
            codeBlocks.push(node);
          } else if (node?.tag === "code-inline") {
            inlineCodes.push(node);
          }
        }
      );
      await Promise.all(codeBlocks.map((node) => highlightBlock(node, colorMap)));
      await Promise.all(inlineCodes.map((node) => highlightInline(node, colorMap)));
      if (Object.values(colorMap).length) {
        document?.children.push({
          type: "element",
          tag: "style",
          children: [{ type: "text", value: shikiHighlighter.generateStyles(colorMap) }]
        });
      }
    }
    async function highlightInline(node, colorMap) {
      const code = node.children[0].value;
      const lines = await shikiHighlighter.getHighlightedAST(code, node.props.lang || node.props.language, options.theme, { colorMap });
      node.children = lines[0].children;
      node.props = Object.assign(node.props || {}, { class: "colored" });
      return node;
    }
    async function highlightBlock(node, colorMap) {
      const { code, language: lang, highlights = [] } = node.props;
      const innerCodeNode = node.children[0].children[0];
      innerCodeNode.children = await shikiHighlighter.getHighlightedAST(code, lang, options.theme, { colorMap, highlights });
      return node;
    }
  }
});

const json = defineTransformer({
  name: "Json",
  extensions: [".json", ".json5"],
  parse: async (_id, content) => {
    let parsed;
    if (typeof content === "string") {
      if (_id.endsWith("json5")) {
        parsed = (await import('json5').then((m) => m.default || m)).parse(content);
      } else if (_id.endsWith("json")) {
        parsed = destr(content);
      }
    } else {
      parsed = content;
    }
    if (Array.isArray(parsed)) {
      console.warn(`JSON array is not supported in ${_id}, moving the array into the \`body\` key`);
      parsed = {
        body: parsed
      };
    }
    return {
      ...parsed,
      _id,
      _type: "json"
    };
  }
});

const TRANSFORMERS = [
  csv,
  markdown,
  json,
  yaml,
  shiki,
  pathMeta
];
function getParser(ext, additionalTransformers = []) {
  let parser = additionalTransformers.find((p) => ext.match(new RegExp(p.extensions.join("|"), "i")) && p.parse);
  if (!parser) {
    parser = TRANSFORMERS.find((p) => ext.match(new RegExp(p.extensions.join("|"), "i")) && p.parse);
  }
  return parser;
}
function getTransformers(ext, additionalTransformers = []) {
  return [
    ...additionalTransformers.filter((p) => ext.match(new RegExp(p.extensions.join("|"), "i")) && p.transform),
    ...TRANSFORMERS.filter((p) => ext.match(new RegExp(p.extensions.join("|"), "i")) && p.transform)
  ];
}
async function transformContent(id, content, options = {}) {
  const { transformers = [] } = options;
  const file = { _id: id, body: content };
  const ext = extname(id);
  const parser = getParser(ext, transformers);
  if (!parser) {
    console.warn(`${ext} files are not supported, "${id}" falling back to raw content`);
    return file;
  }
  const parserOptions = options[camelCase(parser.name)] || {};
  const parsed = await parser.parse(file._id, file.body, parserOptions);
  const matchedTransformers = getTransformers(ext, transformers);
  const result = await matchedTransformers.reduce(async (prev, cur) => {
    const next = await prev || parsed;
    const transformOptions = options[camelCase(cur.name)];
    if (transformOptions === false) {
      return next;
    }
    return cur.transform(next, transformOptions || {});
  }, Promise.resolve(parsed));
  return result;
}

const isPreview = (event) => {
  const previewToken = getQuery(event).previewToken || getCookie(event, "previewToken");
  return !!previewToken;
};
const getPreview = (event) => {
  const key = getQuery(event).previewToken || getCookie(event, "previewToken");
  return { key };
};

async function getContentIndex(event) {
  const defaultLocale = useRuntimeConfig().content.defaultLocale;
  let contentIndex = await cacheStorage.getItem("content-index.json");
  if (!contentIndex) {
    const data = await getContentsList(event);
    contentIndex = data.reduce((acc, item) => {
      acc[item._path] = acc[item._path] || [];
      if (item._locale === defaultLocale) {
        acc[item._path].unshift(item._id);
      } else {
        acc[item._path].push(item._id);
      }
      return acc;
    }, {});
    await cacheStorage.setItem("content-index.json", contentIndex);
  }
  return contentIndex;
}
async function getIndexedContentsList(event, query) {
  const params = query.params();
  const path = params?.where?.find((wh) => wh._path)?._path;
  if (!isPreview(event) && (typeof path === "string" || path instanceof RegExp)) {
    const index = await getContentIndex(event);
    const keys = Object.keys(index).filter((key) => path.test ? path.test(key) : key === String(path)).flatMap((key) => index[key]);
    const contents = await Promise.all(keys.map((key) => getContent(event, key)));
    return contents;
  }
  return getContentsList(event);
}

const transformers = [];

const sourceStorage = prefixStorage(useStorage(), "content:source");
const cacheStorage = prefixStorage(useStorage(), "cache:content");
const cacheParsedStorage = prefixStorage(useStorage(), "cache:content:parsed");
const contentConfig = useRuntimeConfig().content;
const contentIgnores = contentConfig.ignores.map(
  (p) => typeof p === "string" ? new RegExp(`^${p}|:${p}`) : p
);
const invalidKeyCharacters = `'"?#/`.split("");
const contentIgnorePredicate = (key) => {
  if (key.startsWith("preview:") || contentIgnores.some((prefix) => prefix.test(key))) {
    return false;
  }
  if (invalidKeyCharacters.some((ik) => key.includes(ik))) {
    console.warn(`Ignoring [${key}]. File name should not contain any of the following characters: ${invalidKeyCharacters.join(", ")}`);
    return false;
  }
  return true;
};
const getContentsIds = async (event, prefix) => {
  let keys = [];
  {
    keys = await cacheParsedStorage.getKeys(prefix);
  }
  if (keys.length === 0) {
    keys = await sourceStorage.getKeys(prefix);
  }
  if (isPreview(event)) {
    const { key } = getPreview(event);
    const previewPrefix = `preview:${key}:${prefix || ""}`;
    const previewKeys = await sourceStorage.getKeys(previewPrefix);
    if (previewKeys.length) {
      const keysSet = new Set(keys);
      await Promise.all(
        previewKeys.map(async (key2) => {
          const meta = await sourceStorage.getMeta(key2);
          if (meta?.__deleted) {
            keysSet.delete(key2.substring(previewPrefix.length));
          } else {
            keysSet.add(key2.substring(previewPrefix.length));
          }
        })
      );
      keys = Array.from(keysSet);
    }
  }
  return keys.filter(contentIgnorePredicate);
};
const getContentsList = async (event, prefix) => {
  const keys = await getContentsIds(event, prefix);
  const contents = await Promise.all(keys.map((key) => getContent(event, key)));
  return contents;
};
const getContent = async (event, id) => {
  const contentId = id;
  if (!contentIgnorePredicate(id)) {
    return { _id: contentId, body: null };
  }
  if (isPreview(event)) {
    const { key } = getPreview(event);
    const previewId = `preview:${key}:${id}`;
    const draft = await sourceStorage.getItem(previewId);
    if (draft) {
      id = previewId;
    }
  }
  const cached = await cacheParsedStorage.getItem(id);
  if (cached) {
    return cached.parsed;
  }
  const meta = await sourceStorage.getMeta(id);
  const hash$1 = hash({
    meta,
    // Add Content version to the hash, to revalidate the cache on content update
    version: contentConfig.cacheVersion,
    integrity: contentConfig.cacheIntegrity
  });
  if (cached?.hash === hash$1) {
    return cached.parsed;
  }
  const body = await sourceStorage.getItem(id);
  if (body === null) {
    return { _id: contentId, body: null };
  }
  const parsed = await parseContent(contentId, body);
  await cacheParsedStorage.setItem(id, { parsed, hash: hash$1 }).catch(() => {
  });
  return parsed;
};
async function parseContent(id, content, opts = {}) {
  const nitroApp = useNitroApp();
  const options = defu(
    opts,
    {
      markdown: contentConfig.markdown,
      csv: contentConfig.csv,
      yaml: contentConfig.yaml,
      highlight: contentConfig.highlight,
      transformers: transformers,
      pathMeta: {
        defaultLocale: contentConfig.defaultLocale,
        locales: contentConfig.locales
      }
    }
  );
  const file = { _id: id, body: content };
  await nitroApp.hooks.callHook("content:file:beforeParse", file);
  const result = await transformContent(id, file.body, options);
  await nitroApp.hooks.callHook("content:file:afterParse", result);
  return result;
}
const createServerQueryFetch = (event) => (query) => {
  return createPipelineFetcher(() => getIndexedContentsList(event, query))(query);
};
function serverQueryContent(event, query, ...pathParts) {
  const queryBuilder = createQuery(createServerQueryFetch(event), typeof query !== "string" ? query || {} : {});
  let path;
  if (typeof query === "string") {
    path = withLeadingSlash(joinURL(query, ...pathParts));
  }
  const originalParamsFn = queryBuilder.params;
  queryBuilder.params = () => {
    const params = originalParamsFn();
    if (path) {
      params.where = params.where || [];
      if (params.first && (params.where || []).length === 0) {
        params.where.push({ _path: withoutTrailingSlash(path) });
      } else {
        params.where.push({ _path: new RegExp(`^${path.replace(/[-[\]{}()*+.,^$\s/]/g, "\\$&")}`) });
      }
    }
    if (!params.sort?.length) {
      params.sort = [{ _file: 1, $numeric: true }];
    }
    if (contentConfig.locales.length) {
      const queryLocale = params.where?.find((w) => w._locale)?._locale;
      if (!queryLocale) {
        params.where = params.where || [];
        params.where.push({ _locale: contentConfig.defaultLocale });
      }
    }
    return params;
  };
  return queryBuilder;
}

function decodeParams(params = "") {
  const result = {};
  params = params.replace(/\.json$/, "");
  for (const param of params.split(":")) {
    const [key, ...value] = param.split("_");
    result[key] = value.join("_");
  }
  return result;
}
function isBot(user) {
  return user.login.includes("[bot]") || user.login.includes("-bot") || user.login.includes(".bot");
}
function normalizeRelease(release) {
  return {
    name: normalizeReleaseName(release?.name || release?.tag_name),
    tag_name: release?.tag_name,
    date: release?.published_at,
    body: release?.body,
    v: +normalizeReleaseName(release?.tag_name)?.substring(1, 2) || 0,
    url: release?.html_url,
    tarball: release?.tarball_url,
    zipball: release?.zipball_url,
    prerelease: release?.prerelease,
    reactions: release?.reactions,
    author: {
      name: release?.author?.login,
      url: release?.author?.html_url,
      avatar: release?.author?.avatar_url
    }
  };
}
function normalizeReleaseName(name) {
  if (!name) {
    return "";
  }
  name = name.replace("Release ", "");
  if (!name.match(/^[a-zA-Z]/)) {
    name = `v${name}`;
  }
  return name;
}
function githubGraphqlQuery(query, options) {
  const gq = graphql.defaults({
    headers: {
      authorization: `token ${options.token}`
    }
  });
  return gq(query);
}
const parseRelease = async (release, githubConfig) => {
  let parsedRelease;
  try {
    parsedRelease = {
      ...release,
      ...typeof parseContent === "function" && release?.body && release?.name ? await parseContent(`github:${release.name}.md`, release.body, {
        markdown: {
          remarkPlugins: {
            "remark-github": {
              instance: remarkGithub,
              repository: `${githubConfig.owner}/${githubConfig.repo}`
            }
          }
        }
      }) : {}
    };
  } catch (_err) {
    console.warn(`Cannot parse release ${release?.name} [${_err.response?.status || 500}]`);
    return;
  }
  return parsedRelease;
};
function overrideConfig(config, query) {
  return (({ owner, repo, branch, api, token }) => ({ owner, repo, branch, api, token }))(defu$1(query, config));
}
async function fetchRepository({ api, owner, repo, token }) {
  const url = `${api}/repos/${owner}/${repo}`;
  const repository = await $fetch(url, {
    headers: {
      Authorization: token ? `token ${token}` : void 0
    }
  }).catch((_) => {
    return {};
  });
  return repository;
}
async function fetchRepositoryContributors({ max }, { api, owner, repo, token }) {
  let url = `${api}/repos/${owner}/${repo}/contributors`;
  url = withQuery(url, { max });
  const contributors = await $fetch(url, {
    headers: {
      Authorization: token ? `token ${token}` : void 0
    }
  }).catch((_) => {
    return [];
  });
  return contributors.map(({ avatar_url, login }) => ({ avatar_url, login }));
}
async function fetchCommits({ date, source }, { owner, repo, branch, token }) {
  const daysAgo = () => {
    if (date) {
      return date.toISOString();
    }
    const now = new Date();
    now.setDate(now.getDate() - 30);
    return now.toISOString();
  };
  const path = source ? `path: "${source}",` : "";
  const data = await githubGraphqlQuery(
    `
      query {
        repository(owner: "${owner}", name: "${repo}") {
          object(expression: "${branch}") {
            ... on Commit {
              history(since: "${daysAgo()}", ${path}) {
                nodes {
                  oid
                  messageHeadlineHTML
                  authors(first: ${5}) {
                    nodes {
                      user {
                        name
                        avatarUrl
                        login
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    `,
    { token }
  );
  if (!data?.repository?.object?.history?.nodes) {
    return [];
  }
  const commits = data.repository.object.history.nodes.map((node) => ({
    hash: node.oid,
    message: node.messageHeadlineHTML,
    authors: node.authors.nodes.map((author) => author.user).filter((user) => user?.name && !isBot(user))
  }));
  return commits;
}
async function fetchFileContributors({ source, max }, { owner, repo, branch, token }) {
  const data = await githubGraphqlQuery(
    `
  query {
    repository(owner: "${owner}", name: "${repo}") {
      object(expression: "${branch}") {
        ... on Commit {
          history(first: ${max}, path: "${source}") {
            nodes {
              authors(first: ${max}) {
                nodes {
                  user {
                    name
                    avatarUrl
                    login
                  }
                }
              }
            }
          }
        }
      }
    }
  }`,
    { token }
  ).catch((_) => {
  });
  if (!data?.repository?.object?.history?.nodes) {
    return [];
  }
  let users = data.repository.object.history.nodes.map((node) => node.authors.nodes).flat().map((node) => node.user).filter((user) => user && user.name).filter((user) => !isBot(user));
  users = users.reduce((unique, user) => unique.find((u) => u.login === user.login) ? unique : unique.concat(user), []);
  return users.map(({ avatarUrl, name, login }) => ({ avatar_url: avatarUrl, name, login }));
}
async function fetchReleases(query, { api, repo, token, owner }) {
  const page = query?.page || 1;
  const perPage = query?.per_page || 100;
  const last = query?.last || false;
  const tag = query?.tag || false;
  let url = `${api}/repos/${owner}/${repo}/releases`;
  if (tag) {
    url = joinURL(url, "tags", tag);
  } else if (last) {
    url = joinURL(url, "latest");
  } else {
    url = withQuery(url, { per_page: perPage, page });
  }
  const rawReleases = await $fetch(url, {
    headers: {
      Authorization: token ? `token ${token}` : void 0
    }
  }).catch((_) => {
  });
  if (!rawReleases) {
    return last ? {} : [];
  }
  return last || tag ? normalizeRelease(rawReleases) : rawReleases.filter((r) => !r.draft).map(normalizeRelease);
}
async function fetchReadme({ api, owner, repo, token }) {
  const url = `${api}/repos/${owner}/${repo}/readme`;
  const readme = await $fetch(url, {
    headers: {
      Authorization: token ? `token ${token}` : void 0
    }
  }).catch((_) => {
    return {};
  });
  return readme;
}

const moduleConfig$5 = useRuntimeConfig().github;
let handler$5;
if (moduleConfig$5.disableCache) {
  handler$5 = defineEventHandler;
} else {
  handler$5 = defineCachedEventHandler;
}
const _L5pOB0 = handler$5(
  async (event) => {
    const query = decodeParams(event.context.params.query);
    const githubConfig = overrideConfig(moduleConfig$5, query);
    return await fetchRepository(githubConfig);
  },
  {
    maxAge: 60
  }
);

const moduleConfig$4 = useRuntimeConfig().github;
let handler$4;
if (moduleConfig$4.disableCache) {
  handler$4 = defineEventHandler;
} else {
  handler$4 = defineCachedEventHandler;
}
const _9sJWTH = handler$4(
  async (event) => {
    const query = decodeParams(event.context.params.query);
    const githubConfig = overrideConfig(moduleConfig$4, query);
    if (!githubConfig.owner || !githubConfig.repo || !githubConfig.api) {
      return [];
    }
    const readme = await fetchReadme(githubConfig);
    const content = Buffer.from(readme.content ?? "", "base64").toString();
    if (moduleConfig$4.parseContents) {
      return await parseContent(`${githubConfig.owner}:${githubConfig.repo}:readme.md`, content, {
        markdown: {
          remarkPlugins: {
            "remark-github": {
              repository: `${githubConfig.owner}/${githubConfig.repo}`
            }
          }
        }
      });
    }
    return content;
  },
  {
    maxAge: 60
  }
);

const moduleConfig$3 = useRuntimeConfig().github;
let handler$3;
if (moduleConfig$3.disableCache) {
  handler$3 = defineEventHandler;
} else {
  handler$3 = defineCachedEventHandler;
}
const _z4khyj = handler$3(
  async (event) => {
    const query = decodeParams(event.context.params.query);
    const githubConfig = overrideConfig(moduleConfig$3, query);
    if (!githubConfig.owner || !githubConfig.repo || !githubConfig.api) {
      return [];
    }
    let releases = await fetchReleases(query, githubConfig);
    if (!releases) {
      return;
    }
    if (moduleConfig$3.parseContents) {
      if (Array.isArray(releases)) {
        releases = await Promise.all(releases.map((release) => parseRelease(release, githubConfig)));
      } else {
        return await parseRelease(releases, githubConfig);
      }
    }
    return (releases || []).sort((a, b) => a.v !== b.v ? b.v - a.v : a.date - b.date).filter(Boolean);
  },
  {
    maxAge: 60
  }
);

const moduleConfig$2 = useRuntimeConfig().github;
let handler$2;
if (moduleConfig$2.disableCache) {
  handler$2 = defineEventHandler;
} else {
  handler$2 = defineCachedEventHandler;
}
const _DDzVBM = handler$2(
  async (event) => {
    const query = decodeParams(event.context.params.query);
    const githubConfig = overrideConfig(moduleConfig$2, query);
    return await fetchRepositoryContributors(query, githubConfig);
  },
  {
    maxAge: 60
  }
);

const moduleConfig$1 = useRuntimeConfig().github;
let handler$1;
if (moduleConfig$1.disableCache) {
  handler$1 = defineEventHandler;
} else {
  handler$1 = defineCachedEventHandler;
}
const _xeNqDR = handler$1(
  async (event) => {
    const query = decodeParams(event.context.params.query);
    const githubConfig = overrideConfig(moduleConfig$1, query);
    query.max = query.max ? Number(query.max) : moduleConfig$1.maxContributors;
    return await fetchFileContributors(query, githubConfig);
  },
  {
    maxAge: 60
  }
);

const moduleConfig = useRuntimeConfig().github ?? {};
let handler;
if (moduleConfig.disableCache) {
  handler = defineEventHandler;
} else {
  handler = defineCachedEventHandler;
}
const _Mminnp = handler(
  async (event) => {
    const query = decodeParams(event.context.params.query);
    const normalizedQuery = {
      ...query,
      date: query.date ? new Date(query.date) : void 0
    };
    const githubConfig = overrideConfig(moduleConfig, query);
    return await fetchCommits(normalizedQuery, githubConfig);
  },
  {
    maxAge: 60
  }
);

var version = "0.7.2";

const components = {
  "ExampleCard": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/components/content/Example/ExampleCard.vue",
    "pascalName": "ExampleCard",
    "kebabName": "example-card",
    "chunkName": "components/example-card",
    "shortPath": "components/content/Example/ExampleCard.vue",
    "export": "default",
    "fullPath": "/Users/davanedavis/Projects/ncb/ob-embedded-finance-customer-mobile-app/frontier/docs/components/content/Example/ExampleCard.vue",
    "meta": {
      "props": [],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": []
    }
  },
  "ExampleHero": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/components/content/Example/ExampleHero.vue",
    "pascalName": "ExampleHero",
    "kebabName": "example-hero",
    "chunkName": "components/example-hero",
    "shortPath": "components/content/Example/ExampleHero.vue",
    "export": "default",
    "fullPath": "/Users/davanedavis/Projects/ncb/ob-embedded-finance-customer-mobile-app/frontier/docs/components/content/Example/ExampleHero.vue",
    "meta": {
      "props": [],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        },
        {
          "name": "description",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": []
    }
  },
  "ExampleIconCard": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/components/content/Example/ExampleIconCard.vue",
    "pascalName": "ExampleIconCard",
    "kebabName": "example-icon-card",
    "chunkName": "components/example-icon-card",
    "shortPath": "components/content/Example/ExampleIconCard.vue",
    "export": "default",
    "fullPath": "/Users/davanedavis/Projects/ncb/ob-embedded-finance-customer-mobile-app/frontier/docs/components/content/Example/ExampleIconCard.vue",
    "meta": {
      "props": [
        {
          "name": "description",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          },
          "default": "\"Default description\""
        },
        {
          "name": "title",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          },
          "default": "\"Default title\""
        },
        {
          "name": "icon",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          },
          "default": "\"IconMarkdown\""
        }
      ],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "ExampleMultiselect": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/components/content/Example/ExampleMultiselect.vue",
    "pascalName": "ExampleMultiselect",
    "kebabName": "example-multiselect",
    "chunkName": "components/example-multiselect",
    "shortPath": "components/content/Example/ExampleMultiselect.vue",
    "export": "default",
    "fullPath": "/Users/davanedavis/Projects/ncb/ob-embedded-finance-customer-mobile-app/frontier/docs/components/content/Example/ExampleMultiselect.vue",
    "meta": {
      "props": [
        {
          "name": "options",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | unknown[] | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | unknown[] | undefined",
            "schema": [
              "undefined",
              "string",
              {
                "kind": "array",
                "type": "unknown[]",
                "schema": [
                  "unknown"
                ]
              }
            ]
          },
          "default": "[]"
        }
      ],
      "slots": [],
      "events": [],
      "exposed": [
        {
          "name": "options",
          "type": "string | unknown[]",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "string | unknown[]",
            "schema": [
              "string",
              {
                "kind": "array",
                "type": "unknown[]",
                "schema": [
                  "unknown"
                ]
              }
            ]
          }
        },
        {
          "name": "value",
          "type": "null",
          "description": "",
          "schema": "null"
        }
      ]
    }
  },
  "ExampleTheTitle": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/components/content/Example/ExampleTheTitle.vue",
    "pascalName": "ExampleTheTitle",
    "kebabName": "example-the-title",
    "chunkName": "components/example-the-title",
    "shortPath": "components/content/Example/ExampleTheTitle.vue",
    "export": "default",
    "fullPath": "/Users/davanedavis/Projects/ncb/ob-embedded-finance-customer-mobile-app/frontier/docs/components/content/Example/ExampleTheTitle.vue",
    "meta": {
      "props": [],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": []
    }
  },
  "HeroAnnouncement": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/components/content/HeroAnnouncement.vue",
    "pascalName": "HeroAnnouncement",
    "kebabName": "hero-announcement",
    "chunkName": "components/hero-announcement",
    "shortPath": "components/content/HeroAnnouncement.vue",
    "export": "default",
    "fullPath": "/Users/davanedavis/Projects/ncb/ob-embedded-finance-customer-mobile-app/frontier/docs/components/content/HeroAnnouncement.vue",
    "meta": {
      "props": [
        {
          "name": "to",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          },
          "default": "\"\""
        },
        {
          "name": "label",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          },
          "default": "\"\""
        }
      ],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "IconMarkdown": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/components/content/IconMarkdown.vue",
    "pascalName": "IconMarkdown",
    "kebabName": "icon-markdown",
    "chunkName": "components/icon-markdown",
    "shortPath": "components/content/IconMarkdown.vue",
    "export": "default",
    "fullPath": "/Users/davanedavis/Projects/ncb/ob-embedded-finance-customer-mobile-app/frontier/docs/components/content/IconMarkdown.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "Logo": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/components/content/Logo.vue",
    "pascalName": "Logo",
    "kebabName": "logo",
    "chunkName": "components/logo",
    "shortPath": "components/content/Logo.vue",
    "export": "default",
    "fullPath": "/Users/davanedavis/Projects/ncb/ob-embedded-finance-customer-mobile-app/frontier/docs/components/content/Logo.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "MyButton": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/components/content/MyButton.vue",
    "pascalName": "MyButton",
    "kebabName": "my-button",
    "chunkName": "components/my-button",
    "shortPath": "components/content/MyButton.vue",
    "export": "default",
    "fullPath": "/Users/davanedavis/Projects/ncb/ob-embedded-finance-customer-mobile-app/frontier/docs/components/content/MyButton.vue",
    "meta": {
      "props": [
        {
          "name": "type",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          },
          "default": "\"info\""
        }
      ],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": []
    }
  },
  "PropInspector": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/components/content/PropInspector.vue",
    "pascalName": "PropInspector",
    "kebabName": "prop-inspector",
    "chunkName": "components/prop-inspector",
    "shortPath": "components/content/PropInspector.vue",
    "export": "default",
    "fullPath": "/Users/davanedavis/Projects/ncb/ob-embedded-finance-customer-mobile-app/frontier/docs/components/content/PropInspector.vue",
    "meta": {
      "props": [
        {
          "name": "prop",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "any",
          "schema": "any"
        }
      ],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "ReadMore": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/components/content/ReadMore.vue",
    "pascalName": "ReadMore",
    "kebabName": "read-more",
    "chunkName": "components/read-more",
    "shortPath": "components/content/ReadMore.vue",
    "export": "default",
    "fullPath": "/Users/davanedavis/Projects/ncb/ob-embedded-finance-customer-mobile-app/frontier/docs/components/content/ReadMore.vue",
    "meta": {
      "props": [
        {
          "name": "link",
          "global": false,
          "description": "",
          "tags": [],
          "required": true,
          "type": "string",
          "schema": "string"
        },
        {
          "name": "title",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          },
          "default": "undefined"
        }
      ],
      "slots": [],
      "events": [],
      "exposed": [
        {
          "name": "link",
          "type": "string",
          "description": "",
          "schema": "string"
        },
        {
          "name": "title",
          "type": "string | undefined",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          }
        }
      ]
    }
  },
  "AppFooter": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/docus/components/app/AppFooter.vue",
    "pascalName": "AppFooter",
    "kebabName": "app-footer",
    "chunkName": "components/app-footer",
    "shortPath": "node_modules/@nuxt-themes/docus/components/app/AppFooter.vue",
    "export": "default",
    "fullPath": "/Users/davanedavis/Projects/ncb/ob-embedded-finance-customer-mobile-app/frontier/docs/node_modules/@nuxt-themes/docus/components/app/AppFooter.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "AppHeader": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/docus/components/app/AppHeader.vue",
    "pascalName": "AppHeader",
    "kebabName": "app-header",
    "chunkName": "components/app-header",
    "shortPath": "node_modules/@nuxt-themes/docus/components/app/AppHeader.vue",
    "export": "default",
    "fullPath": "/Users/davanedavis/Projects/ncb/ob-embedded-finance-customer-mobile-app/frontier/docs/node_modules/@nuxt-themes/docus/components/app/AppHeader.vue",
    "meta": {
      "props": [
        {
          "name": "length",
          "global": false,
          "description": "Gets the length of the array. This is a number one higher than the highest element defined in an array.",
          "tags": [],
          "required": true,
          "type": "number | Prop<unknown, unknown> | null | undefined",
          "schema": {
            "kind": "enum",
            "type": "number | Prop<unknown, unknown> | null | undefined",
            "schema": [
              "undefined",
              "null",
              "number",
              "PropOptions<unknown, unknown>",
              {
                "kind": "object",
                "type": "new (...args: any[]) => {}",
                "schema": {}
              },
              {
                "kind": "event",
                "type": "(): unknown"
              },
              {
                "kind": "array",
                "type": "PropConstructor<unknown>[]",
                "schema": [
                  {
                    "kind": "enum",
                    "type": "PropConstructor<unknown>",
                    "schema": [
                      "new (...args: any[]) => {}",
                      "() => unknown"
                    ]
                  }
                ]
              }
            ]
          }
        },
        {
          "name": "concat",
          "global": false,
          "description": "Combines two or more arrays.",
          "tags": [
            {
              "name": "param",
              "text": "items Additional items to add to the end of array1."
            },
            {
              "name": "param",
              "text": "items Additional items to add to the end of array1."
            }
          ],
          "required": true,
          "type": "Prop<unknown, unknown> | { (...items: ConcatArray<string>[]): string[]; (...items: (string | ConcatArray<string>)[]): string[]; } | { (...items: ConcatArray<string>[]): string[]; (...items: (string | ConcatArray<...>)[]): string[]; } | { ...; } | null | undefined",
          "schema": {
            "kind": "enum",
            "type": "Prop<unknown, unknown> | { (...items: ConcatArray<string>[]): string[]; (...items: (string | ConcatArray<string>)[]): string[]; } | { (...items: ConcatArray<string>[]): string[]; (...items: (string | ConcatArray<...>)[]): string[]; } | { ...; } | null | undefined",
            "schema": [
              "undefined",
              "null",
              "PropOptions<unknown, unknown>",
              {
                "kind": "object",
                "type": "new (...args: any[]) => {}",
                "schema": {}
              },
              {
                "kind": "event",
                "type": "(): unknown"
              },
              {
                "kind": "array",
                "type": "PropConstructor<unknown>[]",
                "schema": [
                  {
                    "kind": "enum",
                    "type": "PropConstructor<unknown>",
                    "schema": [
                      "new (...args: any[]) => {}",
                      "() => unknown"
                    ]
                  }
                ]
              },
              "{ (...items: ConcatArray<string>[]): string[]; (...items: (string | ConcatArray<string>)[]): string[]; }",
              "{ (...items: ConcatArray<string>[]): string[]; (...items: (string | ConcatArray<string>)[]): string[]; }",
              "{ (...items: ConcatArray<string>[]): string[]; (...items: (string | ConcatArray<string>)[]): string[]; }"
            ]
          }
        },
        {
          "name": "join",
          "global": false,
          "description": "Adds all the elements of an array separated by the specified separator string.",
          "tags": [
            {
              "name": "param",
              "text": "separator A string used to separate one element of an array from the next in the resulting String. If omitted, the array elements are separated with a comma."
            }
          ],
          "required": true,
          "type": "Prop<unknown, unknown> | ((separator?: string | undefined) => string) | ((separator?: string | undefined) => string) | ((separator?: string | undefined) => string) | null | undefined",
          "schema": {
            "kind": "enum",
            "type": "Prop<unknown, unknown> | ((separator?: string | undefined) => string) | ((separator?: string | undefined) => string) | ((separator?: string | undefined) => string) | null | undefined",
            "schema": [
              "undefined",
              "null",
              "PropOptions<unknown, unknown>",
              {
                "kind": "object",
                "type": "new (...args: any[]) => {}",
                "schema": {}
              },
              {
                "kind": "event",
                "type": "(): unknown"
              },
              {
                "kind": "array",
                "type": "PropConstructor<unknown>[]",
                "schema": [
                  {
                    "kind": "enum",
                    "type": "PropConstructor<unknown>",
                    "schema": [
                      "new (...args: any[]) => {}",
                      "() => unknown"
                    ]
                  }
                ]
              },
              {
                "kind": "event",
                "type": "(separator?: string | undefined): string",
                "schema": []
              },
              {
                "kind": "event",
                "type": "(separator?: string | undefined): string",
                "schema": []
              },
              {
                "kind": "event",
                "type": "(separator?: string | undefined): string",
                "schema": []
              }
            ]
          }
        },
        {
          "name": "slice",
          "global": false,
          "description": "Returns a section of an array.",
          "tags": [
            {
              "name": "param",
              "text": "start The beginning of the specified portion of the array."
            },
            {
              "name": "param",
              "text": "end The end of the specified portion of the array. This is exclusive of the element at the index 'end'."
            }
          ],
          "required": true,
          "type": "Prop<unknown, unknown> | ((start?: number | undefined, end?: number | undefined) => string[]) | ((start?: number | undefined, end?: number | undefined) => string[]) | ((start?: number | undefined, end?: number | undefined) => string[]) | null | undefined",
          "schema": {
            "kind": "enum",
            "type": "Prop<unknown, unknown> | ((start?: number | undefined, end?: number | undefined) => string[]) | ((start?: number | undefined, end?: number | undefined) => string[]) | ((start?: number | undefined, end?: number | undefined) => string[]) | null | undefined",
            "schema": [
              "undefined",
              "null",
              "PropOptions<unknown, unknown>",
              {
                "kind": "object",
                "type": "new (...args: any[]) => {}",
                "schema": {}
              },
              {
                "kind": "event",
                "type": "(): unknown"
              },
              {
                "kind": "array",
                "type": "PropConstructor<unknown>[]",
                "schema": [
                  {
                    "kind": "enum",
                    "type": "PropConstructor<unknown>",
                    "schema": [
                      "new (...args: any[]) => {}",
                      "() => unknown"
                    ]
                  }
                ]
              },
              {
                "kind": "event",
                "type": "(start?: number | undefined, end?: number | undefined): string[]",
                "schema": []
              },
              {
                "kind": "event",
                "type": "(start?: number | undefined, end?: number | undefined): string[]",
                "schema": []
              },
              {
                "kind": "event",
                "type": "(start?: number | undefined, end?: number | undefined): string[]",
                "schema": []
              }
            ]
          }
        },
        {
          "name": "indexOf",
          "global": false,
          "description": "Returns the index of the first occurrence of a value in an array.",
          "tags": [
            {
              "name": "param",
              "text": "searchElement The value to locate in the array."
            },
            {
              "name": "param",
              "text": "fromIndex The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0."
            }
          ],
          "required": true,
          "type": "Prop<unknown, unknown> | ((searchElement: string, fromIndex?: number | undefined) => number) | ((searchElement: string, fromIndex?: number | undefined) => number) | ((searchElement: string, fromIndex?: number | undefined) => number) | null | undefined",
          "schema": {
            "kind": "enum",
            "type": "Prop<unknown, unknown> | ((searchElement: string, fromIndex?: number | undefined) => number) | ((searchElement: string, fromIndex?: number | undefined) => number) | ((searchElement: string, fromIndex?: number | undefined) => number) | null | undefined",
            "schema": [
              "undefined",
              "null",
              "PropOptions<unknown, unknown>",
              {
                "kind": "object",
                "type": "new (...args: any[]) => {}",
                "schema": {}
              },
              {
                "kind": "event",
                "type": "(): unknown"
              },
              {
                "kind": "array",
                "type": "PropConstructor<unknown>[]",
                "schema": [
                  {
                    "kind": "enum",
                    "type": "PropConstructor<unknown>",
                    "schema": [
                      "new (...args: any[]) => {}",
                      "() => unknown"
                    ]
                  }
                ]
              },
              {
                "kind": "event",
                "type": "(searchElement: string, fromIndex?: number | undefined): number",
                "schema": []
              },
              {
                "kind": "event",
                "type": "(searchElement: string, fromIndex?: number | undefined): number",
                "schema": []
              },
              {
                "kind": "event",
                "type": "(searchElement: string, fromIndex?: number | undefined): number",
                "schema": []
              }
            ]
          }
        },
        {
          "name": "lastIndexOf",
          "global": false,
          "description": "Returns the index of the last occurrence of a specified value in an array.",
          "tags": [
            {
              "name": "param",
              "text": "searchElement The value to locate in the array."
            },
            {
              "name": "param",
              "text": "fromIndex The array index at which to begin the search. If fromIndex is omitted, the search starts at the last index in the array."
            }
          ],
          "required": true,
          "type": "Prop<unknown, unknown> | ((searchElement: string, fromIndex?: number | undefined) => number) | ((searchElement: string, fromIndex?: number | undefined) => number) | ((searchElement: string, fromIndex?: number | undefined) => number) | null | undefined",
          "schema": {
            "kind": "enum",
            "type": "Prop<unknown, unknown> | ((searchElement: string, fromIndex?: number | undefined) => number) | ((searchElement: string, fromIndex?: number | undefined) => number) | ((searchElement: string, fromIndex?: number | undefined) => number) | null | undefined",
            "schema": [
              "undefined",
              "null",
              "PropOptions<unknown, unknown>",
              {
                "kind": "object",
                "type": "new (...args: any[]) => {}",
                "schema": {}
              },
              {
                "kind": "event",
                "type": "(): unknown"
              },
              {
                "kind": "array",
                "type": "PropConstructor<unknown>[]",
                "schema": [
                  {
                    "kind": "enum",
                    "type": "PropConstructor<unknown>",
                    "schema": [
                      "new (...args: any[]) => {}",
                      "() => unknown"
                    ]
                  }
                ]
              },
              {
                "kind": "event",
                "type": "(searchElement: string, fromIndex?: number | undefined): number",
                "schema": []
              },
              {
                "kind": "event",
                "type": "(searchElement: string, fromIndex?: number | undefined): number",
                "schema": []
              },
              {
                "kind": "event",
                "type": "(searchElement: string, fromIndex?: number | undefined): number",
                "schema": []
              }
            ]
          }
        },
        {
          "name": "every",
          "global": false,
          "description": "Determines whether all the members of an array satisfy the specified test.",
          "tags": [
            {
              "name": "param",
              "text": "predicate A function that accepts up to three arguments. The every method calls\r\nthe predicate function for each element in the array until the predicate returns a value\r\nwhich is coercible to the Boolean value false, or until the end of the array."
            },
            {
              "name": "param",
              "text": "thisArg An object to which the this keyword can refer in the predicate function.\r\nIf thisArg is omitted, undefined is used as the this value."
            },
            {
              "name": "param",
              "text": "predicate A function that accepts up to three arguments. The every method calls\r\nthe predicate function for each element in the array until the predicate returns a value\r\nwhich is coercible to the Boolean value false, or until the end of the array."
            },
            {
              "name": "param",
              "text": "thisArg An object to which the this keyword can refer in the predicate function.\r\nIf thisArg is omitted, undefined is used as the this value."
            }
          ],
          "required": true,
          "type": "Prop<unknown, unknown> | { <S extends string>(predicate: (value: string, index: number, array: readonly string[]) => value is S, thisArg?: any): this is readonly S[]; (predicate: (value: string, index: number, array: readonly string[]) => unknown, thisArg?: any): boolean; } | { ...; } | { ...; } | null | undefined",
          "schema": {
            "kind": "enum",
            "type": "Prop<unknown, unknown> | { <S extends string>(predicate: (value: string, index: number, array: readonly string[]) => value is S, thisArg?: any): this is readonly S[]; (predicate: (value: string, index: number, array: readonly string[]) => unknown, thisArg?: any): boolean; } | { ...; } | { ...; } | null | undefined",
            "schema": [
              "undefined",
              "null",
              "PropOptions<unknown, unknown>",
              {
                "kind": "object",
                "type": "new (...args: any[]) => {}",
                "schema": {}
              },
              {
                "kind": "event",
                "type": "(): unknown"
              },
              {
                "kind": "array",
                "type": "PropConstructor<unknown>[]",
                "schema": [
                  {
                    "kind": "enum",
                    "type": "PropConstructor<unknown>",
                    "schema": [
                      "new (...args: any[]) => {}",
                      "() => unknown"
                    ]
                  }
                ]
              },
              "{ <S extends string>(predicate: (value: string, index: number, array: readonly string[]) => value is S, thisArg?: any): this is readonly S[]; (predicate: (value: string, index: number, array: readonly string[]) => unknown, thisArg?: any): boolean; }",
              "{ <S extends string>(predicate: (value: string, index: number, array: readonly string[]) => value is S, thisArg?: any): this is readonly S[]; (predicate: (value: string, index: number, array: readonly string[]) => unknown, thisArg?: any): boolean; }",
              "{ <S extends string>(predicate: (value: string, index: number, array: readonly string[]) => value is S, thisArg?: any): this is readonly S[]; (predicate: (value: string, index: number, array: readonly string[]) => unknown, thisArg?: any): boolean; }"
            ]
          }
        },
        {
          "name": "some",
          "global": false,
          "description": "Determines whether the specified callback function returns true for any element of an array.",
          "tags": [
            {
              "name": "param",
              "text": "predicate A function that accepts up to three arguments. The some method calls\r\nthe predicate function for each element in the array until the predicate returns a value\r\nwhich is coercible to the Boolean value true, or until the end of the array."
            },
            {
              "name": "param",
              "text": "thisArg An object to which the this keyword can refer in the predicate function.\r\nIf thisArg is omitted, undefined is used as the this value."
            }
          ],
          "required": true,
          "type": "Prop<unknown, unknown> | ((predicate: (value: string, index: number, array: readonly string[]) => unknown, thisArg?: any) => boolean) | ((predicate: (value: string, index: number, array: readonly string[]) => unknown, thisArg?: any) => boolean) | ((predicate: (value: string, index: number, array: readonly string[]) ...",
          "schema": {
            "kind": "enum",
            "type": "Prop<unknown, unknown> | ((predicate: (value: string, index: number, array: readonly string[]) => unknown, thisArg?: any) => boolean) | ((predicate: (value: string, index: number, array: readonly string[]) => unknown, thisArg?: any) => boolean) | ((predicate: (value: string, index: number, array: readonly string[]) ...",
            "schema": [
              "undefined",
              "null",
              "PropOptions<unknown, unknown>",
              {
                "kind": "object",
                "type": "new (...args: any[]) => {}",
                "schema": {}
              },
              {
                "kind": "event",
                "type": "(): unknown"
              },
              {
                "kind": "array",
                "type": "PropConstructor<unknown>[]",
                "schema": [
                  {
                    "kind": "enum",
                    "type": "PropConstructor<unknown>",
                    "schema": [
                      "new (...args: any[]) => {}",
                      "() => unknown"
                    ]
                  }
                ]
              },
              {
                "kind": "event",
                "type": "(predicate: (value: string, index: number, array: readonly string[]) => unknown, thisArg?: any): boolean",
                "schema": []
              },
              {
                "kind": "event",
                "type": "(predicate: (value: string, index: number, array: readonly string[]) => unknown, thisArg?: any): boolean",
                "schema": []
              },
              {
                "kind": "event",
                "type": "(predicate: (value: string, index: number, array: readonly string[]) => unknown, thisArg?: any): boolean",
                "schema": []
              }
            ]
          }
        },
        {
          "name": "forEach",
          "global": false,
          "description": "Performs the specified action for each element in an array.",
          "tags": [
            {
              "name": "param",
              "text": "callbackfn A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array."
            },
            {
              "name": "param",
              "text": "thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value."
            }
          ],
          "required": true,
          "type": "Prop<unknown, unknown> | ((callbackfn: (value: string, index: number, array: readonly string[]) => void, thisArg?: any) => void) | ((callbackfn: (value: string, index: number, array: readonly string[]) => void, thisArg?: any) => void) | ((callbackfn: (value: string, index: number, array: readonly string[]) => void, ...",
          "schema": {
            "kind": "enum",
            "type": "Prop<unknown, unknown> | ((callbackfn: (value: string, index: number, array: readonly string[]) => void, thisArg?: any) => void) | ((callbackfn: (value: string, index: number, array: readonly string[]) => void, thisArg?: any) => void) | ((callbackfn: (value: string, index: number, array: readonly string[]) => void, ...",
            "schema": [
              "undefined",
              "null",
              "PropOptions<unknown, unknown>",
              {
                "kind": "object",
                "type": "new (...args: any[]) => {}",
                "schema": {}
              },
              {
                "kind": "event",
                "type": "(): unknown"
              },
              {
                "kind": "array",
                "type": "PropConstructor<unknown>[]",
                "schema": [
                  {
                    "kind": "enum",
                    "type": "PropConstructor<unknown>",
                    "schema": [
                      "new (...args: any[]) => {}",
                      "() => unknown"
                    ]
                  }
                ]
              },
              {
                "kind": "event",
                "type": "(callbackfn: (value: string, index: number, array: readonly string[]) => void, thisArg?: any): void",
                "schema": []
              },
              {
                "kind": "event",
                "type": "(callbackfn: (value: string, index: number, array: readonly string[]) => void, thisArg?: any): void",
                "schema": []
              },
              {
                "kind": "event",
                "type": "(callbackfn: (value: string, index: number, array: readonly string[]) => void, thisArg?: any): void",
                "schema": []
              }
            ]
          }
        },
        {
          "name": "map",
          "global": false,
          "description": "Calls a defined callback function on each element of an array, and returns an array that contains the results.",
          "tags": [
            {
              "name": "param",
              "text": "callbackfn A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array."
            },
            {
              "name": "param",
              "text": "thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value."
            }
          ],
          "required": true,
          "type": "Prop<unknown, unknown> | (<U>(callbackfn: (value: string, index: number, array: readonly string[]) => U, thisArg?: any) => U[]) | (<U>(callbackfn: (value: string, index: number, array: readonly string[]) => U, thisArg?: any) => U[]) | (<U>(callbackfn: (value: string, index: number, array: readonly string[]) => U, th...",
          "schema": {
            "kind": "enum",
            "type": "Prop<unknown, unknown> | (<U>(callbackfn: (value: string, index: number, array: readonly string[]) => U, thisArg?: any) => U[]) | (<U>(callbackfn: (value: string, index: number, array: readonly string[]) => U, thisArg?: any) => U[]) | (<U>(callbackfn: (value: string, index: number, array: readonly string[]) => U, th...",
            "schema": [
              "undefined",
              "null",
              "PropOptions<unknown, unknown>",
              {
                "kind": "object",
                "type": "new (...args: any[]) => {}",
                "schema": {}
              },
              {
                "kind": "event",
                "type": "(): unknown"
              },
              {
                "kind": "array",
                "type": "PropConstructor<unknown>[]",
                "schema": [
                  {
                    "kind": "enum",
                    "type": "PropConstructor<unknown>",
                    "schema": [
                      "new (...args: any[]) => {}",
                      "() => unknown"
                    ]
                  }
                ]
              },
              {
                "kind": "event",
                "type": "<U>(callbackfn: (value: string, index: number, array: readonly string[]) => U, thisArg?: any): U[]",
                "schema": []
              },
              {
                "kind": "event",
                "type": "<U>(callbackfn: (value: string, index: number, array: readonly string[]) => U, thisArg?: any): U[]",
                "schema": []
              },
              {
                "kind": "event",
                "type": "<U>(callbackfn: (value: string, index: number, array: readonly string[]) => U, thisArg?: any): U[]",
                "schema": []
              }
            ]
          }
        },
        {
          "name": "filter",
          "global": false,
          "description": "Returns the elements of an array that meet the condition specified in a callback function.",
          "tags": [
            {
              "name": "param",
              "text": "predicate A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array."
            },
            {
              "name": "param",
              "text": "thisArg An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value."
            },
            {
              "name": "param",
              "text": "predicate A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array."
            },
            {
              "name": "param",
              "text": "thisArg An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value."
            }
          ],
          "required": true,
          "type": "Prop<unknown, unknown> | { <S extends string>(predicate: (value: string, index: number, array: readonly string[]) => value is S, thisArg?: any): S[]; (predicate: (value: string, index: number, array: readonly string[]) => unknown, thisArg?: any): string[]; } | { ...; } | { ...; } | null | undefined",
          "schema": {
            "kind": "enum",
            "type": "Prop<unknown, unknown> | { <S extends string>(predicate: (value: string, index: number, array: readonly string[]) => value is S, thisArg?: any): S[]; (predicate: (value: string, index: number, array: readonly string[]) => unknown, thisArg?: any): string[]; } | { ...; } | { ...; } | null | undefined",
            "schema": [
              "undefined",
              "null",
              "PropOptions<unknown, unknown>",
              {
                "kind": "object",
                "type": "new (...args: any[]) => {}",
                "schema": {}
              },
              {
                "kind": "event",
                "type": "(): unknown"
              },
              {
                "kind": "array",
                "type": "PropConstructor<unknown>[]",
                "schema": [
                  {
                    "kind": "enum",
                    "type": "PropConstructor<unknown>",
                    "schema": [
                      "new (...args: any[]) => {}",
                      "() => unknown"
                    ]
                  }
                ]
              },
              "{ <S extends string>(predicate: (value: string, index: number, array: readonly string[]) => value is S, thisArg?: any): S[]; (predicate: (value: string, index: number, array: readonly string[]) => unknown, thisArg?: any): string[]; }",
              "{ <S extends string>(predicate: (value: string, index: number, array: readonly string[]) => value is S, thisArg?: any): S[]; (predicate: (value: string, index: number, array: readonly string[]) => unknown, thisArg?: any): string[]; }",
              "{ <S extends string>(predicate: (value: string, index: number, array: readonly string[]) => value is S, thisArg?: any): S[]; (predicate: (value: string, index: number, array: readonly string[]) => unknown, thisArg?: any): string[]; }"
            ]
          }
        },
        {
          "name": "reduce",
          "global": false,
          "description": "Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.",
          "tags": [
            {
              "name": "param",
              "text": "callbackfn A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array."
            },
            {
              "name": "param",
              "text": "initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value."
            },
            {
              "name": "param",
              "text": "callbackfn A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array."
            },
            {
              "name": "param",
              "text": "initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value."
            }
          ],
          "required": true,
          "type": "Prop<unknown, unknown> | { (callbackfn: (previousValue: string, currentValue: string, currentIndex: number, array: readonly string[]) => string): string; (callbackfn: (previousValue: string, currentValue: string, currentIndex: number, array: readonly string[]) => string, initialValue: string): string; <U>(callbackfn...",
          "schema": {
            "kind": "enum",
            "type": "Prop<unknown, unknown> | { (callbackfn: (previousValue: string, currentValue: string, currentIndex: number, array: readonly string[]) => string): string; (callbackfn: (previousValue: string, currentValue: string, currentIndex: number, array: readonly string[]) => string, initialValue: string): string; <U>(callbackfn...",
            "schema": [
              "undefined",
              "null",
              "PropOptions<unknown, unknown>",
              {
                "kind": "object",
                "type": "new (...args: any[]) => {}",
                "schema": {}
              },
              {
                "kind": "event",
                "type": "(): unknown"
              },
              {
                "kind": "array",
                "type": "PropConstructor<unknown>[]",
                "schema": [
                  {
                    "kind": "enum",
                    "type": "PropConstructor<unknown>",
                    "schema": [
                      "new (...args: any[]) => {}",
                      "() => unknown"
                    ]
                  }
                ]
              },
              "{ (callbackfn: (previousValue: string, currentValue: string, currentIndex: number, array: readonly string[]) => string): string; (callbackfn: (previousValue: string, currentValue: string, currentIndex: number, array: readonly string[]) => string, initialValue: string): string; <U>(callbackfn: (previousValue: U, curr...",
              "{ (callbackfn: (previousValue: string, currentValue: string, currentIndex: number, array: readonly string[]) => string): string; (callbackfn: (previousValue: string, currentValue: string, currentIndex: number, array: readonly string[]) => string, initialValue: string): string; <U>(callbackfn: (previousValue: U, curr...",
              "{ (callbackfn: (previousValue: string, currentValue: string, currentIndex: number, array: readonly string[]) => string): string; (callbackfn: (previousValue: string, currentValue: string, currentIndex: number, array: readonly string[]) => string, initialValue: string): string; <U>(callbackfn: (previousValue: U, curr..."
            ]
          }
        },
        {
          "name": "reduceRight",
          "global": false,
          "description": "Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.",
          "tags": [
            {
              "name": "param",
              "text": "callbackfn A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array."
            },
            {
              "name": "param",
              "text": "initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value."
            },
            {
              "name": "param",
              "text": "callbackfn A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array."
            },
            {
              "name": "param",
              "text": "initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value."
            }
          ],
          "required": true,
          "type": "Prop<unknown, unknown> | { (callbackfn: (previousValue: string, currentValue: string, currentIndex: number, array: readonly string[]) => string): string; (callbackfn: (previousValue: string, currentValue: string, currentIndex: number, array: readonly string[]) => string, initialValue: string): string; <U>(callbackfn...",
          "schema": {
            "kind": "enum",
            "type": "Prop<unknown, unknown> | { (callbackfn: (previousValue: string, currentValue: string, currentIndex: number, array: readonly string[]) => string): string; (callbackfn: (previousValue: string, currentValue: string, currentIndex: number, array: readonly string[]) => string, initialValue: string): string; <U>(callbackfn...",
            "schema": [
              "undefined",
              "null",
              "PropOptions<unknown, unknown>",
              {
                "kind": "object",
                "type": "new (...args: any[]) => {}",
                "schema": {}
              },
              {
                "kind": "event",
                "type": "(): unknown"
              },
              {
                "kind": "array",
                "type": "PropConstructor<unknown>[]",
                "schema": [
                  {
                    "kind": "enum",
                    "type": "PropConstructor<unknown>",
                    "schema": [
                      "new (...args: any[]) => {}",
                      "() => unknown"
                    ]
                  }
                ]
              },
              "{ (callbackfn: (previousValue: string, currentValue: string, currentIndex: number, array: readonly string[]) => string): string; (callbackfn: (previousValue: string, currentValue: string, currentIndex: number, array: readonly string[]) => string, initialValue: string): string; <U>(callbackfn: (previousValue: U, curr...",
              "{ (callbackfn: (previousValue: string, currentValue: string, currentIndex: number, array: readonly string[]) => string): string; (callbackfn: (previousValue: string, currentValue: string, currentIndex: number, array: readonly string[]) => string, initialValue: string): string; <U>(callbackfn: (previousValue: U, curr...",
              "{ (callbackfn: (previousValue: string, currentValue: string, currentIndex: number, array: readonly string[]) => string): string; (callbackfn: (previousValue: string, currentValue: string, currentIndex: number, array: readonly string[]) => string, initialValue: string): string; <U>(callbackfn: (previousValue: U, curr..."
            ]
          }
        },
        {
          "name": "find",
          "global": false,
          "description": "Returns the value of the first element in the array where predicate is true, and undefined\r\notherwise.",
          "tags": [
            {
              "name": "param",
              "text": "predicate find calls predicate once for each element of the array, in ascending\r\norder, until it finds one where predicate returns true. If such an element is found, find\r\nimmediately returns that element value. Otherwise, find returns undefined."
            },
            {
              "name": "param",
              "text": "thisArg If provided, it will be used as the this value for each invocation of\r\npredicate. If it is not provided, undefined is used instead."
            }
          ],
          "required": true,
          "type": "Prop<unknown, unknown> | { <S extends string>(predicate: (this: void, value: string, index: number, obj: readonly string[]) => value is S, thisArg?: any): S | undefined; (predicate: (value: string, index: number, obj: readonly string[]) => unknown, thisArg?: any): string | undefined; } | { ...; } | { ...; } | null |...",
          "schema": {
            "kind": "enum",
            "type": "Prop<unknown, unknown> | { <S extends string>(predicate: (this: void, value: string, index: number, obj: readonly string[]) => value is S, thisArg?: any): S | undefined; (predicate: (value: string, index: number, obj: readonly string[]) => unknown, thisArg?: any): string | undefined; } | { ...; } | { ...; } | null |...",
            "schema": [
              "undefined",
              "null",
              "PropOptions<unknown, unknown>",
              {
                "kind": "object",
                "type": "new (...args: any[]) => {}",
                "schema": {}
              },
              {
                "kind": "event",
                "type": "(): unknown"
              },
              {
                "kind": "array",
                "type": "PropConstructor<unknown>[]",
                "schema": [
                  {
                    "kind": "enum",
                    "type": "PropConstructor<unknown>",
                    "schema": [
                      "new (...args: any[]) => {}",
                      "() => unknown"
                    ]
                  }
                ]
              },
              "{ <S extends string>(predicate: (this: void, value: string, index: number, obj: readonly string[]) => value is S, thisArg?: any): S | undefined; (predicate: (value: string, index: number, obj: readonly string[]) => unknown, thisArg?: any): string | undefined; }",
              "{ <S extends string>(predicate: (this: void, value: string, index: number, obj: readonly string[]) => value is S, thisArg?: any): S | undefined; (predicate: (value: string, index: number, obj: readonly string[]) => unknown, thisArg?: any): string | undefined; }",
              "{ <S extends string>(predicate: (this: void, value: string, index: number, obj: readonly string[]) => value is S, thisArg?: any): S | undefined; (predicate: (value: string, index: number, obj: readonly string[]) => unknown, thisArg?: any): string | undefined; }"
            ]
          }
        },
        {
          "name": "findIndex",
          "global": false,
          "description": "Returns the index of the first element in the array where predicate is true, and -1\r\notherwise.",
          "tags": [
            {
              "name": "param",
              "text": "predicate find calls predicate once for each element of the array, in ascending\r\norder, until it finds one where predicate returns true. If such an element is found,\r\nfindIndex immediately returns that element index. Otherwise, findIndex returns -1."
            },
            {
              "name": "param",
              "text": "thisArg If provided, it will be used as the this value for each invocation of\r\npredicate. If it is not provided, undefined is used instead."
            }
          ],
          "required": true,
          "type": "Prop<unknown, unknown> | ((predicate: (value: string, index: number, obj: readonly string[]) => unknown, thisArg?: any) => number) | ((predicate: (value: string, index: number, obj: readonly string[]) => unknown, thisArg?: any) => number) | ((predicate: (value: string, index: number, obj: readonly string[]) => unkno...",
          "schema": {
            "kind": "enum",
            "type": "Prop<unknown, unknown> | ((predicate: (value: string, index: number, obj: readonly string[]) => unknown, thisArg?: any) => number) | ((predicate: (value: string, index: number, obj: readonly string[]) => unknown, thisArg?: any) => number) | ((predicate: (value: string, index: number, obj: readonly string[]) => unkno...",
            "schema": [
              "undefined",
              "null",
              "PropOptions<unknown, unknown>",
              {
                "kind": "object",
                "type": "new (...args: any[]) => {}",
                "schema": {}
              },
              {
                "kind": "event",
                "type": "(): unknown"
              },
              {
                "kind": "array",
                "type": "PropConstructor<unknown>[]",
                "schema": [
                  {
                    "kind": "enum",
                    "type": "PropConstructor<unknown>",
                    "schema": [
                      "new (...args: any[]) => {}",
                      "() => unknown"
                    ]
                  }
                ]
              },
              {
                "kind": "event",
                "type": "(predicate: (value: string, index: number, obj: readonly string[]) => unknown, thisArg?: any): number",
                "schema": []
              },
              {
                "kind": "event",
                "type": "(predicate: (value: string, index: number, obj: readonly string[]) => unknown, thisArg?: any): number",
                "schema": []
              },
              {
                "kind": "event",
                "type": "(predicate: (value: string, index: number, obj: readonly string[]) => unknown, thisArg?: any): number",
                "schema": []
              }
            ]
          }
        },
        {
          "name": "entries",
          "global": false,
          "description": "Returns an iterable of key, value pairs for every entry in the array",
          "tags": [],
          "required": true,
          "type": "Prop<unknown, unknown> | (() => IterableIterator<[number, string]>) | (() => IterableIterator<[number, string]>) | (() => IterableIterator<[number, string]>) | null | undefined",
          "schema": {
            "kind": "enum",
            "type": "Prop<unknown, unknown> | (() => IterableIterator<[number, string]>) | (() => IterableIterator<[number, string]>) | (() => IterableIterator<[number, string]>) | null | undefined",
            "schema": [
              "undefined",
              "null",
              "PropOptions<unknown, unknown>",
              {
                "kind": "object",
                "type": "new (...args: any[]) => {}",
                "schema": {}
              },
              {
                "kind": "event",
                "type": "(): unknown"
              },
              {
                "kind": "array",
                "type": "PropConstructor<unknown>[]",
                "schema": [
                  {
                    "kind": "enum",
                    "type": "PropConstructor<unknown>",
                    "schema": [
                      "new (...args: any[]) => {}",
                      "() => unknown"
                    ]
                  }
                ]
              },
              {
                "kind": "event",
                "type": "(): IterableIterator<[number, string]>"
              },
              {
                "kind": "event",
                "type": "(): IterableIterator<[number, string]>"
              },
              {
                "kind": "event",
                "type": "(): IterableIterator<[number, string]>"
              }
            ]
          }
        },
        {
          "name": "keys",
          "global": false,
          "description": "Returns an iterable of keys in the array",
          "tags": [],
          "required": true,
          "type": "Prop<unknown, unknown> | (() => IterableIterator<number>) | (() => IterableIterator<number>) | (() => IterableIterator<number>) | null | undefined",
          "schema": {
            "kind": "enum",
            "type": "Prop<unknown, unknown> | (() => IterableIterator<number>) | (() => IterableIterator<number>) | (() => IterableIterator<number>) | null | undefined",
            "schema": [
              "undefined",
              "null",
              "PropOptions<unknown, unknown>",
              {
                "kind": "object",
                "type": "new (...args: any[]) => {}",
                "schema": {}
              },
              {
                "kind": "event",
                "type": "(): unknown"
              },
              {
                "kind": "array",
                "type": "PropConstructor<unknown>[]",
                "schema": [
                  {
                    "kind": "enum",
                    "type": "PropConstructor<unknown>",
                    "schema": [
                      "new (...args: any[]) => {}",
                      "() => unknown"
                    ]
                  }
                ]
              },
              {
                "kind": "event",
                "type": "(): IterableIterator<number>"
              },
              {
                "kind": "event",
                "type": "(): IterableIterator<number>"
              },
              {
                "kind": "event",
                "type": "(): IterableIterator<number>"
              }
            ]
          }
        },
        {
          "name": "values",
          "global": false,
          "description": "Returns an iterable of values in the array",
          "tags": [],
          "required": true,
          "type": "Prop<unknown, unknown> | (() => IterableIterator<string>) | (() => IterableIterator<string>) | (() => IterableIterator<string>) | null | undefined",
          "schema": {
            "kind": "enum",
            "type": "Prop<unknown, unknown> | (() => IterableIterator<string>) | (() => IterableIterator<string>) | (() => IterableIterator<string>) | null | undefined",
            "schema": [
              "undefined",
              "null",
              "PropOptions<unknown, unknown>",
              {
                "kind": "object",
                "type": "new (...args: any[]) => {}",
                "schema": {}
              },
              {
                "kind": "event",
                "type": "(): unknown"
              },
              {
                "kind": "array",
                "type": "PropConstructor<unknown>[]",
                "schema": [
                  {
                    "kind": "enum",
                    "type": "PropConstructor<unknown>",
                    "schema": [
                      "new (...args: any[]) => {}",
                      "() => unknown"
                    ]
                  }
                ]
              },
              {
                "kind": "event",
                "type": "(): IterableIterator<string>"
              },
              {
                "kind": "event",
                "type": "(): IterableIterator<string>"
              },
              {
                "kind": "event",
                "type": "(): IterableIterator<string>"
              }
            ]
          }
        },
        {
          "name": "includes",
          "global": false,
          "description": "Determines whether an array includes a certain element, returning true or false as appropriate.",
          "tags": [
            {
              "name": "param",
              "text": "searchElement The element to search for."
            },
            {
              "name": "param",
              "text": "fromIndex The position in this array at which to begin searching for searchElement."
            }
          ],
          "required": true,
          "type": "Prop<unknown, unknown> | ((searchElement: string, fromIndex?: number | undefined) => boolean) | ((searchElement: string, fromIndex?: number | undefined) => boolean) | ((searchElement: string, fromIndex?: number | undefined) => boolean) | null | undefined",
          "schema": {
            "kind": "enum",
            "type": "Prop<unknown, unknown> | ((searchElement: string, fromIndex?: number | undefined) => boolean) | ((searchElement: string, fromIndex?: number | undefined) => boolean) | ((searchElement: string, fromIndex?: number | undefined) => boolean) | null | undefined",
            "schema": [
              "undefined",
              "null",
              "PropOptions<unknown, unknown>",
              {
                "kind": "object",
                "type": "new (...args: any[]) => {}",
                "schema": {}
              },
              {
                "kind": "event",
                "type": "(): unknown"
              },
              {
                "kind": "array",
                "type": "PropConstructor<unknown>[]",
                "schema": [
                  {
                    "kind": "enum",
                    "type": "PropConstructor<unknown>",
                    "schema": [
                      "new (...args: any[]) => {}",
                      "() => unknown"
                    ]
                  }
                ]
              },
              {
                "kind": "event",
                "type": "(searchElement: string, fromIndex?: number | undefined): boolean",
                "schema": []
              },
              {
                "kind": "event",
                "type": "(searchElement: string, fromIndex?: number | undefined): boolean",
                "schema": []
              },
              {
                "kind": "event",
                "type": "(searchElement: string, fromIndex?: number | undefined): boolean",
                "schema": []
              }
            ]
          }
        },
        {
          "name": "flatMap",
          "global": false,
          "description": "Calls a defined callback function on each element of an array. Then, flattens the result into\r\na new array.\r\nThis is identical to a map followed by flat with depth 1.",
          "tags": [
            {
              "name": "param",
              "text": "callback A function that accepts up to three arguments. The flatMap method calls the\r\ncallback function one time for each element in the array."
            },
            {
              "name": "param",
              "text": "thisArg An object to which the this keyword can refer in the callback function. If\r\nthisArg is omitted, undefined is used as the this value."
            }
          ],
          "required": true,
          "type": "Prop<unknown, unknown> | (<U, This = undefined>(callback: (this: This, value: string, index: number, array: string[]) => U | readonly U[], thisArg?: This | undefined) => U[]) | (<U, This = undefined>(callback: (this: This, value: string, index: number, array: string[]) => U | readonly U[], thisArg?: This | undefined...",
          "schema": {
            "kind": "enum",
            "type": "Prop<unknown, unknown> | (<U, This = undefined>(callback: (this: This, value: string, index: number, array: string[]) => U | readonly U[], thisArg?: This | undefined) => U[]) | (<U, This = undefined>(callback: (this: This, value: string, index: number, array: string[]) => U | readonly U[], thisArg?: This | undefined...",
            "schema": [
              "undefined",
              "null",
              "PropOptions<unknown, unknown>",
              {
                "kind": "object",
                "type": "new (...args: any[]) => {}",
                "schema": {}
              },
              {
                "kind": "event",
                "type": "(): unknown"
              },
              {
                "kind": "array",
                "type": "PropConstructor<unknown>[]",
                "schema": [
                  {
                    "kind": "enum",
                    "type": "PropConstructor<unknown>",
                    "schema": [
                      "new (...args: any[]) => {}",
                      "() => unknown"
                    ]
                  }
                ]
              },
              {
                "kind": "event",
                "type": "<U, This = undefined>(callback: (this: This, value: string, index: number, array: string[]) => U | readonly U[], thisArg?: This | undefined): U[]",
                "schema": []
              },
              {
                "kind": "event",
                "type": "<U, This = undefined>(callback: (this: This, value: string, index: number, array: string[]) => U | readonly U[], thisArg?: This | undefined): U[]",
                "schema": []
              },
              {
                "kind": "event",
                "type": "<U, This = undefined>(callback: (this: This, value: string, index: number, array: string[]) => U | readonly U[], thisArg?: This | undefined): U[]",
                "schema": []
              }
            ]
          }
        },
        {
          "name": "flat",
          "global": false,
          "description": "Returns a new array with all sub-array elements concatenated into it recursively up to the\r\nspecified depth.",
          "tags": [
            {
              "name": "param",
              "text": "depth The maximum recursion depth"
            }
          ],
          "required": true,
          "type": "Prop<unknown, unknown> | (<A, D extends number = 1>(this: A, depth?: D | undefined) => FlatArray<A, D>[]) | (<A, D extends number = 1>(this: A, depth?: D | undefined) => FlatArray<A, D>[]) | (<A, D extends number = 1>(this: A, depth?: D | undefined) => FlatArray<...>[]) | null | undefined",
          "schema": {
            "kind": "enum",
            "type": "Prop<unknown, unknown> | (<A, D extends number = 1>(this: A, depth?: D | undefined) => FlatArray<A, D>[]) | (<A, D extends number = 1>(this: A, depth?: D | undefined) => FlatArray<A, D>[]) | (<A, D extends number = 1>(this: A, depth?: D | undefined) => FlatArray<...>[]) | null | undefined",
            "schema": [
              "undefined",
              "null",
              "PropOptions<unknown, unknown>",
              {
                "kind": "object",
                "type": "new (...args: any[]) => {}",
                "schema": {}
              },
              {
                "kind": "event",
                "type": "(): unknown"
              },
              {
                "kind": "array",
                "type": "PropConstructor<unknown>[]",
                "schema": [
                  {
                    "kind": "enum",
                    "type": "PropConstructor<unknown>",
                    "schema": [
                      "new (...args: any[]) => {}",
                      "() => unknown"
                    ]
                  }
                ]
              },
              {
                "kind": "event",
                "type": "<A, D extends number = 1>(this: A, depth?: D | undefined): FlatArray<A, D>[]",
                "schema": []
              },
              {
                "kind": "event",
                "type": "<A, D extends number = 1>(this: A, depth?: D | undefined): FlatArray<A, D>[]",
                "schema": []
              },
              {
                "kind": "event",
                "type": "<A, D extends number = 1>(this: A, depth?: D | undefined): FlatArray<A, D>[]",
                "schema": []
              }
            ]
          }
        },
        {
          "name": "at",
          "global": false,
          "description": "Returns the item located at the specified index.",
          "tags": [
            {
              "name": "param",
              "text": "index The zero-based index of the desired code unit. A negative index will count back from the last item."
            }
          ],
          "required": true,
          "type": "Prop<unknown, unknown> | ((index: number) => string | undefined) | ((index: number) => string | undefined) | ((index: number) => string | undefined) | null | undefined",
          "schema": {
            "kind": "enum",
            "type": "Prop<unknown, unknown> | ((index: number) => string | undefined) | ((index: number) => string | undefined) | ((index: number) => string | undefined) | null | undefined",
            "schema": [
              "undefined",
              "null",
              "PropOptions<unknown, unknown>",
              {
                "kind": "object",
                "type": "new (...args: any[]) => {}",
                "schema": {}
              },
              {
                "kind": "event",
                "type": "(): unknown"
              },
              {
                "kind": "array",
                "type": "PropConstructor<unknown>[]",
                "schema": [
                  {
                    "kind": "enum",
                    "type": "PropConstructor<unknown>",
                    "schema": [
                      "new (...args: any[]) => {}",
                      "() => unknown"
                    ]
                  }
                ]
              },
              {
                "kind": "event",
                "type": "(index: number): string | undefined",
                "schema": []
              },
              {
                "kind": "event",
                "type": "(index: number): string | undefined",
                "schema": []
              },
              {
                "kind": "event",
                "type": "(index: number): string | undefined",
                "schema": []
              }
            ]
          }
        },
        {
          "name": "toString",
          "global": false,
          "description": "Returns a string representation of an object.\nReturns a string representation of an array.",
          "tags": [],
          "required": true,
          "type": "(() => string) | ((() => string) & (() => string)) | ((() => string) & (() => string)) | ((() => string) & (() => string))",
          "schema": {
            "kind": "enum",
            "type": "(() => string) | ((() => string) & (() => string)) | ((() => string) & (() => string)) | ((() => string) & (() => string))",
            "schema": [
              {
                "kind": "event",
                "type": "(): string"
              },
              {
                "kind": "event",
                "type": "(): string"
              },
              {
                "kind": "event",
                "type": "(): string"
              },
              {
                "kind": "event",
                "type": "(): string"
              }
            ]
          }
        },
        {
          "name": "toLocaleString",
          "global": false,
          "description": "Returns a date converted to a string using the current locale.\nReturns a string representation of an array. The elements are converted to string using their toLocaleString methods.",
          "tags": [],
          "required": true,
          "type": "(() => string) | ((() => string) & (() => string)) | ((() => string) & (() => string)) | ((() => string) & (() => string))",
          "schema": {
            "kind": "enum",
            "type": "(() => string) | ((() => string) & (() => string)) | ((() => string) & (() => string)) | ((() => string) & (() => string))",
            "schema": [
              {
                "kind": "event",
                "type": "(): string"
              },
              {
                "kind": "event",
                "type": "(): string"
              },
              {
                "kind": "event",
                "type": "(): string"
              },
              {
                "kind": "event",
                "type": "(): string"
              }
            ]
          }
        }
      ],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "AppHeaderDialog": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/docus/components/app/AppHeaderDialog.vue",
    "pascalName": "AppHeaderDialog",
    "kebabName": "app-header-dialog",
    "chunkName": "components/app-header-dialog",
    "shortPath": "node_modules/@nuxt-themes/docus/components/app/AppHeaderDialog.vue",
    "export": "default",
    "fullPath": "/Users/davanedavis/Projects/ncb/ob-embedded-finance-customer-mobile-app/frontier/docs/node_modules/@nuxt-themes/docus/components/app/AppHeaderDialog.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "AppHeaderLogo": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/docus/components/app/AppHeaderLogo.vue",
    "pascalName": "AppHeaderLogo",
    "kebabName": "app-header-logo",
    "chunkName": "components/app-header-logo",
    "shortPath": "node_modules/@nuxt-themes/docus/components/app/AppHeaderLogo.vue",
    "export": "default",
    "fullPath": "/Users/davanedavis/Projects/ncb/ob-embedded-finance-customer-mobile-app/frontier/docs/node_modules/@nuxt-themes/docus/components/app/AppHeaderLogo.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "AppHeaderNavigation": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/docus/components/app/AppHeaderNavigation.vue",
    "pascalName": "AppHeaderNavigation",
    "kebabName": "app-header-navigation",
    "chunkName": "components/app-header-navigation",
    "shortPath": "node_modules/@nuxt-themes/docus/components/app/AppHeaderNavigation.vue",
    "export": "default",
    "fullPath": "/Users/davanedavis/Projects/ncb/ob-embedded-finance-customer-mobile-app/frontier/docs/node_modules/@nuxt-themes/docus/components/app/AppHeaderNavigation.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "AppLayout": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/docus/components/app/AppLayout.vue",
    "pascalName": "AppLayout",
    "kebabName": "app-layout",
    "chunkName": "components/app-layout",
    "shortPath": "node_modules/@nuxt-themes/docus/components/app/AppLayout.vue",
    "export": "default",
    "fullPath": "/Users/davanedavis/Projects/ncb/ob-embedded-finance-customer-mobile-app/frontier/docs/node_modules/@nuxt-themes/docus/components/app/AppLayout.vue",
    "meta": {
      "props": [],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": []
    }
  },
  "AppLoadingBar": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/docus/components/app/AppLoadingBar.vue",
    "pascalName": "AppLoadingBar",
    "kebabName": "app-loading-bar",
    "chunkName": "components/app-loading-bar",
    "shortPath": "node_modules/@nuxt-themes/docus/components/app/AppLoadingBar.vue",
    "export": "default",
    "fullPath": "/Users/davanedavis/Projects/ncb/ob-embedded-finance-customer-mobile-app/frontier/docs/node_modules/@nuxt-themes/docus/components/app/AppLoadingBar.vue",
    "meta": {
      "props": [
        {
          "name": "throttle",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "number | undefined",
          "schema": {
            "kind": "enum",
            "type": "number | undefined",
            "schema": [
              "undefined",
              "number"
            ]
          },
          "default": "200"
        },
        {
          "name": "duration",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "number | undefined",
          "schema": {
            "kind": "enum",
            "type": "number | undefined",
            "schema": [
              "undefined",
              "number"
            ]
          },
          "default": "2000"
        }
      ],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "AppSearch": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/docus/components/app/AppSearch.vue",
    "pascalName": "AppSearch",
    "kebabName": "app-search",
    "chunkName": "components/app-search",
    "shortPath": "node_modules/@nuxt-themes/docus/components/app/AppSearch.vue",
    "export": "default",
    "fullPath": "/Users/davanedavis/Projects/ncb/ob-embedded-finance-customer-mobile-app/frontier/docs/node_modules/@nuxt-themes/docus/components/app/AppSearch.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "AppSocialIcons": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/docus/components/app/AppSocialIcons.vue",
    "pascalName": "AppSocialIcons",
    "kebabName": "app-social-icons",
    "chunkName": "components/app-social-icons",
    "shortPath": "node_modules/@nuxt-themes/docus/components/app/AppSocialIcons.vue",
    "export": "default",
    "fullPath": "/Users/davanedavis/Projects/ncb/ob-embedded-finance-customer-mobile-app/frontier/docs/node_modules/@nuxt-themes/docus/components/app/AppSocialIcons.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "DocumentDrivenNotFound": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/docus/components/app/DocumentDrivenNotFound.vue",
    "pascalName": "DocumentDrivenNotFound",
    "kebabName": "document-driven-not-found",
    "chunkName": "components/document-driven-not-found",
    "shortPath": "node_modules/@nuxt-themes/docus/components/app/DocumentDrivenNotFound.vue",
    "export": "default",
    "fullPath": "/Users/davanedavis/Projects/ncb/ob-embedded-finance-customer-mobile-app/frontier/docs/node_modules/@nuxt-themes/docus/components/app/DocumentDrivenNotFound.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "ThemeSelect": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/docus/components/app/ThemeSelect.vue",
    "pascalName": "ThemeSelect",
    "kebabName": "theme-select",
    "chunkName": "components/theme-select",
    "shortPath": "node_modules/@nuxt-themes/docus/components/app/ThemeSelect.vue",
    "export": "default",
    "fullPath": "/Users/davanedavis/Projects/ncb/ob-embedded-finance-customer-mobile-app/frontier/docs/node_modules/@nuxt-themes/docus/components/app/ThemeSelect.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "DocsAside": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/docus/components/docs/DocsAside.vue",
    "pascalName": "DocsAside",
    "kebabName": "docs-aside",
    "chunkName": "components/docs-aside",
    "shortPath": "node_modules/@nuxt-themes/docus/components/docs/DocsAside.vue",
    "export": "default",
    "fullPath": "/Users/davanedavis/Projects/ncb/ob-embedded-finance-customer-mobile-app/frontier/docs/node_modules/@nuxt-themes/docus/components/docs/DocsAside.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "DocsAsideTree": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/docus/components/docs/DocsAsideTree.vue",
    "pascalName": "DocsAsideTree",
    "kebabName": "docs-aside-tree",
    "chunkName": "components/docs-aside-tree",
    "shortPath": "node_modules/@nuxt-themes/docus/components/docs/DocsAsideTree.vue",
    "export": "default",
    "fullPath": "/Users/davanedavis/Projects/ncb/ob-embedded-finance-customer-mobile-app/frontier/docs/node_modules/@nuxt-themes/docus/components/docs/DocsAsideTree.vue",
    "meta": {
      "props": [
        {
          "name": "links",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "any",
          "schema": "any",
          "default": "[]"
        },
        {
          "name": "level",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "number | undefined",
          "schema": {
            "kind": "enum",
            "type": "number | undefined",
            "schema": [
              "undefined",
              "number"
            ]
          },
          "default": "0"
        },
        {
          "name": "max",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "number | undefined",
          "schema": {
            "kind": "enum",
            "type": "number | undefined",
            "schema": [
              "undefined",
              "number"
            ]
          },
          "default": "null"
        },
        {
          "name": "parent",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "any",
          "schema": "any",
          "default": "null"
        }
      ],
      "slots": [],
      "events": [],
      "exposed": [
        {
          "name": "links",
          "type": "any",
          "description": "",
          "schema": "any"
        },
        {
          "name": "level",
          "type": "number",
          "description": "",
          "schema": "number"
        },
        {
          "name": "max",
          "type": "number",
          "description": "",
          "schema": "number"
        },
        {
          "name": "parent",
          "type": "any",
          "description": "",
          "schema": "any"
        }
      ]
    }
  },
  "DocsPageBottom": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/docus/components/docs/DocsPageBottom.vue",
    "pascalName": "DocsPageBottom",
    "kebabName": "docs-page-bottom",
    "chunkName": "components/docs-page-bottom",
    "shortPath": "node_modules/@nuxt-themes/docus/components/docs/DocsPageBottom.vue",
    "export": "default",
    "fullPath": "/Users/davanedavis/Projects/ncb/ob-embedded-finance-customer-mobile-app/frontier/docs/node_modules/@nuxt-themes/docus/components/docs/DocsPageBottom.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "DocsPageLayout": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/docus/components/docs/DocsPageLayout.vue",
    "pascalName": "DocsPageLayout",
    "kebabName": "docs-page-layout",
    "chunkName": "components/docs-page-layout",
    "shortPath": "node_modules/@nuxt-themes/docus/components/docs/DocsPageLayout.vue",
    "export": "default",
    "fullPath": "/Users/davanedavis/Projects/ncb/ob-embedded-finance-customer-mobile-app/frontier/docs/node_modules/@nuxt-themes/docus/components/docs/DocsPageLayout.vue",
    "meta": {
      "props": [],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": []
    }
  },
  "DocsPrevNext": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/docus/components/docs/DocsPrevNext.vue",
    "pascalName": "DocsPrevNext",
    "kebabName": "docs-prev-next",
    "chunkName": "components/docs-prev-next",
    "shortPath": "node_modules/@nuxt-themes/docus/components/docs/DocsPrevNext.vue",
    "export": "default",
    "fullPath": "/Users/davanedavis/Projects/ncb/ob-embedded-finance-customer-mobile-app/frontier/docs/node_modules/@nuxt-themes/docus/components/docs/DocsPrevNext.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "DocsToc": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/docus/components/docs/DocsToc.vue",
    "pascalName": "DocsToc",
    "kebabName": "docs-toc",
    "chunkName": "components/docs-toc",
    "shortPath": "node_modules/@nuxt-themes/docus/components/docs/DocsToc.vue",
    "export": "default",
    "fullPath": "/Users/davanedavis/Projects/ncb/ob-embedded-finance-customer-mobile-app/frontier/docs/node_modules/@nuxt-themes/docus/components/docs/DocsToc.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [
        {
          "name": "move",
          "type": "any[]",
          "signature": "(event: \"move\", ...args: any[]): void",
          "schema": [
            "any"
          ]
        }
      ],
      "exposed": []
    }
  },
  "DocsTocLinks": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/docus/components/docs/DocsTocLinks.vue",
    "pascalName": "DocsTocLinks",
    "kebabName": "docs-toc-links",
    "chunkName": "components/docs-toc-links",
    "shortPath": "node_modules/@nuxt-themes/docus/components/docs/DocsTocLinks.vue",
    "export": "default",
    "fullPath": "/Users/davanedavis/Projects/ncb/ob-embedded-finance-customer-mobile-app/frontier/docs/node_modules/@nuxt-themes/docus/components/docs/DocsTocLinks.vue",
    "meta": {
      "props": [
        {
          "name": "links",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "TocLink[] | undefined",
          "schema": {
            "kind": "enum",
            "type": "TocLink[] | undefined",
            "schema": [
              "undefined",
              {
                "kind": "array",
                "type": "TocLink[]",
                "schema": [
                  {
                    "kind": "object",
                    "type": "TocLink",
                    "schema": {
                      "id": {
                        "name": "id",
                        "global": false,
                        "description": "",
                        "tags": [],
                        "required": true,
                        "type": "string",
                        "schema": "string"
                      },
                      "text": {
                        "name": "text",
                        "global": false,
                        "description": "",
                        "tags": [],
                        "required": true,
                        "type": "string",
                        "schema": "string"
                      },
                      "depth": {
                        "name": "depth",
                        "global": false,
                        "description": "",
                        "tags": [],
                        "required": true,
                        "type": "number",
                        "schema": "number"
                      },
                      "children": {
                        "name": "children",
                        "global": false,
                        "description": "",
                        "tags": [],
                        "required": false,
                        "type": "TocLink[] | undefined",
                        "schema": "TocLink[] | undefined"
                      }
                    }
                  }
                ]
              }
            ]
          },
          "default": "[]"
        }
      ],
      "slots": [],
      "events": [
        {
          "name": "move",
          "type": "any[]",
          "signature": "(event: \"move\", ...args: any[]): void",
          "schema": [
            "any"
          ]
        }
      ],
      "exposed": [
        {
          "name": "links",
          "type": "TocLink[]",
          "description": "",
          "schema": {
            "kind": "array",
            "type": "TocLink[]",
            "schema": [
              {
                "kind": "object",
                "type": "TocLink",
                "schema": {
                  "id": {
                    "name": "id",
                    "global": false,
                    "description": "",
                    "tags": [],
                    "required": true,
                    "type": "string",
                    "schema": "string"
                  },
                  "text": {
                    "name": "text",
                    "global": false,
                    "description": "",
                    "tags": [],
                    "required": true,
                    "type": "string",
                    "schema": "string"
                  },
                  "depth": {
                    "name": "depth",
                    "global": false,
                    "description": "",
                    "tags": [],
                    "required": true,
                    "type": "number",
                    "schema": "number"
                  },
                  "children": {
                    "name": "children",
                    "global": false,
                    "description": "",
                    "tags": [],
                    "required": false,
                    "type": "TocLink[] | undefined",
                    "schema": {
                      "kind": "enum",
                      "type": "TocLink[] | undefined",
                      "schema": [
                        "undefined",
                        "TocLink[]"
                      ]
                    }
                  }
                }
              }
            ]
          }
        }
      ]
    }
  },
  "EditOnLink": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/docus/components/docs/EditOnLink.vue",
    "pascalName": "EditOnLink",
    "kebabName": "edit-on-link",
    "chunkName": "components/edit-on-link",
    "shortPath": "node_modules/@nuxt-themes/docus/components/docs/EditOnLink.vue",
    "export": "default",
    "fullPath": "/Users/davanedavis/Projects/ncb/ob-embedded-finance-customer-mobile-app/frontier/docs/node_modules/@nuxt-themes/docus/components/docs/EditOnLink.vue",
    "meta": {
      "props": [
        {
          "name": "owner",
          "global": false,
          "description": "Repository owner.",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          },
          "default": "useAppConfig()?.docus?.github?.owner"
        },
        {
          "name": "repo",
          "global": false,
          "description": "Repository name.",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          },
          "default": "useAppConfig()?.docus?.github?.repo"
        },
        {
          "name": "branch",
          "global": false,
          "description": "The branch to use for the edit link.",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          },
          "default": "useAppConfig()?.docus?.github?.branch"
        },
        {
          "name": "dir",
          "global": false,
          "description": "A base directory to append to the source path.\n\nWon't be used if `page` is set.",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          },
          "default": "useAppConfig()?.docus?.github?.dir"
        },
        {
          "name": "source",
          "global": false,
          "description": "Source file path.\n\nWon't be used if `page` is set.",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          },
          "default": "undefined"
        },
        {
          "name": "page",
          "global": false,
          "description": "Use page from @nuxt/content.",
          "tags": [],
          "required": false,
          "type": "any",
          "schema": "any",
          "default": "undefined"
        },
        {
          "name": "contentDir",
          "global": false,
          "description": "Content directory (to be used with `page`)",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          },
          "default": "useAppConfig()?.docus?.github?.dir || \"content\""
        },
        {
          "name": "edit",
          "global": false,
          "description": "Send to an edit page or not.",
          "tags": [],
          "required": false,
          "type": "boolean | undefined",
          "schema": {
            "kind": "enum",
            "type": "boolean | undefined",
            "schema": [
              "undefined",
              "false",
              "true"
            ]
          },
          "default": "useAppConfig()?.docus?.github?.edit"
        }
      ],
      "slots": [],
      "events": [],
      "exposed": [
        {
          "name": "owner",
          "type": "string | undefined",
          "description": "Repository owner.",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          }
        },
        {
          "name": "repo",
          "type": "string | undefined",
          "description": "Repository name.",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          }
        },
        {
          "name": "branch",
          "type": "string | undefined",
          "description": "The branch to use for the edit link.",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          }
        },
        {
          "name": "dir",
          "type": "string | undefined",
          "description": "A base directory to append to the source path.\n\nWon't be used if `page` is set.",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          }
        },
        {
          "name": "source",
          "type": "string | undefined",
          "description": "Source file path.\n\nWon't be used if `page` is set.",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          }
        },
        {
          "name": "page",
          "type": "any",
          "description": "Use page from @nuxt/content.",
          "schema": "any"
        },
        {
          "name": "contentDir",
          "type": "string | undefined",
          "description": "Content directory (to be used with `page`)",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          }
        },
        {
          "name": "edit",
          "type": "boolean | undefined",
          "description": "Send to an edit page or not.",
          "schema": {
            "kind": "enum",
            "type": "boolean | undefined",
            "schema": [
              "undefined",
              "false",
              "true"
            ]
          }
        },
        {
          "name": "url",
          "type": "string",
          "description": "",
          "schema": "string"
        }
      ]
    }
  },
  "ProseA": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/typography/components/global/ProseA.vue",
    "pascalName": "ProseA",
    "kebabName": "prose-a",
    "chunkName": "components/prose-a",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseA.vue",
    "export": "default",
    "fullPath": "/Users/davanedavis/Projects/ncb/ob-embedded-finance-customer-mobile-app/frontier/docs/node_modules/@nuxt-themes/typography/components/global/ProseA.vue",
    "meta": {
      "props": [
        {
          "name": "href",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          },
          "default": "\"\""
        },
        {
          "name": "blank",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "boolean | undefined",
          "schema": {
            "kind": "enum",
            "type": "boolean | undefined",
            "schema": [
              "undefined",
              "false",
              "true"
            ]
          },
          "default": "false"
        },
        {
          "name": "static",
          "global": false,
          "description": "`true` if `href` points to a static file",
          "tags": [],
          "required": false,
          "type": "boolean | undefined",
          "schema": {
            "kind": "enum",
            "type": "boolean | undefined",
            "schema": [
              "undefined",
              "false",
              "true"
            ]
          },
          "default": "false"
        }
      ],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "href",
          "type": "string",
          "description": "",
          "schema": "string"
        },
        {
          "name": "blank",
          "type": "boolean",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "boolean",
            "schema": [
              "false",
              "true"
            ]
          }
        },
        {
          "name": "static",
          "type": "boolean",
          "description": "`true` if `href` points to a static file",
          "schema": {
            "kind": "enum",
            "type": "boolean",
            "schema": [
              "false",
              "true"
            ]
          }
        }
      ]
    }
  },
  "ProseBlockquote": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/typography/components/global/ProseBlockquote.vue",
    "pascalName": "ProseBlockquote",
    "kebabName": "prose-blockquote",
    "chunkName": "components/prose-blockquote",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseBlockquote.vue",
    "export": "default",
    "fullPath": "/Users/davanedavis/Projects/ncb/ob-embedded-finance-customer-mobile-app/frontier/docs/node_modules/@nuxt-themes/typography/components/global/ProseBlockquote.vue",
    "meta": {
      "props": [],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": []
    }
  },
  "ProseCode": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/typography/components/global/ProseCode.vue",
    "pascalName": "ProseCode",
    "kebabName": "prose-code",
    "chunkName": "components/prose-code",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseCode.vue",
    "export": "default",
    "fullPath": "/Users/davanedavis/Projects/ncb/ob-embedded-finance-customer-mobile-app/frontier/docs/node_modules/@nuxt-themes/typography/components/global/ProseCode.vue",
    "meta": {
      "props": [
        {
          "name": "code",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          },
          "default": "\"\""
        },
        {
          "name": "language",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "Lang | undefined",
          "schema": {
            "kind": "enum",
            "type": "Lang | undefined",
            "schema": [
              "undefined",
              "\"vue\"",
              "\"abap\"",
              "\"actionscript-3\"",
              "\"ada\"",
              "\"apache\"",
              "\"apex\"",
              "\"apl\"",
              "\"applescript\"",
              "\"asm\"",
              "\"astro\"",
              "\"awk\"",
              "\"ballerina\"",
              "\"bat\"",
              "\"batch\"",
              "\"berry\"",
              "\"be\"",
              "\"bibtex\"",
              "\"bicep\"",
              "\"blade\"",
              "\"c\"",
              "\"cadence\"",
              "\"cdc\"",
              "\"clarity\"",
              "\"clojure\"",
              "\"clj\"",
              "\"cmake\"",
              "\"cobol\"",
              "\"codeql\"",
              "\"ql\"",
              "\"coffee\"",
              "\"cpp\"",
              "\"crystal\"",
              "\"csharp\"",
              "\"c#\"",
              "\"cs\"",
              "\"css\"",
              "\"cue\"",
              "\"d\"",
              "\"dart\"",
              "\"diff\"",
              "\"docker\"",
              "\"dream-maker\"",
              "\"elixir\"",
              "\"elm\"",
              "\"erb\"",
              "\"erlang\"",
              "\"erl\"",
              "\"fish\"",
              "\"fsharp\"",
              "\"f#\"",
              "\"fs\"",
              "\"gherkin\"",
              "\"git-commit\"",
              "\"git-rebase\"",
              "\"glsl\"",
              "\"gnuplot\"",
              "\"go\"",
              "\"graphql\"",
              "\"groovy\"",
              "\"hack\"",
              "\"haml\"",
              "\"handlebars\"",
              "\"hbs\"",
              "\"haskell\"",
              "\"hs\"",
              "\"hcl\"",
              "\"hlsl\"",
              "\"html\"",
              "\"imba\"",
              "\"ini\"",
              "\"java\"",
              "\"javascript\"",
              "\"js\"",
              "\"jinja-html\"",
              "\"json\"",
              "\"json5\"",
              "\"jsonc\"",
              "\"jsonnet\"",
              "\"jssm\"",
              "\"fsl\"",
              "\"jsx\"",
              "\"julia\"",
              "\"kotlin\"",
              "\"latex\"",
              "\"less\"",
              "\"liquid\"",
              "\"lisp\"",
              "\"logo\"",
              "\"lua\"",
              "\"make\"",
              "\"makefile\"",
              "\"markdown\"",
              "\"md\"",
              "\"marko\"",
              "\"matlab\"",
              "\"mdx\"",
              "\"mermaid\"",
              "\"nginx\"",
              "\"nim\"",
              "\"nix\"",
              "\"objective-c\"",
              "\"objc\"",
              "\"objective-cpp\"",
              "\"ocaml\"",
              "\"pascal\"",
              "\"perl\"",
              "\"php\"",
              "\"plsql\"",
              "\"postcss\"",
              "\"powershell\"",
              "\"ps\"",
              "\"ps1\"",
              "\"prisma\"",
              "\"prolog\"",
              "\"proto\"",
              "\"pug\"",
              "\"jade\"",
              "\"puppet\"",
              "\"purescript\"",
              "\"python\"",
              "\"py\"",
              "\"r\"",
              "\"raku\"",
              "\"perl6\"",
              "\"razor\"",
              "\"rel\"",
              "\"riscv\"",
              "\"rst\"",
              "\"ruby\"",
              "\"rb\"",
              "\"rust\"",
              "\"rs\"",
              "\"sas\"",
              "\"sass\"",
              "\"scala\"",
              "\"scheme\"",
              "\"scss\"",
              "\"shaderlab\"",
              "\"shader\"",
              "\"shellscript\"",
              "\"shell\"",
              "\"bash\"",
              "\"sh\"",
              "\"zsh\"",
              "\"smalltalk\"",
              "\"solidity\"",
              "\"sparql\"",
              "\"sql\"",
              "\"ssh-config\"",
              "\"stata\"",
              "\"stylus\"",
              "\"styl\"",
              "\"svelte\"",
              "\"swift\"",
              "\"system-verilog\"",
              "\"tasl\"",
              "\"tcl\"",
              "\"tex\"",
              "\"toml\"",
              "\"tsx\"",
              "\"turtle\"",
              "\"twig\"",
              "\"typescript\"",
              "\"ts\"",
              "\"v\"",
              "\"vb\"",
              "\"cmd\"",
              "\"verilog\"",
              "\"vhdl\"",
              "\"viml\"",
              "\"vim\"",
              "\"vimscript\"",
              "\"vue-html\"",
              "\"wasm\"",
              "\"wenyan\"",
              "\"文言\"",
              "\"xml\"",
              "\"xsl\"",
              "\"yaml\"",
              "\"zenscript\""
            ]
          },
          "default": "null"
        },
        {
          "name": "filename",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          },
          "default": "null"
        },
        {
          "name": "highlights",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "number[] | undefined",
          "schema": {
            "kind": "enum",
            "type": "number[] | undefined",
            "schema": [
              "undefined",
              {
                "kind": "array",
                "type": "number[]",
                "schema": [
                  "number"
                ]
              }
            ]
          },
          "default": "[]"
        }
      ],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "code",
          "type": "string",
          "description": "",
          "schema": "string"
        },
        {
          "name": "language",
          "type": "Lang",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "Lang",
            "schema": [
              "\"vue\"",
              "\"abap\"",
              "\"actionscript-3\"",
              "\"ada\"",
              "\"apache\"",
              "\"apex\"",
              "\"apl\"",
              "\"applescript\"",
              "\"asm\"",
              "\"astro\"",
              "\"awk\"",
              "\"ballerina\"",
              "\"bat\"",
              "\"batch\"",
              "\"berry\"",
              "\"be\"",
              "\"bibtex\"",
              "\"bicep\"",
              "\"blade\"",
              "\"c\"",
              "\"cadence\"",
              "\"cdc\"",
              "\"clarity\"",
              "\"clojure\"",
              "\"clj\"",
              "\"cmake\"",
              "\"cobol\"",
              "\"codeql\"",
              "\"ql\"",
              "\"coffee\"",
              "\"cpp\"",
              "\"crystal\"",
              "\"csharp\"",
              "\"c#\"",
              "\"cs\"",
              "\"css\"",
              "\"cue\"",
              "\"d\"",
              "\"dart\"",
              "\"diff\"",
              "\"docker\"",
              "\"dream-maker\"",
              "\"elixir\"",
              "\"elm\"",
              "\"erb\"",
              "\"erlang\"",
              "\"erl\"",
              "\"fish\"",
              "\"fsharp\"",
              "\"f#\"",
              "\"fs\"",
              "\"gherkin\"",
              "\"git-commit\"",
              "\"git-rebase\"",
              "\"glsl\"",
              "\"gnuplot\"",
              "\"go\"",
              "\"graphql\"",
              "\"groovy\"",
              "\"hack\"",
              "\"haml\"",
              "\"handlebars\"",
              "\"hbs\"",
              "\"haskell\"",
              "\"hs\"",
              "\"hcl\"",
              "\"hlsl\"",
              "\"html\"",
              "\"imba\"",
              "\"ini\"",
              "\"java\"",
              "\"javascript\"",
              "\"js\"",
              "\"jinja-html\"",
              "\"json\"",
              "\"json5\"",
              "\"jsonc\"",
              "\"jsonnet\"",
              "\"jssm\"",
              "\"fsl\"",
              "\"jsx\"",
              "\"julia\"",
              "\"kotlin\"",
              "\"latex\"",
              "\"less\"",
              "\"liquid\"",
              "\"lisp\"",
              "\"logo\"",
              "\"lua\"",
              "\"make\"",
              "\"makefile\"",
              "\"markdown\"",
              "\"md\"",
              "\"marko\"",
              "\"matlab\"",
              "\"mdx\"",
              "\"mermaid\"",
              "\"nginx\"",
              "\"nim\"",
              "\"nix\"",
              "\"objective-c\"",
              "\"objc\"",
              "\"objective-cpp\"",
              "\"ocaml\"",
              "\"pascal\"",
              "\"perl\"",
              "\"php\"",
              "\"plsql\"",
              "\"postcss\"",
              "\"powershell\"",
              "\"ps\"",
              "\"ps1\"",
              "\"prisma\"",
              "\"prolog\"",
              "\"proto\"",
              "\"pug\"",
              "\"jade\"",
              "\"puppet\"",
              "\"purescript\"",
              "\"python\"",
              "\"py\"",
              "\"r\"",
              "\"raku\"",
              "\"perl6\"",
              "\"razor\"",
              "\"rel\"",
              "\"riscv\"",
              "\"rst\"",
              "\"ruby\"",
              "\"rb\"",
              "\"rust\"",
              "\"rs\"",
              "\"sas\"",
              "\"sass\"",
              "\"scala\"",
              "\"scheme\"",
              "\"scss\"",
              "\"shaderlab\"",
              "\"shader\"",
              "\"shellscript\"",
              "\"shell\"",
              "\"bash\"",
              "\"sh\"",
              "\"zsh\"",
              "\"smalltalk\"",
              "\"solidity\"",
              "\"sparql\"",
              "\"sql\"",
              "\"ssh-config\"",
              "\"stata\"",
              "\"stylus\"",
              "\"styl\"",
              "\"svelte\"",
              "\"swift\"",
              "\"system-verilog\"",
              "\"tasl\"",
              "\"tcl\"",
              "\"tex\"",
              "\"toml\"",
              "\"tsx\"",
              "\"turtle\"",
              "\"twig\"",
              "\"typescript\"",
              "\"ts\"",
              "\"v\"",
              "\"vb\"",
              "\"cmd\"",
              "\"verilog\"",
              "\"vhdl\"",
              "\"viml\"",
              "\"vim\"",
              "\"vimscript\"",
              "\"vue-html\"",
              "\"wasm\"",
              "\"wenyan\"",
              "\"文言\"",
              "\"xml\"",
              "\"xsl\"",
              "\"yaml\"",
              "\"zenscript\""
            ]
          }
        },
        {
          "name": "filename",
          "type": "string",
          "description": "",
          "schema": "string"
        },
        {
          "name": "highlights",
          "type": "number[]",
          "description": "",
          "schema": {
            "kind": "array",
            "type": "number[]",
            "schema": [
              "number"
            ]
          }
        }
      ]
    }
  },
  "ProseCodeInline": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/typography/components/global/ProseCodeInline.vue",
    "pascalName": "ProseCodeInline",
    "kebabName": "prose-code-inline",
    "chunkName": "components/prose-code-inline",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseCodeInline.vue",
    "export": "default",
    "fullPath": "/Users/davanedavis/Projects/ncb/ob-embedded-finance-customer-mobile-app/frontier/docs/node_modules/@nuxt-themes/typography/components/global/ProseCodeInline.vue",
    "meta": {
      "props": [],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": []
    }
  },
  "ProseEm": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/typography/components/global/ProseEm.vue",
    "pascalName": "ProseEm",
    "kebabName": "prose-em",
    "chunkName": "components/prose-em",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseEm.vue",
    "export": "default",
    "fullPath": "/Users/davanedavis/Projects/ncb/ob-embedded-finance-customer-mobile-app/frontier/docs/node_modules/@nuxt-themes/typography/components/global/ProseEm.vue",
    "meta": {
      "props": [],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": []
    }
  },
  "ProseH1": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/typography/components/global/ProseH1.vue",
    "pascalName": "ProseH1",
    "kebabName": "prose-h1",
    "chunkName": "components/prose-h1",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseH1.vue",
    "export": "default",
    "fullPath": "/Users/davanedavis/Projects/ncb/ob-embedded-finance-customer-mobile-app/frontier/docs/node_modules/@nuxt-themes/typography/components/global/ProseH1.vue",
    "meta": {
      "props": [
        {
          "name": "id",
          "global": false,
          "description": "",
          "tags": [],
          "required": true,
          "type": "string",
          "schema": "string"
        }
      ],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "id",
          "type": "string",
          "description": "",
          "schema": "string"
        }
      ]
    }
  },
  "ProseH2": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/typography/components/global/ProseH2.vue",
    "pascalName": "ProseH2",
    "kebabName": "prose-h2",
    "chunkName": "components/prose-h2",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseH2.vue",
    "export": "default",
    "fullPath": "/Users/davanedavis/Projects/ncb/ob-embedded-finance-customer-mobile-app/frontier/docs/node_modules/@nuxt-themes/typography/components/global/ProseH2.vue",
    "meta": {
      "props": [
        {
          "name": "id",
          "global": false,
          "description": "",
          "tags": [],
          "required": true,
          "type": "string",
          "schema": "string"
        }
      ],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "id",
          "type": "string",
          "description": "",
          "schema": "string"
        }
      ]
    }
  },
  "ProseH3": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/typography/components/global/ProseH3.vue",
    "pascalName": "ProseH3",
    "kebabName": "prose-h3",
    "chunkName": "components/prose-h3",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseH3.vue",
    "export": "default",
    "fullPath": "/Users/davanedavis/Projects/ncb/ob-embedded-finance-customer-mobile-app/frontier/docs/node_modules/@nuxt-themes/typography/components/global/ProseH3.vue",
    "meta": {
      "props": [
        {
          "name": "id",
          "global": false,
          "description": "",
          "tags": [],
          "required": true,
          "type": "string",
          "schema": "string"
        }
      ],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "id",
          "type": "string",
          "description": "",
          "schema": "string"
        }
      ]
    }
  },
  "ProseH4": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/typography/components/global/ProseH4.vue",
    "pascalName": "ProseH4",
    "kebabName": "prose-h4",
    "chunkName": "components/prose-h4",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseH4.vue",
    "export": "default",
    "fullPath": "/Users/davanedavis/Projects/ncb/ob-embedded-finance-customer-mobile-app/frontier/docs/node_modules/@nuxt-themes/typography/components/global/ProseH4.vue",
    "meta": {
      "props": [
        {
          "name": "id",
          "global": false,
          "description": "",
          "tags": [],
          "required": true,
          "type": "string",
          "schema": "string"
        }
      ],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "id",
          "type": "string",
          "description": "",
          "schema": "string"
        }
      ]
    }
  },
  "ProseH5": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/typography/components/global/ProseH5.vue",
    "pascalName": "ProseH5",
    "kebabName": "prose-h5",
    "chunkName": "components/prose-h5",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseH5.vue",
    "export": "default",
    "fullPath": "/Users/davanedavis/Projects/ncb/ob-embedded-finance-customer-mobile-app/frontier/docs/node_modules/@nuxt-themes/typography/components/global/ProseH5.vue",
    "meta": {
      "props": [
        {
          "name": "id",
          "global": false,
          "description": "",
          "tags": [],
          "required": true,
          "type": "string",
          "schema": "string"
        }
      ],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "id",
          "type": "string",
          "description": "",
          "schema": "string"
        }
      ]
    }
  },
  "ProseH6": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/typography/components/global/ProseH6.vue",
    "pascalName": "ProseH6",
    "kebabName": "prose-h6",
    "chunkName": "components/prose-h6",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseH6.vue",
    "export": "default",
    "fullPath": "/Users/davanedavis/Projects/ncb/ob-embedded-finance-customer-mobile-app/frontier/docs/node_modules/@nuxt-themes/typography/components/global/ProseH6.vue",
    "meta": {
      "props": [
        {
          "name": "id",
          "global": false,
          "description": "",
          "tags": [],
          "required": true,
          "type": "string",
          "schema": "string"
        }
      ],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "id",
          "type": "string",
          "description": "",
          "schema": "string"
        }
      ]
    }
  },
  "ProseHr": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/typography/components/global/ProseHr.vue",
    "pascalName": "ProseHr",
    "kebabName": "prose-hr",
    "chunkName": "components/prose-hr",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseHr.vue",
    "export": "default",
    "fullPath": "/Users/davanedavis/Projects/ncb/ob-embedded-finance-customer-mobile-app/frontier/docs/node_modules/@nuxt-themes/typography/components/global/ProseHr.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "ProseImg": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/typography/components/global/ProseImg.vue",
    "pascalName": "ProseImg",
    "kebabName": "prose-img",
    "chunkName": "components/prose-img",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseImg.vue",
    "export": "default",
    "fullPath": "/Users/davanedavis/Projects/ncb/ob-embedded-finance-customer-mobile-app/frontier/docs/node_modules/@nuxt-themes/typography/components/global/ProseImg.vue",
    "meta": {
      "props": [
        {
          "name": "height",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | number | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | number | undefined",
            "schema": [
              "undefined",
              "string",
              "number"
            ]
          },
          "default": "undefined"
        },
        {
          "name": "src",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          },
          "default": "\"\""
        },
        {
          "name": "alt",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          },
          "default": "\"\""
        },
        {
          "name": "width",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | number | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | number | undefined",
            "schema": [
              "undefined",
              "string",
              "number"
            ]
          },
          "default": "undefined"
        }
      ],
      "slots": [],
      "events": [],
      "exposed": [
        {
          "name": "src",
          "type": "string",
          "description": "",
          "schema": "string"
        },
        {
          "name": "alt",
          "type": "string",
          "description": "",
          "schema": "string"
        },
        {
          "name": "height",
          "type": "string | number | undefined",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "string | number | undefined",
            "schema": [
              "undefined",
              "string",
              "number"
            ]
          }
        },
        {
          "name": "width",
          "type": "string | number | undefined",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "string | number | undefined",
            "schema": [
              "undefined",
              "string",
              "number"
            ]
          }
        }
      ]
    }
  },
  "ProseLi": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/typography/components/global/ProseLi.vue",
    "pascalName": "ProseLi",
    "kebabName": "prose-li",
    "chunkName": "components/prose-li",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseLi.vue",
    "export": "default",
    "fullPath": "/Users/davanedavis/Projects/ncb/ob-embedded-finance-customer-mobile-app/frontier/docs/node_modules/@nuxt-themes/typography/components/global/ProseLi.vue",
    "meta": {
      "props": [],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": []
    }
  },
  "ProseOl": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/typography/components/global/ProseOl.vue",
    "pascalName": "ProseOl",
    "kebabName": "prose-ol",
    "chunkName": "components/prose-ol",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseOl.vue",
    "export": "default",
    "fullPath": "/Users/davanedavis/Projects/ncb/ob-embedded-finance-customer-mobile-app/frontier/docs/node_modules/@nuxt-themes/typography/components/global/ProseOl.vue",
    "meta": {
      "props": [],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": []
    }
  },
  "ProseP": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/typography/components/global/ProseP.vue",
    "pascalName": "ProseP",
    "kebabName": "prose-p",
    "chunkName": "components/prose-p",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseP.vue",
    "export": "default",
    "fullPath": "/Users/davanedavis/Projects/ncb/ob-embedded-finance-customer-mobile-app/frontier/docs/node_modules/@nuxt-themes/typography/components/global/ProseP.vue",
    "meta": {
      "props": [],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": []
    }
  },
  "ProseStrong": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/typography/components/global/ProseStrong.vue",
    "pascalName": "ProseStrong",
    "kebabName": "prose-strong",
    "chunkName": "components/prose-strong",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseStrong.vue",
    "export": "default",
    "fullPath": "/Users/davanedavis/Projects/ncb/ob-embedded-finance-customer-mobile-app/frontier/docs/node_modules/@nuxt-themes/typography/components/global/ProseStrong.vue",
    "meta": {
      "props": [],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": []
    }
  },
  "ProseTable": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/typography/components/global/ProseTable.vue",
    "pascalName": "ProseTable",
    "kebabName": "prose-table",
    "chunkName": "components/prose-table",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseTable.vue",
    "export": "default",
    "fullPath": "/Users/davanedavis/Projects/ncb/ob-embedded-finance-customer-mobile-app/frontier/docs/node_modules/@nuxt-themes/typography/components/global/ProseTable.vue",
    "meta": {
      "props": [],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": []
    }
  },
  "ProseTbody": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/typography/components/global/ProseTbody.vue",
    "pascalName": "ProseTbody",
    "kebabName": "prose-tbody",
    "chunkName": "components/prose-tbody",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseTbody.vue",
    "export": "default",
    "fullPath": "/Users/davanedavis/Projects/ncb/ob-embedded-finance-customer-mobile-app/frontier/docs/node_modules/@nuxt-themes/typography/components/global/ProseTbody.vue",
    "meta": {
      "props": [],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": []
    }
  },
  "ProseTd": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/typography/components/global/ProseTd.vue",
    "pascalName": "ProseTd",
    "kebabName": "prose-td",
    "chunkName": "components/prose-td",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseTd.vue",
    "export": "default",
    "fullPath": "/Users/davanedavis/Projects/ncb/ob-embedded-finance-customer-mobile-app/frontier/docs/node_modules/@nuxt-themes/typography/components/global/ProseTd.vue",
    "meta": {
      "props": [],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": []
    }
  },
  "ProseTh": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/typography/components/global/ProseTh.vue",
    "pascalName": "ProseTh",
    "kebabName": "prose-th",
    "chunkName": "components/prose-th",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseTh.vue",
    "export": "default",
    "fullPath": "/Users/davanedavis/Projects/ncb/ob-embedded-finance-customer-mobile-app/frontier/docs/node_modules/@nuxt-themes/typography/components/global/ProseTh.vue",
    "meta": {
      "props": [],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": []
    }
  },
  "ProseThead": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/typography/components/global/ProseThead.vue",
    "pascalName": "ProseThead",
    "kebabName": "prose-thead",
    "chunkName": "components/prose-thead",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseThead.vue",
    "export": "default",
    "fullPath": "/Users/davanedavis/Projects/ncb/ob-embedded-finance-customer-mobile-app/frontier/docs/node_modules/@nuxt-themes/typography/components/global/ProseThead.vue",
    "meta": {
      "props": [],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": []
    }
  },
  "ProseTr": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/typography/components/global/ProseTr.vue",
    "pascalName": "ProseTr",
    "kebabName": "prose-tr",
    "chunkName": "components/prose-tr",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseTr.vue",
    "export": "default",
    "fullPath": "/Users/davanedavis/Projects/ncb/ob-embedded-finance-customer-mobile-app/frontier/docs/node_modules/@nuxt-themes/typography/components/global/ProseTr.vue",
    "meta": {
      "props": [],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": []
    }
  },
  "ProseUl": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/typography/components/global/ProseUl.vue",
    "pascalName": "ProseUl",
    "kebabName": "prose-ul",
    "chunkName": "components/prose-ul",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseUl.vue",
    "export": "default",
    "fullPath": "/Users/davanedavis/Projects/ncb/ob-embedded-finance-customer-mobile-app/frontier/docs/node_modules/@nuxt-themes/typography/components/global/ProseUl.vue",
    "meta": {
      "props": [],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": []
    }
  },
  "ProseCodeCopyButton": {
    "mode": "all",
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/typography/components/ProseCodeCopyButton.vue",
    "pascalName": "ProseCodeCopyButton",
    "kebabName": "prose-code-copy-button",
    "chunkName": "components/prose-code-copy-button",
    "shortPath": "node_modules/@nuxt-themes/typography/components/ProseCodeCopyButton.vue",
    "export": "default",
    "fullPath": "/Users/davanedavis/Projects/ncb/ob-embedded-finance-customer-mobile-app/frontier/docs/node_modules/@nuxt-themes/typography/components/ProseCodeCopyButton.vue",
    "meta": {
      "props": [
        {
          "name": "content",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          },
          "default": "\"\""
        },
        {
          "name": "show",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "boolean | undefined",
          "schema": {
            "kind": "enum",
            "type": "boolean | undefined",
            "schema": [
              "undefined",
              "false",
              "true"
            ]
          },
          "default": "false"
        }
      ],
      "slots": [],
      "events": [],
      "exposed": [
        {
          "name": "content",
          "type": "string",
          "description": "",
          "schema": "string"
        },
        {
          "name": "show",
          "type": "boolean",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "boolean",
            "schema": [
              "false",
              "true"
            ]
          }
        }
      ]
    }
  },
  "Alert": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/elements/components/globals/Alert.vue",
    "pascalName": "Alert",
    "kebabName": "alert",
    "chunkName": "components/alert",
    "shortPath": "node_modules/@nuxt-themes/elements/components/globals/Alert.vue",
    "export": "default",
    "fullPath": "/Users/davanedavis/Projects/ncb/ob-embedded-finance-customer-mobile-app/frontier/docs/node_modules/@nuxt-themes/elements/components/globals/Alert.vue",
    "meta": {
      "props": [
        {
          "name": "type",
          "global": false,
          "description": "",
          "tags": [
            {
              "name": "values",
              "text": "info, success, warning, danger"
            }
          ],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          },
          "default": "\"info\""
        }
      ],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "type",
          "type": "string",
          "description": "",
          "schema": "string"
        }
      ]
    }
  },
  "Badge": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/elements/components/globals/Badge.vue",
    "pascalName": "Badge",
    "kebabName": "badge",
    "chunkName": "components/badge",
    "shortPath": "node_modules/@nuxt-themes/elements/components/globals/Badge.vue",
    "export": "default",
    "fullPath": "/Users/davanedavis/Projects/ncb/ob-embedded-finance-customer-mobile-app/frontier/docs/node_modules/@nuxt-themes/elements/components/globals/Badge.vue",
    "meta": {
      "props": [
        {
          "name": "type",
          "global": false,
          "description": "",
          "tags": [
            {
              "name": "values",
              "text": "info, success, warning, danger"
            }
          ],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          },
          "default": "\"info\""
        }
      ],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "type",
          "type": "string",
          "description": "",
          "schema": "string"
        }
      ]
    }
  },
  "ButtonLink": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/elements/components/globals/ButtonLink.vue",
    "pascalName": "ButtonLink",
    "kebabName": "button-link",
    "chunkName": "components/button-link",
    "shortPath": "node_modules/@nuxt-themes/elements/components/globals/ButtonLink.vue",
    "export": "default",
    "fullPath": "/Users/davanedavis/Projects/ncb/ob-embedded-finance-customer-mobile-app/frontier/docs/node_modules/@nuxt-themes/elements/components/globals/ButtonLink.vue",
    "meta": {
      "props": [
        {
          "name": "color",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "ComputedStyleProp<\"ruby\" | \"primary\" | \"white\" | \"black\" | \"secondary\" | \"gray\" | \"green\" | \"yellow\" | \"orange\" | \"red\" | \"pear\" | \"teal\" | \"lightblue\" | \"blue\" | \"indigoblue\" | \"royalblue\" | \"purple\" | \"pink\"> | undefined",
          "schema": {
            "kind": "enum",
            "type": "ComputedStyleProp<\"ruby\" | \"primary\" | \"white\" | \"black\" | \"secondary\" | \"gray\" | \"green\" | \"yellow\" | \"orange\" | \"red\" | \"pear\" | \"teal\" | \"lightblue\" | \"blue\" | \"indigoblue\" | \"royalblue\" | \"purple\" | \"pink\"> | undefined",
            "schema": [
              "undefined",
              "\"ruby\"",
              "\"primary\"",
              "\"white\"",
              "\"black\"",
              "\"secondary\"",
              "\"gray\"",
              "\"green\"",
              "\"yellow\"",
              "\"orange\"",
              "\"red\"",
              "\"pear\"",
              "\"teal\"",
              "\"lightblue\"",
              "\"blue\"",
              "\"indigoblue\"",
              "\"royalblue\"",
              "\"purple\"",
              "\"pink\"",
              "{ md?: \"ruby\" | \"primary\" | \"white\" | \"black\" | \"secondary\" | \"gray\" | \"green\" | \"yellow\" | \"orange\" | \"red\" | \"pear\" | \"teal\" | \"lightblue\" | \"blue\" | \"indigoblue\" | \"royalblue\" | \"purple\" | \"pink\" | undefined; ... 10 more ...; portrait?: \"ruby\" | ... 17 more ... | undefined; }"
            ]
          }
        },
        {
          "name": "icon",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          },
          "default": "\"\""
        },
        {
          "name": "href",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          },
          "default": "\"\""
        },
        {
          "name": "blank",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "boolean | undefined",
          "schema": {
            "kind": "enum",
            "type": "boolean | undefined",
            "schema": [
              "undefined",
              "false",
              "true"
            ]
          },
          "default": "false"
        },
        {
          "name": "size",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "\"small\" | \"medium\" | \"large\" | \"giant\" | { md?: \"small\" | \"medium\" | \"large\" | \"giant\" | undefined; dark?: \"small\" | \"medium\" | \"large\" | \"giant\" | undefined; light?: \"small\" | \"medium\" | \"large\" | \"giant\" | undefined; ... 8 more ...; portrait?: \"small\" | ... 3 more ... | undefined; } | undefined",
          "schema": {
            "kind": "enum",
            "type": "\"small\" | \"medium\" | \"large\" | \"giant\" | { md?: \"small\" | \"medium\" | \"large\" | \"giant\" | undefined; dark?: \"small\" | \"medium\" | \"large\" | \"giant\" | undefined; light?: \"small\" | \"medium\" | \"large\" | \"giant\" | undefined; ... 8 more ...; portrait?: \"small\" | ... 3 more ... | undefined; } | undefined",
            "schema": [
              "undefined",
              "\"small\"",
              "\"medium\"",
              "\"large\"",
              "\"giant\"",
              "{ md?: \"small\" | \"medium\" | \"large\" | \"giant\" | undefined; dark?: \"small\" | \"medium\" | \"large\" | \"giant\" | undefined; light?: \"small\" | \"medium\" | \"large\" | \"giant\" | undefined; initial?: \"small\" | ... 3 more ... | undefined; ... 7 more ...; portrait?: \"small\" | ... 3 more ... | undefined; }"
            ]
          }
        },
        {
          "name": "transparent",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "boolean | { md?: boolean | undefined; dark?: boolean | undefined; light?: boolean | undefined; initial?: boolean | undefined; xs?: boolean | undefined; sm?: boolean | undefined; lg?: boolean | undefined; ... 4 more ...; portrait?: boolean | undefined; } | undefined",
          "schema": {
            "kind": "enum",
            "type": "boolean | { md?: boolean | undefined; dark?: boolean | undefined; light?: boolean | undefined; initial?: boolean | undefined; xs?: boolean | undefined; sm?: boolean | undefined; lg?: boolean | undefined; ... 4 more ...; portrait?: boolean | undefined; } | undefined",
            "schema": [
              "undefined",
              "false",
              "true",
              "{ md?: boolean | undefined; dark?: boolean | undefined; light?: boolean | undefined; initial?: boolean | undefined; xs?: boolean | undefined; sm?: boolean | undefined; lg?: boolean | undefined; ... 4 more ...; portrait?: boolean | undefined; }"
            ]
          }
        }
      ],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "color",
          "type": "ComputedStyleProp<\"ruby\" | \"primary\" | \"white\" | \"black\" | \"secondary\" | \"gray\" | \"green\" | \"yellow\" | \"orange\" | \"red\" | \"pear\" | \"teal\" | \"lightblue\" | \"blue\" | \"indigoblue\" | \"royalblue\" | \"purple\" | \"pink\">",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "ComputedStyleProp<\"ruby\" | \"primary\" | \"white\" | \"black\" | \"secondary\" | \"gray\" | \"green\" | \"yellow\" | \"orange\" | \"red\" | \"pear\" | \"teal\" | \"lightblue\" | \"blue\" | \"indigoblue\" | \"royalblue\" | \"purple\" | \"pink\">",
            "schema": [
              "\"ruby\"",
              "\"primary\"",
              "\"white\"",
              "\"black\"",
              "\"secondary\"",
              "\"gray\"",
              "\"green\"",
              "\"yellow\"",
              "\"orange\"",
              "\"red\"",
              "\"pear\"",
              "\"teal\"",
              "\"lightblue\"",
              "\"blue\"",
              "\"indigoblue\"",
              "\"royalblue\"",
              "\"purple\"",
              "\"pink\"",
              "{ md?: \"ruby\" | \"primary\" | \"white\" | \"black\" | \"secondary\" | \"gray\" | \"green\" | \"yellow\" | \"orange\" | \"red\" | \"pear\" | \"teal\" | \"lightblue\" | \"blue\" | \"indigoblue\" | \"royalblue\" | \"purple\" | \"pink\" | undefined; ... 10 more ...; portrait?: \"ruby\" | ... 17 more ... | undefined; }"
            ]
          }
        },
        {
          "name": "icon",
          "type": "string",
          "description": "",
          "schema": "string"
        },
        {
          "name": "href",
          "type": "string",
          "description": "",
          "schema": "string"
        },
        {
          "name": "blank",
          "type": "boolean",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "boolean",
            "schema": [
              "false",
              "true"
            ]
          }
        },
        {
          "name": "size",
          "type": "\"small\" | \"medium\" | \"large\" | \"giant\" | { md?: \"small\" | \"medium\" | \"large\" | \"giant\" | undefined; dark?: \"small\" | \"medium\" | \"large\" | \"giant\" | undefined; light?: \"small\" | \"medium\" | \"large\" | \"giant\" | undefined; ... 8 more ...; portrait?: \"small\" | ... 3 more ... | undefined; }",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "\"small\" | \"medium\" | \"large\" | \"giant\" | { md?: \"small\" | \"medium\" | \"large\" | \"giant\" | undefined; dark?: \"small\" | \"medium\" | \"large\" | \"giant\" | undefined; light?: \"small\" | \"medium\" | \"large\" | \"giant\" | undefined; ... 8 more ...; portrait?: \"small\" | ... 3 more ... | undefined; }",
            "schema": [
              "\"small\"",
              "\"medium\"",
              "\"large\"",
              "\"giant\"",
              "{ md?: \"small\" | \"medium\" | \"large\" | \"giant\" | undefined; dark?: \"small\" | \"medium\" | \"large\" | \"giant\" | undefined; light?: \"small\" | \"medium\" | \"large\" | \"giant\" | undefined; initial?: \"small\" | ... 3 more ... | undefined; ... 7 more ...; portrait?: \"small\" | ... 3 more ... | undefined; }"
            ]
          }
        },
        {
          "name": "transparent",
          "type": "boolean | { md?: boolean | undefined; dark?: boolean | undefined; light?: boolean | undefined; initial?: boolean | undefined; xs?: boolean | undefined; sm?: boolean | undefined; lg?: boolean | undefined; ... 4 more ...; portrait?: boolean | undefined; }",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "boolean | { md?: boolean | undefined; dark?: boolean | undefined; light?: boolean | undefined; initial?: boolean | undefined; xs?: boolean | undefined; sm?: boolean | undefined; lg?: boolean | undefined; ... 4 more ...; portrait?: boolean | undefined; }",
            "schema": [
              "false",
              "true",
              "{ md?: boolean | undefined; dark?: boolean | undefined; light?: boolean | undefined; initial?: boolean | undefined; xs?: boolean | undefined; sm?: boolean | undefined; lg?: boolean | undefined; ... 4 more ...; portrait?: boolean | undefined; }"
            ]
          }
        }
      ]
    }
  },
  "Callout": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/elements/components/globals/Callout.vue",
    "pascalName": "Callout",
    "kebabName": "callout",
    "chunkName": "components/callout",
    "shortPath": "node_modules/@nuxt-themes/elements/components/globals/Callout.vue",
    "export": "default",
    "fullPath": "/Users/davanedavis/Projects/ncb/ob-embedded-finance-customer-mobile-app/frontier/docs/node_modules/@nuxt-themes/elements/components/globals/Callout.vue",
    "meta": {
      "props": [
        {
          "name": "type",
          "global": false,
          "description": "",
          "tags": [
            {
              "name": "values",
              "text": "info, success, warning, danger"
            }
          ],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          },
          "default": "\"info\""
        },
        {
          "name": "modelValue",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "any",
          "schema": "any",
          "default": "ref(false)"
        }
      ],
      "slots": [
        {
          "name": "summary",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        },
        {
          "name": "content",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [
        {
          "name": "update:modelValue",
          "type": "any[]",
          "signature": "(event: \"update:modelValue\", ...args: any[]): void",
          "schema": [
            "any"
          ]
        }
      ],
      "exposed": [
        {
          "name": "type",
          "type": "string",
          "description": "",
          "schema": "string"
        },
        {
          "name": "modelValue",
          "type": "any",
          "description": "",
          "schema": "any"
        }
      ]
    }
  },
  "CodeBlock": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/elements/components/globals/CodeBlock.vue",
    "pascalName": "CodeBlock",
    "kebabName": "code-block",
    "chunkName": "components/code-block",
    "shortPath": "node_modules/@nuxt-themes/elements/components/globals/CodeBlock.vue",
    "export": "default",
    "fullPath": "/Users/davanedavis/Projects/ncb/ob-embedded-finance-customer-mobile-app/frontier/docs/node_modules/@nuxt-themes/elements/components/globals/CodeBlock.vue",
    "meta": {
      "props": [
        {
          "name": "label",
          "global": false,
          "description": "Label to display for the tab",
          "tags": [],
          "required": true,
          "type": "string",
          "schema": "string"
        },
        {
          "name": "active",
          "global": false,
          "description": "Select which tab should be active",
          "tags": [],
          "required": false,
          "type": "boolean | undefined",
          "schema": {
            "kind": "enum",
            "type": "boolean | undefined",
            "schema": [
              "undefined",
              "false",
              "true"
            ]
          },
          "default": "false"
        },
        {
          "name": "preview",
          "global": false,
          "description": "Preiew block are bordered and have small padding.",
          "tags": [],
          "required": false,
          "type": "boolean | undefined",
          "schema": {
            "kind": "enum",
            "type": "boolean | undefined",
            "schema": [
              "undefined",
              "false",
              "true"
            ]
          },
          "default": "false"
        }
      ],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "label",
          "type": "string",
          "description": "Label to display for the tab",
          "schema": "string"
        },
        {
          "name": "active",
          "type": "boolean",
          "description": "Select which tab should be active",
          "schema": {
            "kind": "enum",
            "type": "boolean",
            "schema": [
              "false",
              "true"
            ]
          }
        },
        {
          "name": "preview",
          "type": "boolean",
          "description": "Preiew block are bordered and have small padding.",
          "schema": {
            "kind": "enum",
            "type": "boolean",
            "schema": [
              "false",
              "true"
            ]
          }
        }
      ]
    }
  },
  "CodeGroup": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/elements/components/globals/CodeGroup.vue",
    "pascalName": "CodeGroup",
    "kebabName": "code-group",
    "chunkName": "components/code-group",
    "shortPath": "node_modules/@nuxt-themes/elements/components/globals/CodeGroup.vue",
    "export": "default",
    "fullPath": "/Users/davanedavis/Projects/ncb/ob-embedded-finance-customer-mobile-app/frontier/docs/node_modules/@nuxt-themes/elements/components/globals/CodeGroup.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "Container": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/elements/components/globals/Container.vue",
    "pascalName": "Container",
    "kebabName": "container",
    "chunkName": "components/container",
    "shortPath": "node_modules/@nuxt-themes/elements/components/globals/Container.vue",
    "export": "default",
    "fullPath": "/Users/davanedavis/Projects/ncb/ob-embedded-finance-customer-mobile-app/frontier/docs/node_modules/@nuxt-themes/elements/components/globals/Container.vue",
    "meta": {
      "props": [
        {
          "name": "as",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "keyof HTMLElementTagNameMap | undefined",
          "schema": {
            "kind": "enum",
            "type": "keyof HTMLElementTagNameMap | undefined",
            "schema": [
              "undefined",
              "\"object\"",
              "\"style\"",
              "\"map\"",
              "\"data\"",
              "\"template\"",
              "\"link\"",
              "\"small\"",
              "\"sub\"",
              "\"sup\"",
              "\"title\"",
              "\"label\"",
              "\"source\"",
              "\"main\"",
              "\"html\"",
              "\"ruby\"",
              "\"code\"",
              "\"a\"",
              "\"abbr\"",
              "\"address\"",
              "\"area\"",
              "\"article\"",
              "\"aside\"",
              "\"audio\"",
              "\"b\"",
              "\"base\"",
              "\"bdi\"",
              "\"bdo\"",
              "\"blockquote\"",
              "\"body\"",
              "\"br\"",
              "\"button\"",
              "\"canvas\"",
              "\"caption\"",
              "\"cite\"",
              "\"col\"",
              "\"colgroup\"",
              "\"datalist\"",
              "\"dd\"",
              "\"del\"",
              "\"details\"",
              "\"dfn\"",
              "\"dialog\"",
              "\"div\"",
              "\"dl\"",
              "\"dt\"",
              "\"em\"",
              "\"embed\"",
              "\"fieldset\"",
              "\"figcaption\"",
              "\"figure\"",
              "\"footer\"",
              "\"form\"",
              "\"h1\"",
              "\"h2\"",
              "\"h3\"",
              "\"h4\"",
              "\"h5\"",
              "\"h6\"",
              "\"head\"",
              "\"header\"",
              "\"hgroup\"",
              "\"hr\"",
              "\"i\"",
              "\"iframe\"",
              "\"img\"",
              "\"input\"",
              "\"ins\"",
              "\"kbd\"",
              "\"legend\"",
              "\"li\"",
              "\"mark\"",
              "\"menu\"",
              "\"meta\"",
              "\"meter\"",
              "\"nav\"",
              "\"noscript\"",
              "\"ol\"",
              "\"optgroup\"",
              "\"option\"",
              "\"output\"",
              "\"p\"",
              "\"picture\"",
              "\"pre\"",
              "\"progress\"",
              "\"q\"",
              "\"rp\"",
              "\"rt\"",
              "\"s\"",
              "\"samp\"",
              "\"script\"",
              "\"section\"",
              "\"select\"",
              "\"slot\"",
              "\"span\"",
              "\"strong\"",
              "\"summary\"",
              "\"table\"",
              "\"tbody\"",
              "\"td\"",
              "\"textarea\"",
              "\"tfoot\"",
              "\"th\"",
              "\"thead\"",
              "\"time\"",
              "\"tr\"",
              "\"track\"",
              "\"u\"",
              "\"ul\"",
              "\"var\"",
              "\"video\"",
              "\"wbr\""
            ]
          },
          "default": "\"div\""
        },
        {
          "name": "padded",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "boolean | { md?: boolean | undefined; dark?: boolean | undefined; light?: boolean | undefined; initial?: boolean | undefined; xs?: boolean | undefined; sm?: boolean | undefined; lg?: boolean | undefined; ... 4 more ...; portrait?: boolean | undefined; } | undefined",
          "schema": {
            "kind": "enum",
            "type": "boolean | { md?: boolean | undefined; dark?: boolean | undefined; light?: boolean | undefined; initial?: boolean | undefined; xs?: boolean | undefined; sm?: boolean | undefined; lg?: boolean | undefined; ... 4 more ...; portrait?: boolean | undefined; } | undefined",
            "schema": [
              "undefined",
              "false",
              "true",
              "{ md?: boolean | undefined; dark?: boolean | undefined; light?: boolean | undefined; initial?: boolean | undefined; xs?: boolean | undefined; sm?: boolean | undefined; lg?: boolean | undefined; ... 4 more ...; portrait?: boolean | undefined; }"
            ]
          }
        },
        {
          "name": "fluid",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "boolean | { md?: boolean | undefined; dark?: boolean | undefined; light?: boolean | undefined; initial?: boolean | undefined; xs?: boolean | undefined; sm?: boolean | undefined; lg?: boolean | undefined; ... 4 more ...; portrait?: boolean | undefined; } | undefined",
          "schema": {
            "kind": "enum",
            "type": "boolean | { md?: boolean | undefined; dark?: boolean | undefined; light?: boolean | undefined; initial?: boolean | undefined; xs?: boolean | undefined; sm?: boolean | undefined; lg?: boolean | undefined; ... 4 more ...; portrait?: boolean | undefined; } | undefined",
            "schema": [
              "undefined",
              "false",
              "true",
              "{ md?: boolean | undefined; dark?: boolean | undefined; light?: boolean | undefined; initial?: boolean | undefined; xs?: boolean | undefined; sm?: boolean | undefined; lg?: boolean | undefined; ... 4 more ...; portrait?: boolean | undefined; }"
            ]
          }
        }
      ],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "as",
          "type": "keyof HTMLElementTagNameMap",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "keyof HTMLElementTagNameMap",
            "schema": [
              "\"object\"",
              "\"style\"",
              "\"map\"",
              "\"data\"",
              "\"template\"",
              "\"link\"",
              "\"small\"",
              "\"sub\"",
              "\"sup\"",
              "\"title\"",
              "\"label\"",
              "\"source\"",
              "\"main\"",
              "\"html\"",
              "\"ruby\"",
              "\"code\"",
              "\"a\"",
              "\"abbr\"",
              "\"address\"",
              "\"area\"",
              "\"article\"",
              "\"aside\"",
              "\"audio\"",
              "\"b\"",
              "\"base\"",
              "\"bdi\"",
              "\"bdo\"",
              "\"blockquote\"",
              "\"body\"",
              "\"br\"",
              "\"button\"",
              "\"canvas\"",
              "\"caption\"",
              "\"cite\"",
              "\"col\"",
              "\"colgroup\"",
              "\"datalist\"",
              "\"dd\"",
              "\"del\"",
              "\"details\"",
              "\"dfn\"",
              "\"dialog\"",
              "\"div\"",
              "\"dl\"",
              "\"dt\"",
              "\"em\"",
              "\"embed\"",
              "\"fieldset\"",
              "\"figcaption\"",
              "\"figure\"",
              "\"footer\"",
              "\"form\"",
              "\"h1\"",
              "\"h2\"",
              "\"h3\"",
              "\"h4\"",
              "\"h5\"",
              "\"h6\"",
              "\"head\"",
              "\"header\"",
              "\"hgroup\"",
              "\"hr\"",
              "\"i\"",
              "\"iframe\"",
              "\"img\"",
              "\"input\"",
              "\"ins\"",
              "\"kbd\"",
              "\"legend\"",
              "\"li\"",
              "\"mark\"",
              "\"menu\"",
              "\"meta\"",
              "\"meter\"",
              "\"nav\"",
              "\"noscript\"",
              "\"ol\"",
              "\"optgroup\"",
              "\"option\"",
              "\"output\"",
              "\"p\"",
              "\"picture\"",
              "\"pre\"",
              "\"progress\"",
              "\"q\"",
              "\"rp\"",
              "\"rt\"",
              "\"s\"",
              "\"samp\"",
              "\"script\"",
              "\"section\"",
              "\"select\"",
              "\"slot\"",
              "\"span\"",
              "\"strong\"",
              "\"summary\"",
              "\"table\"",
              "\"tbody\"",
              "\"td\"",
              "\"textarea\"",
              "\"tfoot\"",
              "\"th\"",
              "\"thead\"",
              "\"time\"",
              "\"tr\"",
              "\"track\"",
              "\"u\"",
              "\"ul\"",
              "\"var\"",
              "\"video\"",
              "\"wbr\""
            ]
          }
        },
        {
          "name": "padded",
          "type": "boolean | { md?: boolean | undefined; dark?: boolean | undefined; light?: boolean | undefined; initial?: boolean | undefined; xs?: boolean | undefined; sm?: boolean | undefined; lg?: boolean | undefined; ... 4 more ...; portrait?: boolean | undefined; }",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "boolean | { md?: boolean | undefined; dark?: boolean | undefined; light?: boolean | undefined; initial?: boolean | undefined; xs?: boolean | undefined; sm?: boolean | undefined; lg?: boolean | undefined; ... 4 more ...; portrait?: boolean | undefined; }",
            "schema": [
              "false",
              "true",
              "{ md?: boolean | undefined; dark?: boolean | undefined; light?: boolean | undefined; initial?: boolean | undefined; xs?: boolean | undefined; sm?: boolean | undefined; lg?: boolean | undefined; ... 4 more ...; portrait?: boolean | undefined; }"
            ]
          }
        },
        {
          "name": "fluid",
          "type": "boolean | { md?: boolean | undefined; dark?: boolean | undefined; light?: boolean | undefined; initial?: boolean | undefined; xs?: boolean | undefined; sm?: boolean | undefined; lg?: boolean | undefined; ... 4 more ...; portrait?: boolean | undefined; }",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "boolean | { md?: boolean | undefined; dark?: boolean | undefined; light?: boolean | undefined; initial?: boolean | undefined; xs?: boolean | undefined; sm?: boolean | undefined; lg?: boolean | undefined; ... 4 more ...; portrait?: boolean | undefined; }",
            "schema": [
              "false",
              "true",
              "{ md?: boolean | undefined; dark?: boolean | undefined; light?: boolean | undefined; initial?: boolean | undefined; xs?: boolean | undefined; sm?: boolean | undefined; lg?: boolean | undefined; ... 4 more ...; portrait?: boolean | undefined; }"
            ]
          }
        }
      ]
    }
  },
  "CopyButton": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/elements/components/globals/CopyButton.vue",
    "pascalName": "CopyButton",
    "kebabName": "copy-button",
    "chunkName": "components/copy-button",
    "shortPath": "node_modules/@nuxt-themes/elements/components/globals/CopyButton.vue",
    "export": "default",
    "fullPath": "/Users/davanedavis/Projects/ncb/ob-embedded-finance-customer-mobile-app/frontier/docs/node_modules/@nuxt-themes/elements/components/globals/CopyButton.vue",
    "meta": {
      "props": [
        {
          "name": "content",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          },
          "default": "\"\""
        }
      ],
      "slots": [],
      "events": [],
      "exposed": [
        {
          "name": "content",
          "type": "string",
          "description": "",
          "schema": "string"
        }
      ]
    }
  },
  "Ellipsis": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/elements/components/globals/Ellipsis.vue",
    "pascalName": "Ellipsis",
    "kebabName": "ellipsis",
    "chunkName": "components/ellipsis",
    "shortPath": "node_modules/@nuxt-themes/elements/components/globals/Ellipsis.vue",
    "export": "default",
    "fullPath": "/Users/davanedavis/Projects/ncb/ob-embedded-finance-customer-mobile-app/frontier/docs/node_modules/@nuxt-themes/elements/components/globals/Ellipsis.vue",
    "meta": {
      "props": [
        {
          "name": "height",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          },
          "default": "\"10rem\""
        },
        {
          "name": "width",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          },
          "default": "\"10rem\""
        },
        {
          "name": "left",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          },
          "default": "\"auto\""
        },
        {
          "name": "zIndex",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          },
          "default": "\"10\""
        },
        {
          "name": "top",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          },
          "default": "\"0\""
        },
        {
          "name": "right",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          },
          "default": "\"auto\""
        },
        {
          "name": "blur",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          },
          "default": "\"50px\""
        },
        {
          "name": "colors",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string[] | undefined",
          "schema": {
            "kind": "enum",
            "type": "string[] | undefined",
            "schema": [
              "undefined",
              {
                "kind": "array",
                "type": "string[]",
                "schema": [
                  "string"
                ]
              }
            ]
          },
          "default": "[\"rgba(0, 71, 225, 0.22)\", \"rgba(26, 214, 255, 0.22)\", \"rgba(0, 220, 130, 0.22)\"]"
        }
      ],
      "slots": [],
      "events": [],
      "exposed": [
        {
          "name": "height",
          "type": "string",
          "description": "",
          "schema": "string"
        },
        {
          "name": "width",
          "type": "string",
          "description": "",
          "schema": "string"
        },
        {
          "name": "left",
          "type": "string",
          "description": "",
          "schema": "string"
        },
        {
          "name": "zIndex",
          "type": "string",
          "description": "",
          "schema": "string"
        },
        {
          "name": "top",
          "type": "string",
          "description": "",
          "schema": "string"
        },
        {
          "name": "right",
          "type": "string",
          "description": "",
          "schema": "string"
        },
        {
          "name": "blur",
          "type": "string",
          "description": "",
          "schema": "string"
        },
        {
          "name": "colors",
          "type": "string[]",
          "description": "",
          "schema": {
            "kind": "array",
            "type": "string[]",
            "schema": [
              "string"
            ]
          }
        }
      ]
    }
  },
  "List": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/elements/components/globals/List.vue",
    "pascalName": "List",
    "kebabName": "list",
    "chunkName": "components/list",
    "shortPath": "node_modules/@nuxt-themes/elements/components/globals/List.vue",
    "export": "default",
    "fullPath": "/Users/davanedavis/Projects/ncb/ob-embedded-finance-customer-mobile-app/frontier/docs/node_modules/@nuxt-themes/elements/components/globals/List.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "NuxtImg": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/elements/components/globals/NuxtImg.vue",
    "pascalName": "NuxtImg",
    "kebabName": "nuxt-img",
    "chunkName": "components/nuxt-img",
    "shortPath": "node_modules/@nuxt-themes/elements/components/globals/NuxtImg.vue",
    "export": "default",
    "fullPath": "/Users/davanedavis/Projects/ncb/ob-embedded-finance-customer-mobile-app/frontier/docs/node_modules/@nuxt-themes/elements/components/globals/NuxtImg.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "Props": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/elements/components/globals/Props.vue",
    "pascalName": "Props",
    "kebabName": "props",
    "chunkName": "components/props",
    "shortPath": "node_modules/@nuxt-themes/elements/components/globals/Props.vue",
    "export": "default",
    "fullPath": "/Users/davanedavis/Projects/ncb/ob-embedded-finance-customer-mobile-app/frontier/docs/node_modules/@nuxt-themes/elements/components/globals/Props.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "Sandbox": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/elements/components/globals/Sandbox.vue",
    "pascalName": "Sandbox",
    "kebabName": "sandbox",
    "chunkName": "components/sandbox",
    "shortPath": "node_modules/@nuxt-themes/elements/components/globals/Sandbox.vue",
    "export": "default",
    "fullPath": "/Users/davanedavis/Projects/ncb/ob-embedded-finance-customer-mobile-app/frontier/docs/node_modules/@nuxt-themes/elements/components/globals/Sandbox.vue",
    "meta": {
      "props": [
        {
          "name": "repo",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          },
          "default": "\"\""
        },
        {
          "name": "branch",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          },
          "default": "\"\""
        },
        {
          "name": "dir",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          },
          "default": "\"\""
        },
        {
          "name": "src",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          },
          "default": "\"\""
        },
        {
          "name": "file",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          },
          "default": "\"app.vue\""
        }
      ],
      "slots": [],
      "events": [],
      "exposed": [
        {
          "name": "repo",
          "type": "string",
          "description": "",
          "schema": "string"
        },
        {
          "name": "branch",
          "type": "string",
          "description": "",
          "schema": "string"
        },
        {
          "name": "dir",
          "type": "string",
          "description": "",
          "schema": "string"
        },
        {
          "name": "src",
          "type": "string",
          "description": "",
          "schema": "string"
        },
        {
          "name": "file",
          "type": "string",
          "description": "",
          "schema": "string"
        }
      ]
    }
  },
  "SourceLink": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/elements/components/globals/SourceLink.vue",
    "pascalName": "SourceLink",
    "kebabName": "source-link",
    "chunkName": "components/source-link",
    "shortPath": "node_modules/@nuxt-themes/elements/components/globals/SourceLink.vue",
    "export": "default",
    "fullPath": "/Users/davanedavis/Projects/ncb/ob-embedded-finance-customer-mobile-app/frontier/docs/node_modules/@nuxt-themes/elements/components/globals/SourceLink.vue",
    "meta": {
      "props": [
        {
          "name": "source",
          "global": false,
          "description": "",
          "tags": [],
          "required": true,
          "type": "string",
          "schema": "string"
        }
      ],
      "slots": [],
      "events": [],
      "exposed": [
        {
          "name": "source",
          "type": "string",
          "description": "",
          "schema": "string"
        }
      ]
    }
  },
  "TabsHeader": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/elements/components/globals/TabsHeader.vue",
    "pascalName": "TabsHeader",
    "kebabName": "tabs-header",
    "chunkName": "components/tabs-header",
    "shortPath": "node_modules/@nuxt-themes/elements/components/globals/TabsHeader.vue",
    "export": "default",
    "fullPath": "/Users/davanedavis/Projects/ncb/ob-embedded-finance-customer-mobile-app/frontier/docs/node_modules/@nuxt-themes/elements/components/globals/TabsHeader.vue",
    "meta": {
      "props": [
        {
          "name": "tabs",
          "global": false,
          "description": "",
          "tags": [],
          "required": true,
          "type": "{ label: string; }[]",
          "schema": {
            "kind": "array",
            "type": "{ label: string; }[]",
            "schema": [
              {
                "kind": "object",
                "type": "{ label: string; }",
                "schema": {
                  "label": {
                    "name": "label",
                    "global": false,
                    "description": "",
                    "tags": [],
                    "required": true,
                    "type": "string",
                    "schema": "string"
                  }
                }
              }
            ]
          }
        },
        {
          "name": "activeTabIndex",
          "global": false,
          "description": "",
          "tags": [],
          "required": true,
          "type": "number",
          "schema": "number"
        }
      ],
      "slots": [
        {
          "name": "footer",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [
        {
          "name": "update:activeTabIndex",
          "type": "any[]",
          "signature": "(event: \"update:activeTabIndex\", ...args: any[]): void",
          "schema": [
            "any"
          ]
        }
      ],
      "exposed": [
        {
          "name": "tabs",
          "type": "{ label: string; }[]",
          "description": "",
          "schema": {
            "kind": "array",
            "type": "{ label: string; }[]",
            "schema": [
              {
                "kind": "object",
                "type": "{ label: string; }",
                "schema": {
                  "label": {
                    "name": "label",
                    "global": false,
                    "description": "",
                    "tags": [],
                    "required": true,
                    "type": "string",
                    "schema": "string"
                  }
                }
              }
            ]
          }
        },
        {
          "name": "activeTabIndex",
          "type": "number",
          "description": "",
          "schema": "number"
        }
      ]
    }
  },
  "Terminal": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/elements/components/globals/Terminal.vue",
    "pascalName": "Terminal",
    "kebabName": "terminal",
    "chunkName": "components/terminal",
    "shortPath": "node_modules/@nuxt-themes/elements/components/globals/Terminal.vue",
    "export": "default",
    "fullPath": "/Users/davanedavis/Projects/ncb/ob-embedded-finance-customer-mobile-app/frontier/docs/node_modules/@nuxt-themes/elements/components/globals/Terminal.vue",
    "meta": {
      "props": [
        {
          "name": "content",
          "global": false,
          "description": "",
          "tags": [],
          "required": true,
          "type": "string",
          "schema": "string"
        }
      ],
      "slots": [],
      "events": [],
      "exposed": [
        {
          "name": "content",
          "type": "string",
          "description": "",
          "schema": "string"
        }
      ]
    }
  },
  "VideoPlayer": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/elements/components/globals/VideoPlayer.vue",
    "pascalName": "VideoPlayer",
    "kebabName": "video-player",
    "chunkName": "components/video-player",
    "shortPath": "node_modules/@nuxt-themes/elements/components/globals/VideoPlayer.vue",
    "export": "default",
    "fullPath": "/Users/davanedavis/Projects/ncb/ob-embedded-finance-customer-mobile-app/frontier/docs/node_modules/@nuxt-themes/elements/components/globals/VideoPlayer.vue",
    "meta": {
      "props": [
        {
          "name": "src",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          },
          "default": "\"\""
        },
        {
          "name": "poster",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          },
          "default": "\"\""
        },
        {
          "name": "sources",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "any[] | undefined",
          "schema": {
            "kind": "enum",
            "type": "any[] | undefined",
            "schema": [
              "undefined",
              {
                "kind": "array",
                "type": "any[]",
                "schema": [
                  "any"
                ]
              }
            ]
          },
          "default": "[]"
        },
        {
          "name": "autoplay",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "boolean | undefined",
          "schema": {
            "kind": "enum",
            "type": "boolean | undefined",
            "schema": [
              "undefined",
              "false",
              "true"
            ]
          },
          "default": "false"
        }
      ],
      "slots": [],
      "events": [],
      "exposed": [
        {
          "name": "src",
          "type": "string",
          "description": "",
          "schema": "string"
        },
        {
          "name": "poster",
          "type": "string",
          "description": "",
          "schema": "string"
        },
        {
          "name": "sources",
          "type": "any[]",
          "description": "",
          "schema": {
            "kind": "array",
            "type": "any[]",
            "schema": [
              "any"
            ]
          }
        },
        {
          "name": "autoplay",
          "type": "boolean",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "boolean",
            "schema": [
              "false",
              "true"
            ]
          }
        }
      ]
    }
  },
  "IconCodeSandBox": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/elements/components/icons/IconCodeSandBox.vue",
    "pascalName": "IconCodeSandBox",
    "kebabName": "icon-code-sand-box",
    "chunkName": "components/icon-code-sand-box",
    "shortPath": "node_modules/@nuxt-themes/elements/components/icons/IconCodeSandBox.vue",
    "export": "default",
    "fullPath": "/Users/davanedavis/Projects/ncb/ob-embedded-finance-customer-mobile-app/frontier/docs/node_modules/@nuxt-themes/elements/components/icons/IconCodeSandBox.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "IconDocus": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/elements/components/icons/IconDocus.vue",
    "pascalName": "IconDocus",
    "kebabName": "icon-docus",
    "chunkName": "components/icon-docus",
    "shortPath": "node_modules/@nuxt-themes/elements/components/icons/IconDocus.vue",
    "export": "default",
    "fullPath": "/Users/davanedavis/Projects/ncb/ob-embedded-finance-customer-mobile-app/frontier/docs/node_modules/@nuxt-themes/elements/components/icons/IconDocus.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "IconNuxt": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/elements/components/icons/IconNuxt.vue",
    "pascalName": "IconNuxt",
    "kebabName": "icon-nuxt",
    "chunkName": "components/icon-nuxt",
    "shortPath": "node_modules/@nuxt-themes/elements/components/icons/IconNuxt.vue",
    "export": "default",
    "fullPath": "/Users/davanedavis/Projects/ncb/ob-embedded-finance-customer-mobile-app/frontier/docs/node_modules/@nuxt-themes/elements/components/icons/IconNuxt.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "IconNuxtContent": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/elements/components/icons/IconNuxtContent.vue",
    "pascalName": "IconNuxtContent",
    "kebabName": "icon-nuxt-content",
    "chunkName": "components/icon-nuxt-content",
    "shortPath": "node_modules/@nuxt-themes/elements/components/icons/IconNuxtContent.vue",
    "export": "default",
    "fullPath": "/Users/davanedavis/Projects/ncb/ob-embedded-finance-customer-mobile-app/frontier/docs/node_modules/@nuxt-themes/elements/components/icons/IconNuxtContent.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "IconNuxtLabs": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/elements/components/icons/IconNuxtLabs.vue",
    "pascalName": "IconNuxtLabs",
    "kebabName": "icon-nuxt-labs",
    "chunkName": "components/icon-nuxt-labs",
    "shortPath": "node_modules/@nuxt-themes/elements/components/icons/IconNuxtLabs.vue",
    "export": "default",
    "fullPath": "/Users/davanedavis/Projects/ncb/ob-embedded-finance-customer-mobile-app/frontier/docs/node_modules/@nuxt-themes/elements/components/icons/IconNuxtLabs.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "IconNuxtStudio": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/elements/components/icons/IconNuxtStudio.vue",
    "pascalName": "IconNuxtStudio",
    "kebabName": "icon-nuxt-studio",
    "chunkName": "components/icon-nuxt-studio",
    "shortPath": "node_modules/@nuxt-themes/elements/components/icons/IconNuxtStudio.vue",
    "export": "default",
    "fullPath": "/Users/davanedavis/Projects/ncb/ob-embedded-finance-customer-mobile-app/frontier/docs/node_modules/@nuxt-themes/elements/components/icons/IconNuxtStudio.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "IconStackBlitz": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/elements/components/icons/IconStackBlitz.vue",
    "pascalName": "IconStackBlitz",
    "kebabName": "icon-stack-blitz",
    "chunkName": "components/icon-stack-blitz",
    "shortPath": "node_modules/@nuxt-themes/elements/components/icons/IconStackBlitz.vue",
    "export": "default",
    "fullPath": "/Users/davanedavis/Projects/ncb/ob-embedded-finance-customer-mobile-app/frontier/docs/node_modules/@nuxt-themes/elements/components/icons/IconStackBlitz.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "IconVueTelescope": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/elements/components/icons/IconVueTelescope.vue",
    "pascalName": "IconVueTelescope",
    "kebabName": "icon-vue-telescope",
    "chunkName": "components/icon-vue-telescope",
    "shortPath": "node_modules/@nuxt-themes/elements/components/icons/IconVueTelescope.vue",
    "export": "default",
    "fullPath": "/Users/davanedavis/Projects/ncb/ob-embedded-finance-customer-mobile-app/frontier/docs/node_modules/@nuxt-themes/elements/components/icons/IconVueTelescope.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "BlockHero": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/elements/components/landing/BlockHero.vue",
    "pascalName": "BlockHero",
    "kebabName": "block-hero",
    "chunkName": "components/block-hero",
    "shortPath": "node_modules/@nuxt-themes/elements/components/landing/BlockHero.vue",
    "export": "default",
    "fullPath": "/Users/davanedavis/Projects/ncb/ob-embedded-finance-customer-mobile-app/frontier/docs/node_modules/@nuxt-themes/elements/components/landing/BlockHero.vue",
    "meta": {
      "props": [
        {
          "name": "secondary",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string[] | undefined",
          "schema": {
            "kind": "enum",
            "type": "string[] | undefined",
            "schema": [
              "undefined",
              {
                "kind": "array",
                "type": "string[]",
                "schema": [
                  "string"
                ]
              }
            ]
          }
        },
        {
          "name": "video",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string[] | undefined",
          "schema": {
            "kind": "enum",
            "type": "string[] | undefined",
            "schema": [
              "undefined",
              {
                "kind": "array",
                "type": "string[]",
                "schema": [
                  "string"
                ]
              }
            ]
          }
        },
        {
          "name": "cta",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string[] | undefined",
          "schema": {
            "kind": "enum",
            "type": "string[] | undefined",
            "schema": [
              "undefined",
              {
                "kind": "array",
                "type": "string[]",
                "schema": [
                  "string"
                ]
              }
            ]
          }
        },
        {
          "name": "snippet",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          }
        }
      ],
      "slots": [
        {
          "name": "announce",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        },
        {
          "name": "title",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        },
        {
          "name": "description",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        },
        {
          "name": "extra",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        },
        {
          "name": "actions",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        },
        {
          "name": "support",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "secondary",
          "type": "string[] | undefined",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "string[] | undefined",
            "schema": [
              "undefined",
              {
                "kind": "array",
                "type": "string[]",
                "schema": [
                  "string"
                ]
              }
            ]
          }
        },
        {
          "name": "video",
          "type": "string[] | undefined",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "string[] | undefined",
            "schema": [
              "undefined",
              {
                "kind": "array",
                "type": "string[]",
                "schema": [
                  "string"
                ]
              }
            ]
          }
        },
        {
          "name": "cta",
          "type": "string[] | undefined",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "string[] | undefined",
            "schema": [
              "undefined",
              {
                "kind": "array",
                "type": "string[]",
                "schema": [
                  "string"
                ]
              }
            ]
          }
        },
        {
          "name": "snippet",
          "type": "string | undefined",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          }
        }
      ]
    }
  },
  "Card": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/elements/components/landing/Card.vue",
    "pascalName": "Card",
    "kebabName": "card",
    "chunkName": "components/card",
    "shortPath": "node_modules/@nuxt-themes/elements/components/landing/Card.vue",
    "export": "default",
    "fullPath": "/Users/davanedavis/Projects/ncb/ob-embedded-finance-customer-mobile-app/frontier/docs/node_modules/@nuxt-themes/elements/components/landing/Card.vue",
    "meta": {
      "props": [
        {
          "name": "icon",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          },
          "default": "\"\""
        },
        {
          "name": "iconClass",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          },
          "default": "\"\""
        },
        {
          "name": "blurry",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "boolean | undefined",
          "schema": {
            "kind": "enum",
            "type": "boolean | undefined",
            "schema": [
              "undefined",
              "false",
              "true"
            ]
          },
          "default": "true"
        }
      ],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "icon",
          "type": "string",
          "description": "",
          "schema": "string"
        },
        {
          "name": "iconClass",
          "type": "string",
          "description": "",
          "schema": "string"
        },
        {
          "name": "blurry",
          "type": "boolean",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "boolean",
            "schema": [
              "false",
              "true"
            ]
          }
        }
      ]
    }
  },
  "CardGrid": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/elements/components/landing/CardGrid.vue",
    "pascalName": "CardGrid",
    "kebabName": "card-grid",
    "chunkName": "components/card-grid",
    "shortPath": "node_modules/@nuxt-themes/elements/components/landing/CardGrid.vue",
    "export": "default",
    "fullPath": "/Users/davanedavis/Projects/ncb/ob-embedded-finance-customer-mobile-app/frontier/docs/node_modules/@nuxt-themes/elements/components/landing/CardGrid.vue",
    "meta": {
      "props": [
        {
          "name": "title",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          },
          "default": "\"Features\""
        }
      ],
      "slots": [
        {
          "name": "root",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        },
        {
          "name": "title",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        },
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "title",
          "type": "string",
          "description": "",
          "schema": "string"
        }
      ]
    }
  },
  "VoltaBoard": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/elements/components/volta/VoltaBoard.vue",
    "pascalName": "VoltaBoard",
    "kebabName": "volta-board",
    "chunkName": "components/volta-board",
    "shortPath": "node_modules/@nuxt-themes/elements/components/volta/VoltaBoard.vue",
    "export": "default",
    "fullPath": "/Users/davanedavis/Projects/ncb/ob-embedded-finance-customer-mobile-app/frontier/docs/node_modules/@nuxt-themes/elements/components/volta/VoltaBoard.vue",
    "meta": {
      "props": [
        {
          "name": "token",
          "global": false,
          "description": "",
          "tags": [],
          "required": true,
          "type": "string",
          "schema": "string"
        }
      ],
      "slots": [],
      "events": [],
      "exposed": [
        {
          "name": "token",
          "type": "string",
          "description": "",
          "schema": "string"
        }
      ]
    }
  },
  "ComponentPlayground": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/elements/components/meta/ComponentPlayground.vue",
    "pascalName": "ComponentPlayground",
    "kebabName": "component-playground",
    "chunkName": "components/component-playground",
    "shortPath": "node_modules/@nuxt-themes/elements/components/meta/ComponentPlayground.vue",
    "export": "default",
    "fullPath": "/Users/davanedavis/Projects/ncb/ob-embedded-finance-customer-mobile-app/frontier/docs/node_modules/@nuxt-themes/elements/components/meta/ComponentPlayground.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "ComponentPlaygroundData": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/elements/components/meta/ComponentPlaygroundData.vue",
    "pascalName": "ComponentPlaygroundData",
    "kebabName": "component-playground-data",
    "chunkName": "components/component-playground-data",
    "shortPath": "node_modules/@nuxt-themes/elements/components/meta/ComponentPlaygroundData.vue",
    "export": "default",
    "fullPath": "/Users/davanedavis/Projects/ncb/ob-embedded-finance-customer-mobile-app/frontier/docs/node_modules/@nuxt-themes/elements/components/meta/ComponentPlaygroundData.vue",
    "meta": {
      "props": [
        {
          "name": "modelValue",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "Record<string, any> | undefined",
          "schema": {
            "kind": "enum",
            "type": "Record<string, any> | undefined",
            "schema": [
              "undefined",
              "Record<string, any>"
            ]
          },
          "default": "{}"
        },
        {
          "name": "componentData",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "Record<string, any> | undefined",
          "schema": {
            "kind": "enum",
            "type": "Record<string, any> | undefined",
            "schema": [
              "undefined",
              "Record<string, any>"
            ]
          },
          "default": "{}"
        }
      ],
      "slots": [],
      "events": [
        {
          "name": "update:modelValue",
          "type": "any[]",
          "signature": "(event: \"update:modelValue\", ...args: any[]): void",
          "schema": [
            "any"
          ]
        }
      ],
      "exposed": [
        {
          "name": "modelValue",
          "type": "Record<string, any>",
          "description": "",
          "schema": "Record<string, any>"
        },
        {
          "name": "componentData",
          "type": "Record<string, any>",
          "description": "",
          "schema": "Record<string, any>"
        }
      ]
    }
  },
  "ComponentPlaygroundProps": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/elements/components/meta/ComponentPlaygroundProps.vue",
    "pascalName": "ComponentPlaygroundProps",
    "kebabName": "component-playground-props",
    "chunkName": "components/component-playground-props",
    "shortPath": "node_modules/@nuxt-themes/elements/components/meta/ComponentPlaygroundProps.vue",
    "export": "default",
    "fullPath": "/Users/davanedavis/Projects/ncb/ob-embedded-finance-customer-mobile-app/frontier/docs/node_modules/@nuxt-themes/elements/components/meta/ComponentPlaygroundProps.vue",
    "meta": {
      "props": [
        {
          "name": "modelValue",
          "global": false,
          "description": "",
          "tags": [],
          "required": true,
          "type": "Record<string, any>",
          "schema": "Record<string, any>"
        },
        {
          "name": "componentData",
          "global": false,
          "description": "",
          "tags": [],
          "required": true,
          "type": "Record<string, any>",
          "schema": "Record<string, any>"
        }
      ],
      "slots": [],
      "events": [
        {
          "name": "update:modelValue",
          "type": "any[]",
          "signature": "(event: \"update:modelValue\", ...args: any[]): void",
          "schema": [
            "any"
          ]
        }
      ],
      "exposed": [
        {
          "name": "modelValue",
          "type": "Record<string, any>",
          "description": "",
          "schema": "Record<string, any>"
        },
        {
          "name": "componentData",
          "type": "Record<string, any>",
          "description": "",
          "schema": "Record<string, any>"
        }
      ]
    }
  },
  "ComponentPlaygroundSlots": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/elements/components/meta/ComponentPlaygroundSlots.vue",
    "pascalName": "ComponentPlaygroundSlots",
    "kebabName": "component-playground-slots",
    "chunkName": "components/component-playground-slots",
    "shortPath": "node_modules/@nuxt-themes/elements/components/meta/ComponentPlaygroundSlots.vue",
    "export": "default",
    "fullPath": "/Users/davanedavis/Projects/ncb/ob-embedded-finance-customer-mobile-app/frontier/docs/node_modules/@nuxt-themes/elements/components/meta/ComponentPlaygroundSlots.vue",
    "meta": {
      "props": [
        {
          "name": "componentData",
          "global": false,
          "description": "",
          "tags": [],
          "required": true,
          "type": "Record<string, any>",
          "schema": "Record<string, any>"
        }
      ],
      "slots": [],
      "events": [],
      "exposed": [
        {
          "name": "componentData",
          "type": "Record<string, any>",
          "description": "",
          "schema": "Record<string, any>"
        }
      ]
    }
  },
  "ComponentPlaygroundTokens": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/elements/components/meta/ComponentPlaygroundTokens.vue",
    "pascalName": "ComponentPlaygroundTokens",
    "kebabName": "component-playground-tokens",
    "chunkName": "components/component-playground-tokens",
    "shortPath": "node_modules/@nuxt-themes/elements/components/meta/ComponentPlaygroundTokens.vue",
    "export": "default",
    "fullPath": "/Users/davanedavis/Projects/ncb/ob-embedded-finance-customer-mobile-app/frontier/docs/node_modules/@nuxt-themes/elements/components/meta/ComponentPlaygroundTokens.vue",
    "meta": {
      "props": [
        {
          "name": "componentData",
          "global": false,
          "description": "",
          "tags": [],
          "required": true,
          "type": "Record<string, any>",
          "schema": "Record<string, any>"
        }
      ],
      "slots": [],
      "events": [],
      "exposed": [
        {
          "name": "componentData",
          "type": "Record<string, any>",
          "description": "",
          "schema": "Record<string, any>"
        }
      ]
    }
  },
  "TokensPlayground": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/elements/components/meta/TokensPlayground.vue",
    "pascalName": "TokensPlayground",
    "kebabName": "tokens-playground",
    "chunkName": "components/tokens-playground",
    "shortPath": "node_modules/@nuxt-themes/elements/components/meta/TokensPlayground.vue",
    "export": "default",
    "fullPath": "/Users/davanedavis/Projects/ncb/ob-embedded-finance-customer-mobile-app/frontier/docs/node_modules/@nuxt-themes/elements/components/meta/TokensPlayground.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "ContentPreviewMode": {
    "mode": "all",
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxthq/studio/dist/runtime/components/ContentPreviewMode.vue",
    "pascalName": "ContentPreviewMode",
    "kebabName": "content-preview-mode",
    "chunkName": "components/content-preview-mode",
    "shortPath": "node_modules/@nuxthq/studio/dist/runtime/components/ContentPreviewMode.vue",
    "export": "default",
    "fullPath": "/Users/davanedavis/Projects/ncb/ob-embedded-finance-customer-mobile-app/frontier/docs/node_modules/@nuxthq/studio/dist/runtime/components/ContentPreviewMode.vue",
    "meta": {
      "props": [
        {
          "name": "previewToken",
          "global": false,
          "description": "",
          "tags": [],
          "required": true,
          "type": "Record<string, any>",
          "schema": "Record<string, any>"
        },
        {
          "name": "apiURL",
          "global": false,
          "description": "",
          "tags": [],
          "required": true,
          "type": "string",
          "schema": "string"
        },
        {
          "name": "syncPreview",
          "global": false,
          "description": "",
          "tags": [],
          "required": true,
          "type": "Function",
          "schema": {
            "kind": "object",
            "type": "Function",
            "schema": {
              "apply": {
                "name": "apply",
                "global": false,
                "description": "Calls the function, substituting the specified object for the this value of the function, and the specified array for the arguments of the function.",
                "tags": [
                  {
                    "name": "param",
                    "text": "thisArg The object to be used as the this object."
                  },
                  {
                    "name": "param",
                    "text": "argArray A set of arguments to be passed to the function."
                  }
                ],
                "required": true,
                "type": "(this: Function, thisArg: any, argArray?: any) => any",
                "schema": {
                  "kind": "event",
                  "type": "(this: Function, thisArg: any, argArray?: any): any",
                  "schema": []
                }
              },
              "call": {
                "name": "call",
                "global": false,
                "description": "Calls a method of an object, substituting another object for the current object.",
                "tags": [
                  {
                    "name": "param",
                    "text": "thisArg The object to be used as the current object."
                  },
                  {
                    "name": "param",
                    "text": "argArray A list of arguments to be passed to the method."
                  }
                ],
                "required": true,
                "type": "(this: Function, thisArg: any, ...argArray: any[]) => any",
                "schema": {
                  "kind": "event",
                  "type": "(this: Function, thisArg: any, ...argArray: any[]): any",
                  "schema": []
                }
              },
              "bind": {
                "name": "bind",
                "global": false,
                "description": "For a given function, creates a bound function that has the same body as the original function.\r\nThe this object of the bound function is associated with the specified object, and has the specified initial parameters.",
                "tags": [
                  {
                    "name": "param",
                    "text": "thisArg An object to which the this keyword can refer inside the new function."
                  },
                  {
                    "name": "param",
                    "text": "argArray A list of arguments to be passed to the new function."
                  }
                ],
                "required": true,
                "type": "(this: Function, thisArg: any, ...argArray: any[]) => any",
                "schema": {
                  "kind": "event",
                  "type": "(this: Function, thisArg: any, ...argArray: any[]): any",
                  "schema": []
                }
              },
              "toString": {
                "name": "toString",
                "global": false,
                "description": "Returns a string representation of a function.",
                "tags": [],
                "required": true,
                "type": "() => string",
                "schema": {
                  "kind": "event",
                  "type": "(): string"
                }
              },
              "prototype": {
                "name": "prototype",
                "global": false,
                "description": "",
                "tags": [],
                "required": true,
                "type": "any",
                "schema": "any"
              },
              "length": {
                "name": "length",
                "global": false,
                "description": "",
                "tags": [],
                "required": true,
                "type": "number",
                "schema": "number"
              },
              "arguments": {
                "name": "arguments",
                "global": false,
                "description": "",
                "tags": [],
                "required": true,
                "type": "any",
                "schema": "any"
              },
              "caller": {
                "name": "caller",
                "global": false,
                "description": "",
                "tags": [],
                "required": true,
                "type": "Function",
                "schema": "Function"
              },
              "name": {
                "name": "name",
                "global": false,
                "description": "Returns the name of the function. Function names are read-only and can not be changed.",
                "tags": [],
                "required": true,
                "type": "string",
                "schema": "string"
              },
              "__@hasInstance@784": {
                "name": "__@hasInstance@784",
                "global": false,
                "description": "Determines whether the given value inherits from this function if this function was used\r\nas a constructor function.\r\n\r\nA constructor function can control which objects are recognized as its instances by\r\n'instanceof' by overriding this method.",
                "tags": [],
                "required": true,
                "type": "(value: any) => boolean",
                "schema": {
                  "kind": "event",
                  "type": "(value: any): boolean",
                  "schema": []
                }
              }
            }
          }
        },
        {
          "name": "requestPreviewSyncAPI",
          "global": false,
          "description": "",
          "tags": [],
          "required": true,
          "type": "Function",
          "schema": {
            "kind": "object",
            "type": "Function",
            "schema": {
              "apply": {
                "name": "apply",
                "global": false,
                "description": "Calls the function, substituting the specified object for the this value of the function, and the specified array for the arguments of the function.",
                "tags": [
                  {
                    "name": "param",
                    "text": "thisArg The object to be used as the this object."
                  },
                  {
                    "name": "param",
                    "text": "argArray A set of arguments to be passed to the function."
                  }
                ],
                "required": true,
                "type": "(this: Function, thisArg: any, argArray?: any) => any",
                "schema": {
                  "kind": "event",
                  "type": "(this: Function, thisArg: any, argArray?: any): any",
                  "schema": []
                }
              },
              "call": {
                "name": "call",
                "global": false,
                "description": "Calls a method of an object, substituting another object for the current object.",
                "tags": [
                  {
                    "name": "param",
                    "text": "thisArg The object to be used as the current object."
                  },
                  {
                    "name": "param",
                    "text": "argArray A list of arguments to be passed to the method."
                  }
                ],
                "required": true,
                "type": "(this: Function, thisArg: any, ...argArray: any[]) => any",
                "schema": {
                  "kind": "event",
                  "type": "(this: Function, thisArg: any, ...argArray: any[]): any",
                  "schema": []
                }
              },
              "bind": {
                "name": "bind",
                "global": false,
                "description": "For a given function, creates a bound function that has the same body as the original function.\r\nThe this object of the bound function is associated with the specified object, and has the specified initial parameters.",
                "tags": [
                  {
                    "name": "param",
                    "text": "thisArg An object to which the this keyword can refer inside the new function."
                  },
                  {
                    "name": "param",
                    "text": "argArray A list of arguments to be passed to the new function."
                  }
                ],
                "required": true,
                "type": "(this: Function, thisArg: any, ...argArray: any[]) => any",
                "schema": {
                  "kind": "event",
                  "type": "(this: Function, thisArg: any, ...argArray: any[]): any",
                  "schema": []
                }
              },
              "toString": {
                "name": "toString",
                "global": false,
                "description": "Returns a string representation of a function.",
                "tags": [],
                "required": true,
                "type": "() => string",
                "schema": {
                  "kind": "event",
                  "type": "(): string"
                }
              },
              "prototype": {
                "name": "prototype",
                "global": false,
                "description": "",
                "tags": [],
                "required": true,
                "type": "any",
                "schema": "any"
              },
              "length": {
                "name": "length",
                "global": false,
                "description": "",
                "tags": [],
                "required": true,
                "type": "number",
                "schema": "number"
              },
              "arguments": {
                "name": "arguments",
                "global": false,
                "description": "",
                "tags": [],
                "required": true,
                "type": "any",
                "schema": "any"
              },
              "caller": {
                "name": "caller",
                "global": false,
                "description": "",
                "tags": [],
                "required": true,
                "type": "Function",
                "schema": "Function"
              },
              "name": {
                "name": "name",
                "global": false,
                "description": "Returns the name of the function. Function names are read-only and can not be changed.",
                "tags": [],
                "required": true,
                "type": "string",
                "schema": "string"
              },
              "__@hasInstance@784": {
                "name": "__@hasInstance@784",
                "global": false,
                "description": "Determines whether the given value inherits from this function if this function was used\r\nas a constructor function.\r\n\r\nA constructor function can control which objects are recognized as its instances by\r\n'instanceof' by overriding this method.",
                "tags": [],
                "required": true,
                "type": "(value: any) => boolean",
                "schema": {
                  "kind": "event",
                  "type": "(value: any): boolean",
                  "schema": []
                }
              }
            }
          }
        }
      ],
      "slots": [],
      "events": [],
      "exposed": [
        {
          "name": "previewToken",
          "type": "Record<string, any>",
          "description": "",
          "schema": "Record<string, any>"
        },
        {
          "name": "apiURL",
          "type": "string",
          "description": "",
          "schema": "string"
        },
        {
          "name": "syncPreview",
          "type": "Function",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "Function",
            "schema": {
              "apply": {
                "name": "apply",
                "global": false,
                "description": "Calls the function, substituting the specified object for the this value of the function, and the specified array for the arguments of the function.",
                "tags": [
                  {
                    "name": "param",
                    "text": "thisArg The object to be used as the this object."
                  },
                  {
                    "name": "param",
                    "text": "argArray A set of arguments to be passed to the function."
                  }
                ],
                "required": true,
                "type": "(this: Function, thisArg: any, argArray?: any) => any",
                "schema": {
                  "kind": "event",
                  "type": "(this: Function, thisArg: any, argArray?: any): any",
                  "schema": []
                }
              },
              "call": {
                "name": "call",
                "global": false,
                "description": "Calls a method of an object, substituting another object for the current object.",
                "tags": [
                  {
                    "name": "param",
                    "text": "thisArg The object to be used as the current object."
                  },
                  {
                    "name": "param",
                    "text": "argArray A list of arguments to be passed to the method."
                  }
                ],
                "required": true,
                "type": "(this: Function, thisArg: any, ...argArray: any[]) => any",
                "schema": {
                  "kind": "event",
                  "type": "(this: Function, thisArg: any, ...argArray: any[]): any",
                  "schema": []
                }
              },
              "bind": {
                "name": "bind",
                "global": false,
                "description": "For a given function, creates a bound function that has the same body as the original function.\r\nThe this object of the bound function is associated with the specified object, and has the specified initial parameters.",
                "tags": [
                  {
                    "name": "param",
                    "text": "thisArg An object to which the this keyword can refer inside the new function."
                  },
                  {
                    "name": "param",
                    "text": "argArray A list of arguments to be passed to the new function."
                  }
                ],
                "required": true,
                "type": "(this: Function, thisArg: any, ...argArray: any[]) => any",
                "schema": {
                  "kind": "event",
                  "type": "(this: Function, thisArg: any, ...argArray: any[]): any",
                  "schema": []
                }
              },
              "toString": {
                "name": "toString",
                "global": false,
                "description": "Returns a string representation of a function.",
                "tags": [],
                "required": true,
                "type": "() => string",
                "schema": {
                  "kind": "event",
                  "type": "(): string"
                }
              },
              "prototype": {
                "name": "prototype",
                "global": false,
                "description": "",
                "tags": [],
                "required": true,
                "type": "any",
                "schema": "any"
              },
              "length": {
                "name": "length",
                "global": false,
                "description": "",
                "tags": [],
                "required": true,
                "type": "number",
                "schema": "number"
              },
              "arguments": {
                "name": "arguments",
                "global": false,
                "description": "",
                "tags": [],
                "required": true,
                "type": "any",
                "schema": "any"
              },
              "caller": {
                "name": "caller",
                "global": false,
                "description": "",
                "tags": [],
                "required": true,
                "type": "Function",
                "schema": "Function"
              },
              "name": {
                "name": "name",
                "global": false,
                "description": "Returns the name of the function. Function names are read-only and can not be changed.",
                "tags": [],
                "required": true,
                "type": "string",
                "schema": "string"
              },
              "__@hasInstance@784": {
                "name": "__@hasInstance@784",
                "global": false,
                "description": "Determines whether the given value inherits from this function if this function was used\r\nas a constructor function.\r\n\r\nA constructor function can control which objects are recognized as its instances by\r\n'instanceof' by overriding this method.",
                "tags": [],
                "required": true,
                "type": "(value: any) => boolean",
                "schema": {
                  "kind": "event",
                  "type": "(value: any): boolean",
                  "schema": []
                }
              }
            }
          }
        },
        {
          "name": "requestPreviewSyncAPI",
          "type": "Function",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "Function",
            "schema": {
              "apply": {
                "name": "apply",
                "global": false,
                "description": "Calls the function, substituting the specified object for the this value of the function, and the specified array for the arguments of the function.",
                "tags": [
                  {
                    "name": "param",
                    "text": "thisArg The object to be used as the this object."
                  },
                  {
                    "name": "param",
                    "text": "argArray A set of arguments to be passed to the function."
                  }
                ],
                "required": true,
                "type": "(this: Function, thisArg: any, argArray?: any) => any",
                "schema": {
                  "kind": "event",
                  "type": "(this: Function, thisArg: any, argArray?: any): any",
                  "schema": []
                }
              },
              "call": {
                "name": "call",
                "global": false,
                "description": "Calls a method of an object, substituting another object for the current object.",
                "tags": [
                  {
                    "name": "param",
                    "text": "thisArg The object to be used as the current object."
                  },
                  {
                    "name": "param",
                    "text": "argArray A list of arguments to be passed to the method."
                  }
                ],
                "required": true,
                "type": "(this: Function, thisArg: any, ...argArray: any[]) => any",
                "schema": {
                  "kind": "event",
                  "type": "(this: Function, thisArg: any, ...argArray: any[]): any",
                  "schema": []
                }
              },
              "bind": {
                "name": "bind",
                "global": false,
                "description": "For a given function, creates a bound function that has the same body as the original function.\r\nThe this object of the bound function is associated with the specified object, and has the specified initial parameters.",
                "tags": [
                  {
                    "name": "param",
                    "text": "thisArg An object to which the this keyword can refer inside the new function."
                  },
                  {
                    "name": "param",
                    "text": "argArray A list of arguments to be passed to the new function."
                  }
                ],
                "required": true,
                "type": "(this: Function, thisArg: any, ...argArray: any[]) => any",
                "schema": {
                  "kind": "event",
                  "type": "(this: Function, thisArg: any, ...argArray: any[]): any",
                  "schema": []
                }
              },
              "toString": {
                "name": "toString",
                "global": false,
                "description": "Returns a string representation of a function.",
                "tags": [],
                "required": true,
                "type": "() => string",
                "schema": {
                  "kind": "event",
                  "type": "(): string"
                }
              },
              "prototype": {
                "name": "prototype",
                "global": false,
                "description": "",
                "tags": [],
                "required": true,
                "type": "any",
                "schema": "any"
              },
              "length": {
                "name": "length",
                "global": false,
                "description": "",
                "tags": [],
                "required": true,
                "type": "number",
                "schema": "number"
              },
              "arguments": {
                "name": "arguments",
                "global": false,
                "description": "",
                "tags": [],
                "required": true,
                "type": "any",
                "schema": "any"
              },
              "caller": {
                "name": "caller",
                "global": false,
                "description": "",
                "tags": [],
                "required": true,
                "type": "Function",
                "schema": "Function"
              },
              "name": {
                "name": "name",
                "global": false,
                "description": "Returns the name of the function. Function names are read-only and can not be changed.",
                "tags": [],
                "required": true,
                "type": "string",
                "schema": "string"
              },
              "__@hasInstance@784": {
                "name": "__@hasInstance@784",
                "global": false,
                "description": "Determines whether the given value inherits from this function if this function was used\r\nas a constructor function.\r\n\r\nA constructor function can control which objects are recognized as its instances by\r\n'instanceof' by overriding this method.",
                "tags": [],
                "required": true,
                "type": "(value: any) => boolean",
                "schema": {
                  "kind": "event",
                  "type": "(value: any): boolean",
                  "schema": []
                }
              }
            }
          }
        }
      ]
    }
  },
  "ContentDoc": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt/content/dist/runtime/components/ContentDoc.vue",
    "pascalName": "ContentDoc",
    "kebabName": "content-doc",
    "chunkName": "components/content-doc",
    "shortPath": "node_modules/@nuxt/content/dist/runtime/components/ContentDoc.vue",
    "export": "default",
    "fullPath": "/Users/davanedavis/Projects/ncb/ob-embedded-finance-customer-mobile-app/frontier/docs/node_modules/@nuxt/content/dist/runtime/components/ContentDoc.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "ContentList": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt/content/dist/runtime/components/ContentList.vue",
    "pascalName": "ContentList",
    "kebabName": "content-list",
    "chunkName": "components/content-list",
    "shortPath": "node_modules/@nuxt/content/dist/runtime/components/ContentList.vue",
    "export": "default",
    "fullPath": "/Users/davanedavis/Projects/ncb/ob-embedded-finance-customer-mobile-app/frontier/docs/node_modules/@nuxt/content/dist/runtime/components/ContentList.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "ContentNavigation": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt/content/dist/runtime/components/ContentNavigation.vue",
    "pascalName": "ContentNavigation",
    "kebabName": "content-navigation",
    "chunkName": "components/content-navigation",
    "shortPath": "node_modules/@nuxt/content/dist/runtime/components/ContentNavigation.vue",
    "export": "default",
    "fullPath": "/Users/davanedavis/Projects/ncb/ob-embedded-finance-customer-mobile-app/frontier/docs/node_modules/@nuxt/content/dist/runtime/components/ContentNavigation.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "ContentQuery": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt/content/dist/runtime/components/ContentQuery.vue",
    "pascalName": "ContentQuery",
    "kebabName": "content-query",
    "chunkName": "components/content-query",
    "shortPath": "node_modules/@nuxt/content/dist/runtime/components/ContentQuery.vue",
    "export": "default",
    "fullPath": "/Users/davanedavis/Projects/ncb/ob-embedded-finance-customer-mobile-app/frontier/docs/node_modules/@nuxt/content/dist/runtime/components/ContentQuery.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "ContentRenderer": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt/content/dist/runtime/components/ContentRenderer.vue",
    "pascalName": "ContentRenderer",
    "kebabName": "content-renderer",
    "chunkName": "components/content-renderer",
    "shortPath": "node_modules/@nuxt/content/dist/runtime/components/ContentRenderer.vue",
    "export": "default",
    "fullPath": "/Users/davanedavis/Projects/ncb/ob-embedded-finance-customer-mobile-app/frontier/docs/node_modules/@nuxt/content/dist/runtime/components/ContentRenderer.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "ContentRendererMarkdown": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt/content/dist/runtime/components/ContentRendererMarkdown.vue",
    "pascalName": "ContentRendererMarkdown",
    "kebabName": "content-renderer-markdown",
    "chunkName": "components/content-renderer-markdown",
    "shortPath": "node_modules/@nuxt/content/dist/runtime/components/ContentRendererMarkdown.vue",
    "export": "default",
    "fullPath": "/Users/davanedavis/Projects/ncb/ob-embedded-finance-customer-mobile-app/frontier/docs/node_modules/@nuxt/content/dist/runtime/components/ContentRendererMarkdown.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "ContentSlot": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt/content/dist/runtime/components/ContentSlot.vue",
    "pascalName": "ContentSlot",
    "kebabName": "content-slot",
    "chunkName": "components/content-slot",
    "shortPath": "node_modules/@nuxt/content/dist/runtime/components/ContentSlot.vue",
    "export": "default",
    "fullPath": "/Users/davanedavis/Projects/ncb/ob-embedded-finance-customer-mobile-app/frontier/docs/node_modules/@nuxt/content/dist/runtime/components/ContentSlot.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "DocumentDrivenEmpty": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt/content/dist/runtime/components/DocumentDrivenEmpty.vue",
    "pascalName": "DocumentDrivenEmpty",
    "kebabName": "document-driven-empty",
    "chunkName": "components/document-driven-empty",
    "shortPath": "node_modules/@nuxt/content/dist/runtime/components/DocumentDrivenEmpty.vue",
    "export": "default",
    "fullPath": "/Users/davanedavis/Projects/ncb/ob-embedded-finance-customer-mobile-app/frontier/docs/node_modules/@nuxt/content/dist/runtime/components/DocumentDrivenEmpty.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "Markdown": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt/content/dist/runtime/components/Markdown.vue",
    "pascalName": "Markdown",
    "kebabName": "markdown",
    "chunkName": "components/markdown",
    "shortPath": "node_modules/@nuxt/content/dist/runtime/components/Markdown.vue",
    "export": "default",
    "fullPath": "/Users/davanedavis/Projects/ncb/ob-embedded-finance-customer-mobile-app/frontier/docs/node_modules/@nuxt/content/dist/runtime/components/Markdown.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "NuxtWelcome": {
    "export": "default",
    "chunkName": "components/nuxt-welcome",
    "global": false,
    "kebabName": "nuxt-welcome",
    "pascalName": "NuxtWelcome",
    "prefetch": false,
    "preload": false,
    "mode": "all",
    "shortPath": "/Users/davanedavis/Projects/ncb/ob-embedded-finance-customer-mobile-app/frontier/docs/node_modules/@nuxt/ui-templates/dist/templates/welcome.vue",
    "name": "NuxtWelcome",
    "filePath": "/node_modules/@nuxt/ui-templates/dist/templates/welcome.vue",
    "fullPath": "/Users/davanedavis/Projects/ncb/ob-embedded-finance-customer-mobile-app/frontier/docs/node_modules/@nuxt/ui-templates/dist/templates/welcome.vue",
    "meta": {
      "props": [
        {
          "name": "appName",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          },
          "default": "\"Nuxt\""
        },
        {
          "name": "version",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          },
          "default": "\"\""
        },
        {
          "name": "title",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          },
          "default": "\"Welcome to Nuxt!\""
        },
        {
          "name": "readDocs",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          },
          "default": "\"We highly recommend you take a look at the Nuxt documentation, whether you are new or have previous experience with the framework.\""
        },
        {
          "name": "followTwitter",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          },
          "default": "\"Follow the Nuxt Twitter account to get latest news about releases, new modules, tutorials and tips.\""
        },
        {
          "name": "starGitHub",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          },
          "default": "\"Nuxt is open source and the code is available on GitHub, feel free to star it, participate in discussions or dive into the source.\""
        }
      ],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "NuxtLayout": {
    "export": "default",
    "chunkName": "components/nuxt-layout",
    "global": false,
    "kebabName": "nuxt-layout",
    "pascalName": "NuxtLayout",
    "prefetch": false,
    "preload": false,
    "mode": "all",
    "shortPath": "/Users/davanedavis/Projects/ncb/ob-embedded-finance-customer-mobile-app/frontier/docs/node_modules/nuxt/dist/app/components/layout",
    "name": "NuxtLayout",
    "filePath": "/node_modules/nuxt/dist/app/components/layout.mjs",
    "fullPath": "/Users/davanedavis/Projects/ncb/ob-embedded-finance-customer-mobile-app/frontier/docs/node_modules/nuxt/dist/app/components/layout.mjs",
    "meta": {
      "props": [
        {
          "name": "name",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | false | Ref<string | false> | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | false | Ref<string | false> | undefined",
            "schema": [
              "undefined",
              "string",
              "false",
              "Ref<string | false>"
            ]
          },
          "default": "null"
        }
      ],
      "slots": [],
      "events": [],
      "exposed": [
        {
          "name": "name",
          "type": "string | false | Ref<string | false>",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "string | false | Ref<string | false>",
            "schema": [
              "string",
              "false",
              "Ref<string | false>"
            ]
          }
        }
      ]
    }
  },
  "NuxtErrorBoundary": {
    "export": "default",
    "chunkName": "components/nuxt-error-boundary",
    "global": false,
    "kebabName": "nuxt-error-boundary",
    "pascalName": "NuxtErrorBoundary",
    "prefetch": false,
    "preload": false,
    "mode": "all",
    "shortPath": "/Users/davanedavis/Projects/ncb/ob-embedded-finance-customer-mobile-app/frontier/docs/node_modules/nuxt/dist/app/components/nuxt-error-boundary",
    "name": "NuxtErrorBoundary",
    "filePath": "/node_modules/nuxt/dist/app/components/nuxt-error-boundary.mjs",
    "fullPath": "/Users/davanedavis/Projects/ncb/ob-embedded-finance-customer-mobile-app/frontier/docs/node_modules/nuxt/dist/app/components/nuxt-error-boundary.mjs",
    "meta": {
      "props": [],
      "slots": [],
      "events": [
        {
          "name": "error",
          "type": "[_error: unknown]",
          "signature": "(event: \"error\", _error: unknown): void",
          "schema": [
            "unknown"
          ]
        }
      ],
      "exposed": []
    }
  },
  "ServerPlaceholder": {
    "export": "default",
    "chunkName": "components/server-placeholder",
    "global": false,
    "kebabName": "server-placeholder",
    "pascalName": "ServerPlaceholder",
    "prefetch": false,
    "preload": false,
    "mode": "all",
    "shortPath": "/Users/davanedavis/Projects/ncb/ob-embedded-finance-customer-mobile-app/frontier/docs/node_modules/nuxt/dist/app/components/server-placeholder",
    "name": "ServerPlaceholder",
    "filePath": "/node_modules/nuxt/dist/app/components/server-placeholder.mjs",
    "fullPath": "/Users/davanedavis/Projects/ncb/ob-embedded-finance-customer-mobile-app/frontier/docs/node_modules/nuxt/dist/app/components/server-placeholder.mjs",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "NuxtLink": {
    "export": "default",
    "chunkName": "components/nuxt-link",
    "global": false,
    "kebabName": "nuxt-link",
    "pascalName": "NuxtLink",
    "prefetch": false,
    "preload": false,
    "mode": "all",
    "shortPath": "/Users/davanedavis/Projects/ncb/ob-embedded-finance-customer-mobile-app/frontier/docs/node_modules/nuxt/dist/app/components/nuxt-link",
    "name": "NuxtLink",
    "filePath": "/node_modules/nuxt/dist/app/components/nuxt-link.mjs",
    "fullPath": "/Users/davanedavis/Projects/ncb/ob-embedded-finance-customer-mobile-app/frontier/docs/node_modules/nuxt/dist/app/components/nuxt-link.mjs",
    "meta": {
      "props": [
        {
          "name": "to",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "RouteLocationRaw | undefined",
          "schema": {
            "kind": "enum",
            "type": "RouteLocationRaw | undefined",
            "schema": [
              "undefined",
              "string",
              "RouteLocationPathRaw",
              "RouteLocationNamedRaw"
            ]
          }
        },
        {
          "name": "href",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "RouteLocationRaw | undefined",
          "schema": {
            "kind": "enum",
            "type": "RouteLocationRaw | undefined",
            "schema": [
              "undefined",
              "string",
              "RouteLocationPathRaw",
              "RouteLocationNamedRaw"
            ]
          }
        },
        {
          "name": "external",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "boolean | undefined",
          "schema": {
            "kind": "enum",
            "type": "boolean | undefined",
            "schema": [
              "undefined",
              "false",
              "true"
            ]
          }
        },
        {
          "name": "replace",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "boolean | undefined",
          "schema": {
            "kind": "enum",
            "type": "boolean | undefined",
            "schema": [
              "undefined",
              "false",
              "true"
            ]
          }
        },
        {
          "name": "custom",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "boolean | undefined",
          "schema": {
            "kind": "enum",
            "type": "boolean | undefined",
            "schema": [
              "undefined",
              "false",
              "true"
            ]
          }
        },
        {
          "name": "target",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "\"_blank\" | \"_parent\" | \"_self\" | \"_top\" | (string & {}) | null | undefined",
          "schema": {
            "kind": "enum",
            "type": "\"_blank\" | \"_parent\" | \"_self\" | \"_top\" | (string & {}) | null | undefined",
            "schema": [
              "undefined",
              "null",
              "\"_blank\"",
              "\"_parent\"",
              "\"_self\"",
              "\"_top\"",
              {
                "kind": "object",
                "type": "string & {}",
                "schema": {
                  "toString": {
                    "name": "toString",
                    "global": false,
                    "description": "Returns a string representation of a string.",
                    "tags": [],
                    "required": true,
                    "type": "() => string",
                    "schema": {
                      "kind": "event",
                      "type": "(): string"
                    }
                  },
                  "charAt": {
                    "name": "charAt",
                    "global": false,
                    "description": "Returns the character at the specified index.",
                    "tags": [
                      {
                        "name": "param",
                        "text": "pos The zero-based index of the desired character."
                      }
                    ],
                    "required": true,
                    "type": "(pos: number) => string",
                    "schema": {
                      "kind": "event",
                      "type": "(pos: number): string",
                      "schema": []
                    }
                  },
                  "charCodeAt": {
                    "name": "charCodeAt",
                    "global": false,
                    "description": "Returns the Unicode value of the character at the specified location.",
                    "tags": [
                      {
                        "name": "param",
                        "text": "index The zero-based index of the desired character. If there is no character at the specified index, NaN is returned."
                      }
                    ],
                    "required": true,
                    "type": "(index: number) => number",
                    "schema": {
                      "kind": "event",
                      "type": "(index: number): number",
                      "schema": []
                    }
                  },
                  "concat": {
                    "name": "concat",
                    "global": false,
                    "description": "Returns a string that contains the concatenation of two or more strings.",
                    "tags": [
                      {
                        "name": "param",
                        "text": "strings The strings to append to the end of the string."
                      }
                    ],
                    "required": true,
                    "type": "(...strings: string[]) => string",
                    "schema": {
                      "kind": "event",
                      "type": "(...strings: string[]): string",
                      "schema": [
                        "string"
                      ]
                    }
                  },
                  "indexOf": {
                    "name": "indexOf",
                    "global": false,
                    "description": "Returns the position of the first occurrence of a substring.",
                    "tags": [
                      {
                        "name": "param",
                        "text": "searchString The substring to search for in the string"
                      },
                      {
                        "name": "param",
                        "text": "position The index at which to begin searching the String object. If omitted, search starts at the beginning of the string."
                      }
                    ],
                    "required": true,
                    "type": "(searchString: string, position?: number | undefined) => number",
                    "schema": {
                      "kind": "event",
                      "type": "(searchString: string, position?: number | undefined): number",
                      "schema": []
                    }
                  },
                  "lastIndexOf": {
                    "name": "lastIndexOf",
                    "global": false,
                    "description": "Returns the last occurrence of a substring in the string.",
                    "tags": [
                      {
                        "name": "param",
                        "text": "searchString The substring to search for."
                      },
                      {
                        "name": "param",
                        "text": "position The index at which to begin searching. If omitted, the search begins at the end of the string."
                      }
                    ],
                    "required": true,
                    "type": "(searchString: string, position?: number | undefined) => number",
                    "schema": {
                      "kind": "event",
                      "type": "(searchString: string, position?: number | undefined): number",
                      "schema": []
                    }
                  },
                  "localeCompare": {
                    "name": "localeCompare",
                    "global": false,
                    "description": "Determines whether two strings are equivalent in the current locale.\nDetermines whether two strings are equivalent in the current or specified locale.",
                    "tags": [
                      {
                        "name": "param",
                        "text": "that String to compare to target string"
                      },
                      {
                        "name": "param",
                        "text": "that String to compare to target string"
                      },
                      {
                        "name": "param",
                        "text": "locales A locale string or array of locale strings that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used. This parameter must conform to BCP 47 standards; see the Intl.Collator object for details."
                      },
                      {
                        "name": "param",
                        "text": "options An object that contains one or more properties that specify comparison options. see the Intl.Collator object for details."
                      }
                    ],
                    "required": true,
                    "type": "{ (that: string): number; (that: string, locales?: string | string[] | undefined, options?: CollatorOptions | undefined): number; }",
                    "schema": "{ (that: string): number; (that: string, locales?: string | string[] | undefined, options?: CollatorOptions | undefined): number; }"
                  },
                  "match": {
                    "name": "match",
                    "global": false,
                    "description": "Matches a string with a regular expression, and returns an array containing the results of that search.\nMatches a string or an object that supports being matched against, and returns an array\r\ncontaining the results of that search, or null if no matches are found.",
                    "tags": [
                      {
                        "name": "param",
                        "text": "regexp A variable name or string literal containing the regular expression pattern and flags."
                      },
                      {
                        "name": "param",
                        "text": "matcher An object that supports being matched against."
                      }
                    ],
                    "required": true,
                    "type": "{ (regexp: string | RegExp): RegExpMatchArray | null; (matcher: { [Symbol.match](string: string): RegExpMatchArray | null; }): RegExpMatchArray | null; }",
                    "schema": "{ (regexp: string | RegExp): RegExpMatchArray | null; (matcher: { [Symbol.match](string: string): RegExpMatchArray | null; }): RegExpMatchArray | null; }"
                  },
                  "replace": {
                    "name": "replace",
                    "global": false,
                    "description": "Replaces text in a string, using a regular expression or search string.\nPasses a string and {@linkcode replaceValue} to the `[Symbol.replace]` method on {@linkcode searchValue}. This method is expected to implement its own replacement algorithm.\nReplaces text in a string, using an object that supports replacement within a string.",
                    "tags": [
                      {
                        "name": "param",
                        "text": "searchValue A string or regular expression to search for."
                      },
                      {
                        "name": "param",
                        "text": "replaceValue A string containing the text to replace. When the {@linkcode searchValue} is a `RegExp`, all matches are replaced if the `g` flag is set (or only those matches at the beginning, if the `y` flag is also present). Otherwise, only the first match of {@linkcode searchValue} is replaced."
                      },
                      {
                        "name": "param",
                        "text": "searchValue A string to search for."
                      },
                      {
                        "name": "param",
                        "text": "replacer A function that returns the replacement text."
                      },
                      {
                        "name": "param",
                        "text": "searchValue An object that supports searching for and replacing matches within a string."
                      },
                      {
                        "name": "param",
                        "text": "replaceValue The replacement text."
                      },
                      {
                        "name": "param",
                        "text": "searchValue A object can search for and replace matches within a string."
                      },
                      {
                        "name": "param",
                        "text": "replacer A function that returns the replacement text."
                      }
                    ],
                    "required": true,
                    "type": "{ (searchValue: string | RegExp, replaceValue: string): string; (searchValue: string | RegExp, replacer: (substring: string, ...args: any[]) => string): string; (searchValue: { ...; }, replaceValue: string): string; (searchValue: { ...; }, replacer: (substring: string, ...args: any[]) => string): string; }",
                    "schema": "{ (searchValue: string | RegExp, replaceValue: string): string; (searchValue: string | RegExp, replacer: (substring: string, ...args: any[]) => string): string; (searchValue: { ...; }, replaceValue: string): string; (searchValue: { ...; }, replacer: (substring: string, ...args: any[]) => string): string; }"
                  },
                  "search": {
                    "name": "search",
                    "global": false,
                    "description": "Finds the first substring match in a regular expression search.",
                    "tags": [
                      {
                        "name": "param",
                        "text": "regexp The regular expression pattern and applicable flags."
                      },
                      {
                        "name": "param",
                        "text": "searcher An object which supports searching within a string."
                      }
                    ],
                    "required": true,
                    "type": "{ (regexp: string | RegExp): number; (searcher: { [Symbol.search](string: string): number; }): number; }",
                    "schema": "{ (regexp: string | RegExp): number; (searcher: { [Symbol.search](string: string): number; }): number; }"
                  },
                  "slice": {
                    "name": "slice",
                    "global": false,
                    "description": "Returns a section of a string.",
                    "tags": [
                      {
                        "name": "param",
                        "text": "start The index to the beginning of the specified portion of stringObj."
                      },
                      {
                        "name": "param",
                        "text": "end The index to the end of the specified portion of stringObj. The substring includes the characters up to, but not including, the character indicated by end.\r\nIf this value is not specified, the substring continues to the end of stringObj."
                      }
                    ],
                    "required": true,
                    "type": "(start?: number | undefined, end?: number | undefined) => string",
                    "schema": {
                      "kind": "event",
                      "type": "(start?: number | undefined, end?: number | undefined): string",
                      "schema": []
                    }
                  },
                  "split": {
                    "name": "split",
                    "global": false,
                    "description": "Split a string into substrings using the specified separator and return them as an array.",
                    "tags": [
                      {
                        "name": "param",
                        "text": "separator A string that identifies character or characters to use in separating the string. If omitted, a single-element array containing the entire string is returned."
                      },
                      {
                        "name": "param",
                        "text": "limit A value used to limit the number of elements returned in the array."
                      },
                      {
                        "name": "param",
                        "text": "splitter An object that can split a string."
                      },
                      {
                        "name": "param",
                        "text": "limit A value used to limit the number of elements returned in the array."
                      }
                    ],
                    "required": true,
                    "type": "{ (separator: string | RegExp, limit?: number | undefined): string[]; (splitter: { [Symbol.split](string: string, limit?: number | undefined): string[]; }, limit?: number | undefined): string[]; }",
                    "schema": "{ (separator: string | RegExp, limit?: number | undefined): string[]; (splitter: { [Symbol.split](string: string, limit?: number | undefined): string[]; }, limit?: number | undefined): string[]; }"
                  },
                  "substring": {
                    "name": "substring",
                    "global": false,
                    "description": "Returns the substring at the specified location within a String object.",
                    "tags": [
                      {
                        "name": "param",
                        "text": "start The zero-based index number indicating the beginning of the substring."
                      },
                      {
                        "name": "param",
                        "text": "end Zero-based index number indicating the end of the substring. The substring includes the characters up to, but not including, the character indicated by end.\r\nIf end is omitted, the characters from start through the end of the original string are returned."
                      }
                    ],
                    "required": true,
                    "type": "(start: number, end?: number | undefined) => string",
                    "schema": {
                      "kind": "event",
                      "type": "(start: number, end?: number | undefined): string",
                      "schema": []
                    }
                  },
                  "toLowerCase": {
                    "name": "toLowerCase",
                    "global": false,
                    "description": "Converts all the alphabetic characters in a string to lowercase.",
                    "tags": [],
                    "required": true,
                    "type": "() => string",
                    "schema": {
                      "kind": "event",
                      "type": "(): string"
                    }
                  },
                  "toLocaleLowerCase": {
                    "name": "toLocaleLowerCase",
                    "global": false,
                    "description": "Converts all alphabetic characters to lowercase, taking into account the host environment's current locale.",
                    "tags": [],
                    "required": true,
                    "type": "(locales?: string | string[] | undefined) => string",
                    "schema": {
                      "kind": "event",
                      "type": "(locales?: string | string[] | undefined): string",
                      "schema": []
                    }
                  },
                  "toUpperCase": {
                    "name": "toUpperCase",
                    "global": false,
                    "description": "Converts all the alphabetic characters in a string to uppercase.",
                    "tags": [],
                    "required": true,
                    "type": "() => string",
                    "schema": {
                      "kind": "event",
                      "type": "(): string"
                    }
                  },
                  "toLocaleUpperCase": {
                    "name": "toLocaleUpperCase",
                    "global": false,
                    "description": "Returns a string where all alphabetic characters have been converted to uppercase, taking into account the host environment's current locale.",
                    "tags": [],
                    "required": true,
                    "type": "(locales?: string | string[] | undefined) => string",
                    "schema": {
                      "kind": "event",
                      "type": "(locales?: string | string[] | undefined): string",
                      "schema": []
                    }
                  },
                  "trim": {
                    "name": "trim",
                    "global": false,
                    "description": "Removes the leading and trailing white space and line terminator characters from a string.",
                    "tags": [],
                    "required": true,
                    "type": "() => string",
                    "schema": {
                      "kind": "event",
                      "type": "(): string"
                    }
                  },
                  "length": {
                    "name": "length",
                    "global": false,
                    "description": "Returns the length of a String object.",
                    "tags": [],
                    "required": true,
                    "type": "number",
                    "schema": "number"
                  },
                  "substr": {
                    "name": "substr",
                    "global": false,
                    "description": "Gets a substring beginning at the specified location and having the specified length.",
                    "tags": [
                      {
                        "name": "deprecated",
                        "text": "A legacy feature for browser compatibility"
                      },
                      {
                        "name": "param",
                        "text": "from The starting position of the desired substring. The index of the first character in the string is zero."
                      },
                      {
                        "name": "param",
                        "text": "length The number of characters to include in the returned substring."
                      }
                    ],
                    "required": true,
                    "type": "(from: number, length?: number | undefined) => string",
                    "schema": {
                      "kind": "event",
                      "type": "(from: number, length?: number | undefined): string",
                      "schema": []
                    }
                  },
                  "valueOf": {
                    "name": "valueOf",
                    "global": false,
                    "description": "Returns the primitive value of the specified object.",
                    "tags": [],
                    "required": true,
                    "type": "() => string",
                    "schema": {
                      "kind": "event",
                      "type": "(): string"
                    }
                  },
                  "codePointAt": {
                    "name": "codePointAt",
                    "global": false,
                    "description": "Returns a nonnegative integer Number less than 1114112 (0x110000) that is the code point\r\nvalue of the UTF-16 encoded code point starting at the string element at position pos in\r\nthe String resulting from converting this object to a String.\r\nIf there is no element at that position, the result is undefined.\r\nIf a valid UTF-16 surrogate pair does not begin at pos, the result is the code unit at pos.",
                    "tags": [],
                    "required": true,
                    "type": "(pos: number) => number | undefined",
                    "schema": {
                      "kind": "event",
                      "type": "(pos: number): number | undefined",
                      "schema": []
                    }
                  },
                  "includes": {
                    "name": "includes",
                    "global": false,
                    "description": "Returns true if searchString appears as a substring of the result of converting this\r\nobject to a String, at one or more positions that are\r\ngreater than or equal to position; otherwise, returns false.",
                    "tags": [
                      {
                        "name": "param",
                        "text": "searchString search string"
                      },
                      {
                        "name": "param",
                        "text": "position If position is undefined, 0 is assumed, so as to search all of the String."
                      }
                    ],
                    "required": true,
                    "type": "(searchString: string, position?: number | undefined) => boolean",
                    "schema": {
                      "kind": "event",
                      "type": "(searchString: string, position?: number | undefined): boolean",
                      "schema": []
                    }
                  },
                  "endsWith": {
                    "name": "endsWith",
                    "global": false,
                    "description": "Returns true if the sequence of elements of searchString converted to a String is the\r\nsame as the corresponding elements of this object (converted to a String) starting at\r\nendPosition – length(this). Otherwise returns false.",
                    "tags": [],
                    "required": true,
                    "type": "(searchString: string, endPosition?: number | undefined) => boolean",
                    "schema": {
                      "kind": "event",
                      "type": "(searchString: string, endPosition?: number | undefined): boolean",
                      "schema": []
                    }
                  },
                  "normalize": {
                    "name": "normalize",
                    "global": false,
                    "description": "Returns the String value result of normalizing the string into the normalization form\r\nnamed by form as specified in Unicode Standard Annex #15, Unicode Normalization Forms.",
                    "tags": [
                      {
                        "name": "param",
                        "text": "form Applicable values: \"NFC\", \"NFD\", \"NFKC\", or \"NFKD\", If not specified default\r\nis \"NFC\""
                      },
                      {
                        "name": "param",
                        "text": "form Applicable values: \"NFC\", \"NFD\", \"NFKC\", or \"NFKD\", If not specified default\r\nis \"NFC\""
                      }
                    ],
                    "required": true,
                    "type": "{ (form: \"NFC\" | \"NFD\" | \"NFKC\" | \"NFKD\"): string; (form?: string | undefined): string; }",
                    "schema": "{ (form: \"NFC\" | \"NFD\" | \"NFKC\" | \"NFKD\"): string; (form?: string | undefined): string; }"
                  },
                  "repeat": {
                    "name": "repeat",
                    "global": false,
                    "description": "Returns a String value that is made from count copies appended together. If count is 0,\r\nthe empty string is returned.",
                    "tags": [
                      {
                        "name": "param",
                        "text": "count number of copies to append"
                      }
                    ],
                    "required": true,
                    "type": "(count: number) => string",
                    "schema": {
                      "kind": "event",
                      "type": "(count: number): string",
                      "schema": []
                    }
                  },
                  "startsWith": {
                    "name": "startsWith",
                    "global": false,
                    "description": "Returns true if the sequence of elements of searchString converted to a String is the\r\nsame as the corresponding elements of this object (converted to a String) starting at\r\nposition. Otherwise returns false.",
                    "tags": [],
                    "required": true,
                    "type": "(searchString: string, position?: number | undefined) => boolean",
                    "schema": {
                      "kind": "event",
                      "type": "(searchString: string, position?: number | undefined): boolean",
                      "schema": []
                    }
                  },
                  "anchor": {
                    "name": "anchor",
                    "global": false,
                    "description": "Returns an `<a>` HTML anchor element and sets the name attribute to the text value",
                    "tags": [
                      {
                        "name": "deprecated",
                        "text": "A legacy feature for browser compatibility"
                      },
                      {
                        "name": "param",
                        "text": "name"
                      }
                    ],
                    "required": true,
                    "type": "(name: string) => string",
                    "schema": {
                      "kind": "event",
                      "type": "(name: string): string",
                      "schema": []
                    }
                  },
                  "big": {
                    "name": "big",
                    "global": false,
                    "description": "Returns a `<big>` HTML element",
                    "tags": [
                      {
                        "name": "deprecated",
                        "text": "A legacy feature for browser compatibility"
                      }
                    ],
                    "required": true,
                    "type": "() => string",
                    "schema": {
                      "kind": "event",
                      "type": "(): string"
                    }
                  },
                  "blink": {
                    "name": "blink",
                    "global": false,
                    "description": "Returns a `<blink>` HTML element",
                    "tags": [
                      {
                        "name": "deprecated",
                        "text": "A legacy feature for browser compatibility"
                      }
                    ],
                    "required": true,
                    "type": "() => string",
                    "schema": {
                      "kind": "event",
                      "type": "(): string"
                    }
                  },
                  "bold": {
                    "name": "bold",
                    "global": false,
                    "description": "Returns a `<b>` HTML element",
                    "tags": [
                      {
                        "name": "deprecated",
                        "text": "A legacy feature for browser compatibility"
                      }
                    ],
                    "required": true,
                    "type": "() => string",
                    "schema": {
                      "kind": "event",
                      "type": "(): string"
                    }
                  },
                  "fixed": {
                    "name": "fixed",
                    "global": false,
                    "description": "Returns a `<tt>` HTML element",
                    "tags": [
                      {
                        "name": "deprecated",
                        "text": "A legacy feature for browser compatibility"
                      }
                    ],
                    "required": true,
                    "type": "() => string",
                    "schema": {
                      "kind": "event",
                      "type": "(): string"
                    }
                  },
                  "fontcolor": {
                    "name": "fontcolor",
                    "global": false,
                    "description": "Returns a `<font>` HTML element and sets the color attribute value",
                    "tags": [
                      {
                        "name": "deprecated",
                        "text": "A legacy feature for browser compatibility"
                      }
                    ],
                    "required": true,
                    "type": "(color: string) => string",
                    "schema": {
                      "kind": "event",
                      "type": "(color: string): string",
                      "schema": []
                    }
                  },
                  "fontsize": {
                    "name": "fontsize",
                    "global": false,
                    "description": "Returns a `<font>` HTML element and sets the size attribute value",
                    "tags": [
                      {
                        "name": "deprecated",
                        "text": "A legacy feature for browser compatibility"
                      },
                      {
                        "name": "deprecated",
                        "text": "A legacy feature for browser compatibility"
                      }
                    ],
                    "required": true,
                    "type": "{ (size: number): string; (size: string): string; }",
                    "schema": "{ (size: number): string; (size: string): string; }"
                  },
                  "italics": {
                    "name": "italics",
                    "global": false,
                    "description": "Returns an `<i>` HTML element",
                    "tags": [
                      {
                        "name": "deprecated",
                        "text": "A legacy feature for browser compatibility"
                      }
                    ],
                    "required": true,
                    "type": "() => string",
                    "schema": {
                      "kind": "event",
                      "type": "(): string"
                    }
                  },
                  "link": {
                    "name": "link",
                    "global": false,
                    "description": "Returns an `<a>` HTML element and sets the href attribute value",
                    "tags": [
                      {
                        "name": "deprecated",
                        "text": "A legacy feature for browser compatibility"
                      }
                    ],
                    "required": true,
                    "type": "(url: string) => string",
                    "schema": {
                      "kind": "event",
                      "type": "(url: string): string",
                      "schema": []
                    }
                  },
                  "small": {
                    "name": "small",
                    "global": false,
                    "description": "Returns a `<small>` HTML element",
                    "tags": [
                      {
                        "name": "deprecated",
                        "text": "A legacy feature for browser compatibility"
                      }
                    ],
                    "required": true,
                    "type": "() => string",
                    "schema": {
                      "kind": "event",
                      "type": "(): string"
                    }
                  },
                  "strike": {
                    "name": "strike",
                    "global": false,
                    "description": "Returns a `<strike>` HTML element",
                    "tags": [
                      {
                        "name": "deprecated",
                        "text": "A legacy feature for browser compatibility"
                      }
                    ],
                    "required": true,
                    "type": "() => string",
                    "schema": {
                      "kind": "event",
                      "type": "(): string"
                    }
                  },
                  "sub": {
                    "name": "sub",
                    "global": false,
                    "description": "Returns a `<sub>` HTML element",
                    "tags": [
                      {
                        "name": "deprecated",
                        "text": "A legacy feature for browser compatibility"
                      }
                    ],
                    "required": true,
                    "type": "() => string",
                    "schema": {
                      "kind": "event",
                      "type": "(): string"
                    }
                  },
                  "sup": {
                    "name": "sup",
                    "global": false,
                    "description": "Returns a `<sup>` HTML element",
                    "tags": [
                      {
                        "name": "deprecated",
                        "text": "A legacy feature for browser compatibility"
                      }
                    ],
                    "required": true,
                    "type": "() => string",
                    "schema": {
                      "kind": "event",
                      "type": "(): string"
                    }
                  },
                  "padStart": {
                    "name": "padStart",
                    "global": false,
                    "description": "Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length.\r\nThe padding is applied from the start (left) of the current string.",
                    "tags": [
                      {
                        "name": "param",
                        "text": "maxLength The length of the resulting string once the current string has been padded.\r\nIf this parameter is smaller than the current string's length, the current string will be returned as it is."
                      },
                      {
                        "name": "param",
                        "text": "fillString The string to pad the current string with.\r\nIf this string is too long, it will be truncated and the left-most part will be applied.\r\nThe default value for this parameter is \" \" (U+0020)."
                      }
                    ],
                    "required": true,
                    "type": "(maxLength: number, fillString?: string | undefined) => string",
                    "schema": {
                      "kind": "event",
                      "type": "(maxLength: number, fillString?: string | undefined): string",
                      "schema": []
                    }
                  },
                  "padEnd": {
                    "name": "padEnd",
                    "global": false,
                    "description": "Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length.\r\nThe padding is applied from the end (right) of the current string.",
                    "tags": [
                      {
                        "name": "param",
                        "text": "maxLength The length of the resulting string once the current string has been padded.\r\nIf this parameter is smaller than the current string's length, the current string will be returned as it is."
                      },
                      {
                        "name": "param",
                        "text": "fillString The string to pad the current string with.\r\nIf this string is too long, it will be truncated and the left-most part will be applied.\r\nThe default value for this parameter is \" \" (U+0020)."
                      }
                    ],
                    "required": true,
                    "type": "(maxLength: number, fillString?: string | undefined) => string",
                    "schema": {
                      "kind": "event",
                      "type": "(maxLength: number, fillString?: string | undefined): string",
                      "schema": []
                    }
                  },
                  "trimEnd": {
                    "name": "trimEnd",
                    "global": false,
                    "description": "Removes the trailing white space and line terminator characters from a string.",
                    "tags": [],
                    "required": true,
                    "type": "() => string",
                    "schema": {
                      "kind": "event",
                      "type": "(): string"
                    }
                  },
                  "trimStart": {
                    "name": "trimStart",
                    "global": false,
                    "description": "Removes the leading white space and line terminator characters from a string.",
                    "tags": [],
                    "required": true,
                    "type": "() => string",
                    "schema": {
                      "kind": "event",
                      "type": "(): string"
                    }
                  },
                  "trimLeft": {
                    "name": "trimLeft",
                    "global": false,
                    "description": "Removes the leading white space and line terminator characters from a string.",
                    "tags": [
                      {
                        "name": "deprecated",
                        "text": "A legacy feature for browser compatibility. Use `trimStart` instead"
                      }
                    ],
                    "required": true,
                    "type": "() => string",
                    "schema": {
                      "kind": "event",
                      "type": "(): string"
                    }
                  },
                  "trimRight": {
                    "name": "trimRight",
                    "global": false,
                    "description": "Removes the trailing white space and line terminator characters from a string.",
                    "tags": [
                      {
                        "name": "deprecated",
                        "text": "A legacy feature for browser compatibility. Use `trimEnd` instead"
                      }
                    ],
                    "required": true,
                    "type": "() => string",
                    "schema": {
                      "kind": "event",
                      "type": "(): string"
                    }
                  },
                  "matchAll": {
                    "name": "matchAll",
                    "global": false,
                    "description": "Matches a string with a regular expression, and returns an iterable of matches\r\ncontaining the results of that search.",
                    "tags": [
                      {
                        "name": "param",
                        "text": "regexp A variable name or string literal containing the regular expression pattern and flags."
                      }
                    ],
                    "required": true,
                    "type": "(regexp: RegExp) => IterableIterator<RegExpMatchArray>",
                    "schema": {
                      "kind": "event",
                      "type": "(regexp: RegExp): IterableIterator<RegExpMatchArray>",
                      "schema": []
                    }
                  },
                  "replaceAll": {
                    "name": "replaceAll",
                    "global": false,
                    "description": "Replace all instances of a substring in a string, using a regular expression or search string.",
                    "tags": [
                      {
                        "name": "param",
                        "text": "searchValue A string to search for."
                      },
                      {
                        "name": "param",
                        "text": "replaceValue A string containing the text to replace for every successful match of searchValue in this string."
                      },
                      {
                        "name": "param",
                        "text": "searchValue A string to search for."
                      },
                      {
                        "name": "param",
                        "text": "replacer A function that returns the replacement text."
                      }
                    ],
                    "required": true,
                    "type": "{ (searchValue: string | RegExp, replaceValue: string): string; (searchValue: string | RegExp, replacer: (substring: string, ...args: any[]) => string): string; }",
                    "schema": "{ (searchValue: string | RegExp, replaceValue: string): string; (searchValue: string | RegExp, replacer: (substring: string, ...args: any[]) => string): string; }"
                  },
                  "at": {
                    "name": "at",
                    "global": false,
                    "description": "Returns a new String consisting of the single UTF-16 code unit located at the specified index.",
                    "tags": [
                      {
                        "name": "param",
                        "text": "index The zero-based index of the desired code unit. A negative index will count back from the last item."
                      }
                    ],
                    "required": true,
                    "type": "(index: number) => string | undefined",
                    "schema": {
                      "kind": "event",
                      "type": "(index: number): string | undefined",
                      "schema": []
                    }
                  },
                  "__@iterator@638": {
                    "name": "__@iterator@638",
                    "global": false,
                    "description": "Iterator",
                    "tags": [],
                    "required": true,
                    "type": "() => IterableIterator<string>",
                    "schema": {
                      "kind": "event",
                      "type": "(): IterableIterator<string>"
                    }
                  }
                }
              }
            ]
          }
        },
        {
          "name": "rel",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | null | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | null | undefined",
            "schema": [
              "undefined",
              "null",
              "string"
            ]
          }
        },
        {
          "name": "noRel",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "boolean | undefined",
          "schema": {
            "kind": "enum",
            "type": "boolean | undefined",
            "schema": [
              "undefined",
              "false",
              "true"
            ]
          }
        },
        {
          "name": "prefetch",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "boolean | undefined",
          "schema": {
            "kind": "enum",
            "type": "boolean | undefined",
            "schema": [
              "undefined",
              "false",
              "true"
            ]
          }
        },
        {
          "name": "noPrefetch",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "boolean | undefined",
          "schema": {
            "kind": "enum",
            "type": "boolean | undefined",
            "schema": [
              "undefined",
              "false",
              "true"
            ]
          }
        },
        {
          "name": "activeClass",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          }
        },
        {
          "name": "exactActiveClass",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          }
        },
        {
          "name": "ariaCurrentValue",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          }
        }
      ],
      "slots": [],
      "events": [],
      "exposed": [
        {
          "name": "to",
          "type": "RouteLocationRaw | undefined",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "RouteLocationRaw | undefined",
            "schema": [
              "undefined",
              "string",
              "RouteLocationPathRaw",
              "RouteLocationNamedRaw"
            ]
          }
        },
        {
          "name": "href",
          "type": "RouteLocationRaw | undefined",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "RouteLocationRaw | undefined",
            "schema": [
              "undefined",
              "string",
              "RouteLocationPathRaw",
              "RouteLocationNamedRaw"
            ]
          }
        },
        {
          "name": "external",
          "type": "boolean | undefined",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "boolean | undefined",
            "schema": [
              "undefined",
              "false",
              "true"
            ]
          }
        },
        {
          "name": "replace",
          "type": "boolean | undefined",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "boolean | undefined",
            "schema": [
              "undefined",
              "false",
              "true"
            ]
          }
        },
        {
          "name": "custom",
          "type": "boolean | undefined",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "boolean | undefined",
            "schema": [
              "undefined",
              "false",
              "true"
            ]
          }
        },
        {
          "name": "target",
          "type": "\"_blank\" | \"_parent\" | \"_self\" | \"_top\" | (string & {}) | null | undefined",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "\"_blank\" | \"_parent\" | \"_self\" | \"_top\" | (string & {}) | null | undefined",
            "schema": [
              "undefined",
              "null",
              "\"_blank\"",
              "\"_parent\"",
              "\"_self\"",
              "\"_top\"",
              {
                "kind": "object",
                "type": "string & {}",
                "schema": {
                  "toString": {
                    "name": "toString",
                    "global": false,
                    "description": "Returns a string representation of a string.",
                    "tags": [],
                    "required": true,
                    "type": "() => string",
                    "schema": {
                      "kind": "event",
                      "type": "(): string"
                    }
                  },
                  "charAt": {
                    "name": "charAt",
                    "global": false,
                    "description": "Returns the character at the specified index.",
                    "tags": [
                      {
                        "name": "param",
                        "text": "pos The zero-based index of the desired character."
                      }
                    ],
                    "required": true,
                    "type": "(pos: number) => string",
                    "schema": {
                      "kind": "event",
                      "type": "(pos: number): string",
                      "schema": []
                    }
                  },
                  "charCodeAt": {
                    "name": "charCodeAt",
                    "global": false,
                    "description": "Returns the Unicode value of the character at the specified location.",
                    "tags": [
                      {
                        "name": "param",
                        "text": "index The zero-based index of the desired character. If there is no character at the specified index, NaN is returned."
                      }
                    ],
                    "required": true,
                    "type": "(index: number) => number",
                    "schema": {
                      "kind": "event",
                      "type": "(index: number): number",
                      "schema": []
                    }
                  },
                  "concat": {
                    "name": "concat",
                    "global": false,
                    "description": "Returns a string that contains the concatenation of two or more strings.",
                    "tags": [
                      {
                        "name": "param",
                        "text": "strings The strings to append to the end of the string."
                      }
                    ],
                    "required": true,
                    "type": "(...strings: string[]) => string",
                    "schema": {
                      "kind": "event",
                      "type": "(...strings: string[]): string",
                      "schema": [
                        "string"
                      ]
                    }
                  },
                  "indexOf": {
                    "name": "indexOf",
                    "global": false,
                    "description": "Returns the position of the first occurrence of a substring.",
                    "tags": [
                      {
                        "name": "param",
                        "text": "searchString The substring to search for in the string"
                      },
                      {
                        "name": "param",
                        "text": "position The index at which to begin searching the String object. If omitted, search starts at the beginning of the string."
                      }
                    ],
                    "required": true,
                    "type": "(searchString: string, position?: number | undefined) => number",
                    "schema": {
                      "kind": "event",
                      "type": "(searchString: string, position?: number | undefined): number",
                      "schema": []
                    }
                  },
                  "lastIndexOf": {
                    "name": "lastIndexOf",
                    "global": false,
                    "description": "Returns the last occurrence of a substring in the string.",
                    "tags": [
                      {
                        "name": "param",
                        "text": "searchString The substring to search for."
                      },
                      {
                        "name": "param",
                        "text": "position The index at which to begin searching. If omitted, the search begins at the end of the string."
                      }
                    ],
                    "required": true,
                    "type": "(searchString: string, position?: number | undefined) => number",
                    "schema": {
                      "kind": "event",
                      "type": "(searchString: string, position?: number | undefined): number",
                      "schema": []
                    }
                  },
                  "localeCompare": {
                    "name": "localeCompare",
                    "global": false,
                    "description": "Determines whether two strings are equivalent in the current locale.\nDetermines whether two strings are equivalent in the current or specified locale.",
                    "tags": [
                      {
                        "name": "param",
                        "text": "that String to compare to target string"
                      },
                      {
                        "name": "param",
                        "text": "that String to compare to target string"
                      },
                      {
                        "name": "param",
                        "text": "locales A locale string or array of locale strings that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used. This parameter must conform to BCP 47 standards; see the Intl.Collator object for details."
                      },
                      {
                        "name": "param",
                        "text": "options An object that contains one or more properties that specify comparison options. see the Intl.Collator object for details."
                      }
                    ],
                    "required": true,
                    "type": "{ (that: string): number; (that: string, locales?: string | string[] | undefined, options?: CollatorOptions | undefined): number; }",
                    "schema": "{ (that: string): number; (that: string, locales?: string | string[] | undefined, options?: CollatorOptions | undefined): number; }"
                  },
                  "match": {
                    "name": "match",
                    "global": false,
                    "description": "Matches a string with a regular expression, and returns an array containing the results of that search.\nMatches a string or an object that supports being matched against, and returns an array\r\ncontaining the results of that search, or null if no matches are found.",
                    "tags": [
                      {
                        "name": "param",
                        "text": "regexp A variable name or string literal containing the regular expression pattern and flags."
                      },
                      {
                        "name": "param",
                        "text": "matcher An object that supports being matched against."
                      }
                    ],
                    "required": true,
                    "type": "{ (regexp: string | RegExp): RegExpMatchArray | null; (matcher: { [Symbol.match](string: string): RegExpMatchArray | null; }): RegExpMatchArray | null; }",
                    "schema": "{ (regexp: string | RegExp): RegExpMatchArray | null; (matcher: { [Symbol.match](string: string): RegExpMatchArray | null; }): RegExpMatchArray | null; }"
                  },
                  "replace": {
                    "name": "replace",
                    "global": false,
                    "description": "Replaces text in a string, using a regular expression or search string.\nPasses a string and {@linkcode replaceValue} to the `[Symbol.replace]` method on {@linkcode searchValue}. This method is expected to implement its own replacement algorithm.\nReplaces text in a string, using an object that supports replacement within a string.",
                    "tags": [
                      {
                        "name": "param",
                        "text": "searchValue A string or regular expression to search for."
                      },
                      {
                        "name": "param",
                        "text": "replaceValue A string containing the text to replace. When the {@linkcode searchValue} is a `RegExp`, all matches are replaced if the `g` flag is set (or only those matches at the beginning, if the `y` flag is also present). Otherwise, only the first match of {@linkcode searchValue} is replaced."
                      },
                      {
                        "name": "param",
                        "text": "searchValue A string to search for."
                      },
                      {
                        "name": "param",
                        "text": "replacer A function that returns the replacement text."
                      },
                      {
                        "name": "param",
                        "text": "searchValue An object that supports searching for and replacing matches within a string."
                      },
                      {
                        "name": "param",
                        "text": "replaceValue The replacement text."
                      },
                      {
                        "name": "param",
                        "text": "searchValue A object can search for and replace matches within a string."
                      },
                      {
                        "name": "param",
                        "text": "replacer A function that returns the replacement text."
                      }
                    ],
                    "required": true,
                    "type": "{ (searchValue: string | RegExp, replaceValue: string): string; (searchValue: string | RegExp, replacer: (substring: string, ...args: any[]) => string): string; (searchValue: { ...; }, replaceValue: string): string; (searchValue: { ...; }, replacer: (substring: string, ...args: any[]) => string): string; }",
                    "schema": "{ (searchValue: string | RegExp, replaceValue: string): string; (searchValue: string | RegExp, replacer: (substring: string, ...args: any[]) => string): string; (searchValue: { ...; }, replaceValue: string): string; (searchValue: { ...; }, replacer: (substring: string, ...args: any[]) => string): string; }"
                  },
                  "search": {
                    "name": "search",
                    "global": false,
                    "description": "Finds the first substring match in a regular expression search.",
                    "tags": [
                      {
                        "name": "param",
                        "text": "regexp The regular expression pattern and applicable flags."
                      },
                      {
                        "name": "param",
                        "text": "searcher An object which supports searching within a string."
                      }
                    ],
                    "required": true,
                    "type": "{ (regexp: string | RegExp): number; (searcher: { [Symbol.search](string: string): number; }): number; }",
                    "schema": "{ (regexp: string | RegExp): number; (searcher: { [Symbol.search](string: string): number; }): number; }"
                  },
                  "slice": {
                    "name": "slice",
                    "global": false,
                    "description": "Returns a section of a string.",
                    "tags": [
                      {
                        "name": "param",
                        "text": "start The index to the beginning of the specified portion of stringObj."
                      },
                      {
                        "name": "param",
                        "text": "end The index to the end of the specified portion of stringObj. The substring includes the characters up to, but not including, the character indicated by end.\r\nIf this value is not specified, the substring continues to the end of stringObj."
                      }
                    ],
                    "required": true,
                    "type": "(start?: number | undefined, end?: number | undefined) => string",
                    "schema": {
                      "kind": "event",
                      "type": "(start?: number | undefined, end?: number | undefined): string",
                      "schema": []
                    }
                  },
                  "split": {
                    "name": "split",
                    "global": false,
                    "description": "Split a string into substrings using the specified separator and return them as an array.",
                    "tags": [
                      {
                        "name": "param",
                        "text": "separator A string that identifies character or characters to use in separating the string. If omitted, a single-element array containing the entire string is returned."
                      },
                      {
                        "name": "param",
                        "text": "limit A value used to limit the number of elements returned in the array."
                      },
                      {
                        "name": "param",
                        "text": "splitter An object that can split a string."
                      },
                      {
                        "name": "param",
                        "text": "limit A value used to limit the number of elements returned in the array."
                      }
                    ],
                    "required": true,
                    "type": "{ (separator: string | RegExp, limit?: number | undefined): string[]; (splitter: { [Symbol.split](string: string, limit?: number | undefined): string[]; }, limit?: number | undefined): string[]; }",
                    "schema": "{ (separator: string | RegExp, limit?: number | undefined): string[]; (splitter: { [Symbol.split](string: string, limit?: number | undefined): string[]; }, limit?: number | undefined): string[]; }"
                  },
                  "substring": {
                    "name": "substring",
                    "global": false,
                    "description": "Returns the substring at the specified location within a String object.",
                    "tags": [
                      {
                        "name": "param",
                        "text": "start The zero-based index number indicating the beginning of the substring."
                      },
                      {
                        "name": "param",
                        "text": "end Zero-based index number indicating the end of the substring. The substring includes the characters up to, but not including, the character indicated by end.\r\nIf end is omitted, the characters from start through the end of the original string are returned."
                      }
                    ],
                    "required": true,
                    "type": "(start: number, end?: number | undefined) => string",
                    "schema": {
                      "kind": "event",
                      "type": "(start: number, end?: number | undefined): string",
                      "schema": []
                    }
                  },
                  "toLowerCase": {
                    "name": "toLowerCase",
                    "global": false,
                    "description": "Converts all the alphabetic characters in a string to lowercase.",
                    "tags": [],
                    "required": true,
                    "type": "() => string",
                    "schema": {
                      "kind": "event",
                      "type": "(): string"
                    }
                  },
                  "toLocaleLowerCase": {
                    "name": "toLocaleLowerCase",
                    "global": false,
                    "description": "Converts all alphabetic characters to lowercase, taking into account the host environment's current locale.",
                    "tags": [],
                    "required": true,
                    "type": "(locales?: string | string[] | undefined) => string",
                    "schema": {
                      "kind": "event",
                      "type": "(locales?: string | string[] | undefined): string",
                      "schema": []
                    }
                  },
                  "toUpperCase": {
                    "name": "toUpperCase",
                    "global": false,
                    "description": "Converts all the alphabetic characters in a string to uppercase.",
                    "tags": [],
                    "required": true,
                    "type": "() => string",
                    "schema": {
                      "kind": "event",
                      "type": "(): string"
                    }
                  },
                  "toLocaleUpperCase": {
                    "name": "toLocaleUpperCase",
                    "global": false,
                    "description": "Returns a string where all alphabetic characters have been converted to uppercase, taking into account the host environment's current locale.",
                    "tags": [],
                    "required": true,
                    "type": "(locales?: string | string[] | undefined) => string",
                    "schema": {
                      "kind": "event",
                      "type": "(locales?: string | string[] | undefined): string",
                      "schema": []
                    }
                  },
                  "trim": {
                    "name": "trim",
                    "global": false,
                    "description": "Removes the leading and trailing white space and line terminator characters from a string.",
                    "tags": [],
                    "required": true,
                    "type": "() => string",
                    "schema": {
                      "kind": "event",
                      "type": "(): string"
                    }
                  },
                  "length": {
                    "name": "length",
                    "global": false,
                    "description": "Returns the length of a String object.",
                    "tags": [],
                    "required": true,
                    "type": "number",
                    "schema": "number"
                  },
                  "substr": {
                    "name": "substr",
                    "global": false,
                    "description": "Gets a substring beginning at the specified location and having the specified length.",
                    "tags": [
                      {
                        "name": "deprecated",
                        "text": "A legacy feature for browser compatibility"
                      },
                      {
                        "name": "param",
                        "text": "from The starting position of the desired substring. The index of the first character in the string is zero."
                      },
                      {
                        "name": "param",
                        "text": "length The number of characters to include in the returned substring."
                      }
                    ],
                    "required": true,
                    "type": "(from: number, length?: number | undefined) => string",
                    "schema": {
                      "kind": "event",
                      "type": "(from: number, length?: number | undefined): string",
                      "schema": []
                    }
                  },
                  "valueOf": {
                    "name": "valueOf",
                    "global": false,
                    "description": "Returns the primitive value of the specified object.",
                    "tags": [],
                    "required": true,
                    "type": "() => string",
                    "schema": {
                      "kind": "event",
                      "type": "(): string"
                    }
                  },
                  "codePointAt": {
                    "name": "codePointAt",
                    "global": false,
                    "description": "Returns a nonnegative integer Number less than 1114112 (0x110000) that is the code point\r\nvalue of the UTF-16 encoded code point starting at the string element at position pos in\r\nthe String resulting from converting this object to a String.\r\nIf there is no element at that position, the result is undefined.\r\nIf a valid UTF-16 surrogate pair does not begin at pos, the result is the code unit at pos.",
                    "tags": [],
                    "required": true,
                    "type": "(pos: number) => number | undefined",
                    "schema": {
                      "kind": "event",
                      "type": "(pos: number): number | undefined",
                      "schema": []
                    }
                  },
                  "includes": {
                    "name": "includes",
                    "global": false,
                    "description": "Returns true if searchString appears as a substring of the result of converting this\r\nobject to a String, at one or more positions that are\r\ngreater than or equal to position; otherwise, returns false.",
                    "tags": [
                      {
                        "name": "param",
                        "text": "searchString search string"
                      },
                      {
                        "name": "param",
                        "text": "position If position is undefined, 0 is assumed, so as to search all of the String."
                      }
                    ],
                    "required": true,
                    "type": "(searchString: string, position?: number | undefined) => boolean",
                    "schema": {
                      "kind": "event",
                      "type": "(searchString: string, position?: number | undefined): boolean",
                      "schema": []
                    }
                  },
                  "endsWith": {
                    "name": "endsWith",
                    "global": false,
                    "description": "Returns true if the sequence of elements of searchString converted to a String is the\r\nsame as the corresponding elements of this object (converted to a String) starting at\r\nendPosition – length(this). Otherwise returns false.",
                    "tags": [],
                    "required": true,
                    "type": "(searchString: string, endPosition?: number | undefined) => boolean",
                    "schema": {
                      "kind": "event",
                      "type": "(searchString: string, endPosition?: number | undefined): boolean",
                      "schema": []
                    }
                  },
                  "normalize": {
                    "name": "normalize",
                    "global": false,
                    "description": "Returns the String value result of normalizing the string into the normalization form\r\nnamed by form as specified in Unicode Standard Annex #15, Unicode Normalization Forms.",
                    "tags": [
                      {
                        "name": "param",
                        "text": "form Applicable values: \"NFC\", \"NFD\", \"NFKC\", or \"NFKD\", If not specified default\r\nis \"NFC\""
                      },
                      {
                        "name": "param",
                        "text": "form Applicable values: \"NFC\", \"NFD\", \"NFKC\", or \"NFKD\", If not specified default\r\nis \"NFC\""
                      }
                    ],
                    "required": true,
                    "type": "{ (form: \"NFC\" | \"NFD\" | \"NFKC\" | \"NFKD\"): string; (form?: string | undefined): string; }",
                    "schema": "{ (form: \"NFC\" | \"NFD\" | \"NFKC\" | \"NFKD\"): string; (form?: string | undefined): string; }"
                  },
                  "repeat": {
                    "name": "repeat",
                    "global": false,
                    "description": "Returns a String value that is made from count copies appended together. If count is 0,\r\nthe empty string is returned.",
                    "tags": [
                      {
                        "name": "param",
                        "text": "count number of copies to append"
                      }
                    ],
                    "required": true,
                    "type": "(count: number) => string",
                    "schema": {
                      "kind": "event",
                      "type": "(count: number): string",
                      "schema": []
                    }
                  },
                  "startsWith": {
                    "name": "startsWith",
                    "global": false,
                    "description": "Returns true if the sequence of elements of searchString converted to a String is the\r\nsame as the corresponding elements of this object (converted to a String) starting at\r\nposition. Otherwise returns false.",
                    "tags": [],
                    "required": true,
                    "type": "(searchString: string, position?: number | undefined) => boolean",
                    "schema": {
                      "kind": "event",
                      "type": "(searchString: string, position?: number | undefined): boolean",
                      "schema": []
                    }
                  },
                  "anchor": {
                    "name": "anchor",
                    "global": false,
                    "description": "Returns an `<a>` HTML anchor element and sets the name attribute to the text value",
                    "tags": [
                      {
                        "name": "deprecated",
                        "text": "A legacy feature for browser compatibility"
                      },
                      {
                        "name": "param",
                        "text": "name"
                      }
                    ],
                    "required": true,
                    "type": "(name: string) => string",
                    "schema": {
                      "kind": "event",
                      "type": "(name: string): string",
                      "schema": []
                    }
                  },
                  "big": {
                    "name": "big",
                    "global": false,
                    "description": "Returns a `<big>` HTML element",
                    "tags": [
                      {
                        "name": "deprecated",
                        "text": "A legacy feature for browser compatibility"
                      }
                    ],
                    "required": true,
                    "type": "() => string",
                    "schema": {
                      "kind": "event",
                      "type": "(): string"
                    }
                  },
                  "blink": {
                    "name": "blink",
                    "global": false,
                    "description": "Returns a `<blink>` HTML element",
                    "tags": [
                      {
                        "name": "deprecated",
                        "text": "A legacy feature for browser compatibility"
                      }
                    ],
                    "required": true,
                    "type": "() => string",
                    "schema": {
                      "kind": "event",
                      "type": "(): string"
                    }
                  },
                  "bold": {
                    "name": "bold",
                    "global": false,
                    "description": "Returns a `<b>` HTML element",
                    "tags": [
                      {
                        "name": "deprecated",
                        "text": "A legacy feature for browser compatibility"
                      }
                    ],
                    "required": true,
                    "type": "() => string",
                    "schema": {
                      "kind": "event",
                      "type": "(): string"
                    }
                  },
                  "fixed": {
                    "name": "fixed",
                    "global": false,
                    "description": "Returns a `<tt>` HTML element",
                    "tags": [
                      {
                        "name": "deprecated",
                        "text": "A legacy feature for browser compatibility"
                      }
                    ],
                    "required": true,
                    "type": "() => string",
                    "schema": {
                      "kind": "event",
                      "type": "(): string"
                    }
                  },
                  "fontcolor": {
                    "name": "fontcolor",
                    "global": false,
                    "description": "Returns a `<font>` HTML element and sets the color attribute value",
                    "tags": [
                      {
                        "name": "deprecated",
                        "text": "A legacy feature for browser compatibility"
                      }
                    ],
                    "required": true,
                    "type": "(color: string) => string",
                    "schema": {
                      "kind": "event",
                      "type": "(color: string): string",
                      "schema": []
                    }
                  },
                  "fontsize": {
                    "name": "fontsize",
                    "global": false,
                    "description": "Returns a `<font>` HTML element and sets the size attribute value",
                    "tags": [
                      {
                        "name": "deprecated",
                        "text": "A legacy feature for browser compatibility"
                      },
                      {
                        "name": "deprecated",
                        "text": "A legacy feature for browser compatibility"
                      }
                    ],
                    "required": true,
                    "type": "{ (size: number): string; (size: string): string; }",
                    "schema": "{ (size: number): string; (size: string): string; }"
                  },
                  "italics": {
                    "name": "italics",
                    "global": false,
                    "description": "Returns an `<i>` HTML element",
                    "tags": [
                      {
                        "name": "deprecated",
                        "text": "A legacy feature for browser compatibility"
                      }
                    ],
                    "required": true,
                    "type": "() => string",
                    "schema": {
                      "kind": "event",
                      "type": "(): string"
                    }
                  },
                  "link": {
                    "name": "link",
                    "global": false,
                    "description": "Returns an `<a>` HTML element and sets the href attribute value",
                    "tags": [
                      {
                        "name": "deprecated",
                        "text": "A legacy feature for browser compatibility"
                      }
                    ],
                    "required": true,
                    "type": "(url: string) => string",
                    "schema": {
                      "kind": "event",
                      "type": "(url: string): string",
                      "schema": []
                    }
                  },
                  "small": {
                    "name": "small",
                    "global": false,
                    "description": "Returns a `<small>` HTML element",
                    "tags": [
                      {
                        "name": "deprecated",
                        "text": "A legacy feature for browser compatibility"
                      }
                    ],
                    "required": true,
                    "type": "() => string",
                    "schema": {
                      "kind": "event",
                      "type": "(): string"
                    }
                  },
                  "strike": {
                    "name": "strike",
                    "global": false,
                    "description": "Returns a `<strike>` HTML element",
                    "tags": [
                      {
                        "name": "deprecated",
                        "text": "A legacy feature for browser compatibility"
                      }
                    ],
                    "required": true,
                    "type": "() => string",
                    "schema": {
                      "kind": "event",
                      "type": "(): string"
                    }
                  },
                  "sub": {
                    "name": "sub",
                    "global": false,
                    "description": "Returns a `<sub>` HTML element",
                    "tags": [
                      {
                        "name": "deprecated",
                        "text": "A legacy feature for browser compatibility"
                      }
                    ],
                    "required": true,
                    "type": "() => string",
                    "schema": {
                      "kind": "event",
                      "type": "(): string"
                    }
                  },
                  "sup": {
                    "name": "sup",
                    "global": false,
                    "description": "Returns a `<sup>` HTML element",
                    "tags": [
                      {
                        "name": "deprecated",
                        "text": "A legacy feature for browser compatibility"
                      }
                    ],
                    "required": true,
                    "type": "() => string",
                    "schema": {
                      "kind": "event",
                      "type": "(): string"
                    }
                  },
                  "padStart": {
                    "name": "padStart",
                    "global": false,
                    "description": "Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length.\r\nThe padding is applied from the start (left) of the current string.",
                    "tags": [
                      {
                        "name": "param",
                        "text": "maxLength The length of the resulting string once the current string has been padded.\r\nIf this parameter is smaller than the current string's length, the current string will be returned as it is."
                      },
                      {
                        "name": "param",
                        "text": "fillString The string to pad the current string with.\r\nIf this string is too long, it will be truncated and the left-most part will be applied.\r\nThe default value for this parameter is \" \" (U+0020)."
                      }
                    ],
                    "required": true,
                    "type": "(maxLength: number, fillString?: string | undefined) => string",
                    "schema": {
                      "kind": "event",
                      "type": "(maxLength: number, fillString?: string | undefined): string",
                      "schema": []
                    }
                  },
                  "padEnd": {
                    "name": "padEnd",
                    "global": false,
                    "description": "Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length.\r\nThe padding is applied from the end (right) of the current string.",
                    "tags": [
                      {
                        "name": "param",
                        "text": "maxLength The length of the resulting string once the current string has been padded.\r\nIf this parameter is smaller than the current string's length, the current string will be returned as it is."
                      },
                      {
                        "name": "param",
                        "text": "fillString The string to pad the current string with.\r\nIf this string is too long, it will be truncated and the left-most part will be applied.\r\nThe default value for this parameter is \" \" (U+0020)."
                      }
                    ],
                    "required": true,
                    "type": "(maxLength: number, fillString?: string | undefined) => string",
                    "schema": {
                      "kind": "event",
                      "type": "(maxLength: number, fillString?: string | undefined): string",
                      "schema": []
                    }
                  },
                  "trimEnd": {
                    "name": "trimEnd",
                    "global": false,
                    "description": "Removes the trailing white space and line terminator characters from a string.",
                    "tags": [],
                    "required": true,
                    "type": "() => string",
                    "schema": {
                      "kind": "event",
                      "type": "(): string"
                    }
                  },
                  "trimStart": {
                    "name": "trimStart",
                    "global": false,
                    "description": "Removes the leading white space and line terminator characters from a string.",
                    "tags": [],
                    "required": true,
                    "type": "() => string",
                    "schema": {
                      "kind": "event",
                      "type": "(): string"
                    }
                  },
                  "trimLeft": {
                    "name": "trimLeft",
                    "global": false,
                    "description": "Removes the leading white space and line terminator characters from a string.",
                    "tags": [
                      {
                        "name": "deprecated",
                        "text": "A legacy feature for browser compatibility. Use `trimStart` instead"
                      }
                    ],
                    "required": true,
                    "type": "() => string",
                    "schema": {
                      "kind": "event",
                      "type": "(): string"
                    }
                  },
                  "trimRight": {
                    "name": "trimRight",
                    "global": false,
                    "description": "Removes the trailing white space and line terminator characters from a string.",
                    "tags": [
                      {
                        "name": "deprecated",
                        "text": "A legacy feature for browser compatibility. Use `trimEnd` instead"
                      }
                    ],
                    "required": true,
                    "type": "() => string",
                    "schema": {
                      "kind": "event",
                      "type": "(): string"
                    }
                  },
                  "matchAll": {
                    "name": "matchAll",
                    "global": false,
                    "description": "Matches a string with a regular expression, and returns an iterable of matches\r\ncontaining the results of that search.",
                    "tags": [
                      {
                        "name": "param",
                        "text": "regexp A variable name or string literal containing the regular expression pattern and flags."
                      }
                    ],
                    "required": true,
                    "type": "(regexp: RegExp) => IterableIterator<RegExpMatchArray>",
                    "schema": {
                      "kind": "event",
                      "type": "(regexp: RegExp): IterableIterator<RegExpMatchArray>",
                      "schema": []
                    }
                  },
                  "replaceAll": {
                    "name": "replaceAll",
                    "global": false,
                    "description": "Replace all instances of a substring in a string, using a regular expression or search string.",
                    "tags": [
                      {
                        "name": "param",
                        "text": "searchValue A string to search for."
                      },
                      {
                        "name": "param",
                        "text": "replaceValue A string containing the text to replace for every successful match of searchValue in this string."
                      },
                      {
                        "name": "param",
                        "text": "searchValue A string to search for."
                      },
                      {
                        "name": "param",
                        "text": "replacer A function that returns the replacement text."
                      }
                    ],
                    "required": true,
                    "type": "{ (searchValue: string | RegExp, replaceValue: string): string; (searchValue: string | RegExp, replacer: (substring: string, ...args: any[]) => string): string; }",
                    "schema": "{ (searchValue: string | RegExp, replaceValue: string): string; (searchValue: string | RegExp, replacer: (substring: string, ...args: any[]) => string): string; }"
                  },
                  "at": {
                    "name": "at",
                    "global": false,
                    "description": "Returns a new String consisting of the single UTF-16 code unit located at the specified index.",
                    "tags": [
                      {
                        "name": "param",
                        "text": "index The zero-based index of the desired code unit. A negative index will count back from the last item."
                      }
                    ],
                    "required": true,
                    "type": "(index: number) => string | undefined",
                    "schema": {
                      "kind": "event",
                      "type": "(index: number): string | undefined",
                      "schema": []
                    }
                  },
                  "__@iterator@638": {
                    "name": "__@iterator@638",
                    "global": false,
                    "description": "Iterator",
                    "tags": [],
                    "required": true,
                    "type": "() => IterableIterator<string>",
                    "schema": {
                      "kind": "event",
                      "type": "(): IterableIterator<string>"
                    }
                  }
                }
              }
            ]
          }
        },
        {
          "name": "rel",
          "type": "string | null | undefined",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "string | null | undefined",
            "schema": [
              "undefined",
              "null",
              "string"
            ]
          }
        },
        {
          "name": "noRel",
          "type": "boolean | undefined",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "boolean | undefined",
            "schema": [
              "undefined",
              "false",
              "true"
            ]
          }
        },
        {
          "name": "prefetch",
          "type": "boolean | undefined",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "boolean | undefined",
            "schema": [
              "undefined",
              "false",
              "true"
            ]
          }
        },
        {
          "name": "noPrefetch",
          "type": "boolean | undefined",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "boolean | undefined",
            "schema": [
              "undefined",
              "false",
              "true"
            ]
          }
        },
        {
          "name": "activeClass",
          "type": "string | undefined",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          }
        },
        {
          "name": "exactActiveClass",
          "type": "string | undefined",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          }
        },
        {
          "name": "ariaCurrentValue",
          "type": "string | undefined",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          }
        }
      ]
    }
  },
  "NuxtLoadingIndicator": {
    "export": "default",
    "chunkName": "components/nuxt-loading-indicator",
    "global": false,
    "kebabName": "nuxt-loading-indicator",
    "pascalName": "NuxtLoadingIndicator",
    "prefetch": false,
    "preload": false,
    "mode": "all",
    "shortPath": "/Users/davanedavis/Projects/ncb/ob-embedded-finance-customer-mobile-app/frontier/docs/node_modules/nuxt/dist/app/components/nuxt-loading-indicator",
    "name": "NuxtLoadingIndicator",
    "filePath": "/node_modules/nuxt/dist/app/components/nuxt-loading-indicator.mjs",
    "fullPath": "/Users/davanedavis/Projects/ncb/ob-embedded-finance-customer-mobile-app/frontier/docs/node_modules/nuxt/dist/app/components/nuxt-loading-indicator.mjs",
    "meta": {
      "props": [
        {
          "name": "color",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | boolean | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | boolean | undefined",
            "schema": [
              "undefined",
              "string",
              "false",
              "true"
            ]
          },
          "default": "\"repeating-linear-gradient(to right,#00dc82 0%,#34cdfe 50%,#0047e1 100%)\""
        },
        {
          "name": "throttle",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "number | undefined",
          "schema": {
            "kind": "enum",
            "type": "number | undefined",
            "schema": [
              "undefined",
              "number"
            ]
          },
          "default": "200"
        },
        {
          "name": "duration",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "number | undefined",
          "schema": {
            "kind": "enum",
            "type": "number | undefined",
            "schema": [
              "undefined",
              "number"
            ]
          },
          "default": "2000"
        },
        {
          "name": "height",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "number | undefined",
          "schema": {
            "kind": "enum",
            "type": "number | undefined",
            "schema": [
              "undefined",
              "number"
            ]
          },
          "default": "3"
        }
      ],
      "slots": [],
      "events": [],
      "exposed": [
        {
          "name": "throttle",
          "type": "number",
          "description": "",
          "schema": "number"
        },
        {
          "name": "duration",
          "type": "number",
          "description": "",
          "schema": "number"
        },
        {
          "name": "height",
          "type": "number",
          "description": "",
          "schema": "number"
        },
        {
          "name": "color",
          "type": "string | boolean",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "string | boolean",
            "schema": [
              "string",
              "false",
              "true"
            ]
          }
        }
      ]
    }
  },
  "GithubRepository": {
    "export": "default",
    "chunkName": "components/github-repository",
    "global": true,
    "kebabName": "github-repository",
    "pascalName": "GithubRepository",
    "prefetch": false,
    "preload": false,
    "mode": "all",
    "shortPath": "/Users/davanedavis/Projects/ncb/ob-embedded-finance-customer-mobile-app/frontier/docs/node_modules/@nuxtlabs/github-module/dist/runtime/components/GithubRepository.mjs",
    "name": "GithubRepository",
    "filePath": "/node_modules/@nuxtlabs/github-module/dist/runtime/components/GithubRepository.mjs",
    "fullPath": "/Users/davanedavis/Projects/ncb/ob-embedded-finance-customer-mobile-app/frontier/docs/node_modules/@nuxtlabs/github-module/dist/runtime/components/GithubRepository.mjs",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "GithubLink": {
    "export": "default",
    "chunkName": "components/github-link",
    "global": true,
    "kebabName": "github-link",
    "pascalName": "GithubLink",
    "prefetch": false,
    "preload": false,
    "mode": "all",
    "shortPath": "/Users/davanedavis/Projects/ncb/ob-embedded-finance-customer-mobile-app/frontier/docs/node_modules/@nuxtlabs/github-module/dist/runtime/components/GithubLink.mjs",
    "name": "GithubLink",
    "filePath": "/node_modules/@nuxtlabs/github-module/dist/runtime/components/GithubLink.mjs",
    "fullPath": "/Users/davanedavis/Projects/ncb/ob-embedded-finance-customer-mobile-app/frontier/docs/node_modules/@nuxtlabs/github-module/dist/runtime/components/GithubLink.mjs",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "GithubReadme": {
    "export": "default",
    "chunkName": "components/github-readme",
    "global": true,
    "kebabName": "github-readme",
    "pascalName": "GithubReadme",
    "prefetch": false,
    "preload": false,
    "mode": "all",
    "shortPath": "/Users/davanedavis/Projects/ncb/ob-embedded-finance-customer-mobile-app/frontier/docs/node_modules/@nuxtlabs/github-module/dist/runtime/components/GithubReadme.mjs",
    "name": "GithubReadme",
    "filePath": "/node_modules/@nuxtlabs/github-module/dist/runtime/components/GithubReadme.mjs",
    "fullPath": "/Users/davanedavis/Projects/ncb/ob-embedded-finance-customer-mobile-app/frontier/docs/node_modules/@nuxtlabs/github-module/dist/runtime/components/GithubReadme.mjs",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "GithubReleases": {
    "export": "default",
    "chunkName": "components/github-releases",
    "global": true,
    "kebabName": "github-releases",
    "pascalName": "GithubReleases",
    "prefetch": false,
    "preload": false,
    "mode": "all",
    "shortPath": "/Users/davanedavis/Projects/ncb/ob-embedded-finance-customer-mobile-app/frontier/docs/node_modules/@nuxtlabs/github-module/dist/runtime/components/GithubReleases.mjs",
    "name": "GithubReleases",
    "filePath": "/node_modules/@nuxtlabs/github-module/dist/runtime/components/GithubReleases.mjs",
    "fullPath": "/Users/davanedavis/Projects/ncb/ob-embedded-finance-customer-mobile-app/frontier/docs/node_modules/@nuxtlabs/github-module/dist/runtime/components/GithubReleases.mjs",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "GithubLastRelease": {
    "export": "default",
    "chunkName": "components/github-last-release",
    "global": true,
    "kebabName": "github-last-release",
    "pascalName": "GithubLastRelease",
    "prefetch": false,
    "preload": false,
    "mode": "all",
    "shortPath": "/Users/davanedavis/Projects/ncb/ob-embedded-finance-customer-mobile-app/frontier/docs/node_modules/@nuxtlabs/github-module/dist/runtime/components/GithubLastRelease.mjs",
    "name": "GithubLastRelease",
    "filePath": "/node_modules/@nuxtlabs/github-module/dist/runtime/components/GithubLastRelease.mjs",
    "fullPath": "/Users/davanedavis/Projects/ncb/ob-embedded-finance-customer-mobile-app/frontier/docs/node_modules/@nuxtlabs/github-module/dist/runtime/components/GithubLastRelease.mjs",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "GithubRelease": {
    "export": "default",
    "chunkName": "components/github-release",
    "global": true,
    "kebabName": "github-release",
    "pascalName": "GithubRelease",
    "prefetch": false,
    "preload": false,
    "mode": "all",
    "shortPath": "/Users/davanedavis/Projects/ncb/ob-embedded-finance-customer-mobile-app/frontier/docs/node_modules/@nuxtlabs/github-module/dist/runtime/components/GithubRelease.mjs",
    "name": "GithubRelease",
    "filePath": "/node_modules/@nuxtlabs/github-module/dist/runtime/components/GithubRelease.mjs",
    "fullPath": "/Users/davanedavis/Projects/ncb/ob-embedded-finance-customer-mobile-app/frontier/docs/node_modules/@nuxtlabs/github-module/dist/runtime/components/GithubRelease.mjs",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "GithubContributors": {
    "export": "default",
    "chunkName": "components/github-contributors",
    "global": true,
    "kebabName": "github-contributors",
    "pascalName": "GithubContributors",
    "prefetch": false,
    "preload": false,
    "mode": "all",
    "shortPath": "/Users/davanedavis/Projects/ncb/ob-embedded-finance-customer-mobile-app/frontier/docs/node_modules/@nuxtlabs/github-module/dist/runtime/components/GithubContributors.mjs",
    "name": "GithubContributors",
    "filePath": "/node_modules/@nuxtlabs/github-module/dist/runtime/components/GithubContributors.mjs",
    "fullPath": "/Users/davanedavis/Projects/ncb/ob-embedded-finance-customer-mobile-app/frontier/docs/node_modules/@nuxtlabs/github-module/dist/runtime/components/GithubContributors.mjs",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "GithubFileContributors": {
    "export": "default",
    "chunkName": "components/github-file-contributors",
    "global": true,
    "kebabName": "github-file-contributors",
    "pascalName": "GithubFileContributors",
    "prefetch": false,
    "preload": false,
    "mode": "all",
    "shortPath": "/Users/davanedavis/Projects/ncb/ob-embedded-finance-customer-mobile-app/frontier/docs/node_modules/@nuxtlabs/github-module/dist/runtime/components/GithubFileContributors.mjs",
    "name": "GithubFileContributors",
    "filePath": "/node_modules/@nuxtlabs/github-module/dist/runtime/components/GithubFileContributors.mjs",
    "fullPath": "/Users/davanedavis/Projects/ncb/ob-embedded-finance-customer-mobile-app/frontier/docs/node_modules/@nuxtlabs/github-module/dist/runtime/components/GithubFileContributors.mjs",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "GithubCommits": {
    "export": "default",
    "chunkName": "components/github-commits",
    "global": true,
    "kebabName": "github-commits",
    "pascalName": "GithubCommits",
    "prefetch": false,
    "preload": false,
    "mode": "all",
    "shortPath": "/Users/davanedavis/Projects/ncb/ob-embedded-finance-customer-mobile-app/frontier/docs/node_modules/@nuxtlabs/github-module/dist/runtime/components/GithubCommits.mjs",
    "name": "GithubCommits",
    "filePath": "/node_modules/@nuxtlabs/github-module/dist/runtime/components/GithubCommits.mjs",
    "fullPath": "/Users/davanedavis/Projects/ncb/ob-embedded-finance-customer-mobile-app/frontier/docs/node_modules/@nuxtlabs/github-module/dist/runtime/components/GithubCommits.mjs",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  }
};

const _GiFTjE = eventHandler(async (event) => {
  const filteredComponents = Object.values(components).filter((c) => c.global).filter((c) => !c.pascalName.startsWith("Content")).filter((c) => !c.pascalName.startsWith("DocumentDriven")).filter((c) => !c.pascalName.startsWith("Markdown")).filter((c) => !c.pascalName.startsWith("Prose")).map(({ pascalName, filePath, meta }) => {
    return {
      name: pascalName,
      path: filePath,
      meta: {
        props: meta.props,
        slots: meta.slots,
        events: meta.events
      }
    };
  });
  const runtimeConfig = useRuntimeConfig();
  const { app, content: { sources, ignores, locales, highlight, navigation, documentDriven, experiment } } = runtimeConfig;
  const appConfigSchema = runtimeConfig?.appConfigSchema;
  let appConfig = {};
  if (appConfigSchema) {
    appConfig = await $fetch.native(joinURL(app.baseURL, "/__app_config.json")).then((r) => r.json());
  }
  const hasPinceau = runtimeConfig?.pinceau?.studio;
  let tokensConfig;
  let tokensConfigSchema;
  if (hasPinceau) {
    tokensConfig = await $fetch.native(joinURL(app.baseURL, "/__pinceau_tokens_config.json")).then((r) => r.json());
    tokensConfigSchema = await $fetch.native(joinURL(app.baseURL, "/__pinceau_tokens_schema.json")).then((r) => r.json());
  }
  return {
    version,
    appConfigSchema: appConfigSchema || {},
    appConfig,
    tokensConfigSchema,
    tokensConfig,
    content: { sources, ignores, locales, highlight, navigation, documentDriven, experiment },
    components: filteredComponents
  };
});

const _usS7Ao = defineEventHandler((event) => {
  appendHeader(event, "Access-Control-Allow-Origin", "*");
  const componentName = event.context.params["component?"];
  if (componentName) {
    const meta = components[pascalCase(componentName)];
    if (!meta) {
      throw createError({
        statusMessage: "Components not found!",
        statusCode: 404,
        data: {
          description: "Please make sure you are looking for correct component"
        }
      });
    }
    return meta;
  }
  return components;
});

function jsonParse(value) {
  return JSON.parse(value, regExpReviver);
}
function regExpReviver(_key, value) {
  const withOperator = typeof value === "string" && value.match(/^--([A-Z]+) (.+)$/) || [];
  if (withOperator[1] === "REGEX") {
    const regex = withOperator[2].match(/\/(.*)\/([dgimsuy]*)$/);
    return regex ? new RegExp(regex[1], regex[2] || "") : value;
  }
  return value;
}

const parseJSONQueryParams = (body) => {
  try {
    return jsonParse(body);
  } catch (e) {
    throw createError({ statusCode: 400, message: "Invalid _params query" });
  }
};
const decodeQueryParams = (encoded) => {
  encoded = encoded.replace(/\//g, "");
  encoded = encoded.replace(/-/g, "+").replace(/_/g, "/");
  encoded = encoded.padEnd(encoded.length + (4 - encoded.length % 4) % 4, "=");
  return parseJSONQueryParams(typeof Buffer !== "undefined" ? Buffer.from(encoded, "base64").toString() : atob(encoded));
};
const memory = {};
const getContentQuery = (event) => {
  const { params } = event.context.params || {};
  if (params) {
    return decodeQueryParams(params.replace(/.json$/, ""));
  }
  const qid = event.context.params.qid?.replace(/.json$/, "");
  const query = getQuery(event) || {};
  if (qid && query._params) {
    memory[qid] = parseJSONQueryParams(decodeURIComponent(query._params));
    if (memory[qid].where && !Array.isArray(memory[qid].where)) {
      memory[qid].where = [memory[qid].where];
    }
    return memory[qid];
  }
  if (memory[qid]) {
    return memory[qid];
  }
  if (query._params) {
    return parseJSONQueryParams(decodeURIComponent(query._params));
  }
  if (typeof query.only === "string" && query.only.includes(",")) {
    query.only = query.only.split(",").map((s) => s.trim());
  }
  if (typeof query.without === "string" && query.without.includes(",")) {
    query.without = query.without.split(",").map((s) => s.trim());
  }
  const where = query.where || {};
  for (const key of ["draft", "partial", "empty"]) {
    if (query[key] && ["true", "false"].includes(query[key])) {
      where[key] = query[key] === "true";
      delete query[key];
    }
  }
  if (query.sort) {
    query.sort = String(query.sort).split(",").map((s) => {
      const [key, order] = s.split(":");
      return [key, +order];
    });
  }
  const reservedKeys = ["partial", "draft", "only", "without", "where", "sort", "limit", "skip"];
  for (const key of Object.keys(query)) {
    if (reservedKeys.includes(key)) {
      continue;
    }
    query.where = query.where || {};
    query.where[key] = query[key];
  }
  if (Object.keys(where).length > 0) {
    query.where = [where];
  } else {
    delete query.where;
  }
  return query;
};

const _3WxVjN = defineEventHandler(async (event) => {
  const query = getContentQuery(event);
  if (query.first) {
    const content = await serverQueryContent(event, query).findOne();
    const path = content?._path || query.where?.find((w) => w._path)?._path;
    if (path) {
      const _dir = await serverQueryContent(event).where({ _path: join(path, "_dir") }).without("_").findOne();
      if (_dir && !Array.isArray(_dir)) {
        return {
          _path: path,
          ...content || {},
          _dir
        };
      }
    }
    if (!content) {
      throw createError({
        statusMessage: "Document not found!",
        statusCode: 404,
        data: {
          description: "Could not find document for the given query.",
          query
        }
      });
    }
    return content;
  }
  const contents = await serverQueryContent(event, query).find();
  return contents;
});

const _rTmpOf = defineEventHandler(async (event) => {
  const { content } = useRuntimeConfig();
  const now = Date.now();
  const contents = await serverQueryContent(event).find();
  await getContentIndex(event);
  const navigation = await $fetch(`${content.api.baseURL}/navigation`);
  await cacheStorage.setItem("content-navigation.json", navigation);
  return {
    generatedAt: now,
    generateTime: Date.now() - now,
    contents,
    navigation
  };
});

function createNav(contents, configs) {
  const { navigation } = useRuntimeConfig().content;
  const pickNavigationFields = (content) => ({
    ...pick(["title", ...navigation.fields])(content),
    ...isObject(content?.navigation) ? content.navigation : {}
  });
  const nav = contents.sort((a, b) => a._path.localeCompare(b._path)).reduce((nav2, content) => {
    const parts = content._path.substring(1).split("/");
    const idParts = content._id.split(":").slice(1);
    const isIndex = !!idParts[idParts.length - 1].match(/([1-9][0-9]*\.)?index.md/g);
    const getNavItem = (content2) => ({
      title: content2.title,
      _path: content2._path,
      _file: content2._file,
      children: [],
      ...pickNavigationFields(content2),
      ...content2._draft ? { _draft: true } : {}
    });
    const navItem = getNavItem(content);
    if (isIndex) {
      const dirConfig = configs[navItem._path];
      if (typeof dirConfig?.navigation !== "undefined" && !dirConfig?.navigation) {
        return nav2;
      }
      if (content._path !== "/") {
        const indexItem = getNavItem(content);
        navItem.children.push(indexItem);
      }
      Object.assign(
        navItem,
        pickNavigationFields(dirConfig)
      );
    }
    if (parts.length === 1) {
      nav2.push(navItem);
      return nav2;
    }
    const siblings = parts.slice(0, -1).reduce((nodes, part, i) => {
      const currentPathPart = "/" + parts.slice(0, i + 1).join("/");
      const conf = configs[currentPathPart];
      if (typeof conf?.navigation !== "undefined" && !conf.navigation) {
        return [];
      }
      let parent = nodes.find((n) => n._path === currentPathPart);
      if (!parent) {
        parent = {
          title: generateTitle(part),
          _path: currentPathPart,
          _file: content._file,
          children: [],
          ...pickNavigationFields(conf)
        };
        nodes.push(parent);
      }
      return parent.children;
    }, nav2);
    siblings.push(navItem);
    return nav2;
  }, []);
  return sortAndClear(nav);
}
const collator = new Intl.Collator(void 0, { numeric: true, sensitivity: "base" });
function sortAndClear(nav) {
  const sorted = nav.sort((a, b) => collator.compare(a._file, b._file));
  for (const item of sorted) {
    if (item.children.length) {
      sortAndClear(item.children);
    } else {
      delete item.children;
    }
    delete item._file;
  }
  return nav;
}
function pick(keys) {
  return (obj) => {
    obj = obj || {};
    if (keys && keys.length) {
      return keys.filter((key) => typeof obj[key] !== "undefined").reduce((newObj, key) => Object.assign(newObj, { [key]: obj[key] }), {});
    }
    return obj;
  };
}
function isObject(obj) {
  return Object.prototype.toString.call(obj) === "[object Object]";
}

const _Ji7FCk = defineEventHandler(async (event) => {
  const query = getContentQuery(event);
  if (!isPreview(event) && Object.keys(query).length === 0) {
    const cache = await cacheStorage.getItem("content-navigation.json");
    if (cache) {
      return cache;
    }
  }
  const contents = await serverQueryContent(event, query).where({
    /**
     * Partial contents are not included in the navigation
     * A partial content is a content that has `_` prefix in its path
     */
    _partial: false,
    /**
     * Exclude any pages which have opted out of navigation via frontmatter.
     */
    navigation: {
      $ne: false
    }
  }).find();
  const dirConfigs = await serverQueryContent(event).where({ _path: /\/_dir$/i, _partial: true }).find();
  const configs = dirConfigs.reduce((configs2, conf) => {
    if (conf.title?.toLowerCase() === "dir") {
      conf.title = void 0;
    }
    const key = conf._path.split("/").slice(0, -1).join("/") || "/";
    configs2[key] = {
      ...conf,
      // Extract meta from body. (non MD files)
      ...conf.body
    };
    return configs2;
  }, {});
  return createNav(contents, configs);
});

const _lazy_7p2ATl = () => import('../handlers/renderer.mjs');

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
  { route: '/__nuxt_error', handler: _lazy_7p2ATl, lazy: true, middleware: false, method: undefined },
  { route: '/api/_github/repository', handler: _L5pOB0, lazy: false, middleware: false, method: undefined },
  { route: '/api/_github/repository/:query', handler: _L5pOB0, lazy: false, middleware: false, method: undefined },
  { route: '/api/_github/readme', handler: _9sJWTH, lazy: false, middleware: false, method: undefined },
  { route: '/api/_github/readme/:query', handler: _9sJWTH, lazy: false, middleware: false, method: undefined },
  { route: '/api/_github/releases', handler: _z4khyj, lazy: false, middleware: false, method: undefined },
  { route: '/api/_github/releases/:query', handler: _z4khyj, lazy: false, middleware: false, method: undefined },
  { route: '/api/_github/contributors', handler: _DDzVBM, lazy: false, middleware: false, method: undefined },
  { route: '/api/_github/contributors/:query', handler: _DDzVBM, lazy: false, middleware: false, method: undefined },
  { route: '/api/_github/contributors/file', handler: _xeNqDR, lazy: false, middleware: false, method: undefined },
  { route: '/api/_github/contributors/file/:query', handler: _xeNqDR, lazy: false, middleware: false, method: undefined },
  { route: '/api/_github/commits', handler: _Mminnp, lazy: false, middleware: false, method: undefined },
  { route: '/api/_github/commits/:query', handler: _Mminnp, lazy: false, middleware: false, method: undefined },
  { route: '/__studio.json', handler: _GiFTjE, lazy: false, middleware: false, method: "get" },
  { route: '/api/component-meta', handler: _usS7Ao, lazy: false, middleware: false, method: "get" },
  { route: '/api/component-meta/:component?', handler: _usS7Ao, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/query/:qid/**:params', handler: _3WxVjN, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/query/:qid', handler: _3WxVjN, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/query', handler: _3WxVjN, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/cache.1678414054441.json', handler: _rTmpOf, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/navigation/:qid/**:params', handler: _Ji7FCk, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/navigation/:qid', handler: _Ji7FCk, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/navigation', handler: _Ji7FCk, lazy: false, middleware: false, method: "get" },
  { route: '/**', handler: _lazy_7p2ATl, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const h3App = createApp({
    debug: destr(false),
    onError: errorHandler
  });
  const router = createRouter$1();
  h3App.use(createRouteRulesHandler());
  const localCall = createCall(toNodeListener(h3App));
  const localFetch = createFetch(localCall, globalThis.fetch);
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(
    eventHandler((event) => {
      const envContext = event.node.req.__unenv__;
      if (envContext) {
        Object.assign(event.context, envContext);
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: $fetch });
    })
  );
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch
  };
  for (const plugin of plugins) {
    plugin(app);
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const cert = process.env.NITRO_SSL_CERT;
const key = process.env.NITRO_SSL_KEY;
const server = cert && key ? new Server({ key, cert }, toNodeListener(nitroApp.h3App)) : new Server$1(toNodeListener(nitroApp.h3App));
const port = destr(process.env.NITRO_PORT || process.env.PORT) || 3e3;
const host = process.env.NITRO_HOST || process.env.HOST;
const s = server.listen(port, host, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  const protocol = cert && key ? "https" : "http";
  const i = s.address();
  const baseURL = (useRuntimeConfig().app.baseURL || "").replace(/\/$/, "");
  const url = `${protocol}://${i.family === "IPv6" ? `[${i.address}]` : i.address}:${i.port}${baseURL}`;
  console.log(`Listening ${url}`);
});
{
  process.on(
    "unhandledRejection",
    (err) => console.error("[nitro] [dev] [unhandledRejection] " + err)
  );
  process.on(
    "uncaughtException",
    (err) => console.error("[nitro] [dev] [uncaughtException] " + err)
  );
}
const nodeServer = {};

export { getRouteRules as g, nodeServer as n, useNitroApp as u };
//# sourceMappingURL=node-server.mjs.map
