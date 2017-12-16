module.exports = (sequelize, DataTypes) => {
  const Skills = sequelize.define('Skills', {
  	acrobatics: DataTypes.TINYINT,
  	animal_handling: DataTypes.TINYINT,
  	arcana: DataTypes.TINYINT,
  	athletics: DataTypes.TINYINT,
  	deception: DataTypes.TINYINT,
  	history: DataTypes.TINYINT,
  	insight: DataTypes.TINYINT,
  	intimidation: DataTypes.TINYINT,
  	investigation: DataTypes.TINYINT,
  	medicine: DataTypes.TINYINT,
  	nature: DataTypes.TINYINT,
  	perception: DataTypes.TINYINT,
  	performance: DataTypes.TINYINT,
  	persuasion: DataTypes.TINYINT,
  	religion: DataTypes.TINYINT,
  	sleight_of_hand: DataTypes.TINYINT,
  	stealth: DataTypes.TINYINT,
  	survival: DataTypes.TINYINT,
  	attack1: DataTypes.STRING,
  	attack2: DataTypes.STRING,
  	attack3: DataTypes.STRING
  });

  Skills.associate = models => {
    Skills.belongsTo(models.Character, {
      onDelete: 'cascade'
    })
  }

  return Skills;
};