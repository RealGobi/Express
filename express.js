const express = require ('express');
const app = express();
const port = 3000;
// http://localhost:3000/
app.get('/', (req,res)=>{
    res.send('hej');
});
// http://localhost:3000/about.html
app.get('/about', (req, res)=>{
    res.sendFile(__dirname + '/about.html');
});
// http://localhost:3000/  + dynamsik adress
app.get('/products/:productID', (req, res) => {
    res.send('Här kommer info om produkt: ' + req.params.productID);
});
// http://localhost:3000/json
app.get('/json', (req,res) => {
    res.json (
        [
            {
                user: 'jimmy',
                age: 32
            },
            {
                user: 'hayley',
                age:2
            }
        ]
    )
});

// http://localhost:3000/products?category=2345 query
app.get('/products', (req, res) => {
    res.send('Här kommer info från queryn: ' + req.query.category)
});
// http://localhost:3000/ + felstavning.
app.get('*', (req, res) => {
    res.send('404');
});

app.listen(port, ()=>{
    console.log(`Server lyssnar på port: ${port}`)
});