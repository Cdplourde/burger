var connection = require("./connection");

var orm = {
    selectAll: function(tableName) {
        var queryString = "SELECT * FROM ??"
        connection.query(queryString, [tableName], function(err, res) {
            if (err) throw err;
            console.log(res);
        })
    },
    insertOne: function(tableName, col1, col2, col3, val1, val2, val3) {
        var queryString = "INSERT INTO ??(??, ??, ??) VALUES (??, ??, ??)"
        connection.query(queryString, [tableName, col1, col2, col3, val1, val2, val3]);
    },
    updateOne: function(tableName, col, data) {
        var queryString = "UPDATE ?? SET ?? = ?"
        connection.query(queryString, [tableName, col, data]);
    }
}