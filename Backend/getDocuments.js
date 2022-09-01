//Query all the docs in the parts library and add them to
//Documents.json with Document ID, Image URL, Name, and Description
//var u = require('url');
//var crypto = require('crypto');
//const { pad } = require('crypto-js');
var onshape = require('./Perif/onshape.js');
//const { get } = require('http');  IDEK

//var queryParams = ['query', 'filter', 'owner', 'ownerType', 'sortColumn', 'sortOrder', 'offset', 'limit'];
//var queryObject = {};
//for (var i = 0; i < queryParams.length; i++) {
//		queryObject[queryParams[i]] = queryParams[i];
//}
var opts = {
    path: '/api/documents/?nodeId=c85ccf54b805a8c256b69380&resourceType=folder',
    query: null,
    headers: null

}

//var t = onshape.buildQueryString(opts);
//var c = onshape.inputHeadersFromOpts(opts);
//console.log(`t=%O`,t);
//console.log(`c=%O`,c);


//var x = onshape.buildHeaders('GET', 'https://cad.onshape.com/api/documents/?nodeId=c85ccf54b805a8c256b69380&resourceType=folder',t, c);  //Problem with 'GET
//console.log(`x=%O`, x);


  function getDocuments(cb) {
    onshape.get(opts, cb);
  }

    getDocuments(function (data) {
      
      var docs = JSON.parse(data.toString()).items; 
      console.log(docs);
      
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

  