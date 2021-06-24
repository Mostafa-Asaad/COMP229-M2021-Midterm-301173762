/*Name: Mostafa Asaad

ID : 301173762

Course code: Comp229

Midterm test

github: github.com/Mostafa-Asaad/COMP229-M2021-Midterm-301173762

application link:  https://mostafa-asaad-midterm.herokuapp.com/   */

import mongoose from 'mongoose';
const Schema = mongoose.Schema; // Schema alias

// create a model class
const BookSchema = new Schema
({
    Title: String,
    Description: String,
    Price: Number,
    Author: String,
    Genre: String
},
{
  collection: "books"
});

const Model = mongoose.model('Book', BookSchema);
export default Model;
