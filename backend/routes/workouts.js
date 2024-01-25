//all the workout routes will be handled here
//import the express package.
//require express
const express = require('express'); //import express package and assign it to the express variable. This is the package that will help us create the server and handle requests and responses to and from the server and client.
const Workout = require('../models/WorkoutModel'); //import the workout model. This is the model that will define the structure of the documents in the workouts collection in the MongoDB database.

//create a router object
const router = express.Router(); //express app instance. This is the server that will handle requests and responses to and from the client. We can use this to listen for requests and send responses.
const { createWorkout, getAllWorkouts, getWorkout } = require('../controllers/workoutController'); //import the createWorkout() function from the workoutController.js file. This is the function that will handle requests to the /workouts route. We can use this to handle requests to the /workouts route.

//get all workouts
router.get('/', getAllWorkouts); //use the createWorkout() function to handle requests to the /workouts route. This is the route that the createWorkout() function will handle.

//get a single workout
router.get('/:id', getWorkout); //use the createWorkout() function to handle requests to the /workouts route. This is the route that the createWorkout() function will handle.

//post a new workout 
router.post('/', createWorkout); //use the createWorkout() function to handle requests to the /workouts route. This is the route that the createWorkout() function will handle.

 
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