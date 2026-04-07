import { useState, useEffect, useCallback } from "react";
import { fetchNotes, createNote, deleteNote } from "./api/notes";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import { StickyNote } from "lucide-react";

export default function App() {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadNotes = useCallback(async () => {
    try {
      const data = await fetchNotes();
      setNotes(data);
      setError("");
    } catch {
      setError("Could not connect to the server. Is the backend running?");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadNotes();
  }, [loadNotes]);

  const handleAdd = async (note) => {
    const created = await createNote(note);
    setNotes((prev) => [created, ...prev]);
  };

  const handleDelete = async (id) => {
    await deleteNote(id);
    setNotes((prev) => prev.filter((n) => n.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Header */}
      <header className="border-b bg-card/80 backdrop-blur-md sticky top-0 z-10">
        <div className="mx-auto max-w-5xl px-4 py-4 flex items-center gap-3">
          <div className="flex items-center justify-center h-9 w-9 rounded-lg bg-primary text-primary-foreground">
            <StickyNote className="h-5 w-5" />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight">Simple Notes</h1>
            <p className="text-xs text-muted-foreground">Capture ideas instantly</p>
          </div>
          <span className="ml-auto text-xs font-medium text-muted-foreground bg-secondary px-2 py-1 rounded-full">
            {notes.length} {notes.length === 1 ? "note" : "notes"}
          </span>
        </div>
      </header>

      {/* Main */}
      <main className="mx-auto max-w-5xl px-4 py-8 space-y-8">
        <NoteForm onAdd={handleAdd} />

        {error && (
          <div className="rounded-lg border border-destructive/30 bg-destructive/5 px-4 py-3 text-sm text-destructive">
            {error}
          </div>
        )}

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary/30 border-t-primary" />
          </div>
        ) : (
          <NoteList notes={notes} onDelete={handleDelete} />
        )}
      </main>

      {/* Footer */}
      <footer className="border-t mt-12">
        <div className="mx-auto max-w-5xl px-4 py-4 text-center text-xs text-muted-foreground">
          Simple Notes &middot; Built with FastAPI &amp; React
        </div>
      </footer>
    </div>
  );
}
