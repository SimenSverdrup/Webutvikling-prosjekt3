import mongoose from 'mongoose';


interface IMovie {
    title: string;
    year: number;
    genres: string[];
    storyline: string;
    posterurl: string;
    imdbRating: number;
    actors: string[];
    rating: number;
}

interface movieModelInterface extends mongoose.Model<movieDoc> {
    build(attr: IMovie): movieDoc
}

interface movieDoc extends mongoose.Document {
    title: string;
    year: number;
    genres: string[];
    storyline: string;
    posterurl: string;
    imdbRating: number;
    actors: string[];
    rating: number;
}

const movieSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, 'Title field is required']
        },
        year: {
            type: Number
        },
        genres: {
            type: [String, String, String]
        },
        storyline: {
            type: String
        },
        posterurl: {
            type: String
        },
        imdbRating: {
            type: Number
        },
        actors: {
            type: [String, String, String]
        },
        rating: {
            type: Number
        }
    },
{ collection: 'movies'}
);

movieSchema.statics.build = (attr: IMovie) => {
    return new Movie(attr);
}

const Movie = mongoose.model<movieDoc, movieModelInterface>('Movie', movieSchema);

export { Movie };