"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Location_1 = require("../model/Location");
class LocationService {
    constructor() {
        this.location = Location_1.Location;
    }
    findAllLocation() {
        return __awaiter(this, void 0, void 0, function* () {
            const locations = yield this.location.find();
            return locations;
        });
    }
    createLocation(locationData) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.location.create(locationData);
            return user;
        });
    }
}
exports.default = LocationService;
//# sourceMappingURL=location.js.map