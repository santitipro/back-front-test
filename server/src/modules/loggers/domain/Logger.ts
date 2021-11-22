import { Expose, Transform, Type } from 'class-transformer'
import { AggregateRoot } from '~/shared/domain/AggregateRoot'
import { LoggerId } from './LoggerId'

export class Logger extends AggregateRoot {
  @Type(() => LoggerId)
  @Transform(({ value }) => new LoggerId(value))
  @Expose({ name: 'id' })
  private _id: LoggerId
  @Expose({ name: 'tempHight' })
  private _tempHight: number
  @Expose({ name: 'tempLow' })
  private _tempLow: number
  @Expose({ name: 'weightDepositHight' })
  private _weightDepositHight: number
  @Expose({ name: 'weightDepositLow' })
  private _weightDepositLow: number
  @Expose({ name: 'pTemp' })
  private _pTemp: number

  constructor(
    id: LoggerId,
    tempHight: number,
    tempLow: number,
    weightDepositHight: number,
    weightDepositLow: number,
    pTemp: number
  ) {
    super()
    this._id = id
    this._tempHight = tempHight
    this._tempLow = tempLow
    this._weightDepositHight = weightDepositHight
    this._weightDepositLow = weightDepositLow
    this._pTemp = pTemp
  }

  public get id(): string {
    return this._id.value
  }

  public get tempHight(): number {
    return this._tempHight
  }

  public get tempLow(): number {
    return this._tempLow
  }

  public get weightDepositHight(): number {
    return this._weightDepositHight
  }

  public get weightDepositLow(): number {
    return this._weightDepositLow
  }

  public get pTemp(): number {
    return this._pTemp
  }

  toPrimitives(): { [key: string]: any } {
    return {
      id: this.id,
      tempHight: this.tempHight,
      tempLow: this.tempLow,
      weightDepositHight: this.weightDepositHight,
      weightDepositLow: this.weightDepositLow,
      pTemp: this._pTemp
    }
  }
}
