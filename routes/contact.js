var express = require('express');
var router = express.Router();
var contacts = require('../contacts');
var url = require('url');
/* GET users listing. */
router.get('/', function (req, res, next) {
    var get_params = url.parse(req.url, true).query;
    if (Object.keys(get_params).length === 0) {
        res.setHeader('content-type', 'application/json');
        res.end(JSON.stringify(contacts.list()));
    } else {
        res.setHeader('content-type', 'application/json');
        res.end(JSON.stringify(contacts.query_by_arg(get_params)));
    }
});

router.get('/:number', function (req, res, next) {
    res.setHeader('content-type', 'application/json');
    res.end(JSON.stringify(contacts.query(req.params.number)));
});

module.exports = router;
