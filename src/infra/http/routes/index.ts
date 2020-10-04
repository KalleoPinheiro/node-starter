import { NextFunction, Request, Response, Router } from 'express'
import ServerError from '../errors/server-error'
import LogRequest from '../middlewares/log-request'
import ErrorHandling from '../middlewares/error-Handling'

const router = Router()

router.use(LogRequest.logger)
router.use(ErrorHandling.handle)

router.get('/', (_: Request, res: Response, next: NextFunction) => {
  try {
    res.sendStatus(200)
  } catch (error) {
    throw new ServerError('INTERNAL SERVER')
  }
})

export default router
