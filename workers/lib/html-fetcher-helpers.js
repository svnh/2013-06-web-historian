fs = require('fs');

exports.readUrls = function(filePath, cb){
  fs.readFile(filePath, {'encoding': 'utf8'}, function(err, data){

  });
};

exports.downloadUrls = function(urls){
  // fixme
};
