import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger"
import { INestApplication } from "@nestjs/common"

const swaggerConfig = new DocumentBuilder().setTitle("Solid Cards").setDescription("Backend of solidCards project").setVersion("1.0.0").build()

export default function setupSwagger(app: INestApplication): void {
  const document = SwaggerModule.createDocument(app, swaggerConfig)
  SwaggerModule.setup("/api/docs", app, document)
}
