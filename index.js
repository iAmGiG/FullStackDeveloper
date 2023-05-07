const express = require("express");
const port = 4200;

const app = express();


app.listen( port, () =>{
    console.log(`Server is running at link ==> http://localhost:${port}`);
})