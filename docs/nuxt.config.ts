import { resolve } from 'pathe'

const alias = {}

export default defineNuxtConfig({
  alias,
  app: {
    head: {
      script: [
        {
          defer: true,
          'data-domain': 'frontier.realdecoy.com',
          src: 'https://plausible.io/js/script.js'
        }
      ]
    }
  },
  content: { },
  nitro: {
    prerender: {
      routes: [
        '/',
      ]
    }
  },
  modules: ['@nuxtlabs/github-module', '@nuxthq/studio'],
  extends: process.env.DOCUS_THEME_PATH || '@nuxt-themes/docus',
  github: {
    owner: 'realdecoy',
    repo: 'frontier',
    branch: 'main'
  },
  colorMode: {
    preference: 'dark'
  },
  runtimeConfig: {
    content: {
      host: 'https://content.nuxtjs.org'
    },
    public: {
      algolia: {
        applicationId: '',
        apiKey: '',
        langAttribute: 'lang',
        docSearch: {
          indexName: 'frontier'
        }
      }
    }
  }
})
