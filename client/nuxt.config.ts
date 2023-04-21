export default defineNuxtConfig({
  ssr: false,
  modules: ['nuxt-quasar-ui', '@pinia/nuxt'],
  quasar: {
    iconSet: 'material-icons',
    plugins: ['Dialog', 'Notify', 'Dark'],
    extras: {
      font: 'roboto-font',
      fontIcons: ['fontawesome-v6', 'material-icons'],
    },
  },
  imports: {
    dirs: ['stores/**'],
  },
});
