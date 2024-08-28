// message.service
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Message, MessageSchema } from '../schema/message.schema';

@Injectable()
export class MessageService {
  constructor(@InjectModel(Message.name) private messageModel: Model<Message>) {}

  async createMessage(content: string): Promise<Message> {
    const newMessage = new this.messageModel({ content, timestamp: new Date() });
    return newMessage.save();
  }

  async findAll(): Promise<Message[]> {
    return this.messageModel.find().exec();
  }
}
