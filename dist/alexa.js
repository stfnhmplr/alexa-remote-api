'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _os = require('os');

var _os2 = _interopRequireDefault(_os);

var _alexaRemote = require('alexa-remote2');

var _alexaRemote2 = _interopRequireDefault(_alexaRemote);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var alexa = new _alexaRemote2.default();

var path = _os2.default.homedir() + '/.alexa-remote-api/config.json';

console.log('loading config from ' + path);

var config = void 0;

try {
    var file = _fs2.default.readFileSync(path, 'utf8');
    config = JSON.parse(file);
} catch (e) {
    console.log('Could not find or parse config file');
    process.exit();
}

alexa.init({
    email: config.email,
    password: config.password,
    bluetooth: config.bluetooth
}, function (err) {
    if (err) {
        console.log(err);
        return;
    }
});

exports.default = alexa;