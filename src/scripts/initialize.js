const sequelize = require('../config/config');
const models = require('../models');

const initializeDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');

    // await sequelize.sync({ force: true }); // 'force: true' akan menghapus tabel lama dan membuat tabel baru sesuai dengan model
    console.log('All models were synchronized successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  } finally {
    await sequelize.close();
  }
};

initializeDatabase();
