"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Location = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const locationSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    ascii: {
        type: String,
        required: true
    },
    alternateName: {
        type: String,
        required: true
    },
    latitude: {
        type: String,
        required: true
    },
    longitude: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    tz: {
        type: String,
        required: true
    },
    population: {
        type: Number,
        required: true
    }
});
const Location = mongoose_1.default.model('Location', locationSchema);
exports.Location = Location;
locationSchema.statics.build = (attr) => {
    return new Location(attr);
};
//# sourceMappingURL=Location.js.map