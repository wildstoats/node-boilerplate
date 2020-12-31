const standard = require('@neutrinojs/standardjs');
const react = require('@neutrinojs/react');
const jest = require('@neutrinojs/jest');

module.exports = {
  options: {
    root: __dirname,
  },
  use: [
    standard(),
    react({
      devServer: {
        host:'0.0.0.0',
        port: 8081,
        disableHostCheck: true,
      },
      hot: true,
      html: {
        title: 'frontend'
      }
    }),
    jest(),
  ],
};
