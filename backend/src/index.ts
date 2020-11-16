import express from 'express';
import mongoose from 'mongoose'
import { json } from 'body-parser';
import { movieRouter } from './routes/movie'
import bodyParser from "body-parser";

const app = express()
let cors = require('cors')
app.use(cors());
app.use(json())
app.use(movieRouter)
app.use(bodyParser.json())
// We use bodyParser to study POST requests in Postman

mongoose.connect('mongodb://localhost/movies', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}, (error) => {
})

const connection = mongoose.connection

connection.once("open", function() {
    console.log("Connected to DB")
})


app.listen(3000, () => {
    console.log('Server is listening on port 3000')
})
