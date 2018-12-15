const express = require('express');
const app = express();
const WEB_LISTENING_PORT = 80;

app.get('/',(req,res)=>{
    res.send('Hi there');
});

app.listen(WEB_LISTENING_PORT,()=>{
    console.log('Listening to port 80');
});