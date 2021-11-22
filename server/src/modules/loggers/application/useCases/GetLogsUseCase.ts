import { injectable, inject } from 'inversify'
import { UseCase } from '~/shared/application/UseCase'
import { LoggerRepository } from '../../domain/LoggerRepository'
import { GetLogsResponse } from './GetLogsResponse'

@injectable()
export class GetLogsUseCase implements UseCase<never, GetLogsResponse> {
  private repository: LoggerRepository

  constructor(@inject('LoggerRepository') loggerRepository: LoggerRepository) {
    this.repository = loggerRepository
  }

  async execute(): Promise<GetLogsResponse> {
    try {
      const logs = await this.repository.getAll()
      return new GetLogsResponse(logs)
    } catch (error) {
      throw new Error(error.message)
    }
  }
}
