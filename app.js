var onshape = require('./onshape.js');


var getDocuments = function(queryObject, cb) {
  var opts = {
    path: '/api/documents',
    query: queryObject
  }
  onshape.get(opts, cb);
}

module.exports = {
  
  getDocuments: getDocuments,

}