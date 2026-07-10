const express = require("express");
const app = express();

app.get("/square/:number", (req, res) => {
  const number = Number(req.params.number);
  const square = number * number;
  res.send(`square of ${number} is ${square}`);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});