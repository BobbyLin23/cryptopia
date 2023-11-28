// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@vueuse/nuxt', '@nuxt/ui', '@pinia/nuxt', '@nuxtjs/supabase'],
  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in',
    },
  },
  pinia: {
    storesDirs: ['./stores/**'],
  },
  ui: {
    icons: ['carbon'],
  },
})
