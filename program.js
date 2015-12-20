//exercise 2
// var sum = 0
// for (var i=2; i<process.argv.length; i++){
//   sum += Number(process.argv[i]);
// }
// console.log(sum);

//exercise 3
// var fs = require('fs');

// var doc = fs.readFileSync(process.argv[2]).toString();
// var array = doc.split("\n");
// var length = array.length;
// console.log(length - 1);

//exercise 4

// var fs = require('fs');
// fs.readFile(process.argv[2], 'utf8', callback);

// function callback(err, data){
//   if(err){
//     console.log("There was an error");
//   } else{
//     var array = data.split("\n");
//     var length = array.length;
//     console.log(length - 1);
//   }

// }

//exercise 5

// var fs = require('fs');
// var path = require('path');

// fs.readdir(process.argv[2], function(err, list){
//   list.forEach(function(file){
//     if (path.extname(file) === "." + process.argv[3])
//       console.log(file)
//   })
// });

//exercise 6
// function callback(data){
//   console.log(data);
// }
// var mymodule = require('./module.js');
// mymodule(process.argv[2], "."+process.argv[3], callback);


//exercise 7 
// var http = require('http');
// http.get(process.argv[2], function(response){
//   response.setEncoding('utf8');
//   response.on('data', function(chunk){
//     console.log(chunk);
//   });
//   response.on('error', function(error){
//     console.log(error);
//   })
// })

//exercise 8
// var bl = require('bl');
// var http = require('http');
// http.get(process.argv[2], function(response){
//   response.pipe(bl(function(err,data){
//     console.log(data.toString().length);
//     console.log(data.toString());
//   }))
// })

//exercise 9 
//2,3,4
// var bl = require('bl');
// var http = require('http');
// http.get(process.argv[2], function(response){
//   response.pipe(bl(function(err,data){
//     responseOne = data.toString();
//     http.get(process.argv[3], function(response){
//       response.pipe(bl(function(err,data){
//         responseTwo = data.toString();
//         http.get(process.argv[4], function(response){
//           response.pipe(bl(function(err,data){
//               responseThree = data.toString();
//               console.log(responseOne);
//               console.log(responseTwo);
//               console.log(responseThree);
//             }))
//         })
//       }))
//     })
//   }))
// })

//exercise 10
// var net = require('net');
// var strftime = require('strftime');
// var server = net.createServer(function(socket){
//   //socket handling logic
//   var date = strftime('%Y-%m-%d %H:%M', new Date());
//   socket.end(date);
// })
// server.listen(process.argv[2]);

//exercise 11
// var fs = require('fs');
// var http = require('http');
// var server = http.createServer(function(request, response){
//   //request handling logic 
//   var src = fs.createReadStream(process.argv[3])
//   src.pipe(response)
// ;
// })
// server.listen(process.argv[2]);

//exercise 12
// var http = require('http');
// var server = http.createServer(function(request,response){
//     var map = require('through2-map');
//     request.pipe(map(function(chunk){
//       return chunk.toString().toUpperCase();
//     })).pipe(response)  
// })
// server.listen(process.argv[2]);

//exercise 13