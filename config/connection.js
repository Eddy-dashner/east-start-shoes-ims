// Sequelize library
const Sequelize = require("sequelize");

require("dotenv").config();

// connection to our database
let sequelize;

if (process.env.DATABASE_URL) {
  sequelize = new Sequelize(process.env.DATABASE_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PW,
    {
      host: "localhost",
      dialect: "postgres",
      port: 5432,
    }
  );
}

module.exports = sequelize;
