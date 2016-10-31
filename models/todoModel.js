var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var todoSchema = new Schema({

    timestamp: String,
    obj_temp: String,
    ambient_temp: String,
    air_pressure: String,
    light: String,
    humidity: String,
    acc_x: String,
    acc_y: String,
    acc_z: String,
    gyro_x: String,
    gyro_y: String,
    gyro_z: String,
    compass_x: String,
    compass_y: String,
    compass_z: String

});

var Todos = mongoose.model('Todos', todoSchema);

module.exports = Todos;
