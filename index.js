const http = require('http');
const fs=require('fs')
 
const server = http.createServer(function(req,res){
    const url = req.url; 
    let filePath;
if (url === '/'){
    filePath='index.html'
}
else if (url === '/about'){
    filePath = 'about.html'
}
else{
    filePath='404.html'
}
fs.readFile(filePath,"utf8",function(err,content){
    if(err){
        res.end(err.message);
    }
    else {
        res.end(content)
    }
})
 
})
 
server.listen(3000,console.log("server has started"));

