// Dependencies 
var mysql = require("mysql");

// Set up DB connection
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
    var connection = mysql.createConnection({
        port: 3306,
        host: "thh2lzgakldp794r.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        user: "f03e2opjc9gqbewl",
        password: "xwadtesr81o6hryb",
        database: "hu8e6v1nyoq2nphk"
    });    
};


// Make connection to DB.
connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
});
  
// Export connection for ORM to use.
module.exports = connection;
