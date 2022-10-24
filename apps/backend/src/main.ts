import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule); // creating the nest instance
  app.setGlobalPrefix('/api');  // prefix for all the api routes
  await app.listen(3000);  // sopecifying the port number
}
bootstrap();

