import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();
const db = process.env.DATABASE_NAME;
const db_user_name = process.env.DATABASE_USER_NAME;
const db_password = process.env.DATABASE_PASSWORD;
const db_host = process.env.DATABASE_HOST;
const db_dialect = process.env.DATABASE_DIALECT;

export const sequelize = new Sequelize(db, db_user_name, db_password, {
    host: db_host,
    dialect: db_dialect,
    port: 5433,
});
