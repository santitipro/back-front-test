import "reflect-metadata";
import { Container } from "inversify";
import { GetPropertiesUseCase } from "~/modules/properties/application/GetPropertiesUseCase";
import { GetPropertiesController } from "~/api/controllers/properties/GetPropertiesController";
import { PropertyRepository } from "~/modules/properties/domain/PropertyRepository";
import { NetworkPropertyRespository } from "~/modules/properties/infrastructure/persistence/NetworkPropertyRepository";
import { PropertyFactory } from "~/modules/properties/domain/PropertyFactory";

const container = new Container();

// Factories
container.bind<PropertyFactory>('PropertyFactory').to(PropertyFactory)

// Repositories
container
  .bind<PropertyRepository>("PropertyRepository")
  .to(NetworkPropertyRespository);

// UseCases
container
  .bind<GetPropertiesUseCase>("GetPropertiesUseCase")
  .to(GetPropertiesUseCase);

// Controllers
container
  .bind<GetPropertiesController>("GetPropertiesController")
  .to(GetPropertiesController);

export default container;
