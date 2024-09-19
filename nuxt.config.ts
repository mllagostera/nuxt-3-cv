import { createResolver } from '@nuxt/kit'
const { resolve } = createResolver(import.meta.url)

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // exp
  experimental: {
    localLayerAliases: true,
  },

  // app config
  app: {
    // global transition
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
  },

  // modules
  modules: [
    // styling & ui
    '@nuxtjs/tailwindcss',
    'nuxt-headlessui',
    'nuxt-icon',
    '@nuxtjs/color-mode',
    // management
    '@pinia/nuxt',
    '@vueuse/nuxt',
    // contents,
    '@nuxt/content',
    // locale
    '@nuxtjs/i18n',
    // hydration
    'nuxt-delay-hydration',
    // robot
    ['@nuxtjs/robots', { configPath: '~/config/robots.config' }],
  ],

  css: [
    resolve('./assets/scss/_variables.scss'),
    resolve('./assets/scss/app.scss'),
  ],

  components: [
    {
      prefix: 'Layout',
      path: resolve('./components/layouts'),
      global: true,
    },
    {
      prefix: 'Awesome',
      path: resolve('./components/awesome'),
      global: true,
    },
  ],

  imports: {
    dirs: [resolve('./stores'), '~/stores'],
  },

  // module::pinia
  pinia: {
    storesDirs: ['~/stores/**', '#/stores/**', '@/stores/**'],
  },

  // module::headlessui
  headlessui: {
    prefix: 'Headless',
  },

  // module::color-mode
  colorMode: {
    classSuffix: '',
  },

  // module::content
  content: {
    markdown: {
      mdc: true,
    },
    highlight: {
      theme: 'github-dark',
    },
  },

  // localization
  i18n: {
    locales: [
      {
        code: 'en',
        name: 'English',
        file: 'en-US.ts',
      },
      {
        code: 'es',
        name: 'Español',
        file: 'es-ES.ts',
      },
      {
        code: 'ca',
        name: 'Català',
        file: 'es-CA.ts',
      },
    ],
    defaultLocale: 'en',
    lazy: false,
    langDir: 'locales/',
    detectBrowserLanguage: false,
    reloadOnLanguageChange: false,
  },
  delayHydration: {
    mode: 'init',
  },
  icon: {
    provider: 'server',
    customCollections: [
      {
        prefix: 'my-flags',
        dir: 'assets/flags'
      },
    ],
  },
})
