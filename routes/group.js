var contacts = require('../contacts');
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    console.log('groups');
    res.setHeader('content-type', 'application/json');
    res.end(JSON.stringify(contacts.list_groups()));
});

router.get('/:name', function (req, res, next) {
    console.log('groups');
    res.setHeader('content-type', 'application/json');
    console.log(req.params.name);
    res.end(JSON.stringify(contacts.get_members(req.params.name)));
});

module.exports = router;
