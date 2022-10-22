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
# If you are building your code for production
# RUN npm ci --only=production

# Copy in files:
COPY      . $APP_HOME

EXPOSE    3030

# Run the following
CMD       node server.js
