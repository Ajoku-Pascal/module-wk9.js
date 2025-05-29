const express = require('express');
const app = express();

const users = [
  { id: '1', name: 'Ajoku', searches: ['apple', 'Bread'] },
  { id: '2', name: 'Pascal', searches: ['banana', 'Cake'] },
];

app.get('/handle/user/:id/search', (req, res) => {
  const userId = req.params.id;

  const user = users.find(u => u.id === userId);

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }


  res.json({
    userId: user.id,
    name: user.name,
    searches: user.searches,
  });
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
