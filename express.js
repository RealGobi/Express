// impoterar och använder express
const express = require ('express');
const app = express();
const port = 3000;
const fs = require('fs');

// importerar
var router = require('./Routes/router.js');
var userRoutes = require('./Routes/userRoutes.js');
var productsRoutes = require('./Routes/productRoutes.js');

// middleware 
var time = function (req, res, next) {
     // tid precis nu, vilket tydligen inte är så lätt att hitta efter en timmes letande...
        var ts = new Date();
        console.log(ts.toLocaleTimeString());
        next();
}

var logVisits = function(req, res, next) {
    let input = new Date() + ' ' + req.path + '\n';
    fs.appendFile('accessLog', input, (err) => {
        if (err) throw err;

    });
    next();
}

app.use(logVisits);
app.use(time);


// säger till att använda
app.use(express.static(__dirname + '/public'));
app.use('/', router);
app.use('/users', userRoutes);
app.use('/products', productsRoutes);



//lyssnar på en port
app.listen(port, ()=>{
    console.log(`Servern lyssnar på port: ${port}`)
});