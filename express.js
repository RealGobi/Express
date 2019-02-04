// impoterar och använder express
const express = require ('express');
const app = express();
const port = 3000;
// importerar
var router = require('./router.js');
var productsRoutes = require('./productRoutes.js');
// säger till att använda
app.use('/', router);
app.use('/products', productsRoutes);



//lyssnar på en port
app.listen(port, ()=>{
    console.log(`Server lyssnar på port: ${port}`)
});