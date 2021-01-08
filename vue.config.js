module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/scss/_variables.scss";
          @import "@/scss/_mixins.scss";
          @import "@/scss/_animation.scss";
          @import "@/scss/_global.scss";
        `,
      },
    },
  },
};
