// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  app: {
    head: {
      title: 'Peter Ayono - Developer',
      link: [
        // Ensure your file in the /public folder is named exactly favicon.ico
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },

  css: [
    '~/assets/css/main.scss',
    '@fortawesome/fontawesome-svg-core/styles.css',
    '@mdi/font/css/materialdesignicons.min.css'
  ],

  runtimeConfig: {
    // Keys within public are also exposed client-side
    public: {
      emailjsServiceId: process.env.EMAILJS_SERVICE_ID,
      emailjsTemplateId: process.env.EMAILJS_TEMPLATE_ID,
      emailjsPublicKey: process.env.EMAILJS_PUBLIC_KEY,
    }
  }
})