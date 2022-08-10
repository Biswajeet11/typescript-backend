import { ILocation } from "../interfaces/ILocation";
import { Location } from "../model/Location";

class LocationService {
    public location = Location;

    public async findAllLocation(): Promise<ILocation[]> {
        const locations = await this.location.find();
        return locations;
    }

    public async createLocation(locationData: ILocation): Promise<ILocation> {
        const location = await this.location.create(locationData);

        return location;
    }
}

export default LocationService;