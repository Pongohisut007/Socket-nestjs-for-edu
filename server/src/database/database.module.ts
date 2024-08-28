import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/your-database-name'), // ใส่ URL ของ MongoDB ของคุณ
  ],
})
export class DatabaseModule {}
