import * as dotEnv from "dotenv";
dotEnv.config();

export const ENV = {
    PORT: process.env.PORT,
    DB_HOST: process.env.DB_HOST,
    DB_NAME: process.env.DB_NAME,
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_PORT: process.env.DB_PORT,
    DB_DIALECT: process.env.DB_DIALECT,
    JWT_ENCRYPTION: process.env.JWT_ENCRYPTION,
    NODE_ENV: process.env.NODE_ENV
};
