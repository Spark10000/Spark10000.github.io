//Query all the docs in the parts library and add them to
//Documents.json with Document ID, Image URL, Name, and Description

var onshape = require('./Perif/onshape.js');
var queryObject = {};

 var getDocuments = function (queryObject) {
  
  getDocuments = function(queryObject, cb) {
    var opts = {
      path: '/api/documents/?nodeId=474a5b1d281c06c556b810b5/',
      query: queryObject,
      headers: {
        'Authorization': 'Bearer ' + request.accessToken //need to get a user accesstoken
      }
    }
    onshape.get(opts, cb);
  }
  getDocuments(queryObject, function (data) {
    var docs = JSON.parse(data.toString()).items;  
    for (var i = 0; i < docs.length; i++) {
      var docID = docs[i].id;
      //what ever the image url is 
      //var privacy = docs[i].public ? 'public' : 'private';
      //var ownerName = (docs[i].owner && ('name' in docs[i].owner)) ? docs[i].owner.name : 'nobody';
      //if(ownerName == 'FTC2901 Administrator' && privacy == 'public'){
      console.log(docID + '    ' + docs[i].name);
      //}
    }
  });
};

getDocuments(queryObject);
