//Query all the docs in the parts library and add them to
//Documents.json with Document ID, Image URL, Name, and Description
var u = require('url');
var crypto = require('crypto');
const { pad } = require('crypto-js');
var onshape = require('./Perif/onshape.js');
const { get } = require('http');
var queryObject = {};


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

createSignature()

  function getDocuments(queryObject, cb) {
    var opts = {
      path: 'cad.onshape.com/api/documents/475ba7e273e0d960254d2516',
      query: queryObject,
      headers: {
      'Authorization': 'Bearer ' + 'V5DYX5D746QX4JIXUXUXIFD7JOV4WVQ6PDNZGJOYNLO7AVF3D5CA====' //need to get a user accesstoken // request.AccessToken
      }
    }
    onshape.get(opts, cb);
  }

    getDocuments(queryObject, function (data) {
      var docs = JSON.parse(data.toString());
      console.log(docs.name);
    });

  /*getDocuments(queryObject, function (data) {
    //console.log(data);
    var docs = JSON.parse(data.toString()).items; 

    for (var i = 0; i < data.length; i++) {
      var docID = docs[i].id;
      //what ever the image url is 
      //var privacy = docs[i].public ? 'public' : 'private';
      //var ownerName = (docs[i].owner && ('name' in docs[i].owner)) ? docs[i].owner.name : 'nobody';
      //if(ownerName == 'FTC2901 Administrator' && privacy == 'public'){
      console.log(docID + '    ' + docs[i].name);
     // if(i % 19 == 0){
     //   sleep(61000);
      //}
      }
  });*/

  //We have to recursively dig through each vendors folders