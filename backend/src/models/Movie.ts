import mongoose from 'mongoose';


interface IMovie {
    title: string;
    release_year: number;
    director: string;
    genre: string;
    imdb_id: string;
}

interface movieModelInterface extends mongoose.Model<movieDoc> {
    build(attr: IMovie): movieDoc
}

interface movieDoc extends mongoose.Document {
    title: string;
    release_year: number;
    director: string;
    genre: string;
    imdb_id: string;
}

const movieSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        release_year: {
            type: Number
        },
        director: {
            type: String
        },
        genre: {
            type: String
        },
        imdb_id: {
            type: String
        }
    },
{ collection: 'movies'}
);

movieSchema.statics.build = (attr: IMovie) => {
    return new Movie(attr);
}

const Movie = mongoose.model<movieDoc, movieModelInterface>('Movie', movieSchema);

export { Movie };