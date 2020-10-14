import express from 'express';
import mongoose from 'mongoose'
import { json } from 'body-parser';
import { movieRouter } from './routes/movie'

const app = express()
app.use(json())
app.use(movieRouter)

const uri = 'mongodb://myusername:mypassword@it2810-19.idi.ntnu.no/27017/test'
//const uri = 'mongodb://myusername:mypassword@it2810-19.idi.ntnu.no:27017/test/?authSource=it2810'

mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}, () => {
    console.log('connected to database')
})

app.listen(3000, () => {
    console.log('server is listening on port 3000')
})