import { Request, Response } from 'express'
import { inject, injectable } from 'inversify'
import { GetRealLogsUseCase } from '~/modules/loggers/application/useCases/GetRealLogsUseCase'
import { Controller } from '../Controller'

@injectable()
export class GetRealLogsController implements Controller {
  private useCase: GetRealLogsUseCase

  constructor(@inject('GetRealLogsUseCase') useCase: GetRealLogsUseCase) {
    this.useCase = useCase
  }

  async run(req: Request, res: Response): Promise<void> {
    try {
      const logs = await this.useCase.execute()
      res.send(logs)
    } catch (err) {
      res.status(500).send({ error: err.message })
    }
  }
}
