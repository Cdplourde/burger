// Dependencies 
var mysql = require("mysql");

// Set up DB connection
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
    var connection = mysql.createConnection({
        port: 3306,
        host: "	gx97kbnhgjzh3efb.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        user: "	djlw6gpg7cga0ve9",
        password: "o68p0ezj7wiytmxf",
        database: "	f2ddvxi1z46cpioa"
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
