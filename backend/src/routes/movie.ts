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

// GET request for getting a specific movie by title
router.get('/api/movies/title/:title', [], async (req: Request, res: Response) => {
    console.log("GET request by title");
    console.log(req.params.title);
    try {
        await Movie.find({
                "title": { "$regex": req.params.title, "$options": "in" }
            }
        )
            .then(
                movies => res.send(movies)
            )
    }
    catch(error) {
        res.status(404).json({message: 'not found'})
        console.log('No movie with title: ' + req.params.title.toString());
    }
});

// GET request for getting a specific movie by genre
router.get('/api/movies/genre/:genre', [], async (req: Request, res: Response) => {
    console.log("GET request by genre");
    console.log(req.params.genre);
    try {
        await Movie.find({
                "genre": { "$regex": req.params.genre, "$options": "in" }
            }
        )
            .then(
                movies => res.send(movies)
            )
    }
    catch(error) {
        res.status(404).json({message: 'not found'})
        console.log('No movie with genre: ' + req.params.genre.toString());
    }
});

// GET request for getting a specific movie by filtering a specific year
router.get('/api/movies/year/equal/:year', [], async (req: Request, res: Response) => {
    console.log("GET request by year");
    console.log(req.params.year);
    try {
        await Movie.find(
            { year: {$eq: parseInt(req.params.year)} }
        )
            .then(
                movies => res.send(movies)
            )
    }
    catch(error) {
        res.status(404).json({message: 'not found'})
        console.log('No movie with year: ' + req.params.year.toString());
    }
});

// GET request for getting a specific movie by filtering everything greater than or equal to a specific year
router.get('/api/movies/year/gte/:year', [], async (req: Request, res: Response) => {
    console.log("GET request by GTE year");
    console.log(req.params.year);
    try {
        await Movie.find(
            { year: {$gte: parseInt(req.params.year)} }
        )
            .then(
                movies => res.send(movies)
            )
    }
    catch(error) {
        res.status(404).json({message: 'not found'})
        console.log('No movie with year greater than or equal to: ' + req.params.year.toString());
    }
});

// GET request for getting a specific movie by filtering everything lesser than or equal to a specific year
router.get('/api/movies/year/lte/:year', [], async (req: Request, res: Response) => {
    console.log("GET request by LTE year");
    console.log(req.params.year);
    try {
        await Movie.find(
            { year: {$lte: parseInt(req.params.year)} }
        )
            .then(
                movies => res.send(movies)
            )
    }
    catch(error) {
        res.status(404).json({message: 'not found'})
        console.log('No movie with year lesser than or equal to: ' + req.params.year.toString());
    }
});

router.get('/api/convert', [], async (req: Request, res: Response) => {
    console.log("Convert");
    try {
        await Movie.find(
            { $cond: {
                if: { $isNumber: "$year" },
                    then: "$year",
                else: {
                    $convert: {
                            input: "$year",
                            to: "int",
                        }
                }
            }
    })
    }
    catch(error) {
        res.status(404).json({message: 'not found'})
        console.log("Could not convert");
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