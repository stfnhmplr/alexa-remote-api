'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _MainController = require('../controllers/MainController');

var action = _interopRequireWildcard(_MainController);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var routes = function routes(app) {
    app.route('/').get(action.home);
    app.route('/devices').get(action.devices);
    app.route('/cards/:limit?').get(action.cards);
    app.route('/media/:device').get(action.media);
    app.route('/list/:device').get(action.list);
    app.route('/lists/:device').get(action.lists);
    app.route('/wakewords').get(action.wakeWords);
    app.route('/notifications').get(action.notifications);
    app.route('/donotdisturb').get(action.getDoNotDisturb).put(action.setDoNotDisturb);
    app.route('/bluetooth').get(action.getBluetooth).post(action.connectBluetooth).delete(action.disconnectBluetooth);
    app.route('/notifications/:device/state').get(action.deviceNotificationState);
    app.route('/find/:device').get(action.find);
    app.route('/alarm/volume').put(action.alarmVolume);
    app.route('automation/routines').get(action.getAutomationRoutines).put(action.executeAutomationRoutine);
};

exports.default = routes;