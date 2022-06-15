/* eslint-disable import/no-extraneous-dependencies */

const { defineConfig } = require('vite');
const path = require('path');

module.exports = defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'lib/lewk.js'),
      name: 'lewk',
      fileName: (format) => `lewk.${format}.js`,
    },
  },
});
