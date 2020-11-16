import express, { Request, Response } from 'express'
import { Movie } from '../models/Movie'


const router = express.Router();

// GET request for all movies
router.get('/api/movies/:sort/:page/:limit', [], async (req: Request, res: Response) => {
    console.log("GET request all");
    console.log(req.params.sort);
    console.log("page: " + req.params.page);

    if (req.params.sort === '*') {
        // no sort
        console.log("no sort");
        try {
            Movie.find({})
                .limit(parseInt(req.params.limit))
                .skip(parseInt(req.params.limit) * parseInt(req.params.page))
                .then((movies) => {
                    res.send(movies)
                });
        } catch (error) {
            res.status(404).json({message: 'not found'})
            console.log('Could not get movies from DB');
        }
    }
    else {
        console.log("will sort");
        switch (req.params.sort) {
            case "Rating-high-low":
                try {
                    Movie.find({})
                        .sort({imdbRating: 'descending'})
                        .limit(parseInt(req.params.limit))
                        .skip(parseInt(req.params.limit) * parseInt(req.params.page))
                        .then((movies) => {
                            res.send(movies)
                        });
                } catch (error) {
                    res.status(404).json({message: 'not found'})
                    console.log('Could not get movies from DB');
                }
                break;
            case "Rating-low-high":
                try {
                    Movie.find({})
                        .sort({imdbRating: 'ascending'})
                        .limit(parseInt(req.params.limit))
                        .skip(parseInt(req.params.limit) * parseInt(req.params.page))
                        .then((movies) => {
                            res.send(movies)
                        });
                } catch (error) {
                    res.status(404).json({message: 'not found'})
                    console.log('Could not get movies from DB');
                }
                break;
            case "Year-new-old":
                try {
                    Movie.find({})
                        .sort({year: 'descending'})
                        .limit(parseInt(req.params.limit))
                        .skip(parseInt(req.params.limit) * parseInt(req.params.page))
                        .then((movies) => {
                            res.send(movies)
                        });
                } catch (error) {
                    res.status(404).json({message: 'not found'})
                    console.log('Could not get movies from DB');
                }
                break;
            case "Year-old-new":
                try {
                    Movie.find({})
                        .sort({year: 'ascending'})
                        .limit(parseInt(req.params.limit))
                        .skip(parseInt(req.params.limit) * parseInt(req.params.page))
                        .then((movies) => {
                            res.send(movies)
                        });
                } catch (error) {
                    res.status(404).json({message: 'not found'})
                    console.log('Could not get movies from DB');
                }
                break;
            default:
                break;
        }
    }
});

