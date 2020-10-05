import { logger } from '../../logger/winston'
import BaseError from './base-error'

class ErrorHandler {
  public handleError(err: Error): void {
    logger.error(`Something went wrong!  Details:`, err)
  }

  public isTrustedError(error: Error): boolean {
    if (error instanceof BaseError) {
      return error.isOperational
    }
    return false
  }
}

export default new ErrorHandler()
