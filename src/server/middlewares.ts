import { Application } from 'express'
import cors from 'cors'
import requestLogger from '../utils/logging/requestLogger'

const middlewares = (app: Application) => {
  /**
   * Middlewares go here
   */

  app.use(requestLogger)
  app.use(cors())
}

export default middlewares
