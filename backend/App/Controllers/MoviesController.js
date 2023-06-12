import MoviesModel from '../Models/MoviesModel.js'

// Add movies
const AddMovies = async(req,res)=>{
    const {name,rating,releaseDate}=req.body;
    if(!name || !rating || !releaseDate){
        res.status(400).send({status:'error',message:"All Fields are required (name,rating,releaseDate)"})
    }
    try {
        const newMovie = new MoviesModel({name,rating,releaseDate,moviePic: req.file.path,});
          const savedMovie = await newMovie.save();
          return res.status(200).send({
            movie: {
              id: newMovie._id,
              name: newMovie.name,
              releaseDate:newMovie.releaseDate,
              ratinng:newMovie.rating,
            },
          });
    } catch (error) {
        console.log(error);
        res.status(400).send({status:error,message:"something went wrong"})
    }
}
// get All Movies
const getAllMovies = async (req, res) => {
    try {
      const list = await MoviesModel.find();
      if (!list) {
        res
          .status(404)
          .send({status:404,success:false,message: "movieList not found" });
      } else {
        res.status(200).send({status:200,success:true,message:"All movie List", list });
      }
    } catch (error) {
      console.log(error);
      res.status(500).send({status:500,success:false, message:"Something went wrong!" });
    }
  };
  
  // get movie by id
  const getMovie = async(req,res)=>{
    const { id} = req.params;
    MoviesModel.findById(id).then(oneMovie => {
        res.status(200).json({oneMovie});
      }).catch(err => {
        console.log(err);
        res.status(500).json({status:500,success:false, message:"Something went wrong!"});
      });
  }

export {AddMovies,getAllMovies,getMovie}
