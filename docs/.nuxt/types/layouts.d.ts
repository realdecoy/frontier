import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "docs-page" | "default" | "page"
declare module "C:/Users/AVidal/Documents/Projects/SEPA/frontier/docs/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}