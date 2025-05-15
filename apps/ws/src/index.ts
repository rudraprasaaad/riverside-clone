import { WebSocketServer } from "ws";

const ws = new WebSocketServer({ port: 8080 });

ws.on("connection", (socket) => {
  console.log("client connected");

  socket.on("message", (message) => {
    console.log(message.toString());
  });
});
	