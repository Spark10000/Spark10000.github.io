//Constants for Server
const http = require("http")

const host = 'localhost'
const port = '8000'

// Import the express lirbary
const express = require("express");
const { access } = require("fs");
const axios = require("axios");


// Create a new express application and use
// the express static middleware, to serve all files
// inside the public directory
const app = express();
// Declare the redirect route
app.get("/oauth/redirect", (req, res) => {
    // The req.query object has the query params that
    // were sent to this route. We want the `code` param
    const requestToken = req.query.code;
    axios({
      // make a POST request
      method: "post",
      // to the Onshape authentication API, with the client ID, client secret
      // and request token
      url: `https://oauth.onshape.com/oauth/token/grant_type=authorization_code&code=<${requestToken}>&client_id=<${CLIENT_ID}>&client_secret=<${CLIENT_SECRET}`,
      // Set the content type header, so that we get the response in JSOn
      headers: {
        accept: "application/json",
      },
    }).then((response) => {
      // Once we get the response, extract the access token from
      // the response body
      const accessToken = response.data.access_token;
      // redirect the user to the welcome page, along with the access token
      console.log(accessToken)
      res.redirect(
        `http://localhost:3000?access_token=${response.data.access_token}`
      );
    });
  });


app.use(express.static(__dirname + "/public"));
// Start the server on port 8000
app.listen(8000);