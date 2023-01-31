import { Module } from "@nestjs/common"
import { CollectionService } from "./collection.service"
import { CollectionController } from "./collection.controller"
import { TypeOrmModule } from "@nestjs/typeorm"
import CollectionEntity from "./collection.entity"
import { CardModule } from "../card/card.module"
import CardEntity from "../card/card.entity"

@Module({
  imports: [TypeOrmModule.forFeature([CollectionEntity, CardEntity]), CardModule],
  controllers: [CollectionController],
  providers: [CollectionService],
})
export class CollectionModule {}
