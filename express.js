// impoterar och använder express
const express = require ('express');
const app = express();
const port = 3000;
const fs = require('fs');

// importerar
var router = require('./router.js');
var productsRoutes = require('./productRoutes.js');

// middleware 

var logVisits = function(req, res, next) {
    let input = new Date() + ' ' + req.path + '\n';
    fs.appendFile('accessLog', input, (err) => {
        if (err) throw err;
    });
    next();
}

app.use(logVisits);


// säger till att använda
app.use(express.static(__dirname + '/public'));
app.use('/', router);
app.use('/products', productsRoutes);



//lyssnar på en port
app.listen(port, ()=>{
    console.log(`Servern lyssnar på port: ${port}`)
});