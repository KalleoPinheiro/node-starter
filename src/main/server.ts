import 'dotenv/config'
import Debug from 'debug'
import http from 'http'
import { AddressInfo } from 'net'
import app from '../infra/http/express'
import { environmentsConfig } from '../shared/configs/environments'
import ErrorHandler from '../infra/http/errors/error-handler'
import { logger } from '../infra/logger/winston'

const log = Debug('node-starter:server')
const normalizePort = (val: string): number | string | boolean => {
  const port = parseInt(val, 10)

  if (Number.isNaN(port)) {
    return val
  }

  if (port >= 0) {
    return port
  }

  return false
}

const onError = (error: any): void => {
  if (error.syscall !== 'listen') {
    throw error
  }

  switch (error.code) {
    case 'EACCES':
      log(`Port ${environmentsConfig.port} requires elevated privileges`)
      process.exit(1)
    case 'EADDRINUSE':
      log(`Port ${environmentsConfig.port} is already in use`)
      process.exit(1)
    default:
      throw error
  }
}

const onListening = (): void => {
  const addr = server.address() as AddressInfo
  log(`🚀 Server running on port ${addr?.port}`)
  logger.info(`🚀 Server running on port ${addr?.port}`)
}

const port = normalizePort(environmentsConfig.port)
app.set('port', port)
const server = http.createServer(app)

server.setTimeout(6000)
server.listen(port)
server.on('error', onError)
server.on('listening', onListening)

process.on('unhandledRejection', (reason: Error, promise: Promise<any>) => {
  throw reason
})

process.on('uncaughtException', (error: Error) => {
  ErrorHandler.handleError(error)
  if (!ErrorHandler.isTrustedError(error)) {
    process.exit(1)
  }
})
