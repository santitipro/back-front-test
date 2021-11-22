import { Logger } from '~/modules/loggers/domain/Logger'
import { LoggerResponse } from '~/shared/application/Definitions'

export class GetLogsResponse {
  public loggers: LoggerResponse[]

  constructor(loggers: Array<Logger>) {
    this._buildResponse(loggers)
  }

  private _buildResponse(logs: Array<Logger>): void {
    this.loggers = logs.map((log) => ({
      id: log.id,
      tempHight: log.tempHight,
      tempLow: log.tempLow,
      weightDepositHight: log.weightDepositHight,
      weightDepositLow: log.weightDepositLow,
      pTemp: log.pTemp
    }))
  }
}
