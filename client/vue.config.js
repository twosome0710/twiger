module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/assets/styles/_mixins.scss";
        `,
      },
    },
  },
};
