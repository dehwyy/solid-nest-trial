import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { ICardDB } from "./models/card.schema"
import CollectionEntity from "../collection/collection.entity"

@Entity()
export default class CardEntity implements ICardDB {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  face: string

  @Column()
  backface: string

  @ManyToOne(() => CollectionEntity, collection => collection.cards)
  collection: CollectionEntity
}
