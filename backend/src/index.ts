import express from 'express';
import mongoose from 'mongoose'
import { json } from 'body-parser';
import { movieRouter } from './routes/movie'
import bodyParser from "body-parser";

const app = express()
app.use(json())
app.use(movieRouter)
app.use(bodyParser.json())
// We use bodyParser to study POST requests in Postman

mongoose.connect('mongodb://it2810:it2810@it2810-19.idi.ntnu.no:27017/movies', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}, (error) => {
    console.log("error: " + error)
})

const connection = mongoose.connection

connection.once("open", function() {
    console.log("Connected to DB")
})


app.listen(3000, () => {
    console.log('Server is listening on port 3000')
})