
import type { Defu } from 'defu'
import cfg0 from "C:/Users/AVidal/Documents/Projects/SEPA/frontier/docs/app.config"
import cfg1 from "C:/Users/AVidal/Documents/Projects/SEPA/frontier/docs/node_modules/@nuxt-themes/docus/app.config"
import cfg2 from "C:/Users/AVidal/Documents/Projects/SEPA/frontier/docs/node_modules/@nuxt-themes/typography/app.config"
import cfg3 from "C:/Users/AVidal/Documents/Projects/SEPA/frontier/docs/node_modules/@nuxt-themes/elements/app.config"

declare const inlineConfig = {}
type ResolvedAppConfig = Defu<typeof inlineConfig, [typeof cfg0, typeof cfg1, typeof cfg2, typeof cfg3]>

declare module '@nuxt/schema' {
  interface AppConfig extends ResolvedAppConfig { }
}
