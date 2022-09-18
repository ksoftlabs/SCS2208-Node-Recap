const express = require('express');
const router = express.Router();

router.get('/', function(req, res){
    res.send('GET route on users.');
});
router.post('/', function(req, res){
    res.send('POST route on users.');
});

module.exports = router;
