import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import errorMiddleware from './middlewares/error.middleware';
import { logger, stream } from './utils/logger';
import { health } from './middlewares/health.middleware';
import router from './routes/meli.route';
import {
  SERVER_BASE,
  SERVER_HEALTH,
  SERVER_PORT,
  SWAGGER_API_TITLE,
  SWAGGER_API_URI,
  SWAGGER_API_VERSION,
  SWAGGER_DESCRIPTION,
} from './utils/config';

class App {
  public app: express.Application;
  public port: string | number;
  public env: string;

  public async bootstrap(): Promise<App> {
    this.app = express();
    this.port = SERVER_PORT;
    this.env = process.env.NODE_ENV || 'development';

    this.initializeErrorHandling();
    this.initializeMiddlewares();
    this.initializeRoutes();
    this.initializeSwagger();
    return this;
  }

  public listen() {
    this.app.listen(this.port, () => {
      logger.info(`🚀 App listening on the port ${this.port}`);
    });
  }

  public getServer() {
    if (!this.app) throw Error('Application was not right initialized');
    return this.app;
  }

  private initializeMiddlewares() {
    this.app.get(SERVER_HEALTH, health());
    this.app.use(morgan(this.env === 'production' ? 'combined' : 'dev', { stream }));
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  private initializeRoutes() {
    this.app.use(SERVER_BASE, router);
  }

  private initializeSwagger() {
    const options: swaggerJSDoc.OAS3Options = {
      swaggerDefinition: {
        openapi: '3.0.0',
        info: {
          title: SWAGGER_API_TITLE,
          version: SWAGGER_API_VERSION,
          description: SWAGGER_DESCRIPTION,
        },
        servers: [{ url: SERVER_BASE }],
      },
      apis: ['swagger.yaml'],
    };

    const specs = swaggerJSDoc(options);
    this.app.use(SWAGGER_API_URI, swaggerUi.serve, swaggerUi.setup(specs));
  }

  private initializeErrorHandling() {
    this.app.use(errorMiddleware);
  }
}

export default App;
