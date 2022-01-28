import express from 'express'
import config from 'config'
import logger from 'morgan'
import path from 'path'
import cors from 'cors'

import './database/mongoose'

import apiRoutes from './routes/api'
import viewsRoutes from './routes/views'

const app = express()

app.use(cors())

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(logger(config.get('server.logger')))

app.use('/api', apiRoutes)
app.use('/', viewsRoutes)

app.set('port', config.get('server.port'))

app.use(express.static(path.join(__dirname, 'views', 'public')))

export default app
