const router = require('express').Router();
let got = require('got');

router.get('', (req, res) => {
    try{
        got('https://swapi.co/api/films')
            .then(function(response) {
                rowData = JSON.parse(response.body);
                res.send(rowData.results)
        });
    } catch (e) {
        throw new Error(e.message);
    }   
});

router.get('/phantom', (req, res) => {
    try {
        got('https://swapi.co/api/films/4/')
            .then(function(response) {
                rowData = JSON.parse(response.body);
                res.send(rowData);
            })        
    } catch (error) {
        res.send(error.message);
    }
});

module.exports = router;