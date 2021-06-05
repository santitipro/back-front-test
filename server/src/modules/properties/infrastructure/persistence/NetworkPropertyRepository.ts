import fetch from "node-fetch";
import { inject, injectable } from "inversify";
import { Property } from "../../domain/Property";
import { PropertyFactory } from "../../domain/PropertyFactory";
import { PropertyRepository } from "../../domain/PropertyRepository";

@injectable()
export class NetworkPropertyRespository implements PropertyRepository {
  private factory : PropertyFactory

  constructor(@inject('PropertyFactory') factory: PropertyFactory) {
    this.factory = factory;
  }


  async getAll(start: number, limit: number): Promise<Property[]> {
    const response = await (await fetch('http://feeds.spotahome.com/ads-housinganywhere.json')).json();

    return response.slice(start, limit).map(({ Address, City, Link, Description, Images }: any) => this.factory.create({
      title: Description,
      city: City,
      address: Address,
      link: Link,
      images: Images,
    }));

  }
}
