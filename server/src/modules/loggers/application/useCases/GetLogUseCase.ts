import { inject, injectable } from 'inversify'
import { UseCase } from '~/shared/application/UseCase'
import { LoggerRepository } from '../../domain/LoggerRepository'
import { GetLogRequest } from './GetLogRequest'
import { GetLogResponse } from './GetLogResponse'

@injectable()
export class GetLogUseCase implements UseCase<GetLogRequest, GetLogResponse> {
  private repository: LoggerRepository

  constructor(@inject('LoggerRepository') loggerRepository: LoggerRepository) {
    this.repository = loggerRepository
  }

  async execute(request: GetLogRequest): Promise<GetLogResponse> {
    try {
      const { id } = request
      const logger = await this.repository.get(id)
      if (!logger) {
        throw new Error('Logger not found in db')
      }

      return new GetLogResponse(logger)
    } catch (error) {
      throw new Error(error.message)
    }
  }
}
