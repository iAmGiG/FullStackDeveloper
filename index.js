const express = require('express');
const emoji = require('node-emoji');
const port = 4200;

const app = express();

const rocket = emoji.get('airplane');


app.listen( port, () =>{
    console.log(`Server is running at link ==> http://localhost:${port}` , rocket);
})