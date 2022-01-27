import express from 'express'
import config from 'config'
import logger from 'morgan'
import cors from 'cors'

import './database/mongoose'

import allRoutes from './routes'

const app = express()

app.use(cors())

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(logger(config.get('server.logger')))

app.use('/api', allRoutes)

app.set('port', config.get('server.port'))

export default app
