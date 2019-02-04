// splitrat upp i olika filer, bytt ordet app => router
const express = require('express');
//notera stort R på router här
var router = express.Router();
 

// http://localhost:3000/
router.get('/', (req,res)=>{
    res.send('Hej');
});
// http://localhost:3000/about.html
router.get('/about', (req, res)=>{
    res.sendFile(__dirname + '/about.html');
});
// http://localhost:3000/json
router.get('/json', (req,res) => {
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

// här exporterar vi 

module.exports = router;