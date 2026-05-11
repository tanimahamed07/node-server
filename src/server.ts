import {
  createServer,
  type IncomingMessage,
  type ServerResponse,
  type Server,
} from "http";
import { routeHandler } from "./routes/route";

const server: Server = createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    // console.log(req);
    routeHandler(req, res);
  },
);

server.listen(5001, () => {
  console.log("Server is running on the port 5001");
});
