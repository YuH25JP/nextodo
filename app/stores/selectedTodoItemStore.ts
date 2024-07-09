import { create } from "zustand";
import { TodoItem } from "./todoItemsStore";

type State = {
  id: TodoItem["id"] | undefined;
};

type Action = {
  updateId: (newId: TodoItem["id"] | undefined) => void;
};

const useSelectedTodoItemStore = create<State & Action>((set) => ({
  id: undefined,
  updateId: (newId) => set({ id: newId }),
}));

export default useSelectedTodoItemStore;
