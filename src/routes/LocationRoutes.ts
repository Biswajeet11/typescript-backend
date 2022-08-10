import { Router } from 'express';
import LocationController from '../controller/LocationController';
import IRoute from '../interfaces/IRoute';
// import validationJsonResponse from '../middleware/validationJsonResponse';

class LocationRoute implements IRoute {
  public path = '/locations';
  public router = Router();
  public locationController = new LocationController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.locationController.getLocations);
    this.router.post(`${this.path}`,  this.locationController.createLocation);
  }
}

export default LocationRoute;