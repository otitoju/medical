const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
const routes = require('./routes/routes')
const errorHandler = require('./handlers/errorHandler');
app.use('/', routes)
app.use(errorHandler.notFound);
const db = require('./configuration_folder/database')
const port = process.env.PORT || 7000
const env = require('dotenv').config()
if (app.get('env') === 'development') {
    /* Development Error Handler - Prints stack trace */
    app.use(errorHandler.developmentErrors);
  }
  
  // production error handler
  app.use(errorHandler.productionErrors);
  
//Database connection
mongoose.connect(db.mongoURI)
.then( ()=>{
    app.listen(port, async() => {
        await console.log(`medical app is using port ${port} and database connected...`)
    })
})
.catch( err => console.log(err))