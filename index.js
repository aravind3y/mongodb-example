const express = require('express')
const app = express()
const mongoose = require('mongoose')
const url = 'mongodb://localhost/first-database'
const router = require('./router')
const cors = require('cors')
app.use(cors())
mongoose.connect(url, {useNewUrlParser : true});
const con =mongoose.connection;
con.on('open',()=>{
    console.log('database connected');
})
app.use(express.json());
app.use('/data',router);

app.listen(5000,() => console.log(`listening on port 5000`));