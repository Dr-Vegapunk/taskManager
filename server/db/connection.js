const { Sequelize } = require('sequelize');

const dbConnect = async () => {
    // const { Sequelize } = require('sequelize');

    const sequelize = new Sequelize('taskmanagerdb', 'postgres', 'Ishank@rki5167', {
      host: 'localhost',
      port: 9000,
      dialect: 'postgres', // 👈 Important!
    });
    
    module.exports = sequelize;
    

    try {
        await sequelize.authenticate();
        console.log('Database connection established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
        process.exit(1);
    }

    return sequelize;
};

module.exports = dbConnect;