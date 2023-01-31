import { Injectable, NotFoundException } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import CardEntity from "./card.entity"
import { Repository } from "typeorm"
import { CreateCardDTO } from "./models/card.dto"

@Injectable()
export class CardService {
  constructor(
    @InjectRepository(CardEntity)
    private CardsRepository: Repository<CardEntity>
  ) {}

  async getCardById(id: number) {
    const card = await this.CardsRepository.findOneByOrFail({ id })
    return card
  }

  async createCard(createCardDTO: CreateCardDTO) {
    const card = await this.CardsRepository.create(createCardDTO)
    return this.CardsRepository.save(card)
  }

  async updateCard(createCardDTO: CreateCardDTO, id: number) {
    const card = await this.CardsRepository.findOneByOrFail({ id })
    card.backface = createCardDTO.backface
    card.face = createCardDTO.face
    return this.CardsRepository.save(card)
  }

  async removeCard(id: number) {
    const card = await this.CardsRepository.findOneByOrFail({ id })
    return await this.CardsRepository.remove(card)
  }
}
