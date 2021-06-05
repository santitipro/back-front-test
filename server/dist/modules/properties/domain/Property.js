"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Property = void 0;
const AggregateRoot_1 = require("~/shared/domain/AggregateRoot");
class Property extends AggregateRoot_1.AggregateRoot {
    constructor(id, title, link, adddress, city, images) {
        super();
        this._id = id;
        this._title = title;
        this._link = link;
        this._address = adddress;
        this._city = city;
        this._images = images;
    }
    get id() {
        return this._id.value;
    }
    get title() {
        return this._title;
    }
    get link() {
        return this._link;
    }
    get address() {
        return this._address;
    }
    get city() {
        return this._city;
    }
    get images() {
        return this._images;
    }
    toPrimitives() {
        return {
            id: this._id,
            title: this._title,
        };
    }
}
exports.Property = Property;
//# sourceMappingURL=Property.js.map