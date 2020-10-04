import { HttpStatusCode } from '../../../shared/utils/enums/http-status-code'
import BaseError from './base-error'

class UnauthorizedRequest extends BaseError {
  constructor(description = 'unauthorized request') {
    super('UNAUTHORIZED', HttpStatusCode.UNAUTHORIZED, description, true)
  }
}

export default UnauthorizedRequest
