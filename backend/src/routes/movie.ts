import express, { Request, Response } from 'express'
import { Movie } from '../models/Movie'


const router = express.Router();

router.get('/test/:id', [], async (req: Request, res: Response) => {
    //const movie =
    try {
        await Movie.findById(req.params.id)
            .then(Movie => res.json(Movie));
    }
    catch(error) {
        res.status(404).json({message: 'not found'})
        console.log('No movie with id: ' + req.params.id.toString());
    }
    //return res.status(200).send(movie);
})

router.post('/test', async (req, res) => {
    const { title, release_year, director, genre, imdb_id } = req.body;
    const movie = Movie.build({
        title: 'Test',
        release_year: 2012,
        director: 'Nolan',
        genre: 'Crime',
        imdb_id: 'tt090909'
    })
    try {
        await movie.save();
        console.log("saved to db")
        return res.status(201).send(movie);
    }
    catch(error) {
        console.log("Couldn't connect to DB");
        return res.status(404)
    }
})


export { router as movieRouter }