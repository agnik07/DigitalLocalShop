var express = require("express");
var app = express();
var connection = require('./database');

app.get('/employee_info', function(req, res) {
    let sql = "SELECT * FROM EMPLOYEE_INFO";
    connection.query(sql, function(err, results){
        if (err) throw err;
        res.json({ employees: results });
    });
});

app.listen(3001, function(){
    console.log('App Listening on port 3001');
    connection.connect(function(err){
        if(err) throw err;
        console.log('Database connected!');
    })
});
