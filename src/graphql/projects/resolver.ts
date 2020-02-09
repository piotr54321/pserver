import {Query} from "./projects.query";
import {ProjectsMap} from "./projects.map"
import {Mutation} from "./projects.mutation";

export const resolver = {
    Query: Query,
    Project: ProjectsMap,
    Mutation: Mutation
};
