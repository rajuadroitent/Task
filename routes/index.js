var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/crud',function(req,res,next){
      res.header('Access-Control-Allow-Origin', '*');
  res.json(
      [
        {
           "name":"laju",
           "reps":"Y",
           "weight":"60",
           "date":"20/1/1989",
           "lbs":"true"
        },
        {
          "name":"mounika",
          "reps":"Y",
          "weight":"50",
          "date":"20/1/1993",
          "lbs":"true"
        },
        {
          "name":"kavitha",
          "reps":"Y",
          "weight":"50",
          "date":"20/1/1986",
          "lbs":"true"
        }
        ]
        )
      }
  )

router.post('/crud',function(req,res,next){
  res.header('Access-Control-Allow-Origin', '*');
  var name=req.body.name;
  var reps=req.body.reps;
  var weight=req.body.weight;
  var date=req.body.date;
  var lbs=req.body.lbs;



})
module.exports = router;


