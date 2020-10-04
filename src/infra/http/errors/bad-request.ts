import { HttpStatusCode } from '../../../shared/utils/enums/http-status-code'
import BaseError from './base-error'

class BadRequest extends BaseError {
  constructor(description = 'bad request') {
    super('NOT FOUND', HttpStatusCode.BAD_REQUEST, description, true)
  }
}

export default BadRequest
