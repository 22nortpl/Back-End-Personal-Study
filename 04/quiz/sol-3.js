const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Context-type","text/plain");
  res.write("Hello, World!");
  res.end();
});

server.listen(8080, () =>{
  console.log("8080번 포트에서 서버 실행 중");
});