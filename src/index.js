const express = require('express');

const apiRoutes = require('./routes');

const { ServerConfig , Logger } = require('./config');// index will automatically understand
const app = express();

app.use(express.json());// now this will act as middleware for everyumcoing request
app.use(express.urlencoded({extended:true}));// this will help to parse the data coming from form submission
app.use ('/api',apiRoutes)

app.listen(ServerConfig.PORT,()=>{
    console.log(`Server is running at ${ServerConfig.PORT}`);
   /* Logger.info("Successfully started the server" , {});*/
})