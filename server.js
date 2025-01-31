const socket = io(); // Connect to the Socket.io server

// DOM Elements
const usernameContainer = document.getElementById("username-container");
const chatContainer = document.getElementById("chat-container");
const usernameInput = document.getElementById("username");
const chatWindow = document.getElementById("chat-window");
const chatMessageInput = document.getElementById("chat-message");

// Save Username and Join Chat
function saveAndJoin() {
  const username = usernameInput.value.trim();
  if (username.length < 3) {
    alert("Username must be at least 3 characters long.");
    return;
  }

  // Hide username container and show chat container
  usernameContainer.style.display = "none";
  chatContainer.style.display = "block";

  // Emit username to the server
  socket.emit("validate username", username, (response) => {
    if (!response.success) {
      alert(response.message);
      usernameContainer.style.display = "block";
      chatContainer.style.display = "none";
    }
  });
}

// Send Chat Message
function sendMessage() {
  const message = chatMessageInput.value.trim();
  if (message) {
    socket.emit("chat message", { username: usernameInput.value, message });
    chatMessageInput.value = "";
  }
}

// Socket.io Listeners
socket.on("chat message", (data) => {
  const messageElement = document.createElement("div");
  messageElement.textContent = `${data.username}: ${data.message}`;
  chatWindow.appendChild(messageElement);
});

// Optional: Handle Enter key for sending messages
chatMessageInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    sendMessage();
  }
});