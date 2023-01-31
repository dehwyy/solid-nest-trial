import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import CardEntity from "../card/card.entity"
import { ICollectionDB } from "./models/collection.schema"

@Entity()
export default class CollectionEntity implements ICollectionDB {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  theme: string

  @OneToMany(() => CardEntity, card => card.collection)
  cards: CardEntity[]
}
