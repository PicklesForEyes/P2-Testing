var con = require('./connection.js');

function questionMarks(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push('?');
  };
  return arr.toString();
}

function objToSql(obj) {
  var arr = [];
  for (var key in obj) {
    if (Object.hasOwnProperty.call(ob, key)) {
      arr.push(key + '=' + obj[key]);
    }
  }
  return arr.toString();
}

var orm = {
  selectAll: function(table, cb) {
  	var queryString = 'SELECT * FROM ' + table + ';';
  	con.query(queryString, function(err, res) {
  	  if (err) throw err;
  	  cb(res);
  	});
  }, 
  insertOne: function(table, cols, vals, cb) {
    var queryString = 'INSERT INTO ' + table + ' (' + cols.toString() + ') VALUES (' + questionMarks(vals.length) + ');'
    con.query(queryString, vals, function(err, res) {
    	if (err) throw err;
    	cb(res)
    });
  },
  updateOne: function(table, colsVals, condition, cb) {
  	var queryString = 'UPDATE ' + table + ' SET ' + objToSql(colsVals) + ' WHERE ' + condition;
  	con.query(queryString, function(err, res) {
  		if (err) throw err;
  		cb(res);
  	});
  }
}

module.exports = orm;