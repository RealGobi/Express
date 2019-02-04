// splitrat upp i olika filer, bytt ordet app => router
const express = require('express');
//notera stort R på router här
var router = express.Router();

// http://localhost:3000/  + dynamsik adress
router.get('/', (req, res) => {
    res.send('Products');
});

// http://localhost:3000/  + dynamsik adress
router.get('/:productID', (req, res) => {
    res.send('Här kommer info om produkt: ' + req.params.productID);
});

// http://localhost:3000/ + felstavning.
router.get('*', (req, res) => {
    res.sendStatus(404);
    res.send('404');
});
// här exporterar vi 
module.exports = router;