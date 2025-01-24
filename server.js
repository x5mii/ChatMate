const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const path = require("path");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const PORT = process.env.PORT || 3000;

// List of prohibited words
const swearWords = ["Fuck", "Shit"]; // Replace with actual swear words

// In-memory chat history
const chatHistory = [];

// Serve static files from the frontend
app.use(express.static(path.join(__dirname, "public")));

// Socket.io logic for real-time communication
io.on("connection", (socket) => {
  console.log("A user connected:", socket.id);

  // Send previous chat history to the newly connected user
  socket.emit("chat history", chatHistory);

  // Listen for username validation
  socket.on("validate username", (username, callback) => {
    const isInvalid =
      username.length < 3 ||
      swearWords.some((word) => username.toLowerCase().includes(word));

    if (isInvalid) {
      callback({ success: false, message: "Invalid username." });
    } else {
      callback({ success: true });
    }
  });

  // Broadcast messages to all connected clients
  socket.on("chat message", (data) => {
    const formattedMessage = `${data.username}: ${data.message}`;
    chatHistory.push(formattedMessage); // Store formatted message
    io.emit("chat message", { username: data.username, message: data.message }); // Send to all clients
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

// Start the server
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
