var db = require('../models');

module.exports = app => {
  app.get('/api/character', (req, res) => {
  	db.Character.findAll({}).then(dbCharacter => {
  	  res.json(dbCharacter);
  	});
  });


  app.post('/api/character', (req, res) => {
    db.Character.create({
      name: req.body.Name,
      level: req.body.Level,
      class: req.body.Class,
      xp: req.body.ExperiencePoints,
      race: req.body.Race,
      armorClass: req.body.ArmorClass,
      strength: req.body.Strength,
      dex: req.body.Dexterity,
      constitution: req.body.Constitution,
      intelligence: req.body.Intelligence,
      wisdom: req.body.Wisdom,
      charisma: req.body.Charisma
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