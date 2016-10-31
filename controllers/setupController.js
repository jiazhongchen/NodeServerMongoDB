var Todos = require('../models/todoModel');

module.exports = function(app) {
    
    app.get('/api/setupTodos', function(req, res) {
       
       // seed database
        var starterTodos = [
            {
                timestamp: "161028 00:00:00",
                obj_temp: "10.00",
                ambient_temp: "10.00",
                air_pressure: "36.00",
                light: "365.00",
                humidity: "36.26",
                acc_x: "0.00",
                acc_y: "0.00",
                acc_z: "0.00",
                gyro_x: "0.00",
                gyro_y: "0.00",
                gyro_z: "0.00",
                compass_x: "0.00",
                compass_y: "0.00",
                compass_z: "0.00"
            }
        ];
        Todos.create(starterTodos, function(err, results) {
            res.send(results);
        }); 
    });
    
}