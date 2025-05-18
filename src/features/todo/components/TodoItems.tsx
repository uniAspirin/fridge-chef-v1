import { ChevronDown } from "lucide-react";
import { Todo, List } from "../../../types";
import TodoItem from "./TodoItem";
import { Droppable } from "@hello-pangea/dnd";

interface TodoListProps {
  todos: Todo[];
  todoList: List;
  deleteTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
  updateTodoContent: (id: string, content: string) => void;
}

export default function TodoItems({
  todos,
  todoList,
  deleteTodo,
  toggleTodo,
  updateTodoContent,
}: TodoListProps) {
  return (
    <div>
      <Droppable droppableId={todoList.id}>
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="w-full"
          >
            {todos.map((todo: Todo, index: number) => (
              <TodoItem
                key={todo.id}
                index={index}
                todo={todo}
                deleteTodo={deleteTodo}
                toggleTodo={toggleTodo}
                updateTodoContent={updateTodoContent}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}
