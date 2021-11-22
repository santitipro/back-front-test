import { LoggerResponse } from '~/shared/application/Definitions'
import { Logger } from '../../domain/Logger'

export class GetLogResponse {
  public logger: LoggerResponse

  constructor(logger: Logger) {
    this._buildResponse(logger)
  }

  private _buildResponse(logger: Logger): void {
    this.logger = {
      id: logger.id,
      tempHight: logger.tempHight,
      tempLow: logger.tempLow,
      weightDepositHight: logger.weightDepositHight,
      weightDepositLow: logger.weightDepositLow,
      pTemp: logger.pTemp
    }
  }
}
