import { ICardInput } from "./card.schema"
import { ApiProperty } from "@nestjs/swagger"

export class CreateCardDTO implements ICardInput {
  @ApiProperty({ example: "いい", description: "there should be 'face' of the flip card, for example foreign word" })
  face: string
  @ApiProperty({ example: "Good", description: "there should be 'backface', for example translation of the foreign word" })
  backface: string
}

export class CardFullData extends CreateCardDTO {
  @ApiProperty({ example: 929, description: "Auto generated id" })
  id: number
}
