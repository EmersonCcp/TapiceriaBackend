const { Sequelize } = require('sequelize');
const URI = "postgres://rxkvxalocewcic:cd988e9def77192422b2cc5f370d649cebe069f9dfa46433c8a124b47527b54f@ec2-3-219-19-205.compute-1.amazonaws.com:5432/da1gcoaqplhlgr";
const sequelize = new Sequelize(URI);

  const testConnection = async () =>{
     try {
    await sequelize.authenticate();
    await sequelize.sync({force: false});
    console.log('Se conectó correctamente');
  } catch (error) {
    console.error('No conectó', error);
  } 
  }
  testConnection();
  

  const db = {
      Sequelize,
      sequelize
  }

  module.exports = db;