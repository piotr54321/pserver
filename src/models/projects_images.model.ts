import {Table, Column, Model, ForeignKey, BelongsTo} from "sequelize-typescript";
import {projects} from "./projects.model";

@Table
export class projects_images extends Model<projects_images>{
    @Column({primaryKey: true, autoIncrement: true})
    id: number;

    @ForeignKey(() => projects)
    projects_id: number;

    @BelongsTo(() => projects, 'projects_id')
    project: projects;

    @Column({defaultValue: ''})
    image_filename: string;

    @Column({defaultValue: 0})
    main: number;

    @Column({defaultValue: 0})
    alt: string;
}
