import BadRequest from './bad-request'
import BaseError from './base-error'

describe('Bad request', () => {
  it('should be inherit from BaseError', () => {
    expect(new BadRequest('bad request')).toBeInstanceOf(BaseError)
  })
})
