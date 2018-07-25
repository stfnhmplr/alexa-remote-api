import alexa from '../alexa'

export function home(req, res) {
    alexa.getDevices((err, result) => {
        if (err) {
            res.send(err)
            return
        }

        res.send('<h1>Alexa Remote Api</h1>')
    })
}

export function devices(req, res) {
    alexa.getDevices((err, result) => {
        res.json(result);
    })
}

export function cards(req, res) {
    const limit = req.params.limit || 10;

    alexa.getCards(limit, (err, result) => {
        res.json(result);
    })
}

export function media(req, res) {
    alexa.getMedia(req.params.device, (err, result) => {
        res.json(result);
    })
}

//TODO
export function list(req, res) {
    alexa.getList(req.params.device, (err, result) => {
        res.json(result);
    })
}

export function lists(req, res) {
    alexa.getLists(req.params.device, (err, result) => {
        res.json(result);
    })
}

export function wakeWords(req, res) {
    alexa.getWakeWords((err, result) => {
        res.json(result);
    })
}

export function notifications(req, res) {
    alexa.getNotifications((err, result) => {
        res.json(result);
    })
}

export function getDoNotDisturb(req, res) {
    alexa.getDoNotDisturb((err, result) => {
        res.json(result);
    })
}

export function setDoNotDisturb(req, res) {
    alexa.setDoNotDisturb(req.body.device, req.body.enabled, (err, result) => {
        res.json(result);
    })
}

export function getBluetooth(req, res) {
    alexa.getBluetooth((err, result) => {
        res.json(result);
    })
}

export function connectBluetooth(req, res) {
    alexa.connectBluetooth(req.body.device, req.body.btAddress, (err, result) => {
        res.json(result);
    })
}

export function disconnectBluetooth(req, res) {
    alexa.disconnectBluetooth(req.body.device, req.body.btAddress, (err, result) => {
        res.json(result);
    })
}

export function deviceNotificationState(req, res) {
    alexa.getDeviceNotificationState(req.params.device, (err, result) => {
        res.json(result);
    })
}

export function find(req, res) {
    alexa.find(req.params.device, (err, result) => {
        res.json(result);
    })
}

export function alarmVolume(req, res) {
    alexa.setAlarmVolume(req.body.device, req.body.volume, (err, result) => {
        res.json(result);
    })
}

export function getAutomationRoutines(req, res) {
    alexa.getAutomationRoutines((err, result) => {
        res.json(result);
    })
}

export function executeAutomationRoutine(req, res) {
    alexa.executeAutomationRoutine(req.body.device, req.body.automationId, (err, result) => {
        res.json(result);
    })
}

export function playerInfo(req, res) {
    alexa.getPlayerInfo((err, result) => {
        res.json(result);
    })
}