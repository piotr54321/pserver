import {Query} from "./projects_images.query";
import {Projects_imagesMap} from "./projects_images.map"
import {Mutation} from "./projects_images.mutation";

export const resolver = {
    Query: Query,
    Project_image: Projects_imagesMap,
    Mutation: Mutation
};
