module.exports = (sequelize, DataTypes) => {
  const Skills = sequelize.define('Skills', {
  	acrobatics: DataTypes.BOOLEAN,
  	animal_handling: DataTypes.BOOLEAN,
  	arcana: DataTypes.BOOLEAN,
  	athletics: DataTypes.BOOLEAN,
  	deception: DataTypes.BOOLEAN,
  	history: DataTypes.BOOLEAN,
  	insight: DataTypes.BOOLEAN,
  	intimidation: DataTypes.BOOLEAN,
  	investigation: DataTypes.BOOLEAN,
  	medicine: DataTypes.BOOLEAN,
  	nature: DataTypes.BOOLEAN,
  	perception: DataTypes.BOOLEAN,
  	performance: DataTypes.BOOLEAN,
  	persuasion: DataTypes.BOOLEAN,
  	religion: DataTypes.BOOLEAN,
  	sleight_of_hand: DataTypes.BOOLEAN,
  	stealth: DataTypes.BOOLEAN,
  	survival: DataTypes.BOOLEAN,
  	attack1: DataTypes.STRING,
  	attack2: DataTypes.STRING,
  	attack3: DataTypes.STRING
  });
  return Skills;
};