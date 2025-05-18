import TodoList from "./features/todo/TodoList";
import "./style.css";
import { List } from "./types";
import Login from "./features/user/Login";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Register from "./features/user/Register";
import Explore from "./features/explore/Explore";
import RecipeDetail from "./features/explore/components/RecipeDetail";

export default function App() {
  const queryClient = new QueryClient();

  const testList: List = {
    id: "test",
    user_id: "brian",
    name: "Sherry Monkfish",
  };

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/todo-list"
              element={<TodoList todoList={testList} />}
            />
            <Route path="/explore" element={<Explore />} />
            <Route path="/detail" element={<RecipeDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
