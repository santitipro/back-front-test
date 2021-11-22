import { LoggerResponse } from '~/shared/application/Definitions'
import { Logger } from '../../domain/Logger'

export class GetLogsResponse {
  public logs: Array<LoggerResponse>

  constructor(logs: Logger[]) {
    this._buildResponse(logs)
  }

  private _buildResponse(logs: Logger[]) {
    this.logs = logs.map((item) => ({
      id: item.id,
      tempHight: item.tempHight,
      tempLow: item.tempLow,
      weightDepositHight: item.weightDepositHight,
      weightDepositLow: item.weightDepositLow,
      pTemp: item.pTemp
    }))
  }
}
