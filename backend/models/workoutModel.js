const mongoose = require('mongoose'); //import the mongoose package. This is the package that will help us connect to the MongoDB database.
const Schema = mongoose.Schema; //create a Schema object. This is the object that will define the structure of the documents in the workouts collection in the MongoDB database.  

const workoutSchema = new Schema({ //create a new Schema object and assign it to the workoutSchema variable. This is the object that will define the structure of the documents in the workouts collection in the MongoDB database.
  title: {
    type: String,
    required: true,
  },
  reps: {
    type: Number,
    required: true,
  },
  sets: {
    type: Number,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
}, { timestamps: true }); //add a timestamps property to the Schema object. This will add a createdAt and updatedAt property to each document in the workouts collection. The createdAt property will be set to the current date and time when the document is created. The updatedAt property will be set to the current date and time when the document is updated.

module.exports = mongoose.model('Workout', workoutSchema); //export the Schema object so that it can be used in other files in the project (e.g. server.js). The first argument is the name of the model. The second argument is the Schema object that defines the structure of the documents in the workouts collection in the MongoDB database.

