const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: 'http://localhost:5000'  // Cambia el puerto según el puerto en el que esté corriendo tu backend
  }
})
