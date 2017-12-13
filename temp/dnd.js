var orm = require('../config/orm.js');

var dnd = {
  selectAll: function(cb) {
  	orm.selectAll('dnd', function(res) {
  		cb(res);
  	});
  }
}

module.exports = dnd;