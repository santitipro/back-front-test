import { Logger } from './Logger'

export interface LoggerRepository {
  getAllReal(): Promise<Array<Logger>>
  getAll(): Promise<Array<Logger>>
  get(id: string): Promise<Logger>
  create(logger: Logger): Promise<void>
}
