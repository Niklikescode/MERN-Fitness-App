//all the workout routes will be handled here
//import the express package.
//require express
const express = require('express'); //import express package and assign it to the express variable. This is the package that will help us create the server and handle requests and responses to and from the server and client.

const Workout = require('../models/WorkoutModel'); //import the workout model. This is the model that will define the structure of the documents in the workouts collection in the MongoDB database.

//create a router object
const router = express.Router(); //express app instance. This is the server that will handle requests and responses to and from the client. We can use this to listen for requests and send responses.


router.get('/', ( req, res) => {
  res.json ({ message: 'GET all workouts'});
})

//get a single workout
router.get('/:id', (req, res) => {
  res.json({ message: 'GET a single workout'});
})

//post a new workout 
router.post('/', async (req, res) => { //use the express.json() middleware to parse the request body. This will allow us to access the request body in the request handler functions.
  const { title, reps, sets, weight } = req.body; // use object destructuring to get the title, reps, sets, and weight properties from the request body. The request body is an object that contains the data that the client sends to the server. The request body is empty by default, so we need to use the express.json() middleware to parse the request body. This will allow us to access the request body in the request handler functions.

try {  
const workout = await Workout.create({ title, reps, sets, weight }); //create a new workout document using the Workout model. The Workout model is the model that defines the structure of the documents in the workouts collection in the MongoDB database. The create() method returns a promise, so we can use the await keyword to wait for the promise to resolve. The await keyword can only be used inside an async function. The create() method takes an object as an argument. The object contains the data that will be used to create the new workout document. The data comes from the request body. The request body is an object that contains the data that the client sends to the server. The request body is empty by default, so we need to use the express.json() middleware to parse the request body. This will allow us to access the request body in the request handler functions.
res.status(200).json(workout); //send a response to the client. The response body is the new workout document. The response status code is 200, which means that the request was successful.
} catch (error) {
  res.status(400).json({ error: error.message }); //send a response to the client. The response body is an object that contains an error message. The response status code is 400, which means that the request was unsuccessful.

}
})
 

//DELETE a workout
router.delete('/:id', (req, res) => {
  res.json({ message: 'DELETE a workout'});
})

//UPDATE a workout
router.patch('/:id', (req, res) => {
  res.json({ message: 'UPDATE a workout'});
})

//export the router object so that it can be used in other files in the project (e.g. server.js)
module.exports = router;