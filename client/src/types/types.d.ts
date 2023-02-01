interface ICard {
  id: number
  face: string
  backface: string
}

interface ICollection {
  cards: ICard[]
  theme: string
  id: number
}

interface ICards extends ICreateCollectionResponse {
  cards: ICard[]
}

interface ICardsCreateStore {
  cards: ICards[]
  isCreatingCard: boolean
  theme: string
}

interface ICreateCollectionResponse {
  id: number
  theme: string
  japanese?: boolean
}
