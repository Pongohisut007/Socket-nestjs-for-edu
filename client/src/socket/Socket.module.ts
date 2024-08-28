import { Module } from "@nestjs/common";
import { SocketClient } from "./SocketClient";

@Module({
    providers : [SocketClient]
})

export class SocketModule{}