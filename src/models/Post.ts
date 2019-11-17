import { Entity, BaseEntity, PrimaryGeneratedColumn, 
    CreateDateColumn, Column } from "typeorm";

@Entity()
export class Post extends BaseEntity {
    @PrimaryGeneratedColumn("uuid") id: string;
    @CreateDateColumn() createdAt: Date;
    @Column() title: string;
    @Column() body: string;
};


