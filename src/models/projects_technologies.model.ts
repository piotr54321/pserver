import {Table, Column, Model, HasMany, ForeignKey, BelongsTo} from "sequelize-typescript";
import {projects} from "./projects.model";
import {technologies} from "./technologies.model";

@Table
export class projects_technologies extends Model<projects_technologies>{
    @Column({primaryKey: true, autoIncrement: true})
    id: number;

    @ForeignKey(() => projects)
    projects_id: number;

    @BelongsTo(() => projects, 'projects_id')
    project: projects;

    @ForeignKey(() => technologies)
    technologies_id: number;

    @BelongsTo(() => technologies, 'technologies_id')
    technology: technologies;
}
