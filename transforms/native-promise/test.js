'use strict';

const { runTransformTest } = require('codemod-cli');

runTransformTest({
  name: 'native-promise',
  path: require.resolve('./index.js'),
  fixtureDir: `${__dirname}/__testfixtures__/`,
});
