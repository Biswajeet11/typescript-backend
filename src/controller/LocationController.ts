import { NextFunction, Response, Request } from "express";
import { ILocation } from "../interfaces/ILocation";
import LocationService from "../services/LocationService";

class LocationController {

    public locationService = new LocationService();

    public getLocations = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const findAllLocations: ILocation[] = await this.locationService.findAllLocation();
            res.status(200).json({data: findAllLocations});
        } catch (error) {
            next(error);
        }
    }

    public createLocation = async (req: Request, res: Response, next: NextFunction) => {
        const locationData: ILocation = req.body;
    
        try {
          const createLocationData: ILocation = await this.locationService.createLocation(locationData);
          res.status(201).json({ data: createLocationData });
        } catch (error) {
          next(error);
        }
      }
}

export default LocationController;