//all the workout routes will be handled here
//import the express package
//require express
const express = require('express'); //import express package and assign it to the express variable. This is the package that will help us create the server and handle requests and responses to and from the server and client.
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
router.post('/', (req, res) => {
  res.json({ message: 'POST a new workout'});
})

//DELETE a workout
router.delete('/:id', (req, res) => {
  res.json({ message: 'DELETE a workout'});
})

//UPDATE a workout
router.put('/:id', (req, res) => {
  res.json({ message: 'UPDATE a workout'});
})

//export the router object so that it can be used in other files in the project (e.g. server.js)
module.exports = router;