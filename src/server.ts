import {
  createServer,
  type IncomingMessage,
  type ServerResponse,
  type Server,
} from "http";
import { routeHandler } from "./routes/route";
import config from "./config";

const server: Server = createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    // console.log(req);
    routeHandler(req, res);
  },
);

server.listen(config.port, () => {
  console.log(`Server is running on the port ${config.port}`);
});
