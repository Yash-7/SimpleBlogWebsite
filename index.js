const express = require('express');

const app = express();

console.log(process.env.PORT);
app.listen('8000',()=>{
    console.log('Server started at 8000')
})