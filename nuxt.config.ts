export default defineNuxtConfig({

  modules: [
    "@nuxt/eslint",
    "@nuxt/image",
    "@nuxt/ui",
    "@nuxt/content",
    "@vueuse/nuxt",
    "motion-v/nuxt",
    "@nuxt/hints",
    "nuxt-studio",
  ],

  devtools: {
    enabled: true,
  },

  css: ["~/assets/css/main.css"],

  content: {
    build: {
      markdown: {
        highlight: {
          theme: "github-dark",
        },
      },
    },
  },

  compatibilityDate: "2024-11-01",

  nitro: {
    experimental: {
      openAPI: true,
    },
  },

  eslint: {
    config: {
      standalone: false,
    },
  },

  studio: {
    // Studio admin login route
    route: "/_studio",

    // Git repository configuration (required for production)
    repository: {
      provider: "github",
      owner: "th0h0e",
      repo: "nuxt-playground",
      branch: "main",
      rootDir: "",
    },

    development: {
      sync: true,
    },
  },
});
