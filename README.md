# 📝 Simple Notes

A clean, minimal full-stack notes application built with **FastAPI**, **React**, and **PostgreSQL**. Create, view, and delete notes through a polished UI — no authentication, no fluff, just notes.

---

## 🛠️ Tech Stack

| Layer      | Technology                        |
|------------|-----------------------------------|
| Frontend   | React (Vite) + shadcn/ui + Tailwind CSS |
| Backend    | Python (FastAPI) + SQLAlchemy     |
| Database   | PostgreSQL                        |

---

## ✨ Features

- ✅ Create notes with a title and optional content
- ✅ View all notes in a responsive card grid
- ✅ Delete notes with a single click
- ✅ Auto-timestamped entries
- ✅ Real-time note count in the header
- ✅ Empty state when no notes exist
- ✅ Input validation (title is required)
- ✅ Smooth animations and hover interactions
- ✅ Interactive API docs via Swagger UI (`/docs`)

---

## 📁 Project Structure

```
simple-notes/
│
├── backend/
│   ├── main.py              # FastAPI entry point, CORS config
│   ├── database.py          # DB engine, session management
│   ├── models.py            # SQLAlchemy model + Pydantic schemas
│   ├── routes.py            # API route handlers
│   └── requirements.txt     # Python dependencies
│
├── frontend/
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   └── src/
│       ├── main.jsx          # React entry point
│       ├── App.jsx           # Root component with state management
│       ├── index.css         # Global styles + shadcn/ui CSS variables
│       ├── api/
│       │   └── notes.js      # API client (fetch wrapper)
│       ├── lib/
│       │   └── utils.js      # Tailwind merge utility
│       └── components/
│           ├── NoteForm.jsx   # Create note form
│           ├── NoteCard.jsx   # Individual note card
│           ├── NoteList.jsx   # Notes grid layout
│           └── ui/            # shadcn/ui primitives
│               ├── button.jsx
│               ├── input.jsx
│               ├── textarea.jsx
│               └── card.jsx
│
└── README.md
```

---

## 🚀 Setup Instructions

### Prerequisites

- **Python 3.10+** installed
- **Node.js 18+** and npm installed
- **PostgreSQL 14+** installed and running

---

### 1. Database Setup

Open **pgAdmin** or **psql** and create the database:

```sql
CREATE DATABASE simple_notes;
```

Then update the connection string in `backend/database.py` with your PostgreSQL password:

```python
DATABASE_URL = "postgresql://postgres:YOUR_PASSWORD@localhost:5432/simple_notes"
```

> **Note:** If your password contains special characters like `@`, URL-encode them (e.g., `@` → `%40`).

---

### 2. Backend Setup

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

The API will be live at **http://localhost:8000**  
Swagger docs available at **http://localhost:8000/docs**

> Tables are auto-created on first startup — no manual migration needed.

---

### 3. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

The app will be live at **http://localhost:5173**

---

## 📡 API Endpoints

| Method   | Endpoint        | Description              | Request Body                     |
|----------|-----------------|--------------------------|----------------------------------|
| `GET`    | `/notes/`       | Fetch all notes          | —                                |
| `POST`   | `/notes/`       | Create a new note        | `{ "title": "...", "content": "..." }` |
| `DELETE` | `/notes/{id}`   | Delete a note by ID      | —                                |

### Data Model

| Field        | Type      | Description                    |
|--------------|-----------|--------------------------------|
| `id`         | Integer   | Auto-increment primary key     |
| `title`      | String    | Required, cannot be empty      |
| `content`    | String    | Optional                       |
| `created_at` | Timestamp | Auto-generated on creation     |

---

## 💡 Usage

1. Make sure PostgreSQL is running
2. Start the backend (`uvicorn main:app --reload`)
3. Start the frontend (`npm run dev`)
4. Open **http://localhost:5173**
5. Add a title → optionally add content → click **Add Note**
6. Hover over any note card and click the trash icon to delete it

---

## 🔮 Future Improvements

- 🔄 Edit existing notes
- 🔍 Search and filter notes
- 🏷️ Tags or categories
- 🌙 Dark mode toggle
- 📱 Mobile-optimized layout
- 🔐 User authentication
- 📤 Export notes as PDF or Markdown

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
