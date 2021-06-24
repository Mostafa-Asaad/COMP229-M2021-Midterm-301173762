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

    // instantiate a new book
  let newBook = new books
  ({
    "Title": req.body.title,
    "Price": req.body.price,
    "Author": req.body.author,
    "Genre": req.body.genre
  });

  // db.books.insert({book data is here...})

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

  let id = req.params.id;

  // pass the id to the db

  // db.book.find({"_id": id})

  books.findById(id, {}, {}, (err, bookItemToEdit) => 
  {
     // if(err)
     // {
     //     console.error(err);
     //     res.end(err);
     // }

      // show the edit view
      res.render('books/details', { title: 'Edit', page: 'edit', books: bookItemToEdit});
  });
});

// POST - process the information passed from the details form and update the document
router.post('/:id', (req, res, next) => {

  let id = req.params.id;

  // instantiate a new book Item
  let updatedBookItem = new books
  ({
    "_id": id,
    "Title": req.body.title,
    "Price": req.body.price,
    "Author": req.body.author,
    "Genre": req.body.genre
    
  });

  // find the book item via db.books.update({"_id":id}) and then update
  books.updateOne({_id: id}, updatedBookItem, {}, (err) =>{
   // if(err)
   // {
   //   console.error(err);
  //    res.end(err);
  //  }

    res.redirect('/books');
  });

});

// GET - process the delete by user id
router.get('/delete/:id', (req, res, next) => {

  let id = req.params.id;

  // db.books.remove({"_id: id"})
  books.remove({_id: id}, (err) => {
    if(err)
    {
      console.error(err);
      res.end(err);
    }

    res.redirect('/books');
  });
});


//module.exports = router;
