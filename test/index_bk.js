const http = require("http");
const cp = require("child_process");
const fs = require("fs");
const mime = require("mime");
const url = require("url");
const path = require("path");

const server = http.createServer();
const STATIC_FOLDER = "lib";

server.listen(8080, () => {
  console.log("server start at port 8080");
});

server.on("request", (req, res) => {
  const rootName = path.join(__dirname, "../");
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.readFile("./test/index.html", "utf-8", (err, data) => {
      if (err) {
        throw err;
      }
      res.end(data);
    });
  } else if (req.url === "/favicon.ico") {
    const pathname = url.parse(req.url).pathname;
    const favicon = path.join(rootName, pathname);
    const ext = path.extname(pathname);
    const contentType = mime.getType(ext) || "text/plain";
    let raw = fs.createReadStream(favicon);
    res.writeHead(200, "ok", {
      "Content-Type": contentType,
    });
    raw.pipe(res);
  } else {
    const pathname = url.parse(req.url).pathname;
    const ext = path.extname(pathname);
    const contentType = mime.getType(ext) || "text/plain";
    const realPath = path.join(rootName, STATIC_FOLDER, pathname);
    console.log(pathname, __dirname, realPath);

    let raw = fs.createReadStream(realPath);
    res.writeHead(200, "ok", {
      "Content-Type": contentType,
    });
    raw.pipe(res);
  }
});

cp.exec("start http://127.0.0.1:8080/");
