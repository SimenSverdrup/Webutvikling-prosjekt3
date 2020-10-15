import express from 'express';
import mongoose from 'mongoose'
import { json } from 'body-parser';
import { movieRouter } from './routes/movie'

const app = express()
app.use(json())
app.use(movieRouter)

//const uri = 'mongodb://admin:admin@it2810-19.idi.ntnu.no:27017/admin'
const uri = 'mongodb://admin:admin@it2810-19.idi.ntnu.no:27017/admin/?authSource=admin'
//mongodb://it2810:it2810@it2810-19.idi.ntnu.no:27017/?authSource=it2810

mongoose.connect('mongodb://admin:admin@it2810-19.idi.ntnu.no:27017/admin', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}, (error) => {
    console.log(error)
})

const connection = mongoose.connection

connection.once("open", function() {
    console.log("Connected to DB")
})


app.listen(3000, () => {
    console.log('Server is listening on port 3000')
})