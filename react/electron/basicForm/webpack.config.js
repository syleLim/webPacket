const path = require('path')
const webpack = require('webpack')

//제외 모듈
const externalPlugins = new webpack.ExternalsPlugin('commonjs', [
  'app',
  'auto-updater',
  'browser-window',
  'content-tracing',
  'dialog',
  'electron',
  'global-shortcut',
  'ipc',
  'menu',
  'menu-item',
  'powermonitor',
  'protocol',
  'tray',
  'remote',
  'web-frame',
  'clipboard',
  'cras-reporter',
  'screen',
  'shell'
])

module.exports = {
  entry : {
    index : path.join(__dirname, 'src', 'index.js')
  },
  
  output : {
    path : path.join(__dirname, 'out')
    filename: '[name].js'
  },
  
  devtool: 'cheap-module-eval-source-map',
  target : 'node',
  module: {
    rules : [
      {
        test : /.js$/,
        loader : 'babel-loader',
        options : {
          presets : ['es2015', 'react']
        }
      }
    ]
  },
  
  plugin: [
    externalPlugins
  ]
}
















