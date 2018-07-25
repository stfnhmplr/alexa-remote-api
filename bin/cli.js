#!/usr/bin/env node

process.title = 'alexa-remote-api';
var path = require('path');
var fs = require('fs');
require(path.join(path.dirname(fs.realpathSync(__filename)), '../') + '/dist/server');