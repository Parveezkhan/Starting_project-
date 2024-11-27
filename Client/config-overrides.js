const webpack = require('webpack');
const path = require('path');

module.exports = function override(config) {
  // Ensure resolve.alias is properly set up with correct alias paths
  config.resolve.alias = {
    ...(config.resolve.alias || {}),
    crypto: require.resolve('crypto-browserify'),
    fs: require.resolve('browserify-fs'), // Polyfill fs module
    zlib: path.resolve(__dirname, 'empty-module.js'), // Mock zlib with an empty module
    net: false, // Mock Node.js net module with false
    tls: false, // Mock Node.js tls module with false
    http: require.resolve('stream-http'), // Polyfill HTTP
    https: require.resolve('https-browserify'), // Polyfill HTTPS
    os: require.resolve('os-browserify'), // Polyfill OS module
    path: require.resolve('path-browserify'), // Polyfill Path module
    stream: require.resolve('stream-browserify'), // Polyfill Stream module
    buffer: require.resolve('buffer'), // Polyfill Buffer
    assert: require.resolve('assert/'), // Polyfill Assert
    process: require.resolve('process/browser'), // Polyfill process
    vm: require.resolve('vm-browserify'), // Polyfill VM
    async_hooks: false, // Mock async_hooks module with false
  };

  // Adding necessary polyfills using ProvidePlugin
  config.plugins = [
    ...(config.plugins || []),
    new webpack.ProvidePlugin({
      process: 'process/browser',
      Buffer: ['buffer', 'Buffer'],
    }),
  ];

  return config;
};
