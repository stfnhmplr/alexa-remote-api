import fs from 'fs'
import os from 'os'
import Alexa from 'alexa-remote2'
const alexa = new Alexa();

const path = os.homedir() + '/.alexa-remote-rest-api/config.json';

console.log(`loading config from ${path}`);

let config;

try {
    const file = fs.readFileSync(path, 'utf8')
    config = JSON.parse(file);
} catch (e) {
    console.log('Could not find or parse config file');
    process.exit();
}

alexa.init({
    email: config.email,
    password: config.password,
    bluetooth: config.bluetooth,
}, (err) => {
    if (err) {
        console.log(err);
        return;
    }
})

export default alexa