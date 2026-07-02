const http = require("http");

const server = http.createServer((req, res) => {
  const { method, url } = req;
  res.setHeader("Context-type", "text/plain");
  
  if(method === "GET" && url === "/home"){
    res.statusCode = 200;
    res.end("Welcome Home");
  }
  else if(method === "GET" && url === "/about"){
    res.statusCode = 200;
    res.end("About Us");
  }
  else{
    res.statusCode = 404;
    res.end("Not Found");
  }
});

server.listen(8080, () => {
  console.log("8080번 포트에서 서버 실행 중");
});