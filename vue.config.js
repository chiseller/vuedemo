const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  //outputDir: "./d",
  chainWebpack: (config) => {
    config.entry("index").add("./src/main.js");
  },
});
