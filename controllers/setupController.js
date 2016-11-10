var Todos = require('../models/todoModel');

module.exports = function(app) {
    
    app.get('/api/setupTodos', function(req, res) {
        // seed database
        var starterTodos = [{
            timestamp: "161110 00:00:00",
            ambient_temp_A:  "10.00",
            ambient_temp_B:  "11.00",
            ambient_temp_C:  "12.00",
            ambient_temp_D:  "13.00",
            infrared_temp_A: "14.00",
            infrared_temp_B: "15.00",
            infrared_temp_C: "16.00",
            infrared_temp_D: "17.00",
            thermocouple_A:  "20.00",
            thermocouple_B:  "21.00",
            thermocouple_C:  "22.00",
            thermocouple_D:  "23.00",
            acc_x: "0.00",
            acc_y: "0.00",
            acc_z: "0.00",
            gyro_x: "0.00",
            gyro_y: "0.00",
            gyro_z: "0.00",
            compass_x: "0.00",
            compass_y: "0.00",
            compass_z: "0.00"
        }];
        Todos.create(starterTodos, function(err, results) {
            res.send(results);
        }); 
    });
    
}
