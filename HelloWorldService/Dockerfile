#Author: @kunalsuri (Dr. Kunal Suri)
FROM      node:alpine

# Options:
ARG       NODE_ENV=production
ENV       NODE_ENV $NODE_ENV
ENV       APP_HOME /usr/src/app

# Install Modules:
WORKDIR   $APP_HOME

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

RUN npm install

# Copy in files:
COPY      . $APP_HOME

EXPOSE    3000

# Run the following
CMD       node app.js
