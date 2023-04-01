import { Sequelize } from 'sequelize'
import dotenv from 'dotenv'

dotenv.config();

const { PG_DB, PG_USER, PG_PASS, PG_PORT, PG_HOST } = process.env

export const sequelize = new Sequelize(
    PG_DB as string,
    PG_USER as string,
    PG_PASS as string,
    {
        dialect: 'postgres',
        port: parseInt(PG_PORT as string)
    }
);

