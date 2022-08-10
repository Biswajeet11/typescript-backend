"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.Promise = global.Promise;
const connect = () => {
    mongoose_1.default.connect('mongodb://0.0.0.0:27017/nearby')
        .then(() => {
        return console.log(`connected to db`);
    })
        .catch(error => {
        console.log("Error connecting to database: ", error);
        return process.exit(1);
    });
};
// async () => {
//     try{
//         console.log(`connected to db`)
//     } catch(error){
//         console.log(error);
//     }
// }
// .then(() => { console.log(`connected to db`) })
// .catch(err => console.log(err))
connect();
exports.default = mongoose_1.default;
//# sourceMappingURL=db.js.map