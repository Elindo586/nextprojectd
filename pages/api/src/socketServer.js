import { Server } from "socket.io";

const registerSocketServer = (req, res) => {
  if (res.socket.server.io) {
    console.log("Socket is already running");
  } else {
    console.log("Socket is initializing");
    const io = new Server(res.socket.server);
    // res.socket.server.io = io;

    io.on("connection", (socket) => {
      console.log(`user connected ${socket.id}`);
    });
  }
  //   res.end();
};

export default registerSocketServer;
