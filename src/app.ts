import * as bodyParser from "body-parser";
import { Server } from "@overnightjs/core";
import { cinfo, cimp } from "simple-color-print";
import { UserController } from "./controllers/user";

export class ExpressServer extends Server {
  port = 3000;
  constructor() {
    super();
    this.setupExpress();
    this.setupControllers();
  }

  private setupExpress(): void {
    // Setup express here like you would
    // any other ExpressJS application.
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
  }

  private setupControllers() {
    let userController = new UserController();
    super.addControllers(userController);
  }

  public start(): void {
    this.app.listen(this.port, () => {
      cimp("Server listening on port:" + this.port);
    });
  }
}

let server = new ExpressServer();

server.start();

export default ExpressServer;
