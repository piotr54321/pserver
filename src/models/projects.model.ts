import {Table, Column, Model, HasMany} from "sequelize-typescript";
import {projects_technologies} from "./projects_technologies.model";
import {projects_images} from "./projects_images.model"

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
    projects_technologies: projects_technologies[];

    @HasMany(() => projects_images)
    projects_images: projects_images[];
}
