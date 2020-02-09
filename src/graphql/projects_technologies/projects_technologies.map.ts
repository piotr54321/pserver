import {resolver} from 'graphql-sequelize';
import {projects_technologies} from "../../models";

export const Projects_technologiesMap = {
    technology: resolver(projects_technologies.associations.technology),
    project: resolver(projects_technologies.associations.project)
};
