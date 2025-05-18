import { useState } from "react";
import { CircleDashed } from "lucide-react";

interface AddTodoProps {
  addTodo: (text: string) => void;
}

export default function AddTodo({ addTodo }: AddTodoProps) {
  const [text, setText] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim() === "") {
      return;
    }
    addTodo(text);
    setText("");
  };

  return (
    <form
      onClick={handleSubmit}
      className="flex flex-row w-full gap-2 mb-1 h-8 items-center"
    >
      <button className="text-neutral-500">
        <CircleDashed color="#bdbdbd" strokeWidth={1.5} />
      </button>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full focus: outline-none border-b border-neutral-300"
      />
    </form>
  );
}
