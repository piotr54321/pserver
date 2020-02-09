import { Sequelize } from 'sequelize-typescript';
import { ENV } from '../config';

// @ts-ignore
export const sequelize = new Sequelize({
    host: ENV.DB_HOST,
    database: ENV.DB_NAME,
    port: +ENV.DB_PORT,
    dialect: ENV.DB_DIALECT,
    username: ENV.DB_USER,
    password: ENV.DB_PASSWORD,
    define: {
        timestamps: false,
        freezeTableName: true,
    },
    quoteIdentifiers: false,
    //operatorsAliases: false,
    //logging: console.log,
    logging: false,
    storage: ':memory:',
    modelPaths: [__dirname + '/*.model.ts'],
    modelMatch: (filename, member) => {
        return filename.substring(0, filename.indexOf('.model')) === member.toLowerCase();
    },
});

console.log(__dirname);

export {projects} from './projects.model';
export {projects_technologies} from './projects_technologies.model';
export {technologies} from './technologies.model';
