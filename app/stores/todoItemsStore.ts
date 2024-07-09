import { create } from "zustand";

export type Status = "todo" | "pending" | "done";

export type TodoItem = {
  id: string;
  title: string;
  description?: string;
  status: Status;
  dueDate?: Date;
};

type State = {
  todos: TodoItem[];
};

type Action = {
  addTodoItem: (newItem: TodoItem) => void;
  deleteTodoItem: (id: TodoItem['id']) => void;
  changeStatus: (id: TodoItem['id'], newStatus: Status) => void;
};

export const useTodoItemStore = create<State & Action>((set) => ({
  todos: [
    {
      id: '1',
      title: "Submit the math report",
      dueDate: new Date(2025, 7, 3, 15, 40),
      status: "todo",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      id: '2',
      title: "Read an paper",
      dueDate: new Date(2024, 8, 9, 8, 50),
      status: "done",
    },
    {
      id: '3',
      title: "Complete slides",
      // dueDate: 20250701,
      status: "pending",
    },
  ],
  addTodoItem: (newItem) =>
    set((state) => ({
      todos: [ ...state.todos, newItem ],
    })),
  deleteTodoItem: (id) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),
  changeStatus: (id, newStatus) =>
    set((state) => {
      const updatedTodos = state.todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, status: newStatus };
        }
        return todo;
      });
      return { todos: updatedTodos };
    }),
}));
