import BaseError from './base-error'
import { logger } from '../../logger/winston'

class ErrorHandler {
  public handleError(err: Error): void {
    logger.error(
      'Error message from the centralized error-handling component',
      err
    )
  }

  public isTrustedError(error: Error): boolean {
    if (error instanceof BaseError) {
      return error.isOperational
    }
    return false
  }
}

export default new ErrorHandler()
