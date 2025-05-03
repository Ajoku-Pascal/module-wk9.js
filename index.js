const http = require('http');
const server = http.createServer(function(request, require){

    response.statusCode = 200;
    response.setHeader = ('Content-Type', 'text/plain');
    response.end ( 'Welcome to My Server!');

});
 const Port = 3000;

 server.listen(Port, ()=> {
    console.log(`Server is running at http://localhost:${PORT}`);

 });