//exercise 6
// module.exports = function(directoryName, filename, callback){
//   var fs = require('fs');
//   var path = require('path');
//   fs.readdir(directoryName, function(err, list){
//     if(err){
//       return callback(err);
//     } else{
//       list.forEach(function(file){
//         if(path.extname(file) === filename)
//           callback(file);
//       })
//     }
//   });
// }