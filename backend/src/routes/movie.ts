import express, { Request, Response } from 'express'
import { Movie } from '../models/Movie'


const router = express.Router();

// GET request for all movies
router.get('/api/movies/', [], async (req: Request, res: Response) => {
    console.log("GET request all");
    try {
        Movie.find({})
            .then((movies) => {
                res.send(movies)
            });
    }
    catch(error) {
        res.status(404).json({message: 'not found'})
        console.log('Could not get movies from DB');
    }
});

// GET request for getting a specific movie by id
router.get('/api/movies/:id', [], async (req: Request, res: Response) => {
    console.log("GET request by id");
    console.log(req.params.id);
    try {
        await Movie.findById(req.params.id)
            .then(
                movie => res.send(movie)
            )
    }
    catch(error) {
        res.status(404).json({message: 'not found'})
        console.log('No movie with id: ' + req.params.id.toString());
    }
});

// PUT request to add user review to movie in the DB
router.put('/api/movies/:id', async (req: Request, res: Response) => {
    console.log("PUT request");
    try {
        await Movie.findByIdAndUpdate(req.params.id, req.body).then(
            () => {
                Movie.findOne({_id: req.params.id})
                    .then(
                        movie => res.send(movie)
                    )
            });
    }
    catch(error) {
        res.status(404).json({message: 'not found'})
        console.log('No movie with id: ' + req.params.id.toString());
    }
});

// (POST request to add a new movie)
/*
router.post('/api/movies/', async (req: Request, res: Response) => {
    console.log("POST request:");
    console.log(req.body);
    const { title, genre, description, director, release_year, runtime, imdb_rating, user_rating } = req.body;
    const movie = Movie.build({
        title: title,
    })
    try {
        await movie.save();
        console.log("Saved to DB")
        return res.status(201).send(movie);
    }
    catch(error) {
        console.log("Couldn't connect to DB");
        return res.status(404)
    }
})
*/


export { router as movieRouter }