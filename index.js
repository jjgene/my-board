const livereload=require('livereload')
const livereloadMiddleware=require('connect-livereload')
const express = require('express')
const liveserver=livereload.createServer({
    exts:['html','css','pug'],
    debug:true
})
liveserver.watch(__dirname)
const app = express()
const port = 3000
app.use(livereloadMiddleware())
app.use(express.urlencoded());

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/list',(req,res)=>{
    res.sendFile(__dirname+'/list.html')
})
app.get('/register',(req,res)=>{
    res.sendFile(__dirname+'/register.html')
})
app.post('/contents',(req,res)=>{
    console.log(123);
    console.log(req.body.title);
    console.log(req.body.content)
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})