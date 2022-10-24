import { Module } from "@nestjs/common";
import { AppController } from "./test.controller";

@Module({
  controllers: [AppController],
})
export class AppModule {}

