var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

var Sequelize      = require('sequelize');
var sequelize = new Sequelize('crud', 'root', 'root', {
    //host: 'database-host',
    port: 3306,
    dialect: 'mysql'
});


var Workout = sequelize.define('workout', {
    id: {
        type: Sequelize.INTEGER,
        field: 'id',
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        field: 'name'
    },
    reps: {
        type: Sequelize.INTEGER,
        field: 'reps'
    },
    weight: {
        type: Sequelize.INTEGER,
        field: 'weight'
    },
    date: {
        type: Sequelize.DATE,
        field: 'date'
    },
    lbs: {
        type: Sequelize.BOOLEAN,
        field: 'lbs'
    }
});

router.get('/crud',function(req,res,next){
      res.header('Access-Control-Allow-Origin', '*');
        Workout.findAll({
        }).then(function(workout) {
            res.json(workout);
        });
  //res.json(
  //    [
  //      {
  //          "id":"1",
  //         "name":"laju",
  //         "reps":"Y",
  //         "weight":"60",
  //         "date":"20/1/1989",
  //         "lbs":"true"
  //      },
  //      {
  //          "id":"2",
  //        "name":"mounika",
  //        "reps":"Y",
  //        "weight":"50",
  //        "date":"20/1/1993",
  //        "lbs":"true"
  //      },
  //      {
  //          "id":"3",
  //        "name":"kavitha",
  //        "reps":"Y",
  //        "weight":"50",
  //        "date":"20/1/1986",
  //        "lbs":"true"
  //      }
  //      ]
  //      )
      }
  )

router.post('/crud',function(req,res,next){
  res.header('Access-Control-Allow-Origin', '*');

  var name=req.body.name;
  var reps=req.body.reps;
  var weight=req.body.weight;
  var date=req.body.date;
  var lbs=req.body.lbs;

    console.log(name);
    console.log(reps);
    console.log(weight);
    console.log(date);
    console.log(date);
    res.send("hello");

})

router.put('/crud/:id',function(req,res,next) {
    res.header('Access-Control-Allow-Origin', '*');

    var name=req.body.name;
    //var reps=req.body.reps;
    //var weight=req.body.weight;
    //var date=req.body.date;
    //var lbs=req.body.lbs;

    console.log(req.params.id);
    console.log(name);
    res.send("update");

})
router.delete('/crud/:id',function(req,res,next) {
    res.header('Access-Control-Allow-Origin', '*');

    var name=req.body.name;
    //var reps=req.body.reps;
    //var weight=req.body.weight;
    //var date=req.body.date;
    //var lbs=req.body.lbs;
    console.log('here');
    console.log(req.params.id);
    console.log(name);
    res.send("delete");

})
module.exports = router;


