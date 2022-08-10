import { RequestHandler } from 'express';
import { plainToClass, plainToClassFromExist } from 'class-transformer';
import { validate, ValidationError } from 'class-validator';


function validationJsonResponse(type: any, skipMissingProperties = false): RequestHandler {
  let validationResponseArray: { [id: string]: any; } = {}   
  return (req, res, next) => {
    validate(plainToClassFromExist(type, req.body), { skipMissingProperties })
    .then((errors: ValidationError[]) => {
      if (errors.length > 0) {
        for (const [key, val] of Object.entries(errors)) {
          validationResponseArray[val.property] = val.constraints;
        }
        next(res.status(400).json(validationResponseArray));
      } else {
        next();
      }
    });
  };
}

export default validationJsonResponse;