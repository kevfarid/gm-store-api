import path from 'path'

import { engine } from 'express-handlebars'
import app from './app'

const extname = '.hbs'

app.engine(
  extname,
  engine({
    extname,
    partialsDir: path.join('src', 'views', 'components'),
  })
)

app.set('view engine', extname)

app.set('views', path.join('src', 'views'))

app.get('/', (req, res) => {
  res.render('home')
})
