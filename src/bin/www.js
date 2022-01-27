import app from '../app'
import '../hbs.config'

app.listen(app.get('port'), () => console.log(`server in port ${app.get('port')}`))
