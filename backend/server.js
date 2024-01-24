require('dotenv').config();
const express = require('express');

//express app
const app = express();

//react to requests
app.get('/' , (req , res) => {
    res.json({message: "Welcome to the app"})
});

// listen for requests. By requiring the dotenv package, we can access the port number from the .env file using process.env.PORT instead of hardcoding the port number
app.listen(process.env.PORT , () => {
    console.log('listening on port 3000!!');
})  // this is the port that the server is listening to