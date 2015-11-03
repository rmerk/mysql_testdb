var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'ryanm',
  password: 'nelson12',
  database: 'mysql_testdb'
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/users', function(req,res){

  var user = req.body.user;
  var password = req.body.password;
  var post = {password: password, user: user};

    connection.query('INSERT INTO users SET ?', post, function(err){
      if (err) throw err;
      res.send(200);
    });

});

router.get('/data', function(req,res,next){
    connection.query('SELECT * FROM users', function(err, rows){
        if(err) throw err;
        res.json(rows);
    });
});

module.exports = router;
