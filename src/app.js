const { application } = require('express');
const express = require('express');
const path = require('path');
const app = express();

// Here we will use built in middleware

console.log(path.join(__dirname, '../dynamic'));


const staticPath = path.join(__dirname, '../dynamic')
 app.use(express.static(staticPath))
app.get('/', (req, res)=>{
res.send('hello for the express server');
});
const port = 8000;



app.listen(port, ()=>{
   console.log(`listening to the port ${port}`); 
})


// Here we will put all out site data in dynamic directory