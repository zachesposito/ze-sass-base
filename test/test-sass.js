var path = require('path');
var sassTrue = require('sass-true');
var tildeImporter = require('node-sass-tilde-importer');

var sassFile = path.join(__dirname, 'all.scss');

function importer(url, prev, done) {
    if (url[0] === '~') {
      url = path.resolve('node_modules', url.substr(1));
    }
   
    return { file: url };
  }
   
  sassTrue.runSass({ importer, file: sassFile }, describe, it);