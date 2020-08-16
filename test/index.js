const cp = require("child_process");
const path = require("path");

cp.exec(`start ${path.resolve(__dirname, "index.html")}`);
