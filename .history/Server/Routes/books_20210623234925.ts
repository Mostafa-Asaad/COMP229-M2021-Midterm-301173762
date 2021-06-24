// modules required for routing
import express from 'express';
const router = express.Router();
export default router;

// define the book model
import book from '../Models/books';

/* GET books List page. READ */
router.get('/', (req, res, next) => 
{
  // find all books in the books collection
  book.find( (err, books) => {
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
    res.render('books/details', { title: 'Add', page: 'add', book: ''});

});

// POST process the Book Details page and create a new Book - CREATE
router.post('/add', (req, res, next) => {

    // instantiate a new book
  let newBook = new book
  ({
    "Title": req.body.Title,
    "Author": req.body.Author,
    "Description": req.body.Description,
    "Genre": req.body.Genre,
    "Price": req.body.Price
  });

  // db.book.insert({book data is here...})

  book.create(newBook, (err) => {
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
   book.findById(id, {}, {}, (err, bookItemToEdit) =>
   {
       if(err)
       {
           console.error(err);
           res.end(err);
       }

       // show the edit view
       res.render('index', {title:'Edit', page: 'edit', book: bookItemToEdit});
   });
});

// POST - process the information passed from the details form and update the document
router.post('/:id', (req, res, next) => {

  let id = req.params.id;

  // instantiate a new Contact Item
  let updatedBookItem = new book
  ({
    "_id": id,
    "Title": req.body.Title,
    "Author": req.body.Author,
    "Description": req.body.Description,
    "Genre": req.body.Genre,
    "Price": req.body.Price
    
  });

  // find the clothing item via db.clothing.update({"_id":id}) and then update
  book.updateOne({_id: id}, updatedBookItem, {}, (err) =>{
    if(err)
    {
      console.error(err);
      res.end(err);
    }

    res.redirect('/books');
  });

});

// GET - process the delete by user id
router.get('/delete/:id', (req, res, next) => {

  let id = req.params.id;

  // db.contact.remove({"_id: id"})
  book.remove({_id: id}, (err) => {
    if(err)
    {
      console.error(err);
      res.end(err);
    }

    res.redirect('/books');
  });
});


//module.exports = router;
