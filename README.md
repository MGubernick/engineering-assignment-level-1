# Coastline Engineering Level 1 Assignment

Welcome to our Level 1 engineer coding assignment. Most of the details of what is expected (and not expected) can be found once you start the actual application. So this README is mostly about how to do that.

## First Steps

First, fork this repo into your own GitHub account (private or public is fine). When you are done with the challenge, make a pull request back to **your fork** of the repo and send back a link to your PR. Do not make a pull request back to the Coastline repo as it is public and others will be able to see your solution. We will go over your pull request during the discussion about your solution.

## Running

Once you have a fork and have cloned it locally, do the following to get it running:

```bash
# Install server-side dependencies
npm install

# Install client-side dependencies
npm run client-install

# Start both the server and client
npm run dev

# Or all commands together
npm install && npm run client-install && npm run dev
```

This will start both the express server (http://localhost:5000) and the React client (http://localhost:3000).

You can now make changes to either the server or client code and your changes will reload in real time in your browser.

## Assignment Details

Once you have started the server, load the client in your browser (http://localhost:3000). The page that loads includes a component with the full details of what you're building. Have fun!
