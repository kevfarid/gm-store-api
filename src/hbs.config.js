import { engine } from 'express-handlebars'
import app from './app'

const extname = '.hbs'

app.engine(
  extname,
  engine({
    extname,
  })
)

app.set('view engine', extname)

app.set('views', 'src/views')

app.get('/', (req, res) => {
  res.render('home')
})
