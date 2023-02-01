import { ApiProperty } from "@nestjs/swagger"
import { CardFullData } from "../../card/models/card.dto"

export default class CreateCollectionDTO {
  @ApiProperty({ example: "Japanese kanji N1", description: "Your theme name" })
  theme: string
}

export class GetCollectionResponse {
  @ApiProperty({ example: "727", description: "Auto generated id" })
  id: number
  @ApiProperty({ example: "Japanese kanji N1", description: "theme of the collection" })
  theme: string
  @ApiProperty({ example: [{ id: 1, face: "face", backface: "back" }], description: "array of cards" })
  cards: CardFullData[]
}

export class PostCollectionResponse extends CreateCollectionDTO {
  @ApiProperty({ example: 2, description: "Auto generated id" })
  id: number
}
