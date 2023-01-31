import { Body, Controller, Delete, Get, ImATeapotException, InternalServerErrorException, NotFoundException, ParseIntPipe, Post, Put, Query } from "@nestjs/common"
import { CardService } from "./card.service"
import { CreateCardDTO } from "./models/card.dto"
import { ApiBody, ApiCreatedResponse, ApiInternalServerErrorResponse, ApiNotFoundResponse, ApiOkResponse, ApiResponse, ApiTags } from "@nestjs/swagger"

@ApiTags("CardsResolver")
@Controller("/cards")
export class CardController {
  constructor(private readonly cardsService: CardService) {}

  @ApiNotFoundResponse({ description: "Card was not found" })
  @ApiOkResponse({ description: "If there are user with provided id", type: CreateCardDTO })
  @Get()
  async getCard(@Query("id", ParseIntPipe) id: number) {
    try {
      const card = await this.cardsService.getCardById(id)
      return card
    } catch (e) {
      throw new NotFoundException("Card with such id wasn't found")
    }
  }

  @ApiInternalServerErrorResponse({ description: "Error during creating card" })
  @ApiCreatedResponse({ description: "Card was successfully created", type: CreateCardDTO })
  @Post()
  async createCard(@Body() createCardDTO: CreateCardDTO) {
    try {
      const card = await this.cardsService.createCard(createCardDTO)
      return card
    } catch (e) {
      throw new InternalServerErrorException("Error on server")
    }
  }

  @ApiResponse({ status: 418, description: "I'm teapot" })
  @ApiResponse({ status: 200, description: "Successfully updated card", type: CreateCardDTO })
  @Put()
  async updateCard(@Body() createCardDTO: CreateCardDTO, @Query("id", ParseIntPipe) id: number) {
    try {
      const card = await this.cardsService.updateCard(createCardDTO, id)
      return card
    } catch (e) {
      throw new ImATeapotException("Teapot(card wasn't found, I guess)")
    }
  }

  @ApiNotFoundResponse({ description: "Card wasn't found" })
  @ApiOkResponse({ description: "Successfully deleted card from db", type: CreateCardDTO })
  @Delete()
  async deleteCard(@Query("id", ParseIntPipe) id: number) {
    const card = await this.cardsService.removeCard(id)
    return card
  }
}
