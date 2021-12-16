module.exports = {
  productionSourceMap: process.env.NODE_ENV !== 'production',
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "@/assets/sass/variables";`
      }
    }
  },
  
}
