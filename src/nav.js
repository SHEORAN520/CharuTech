// wwww.thapa.com - welcome to my home page
// /about - welcome to my about page
// /contact - welcome to my contact page 
// /temp - welcome to my temp page

const express = require('express');
const app = express();
const port = 3000;

app.get('/',(req, res)=>{
    res.send('Hello this is my Home page')
});
app.get('/about',(req, res)=>{
    res.status(200).send('Hello this is my About page')
});
// app.get('/contact',(req, res)=>{
//     // res.send('Hello this is my Contact page')
//     res.send([{
//         name:"Narender",
//         age: 32,
//         status:"Married"
//         // express will send array and object resp in json format automatically
//     },
//     {
//         name:"Jyoti",
//         age: 27,
//         status:"Married"}

//         // Here we can put any no of object as array of an object
// ])
// });
app.get('/contact',(req, res)=>{
    // instead of send we can also use res.json()
    res.json([{
        name:"Narender",
        age: 32,
        status:"Married"
        // express will send array and object resp in json format automatically
    },
    {
        name:"Jyoti",
        age: 27,
        status:"Married"}

        // Here we can put any no of object as array of an object
])
});
app.get('/temp',(req, res)=>{
    // for sending multiple line resp we will use res.write and then end the resp using res.send(). 
    // res.send() in express is same as res.end() of node js
    res.write('<h1>Hello this is my Temp page first</h1>')
    res.write('<h1>Hello this is my Temp page again</h1>')
    res.send();
});

app.listen(port, ()=>{
    console.log(`listening to port no ${port}`);
})