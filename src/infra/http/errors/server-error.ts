import { HttpStatusCode } from '../../../shared/utils/enums/http-status-code'
import BaseError from './base-error'

class ServerError extends BaseError {
  constructor(
    name = 'SERVER ERROR',
    httpCode = HttpStatusCode.INTERNAL_SERVER,
    description = 'internal server error',
    isOperational = true
  ) {
    super(name, httpCode, description, isOperational)
  }
}

export default ServerError
