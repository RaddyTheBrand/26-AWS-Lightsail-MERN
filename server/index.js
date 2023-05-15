require('dotenv').config();
const cors = require('cors');
const express = require('express');
const connectDB = require('./db');
const Book = require('./models/Book');

const app = express();
const PORT = 8000; 

connectDB();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes 
app.get('/api/books', async (req, res) => {
  try {
    const item = await Book.find();
    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching books.' });
  }  
});


app.get('/', async (req, res) => {
  res.json("Hello Mate!");
});

app.get('*', (req, res) => {
  res.status(404).send('404');
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});




// {
//   "title":"The Great Gatsby",
//   "body":"Example description goes here."
// }
// {
//   "title":"The Hobbit",
//   "body":"Example description goes here."
// }
// {
//   "name":"The Lord of the Rings",
//   "body":"Example description goes here."
// }