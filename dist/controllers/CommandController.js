'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.play = play;
exports.pause = pause;
exports.next = next;
exports.previous = previous;
exports.forward = forward;
exports.rewind = rewind;
exports.volume = volume;
exports.shuffle = shuffle;
exports.repeat = repeat;
exports.weather = weather;
exports.traffic = traffic;
exports.flashbriefing = flashbriefing;
exports.goodmorning = goodmorning;
exports.singasong = singasong;
exports.tellstory = tellstory;
exports.speak = speak;

var _alexa = require('../alexa');

var _alexa2 = _interopRequireDefault(_alexa);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* COMMANDS */
function play(req, res) {
    _alexa2.default.sendCommand(req.body.device, 'play', function (err, result) {
        res.send(result);
    });
}

function pause(req, res) {
    _alexa2.default.sendCommand(req.body.device, 'pause', function (err, result) {
        res.send(result);
    });
}

function next(req, res) {
    _alexa2.default.sendCommand(req.body.device, 'next', function (err, result) {
        res.send(result);
    });
}

function previous(req, res) {
    _alexa2.default.sendCommand(req.body.device, 'previous', function (err, result) {
        res.send(result);
    });
}

function forward(req, res) {
    _alexa2.default.sendCommand(req.body.device, 'forward', function (err, result) {
        res.send(result);
    });
}

function rewind(req, res) {
    _alexa2.default.sendCommand(req.body.device, 'rewind', function (err, result) {
        res.send(result);
    });
}

function volume(req, res) {
    _alexa2.default.sendCommand(req.body.device, 'volume', req.body.value, function (err, result) {
        res.send(result);
    });
}

function shuffle(req, res) {
    _alexa2.default.sendCommand(req.body.device, 'shuffle', function (err, result) {
        res.send(result);
    });
}

function repeat(req, res) {
    _alexa2.default.sendCommand(req.body.device, 'repeat', function (err, result) {
        res.send(result);
    });
}

/* SEQUENCE COMMANDS */
function weather(req, res) {
    _alexa2.default.sendSequenceCommand(req.body.device, 'weather', function (err, result) {
        res.send(result);
    });
}

function traffic(req, res) {
    _alexa2.default.sendSequenceCommand(req.body.device, 'traffic', function (err, result) {
        res.send(result);
    });
}

function flashbriefing(req, res) {
    _alexa2.default.sendSequenceCommand(req.body.device, 'flashbriefing', function (err, result) {
        res.send(result);
    });
}

function goodmorning(req, res) {
    _alexa2.default.sendSequenceCommand(req.body.device, 'goodmorning', function (err, result) {
        res.send(result);
    });
}

function singasong(req, res) {
    _alexa2.default.sendSequenceCommand(req.body.device, 'singasong', function (err, result) {
        res.send(result);
    });
}

function tellstory(req, res) {
    _alexa2.default.sendSequenceCommand(req.body.device, 'tellstory', function (err, result) {
        res.send(result);
    });
}

function speak(req, res) {
    _alexa2.default.sendSequenceCommand(req.body.device, 'speak', req.body.text, function (err, result) {
        res.send(result);
    });
}