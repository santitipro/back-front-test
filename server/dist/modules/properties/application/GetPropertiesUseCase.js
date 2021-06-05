"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetPropertiesUseCase = void 0;
const inversify_1 = require("inversify");
const GetPropertiesResponse_1 = require("./GetPropertiesResponse");
let GetPropertiesUseCase = class GetPropertiesUseCase {
    constructor(propertyRepository) {
        this.repository = propertyRepository;
    }
    async execute(request) {
        const properties = await this.repository.getAll(request.start, request.limit);
        return new GetPropertiesResponse_1.GetPropertiesResponse(properties);
    }
};
GetPropertiesUseCase = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject('PropertyRepository')),
    __metadata("design:paramtypes", [Object])
], GetPropertiesUseCase);
exports.GetPropertiesUseCase = GetPropertiesUseCase;
//# sourceMappingURL=GetPropertiesUseCase.js.map