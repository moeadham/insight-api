'use strict';

var config = require('../../config/config');
var path = require('path');

var _getVersion = function() {
  var pjson = require('../../package.json');
  return pjson.version;
};

exports.render = function(req, res) {
  if (config.publicPath) {
  	var publicPath = path.resolve(config.publicPath);
    return res.sendfile(publicPath + '/index.html');
  }

  var version = _getVersion();
  res.send('insight API v' + version);
};

exports.version = function(req, res) {
  var version = _getVersion();
  res.json({ version: version });
};

