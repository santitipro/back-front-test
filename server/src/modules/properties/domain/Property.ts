import { AggregateRoot } from '~/shared/domain/AggregateRoot'
import { PropertyId } from './PropertyId'

export class Property extends AggregateRoot {
  private _id: PropertyId
  private _title: string
  private _link: string
  private _address: string
  private _city: string
  private _images: Array<string>

  constructor(
    id: PropertyId,
    title: string,
    link: string,
    adddress: string,
    city: string,
    images: Array<string>
  ) {
    super()
    this._id = id
    this._title = title
    this._link = link
    this._address = adddress
    this._city = city
    this._images = images
  }

  public get id(): string {
    return this._id.value
  }

  public get title(): string {
    return this._title
  }

  public get link(): string {
    return this._link
  }

  public get address(): string {
    return this._address
  }

  public get city(): string {
    return this._city
  }

  public get images(): Array<string> {
    return this._images
  }

  toPrimitives(): { [key: string]: any } {
    return {
      id: this._id,
      title: this._title
    }
  }
}
