"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = void 0;
const di_1 = __importDefault(require("../../config/di"));
function register(app) {
    const controller = di_1.default.get("GetPropertiesController");
    app.get("/properties", (req, res) => controller.run(req, res));
}
exports.register = register;
//# sourceMappingURL=properties.routes.js.map