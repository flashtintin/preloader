const cp = require("child_process");
const path = require("path");
let cmd = "";
switch (process.platform) {
  case "wind32":
    cmd = "start";
    break;

  case "linux":
    cmd = "xdg-open";
    break;

  case "darwin":
    cmd = "open";
    break;
}

cp.exec(`${cmd} ${path.resolve(__dirname, "index.html")}`);
