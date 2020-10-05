import { NextFunction, Request, Response } from 'express'

class ErrorHandling {
  public async handle(
    error: Error,
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<Response> {
    return response.status(500).send({
      title: `${error?.name ?? 'Error!'}: something failed!`,
      message: error?.message,
      stack: error?.stack
    })
  }
}

export default new ErrorHandling()
