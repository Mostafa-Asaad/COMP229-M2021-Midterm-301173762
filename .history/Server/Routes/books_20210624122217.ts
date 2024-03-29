// modules required for routing
import express from 'express';
const router = express.Router();
export default router;

// define the book model
import books from '../Models/books';

/* GET books List page. READ */
router.get('/', (req, res, next) => 
{
  // find all books in the books collection
  books.find( (err, books) => {
    if (err) {
      return console.error(err);
    }
    else {
      res.render('books/index', {
        title: 'Books',
        page: 'books',
        books: books
      });
    }
  });

});

//  GET the Book Details page in order to add a new Book
router.get('/add', (req, res, next) => {

    // show the details view
    res.render('books/details', { title: 'Add', page: 'add', books: ''});

});

// POST process the Book Details page and create a new Book - CREATE
router.post('/add', (req, res, next) => {

    // instantiate a new Contact
  let newBook = new books
  ({
    "Title": req.body.Title,
    "Price": req.body.Price,
    "Author": req.body.Author,
    "Genre": req.body.Genre
  });

  // db.contact.insert({contact data is here...})

  books.create(newBook, (err) => {
    if(err)
    {
      console.error(err);
      res.end(err);
    }

    res.redirect('/books');
  });

});

// GET the Book Details page in order to edit an existing Book
router.get('/:id', (req, res, next) => {

    /*****************
     * ADD CODE HERE *
     *****************/
});

// POST - process the information passed from the details form and update the document
router.post('/:id', (req, res, next) => {

    /*****************
     * ADD CODE HERE *
     *****************/

});

// GET - process the delete by user id
router.get('/delete/:id', (req, res, next) => {

    /*****************
     * ADD CODE HERE *
     *****************/
});


//module.exports = router;
