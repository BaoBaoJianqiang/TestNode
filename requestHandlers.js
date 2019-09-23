var querystring = require("querystring"); 

function start(params) {
	return '{"isError":1, "errorType":2, "errorMessage":"403 forbidden", "result": {}}';   	
}     

function getWeather(params) {    
    var obj = querystring.parse(params);
    console.log(obj);

    var content = '';
    if('北京' != obj.cityname) {
        content = '{"cond":"fine", "tmp":"28.5", "hum":"wet"}';     
    } else {
        content = '{"cond":"rainy", "tmp":"1.5", "hum":"gan"}';     
    }

    return content;      
} 

function getHybridVersion(params) {    
    var serverVersion = '100';

    var obj = querystring.parse(params);
    console.log('入参（版本号）:'+obj.version);
    console.log('服务器最新版本号:'+ serverVersion);

    var content = '';
    if(serverVersion != obj.version) {
        content = '{"need_upgrade":"1", "patch_url":"http://127.0.0.1:8899/fe'+ serverVersion +'.zip", "latest_version":"' + serverVersion +'"}';     
    } else {
        content = '{"need_upgrade":"0"}';     
    }

    console.log(content);

    return '{"isError":0, "errorType":0, "errorMessage":"", "result": '+ content +'}';      
} 

function getHybridVersion2(params) {    
    var serverVersion = '100';

    var obj = querystring.parse(params);
    console.log('入参（版本号）:'+obj.version);
    console.log('服务器最新版本号:'+ serverVersion);

    var content = '';
    if(serverVersion != obj.version) {
        content = '{"need_upgrade":"1", "patch_url":"http://127.0.0.1:9900/v' + obj.version + '_' + serverVersion +'.zip", "latest_version":"' + serverVersion +'"}';     
    } else {
        content = '{"need_upgrade":"0"}';     
    }

    console.log(content);

    return '{"isError":0, "errorType":0, "errorMessage":"", "result": '+ content +'}';      
} 
  
function login(response, postData) {    
    //console.log(postData);

    var content = '{"userId": 123, "userName":"jianqiang.bao", "age":18, "address":"Where is my address", "idNumber":"120120098765424111", "phone":"18600875555"}';     
    return '{"isError":0, "errorType":0, "errorMessage":"", "result": '+ content +'}';      
} 
  
function register(response, postData) {    
    console.log(postData);

    var content = '{"isError":1, "errorMessage":"故意让你失败的～～"}';     
    return '{"isError":0, "errorType":0, "errorMessage":"", "result": '+ content +'}';      
} 
  
function sendReport(response, postData) {    
	console.log(postData);

    var content = '{"isError":0, "errorMessage":""}';     
    return '{"isError":0, "errorType":0, "errorMessage":"", "result": '+ content +'}';   	
} 
  
function getCinemaDetail(params) {    
    var obj = querystring.parse(params);
    
    console.log(obj.cinemaid);

    var content = '{"cinemaId":' + obj.cinemaid + ', "cinemaName":"StarBeautiful"}';     
    return '{"isError":0, "errorType":0, "errorMessage":"", "result": '+ content +'}';   	
} 

function getMovieDetail(params) {    
    
    var obj = querystring.parse(params);
    
    console.log(obj);
    var movieId = obj.movieid;

    if(movieId == 1) {
        var content = '{"movieId":1, "movieName":"星际争霸"}';     
        return '{"isError":0, "errorType":0, "errorMessage":"", "result": '+ content +'}';      
    } else {
        var content = '{"movieId":2, "movieName":"芳华"}';     
        return '{"isError":0, "errorType":0, "errorMessage":"", "result": '+ content +'}';      
    }


    //for( var i = 0;i<30000;i++){console.log(i)}

} 
  
function getMovieList(params) {    
    var obj = querystring.parse(params);

    //for( var i = 0;i<30000;i++){console.log(i)}

    console.log(obj.cityid);
    console.log(obj.showdate);

    var content = '{"movieList":[{"movieId":123, "movieName":"Avatar"}, {"movieId":1, "movieName":"WarCarft"}]}';  
    return '{"isError":0, "errorType":0, "errorMessage":"", "result": '+ content +'}';   	
} 


function getSomethingWithoutParams(params) { 
    //for( var i = 0;i<30000;i++){console.log(i)}

    var content = '{"movieList":[{"movieId":345, "movieName":"人工智能"}, {"movieId":987, "movieName":"海豚湾"}]}';  
    return '{"isError":0, "errorType":0, "errorMessage":"", "result": '+ content +'}';      
} 

exports.start = start;  
exports.login = login;  
exports.register = register;  
exports.getMovieDetail = getMovieDetail;  
exports.getCinemaDetail = getCinemaDetail;  
exports.getMovieList = getMovieList; 
exports.getSomethingWithoutParams = getSomethingWithoutParams; 
exports.sendReport = sendReport; 
exports.getHybridVersion = getHybridVersion; 
exports.getHybridVersion2 = getHybridVersion2; 

exports.getWeather = getWeather; 