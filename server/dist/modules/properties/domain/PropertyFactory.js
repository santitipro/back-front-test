"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertyFactory = void 0;
const inversify_1 = require("inversify");
const Property_1 = require("./Property");
const PropertyId_1 = require("./PropertyId");
let PropertyFactory = class PropertyFactory {
    create({ id, title, link, address, city, images, }) {
        const propertyId = id ? new PropertyId_1.PropertyId(id) : PropertyId_1.PropertyId.random();
        const property = new Property_1.Property(propertyId, title, link, address, city, images);
        return property;
    }
};
PropertyFactory = __decorate([
    inversify_1.injectable()
], PropertyFactory);
exports.PropertyFactory = PropertyFactory;
//# sourceMappingURL=PropertyFactory.js.map