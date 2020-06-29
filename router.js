const express = require('express')
const app = express.Router()
const schema = require('./schema')
const cors = require('cors')
//app.use(cors)

app.get('/', async (req,res)=>{
    try{
        const data = await schema.find()
        res.json(data)
    }
    catch(err){
        res.send('Error' + err)
    }
});

app.post('/', async (req,res)=>{
    
    const new_data = new schema({
        name: req.body.name,
        year: req.body.year
    }); 
    try{
        const ret = await new_data.save()
        res.json(ret)
    }
    catch(err){
        res.send('Error' + err)
    }
});

module.exports=app;