var u = require('url');
var crypto = require('crypto');
var express = require('express')
var https = require('https')
const http = require("http");
var app = express()



const axios = require("axios");
var cors = require("cors");


const app = express();
app.use(cors({ credentials: true, origin: true }));

app.get("/oauth/redirect", (req, res) => {
  axios({
    method: "POST",
  url: `grant_type=authorization_code&code=<${/*AuthCode*/}>&client_id=<${CLIENT_ID}>&client_secret=<${CLIENT_SECRET}>`,
    headers: {
      Accept: "application/json",
    },
  }).then((response) => {
    res.redirect(
      `http://localhost:3000?access_token=${response.data.access_token}`
    );
  });
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Listening at port ${PORT}`);
});

function createSignature(method, url, nonce, authDate, contentType, accessKey, secretKey) {
    var urlObj = u.parse(url);
    var urlPath = urlObj.pathname;
    var urlQuery = urlObj.query ? urlObj.query : ''; // if no query, use empty string

    var str = (method + '\n' + nonce + '\n' + authDate + '\n' + contentType + '\n' +
        urlPath + '\n' + urlQuery + '\n').toLowerCase();

    var hmac = crypto.createHmac('sha256', secretKey)
        .update(str)
        .digest('base64');

    var signature = 'On ' + accessKey + ':HmacSHA256:' + hmac;
    return signature;
}

//Url  used to retrieve Code for Oauth2
//https://oauth.onshape.com/oauth/authorize?response_type=code&client_id=EISZOODI34HKXKFRQKBKFPWXOLSR5NBBGR2BIAQ=

//send request to onshape oauth and have user log in.
//retrieve token and store it short term
//send that token to https://oauth.onshape.com/oauth/token along with client ID and client secret