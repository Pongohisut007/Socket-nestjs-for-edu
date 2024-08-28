// gateway.module.ts
import { Module } from "@nestjs/common";
import { Gateway } from "./gateway";
import { MessageModule } from "../message/message.module"; 

@Module({
  imports: [MessageModule], 
  providers: [Gateway], 
})
export class GatewayModule {}
