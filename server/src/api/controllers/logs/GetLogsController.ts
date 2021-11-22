import { Request, Response } from 'express'
import { inject, injectable } from 'inversify'
import { GetLogsUseCase } from '~/modules/loggers/application/useCases/GetLogsUseCase'
import { Controller } from '../Controller'

@injectable()
export class GetLogsController implements Controller {
  private useCase: GetLogsUseCase

  constructor(@inject('GetLogsUseCase') getLogsUseCase: GetLogsUseCase) {
    this.useCase = getLogsUseCase
  }

  async run(req: Request, res: Response): Promise<void> {
    try {
      const logs = await this.useCase.execute()
      res.send(logs.logs)
    } catch (err) {
      res.status(500).send({ error: err.message })
    }
  }
}
