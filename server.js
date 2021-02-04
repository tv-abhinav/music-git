const express = require('express')
const app = express()
const port = 3000
var http = require('http')

app.get('/', (req, res) => {
  res.send('Hello World!!!!')
})
// http.createServer(app).listen(80)
app.listen(port,"0.0.0.0", () => {
  console.log(`Example app listening at ${port}`)
})