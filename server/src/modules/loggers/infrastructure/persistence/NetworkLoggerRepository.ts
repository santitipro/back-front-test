import { inject, injectable } from 'inversify'
import fetch from 'node-fetch'
import { IMapper } from '~/shared/application/Mapper'
import { MySqlRepository } from '~/shared/infrastructure/persistence/mysql/mysqlRepository'
import { Logger } from '../../domain/Logger'
import { LoggerId } from '../../domain/LoggerId'
import { LoggerRepository } from '../../domain/LoggerRepository'

@injectable()
export class NetworkLoggerRepository extends MySqlRepository implements LoggerRepository {
  private mapper: IMapper

  constructor(@inject('IMapper') mapper: IMapper) {
    super()
    this.mapper = mapper
  }

  async getAll(): Promise<Logger[]> {
    const response = await this.query(`SELECT * FROM ${this.tableName()}`)
    if (!response[0]) {
      return undefined
    }

    return response.map((item) => this.mapper.map<Logger>(Logger, item))
  }

  async getAllReal(): Promise<Logger[]> {
    const loggers: Array<Logger> = []
    const response = await (
      await fetch(
        'http://77.227.22.101:48038/?command=dataquery&uri=dl:Public&format=json&mode=most-recent&security=1511'
      )
    ).json()

    response?.data.forEach((item: any) => {
      const logger = {
        id: LoggerId.random().value,
        tempHight: item.vals[0],
        tempLow: item.vals[1],
        weightDepositHight: item.vals[2],
        weightDepositLow: item.vals[3],
        pTemp: item.vals[8]
      }
      loggers.push(this.mapper.map<Logger>(Logger, logger))
    })

    return loggers
  }

  async get(id: string): Promise<Logger> {
    const response = await this.query(`SELECT * FROM ${this.tableName()} WHERE id = ?`, [id])
    if (!response[0]) {
      return undefined
    }
    return this.mapper.map<Logger>(Logger, response[0])
    // return this.loggerBuilder
    //   .buildTempHight(23)
    //   .buildTempLow(12)
    //   .buildWeightDepositHight(12)
    //   .buildWeightDepositLow(1)
    //   .build()
  }

  async create(logger: Logger): Promise<void> {
    this.query(`INSERT INTO ${this.tableName()} SET ?`, logger.toPrimitives())
  }

  tableName(): string {
    return 'logs'
  }
}
