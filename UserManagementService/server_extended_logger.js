//##Author: Dr. Kunal Suri (Github:@kunalsuri)
//##About: Creating and using REST methods via Node.js

const express = require('express');    //Creating express element
const morgan = require('morgan');      //Creating the Morgan logger
var fs_func = require("fs");           //File reader for functions
var servicename = 'UserService'        //Providing the service name for the langinf/ first page (just for reminding which server is running)
const PORT = 3030                      //The server is listen on port 3030

const app = express()                  //Create an app via express framework

//### Logging Code Starts ###
var fs_log = require("fs");            //File reader for logger
var path = require('path')             // define the file path
const Writable = require("stream").Writable  //To write in log files

/*// create a rotating write stream
var rfs = require('rotating-file-stream') // version 2.x
var accessLogStream = rfs.createStream('access.log', {
   interval: '1d', // rotate daily
   path: path.join(__dirname, 'log')
 })
*/

// create a write stream (in append mode)
var logStream = fs_log.createWriteStream(path.join(__dirname, 'file.log'), {
   flags: 'a' })


// setuping the logger
//app.use(morgan('combined'))                         //Enabling Morgan logger to send the long on the console
app.use(morgan('combined', { stream: logStream }))    //Enabling Morgan logger to send the long to the file

//Logging: Enabling custom format and then sending to the log file
app.use(morgan((tokens, req, res) => {
   return [
       tokens.method(req, res),
       tokens.url(req, res),
       tokens.status(req, res),
       tokens.res(req, res, 'content-length'), '-',
       tokens['response-time'](req, res), 'ms'
   ].join(' ')
}, {stream: logStream }));

// To write specific log format in console 
class MyStream extends Writable {
   write(line) {
       // Here you send the log line to wherever you need
       console.log("Logger - ", line)
   }
}

let writer = new MyStream()

// Create a new named format
morgan.token("timed", "A new :method request for :url was received. It took :total-time[2] milliseconds to be resolved")
app.use(morgan('timed', {stream: writer}))      // Writting the new format data (by name) into the console
app.use(morgan('timed', {stream: logStream}))   // Writting the new format data (by name) into the log file

//## Logging Code Ends ##

//### Server Code starts ###
// Landing Page
app.get('/', (req, res) => {
  res.send('Hello from our newly created service called "' + servicename +'"!')
})

//Function: Get REST endpoint to retrieve the list of users
//Input:    Empty
// Output:  JSON with all the details of all the users
app.get('/userslist', function (req, res) {
   fs_func.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
      console.log( data );
      res.end( data );
   });
})

//Function: Get REST endpoint to retrieve the user details based on the id 
//Input:    Provide the ID of the user to see thier details e.g. /userid/2
//Output:   The details of the user as JSON
app.get('/userid/:id', function (req, res) {
   // First read existing users.
   fs_func.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
      var users = JSON.parse( data );
      var user = users["user" + req.params.id] 
      console.log( user );
      res.end( JSON.stringify(user));
   });
})

//Function: Delete REST endpoint to remove a specific user
//Input:    Provide the userid of the user to be deleted
//OUtput:   The user is removed from the list
app.delete('/deleteuser/:id', function (req, res) {
   // First read existing users.
   fs_func.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
      data = JSON.parse( data );
      var user = "user" + req.params.id 
      delete data[user];       
      console.log( data );
      res.end( JSON.stringify(data));
   });
})

// Enable the server to listen on a specific port
var server = app.listen(PORT, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Server application is listening at http://localhost:%s", port)
})