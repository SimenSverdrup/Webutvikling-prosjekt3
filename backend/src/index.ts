import express from 'express';
import mongoose from 'mongoose'
import { json } from 'body-parser';
import { movieRouter } from './routes/movie'

const app = express()
app.use(json())
app.use(movieRouter)

const uri = 'mongodb://admin:admin@it2810-19.idi.ntnu.no:27017/admin'
//const uri = 'mongodb://admin:admin@it2810-19.idi.ntnu.no:27017/admin/?authSource=it2810'
//mongodb://it2810:it2810@it2810-19.idi.ntnu.no:27017/?authSource=it2810

mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}, (error) => {
    console.log(error)
})

app.listen(3000, () => {
    console.log('server is listening on port 3000')
})