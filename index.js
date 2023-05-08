const express = require('express');
const emoji = require('node-emoji');
const port = 4200;
const path = require('path');

const app = express();

const air = emoji.get('airplane');


app.listen( port, () =>{
    console.log(`Server is running at link ==> http://localhost:${port}` , air);
})

app.get('/' , (req,res) => {
    res.sendFile(path.join(__dirname, 'src/front.html'));
})