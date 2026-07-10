const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.status(200);
  res.send("Hello, Node!");
});

app.get("/contacts", (req, res) => {
  res.status(200);
  res.send("Contacts Page");
});

app.listen(port, () => {
  console.log(`${port}번 포트에서 서버 실행 중!`);
});