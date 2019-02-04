// impoterar och använder express
const express = require ('express');
const app = express();
const port = 3000;
// importerar
var router = require('./router.js');

// säger till att använda
app.use('/', router);

//lyssnar på en port
app.listen(port, ()=>{
    console.log(`Server lyssnar på port: ${port}`)
});