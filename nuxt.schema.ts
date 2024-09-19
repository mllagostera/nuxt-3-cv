import { NuxtAwesomeAppConfig } from './app.config'

export default defineNuxtSchema({
  appConfig: {
    awesome: {
      name: 'Nuxt 3 web page',
      description:
        'my nuxt3 webpage',
      project: {
        links: {
          github: 'https://github.com/mllagostera',
        },
      },
      layout: {
        page: {
          navbar: {
            menus: [],
          },
        },
        footer: {
          year: 2024,
        },
        welcome: {
          title: 'CV Template',
          disableInfoReplaceIndexInWelcomePage: true,
        },
      },
      author: {
        name: 'mllagostera',
        links: {
          github: 'https://github.com/mllagostera',
          medium: '#',
          website: 'https://mllagostera.com',
        },
      },
    } as NuxtAwesomeAppConfig,
  },
})
