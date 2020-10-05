import { NextFunction, Request, Response } from 'express'
import BaseError from '../errors/base-error'
import ErrorHandler from '../errors/error-handler'

class ClientErrorHandling {
  public async handle(
    error: BaseError,
    _: Request,
    response: Response,
    next: NextFunction
  ): Promise<Response | undefined> {
    ErrorHandler.handleError(error)
    if (!ErrorHandler.isTrustedError(error)) {
      next(error)
      return
    }
    return response.status(error?.httpCode).send({
      title: `Something failed! ${error?.name}`,
      message: error?.message,
      stack: error?.stack
    })
  }
}

export default new ClientErrorHandling()
