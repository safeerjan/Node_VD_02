const express = require('express');
const app = express();
const films = require('./films');

app.use('/films', films);
app.get('/', (req, res) => res.send("Assignment No 02"));

app.listen(4000, (req, res) => console.log('Server up on port 4000'));