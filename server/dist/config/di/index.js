"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const inversify_1 = require("inversify");
const GetPropertiesUseCase_1 = require("~/modules/properties/application/GetPropertiesUseCase");
const GetPropertiesController_1 = require("~/api/controllers/properties/GetPropertiesController");
const NetworkPropertyRepository_1 = require("~/modules/properties/infrastructure/persistence/NetworkPropertyRepository");
const PropertyFactory_1 = require("~/modules/properties/domain/PropertyFactory");
const container = new inversify_1.Container();
// Factories
container.bind('PropertyFactory').to(PropertyFactory_1.PropertyFactory);
// Repositories
container
    .bind("PropertyRepository")
    .to(NetworkPropertyRepository_1.NetworkPropertyRespository);
// UseCases
container
    .bind("GetPropertiesUseCase")
    .to(GetPropertiesUseCase_1.GetPropertiesUseCase);
// Controllers
container
    .bind("GetPropertiesController")
    .to(GetPropertiesController_1.GetPropertiesController);
exports.default = container;
//# sourceMappingURL=index.js.map