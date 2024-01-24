require('dotenv').config();
//import express package and assign it to the express variable. This is the package that will help us create the server and handle requests and responses to and from the server and client.
const express = require('express');

//express app instance. This is the server that will handle requests and responses to and from the client. We can use this to listen for requests and send responses.
const app = express();

//middleware. This is a function that runs when a request is made to the server. We can use this to log the request method and path to the console. We can also use this to send a response to the client. The next() function is used to tell express to move on to the next middleware function. If we don't use next(), the request will hang and the client will not receive a response.
app.use((req, res, next) => {
  console.log(req.method, req.path)
  next();
});

//react to requests to the root URL. We can use this to send a response to the client. In this case, we are sending a JSON object with a message property. This is the response that the client will receive.
app.get('/' , (req , res) => {
    res.json({message: "Welcome to the app"})
});

// listen for requests. By requiring the dotenv package, we can access the port number from the .env file using process.env.PORT instead of hardcoding the port number
app.listen(process.env.PORT , () => {
    console.log('listening on port 3000!!');
})  // this is the port that the server is listening to