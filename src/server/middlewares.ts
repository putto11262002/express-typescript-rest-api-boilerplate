import { Application } from 'express'
import cors from 'cors'

const middlewares = (app: Application) => {
  /**
   * Middlewares go here
   */
  app.use(cors())
}

export default middlewares
