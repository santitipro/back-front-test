import { injectable } from 'inversify'
import { Property } from './Property'
import { PropertyId } from './PropertyId'

type PropertyData = {
  id?: string
  title: string
  link: string
  address: string
  city: string
  images: Array<string>
}

@injectable()
export class PropertyFactory {
  create({ id, title, link, address, city, images }: PropertyData): Property {
    const propertyId = id ? new PropertyId(id) : PropertyId.random()
    const property = new Property(propertyId, title, link, address, city, images)

    return property
  }
}
