/*Name: Mostafa Asaad

ID : 301173762

Course code: Comp229

Midterm test

github: github.com/Mostafa-Asaad/COMP229-M2021-Midterm-301173762

application link:  https://mostafa-asaad-midterm.herokuapp.com/   */


// modules required for routing
import express from 'express';
const router = express.Router();
export default router;

import mongoose from 'mongoose';

// define the book model
import book from '../Models/books';

/* GET home page. wildcard */
router.get('/', (req, res, next) => {
  res.render('content/index', {
    title: 'Home',
    page: 'home',
    books: ''
   });
});

//module.exports = router;
