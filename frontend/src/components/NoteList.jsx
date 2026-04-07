import NoteCard from "./NoteCard";
import { StickyNote } from "lucide-react";

export default function NoteList({ notes, onDelete }) {
  if (notes.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-muted-foreground">
        <StickyNote className="h-16 w-16 mb-4 opacity-30" strokeWidth={1} />
        <p className="text-lg font-medium">No notes yet</p>
        <p className="text-sm">Create your first note above!</p>
      </div>
    );
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {notes.map((note) => (
        <NoteCard key={note.id} note={note} onDelete={onDelete} />
      ))}
    </div>
  );
}
