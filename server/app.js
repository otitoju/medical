const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors)
const routes = require('./routes/routes')
app.use('/', routes)
const db = require('./configuration_folder/database')
const port = process.env.PORT || 7000

//Database connection
mongoose.connect(db.mongoURI)
.then( ()=>{
    app.listen(port, async() => {
        await console.log(`medical app is using port ${port} and database connected...`)
    })
})
.catch( err => console.log(err))