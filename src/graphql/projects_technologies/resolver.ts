import {Query} from "./projects_technologies.query";
import {Projects_technologiesMap} from "./projects_technologies.map"
import {Mutation} from "./projects_technologies.mutation";

export const resolver = {
    Query: Query,
    Project_technology: Projects_technologiesMap,
    Mutation: Mutation
};
