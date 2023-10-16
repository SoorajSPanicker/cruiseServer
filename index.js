const express=require('express')
require('dotenv').config()
const cors=require('cors')
const router = require('./routes/userRouting')
require('./db/dbconnection')
require('./routes/userRouting')
const server=express()
server.use(cors())
server.use(express.json())
server.use(router)
// server.get('/getpath',(req,res)=>{
// res.send("request sent")
// })
const port=8000 || process.env.port
server.listen(port,()=>{
    console.log(`________server started at port number ${8000}`);
})
