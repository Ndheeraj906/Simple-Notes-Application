import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trash2, Clock } from "lucide-react";

export default function NoteCard({ note, onDelete }) {
  const formattedDate = new Date(note.created_at).toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <Card className="group animate-fade-in-up transition-all hover:shadow-md hover:border-primary/30">
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-lg leading-snug break-words">{note.title}</CardTitle>
          <Button
            id={`delete-note-${note.id}`}
            variant="ghost"
            size="icon"
            className="shrink-0 opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground hover:text-destructive cursor-pointer"
            onClick={() => onDelete(note.id)}
            aria-label={`Delete note: ${note.title}`}
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      {note.content && (
        <CardContent>
          <p className="text-sm text-muted-foreground whitespace-pre-wrap break-words leading-relaxed">
            {note.content}
          </p>
        </CardContent>
      )}
      <CardFooter className="pt-2">
        <span className="flex items-center gap-1 text-xs text-muted-foreground/70">
          <Clock className="h-3 w-3" />
          {formattedDate}
        </span>
      </CardFooter>
    </Card>
  );
}
