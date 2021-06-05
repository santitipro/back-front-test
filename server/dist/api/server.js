"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const app_1 = __importDefault(require("./app"));
app_1.default.listen(app_1.default.get('port'), () => {
    console.log(`App is running at http://localhost:${app_1.default.get('port')} in ${app_1.default.get('env')} mode`);
});
exports.default = app_1.default;
//# sourceMappingURL=server.js.map