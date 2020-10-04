import debug from 'debug'
import { NextFunction, Request, Response } from 'express'
import { dateFormat } from '../../../shared/utils/helpers/date-format'

class LogRequest {
  public async logger(
    request: Request,
    _: Response,
    next: NextFunction
  ): Promise<void> {
    const log = debug('node-starter:log-request')
    const { rawHeaders, method, url, query } = request

    log(
      JSON.stringify({
        timestamp: dateFormat(new Date(Date.now())),
        rawHeaders,
        method,
        query,
        url
      })
    )
    next()
  }
}

export default new LogRequest()
