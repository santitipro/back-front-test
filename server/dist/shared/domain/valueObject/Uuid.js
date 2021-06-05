"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Uuid = void 0;
const uuid_1 = require("uuid");
class Uuid {
    constructor(value) {
        this.value = value;
    }
    static random() {
        return new Uuid(uuid_1.v4());
    }
}
exports.Uuid = Uuid;
//# sourceMappingURL=Uuid.js.map