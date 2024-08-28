import { Injectable, OnModuleInit } from "@nestjs/common";
import { io , Socket } from "socket.io-client"

@Injectable()
export class SocketClient implements OnModuleInit{
    public Socketclient : Socket;
    
    constructor(){
        this.Socketclient = io("http://localhost:9001")
    }

    onModuleInit() {
    this.callgateway()
    this.connectfromgateway()
    this.receivedatafrongateway()
    }

    private callgateway (){
         this.Socketclient.emit("newMessage", {
            msg : "Hey they"
         })
    }
    private connectfromgateway (){
        this.Socketclient.on("connect", () =>{
            console.log("connected to gateway")
        })
    }

    private receivedatafrongateway() {
        this.Socketclient.on("onMessage", (paylode:any) =>{
            console.log(paylode)
        })
    }
}