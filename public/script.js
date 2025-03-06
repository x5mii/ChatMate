const socket = io();
const usernameContainer = document.getElementById("username-container");
const chatContainer = document.getElementById("chat-container");
const usernameInput = document.getElementById("username");
const chatWindow = document.getElementById("chat-window");
const chatMessageInput = document.getElementById("chat-message");
const themeToggle = document.getElementById("theme-toggle");

let joined = false; // Prevent multiple joins

function saveAndJoin() {
  const username = usernameInput.value.trim();
  if (username.length < 3) {
    alert("Username must be at least 3 characters long.");
    return;
  }

  if (joined) return; // Prevent duplicate requests
  joined = true;

  socket.emit("validate username", username, (response) => {
    if (response.success) {
      usernameContainer.style.display = "none";
      chatContainer.style.display = "block";
      loadChatHistory(); // Load stored chat
    } else {
      alert(response.message);
      joined = false; // Allow retry
    }
  });
}

function sendMessage() {
  const message = chatMessageInput.value.trim();
  if (message) {
    const data = { username: usernameInput.value, message };
    socket.emit("chat message", data);
    saveChatToLocalStorage(data);
    chatMessageInput.value = "";
  }
}

// Prevent multiple listeners
socket.off("chat message");

socket.on("chat message", (data) => {
  const messageElement = document.createElement("div");
  messageElement.textContent = `${data.username}: ${data.message}`;
  chatWindow.appendChild(messageElement);
});

function appendMessage(data) {
  const messageElement = document.createElement("div");
  messageElement.textContent = `${data.username}: ${data.message}`;
  chatWindow.appendChild(messageElement);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

function saveChatToLocalStorage(data) {
  let chatHistory = JSON.parse(localStorage.getItem("chatHistory")) || [];
  chatHistory.push(data);
  localStorage.setItem("chatHistory", JSON.stringify(chatHistory));
}

function loadChatHistory() {
  let chatHistory = JSON.parse(localStorage.getItem("chatHistory")) || [];
  chatWindow.innerHTML = "";
  chatHistory.forEach(appendMessage);
}

function saveChat() {
  let chatHistory = JSON.parse(localStorage.getItem("chatHistory")) || [];
  if (chatHistory.length === 0) {
    alert("No chat history to save!");
    return;
  }

  let text = chatHistory
    .map((entry) => `${entry.username}: ${entry.message}`)
    .join("\n");
  let blob = new Blob([text], { type: "text/plain" });
  let a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "chat_history.txt";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

function toggleTheme() {
  const isDarkMode = document.body.classList.toggle("dark-mode");
  document.body.classList.toggle("light-mode", !isDarkMode);
  localStorage.setItem("theme", isDarkMode ? "dark" : "light");
}

function applySavedTheme() {
  const savedTheme = localStorage.getItem("theme") || "dark";
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.add("light-mode");
  }
}

themeToggle.addEventListener("click", toggleTheme);
applySavedTheme();
