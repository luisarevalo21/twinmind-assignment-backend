# TwinMind Backend

> The backend service powering TwinMind — enabling audio transcription, memory storage, and AI-based chat with personal experiences.

## 🧠 Overview

This backend handles user authentication, audio transcription using OpenAI APIs, and stores memory data securely. Users can record audio, retrieve AI-generated summaries, and chat with their memories using OpenAI’s GPT models.

## 🚀 Features

- 🔐 **Google OAuth Authentication** via Firebase
- 🎙️ **Audio Transcription** using OpenAI Whisper
- 🧠 **Chat with Memories** using GPT-based memory context
- 🗃️ **Memory Storage**: Save transcripts and summaries per user
- 📄 **Summary Generation** after audio recording sessions
- 💬 **Streaming Chat Responses**
- ❌ No calendar integration
- ❌ No tests implemented yet

## 🧰 Tech Stack

- **Language**: Node.js
- **Framework**: Express
- **Auth**: Firebase Admin SDK
- **AI Services**: OpenAI API (Whisper + GPT-4)
- **Database**: Firestore

## 📦 Setup

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/twinmind-backend.git
cd twinmind-backend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Variables

Create a `.env` file in the root with:

```env
OPENAI_API_KEY=
```

> Be sure to format the Firebase private key correctly (escaped line breaks or base64 encoded).

## 🧪 API Endpoints

### `POST /newUser`

- Creates a new user and checks if they exists

### `POST /memories/new-audio`

- Upload audio file or stream from frontend
- Returns: Transcript text, timestamped chunks

### `POST /memories/new-summary`

- creates a summary based on the entire audio file sent and transcripes the audio and sends the summary formmatted

### `GET /memory/:id`

- Gets memories for the specific user logged in

### `GET /memory/details/:memoryId`

- Gets memories details for a specific memory

### `POST /memory/new-prompt`

- creates a new summary based on the text send and prompted stored in memory

## 🛠 Error Handling

Robust error responses for:

- Auth token issues
- Audio processing failures
- API rate limits or OpenAI downtime
- Invalid/missing input data

## 📄 License

MIT License

## 📎 Related

- [TwinMind Frontend Repo](https://github.com/your-username/twinmind-frontend)
