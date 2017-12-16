module.exports = (sequelize, DataTypes) => {
  const Character = sequelize.define('Character', {
    name: {
      type: DataTypes.STRING,
      len: [1, 60]
    },
    class: {
      type: DataTypes.STRING,
      len: [1, 45]
    },
    xp: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    level: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 20
      }
    },
    race: {
      type: DataTypes.STRING,
      len: [1, 45]
    },
    armorClass: {
      type: DataTypes.STRING,
      len: [1, 45]
    },
    strength: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    dex: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    constitution: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    intelligence: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    wisdom: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    charisma: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  })

  Character.associate = models => {
    Character.hasOne(models.Skills, {
      onDelete: 'cascade'
    })
  }

  return Character
}