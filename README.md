
# 🚀 ChatGPT Clone – Mern-Stack AI Chat Application  

![MERN](https://img.shields.io/badge/MERN-Stack-green?style=for-the-badge)  
![AI Powered](https://img.shields.io/badge/AI-Powered-blueviolet?style=for-the-badge)  
![Socket.io](https://img.shields.io/badge/WebSockets-Realtime-orange?style=for-the-badge)  
![Pinecone](https://img.shields.io/badge/Pinecone-VectorDB-9cf?style=for-the-badge)  

---

## 📌 Overview  
This is a **high-level ChatGPT Clone** built with the **MERN stack** (MongoDB, Express, React, Node.js), **Socket.io** for real-time communication, **OpenAI API** for AI-driven responses, and **Pinecone** as a vector database for memory and semantic search.  

It recreates a **ChatGPT-like experience** with:  
- 🔑 Secure authentication  
- 💬 Real-time conversations  
- 🧠 Context-aware AI memory  
- 📡 Scalable backend  
- 🎨 Stunning, modern UI  

---

## ✨ Features  

- 🔐 **Authentication & Authorization** (JWT + bcrypt)  
- 💬 **Real-time Messaging** (Socket.io)  
- 🤖 **AI Chatbot** powered by OpenAI  
- 📚 **Semantic Memory** with Pinecone Vector DB  
- 🖥️ **Modern UI/UX** (React + TailwindCSS + Framer Motion)  
- 📊 **MERN REST API** + WebSocket integration  
- 🚀 **Scalable & Deployment Ready**  

---

## 🏗️ Tech Stack  

**Frontend**  
- ⚛️ React.js  
- 🎨 TailwindCSS 
- 🔄 Axios  

**Backend**  
- 🟢 Node.js + Express.js  
- 🔐 JWT Authentication  
- ⚡ Socket.io  

**AI & Database**  
- 🤖 GEMINI API (GPT Models)  
- 📦 Pinecone (Vector DB)  
- 🍃 MongoDB Atlas  

---

## 📂 Project Structure  
```
Chat-GPT/
│
├── Backend/
│   ├── .env
│   ├── .gitignore
│   ├── node_modules/
│   ├── package-lock.json
│   ├── package.json
│   ├── server.js
│   └── src/
│       ├── app.js
│       ├── controllers/
│       │   ├── auth.controller.js
│       │   └── chat.controller.js
│       ├── db/
│       │   └── db.js
│       ├── middlewares/
│       │   └── auth.middleware.js
│       ├── models/
│       │   ├── chat.model.js
│       │   ├── message.model.js
│       │   └── user.model.js
│       ├── routes/
│       │   ├── auth.routes.js
│       │   └── chat.routes.js
│       ├── services/
│       │   ├── ai.service.js
│       │   └── vector.service.js
│       └── sockets/
│           └── socket.server.js
│
├── Frontend/
│   ├── .gitignore
│   ├── eslint.config.js
│   ├── index.html
│   ├── node_modules/
│   ├── package-lock.json
│   ├── package.json
│   ├── public/
│   │   └── vite.svg
│   ├── README.md
│   ├── src/
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── AppRoutes.jsx
│   │   ├── assets/
│   │   │   └── react.svg
│   │   ├── components/
│   │   │   ├── ProtectedRoute.jsx
│   │   │   ├── ThemeToggle.jsx
│   │   │   └── chat/
│   │   │       ├── aiClient.js
│   │   │       ├── ChatComposer.css
│   │   │       ├── ChatComposer.jsx
│   │   │       ├── ChatLayout.css
│   │   │       ├── ChatMessages.css
│   │   │       ├── ChatMessages.jsx
│   │   │       ├── ChatMobileBar.css
│   │   │       ├── ChatMobileBar.jsx
│   │   │       ├── ChatSidebar.css
│   │   │       └── ChatSidebar.jsx
│   │   ├── main.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   └── Register.jsx
│   │   ├── store/
│   │   │   ├── chatSlice.js
│   │   │   └── store.js
│   │   └── styles/
│   │       └── theme.css
│   └── vite.config.js
│
├── README.md
├── temp.excalidraw
```

## ⚡ Getting Started  

### 1️⃣ Clone the Repository  
```bash
git clone https://github.com/lakshaygupta2004/Chat-GPT.git
cd Chat-GPT
```
### 2️⃣ Setup Backend
```bash
cd Backend
npm install
```
Create a .env file inside Backend/
```bash
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret
GEMINI_API_KEY=your_openai_key
PINECONE_API_KEY=your_pinecone_key
```
Start backend server:
```
npm start
```

### 3️⃣ Setup Frontend
```
cd ../Frontend
npm install
npm run dev
```
## 🚀 Deployment

- Frontend & Backend → Render ➡️ https://chat-gpt-ikbk.onrender.com

- Database → MongoDB Atlas

- Vector DB → Pinecone

## 🤝 Contributing

Contributions are welcome!

Fork the repo

Create a new branch (feature/your-feature)

Commit changes

Submit a Pull Request 🚀


``` 
This Project is made 🙌 by Lakshay Gupta
