import express from 'express'
import commandRoutes from './routes/CommandRoutes'
import mainRoutes from './routes/MainRoutes'
import bodyParser from 'body-parser'
import os from 'os'

const app = express()
const PORT = process.env.PORT || 3000

app.use(bodyParser.json())

commandRoutes(app)
mainRoutes(app)

app.listen(PORT, () => {
    const ipAddress = () => [].concat.apply([], Object.values(os.networkInterfaces()))
        .filter(details => details.family === 'IPv4' && !details.internal)
        .pop().address

    console.log(`Alexa Remote Api is running on ${ipAddress()}:${PORT}`)
})