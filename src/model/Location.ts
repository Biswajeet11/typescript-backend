import mongoose, { Model, Document } from 'mongoose';
import { ILocation } from '../interfaces/ILocation';

const Schema = mongoose.Schema;



interface LocationModelInterface extends Model<LocationDocument> {
    build(attr: ILocation): LocationDocument
}

interface LocationDocument extends Document {
    name: string,
    ascii: string,
    alternateName: string,
    latitude: string,
    longitude: string,
    country: string;
    tz: string,
    population: number,
}



const locationSchema = new Schema({
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


const Location = mongoose.model<LocationDocument, LocationModelInterface>('Location', locationSchema);

locationSchema.statics.build = (attr: ILocation) => {
    return new Location(attr);
}

export { Location };