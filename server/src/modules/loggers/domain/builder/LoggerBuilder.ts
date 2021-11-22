import { Logger } from '../Logger'
import { LoggerId } from '../LoggerId'

export class LoggerBuilder {
  private id: LoggerId
  private tempHigh: number
  private tempLow: number
  private weightDepositHight: number
  private weightDepositLow: number
  private pTemp: number

  constructor() {
    this.id = LoggerId.random()
    this.pTemp = 0
  }

  buildTempHight(value: number): LoggerBuilder {
    this.tempHigh = value
    return this
  }

  buildTempLow(value: number): LoggerBuilder {
    this.tempLow = value
    return this
  }

  buildWeightDepositHight(value: number): LoggerBuilder {
    this.weightDepositHight = value
    return this
  }

  buildWeightDepositLow(value: number): LoggerBuilder {
    this.weightDepositLow = value
    return this
  }

  build(): Logger {
    return new Logger(
      this.id,
      this.tempHigh,
      this.tempLow,
      this.weightDepositHight,
      this.weightDepositLow,
      this.pTemp
    )
  }
}
