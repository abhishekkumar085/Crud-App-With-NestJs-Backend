import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
// @Unique(['email','username'])
export class User {

    @PrimaryGeneratedColumn() //this decorator will help to auto generate id for the table
    id:number;

    @Column({type:'varchar',length:30})
    name:string;

    @Column({type:'varchar',length:15})
    username:string;

    @Column({type:'varchar',length:40})
    email:string;

    @Column({type:'int'})
    age: number;

    @Column({ type: 'varchar' })
    password: string;

    @Column({ type: 'enum', enum: ['m', 'f', 'u'] })
    gender: string;



}
