const express = require('express');
const router = express.Router();

router.get('/', function(req, res){
    res.send('GET route on users.');
});
router.post('/', function(req, res){
    res.send('POST route on users.');
});

router.get('/:id',function (req,res){
    res.send('User ID is '+req.params.id);
});

module.exports = router;
