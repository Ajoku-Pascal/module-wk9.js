const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.statusCode = 200;
    res.end('Welcome to the homepage!');
  } else if (req.url === '/about') {
    res.statusCode = 200;
    res.end('This is the About page. Learn more about us here.');
  } else if (req.url === '/contact') {
    res.statusCode = 200;
    res.end('Contact us at contact@example.com.');
  } else {
    res.statusCode = 404;
    res.end('404 Not Found');
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
