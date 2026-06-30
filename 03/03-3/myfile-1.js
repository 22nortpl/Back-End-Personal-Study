const fs = require("fs");

const data = 'Hello World!';
fs.writeFileSync("./hello.txt", data);