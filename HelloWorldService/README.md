# HelloWorldService
A hello world service to test Express in Node.js

## Pre-requisite 
Node.js is installed on the local system


## How to run the Project as a standalone server 
1. Once the project is downloaded, unzip it
2. Open the terminal and go to the directory, type --> npm install express
3. Note: This Step2 will install "express" and other dependencies into a folder called "node_modules"
4. Next type --> node app.js
5. The service will start running and you will get the message on the terminal --> Running on port 3000
6. Test the webservice on browser --> http://localhost:3000/


## How to run the Project in a docker container
7. Do steps 1 to 6
8. Close the server
9. Check if your Docker Desktop is running
10. In terminal, run cmd --> "docker build -t hello_service_img ."  (Please copy everything inside the quotes and paste on CMD, donot include the quotes "")
11. Once the docker image has been created, run cmd --> "docker run -d -p 3000:3000 --name helloservice-app-01 hello_service_img" (copy everything inside the quotes and paste on CMD)
12. Test the webservice on browser --> http://localhost:3000/