import {resolver} from 'graphql-sequelize';
import {projects} from "../../models";

export const ProjectsMap = {
    projects_technologies: resolver(projects.associations.projects_technologies)
};
