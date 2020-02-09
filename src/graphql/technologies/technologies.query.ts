import {resolver} from 'graphql-sequelize';
import {technologies} from "../../models";

export const Query = {
    GetTechnologies: resolver(technologies),
};
