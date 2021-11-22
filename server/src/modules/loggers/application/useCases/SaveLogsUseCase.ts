import { inject, injectable } from 'inversify'
import { UseCase } from '~/shared/application/UseCase'
import { LoggerRepository } from '../../domain/LoggerRepository'
import { SaveLogsRequest } from './SaveLogsRequest'

@injectable()
export class SaveLogsUseCase implements UseCase<SaveLogsRequest, void> {
  private repository: LoggerRepository

  constructor(@inject('LoggerRepository') loggerRepository: LoggerRepository) {
    this.repository = loggerRepository
  }

  async execute(loggers: SaveLogsRequest): Promise<void> {
    try {
      loggers.forEach((logger) => {
        this.repository.create(logger)
      })
    } catch (error) {
      throw new Error(error.message)
    }
  }
}
