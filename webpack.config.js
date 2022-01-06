const path = require('path');

module.exports = {
  mode: 'production',
  entry: './index.js',
  output: {
    library: 'hthcoreMnemonic',
    path: path.resolve(__dirname, 'dist'),
    filename: 'hthcore-mnemonic.js'
  }
};
