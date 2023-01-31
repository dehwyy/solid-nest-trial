import { Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import CollectionEntity from "./collection.entity"
import { Repository } from "typeorm"
import { ICollectionCreateInput } from "./models/collection.schema"
import CardEntity from "../card/card.entity"

@Injectable()
export class CollectionService {
  constructor(@InjectRepository(CollectionEntity) private CollectionsRepository: Repository<CollectionEntity>, @InjectRepository(CardEntity) private CardRepository: Repository<CardEntity>) {}

  async addToCollection(id: number, card: CardEntity) {
    const collection = await this.CollectionsRepository.findOneByOrFail({ id })
    card.collection = collection
    await this.CardRepository.save(card)
    return this.CollectionsRepository.save(collection)
  }

  async createCollection(collectionData: ICollectionCreateInput) {
    const collection = await this.CollectionsRepository.create(collectionData)
    return this.CollectionsRepository.save(collection)
  }

  async getCardsByCollectionId(id: number) {
    const cards = await this.CollectionsRepository.findOne({ relations: { cards: true }, where: { id } })
    return cards
  }
}
