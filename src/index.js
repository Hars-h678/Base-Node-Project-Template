const express = require('express');

const apiRoutes = require('./routes');

const { ServerConfig , Logger } = require('./config');// index will automatically understand
const app = express();


app.use ('/api',apiRoutes)

app.listen(ServerConfig.PORT,()=>{
    console.log(`Server is running at ${ServerConfig.PORT}`);
   /* Logger.info("Successfully started the server" , {});*/
})