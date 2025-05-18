export interface Todo {
  id: string;
  todo_list_id: string;
  content: string;
  done: boolean;
}

export interface List {
  id: string;
  name: string;
  user_id: string;
}

export interface User {
  id: string;
  email: string; // for login
  username: string; // just for showing the user info
  password: string;
}
