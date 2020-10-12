import express, { Request, Response } from 'express'
import { Movie } from '../models/Movie'


const router = express.Router();

router.get('/api/movie', [], async (req: Request, res: Response) => {
    const movie = await Movie.find({})
    return res.status(200).send(movie);
})

router.post('/api/movie', async (req, res) => {
    const { title, release_year, director, genre, imdb_id } = req.body;
    const movie = Movie.build({
        title: 'Test',
        release_year: 2012,
        director: 'Nolan',
        genre: 'Crime',
        imdb_id: 'tt090909'
    })

    await movie.save();
    console.log("saved to db")
    return res.status(201).send(movie);
})


export { router as movieRouter }