
const {Database} = require('../db/init');

class UserRepository{
    /*
    function: add user
    role: admin
    admin api:version 1.0.0
 
    */

    static createUser(user, callback) {
        var mysql      = require('mysql');
        var connection = mysql.createConnection({
          host     : 'localhost',
          user     : 'root',
          password : '',
          database : 'user'
        });
         
        connection.connect();

        var query = `insert into user (firstName,lastName,age) VALUES ("${user.firstName}","${user.lastName}",${user.age}) `;
         
        connection.query(query, function (error, results, fields) {
          if (error) throw error;
          callback(results.insertId);
        });
         
        connection.end();
    }

        /*
    function: list user
    role: admin
    admin api:version 1.0.0
 
    */

    static listUser(callback) {
        var mysql      = require('mysql');
        var connection = mysql.createConnection({
          host     : 'localhost',
          user     : 'root',
          password : '',
          database : 'user'
        });
         
        connection.connect();

        var query = `Select * from User `;
         
        connection.query(query, function (error, results, fields) {
          if (error) throw error;
          callback(results);
        });
         
        connection.end();
    }
}


module.exports = { UserRepository };
