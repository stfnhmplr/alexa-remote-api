'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _CommandRoutes = require('./routes/CommandRoutes');

var _CommandRoutes2 = _interopRequireDefault(_CommandRoutes);

var _MainRoutes = require('./routes/MainRoutes');

var _MainRoutes2 = _interopRequireDefault(_MainRoutes);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _os = require('os');

var _os2 = _interopRequireDefault(_os);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var PORT = process.env.PORT || 3000;

app.use(_bodyParser2.default.json());

(0, _CommandRoutes2.default)(app);
(0, _MainRoutes2.default)(app);

app.listen(PORT, function () {
    var ipAddress = function ipAddress() {
        return [].concat.apply([], Object.values(_os2.default.networkInterfaces())).filter(function (details) {
            return details.family === 'IPv4' && !details.internal;
        }).pop().address;
    };

    console.log('Alexa Remote Api is running on ' + ipAddress() + ':' + PORT);
});