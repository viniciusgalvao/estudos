/* express */
var express     = require('express');
var app         = express();

/* express modules */
var bodyParser = require('body-parser');

/* database */
var mongojs = require('mongojs');
var db      = mongojs('mean-dev', ['contactlist']);

/* settings */
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

/* crud */
app.get('/contactlist', function (req, res) {
  db.contactlist.find(function (err, docs) {
    res.json(docs);
  });
});

app.get('/contactlist/:id', function (req, res) {
  var id = req.params.id;
  db.contactlist.findOne({_id: mongojs.ObjectId(id)}, function (err, doc) {
    res.json(doc);
  });
});

app.post('/contactlist', function (req, res) {
  db.contactlist.insert(req.body, function (err, doc) {
    res.json(doc);
  });
});

app.put('/contactlist/:id', function (req, res) {
  var id = req.params.id;
  db.contactlist.findAndModify({query: {_id: mongojs.ObjectId(req.params.id)},
  update: {$set: {name: req.body.name, mail: req.body.mail, number: req.body.number}},
  new: true}, function (err, doc) {
    res.json(doc);
  });
});

app.delete('/contactlist/:id', function (req, res) {
  var id = req.params.id;
  db.contactlist.remove({_id: mongojs.ObjectId(id)}, function (err, doc) {
    res.json(doc);
  });
});

/* server start listen */
app.listen(3000, function () {
  console.log('Server running on port 3000');
})
