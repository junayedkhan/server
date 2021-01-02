const express = require("express")
const app = express()

app.get('/',(req, res) => {
    res.send("<a href='/'>home</a> <a href='/about'>about</a> <a href='/contact'>contact</a> <br> <h1>home page</h1>")
})
app.get('/about',(req, res) => {
    res.send("<a href='/'>home</a> <a href='/about'>about</a> <a href='/contact'>contact</a> <br> <h1>about page</h1>")
})
app.get('/contact',(req, res) => {
    res.send("<a href='/'>home</a> <a href='/about'>about</a> <a href='/contact'>contact</a> <br> <h1>contact page</h1>")
})

app.listen(2000,console.log('server runing'))