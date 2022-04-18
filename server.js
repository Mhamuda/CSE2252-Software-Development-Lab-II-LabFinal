const express = require('express')  
const dogRouter = require('./api/routes/dogRouter')

const hostName = 'localhost'
const port = 3000

const app = express() 
app.use('/api/dogs',dogRouter)

// app.get('/api',(req,res)=>{
//     res.send('Home page')
// })


app.listen(port,hostName,function(){
    console.log(`server is running at http://${hostName}:${port}`)
})
