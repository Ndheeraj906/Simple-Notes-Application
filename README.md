# 📝 Simple Notes

A clean, minimal full-stack notes application built with **FastAPI**, **React**, and **PostgreSQL**. Create, view, and delete notes through a polished UI — no authentication, no fluff, just notes.

**Live Demo:** [https://simple-notes-app-478532845626.us-central1.run.app](https://simple-notes-app-478532845626.us-central1.run.app)

## 🛠️ Tech Stack

| Layer      | Technology                        |
|------------|-----------------------------------|
| Frontend   | React (Vite) + Tailwind CSS       |
| Backend    | Python                            |
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
SIMPLE NOTES/
│
├── backend/
│   ├── main.py                          # FastAPI app & CORS config
│   ├── database.py                      # SQLAlchemy setup (PostgreSQL)
│   ├── models.py                        # ORM models & Pydantic schemas
│   ├── routes.py                        # API endpoints (/notes/)
│   ├── requirements.txt                 # Python dependencies
│   └── __pycache__/                     # (Can delete - auto-generated)
│
├── frontend/
│   ├── index.html                       # Entry HTML file
│   ├── package.json                     # NPM dependencies
│   ├── package-lock.json                # Lock file
│   ├── vite.config.js                   # Vite configuration
│   ├── tailwind.config.js               # Tailwind CSS config
│   ├── postcss.config.js                # PostCSS config
│   ├── jsconfig.json                    # (Optional - can delete)
│   │
│   ├── public/
│   │   └── vite.svg                     # (Optional - can delete)
│   │
│   ├── src/
│   │   ├── main.jsx                     # React entry point
│   │   ├── App.jsx                      # Main app component
│   │   ├── index.css                    # Global styles
│   │   │
│   │   ├── api/
│   │   │   └── notes.js                 # API calls (fetchNotes, createNote, deleteNote)
│   │   │
│   │   ├── components/
│   │   │   ├── NoteList.jsx             # Display all notes
│   │   │   ├── NoteCard.jsx             # Individual note card
│   │   │   ├── NoteForm.jsx             # Add note form
│   │   │   │
│   │   │   └── ui/
│   │   │       ├── button.jsx           # Button component
│   │   │       ├── card.jsx             # Card component
│   │   │       ├── input.jsx            # Input component
│   │   │       └── textarea.jsx         # Textarea component
│   │   │
│   │   └── lib/
│   │       └── utils.js                 # Utility functions
│   │
│   └── node_modules/                    # (Auto-installed by npm)
│
├── .venv/                               # Python virtual environment
├── README.md                            # Project documentation
└── .git/                                # (Optional - version control)
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
DATABASE_URL = "postgresql://postgres:admin123@localhost:5432/simple_notes"
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
- 📤 Export notes as PDF or Markdown and share option
