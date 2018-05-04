// Dependencies 
var mysql = require("mysql");

// Set up mysql connection
var connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "Pass4Class",
    database: "burgers_db"
});

// Make connection.
connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
});
  
// Export connection for ORM to use.
module.exports = connection;