// GET request for getting a specific movie by id
router.get('/api/id/:id', [], async (req: Request, res: Response) => {
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
router.get('/api/movies/title/:title/:sort/:page/:limit', [], async (req: Request, res: Response) => {
    console.log("GET request by title");
    console.log(req.params.title);
    console.log(req.params.sort);
    console.log(req.params.page);

    if (req.params.sort === '*') {
        console.log("no sort");
        try {
            await Movie.find({
                    "title": {"$regex": req.params.title, "$options": "in"}
                }
            )
                .limit(parseInt(req.params.limit))
                .skip(parseInt(req.params.limit) * parseInt(req.params.page))
                .then(
                    movies => res.send(movies)
                )
        } catch (error) {
            res.status(404).json({message: 'not found'})
            console.log('No movie with title: ' + req.params.title.toString());
        }
    }
    else {
        console.log("will sort");
        switch (req.params.sort) {
            case "Rating-high-low":
                try {
                    await Movie.find({
                        "title": {"$regex": req.params.title, "$options": "in"}
                    })
                        .sort({imdbRating: 'descending'})
                        .limit(parseInt(req.params.limit))
                        .skip(parseInt(req.params.limit) * parseInt(req.params.page))
                        .then(
                            movies => res.send(movies)
                        )
                } catch (error) {
                    res.status(404).json({message: 'not found'})
                    console.log('No movie with title: ' + req.params.title.toString());
                }
                break;
            case "Rating-low-high":
                try {
                    Movie.find({
                        "title": {"$regex": req.params.title, "$options": "in"}
                    })
                        .sort({imdbRating: 'ascending'})
                        .limit(parseInt(req.params.limit))
                        .skip(parseInt(req.params.limit) * parseInt(req.params.page))
                        .then((movies) => {
                            res.send(movies)
                        });
                } catch (error) {
                    res.status(404).json({message: 'not found'})
                    console.log('Could not get movies from DB');
                }
                break;
            case "Year-new-old":
                try {
                    Movie.find({
                        "title": {"$regex": req.params.title, "$options": "in"}
                    })
                        .sort({year: 'descending'})
                        .limit(parseInt(req.params.limit))
                        .skip(parseInt(req.params.limit) * parseInt(req.params.page))
                        .then((movies) => {
                            res.send(movies)
                        });
                } catch (error) {
                    res.status(404).json({message: 'not found'})
                    console.log('Could not get movies from DB');
                }
                break;
            case "Year-old-new":
                try {
                    Movie.find({
                        "title": {"$regex": req.params.title, "$options": "in"}
                    })
                        .sort({year: 'ascending'})
                        .limit(parseInt(req.params.limit))
                        .skip(parseInt(req.params.limit) * parseInt(req.params.page))
                        .then((movies) => {
                            res.send(movies)
                        });
                } catch (error) {
                    res.status(404).json({message: 'not found'})
                    console.log('Could not get movies from DB');
                }
                break;
            default:
                break;
        }
    }
});

// GET request for getting a specific movie by genre + title
router.get('/api/movies/genre/:title/:genre/:sort/:page/:limit', [], async (req: Request, res: Response) => {
    console.log("GET request by title and genre");
    console.log(req.params.title);
    console.log(req.params.genre);
    console.log(req.params.sort);

    if (req.params.sort === '*') {
        // no sort
        console.log("no sort");
        if (req.params.title === '*') {
            try {
                await Movie.find({
                    "genres": req.params.genre
                })
                    .limit(parseInt(req.params.limit))
                    .skip(parseInt(req.params.limit) * parseInt(req.params.page))
                    .then(
                        movies => res.send(movies)
                    )
            }
            catch(error) {
                res.status(404).json({message: 'not found'})
                console.log('No movie with genre: ' + req.params.genre.toString());
            }
        }
        else {
            try {
                await Movie.find({
                    $and: [{"title": {$regex: req.params.title, $options: "i"}},
                        {"genres": req.params.genre}]
                })
                    .limit(parseInt(req.params.limit))
                    .skip(parseInt(req.params.limit) * parseInt(req.params.page))
                    .then(
                        movies => res.send(movies)
                    )
            } catch (error) {
                res.status(404).json({message: 'not found'})
                console.log('No movie with genre: ' + req.params.genre.toString());
            }
        }
    }
    else {
        console.log("will sort");
        switch (req.params.sort) {
            case "Rating-high-low":
                if (req.params.title === '*') {
                    try {
                        await Movie.find({
                            "genres": req.params.genre
                        })
                            .sort({imdbRating: 'descending'})
                            .limit(parseInt(req.params.limit))
                            .skip(parseInt(req.params.limit) * parseInt(req.params.page))
                            .then(
                                movies => res.send(movies)
                            )
                    }
                    catch(error) {
                        res.status(404).json({message: 'not found'})
                        console.log('No movie with genre: ' + req.params.genre.toString());
                    }
                }
                else {
                    try {
                        await Movie.find({
                            $and: [{"title": {$regex: req.params.title, $options: "i"}},
                                {"genres": req.params.genre}]
                        })
                            .sort({imdbRating: 'descending'})
                            .limit(parseInt(req.params.limit))
                            .skip(parseInt(req.params.limit) * parseInt(req.params.page))
                            .then(
                                movies => res.send(movies)
                            )
                    } catch (error) {
                        res.status(404).json({message: 'not found'})
                        console.log('No movie with genre: ' + req.params.genre.toString());
                    }
                }
                break;
            case "Rating-low-high":
                if (req.params.title === '*') {
                    try {
                        await Movie.find({
                            "genres": req.params.genre
                        })
                            .sort({imdbRating: 'ascending'})
                            .limit(parseInt(req.params.limit))
                            .skip(parseInt(req.params.limit) * parseInt(req.params.page))
                            .then(
                                movies => res.send(movies)
                            )
                    }
                    catch(error) {
                        res.status(404).json({message: 'not found'})
                        console.log('No movie with genre: ' + req.params.genre.toString());
                    }
                }
                else {
                    try {
                        await Movie.find({
                            $and: [{"title": {$regex: req.params.title, $options: "i"}},
                                {"genres": req.params.genre}]
                        })
                            .sort({imdbRating: 'ascending'})
                            .limit(parseInt(req.params.limit))
                            .skip(parseInt(req.params.limit) * parseInt(req.params.page))
                            .then(
                                movies => res.send(movies)
                            )
                    } catch (error) {
                        res.status(404).json({message: 'not found'})
                        console.log('No movie with genre: ' + req.params.genre.toString());
                    }
                }
                break;
            case "Year-new-old":
                if (req.params.title === '*') {
                    try {
                        await Movie.find({
                            "genres": req.params.genre
                        })
                            .sort({year: 'descending'})
                            .limit(parseInt(req.params.limit))
                            .skip(parseInt(req.params.limit) * parseInt(req.params.page))
                            .then(
                                movies => res.send(movies)
                            )
                    }
                    catch(error) {
                        res.status(404).json({message: 'not found'})
                        console.log('No movie with genre: ' + req.params.genre.toString());
                    }
                }
                else {
                    try {
                        await Movie.find({
                            $and: [{"title": {$regex: req.params.title, $options: "i"}},
                                {"genres": req.params.genre}]
                        })
                            .sort({year: 'descending'})
                            .limit(parseInt(req.params.limit))
                            .skip(parseInt(req.params.limit) * parseInt(req.params.page))
                            .then(
                                movies => res.send(movies)
                            )
                    } catch (error) {
                        res.status(404).json({message: 'not found'})
                        console.log('No movie with genre: ' + req.params.genre.toString());
                    }
                }
                break;
            case "Year-old-new":
                if (req.params.title === '*') {
                    try {
                        await Movie.find({
                            "genres": req.params.genre
                        })
                            .sort({year: 'ascending'})
                            .limit(parseInt(req.params.limit))
                            .skip(parseInt(req.params.limit) * parseInt(req.params.page))
                            .then(
                                movies => res.send(movies)
                            )
                    }
                    catch(error) {
                        res.status(404).json({message: 'not found'})
                        console.log('No movie with genre: ' + req.params.genre.toString());
                    }
                }
                else {
                    try {
                        await Movie.find({
                            $and: [{"title": {$regex: req.params.title, $options: "i"}},
                                {"genres": req.params.genre}]
                        })
                            .sort({year: 'ascending'})
                            .limit(parseInt(req.params.limit))
                            .skip(parseInt(req.params.limit) * parseInt(req.params.page))
                            .then(
                                movies => res.send(movies)
                            )
                    } catch (error) {
                        res.status(404).json({message: 'not found'})
                        console.log('No movie with genre: ' + req.params.genre.toString());
                    }
                }
                break;
            default:
                break;
        }
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

router.get('/api/movies/convert', [], async (req: Request, res: Response) => {
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


// PUT request to add user rating to movie in the DB
router.put('/api/user/:id/:rating', async (req: Request, res: Response) => {
    console.log("PUT request");
    try {
        await Movie.updateOne(
            {_id: req.params.id},
            {userRating: parseInt(req.params.rating)},
            {multi:true},
            function(err, numberAffected){
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