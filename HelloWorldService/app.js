//##Author: Dr. Kunal Suri (Github: @kunalsuri)
//##Application: Creating a webserver using express in Node.js

const express = require('express')		
var servicename = 'HelloWorldService'	//Name of the service to be displayed on the index page/ landing page
const PORT = 3000						//Port Number where the service will run (Listening on port 3000)
//Create an app
const app = express()

//Create the REST GET method
app.get('/', (req, res) => {
  res.send('Hello from our newly created service called "' + servicename +'"!')
})

//Service running on the specific port
app.listen(PORT);
console.log(`Running on port ${PORT}`);

