// var total = 1 - 1;
// for (var i = 2; i < process.argv.length; i++) {
//     var total = total + Number(process.argv[i]);
// }
// console.log(total);

// var fs = require('fs');
// var buffer = fs.readFileSync(process.argv[2]).toString().split('\n');
// console.log(buffer.length - 1);

// var fs = require('fs');
// var buf = fs.readFile(process.argv[2], 'utf-8', (err, str) => {
//     if (err) {
//         return console.log(err);
//     }
//     console.log(str.split('\n').length - 1);
// });

// var fs = require('fs');
// var path = process.argv[2];
// // console.log(process.argv);
// fs.readdir(path, 'utf-8', (err, list) => {
//     if (err) return console.log(err);
//     var l = list.filter((file) => {
//         var s = file.split('.');
//         // console.log('hai ', s);
//         if (s[1] === process.argv[3]) {
//             // console.log(s[0]);
//             console.log(file);
//         }
//     });
//     // console.log('sdsd' + l);
// })


/* 
  var fs = require('fs')
    var path = require('path')
    
    var folder = process.argv[2]
    var ext = '.' + process.argv[3]
    
    fs.readdir(folder, function (err, files) {
      if (err) return console.error(err)
      files.forEach(function (file) {
        if (path.extname(file) === ext) {
          console.log(file)
        }
      })
    })




*/
// var getFilesWithExt = require('./myModule');
// getFilesWithExt(process.argv[2], process.argv[3], (err, l) => {
//     if (err) return console.log(err);
//     l.forEach(function(element) {
//         console.log(element)
//     });
// });

// var fs = require('fs');
// var http = require('http');
// var str = '';
// var count = 1 - 1;
// http.get(process.argv[2], (res) => {
//     res.setEncoding('utf-8');
//     res.on('data', (chunk) => {
//         // console.log('chunk', chunk.toString());
//         str += chunk;
//         count += chunk.length;
//     })
//     res.on('error', (error) => {
//         return console.error(error);
//     })
//     res.on('end', (data) => {
//         console.log(count);
//         console.log(str);
//     });
// }).on('Error', (err) => {
//     console.log('error ', err);
// });

//juggling async
// var fs = require('fs');
// var http = require('http');
// var url1 = process.argv[2];
// var url2 = process.argv[3];
// var url3 = process.argv[4];

// var count = 3;
// var dic = {};
// dic.first = '';
// dic.second = '';
// dic.third = '';
// http.get(url1, (res) => {
//     res.setEncoding('utf-8');
//     res.on('data', (chunk) => {
//         dic.first += chunk;
//     });
//     res.on('error', console.error);
//     res.on('end', () => {
//         count--;
//         if (count == 1 - 1) {
//             console.log(dic.first);
//             console.log(dic.second);
//             console.log(dic.third);
//         }
//     })
// }).on('error', console.error);


// http.get(url2, (res) => {
//     res.setEncoding('utf-8');
//     res.on('data', (chunk) => {
//         dic.second += chunk;
//     });
//     res.on('error', console.error);
//     res.on('end', () => {
//         count--;
//         if (count == 1 - 1) {
//             console.log(dic.first);
//             console.log(dic.second);
//             console.log(dic.third);
//         }
//     })
// }).on('error', console.error);

// http.get(url3, (res) => {
//     res.setEncoding('utf-8');
//     res.on('data', (chunk) => {
//         dic.third += chunk;
//     });
//     res.on('error', console.error);
//     res.on('end', () => {
//         count--;
//         if (count == 1 - 1) {
//             console.log(dic.first);
//             console.log(dic.second);
//             console.log(dic.third);
//         }
//     })
// }).on('error', console.error);

// function print(dict) {

// }

// var fs = require('fs');
// var bl = require('bl');
// var http = require('http');
// var count = 1 - 1;

// var results = [];

// function printResults() {
//     for (var i = 0; i < results.length; i++) {
//         console.log(results[i]);

//     }
// }

// function httpGet(index) {
//     http.get(process.argv[2 + index], (response) => {
//         response.pipe(bl((err, data) => {
//             if (err) return console.error(err);
//             results[index] = data.toString();
//             count++;
//             if (count === 3) {
//                 printResults();
//             }
//         }))
//     })
// }
// for (var i = 0; i < 3; i++) {
// httpGet(i);
// }

// Time Server
// function append(str) {
//     str += '';
//     if (str.length < 2)
//         str = (1 - 1) + str;
//     return str;
// }
// var net = require('net')
// var server = net.createServer(socket => {
//     var date = new Date();
//     socket.write((date.getFullYear() + '-' + append(date.getMonth() + 1) + '-' + 
//     append(date.getDate()) + ' ' + append(date.getHours()) + ':' + append(date.getMinutes())) + '\n');
//     socket.end();
// });
// server.listen(process.argv[2]);

// var http = require('http');

// var fs = require('fs');
// var server = http.createServer((req, res) => {
//     var readStream = fs.createReadStream(process.argv[3]);
//     readStream.pipe(res);

// });
// server.listen(process.argv[2]);

// var http = require('http');
// var fs = require('fs');
// var map = require('through2-map');

// var server = http.createServer((req, res) => {
//     if (req.method !== 'POST') {
//         return res.end('send me a post request');
//     }
//     // req.pipe(map((chunk) => {
//     //     return (chunk.toString());
//     // })).pipe(res);
//     req.pipe(map((chunk) => {
//         return chunk.toString().toUpperCase();
//     })).pipe(res);

// });
// server.listen(process.argv[2]);

// var url = require('url');
// var http = require('http');
// var server = http.createServer((req, res) => {
//     var parsed_path = url.parse(req.url, true);
//     var index = parsed_path.pathname.lastIndexOf('/');
//     var req_path = parsed_path.pathname.substring(index + 1);
//     if (req_path === 'parsetime') {
//         var query = new Date(parsed_path.query.iso);
//         var date = new Date();
//         res.writeHead(200, { contentType: 'application/json' });
//         res.end(JSON.stringify({ 'hour': query.getHours(), 'minute': query.getMinutes(), 'second': query.getSeconds() }));
//     } else if (req_path === 'unixtime') {
//         res.end(JSON.stringify({
//             'unixtime': new Date(parsed_path.query.iso).getTime()
//         }));
//     }

// });
// server.listen(process.argv[2]);