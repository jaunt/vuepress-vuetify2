const { fs, path } = require('@vuepress/shared-utils')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  title: "Test",
  description: "Test Dest",
  port: 8082,
  theme: '',
  themeConfig: {},
  head: [
    ['link', { href: 'https://cdn.jsdelivr.net/npm/@mdi/font@3.x/css/materialdesignicons.min.css', rel: 'stylesheet' }],
    ['link', { href: 'https://fonts.googleapis.com/css?family=Playfair+Display:700|Hind:600|Roboto:100,300,400,500,700,900|Material+Icons', rel: 'stylesheet'}]
  ],
  configureWebpack: (config, isServer) => {
    let myConfig={};
    if (isServer) {
      myConfig.externals = nodeExternals({
        whitelist: [/vuetify/]
      })
    }
    return myConfig
  }
}