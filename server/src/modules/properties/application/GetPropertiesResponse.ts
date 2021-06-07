import { Property } from '../domain/Property'

type PropertyDataResponse = {
  id: string
  title: string
  link: string
  address: string
  city: string
  image: string
}

export class GetPropertiesResponse {
  public properties: PropertyDataResponse[]

  constructor(properties: Property[]) {
    this.buildResponse(properties)
  }

  private buildResponse(properties: Property[]) {
    this.properties = properties.map((property) => ({
      id: property.id,
      title: property.title,
      link: property.link,
      address: property.address,
      city: property.city,
      image: property.images[0]
    }))
  }
}
