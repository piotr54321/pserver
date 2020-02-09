import {Query} from "./technologies.query";
import {TechnologiesMap} from "./technologies.map"
import {Mutation} from "./technologies.mutation";

export const resolver = {
    Query: Query,
    Technology: TechnologiesMap,
    Mutation: Mutation
};
