import { injectable } from 'inversify'
import { Logger } from './Logger'
import { LoggerId } from './LoggerId'

type LoggerData = {
  id?: string
  tempHight: number
  tempLow: number
  weightDepositHight: number
  weightDepositLow: number
  pTemp: number
}

interface ILoggerFactory {
  create(data: LoggerData): Logger
}

@injectable()
export class PropertyFactory implements ILoggerFactory {
  create({
    id,
    tempHight,
    tempLow,
    weightDepositHight,
    weightDepositLow,
    pTemp
  }: LoggerData): Logger {
    const loggerId = id ? new LoggerId(id) : LoggerId.random()
    const property = new Logger(
      loggerId,
      tempHight,
      tempLow,
      weightDepositHight,
      weightDepositLow,
      pTemp
    )

    return property
  }
}
