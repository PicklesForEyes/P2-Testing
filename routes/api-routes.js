var db = require('../models');

module.exports = app => {
  app.get('/api/character', (req, res) => {
  	db.Character.findAll({}).then(dbCharacter => {
  	  res.json(dbCharacter);
  	});
  });

  app.post('api/character', (req, res) => {
  	db.Character.create({
  	  
  	}).then(dbCharacter) => {
  	  res.json(dbCharacter)
  	};
  })

  app.delete('api/character/:id', (req, res) => {
  	db.Character.destroy({
  	  where: {
  	  	id: req.params.id
  	  }
  	}).then(dbCharacter => {
  	  res.json(dbCharacter);
  	});
  })

  app.put('api/character', (req, res) => {
  	db.Character.update({

  	}, {
  	  where: {
  	  	id: req.body.id
  	  }
  	}).then(dbCharacter => {
  	  res.json(dbCharacter);
  	});
  });
};