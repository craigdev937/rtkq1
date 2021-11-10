import bcrypt from "bcrypt";
import { Books } from "./Books";
import { IsEmail, Length } from "class-validator";
import { BaseEntity, BeforeInsert, Column, Entity, 
    ObjectID, ObjectIdColumn, OneToOne } from "typeorm";

@Entity({name: "users"})
export class Users extends BaseEntity {
    @ObjectIdColumn() _id: ObjectID;
    @Column() firstname: string;
    @Column() lastname: string;
    @IsEmail()
    @Column({ unique: true }) email: string;
    @Length(6, 255)
    @Column() password: string;
    @OneToOne(() => Books) aEmail: Books;
    @BeforeInsert()
    async hashPassword(): Promise<void> {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
    };
};





