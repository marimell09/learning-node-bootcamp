const fs = require("fs");
const server = require("http").createServer();

server.on("request", (req, res) => {
  //Solution 1
  /*  fs.readFile("test-file.txt", (err, data) => {
    if (err) console.log(err);
    res.end(data);
  }); 

  //Solution 2: streams
  const readable = fs.createReadStream("test-file.txt");
  readable.on("data", chunk => {
    //the response is a writable stream
    res.write(chunk);
  });

  //Since we already sent every chunk of data, we can signal the end of the reading stream
  //otherwise the response will never actually be sent all
  //This solution has backpression
  /* readable.on("end", () => {
    res.end();
  });

  readable.on("error", err => {
    console.log(err);
    res.statusCode = 500;
    res.end("File not found!");
  });

  */

  //Solution 3 - the pipe will work on the backpressure
  const readable = fs.createReadStream("test-file.txt");
  readable.pipe(res);
  //e.g.: readableSource.pipe(writableDestination)
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening...");
});
