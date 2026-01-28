import { WebSocket, WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 })

interface User {
  socket: WebSocket
  roomId: string
}

let allSocket: User[] = []
/*
    '{
        "type": "join",
        "payload": {
            "roomId": "123",
            "message" : "user message"
        }
    }'
*/

wss.on("connection", (socket) => {
  socket.on("message", (message) => {
    const parsedMessage = JSON.parse(message.toString())

    console.log(typeof message.toString());

    console.log(parsedMessage);

    if (parsedMessage.type == "join") {
      console.log("the type got entry");

      allSocket.push({
        socket,
        roomId: parsedMessage.payload.roomId
      })
    }

    console.log(allSocket.length)
    if (parsedMessage.type == "chat") {
      console.log("chat type got entry");
      console.log(allSocket.length)

      const curentUserRoom = allSocket.find(x => x.socket === socket)

      const allUsersInRoom = allSocket.filter(x => x.roomId == curentUserRoom?.roomId && x.socket !== socket)

      allUsersInRoom.map(x => x.socket.send(parsedMessage.payload.message))
    }
  })
})
