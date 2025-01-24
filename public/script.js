const socket = io(); // Connect to the Socket.io server
let username = ""; // Store username globally

function saveAndJoin() {
  username = document.getElementById("username").value.trim();

  if (username) {
    socket.emit("validate username", username, (response) => {
      if (response.success) {
        document.getElementById("username-container").style.display = "none";
        document.getElementById("chat-container").style.display = "flex";

        // Ensure the welcome message is only added once
        const chatWindow = document.getElementById("chat-window");
        if (!document.getElementById("welcome-message")) {
          const welcomeMessage = document.createElement("div");
          welcomeMessage.id = "welcome-message"; // Add an ID to prevent duplication
          welcomeMessage.textContent = `Welcome, ${username}!`;
          chatWindow.appendChild(welcomeMessage);
        }
      } else {
        alert(response.message);
      }
    });
  } else {
    alert("Please enter a valid username!");
  }
}

// Make sure the button is correctly assigned
document
  .querySelector(".input-group button")
  .addEventListener("click", saveAndJoin);

// Handle sending and receiving chat messages
const sendButton = document.querySelector(".chat-input-group button");
sendButton.addEventListener("click", () => {
  const messageInput = document.getElementById("chat-message");
  const message = messageInput.value;

  if (message.trim()) {
    socket.emit("chat message", { username, message }); // Send as an object
    messageInput.value = "";
  }
});

socket.on("chat message", (data) => {
  const chatWindow = document.getElementById("chat-window");
  const messageElement = document.createElement("div");
  messageElement.textContent = `${data.username}: ${data.message}`; // Format message
  chatWindow.appendChild(messageElement);
});

// Receive chat history from the server
socket.on("chat history", (history) => {
  const chatWindow = document.getElementById("chat-window");
  history.forEach((msg) => {
    const messageElement = document.createElement("div");
    messageElement.textContent = msg;
    chatWindow.appendChild(messageElement);
  });
});

// Save chat log
const saveChatButton = document.querySelector(".save-chat-button");
saveChatButton.addEventListener("click", () => {
  const chatWindow = document.getElementById("chat-window");
  const chatLog = chatWindow.innerText;

  const blob = new Blob([chatLog], { type: "text/plain" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "chat-log.txt";
  a.click();
  URL.revokeObjectURL(url);
});

// Dark/Light Mode Toggle
document.getElementById("theme-toggle").addEventListener("click", () => {
  const root = document.documentElement;
  const currentTheme = root.style.getPropertyValue("--bg-color");

  if (currentTheme === "#2c2c2c") {
    root.style.setProperty("--bg-color", "#f5f5f5");
    root.style.setProperty("--text-color", "#2c2c2c");
    root.style.setProperty("--chat-bg-color", "#3b3b3b");
    root.style.setProperty("--chat-text-color", "#f5f5f5");
  } else {
    root.style.setProperty("--bg-color", "#2c2c2c");
    root.style.setProperty("--text-color", "#f5f5f5");
    root.style.setProperty("--chat-bg-color", "#ffffff");
    root.style.setProperty("--chat-text-color", "#000000");
  }
});
