const express = require('express');
const app = express();
const PORT = 3000;

// Sample list of books
const books = [
  { id: 1, title: "Things Fall Apart", author: "Chinua Achebe" },
  { id: 2, title: "Half of a Yellow Sun", author: "Chimamanda Ngozi Adichie" },
  { id: 3, title: "The Alchemist", author: "Paulo Coelho" },
];

// Route to return list of books
app.get('/books', (req, res) => {
  res.json(books);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});




[
  { "id": 1, "title": "Things Fall Apart", "author": "Chinua Achebe" },
  { "id": 2, "title": "Half of a Yellow Sun", "author": "Chimamanda Ngozi Adichie" },
  { "id": 3, "title": "The Alchemist", "author": "Paulo Coelho" }
]
