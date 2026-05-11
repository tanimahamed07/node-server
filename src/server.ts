import {
  createServer,
  type IncomingMessage,
  type ServerResponse,
  type Server,
} from "http";

const server: Server = createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    // console.log(req);
    const url = req.url;
    const method = req.method;
    if (url === "/" && method === "GET") {
      // console.log('this is root route')
      (res.writeHead(200, { "content-type": "application/json" }),
        res.end(JSON.stringify({ message: "this is root route" })));
    } else if (url?.startsWith("/products")) {
      (res.writeHead(200, { "content-type": "application/json" }),
        res.end(JSON.stringify({ message: "this is product route" })));
    } else {
      (res.writeHead(200, { "content-type": "application/json" }),
        res.end(JSON.stringify({ message: "route not found" })));
    }
  },
);

server.listen(5001, () => {
  console.log("Server is running on the port 5001");
});
