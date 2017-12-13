var mysql = require('mysql');

var con;

if (process.env.JAWSDB_URL) {
	con = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	con = mysql.createConnection({
		port: 3306,
		host: 'localhost',
		user: 'root',
		password: '',
		database: 'burgers_db'
	});
};

con.connect(function(err) {
	if (err) {
		console.log("error connection: " + err.stack);
		return;
	}
	console.log("connected as id " + con.threadId);
})

module.exports = con;