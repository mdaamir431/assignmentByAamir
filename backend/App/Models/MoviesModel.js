import mongoose from 'mongoose'

const MoviesSchema = new mongoose.Schema({
name:{type:String},
rating:{type:String},
moviePic:{type:String},
releaseDate:{type:String}
},{timestamps:true})

export default mongoose.model('movies',MoviesSchema)