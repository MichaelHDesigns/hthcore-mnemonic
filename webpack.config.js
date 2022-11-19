const path = require('path');

module.exports = {
  mode: 'production',
  entry: './index.js',
  output: {
    library: 'bitcoreMnemonic',
    path: path.resolve(__dirname, 'dist'),
    filename: 'bitcore-mnemonic.js'
  }
};
