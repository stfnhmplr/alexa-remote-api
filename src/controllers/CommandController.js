import alexa from '../alexa'

/* COMMANDS */
export function play(req, res) {
    alexa.sendCommand(req.body.device, 'play', (err, result) => {
        res.send(result);
    })
}

export function pause(req, res) {
    alexa.sendCommand(req.body.device, 'pause', (err, result) => {
        res.send(result);
    })
}

export function next(req, res) {
    alexa.sendCommand(req.body.device, 'next', (err, result) => {
        res.send(result);
    })
}

export function previous(req, res) {
    alexa.sendCommand(req.body.device, 'previous', (err, result) => {
        res.send(result);
    })
}

export function forward(req, res) {
    alexa.sendCommand(req.body.device, 'forward', (err, result) => {
        res.send(result);
    })
}

export function rewind(req, res) {
    alexa.sendCommand(req.body.device, 'rewind', (err, result) => {
        res.send(result);
    })
}

export function volume(req, res) {
    alexa.sendCommand(req.body.device, 'volume', req.body.value, (err, result) => {
        res.send(result);
    })
}

export function shuffle(req, res) {
    alexa.sendCommand(req.body.device, 'shuffle', (err, result) => {
        res.send(result);
    })
}

export function repeat(req, res) {
    alexa.sendCommand(req.body.device, 'repeat', (err, result) => {
        res.send(result);
    })
}


/* SEQUENCE COMMANDS */
export function weather(req, res) {
    alexa.sendSequenceCommand(req.body.device, 'weather', (err, result) => {
        res.send(result);
    })
}

export function traffic(req, res) {
    alexa.sendSequenceCommand(req.body.device, 'traffic', (err, result) => {
        res.send(result);
    })
}

export function flashbriefing(req, res) {
    alexa.sendSequenceCommand(req.body.device, 'flashbriefing', (err, result) => {
        res.send(result);
    })
}

export function goodmorning(req, res) {
    alexa.sendSequenceCommand(req.body.device, 'goodmorning', (err, result) => {
        res.send(result);
    })
}

export function singasong(req, res) {
    alexa.sendSequenceCommand(req.body.device, 'singasong', (err, result) => {
        res.send(result);
    })
}

export function tellstory(req, res) {
    alexa.sendSequenceCommand(req.body.device, 'tellstory', (err, result) => {
        res.send(result);
    })
}

export function speak(req, res) {
    alexa.sendSequenceCommand(req.body.device, 'speak', req.body.text, (err, result) => {
        res.send(result);
    })
}