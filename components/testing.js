const strapiBaseUri = process.env.API_URL || "http://localhost:1337";
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    target: "static",
  env: {
    strapiBaseUri,
  },
    title: "frontend",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/vue-swal'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    // '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // ...other modules
    "@nuxtjs/strapi"
  ],
  strapi: {
    entities: ["products", "orders", "subscribers"]
  },
  axios: {
    baseURL: process.env.API_AUTH_URL || 'http://localhost:1337'
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {  /*
    ** Run ESLint on save
    */
   extend(config, ctx) {
     if (ctx.dev && ctx.isClient) {
       config.module.rules.push({
         enforce: 'pre',
         exclude: /node_modules/,
         test: /\.(js|vue)$/,
         loader: 'eslint-loader',
         exclude: /(node_modules)/,
       })
     }
   },
   /*
    ** Add vue-swal
    */
   vendor: ['vue-swal'],}
};
