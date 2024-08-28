import React from "react";
import { createContext } from "react";
import {Socket , io} from "socket.io-client"

export const socket = io("http://localhost:9001");
export const WebsocketContext = createContext<Socket>(socket)
export const WebsocketProvide = WebsocketContext.Provider;

