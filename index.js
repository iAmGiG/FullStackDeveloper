const express = require('express');
const emoji = require('node-emoji');
const port = 4200;
const path = require('path');

const app = express();

app.use(express.static('html'));

const air = emoji.get('airplane');


app.listen( port, () =>{
    console.log(`Server is running at link ==> http://localhost:${port}` , air);
})

app.get('/' , (req,res) => {
    res.sendFile(path.join(__dirname, 'src/html/front.html'));
})