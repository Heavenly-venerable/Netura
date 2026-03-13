export default defineNuxtConfig({
  devtools: { enabled: false },

  app: {
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: { name: "layout", mode: "out-in" },
    head: {
      htmlAttrs: {
        lang: 'id'
      },
      title: 'SMKN 1 ARAHAN - Sekolah Menengah Kejuruan Negeri 1 Arahan',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'SMKN 1 ARAHAN adalah sekolah menengah kejuruan unggulan di Kabupaten Indramayu dengan program keahlian TKJ, TKRO, dan Tata Busana. Be Religius, Be Smart and Be Fun.'
        },
        { name: 'keywords', content: 'SMKN 1 ARAHAN, SMK Negeri 1 Arahan, SMK Arahan, Sekolah Kejuruan Indramayu, PPDB SMK, TKJ, TKRO, Tata Busana' },
        { name: 'author', content: 'SMKN 1 ARAHAN' },
        { name: 'robots', content: 'index, follow' },

        // Open Graph / Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://netura.vercel.app' },
        { property: 'og:title', content: 'SMKN 1 ARAHAN - Sekolah Menengah Kejuruan Negeri 1 Arahan' },
        {
          property: 'og:description',
          content: 'SMKN 1 ARAHAN adalah sekolah menengah kejuruan unggulan di Kabupaten Indramayu dengan program keahlian TKJ, TKRO, dan Tata Busana.'
        },
        { property: 'og:image', content: '/logo.png' },
        { property: 'og:image:width', content: '750' },
        { property: 'og:image:height', content: '750' },
        { property: 'og:image:alt', content: 'Logo SMKN 1 ARAHAN' },

        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:url', content: 'https://netura.vercel.app' },
        { name: 'twitter:title', content: 'SMKN 1 ARAHAN - Sekolah Menengah Kejuruan Negeri 1 Arahan' },
        {
          name: 'twitter:description',
          content: 'SMKN 1 ARAHAN adalah sekolah menengah kejuruan unggulan di Kabupaten Indramayu dengan program keahlian TKJ, TKRO, dan Tata Busana.'
        },
        {
          name: 'twitter:image',
          content: '/logo.png'
        },

        // MS Application
        { name: 'msapplication-TileColor', content: '#f59e0b' },
        { name: 'theme-color', content: '#f59e0b' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/logo.png', sizes: '96x96' },
        { rel: 'icon', type: 'image/png', href: '/logo.png', sizes: '192x192' },
        { rel: 'apple-touch-icon', href: '/logo.png', sizes: '180x180' },
        { rel: 'canonical', href: 'https://netura.vercel.app' },
      ]
    }
  },

  css: ["~/assets/css/main.css"],

  modules: ["nuxt-primevue", "@samk-dev/nuxt-vcalendar", '@nuxtjs/sitemap', '@nuxtjs/robots'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  primevue: {
    usePrimeVue: true,
    cssLayerOrder: "tailwind-base, primevue, tailwind-utilities",
    components: {
      include: "*",
    },
  },

  nitro: {
    compressPublicAssets: true
  },

  site: {
    url: 'https://netura.vercel.app',
    name: 'SMKN 1 ARAHAN',
    description: 'Sekolah Menengah Kejuruan unggulan di Kabupaten Indramayu dengan program keahlian TKJ, TKRO, dan Tata Busana.',
    defaultLocale: 'id',
    identity: {
      type: 'Organization'
    },
  },

  sitemap: {
    enabled: true,
  },

  robots: {
    enabled: true,
  },

  routeRules: {
    '/': { prerender: true },
    '/sambutan': { prerender: true },
    '/sejarah': { prerender: true },
    '/visi-misi': { prerender: true },
    '/struktur-organisasi': { prerender: true },
    '/syarat-ppdb': { prerender: true },
    '/ppdb': { prerender: true },
    '/prestasi': { prerender: true },
    '/ekstrakulikuler': { prerender: true },
    '/agenda': { prerender: true },
    '/osis': { prerender: true },
    '/siswa': { prerender: true },
    '/kurikulum': { prerender: true },
    '/blog': { prerender: true },
    '/fasilitas': { prerender: true },
    '/galeri': { prerender: true },
    '/kontak': { prerender: true }
  }
})
