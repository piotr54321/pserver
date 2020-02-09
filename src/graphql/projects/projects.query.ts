import {resolver} from 'graphql-sequelize';
import {projects} from "../../models";

export const Query = {
    GetProjects: resolver(projects),
};
