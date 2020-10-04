import { NextFunction, Request, Response } from 'express'
import ErrorHandler from '../errors/error-handler'

class ErrorHandling {
  public async handle(
    error: Error,
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    if (!ErrorHandler.isTrustedError(error)) {
      next(error)
    }
    ErrorHandler.handleError(error)
  }
}

export default new ErrorHandling()
