import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Collection {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    name: string
}
