module.exports = {
    siteMetadata: {
        title: "HVSE",
        description: 'HVSE is a foundation which allows to bet on your success',
        siteUrl: `https://www.hvse.xyz`,
        author: 'the HVSE Foundation',
    },
    plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-mdx",
    "hamburger-react",
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "G-NCXE675HVX",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Enables Google Optimize using your container Id
        optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
        // Enables Google Optimize Experiment ID
        experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
        // Set Variation ID. 0 for original 1,2,3....
        variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
        // Defers execution of google analytics script after page load
        defer: false,
        // Any additional optional fields
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "example.com",
        // defaults to false
        enableWebVitalsTracking: true,
      },
    },
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: "G-NCXE675HVX", // leave empty if you want to disable the tracker
          cookieName: "gatsby-gdpr-google-analytics", // here can you change the cookie name
          anonymize: true, // default
          allowAdFeatures: false // default
        },
        googleTagManager: {
          trackingId: "GTM-KL5ML96", // leave empty if you want to disable the tracker
          cookieName: "gatsby-gdpr-google-tagmanager", // // here can you change the cookie name
          dataLayerName: "dataLayer", // default
        },
        facebookPixel: {
          pixelId: "277360171070385", // leave empty if you want to disable the tracker
          cookieName: "gatsby-gdpr-facebook-pixel", // // here can you change the cookie name
        },
        // defines the environments where the tracking should be available  - default is ["production"]
        environments: ["production", "development"],
      },
    },
    {
    resolve: `gatsby-plugin-facebook-pixel`,
    options: {
      pixelId: "277360171070385",
    },
  },
    {
    resolve: "gatsby-plugin-google-tagmanager",
    options: {
      id: "GTM-KL5ML96",

      // Include GTM in development.
      //
      // Defaults to false meaning GTM will only be loaded in production.
      includeInDevelopment: false,

      // datalayer to be set before GTM is loaded
      // should be an object or a function that is executed in the browser
      //
      // Defaults to null
      defaultDataLayer: { platform: "gatsby" },

      // Specify optional GTM environment details.
      gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
      gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
      dataLayerName: "YOUR_DATA_LAYER_NAME",

      // Name of the event that is triggered
      // on every Gatsby route change.
      //
      // Defaults to gatsby-route-change
      routeChangeEventName: "YOUR_ROUTE_CHANGE_EVENT_NAME",
      // Defaults to false
      enableWebVitalsTracking: true,
      // Defaults to https://www.googletagmanager.com
      selfHostedOrigin: "YOUR_SELF_HOSTED_ORIGIN",
    },
  },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Human Value Stock Exchange",
        short_name: "HVSE",
        start_url: "/",
        background_color: "white",
        theme_color: "white",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "src/images/logos/logo.png" // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-react-helmet",
    {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        `gatsby-remark-mathjax`,
      ],
    },
  },
  ],
};
