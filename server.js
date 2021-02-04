const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'public')));

app.get('/ping', function (req, res) {
 return res.send('pong');
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
console.log("Listening..");
// app.listen(3000,"0.0.0.0");
app.listen(process.env.PORT || 8080);