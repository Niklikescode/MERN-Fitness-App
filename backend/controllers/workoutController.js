const Workout = require('../models/WorkoutModel') //import the workout model. This is the model that will define the structure of the documents in the workouts collection in the MongoDB database.
const mongoose = require('mongoose'); //import the mongoose package. This is the package that will help us connect to the MongoDB database.


//get all workouts
const getAllWorkouts = async (req, res) => {
  const workouts = await Workout.find({}).sort({ createdAt: -1 }); //get all the workout documents from the workouts collection. The find() method returns a promise, so we can use the await keyword to wait for the promise to resolve. The await keyword can only be used inside an async function. The find() method takes an object as an argument. The object is used to filter the documents that are returned from the database. The object is empty, so all the documents in the workouts collection will be returned. The sort() method is used to sort the documents that are returned from the database. The sort() method takes an object as an argument. The object is used to sort the documents in ascending or descending order. The createdAt property is used to sort the documents in descending order. The createdAt property is a timestamp that is set to the current date and time when the document is created.
  res.status(200).json(workouts); //send a response to the client. The response body is the workout documents. The response status code is 200, which means that the request was successful.

}


//get a single workout
 const getWorkout = async (req, res) => {
const { id } = req.params; //get the id parameter from the request params. The request params is an object that contains the route parameters. The route parameters are the parameters that are specified in the route path. The id parameter is the id of the workout document that we want to get from the database.

if(!mongoose.Types.ObjectId.isValid(id)) { //check if the id is a valid MongoDB ObjectId. The isValid() method returns true if the id is a valid MongoDB ObjectId. The isValid() method takes an id as an argument. The id is the id of the workout document that we want to get from the database.
  return res.status(404).json({ error: 'workout not found' })
}

const workout = await Workout.findById(id); //get the workout document from the database. The findById() method returns a promise, so we can use the await keyword to wait for the promise to resolve. The await keyword can only be used inside an async function. The findById() method takes an id as an argument. The id is the id of the workout document that we want to get from the database.
if (!workout) { 
 return res.status(404).json({ error: 'workout not found' }); //send a response to the client. The response body is an object that contains an error message. The response status code is 404, which means that the request was unsuccessful.
}
res.status(200).json(workout); //send a response to the client. The response body is the workout document. The response status code is 200, which means that the request was successful.

}



//create a new workout
const createWorkout = async (req, res) => { //use the express.json() middleware to parse the request body. This will allow us to access the request body in the request handler functions.
  const { title, reps, sets, weight } = req.body;
// use object destructuring to get the title, reps, sets, and weight properties from the request body. The request body is an object that contains the data that the client sends to the server. The request body is empty by default, so we need to use the express.json() middleware to parse the request body. This will allow us to access the request body in the request handler functions.
try {  
const workout = await Workout.create({ title, reps, sets, weight }); 
res.status(200).json(workout);
} catch (error) { 
  res.status(400).json({ error: error.message });

}
}

//DELETE a workout
const deleteWorkout = async (req, res) => {
  const { id } = req.params;

  if(!mongoose.Types.ObjectId.isValid(id)) { //check if the id is a valid MongoDB ObjectId. The isValid() method returns true if the id is a valid MongoDB ObjectId. The isValid() method takes an id as an argument. The id is the id of the workout document that we want to get from the database.
    return res.status(404).json({ error: 'workout not found' })
  }

const workout = await Workout.findOneAndDelete({_id: id}); //get the workout document from the database. The findById() method returns a promise, so we can use the await keyword to wait for the promise to resolve. The await keyword can only be used inside an async function. The findById() method takes an id as an argument. The id is the id of the workout document that we want to get from the database.

if (!workout) { 
  return res.status(404).json({ error: 'workout not found' }); //send a response to the client. The response body is an object that contains an error message. The response status code is 404, which means that the request was unsuccessful.
  }

  res.status(200).json(workout); //send a response to the client. The response body is the workout document. The response status code is 200, which means that the request was successful.
  
  }

  

//UPDATE a workout
const updateWorkout = async (req, res) => {
  const { id } = req.params;

  if(!mongoose.Types.ObjectId.isValid(id)) { //check if the id is a valid MongoDB ObjectId. The isValid() method returns true if the id is a valid MongoDB ObjectId. The isValid() method takes an id as an argument. The id is the id of the workout document that we want to get from the database.
    return res.status(404).json({ error: 'workout not found' })
  }

  const workout = await Workout.findOneAndUpdate({_id: id}, {
   ...req.body, //use the spread operator to get all the properties from the request body. The request body is an object that contains the data that the client sends to the server. The request body is empty by default, so we need to use the express.json() middleware to parse the request body. This will allow us to access the request body in the request handler functions.
  })

  if (!workout) { 
    return res.status(400).json({ error: 'workout not found' }); //send a response to the client. The response body is an object that contains an error message. The response status code is 404, which means that the request was unsuccessful.
    }
  
    res.status(200).json(workout); //send a response to the client. The response body is the workout document. The response status code is 200, which means that the request was successful.
    
    }





module.exports = {
  getAllWorkouts,
  getWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout

}