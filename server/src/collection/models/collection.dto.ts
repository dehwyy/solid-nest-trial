import { ApiProperty } from "@nestjs/swagger"

export default class CreateCollectionDTO {
  @ApiProperty({ example: "Japanese kanji N1", description: "Your theme name" })
  theme: string
}
