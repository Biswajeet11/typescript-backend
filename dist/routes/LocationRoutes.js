"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const LocationController_1 = __importDefault(require("../controller/LocationController"));
const validationJsonResponse_1 = __importDefault(require("../middleware/validationJsonResponse"));
class LocationRoute {
    constructor() {
        this.path = '/locations';
        this.router = (0, express_1.Router)();
        this.locationController = new LocationController_1.default();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get(`${this.path}`, this.locationController.getLocations);
        this.router.post(`${this.path}`, (0, validationJsonResponse_1.default)(LocationDto), this.locationController.createLocation);
    }
}
exports.default = LocationRoute;
//# sourceMappingURL=LocationRoutes.js.map