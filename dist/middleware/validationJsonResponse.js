"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
function validationJsonResponse(type, skipMissingProperties = false) {
    let validationResponseArray = {};
    return (req, res, next) => {
        (0, class_validator_1.validate)((0, class_transformer_1.plainToClassFromExist)(type, req.body), { skipMissingProperties })
            .then((errors) => {
            if (errors.length > 0) {
                for (const [key, val] of Object.entries(errors)) {
                    validationResponseArray[val.property] = val.constraints;
                }
                next(res.status(400).json(validationResponseArray));
            }
            else {
                next();
            }
        });
    };
}
exports.default = validationJsonResponse;
//# sourceMappingURL=validationJsonResponse.js.map