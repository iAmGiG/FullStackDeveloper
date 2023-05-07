const express = require("express");

const app = express();

const PORT = 4200;
app.listen(PORT, () =>{
    console.log(`Server is running at port: ${PORT}`);
})