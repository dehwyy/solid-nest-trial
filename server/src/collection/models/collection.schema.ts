import CardEntity from "../../card/card.entity"

export interface ICollectionCreateInput {
  theme: string
}

export interface ICollectionDB extends ICollectionCreateInput {
  id: number
  cards: CardEntity[]
}
