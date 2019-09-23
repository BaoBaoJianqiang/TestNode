var http = require('http');
var url = require("url"); 
//require('date-utils');

function start(routeGet, routePost, handle) {
    function onRequest(request, response) {

      console.log("1234");

//       if(req.url!=="/favicon.ico"){
//         console.log(req.url);
//      　 res.end();
// 　　　 }

      request.setEncoding('utf-8');

      // 添加响应头，支持跨域
      response.setHeader("Access-Control-Allow-Origin", "*"); 

      var pathname = url.parse(request.url).pathname.toLowerCase();    
      console.log("Request for " + pathname + " received.");    

      console.log(request.url);
      var params = url.parse(request.url).query;
      if(params) {
        params = params.toLowerCase();
      }

      // response.writeHead("Set-Cookie", ["type=ninja", "language=javascript"]);
      // var time = (new Date()).toFormat("YYYY-MM-DD HH:MI:SS");
      // console.log(time);
      // response.writeHead(200, {'Content-Type': 'text/json', 'Date': time});
      response.writeHead(200, {'Content-Type': 'text/json'});

      var method = request.method;
      if(method === "GET"){
        var content = routeGet(handle, pathname, params);  
        response.write(content);
        response.end('');
      } else {
        console.log('POST');
        var postData = "";
        request.addListener("data", function(postDataChunk) {
          postData += postDataChunk;
          console.log("Received POST data chunk '"+ postDataChunk + "'.");
        });

        request.addListener("end", function() {
          console.log("Received finished.");
          var content = routePost(handle, pathname, postData);
          response.write(content);
          response.end('');
        });
      }
    }

  http.createServer(onRequest).listen(8889);

  // 终端打印如下信息
  console.log('Server running at http://127.0.0.1:8889/');
}

exports.start = start;