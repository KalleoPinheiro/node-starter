import ServerError from './server-error'
import BaseError from './base-error'

describe('Server error', () => {
  it('should be inherit from BaseError', () => {
    expect(new ServerError()).toBeInstanceOf(BaseError)
  })
})
