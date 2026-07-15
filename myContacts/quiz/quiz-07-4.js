const express = require("express");
const app = express();

const router = express.Router();

router.get("/", (req, res) => {
  res.send("This is the About page");
});

app.use("/about", router);

app.listen(3000, () => {
  console.log("Server is running port 3000!");
});