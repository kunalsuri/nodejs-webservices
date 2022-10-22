# UserManagementService
A service to test REST methods via management of users using Express on Node.js

## Pre-requisite 
Node.js is installed on the local system


## How to run the Project as a standalone server 
1. Once the project is downloaded, unzip it
2. Open the terminal and go to the directory, run cmd --> npm install express morgan   (This will install both dependencies) 
3. Note: This Step2 will install "express" and other dependencies into a folder called "node_modules"
4. Next rund cmd --> node server.js
5. The service will start running and you will get the message on the terminal as "Running on port 3000"
6. Test the webservice on browser --> http://localhost:3030/


## How to run the Project in a docker container
7. Do steps 1 to 6
8. Close the server
9. Check if your Docker Desktop is running
10. In terminal, run cmd --> "docker build -t usermgmt_service_img ."  (Please copy everything inside the quotes and paste on CMD, donot include the quotes "")
11. Once the docker image has been created, run cmd --> "docker run -d -p 3030:3030 --name usermgmtservice-01 usermgmt_service_img" (copy everything inside the quotes and paste on CMD)
12. Test the webservice on browser --> http://localhost:3030/