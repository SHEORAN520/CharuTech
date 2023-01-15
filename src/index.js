const path = require('path');
const express = require('express');

const app = express();

// console.log(__dirname);
console.log(path.join(__dirname, '../dynamic'))


const staticPath = path.join(__dirname, '../dynamic')
// The app. use() method mounts or puts the specified middleware functions at the specified path. This middleware function will be executed only when the base of the requested path matches the defined path
app.use(express.static(staticPath));

app.get('/', (req, resp)=>{
resp.send('Hello this is my first express app')
})
app.get('/about', (req, resp)=>{
resp.send('Hello this is about page of our site')
})

app.listen(8000, ()=>{
    console.log('Listening at port 8000');
})
// The call function has two parameters, request(req) and response(res).
//The request object(req) represents the http request and has properties for the request query string,
// parameters, body, HTTP headers, etc.
// Similarly respose object represents the http response
// that the express app sends when it receives an http request.
