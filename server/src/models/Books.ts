import { Users } from "./Users";
import { BaseEntity, Column, Entity, JoinColumn, 
    ManyToOne, ObjectID, ObjectIdColumn } from "typeorm";

@Entity({name: "books"})
export class Books extends BaseEntity {
    @ObjectIdColumn() _id: ObjectID;
    @Column() title: string;
    @Column() author: string;
    @Column() email: string;
    @Column() age: number;
    @Column() info: string;
    @ManyToOne(() => Users, (user) => user.email)
    @JoinColumn({
        name: "email",
        referencedColumnName: "email"
    }) user: Users;
};




