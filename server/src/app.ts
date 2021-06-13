import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import errorMiddleware from './middlewares/error.middleware';
import { logger, stream } from './utils/logger';
import { health } from './middlewares/health.middleware';
import router from "./routes/meli.route";

class App {
  public app: express.Application;
  public port: string | number;
  public env: string;

  public async bootstrap(): Promise<App> {
      this.app = express();
      this.port = process.env.PORT || 8080;
      this.env = process.env.NODE_ENV || 'development';

      this.initializeErrorHandling()
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
    if(!this.app)
      throw Error('Application was not right initialized')
    return this.app
  }

  private initializeMiddlewares() {
    this.app.get('/health', health());
    this.app.use(morgan(this.env === 'production' ? 'combined' : 'dev', { stream }));
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  private initializeRoutes() {
    this.app.use(`/api`, router);
  }

  private initializeSwagger() {
    const options: swaggerJSDoc.OAS3Options = {
      swaggerDefinition: {
        openapi: '3.0.0',
        info: {
          title: 'REST API',
          version: '1.0.0',
          description: 'Meli Server Api'
        },
        servers: [{url: `/api`}]
      },
      apis: ['swagger.yaml'],
    };

    const specs = swaggerJSDoc(options);
    this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
  }

  private initializeErrorHandling() {
    this.app.use(errorMiddleware);
  }
}

export default App;
