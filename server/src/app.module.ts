import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GatewayModule } from './gateway/gateway.module';
import { DatabaseModule } from './database/database.module';
import { MessageModule } from './message/message.module';

@Module({
  imports: [GatewayModule, DatabaseModule, MessageModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
