var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");  

var handle = {};  
  
handle["/"] = requestHandlers.start;  

handle["/movie/getmovielist"] = requestHandlers.getMovieList;  

handle["/movie/getmoviedetail"] = requestHandlers.getMovieDetail;  

handle["/others/login"] = requestHandlers.login;  

handle["/others/register"] = requestHandlers.register;  

handle["/cinema/getcinemadetail"] = requestHandlers.getCinemaDetail;  

handle["/others/getsomethingwithoutparams"] = requestHandlers.getSomethingWithoutParams;  

handle["/others/sendreport"] = requestHandlers.sendReport; 

handle["/others/gethybridversion"] = requestHandlers.getHybridVersion; 
handle["/others/gethybridversion2"] = requestHandlers.getHybridVersion2; 

handle["/others/getweather"] = requestHandlers.getWeather; 

server.start(router.routeGet, router.routePost, handle);