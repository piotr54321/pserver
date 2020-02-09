import {Table, Column, Model, HasMany} from "sequelize-typescript";
import {projects_technologies} from "./projects_technologies.model";

@Table
export class technologies extends Model<technologies>{
    @Column({primaryKey: true, autoIncrement: true})
    id: number;

    @Column({defaultValue: ''})
    name: string;

    @HasMany(() => projects_technologies)
    projects_technologies: projects_technologies[];
}
