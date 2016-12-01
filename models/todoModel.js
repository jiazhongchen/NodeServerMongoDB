var mongoose = require('mongoose');

//var Schema = mongoose.Schema;

var todoSchema = new mongoose.Schema({

    timestamp       : String,
    mac_address     : String,
    event_code      : String,
    ambient_temp_A  : String,
    ambient_temp_B  : String,
    ambient_temp_C  : String,
    ambient_temp_D  : String,
    infrared_temp_A : String,
    infrared_temp_B : String,
    infrared_temp_C : String,
    infrared_temp_D : String,
    thermocouple_A  : String,
    thermocouple_B  : String,
    thermocouple_C  : String,
    thermocouple_D  : String,
    voltage         : String,
    current         : String,
    acc_x           : String,
    acc_y           : String,
    acc_z           : String,
    gyro_x          : String,
    gyro_y          : String,
    gyro_z          : String,
    compass_x       : String,
    compass_y       : String,
    compass_z       : String

});

var Todos = mongoose.model('Todos', todoSchema);

module.exports = Todos;
