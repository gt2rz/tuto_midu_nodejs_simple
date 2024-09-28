import request from 'supertest'
import app from './server'
import { describe, it, expect } from '@jest/globals'

describe('GET /', () => {
  it('responds with Hello World!', async () => {
    const response = await request(app).get('/')
    expect(response.status).toEqual(200)
    expect(response.text).toEqual('Hello World!')
  })
})
