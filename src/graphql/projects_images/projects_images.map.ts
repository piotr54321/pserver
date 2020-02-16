import {resolver} from 'graphql-sequelize';
import {projects_images} from "../../models";

export const Projects_imagesMap = {
    project: resolver(projects_images.associations.project)
};
