import request from 'supertest'
import app from './express'

describe('Express', () => {
  it('should express responds to main app route', async () => {
    await request(app).get('/').expect(200, 'OK')
  })
})
