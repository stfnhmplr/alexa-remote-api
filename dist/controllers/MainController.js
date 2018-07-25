'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.home = home;
exports.devices = devices;
exports.cards = cards;
exports.media = media;
exports.list = list;
exports.lists = lists;
exports.wakeWords = wakeWords;
exports.notifications = notifications;
exports.getDoNotDisturb = getDoNotDisturb;
exports.setDoNotDisturb = setDoNotDisturb;
exports.getBluetooth = getBluetooth;
exports.connectBluetooth = connectBluetooth;
exports.disconnectBluetooth = disconnectBluetooth;
exports.deviceNotificationState = deviceNotificationState;
exports.find = find;
exports.alarmVolume = alarmVolume;
exports.getAutomationRoutines = getAutomationRoutines;
exports.executeAutomationRoutine = executeAutomationRoutine;
exports.playerInfo = playerInfo;

var _alexa = require('../alexa');

var _alexa2 = _interopRequireDefault(_alexa);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function home(req, res) {
    _alexa2.default.getDevices(function (err, result) {
        if (err) {
            res.send(err);
            return;
        }

        res.send('<h1>Alexa Remote Api</h1>');
    });
}

function devices(req, res) {
    _alexa2.default.getDevices(function (err, result) {
        res.json(result);
    });
}

function cards(req, res) {
    var limit = req.params.limit || 10;

    _alexa2.default.getCards(limit, function (err, result) {
        res.json(result);
    });
}

function media(req, res) {
    _alexa2.default.getMedia(req.params.device, function (err, result) {
        res.json(result);
    });
}

//TODO
function list(req, res) {
    _alexa2.default.getList(req.params.device, function (err, result) {
        res.json(result);
    });
}

function lists(req, res) {
    _alexa2.default.getLists(req.params.device, function (err, result) {
        res.json(result);
    });
}

function wakeWords(req, res) {
    _alexa2.default.getWakeWords(function (err, result) {
        res.json(result);
    });
}

function notifications(req, res) {
    _alexa2.default.getNotifications(function (err, result) {
        res.json(result);
    });
}

function getDoNotDisturb(req, res) {
    _alexa2.default.getDoNotDisturb(function (err, result) {
        res.json(result);
    });
}

function setDoNotDisturb(req, res) {
    _alexa2.default.setDoNotDisturb(req.body.device, req.body.enabled, function (err, result) {
        res.json(result);
    });
}

function getBluetooth(req, res) {
    _alexa2.default.getBluetooth(function (err, result) {
        res.json(result);
    });
}

function connectBluetooth(req, res) {
    _alexa2.default.connectBluetooth(req.body.device, req.body.btAddress, function (err, result) {
        res.json(result);
    });
}

function disconnectBluetooth(req, res) {
    _alexa2.default.disconnectBluetooth(req.body.device, req.body.btAddress, function (err, result) {
        res.json(result);
    });
}

function deviceNotificationState(req, res) {
    _alexa2.default.getDeviceNotificationState(req.params.device, function (err, result) {
        res.json(result);
    });
}

function find(req, res) {
    _alexa2.default.find(req.params.device, function (err, result) {
        res.json(result);
    });
}

function alarmVolume(req, res) {
    _alexa2.default.setAlarmVolume(req.body.device, req.body.volume, function (err, result) {
        res.json(result);
    });
}

function getAutomationRoutines(req, res) {
    _alexa2.default.getAutomationRoutines(function (err, result) {
        res.json(result);
    });
}

function executeAutomationRoutine(req, res) {
    _alexa2.default.executeAutomationRoutine(req.body.device, req.body.automationId, function (err, result) {
        res.json(result);
    });
}

function playerInfo(req, res) {
    _alexa2.default.getPlayerInfo(function (err, result) {
        res.json(result);
    });
}