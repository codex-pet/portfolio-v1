// plugins/fontawesome.ts
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons' // Solid icons
import { fab } from '@fortawesome/free-brands-svg-icons' // Brand icons
// Import other icon styles if you need them, e.g., { far } from '@fortawesome/free-regular-svg-icons'

// This is important, as it prevents the introduction of an extra CSS file that causes flicker
config.autoAddCss = false

// Add all icons to the library so you can use them by name
library.add(fas, fab) // Add solid and brand icons

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon)
})