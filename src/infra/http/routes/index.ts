import { NextFunction, Request, Response, Router } from 'express'
import ServerError from '../errors/server-error'
import LogRequest from '../middlewares/log-request'
import ErrorHandling from '../middlewares/error-handling'
import BadRequest from '../errors/bad-request'
import ClientErrorHandling from '../middlewares/client-error-handling'

const router = Router()

router.use(LogRequest.logger)

router.get('/', (_: Request, res: Response, next: NextFunction) => {
  try {
    res.sendStatus(200)
  } catch (error) {
    next(error)
  }
})

router.use(ClientErrorHandling.handle)
router.use(ErrorHandling.handle)

export default router
