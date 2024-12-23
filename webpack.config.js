const webpack = require('@nativescript/webpack');

module.exports = (env) => {
  webpack.init(env);

  // Extend the default webpack configuration
  webpack.chainWebpack((config) => {
    // Add Babel loader for JS/TS/JSX/TSX files
    config.module
      .rule('babel')
      .test(/\.(js|jsx|ts|tsx)$/) // Match JavaScript and TypeScript files
      .exclude.add(/node_modules/) // Exclude node_modules
      .end()
      .use('babel-loader')
      .loader('babel-loader')
      .options({
        presets: [
          '@babel/preset-env', // For modern JavaScript
          '@babel/preset-react', // For React JSX
          '@babel/preset-typescript', // For TypeScript
        ],
      });
  });

  return webpack.resolveConfig();
};