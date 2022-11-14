const express = require('express');
const app = express();
// const winston = require('winston');

// require('./startup/logging')();
// require('./startup/config')();
// require('./startup/db')();
require('./startup/routers')(app);


//connection port
const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`lisining port ${PORT}`);
});