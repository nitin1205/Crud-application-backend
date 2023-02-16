import express, { Express } from 'express';

import { Server } from '@root/server';
import dbConnection from '@root/database';

class Application {
  public initialize(): void {
    dbConnection();
    const app: Express = express();
    const server: Server = new Server(app);
    server.start();
  };

}

const application: Application = new Application();
application.initialize();
