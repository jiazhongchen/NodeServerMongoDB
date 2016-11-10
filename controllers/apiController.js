var Todos = require('../models/todoModel');
var bodyParser = require('body-parser');
var moment = require('moment');

module.exports = function(app) {

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.get('/api/todos/', function(req, res) {        
    Todos.find({}, function(err, todos) {
      if (err) throw err;            
      res.send(todos);
    });        
  });

  app.get('/api/todos/today/', function(req, res) {        
    var today = moment().startOf('day');
    var tomorrow = moment(today).add(1, 'days');
    Todos.find({ 
      timestamp: {
        $gte: today.format('YYMMDD hh:mm:ss'),
        $lt: tomorrow.format('YYMMDD hh:mm:ss')
      }
    }, function(err, todos) {
      if (err) throw err;            
      res.send(todos);
    });        
  });


  app.get('/api/todo/:timestamp', function(req, res) {        
    Todos.find({ timestamp: req.params.timestamp }, function(err, todos) {
      if (err) throw err;            
      res.send(todos);
    });        
  });


  app.get('/api/todo/:id', function(req, res) {       
    Todos.findById({ _id: req.params.id }, function(err, todo) {
      if (err) throw err;           
      res.send(todo);
    });        
  });

  app.post('/api/todo', function(req, res) {        
    if (req.body._id) {
      Todos.findByIdAndUpdate(req.body._id, { 
        timestamp       : req.body.timestamp,
        ambient_temp_A  : req.body.ambient_temp_A,
        ambient_temp_B  : req.body.ambient_temp_B,
        ambient_temp_C  : req.body.ambient_temp_C,
        ambient_temp_D  : req.body.ambient_temp_D,
        infrared_temp_A : req.body.infrared_temp_A,
        infrared_temp_B : req.body.infrared_temp_B,
        infrared_temp_C : req.body.infrared_temp_C,
        infrared_temp_D : req.body.infrared_temp_D,
        thermocouple_A  : req.body.thermocouple_A,
        thermocouple_B  : req.body.thermocouple_B,
        thermocouple_C  : req.body.thermocouple_C,
        thermocouple_D  : req.body.thermocouple_D,
        acc_x           : req.body.acc_x,
        acc_y           : req.body.acc_y,
        acc_z           : req.body.acc_z,
        gyro_x          : req.body.gyro_x,
        gyro_y          : req.body.gyro_y,
        gyro_z          : req.body.gyro_z,
        compass_x       : req.body.compass_x,
        compass_y       : req.body.compass_y,
        compass_z       : req.body.compass_z
      }, function(err, todo) {
        if (err) throw err;                
        res.send('Success');
      });
    } else {           
      var newTodo = Todos({

        timestamp       : req.body.timestamp,
        ambient_temp_A  : req.body.ambient_temp_A,
        ambient_temp_B  : req.body.ambient_temp_B,
        ambient_temp_C  : req.body.ambient_temp_C,
        ambient_temp_D  : req.body.ambient_temp_D,
        infrared_temp_A : req.body.infrared_temp_A,
        infrared_temp_B : req.body.infrared_temp_B,
        infrared_temp_C : req.body.infrared_temp_C,
        infrared_temp_D : req.body.infrared_temp_D,
        thermocouple_A  : req.body.thermocouple_A,
        thermocouple_B  : req.body.thermocouple_B,
        thermocouple_C  : req.body.thermocouple_C,
        thermocouple_D  : req.body.thermocouple_D,
        acc_x           : req.body.acc_x,
        acc_y           : req.body.acc_y,
        acc_z           : req.body.acc_z,
        gyro_x          : req.body.gyro_x,
        gyro_y          : req.body.gyro_y,
        gyro_z          : req.body.gyro_z,
        compass_x       : req.body.compass_x,
        compass_y       : req.body.compass_y,
        compass_z       : req.body.compass_z

      });
      newTodo.save(function(err) {
        if (err) throw err;
        res.send('Success');
      });            
    }        
  });

  app.delete('/api/todo', function(req, res) {        
    Todos.findByIdAndRemove(req.body._id, function(err) {
      if (err) throw err;
      res.send('Success');
    })        
  });

} 
