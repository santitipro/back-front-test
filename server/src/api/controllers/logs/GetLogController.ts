import { Request, Response } from 'express'
import { inject, injectable } from 'inversify'
import { GetLogUseCase } from '~/modules/loggers/application/useCases/GetLogUseCase'
import { Controller } from '../Controller'

@injectable()
export class GetLogController implements Controller {
  private useCase: GetLogUseCase

  constructor(@inject('GetLogUseCase') useCase: GetLogUseCase) {
    this.useCase = useCase
  }

  async run(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id
      if (!id) {
        throw new Error('Invalid logger id params')
      }
      const log = await this.useCase.execute({ id })
      res.send(log.logger)
    } catch (err) {
      res.status(500).send({ error: err.message })
    }
  }
}
