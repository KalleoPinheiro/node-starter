import Unauthorized from './unauthorized'
import BaseError from './base-error'

describe('Bad request', () => {
  it('should be inherit from BaseError', () => {
    expect(new Unauthorized()).toBeInstanceOf(BaseError)
  })
})
