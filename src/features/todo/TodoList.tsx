import { useState } from "react";
import AddTodo from "./components/AddTodo";
import TodoFilter from "./components/TodoFilter";
import TodoItems from "./components/TodoItems";
import { Todo, List } from "../../types";
import { DragDropContext, DropResult } from "@hello-pangea/dnd";
import TodoHeader from "./components/TodoHeader";

export default function TodoList({ todoList }: { todoList: List }) {
  const [todos, setTodos] = useState<Todo[]>([
    { id: "1", content: "monkfish", done: false, todo_list_id: todoList.id },
    { id: "2", content: "chorizo", done: false, todo_list_id: todoList.id },
    { id: "3", content: "cheese", done: false, todo_list_id: todoList.id },
  ]);
  const [filter, setFilter] = useState<string>("all");
  const [isExpanded, setIsExpanded] = useState<boolean>(true);

  const addTodo = (content: string) => {
    const newTodo: Todo = {
      id: Date.now().toString(),
      todo_list_id: todoList.id,
      content,
      done: false,
    };
    setTodos((pre) => [...pre, newTodo]);
  };

  const deleteTodo = (id: string) => {
    setTodos((pre) => pre.filter((todo) => todo.id !== id));
  };

  const updateTodContent = (id: string, content: string) => {
    setTodos((pre) =>
      pre.map((todo) => (todo.id === id ? { ...todo, content } : todo))
    );
  };

  const toggleTodo = (id: string) => {
    setTodos((pre) =>
      pre.map((todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo))
    );
  };

  const getFilteredTodos = (todos: Todo[]) => {
    switch (filter) {
      case "active":
        return todos.filter((todo) => !todo.done);
      case "done":
        return todos.filter((todo) => todo.done);
      default:
        return todos;
    }
  };

  const toggleExpanded = () => {
    setIsExpanded((prev) => !prev);
  };

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) {
      deleteTodo(result.draggableId);
      return;
    }
    const newTodos: Todo[] = Array.from(todos);
    const [removed] = newTodos.splice(result.source.index, 1);
    newTodos.splice(result.destination.index, 0, removed);
    setTodos(newTodos);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      {/* <p className="text-4xl font-bold mb-4 text-amber-500">Fridge Chef🧑‍🍳</p> */}
      <TodoHeader
        name={todoList.name}
        isExpanded={isExpanded}
        toggleExpanded={toggleExpanded}
      />
      <div className={isExpanded ? "hidden" : ""}>
        <div className="overflow-y-auto max-h-80">
          <TodoItems
            todos={getFilteredTodos(todos)}
            todoList={todoList}
            deleteTodo={deleteTodo}
            toggleTodo={toggleTodo}
            updateTodoContent={updateTodContent}
          />
          <AddTodo addTodo={addTodo} />
        </div>
        <TodoFilter filter={filter} setFilter={setFilter} />
      </div>

      <p className="text-lg/6 text-neutral-700 mt-1">
        Last week I went to a small Spanish restaurant in Howth. To be honest, I
        didn't expect the food to much but it's amazing......I tryied to make
        the dish myself. It's so easy and delicious.
      </p>
    </DragDropContext>
  );
}
