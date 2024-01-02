
const dbConfig = require('../src/config/db.config');
import { Sequelize } from "sequelize-typescript";
const mysql2  = require("mysql2")

export let db_multi_instance: Sequelize;

export async function sequelizeConnect(req : Request , res: Response) {
  
  const sequelize : Sequelize = new Sequelize({
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: 3306,
    dialectModule : mysql2,
    repositoryMode: true,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    retry: {
      match: [
        /ETIMEDOUT/,
        /EHOSTUNREACH/,
        /ECONNRESET/,
        /ECONNREFUSED/,
        /ETIMEDOUT/,
        /ESOCKETTIMEDOUT/,
        /EHOSTUNREACH/,
        /EPIPE/,
        /EAI_AGAIN/,
        /SequelizeConnectionError/,
        /SequelizeConnectionRefusedError/,
        /SequelizeHostNotFoundError/,
        /SequelizeHostNotReachableError/,
        /SequelizeInvalidConnectionError/,
        /SequelizeConnectionTimedOutError/,
        /SequelizeConnectionAcquireTimeoutError/,
        /SequelizeDatabaseError/,
      ],
      max: 2,
    },
    dialect: "mysql",
    models: [__dirname + "/models"],
    pool: {
      max: 5,
      min: 1,
      acquire: 15000,
      idle: 10000,
    },
    define: {
      underscored: true,
    },
    timezone: "+05:30",
    logging: false,
  });
  await sequelize.authenticate();
  await sequelize.sync();

  db_multi_instance = sequelize;
  console.log(sequelize);
  
}