// splitrat upp i olika filer, bytt ordet app => router
const express = require('express');

//notera stort R på router här
var router = express.Router();
 
// http://localhost:3000/
router.get('/', (req,res)=>{
    res.send('Hej');
});

// http://localhost:3000/index.html
router.get('/index', (req, res)=>{
    res.sendFile(__dirname + '/index.html');
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

// om vi har flerspråkig sajt, kan man göra detta för att länka till olika sidor
router.get('/om-oss', (req, res) => {
    var options = { root: __dirname + '/se'};
    res.sendFile('om-oss.html', options), (err) => {
        if (err)
        console.error(err);
    };
});

// här exporterar vi 
module.exports = router;