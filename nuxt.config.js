import {createClient} from "./plugins/contentful";
import slug from 'slug'
import _ from 'lodash'

export default {
  target: 'static',

  head: {
    titleTemplate: (titleChunk) => {
      // If undefined or blank then we don't need the hyphen
      return titleChunk ? `${titleChunk} – #ESNCZ20 | ESN Czech Republic` : 'ESN Czech Republic';
    },
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {name: 'description', content: 'Celebrations of 20 years of ESN in the Czech Republic'},
      {name: 'author', content: 'ESN Brno United & ISC CTU in Prague'},
      {
        name: 'keywords',
        content: '20, 20 years, erasmus, erasmus student network, czech republic, isc ctu in prague, esn vse prague, #esncz20'
      },
      {name: 'format-detection', content: 'telephone=no,date=no,email=no'},
      {name: 'google-site-verification', content: '5J3DG_xFC40IwbDml8YEsQtdSZpKc-FMtJ4CXGmv_nA'},
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: process.env.NUXT_ROUTER_BASE_URL + 'icon.png'}
    ]
  },

  css: [
    '@/assets/css/main.css',
  ],

  plugins: [
    {src: '~/plugins/pwa-update.js', mode: 'client'},
  ],

  components: true,

  buildModules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/dotenv',
    '@nuxtjs/pwa',
  ],

  modules: [
    '@nuxtjs/axios',
    ['nuxt-leaflet', { /* module options */}],
    '@nuxtjs/color-mode',
    '@nuxtjs/gtm',
    '@nuxtjs/markdownit',
    '~/modules/write-version.js',
    '@nuxtjs/sitemap',
  ],

  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: process.env.FULL_BASE_URL || '/',
    prefix: process.env.NUXT_ROUTER_BASE_URL || '/',
  },

  build: {
    extend(config, {isDev, isClient}) {
      // config.module.rules.push(
      //   {
      //     enforce: 'pre',
      //     test: /\.gpx/i,
      //     use: 'raw-loader',
      //   }
      // )
    }
  },

  router: {
    base: process.env.NUXT_ROUTER_BASE_URL || '/'
  },

  pwa: {
    meta: {
      theme_color: '#2e3192',
      name: '#ESNCZ20',
      author: 'ESN Brno United & ISC CTU in Prague',
      ogHost: process.env.FULL_BASE_URL || 'http://localhost:3000/',
      ogImage: {
        path: 'og-image.png',
        width: 1921,
        height: 1080,
      }
    },
    manifest: {
      name: '#ESNCZ20',
      short_name: '#ESNCZ20',
      display: 'standalone',
    },
    icon: {
      purpose: 'any',
    },
    workbox: {
      // enabled: false,
      offline: false,
      // offlineStrategy: "StaleWhileRevalidate",
    }
  },

  generate: {
    fallback: true,
    async routes() {

      const client = createClient();
      const events = await client.getEntries({
        content_type: 'event',
      });
      const questions = await client.getEntries({
        content_type: 'faq',
      });
      return [
        ...events.items.map(i => `/event/${i.sys.id}`),
        ..._.uniq(questions.items.map(i => `/faq/${slug(i.fields.category)}`)),
        ...questions.items.map(i => `/faq/${slug(i.fields.category)}/${i.sys.id}`)
      ]
    }
  },
  colorMode: {
    classSuffix: ''
  },
  gtm: {
    id: 'GTM-595F8QZ',
    pageTracking: true,
  },
  markdownit: {
    runtime: true,
    preset: 'default',
    linkify: true,
    breaks: true,
  },
  sitemap: process.env.FULL_BASE_URL ? {
    hostname: process.env.FULL_BASE_URL,
    gzip: true,
  } : false
}
