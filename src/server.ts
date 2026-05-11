import {
  createServer,
  type IncomingMessage,
  type ServerResponse,
  type Server,
} from "http";

const server: Server = createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    console.log(req);
  },
);

server.listen(5001, () => {
  console.log("Server is running on the port 5001");
});
