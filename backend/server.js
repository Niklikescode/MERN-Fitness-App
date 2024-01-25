require('dotenv').config(); //import the dotenv package and call the config() method. This will allow us to access the environment variables in the .env file using the process.env object.
//import express package and assign it to the express variable. This is the package that will help us create the server and handle requests and responses to and from the server and client.
const express = require('express'); //import express package and assign it to the express variable. This is the package that will help us create the server and handle requests and responses to and from the server and client.
const mongoose = require('mongoose'); //import the mongoose package. This is the package that will help us connect to the MongoDB database.
const workoutsRoutes = require('./routes/workouts'); //import the workouts router object from the workouts.js file. This is the router object that will handle all the requests to the /workouts route. We can use this to handle requests to the /workouts route.

const app = express(); //express app instance. This is the server that will handle requests and responses to and from the client. We can use this to listen for requests and send responses.

app.use(express.json()); //use the express.json() middleware to parse the request body. This will allow us to access the request body in the request handler functions.

//middleware. This is a function that runs when a request is made to the server. We can use this to log the request method and path to the console. We can also use this to send a response to the client. The next() function is used to tell express to move on to the next middleware function. If we don't use next(), the request will hang and the client will not receive a response.
app.use((req, res, next) => {
  console.log(req.method, req.path)
  next();
});

app.use("/api/workouts", workoutsRoutes); //use the workouts router object to handle requests to the /workouts route. This is the route that the workouts router object will handle.

//connect to the MongoDB database. The connect() method returns a promise, so we can use the then() method to run a callback function when the connection is successful. We can also use the catch() method to run a callback function when the connection fails.
mongoose.connect(process.env.MONGO_URI)
  .then(() => { 
//  //listen for requests on the specified port. The listen() method returns a server object, so we can use the on() method to listen for events on the server object. We can use the listening event to log a message to the console when the server is listening to requests. We can use the error event to log an error message to the console when the server encounters an error.
app.listen(process.env.PORT , () => {
  console.log('connected to db and listening to port', process.env.PORT);
})  // this is the port that the server is listening to
  })
  .catch(error => {
    console.log(error); //log an error message to the console when the connection fails
  })
