const express = require('express')
var cors = require('cors')
const bodyParser = require('body-parser')
const {connectToDB} = require('./db')

const port = 3000

const app = express()

app.use(cors())
app.use(bodyParser.json())
connectToDB()

require('./routes/usersRoutes')(app)

app.listen(port, ()=> {
    console.log('Conexion exitosa');
})