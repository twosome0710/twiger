module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/assets/scss/base.scss";
        `,
      },
    },
  },
};
