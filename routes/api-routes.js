var db = require('../models');

module.exports = app => {
  app.get('/api/character', (req, res) => {
  	db.Character.findAll({}).then(dbCharacter => {
  	  res.json(dbCharacter);
  	});
  });


  app.post('/api/character', (req, res) => {
    db.Character.create({
      name: req.body.name,
      class: req.body.class,
      xp: req.body.xp,
      level: req.body.level,
      race: req.body.race,
      armorClass: req.body.armorClass,
      strength: req.body.strength,
      dex: req.body.dex,
      constitution: req.body.constitution,
      intelligence: req.body.intelligence,
      wisdom: req.body.wisdom,
      charisma: req.body.charisma
    }).then(dbCharacter => {
      res.json(dbCharacter)
    })
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


  app.put('/api/character/', (req, res) => {
    db.Character.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }
    ).then(dbCharacter => {
      res.json(dbCharacter);
    })
  })
};