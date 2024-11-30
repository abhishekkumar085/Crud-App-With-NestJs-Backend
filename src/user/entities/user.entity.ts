import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn() //this decorator will help to auto generate id for the table
    id:number

}
