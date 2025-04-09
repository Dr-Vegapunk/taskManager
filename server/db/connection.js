const { Sequelize } = require('sequelize');

const dbConfig = {
  database: 'taskmanagerdb',
  username: 'postgres',
  password: 'Ishank@rki5167',
  host: 'localhost',
  port: 9000,
  dialect: 'postgres',
};

const dbConnect = async () => {
  const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
    host: dbConfig.host,
    port: dbConfig.port,
    dialect: dbConfig.dialect,
  });

  try {
  const x=  await sequelize.authenticate();
    console.log('Database connection established successfully.',x);
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    process.exit(1);
  }

  return sequelize;
};

module.exports = dbConnect;