const { Sequelize } = require('sequelize');
require('dotenv').config();



const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      dialect: 'postgres',
      alter: true
    }
  );
  
  const connectDB = async () => {
    try {
      await sequelize.authenticate();
      console.log('PostgreSQL Connected');
    } catch (error) {
      console.error('Database connection failed:', error.message);
      process.exit(1);
    }
  };
  
  module.exports = { sequelize, connectDB };