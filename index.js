const express = require('express')

const app = express()


let count = 0

const PORT = process.env.PORT || 8080

app.get('/',(req,res)=>{
    res.send('ok') 
})

app.get('/count',(req,res)=>{
    count++
    res.send(`han llegado ${count} peticiones`)
})

server = app.listen(PORT,()=>{
    console.log('Server runing..');
})
server.on('error',e=>{
    console.log(e);
})
