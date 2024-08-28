// import { OnModuleInit } from "@nestjs/common";
// import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
// import { Server }  from "socket.io"
// @WebSocketGateway({
//     cors: {
//         origin : ["http://localhost:3000"],
//       }
// })
// export class Gateway implements OnModuleInit{
//     @WebSocketServer()
//     server : Server;

//     @SubscribeMessage("newMessage")
//     onMessage(@MessageBody() data : any){
//         console.log(data)
//     this.server.emit("onMessage", {
//         msg : "New Message",
//         content : data
//     })
//     }
 
//     onModuleInit() {
//         this.server.on("connection", (socket:any) =>{
//             console.log("New Client",socket.id)

//         })
//     }
    
// }




import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  MessageBody,
  OnGatewayInit,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { MessageService } from '../message/message.service';

@WebSocketGateway({
  cors: {
    origin: ['http://localhost:3000'],
  },
})
export class Gateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  constructor(private messageService: MessageService) {}

  async onModuleInit() {
    this.server.on('connection', (socket: Socket) => {
      console.log('New Client connected:', socket.id);
    });
  }

  @SubscribeMessage('sendMessage')
  async handleMessage(@MessageBody() content: string) {
    console.log('Received new message:', content);
    const message = await this.messageService.createMessage(content); // บันทึกข้อมูลลงใน MongoDB
    this.server.emit('message', message); // ส่งข้อมูลที่บันทึกไปยัง client อื่นๆ
  }

  @SubscribeMessage('getMessages')
  async handleGetMessages() {
    const messages = await this.messageService.findAll(); // ดึงข้อมูลจาก MongoDB
    this.server.emit('messages', messages); // ส่งข้อมูลทั้งหมดไปยัง client
  }

  afterInit(server: Server) {
    console.log('WebSocket initialized');
  }

  handleConnection(client: Socket) {
    console.log('Client connected:', client.id);
  }

  handleDisconnect(client: Socket) {
    console.log('Client disconnected:', client.id);
  }
}
