import {resolver} from 'graphql-sequelize';
import {projects_technologies} from "../../models";

export const Query = {
    GetProjects_technologies: resolver(projects_technologies),
};
