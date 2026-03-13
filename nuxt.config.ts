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
      titleTemplate: '%s | SMKN 1 ARAHAN', // Template untuk judul halaman
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'google-site-verification',
          content='zoFuizzoZbLz8QCjRuxYQbvqnVO4mMYCatipFuqK-DU'
        },
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
        { property: 'og:image', content: '/android-chrome-512x512.png' }, // Gunakan file yang ada
        { property: 'og:image:width', content: '512' },
        { property: 'og:image:height', content: '512' },
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
          content: '/android-chrome-512x512.png' // Gunakan file yang ada
        },

        // MS Application
        { name: 'msapplication-TileColor', content: '#f59e0b' },
        { name: 'msapplication-TileImage', content: '/android-chrome-192x192.png' }, // Tambahkan untuk Windows
        { name: 'theme-color', content: '#f59e0b' }
      ],
      link: [
        // Favicon untuk browser - gunakan file yang sudah ada
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/android-chrome-192x192.png' },
        { rel: 'icon', type: 'image/png', sizes: '512x512', href: '/android-chrome-512x512.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' }, // Tambahkan manifest
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
    siteUrl: 'https://netura.vercel.app', // Tambahkan siteUrl
  },

  robots: {
    enabled: true,
    UserAgent: '*',
    Disallow: [], // Izinkan semua halaman
    Sitemap: 'https://netura.vercel.app/sitemap.xml'
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
