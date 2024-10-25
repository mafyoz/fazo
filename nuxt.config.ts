// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['nuxt-swiper', '@pinia/nuxt', '@nuxtjs/tailwindcss', '@nuxtjs/i18n',"nuxt-primevue"],
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      baseURL: 'https://vadalar.uz/api',
    },
  },

  i18n: {
    defaultLocale: 'uz',
    langDir: "./locales/",
    locales: [
      {
        code: 'en',
        name: 'en',
        file: "en.json",
      },
      {
        code: 'uz',
        name: 'uz',
        file: "uz.json",

      },
      {
        code: 'ru',
        name: 'ru',
        file: "ru.json",
      },
    ],
  },
  css: ['@/assets/scss/main.scss', 'primevue/resources/themes/aura-light-green/theme.css',
    'primevue/resources/primevue.min.css',
    'primeicons/primeicons.css',],
})
