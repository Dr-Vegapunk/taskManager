const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('postgres::memory:');

class Task extends Model {
  static associate(models) {
    Task.belongsTo(models.User, {
      foreignKey: "userId",
      as: "user",
      onDelete: "CASCADE",
    });
    Task.hasMany(models.Comment, {
      foreignKey: "taskId",
      as: "comments",
      onDelete: "CASCADE",
    });
  }
}

Task.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  status: {
    type: DataTypes.ENUM("todo", "in-progress", "completed"),
    allowNull: false,
    defaultValue: "todo",
  },
  priority: {
    type: DataTypes.ENUM("low", "medium", "high"),
    allowNull: false,
    defaultValue: "medium",
  },
  dueDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: "users",
      key: "id",
    },
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
}, {
  sequelize,
  modelName: "Task",
  tableName: "tasks",
  timestamps: true,
  indexes: [
    {
      fields: ["userId"],
    },
  ],
  hooks: {
    beforeCreate: (task) => {
      if (!task.title) {
        throw new Error("Title is required");
      }
    },
  },
});

module.exports = Task