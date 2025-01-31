const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const path = require("path");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

// Socket.io logic
io.on("connection", (socket) => {
  console.log("A user connected:", socket.id);

  // Validate username
  socket.on("validate username", (username, callback) => {
    const isInvalid = username.length < 3; // Add additional validation if needed
    if (isInvalid) {
      callback({ success: false, message: "Invalid username." });
    } else {
      callback({ success: true });
    }
  });

  // Handle chat messages
  socket.on("chat message", (data) => {
    io.emit("chat message", data); // Broadcast the message to all clients
  });

  // Handle user disconnect
  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

// Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});