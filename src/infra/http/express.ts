import compression from 'compression'
import cors from 'cors'
import express from 'express'
import helmet from 'helmet'
import { environmentsConfig } from '../../shared/configs/environments'
import router from './routes'

class App {
  public app: express.Application
  private readonly origin = {
    origin:
      environmentsConfig.nodeEnv === 'production'
        ? environmentsConfig.clientUrl
        : '*'
  }

  public constructor() {
    this.app = express()
    this.middlewares()
    this.routes()
  }

  private middlewares(): void {
    this.app.use(express.json())
    this.app.use(compression())
    this.app.use(helmet())
    this.app.use(cors(this.origin))
  }

  private routes(): void {
    this.app.use(router)
  }
}

export default new App().app
