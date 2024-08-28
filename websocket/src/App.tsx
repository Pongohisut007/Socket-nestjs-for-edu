import React from 'react';
import logo from './logo.svg';
import './App.css';
import { WebsocketProvide, socket } from './context/WebsocketContext';
import { WebSocket } from './component/Websocket';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
        <WebsocketProvide value={socket}>
          <WebSocket></WebSocket>
        </WebsocketProvide>
    </div>
  );
}

export default App;
