export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Tenet',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    "@/plugins/vuelidate"
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: "AIzaSyA-ipp5U0-cHl5zgByEorP23Mt01nxDv3w",
          authDomain: "tenet-ceb48.firebaseapp.com",
          databaseURL: "https://tenet-ceb48-default-rtdb.firebaseio.com",
          projectId: "tenet-ceb48",
          storageBucket: "tenet-ceb48.appspot.com",
          messagingSenderId: "165162657277",
          appId: "1:165162657277:web:b097ba5563a11b43cd6594",
          measurementId: "G-38KQBY137V"
        },
        services: {
          auth: true,
          firestore: true,
          functions: true,
          storage: true,
          database: true,
          messaging: true,
          performance: true,
          analytics: true,
          remoteConfig: true
        }
      }
    ]
  ],

  
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
