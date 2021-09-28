import bodyParser from 'body-parser'
import cors from 'cors'
import express, { Application } from 'express'
import { registerRoutes } from './routes'

const app: Application = express()

app.set('port', process.env.PORT || 3000)

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

registerRoutes(app)

export default app
