//Query all the docs in the parts library and add them to
//Documents.json with Document ID, Image URL, Name, and Description

const { pad } = require('crypto-js');
var onshape = require('./Perif/onshape.js');
var queryObject = {};

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

  var getDocuments = function(queryObject, cb) {
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