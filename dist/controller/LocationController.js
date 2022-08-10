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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const location_1 = __importDefault(require("../services/location"));
class LocationController {
    constructor() {
        this.locationService = new location_1.default();
        this.getLocations = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const findAllLocations = yield this.locationService.findAllLocation();
                res.status(200).json({ data: findAllLocations });
            }
            catch (error) {
                next(error);
            }
        });
        this.createLocation = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const locationData = req.body;
            try {
                const createLocationData = yield this.locationService.createLocation(locationData);
                res.status(201).json({ data: createLocationData });
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.default = LocationController;
//# sourceMappingURL=LocationController.js.map