import { Sequelize, Op } from 'sequelize';
import sqlite3 from 'sqlite3';

export const sequelize = new Sequelize({
  database: 'reading',
  dialect: 'sqlite',
  storage: 'note.db',
  dialectModule: sqlite3,
  logging: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

const sequelizeInit = (): void => {
  console.log('-----------------------------------------------------------------');
  sequelize
    .authenticate()
    .then(() => {
      console.clear();
      console.log('Connection has been established successfully.');
    })
    .catch(err => {
      console.log('Unable to connect to the database', err);
    });
};
export default {
  sequelize,
  sequelizeInit,
  Op
};
