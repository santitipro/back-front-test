import { inject, injectable } from 'inversify'
import { LoggerRepository } from '~/modules/loggers/domain/LoggerRepository'
import { UseCase } from '~/shared/application/UseCase'
import { GetLogsResponse as GetRealLogsResponse } from './GetRealLogsResponse'
import { SaveLogsUseCase } from './SaveLogsUseCase'

@injectable()
export class GetRealLogsUseCase implements UseCase<never, GetRealLogsResponse> {
  private repository: LoggerRepository
  private saveLogs: SaveLogsUseCase

  constructor(
    @inject('LoggerRepository') loggerRepository: LoggerRepository,
    @inject('SaveLogsUseCase') saveLogs: SaveLogsUseCase
  ) {
    this.repository = loggerRepository
    this.saveLogs = saveLogs
  }

  async execute(): Promise<GetRealLogsResponse> {
    try {
      const logs = await this.repository.getAllReal()
      this.saveLogs.execute(logs)
      return new GetRealLogsResponse(logs)
    } catch (error) {
      throw new Error(error.message)
    }
  }
}
