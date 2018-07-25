'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _CommandController = require('../controllers/CommandController');

var commands = _interopRequireWildcard(_CommandController);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var routes = function routes(app) {
    app.route('/play').post(commands.play);
    app.route('/pause').post(commands.pause);
    app.route('/next').post(commands.next);
    app.route('/previous').post(commands.previous);
    app.route('/forward').post(commands.forward);
    app.route('/rewind').post(commands.rewind);
    app.route('/volume').post(commands.volume);
    app.route('/shuffle').post(commands.shuffle);
    app.route('/repeat').post(commands.repeat);
    app.route('/weather').post(commands.weather);
    app.route('/traffic').post(commands.traffic);
    app.route('/flashbriefing').post(commands.flashbriefing);
    app.route('/goodmorning').post(commands.goodmorning);
    app.route('/singasong').post(commands.singasong);
    app.route('/tellstory').post(commands.tellstory);
    app.route('/speak').post(commands.speak);
};

exports.default = routes;