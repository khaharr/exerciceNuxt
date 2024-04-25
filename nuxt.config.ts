//https://nuxt.com/docs/api/nuxt-config
    export default defineNuxtConfig({
      css: ["bootstrap/dist/css/bootstrap.min.css",
      "bootstrap-icons/font/bootstrap-icons.min.css"
      ], // add
      vite: {
        define: {
          "process.env.DEBUG": true,
        },
      },
    
      app: {
        head: {
          script: [
            {
              src: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js",            
            },
          ],
        },
      },
    });
    
    

