import {resolver} from 'graphql-sequelize';
import {projects_images} from "../../models";

export const Query = {
    GetProjects_images: resolver(projects_images),
};
