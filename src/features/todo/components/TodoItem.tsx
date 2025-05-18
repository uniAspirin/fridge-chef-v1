import { Circle, X } from "lucide-react";
import { Todo } from "../../../types";
import { Draggable } from "@hello-pangea/dnd";

interface TodoItemProps {
  todo: Todo;
  index: number;
  deleteTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
  updateTodoContent: (id: string, content: string) => void;
}

export default function TodoItem({
  todo,
  index,
  deleteTodo,
  toggleTodo,
  updateTodoContent,
}: TodoItemProps) {
  return (
    <Draggable draggableId={todo.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="flex flex-row w-full justify-between items-center mb-1 h-8 text-stone-400"
          style={{
            ...provided.draggableProps.style,
            transform: provided.draggableProps.style?.transform,
            transition: provided.draggableProps.style?.transition,
            // 移除其他所有样式属性，只保留 transform 和 transition
          }}
        >
          <div className="flex flex-row gap-2 flex-auto">
            <button onClick={() => toggleTodo(todo.id)}>
              <Circle fill={todo.done ? "#a6a09b" : "none"} strokeWidth={1.5} />
            </button>
            <div className="border-b border-stone-300 w-full">
              <input
                value={todo.content}
                onChange={(e) => updateTodoContent(todo.id, e.target.value)}
                className={`focus: outline-none ${!todo.done && "text-black"}`}
              />
            </div>
          </div>

          {/* <div className="space-x-2">
            <button onClick={() => deleteTodo(todo.id)}>
              <X strokeWidth={1.5} />
            </button>
          </div> */}
        </div>
      )}
    </Draggable>
  );
}
