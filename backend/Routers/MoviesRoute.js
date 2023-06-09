import { Router } from 'express';
import { AddMovies, getAllMovies, getMovie } from '../App/Controllers/MoviesController.js';
const router = Router();
import multer from 'multer'



const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

let uploadImg = multer({ storage: storage });

router.post('/add',uploadImg.single('moviePic'),AddMovies)
router.get('/allmovies',getAllMovies)
router.get('/singlemovie/:id',getMovie)

export default router