import {Table, Column, Model, HasMany} from "sequelize-typescript";
import {projects_technologies} from "./projects_technologies.model";

@Table
export class projects extends Model<projects>{
    @Column({primaryKey: true, autoIncrement: true})
    id: number;

    @Column({defaultValue: ''})
    title: string;

    @Column({defaultValue: ''})
    url: string;

    @Column({defaultValue: ''})
    description: string;

    @HasMany(() => projects_technologies)
    projects_technologies: projects_technologies[]
}
