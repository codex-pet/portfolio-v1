// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: [
    '~/assets/css/main.scss', // Your existing global SCSS
    '@fortawesome/fontawesome-svg-core/styles.css', // This minimal CSS is needed for Font Awesome SVGs
    '@mdi/font/css/materialdesignicons.min.css'
  ]
})