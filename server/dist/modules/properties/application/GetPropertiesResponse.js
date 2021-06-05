"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetPropertiesResponse = void 0;
class GetPropertiesResponse {
    constructor(properties) {
        this.buildResponse(properties);
    }
    buildResponse(properties) {
        this.properties = properties.map(property => ({
            id: property.id,
            title: property.title,
            link: property.link,
            address: property.address,
            city: property.city,
            image: property.images[0]
        }));
    }
}
exports.GetPropertiesResponse = GetPropertiesResponse;
//# sourceMappingURL=GetPropertiesResponse.js.map