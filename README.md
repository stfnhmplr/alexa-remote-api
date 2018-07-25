# Alexa Remote Api

This package is an Api wrapper around [Apollon77/alexa-remote](https://github.com/Apollon77/alexa-remote), a great package to control your Alexa devices.

## Installation

```
npm install alexa-remote-api
```

## Configuration
Create a config file in `~/.alexa-remote-api/config.json` with your amazon credentials

```json
{
    "email": "foo@bar.com",
    "password": "supersecret",
    "bluetooth": false
}
```

## Run
```bash
    node dist/server
```

... or with a custom port
```bash
    PORT=3000 node dist/server
```

## Example
```bash
curl --header "Content-Type: application/json" \
  --request POST \
  --data '{"device":"echo","text":"hello world"}' \
  http://localhost:3000/speak
```