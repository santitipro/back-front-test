"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerRoutes = void 0;
const di_1 = __importDefault(require("~/config/di"));
function registerRoutes(app) {
    // Separate this in routes files
    const controller = di_1.default.get("GetPropertiesController");
    app.get("/properties", (req, res) => controller.run(req, res));
}
exports.registerRoutes = registerRoutes;
//# sourceMappingURL=index.js.map