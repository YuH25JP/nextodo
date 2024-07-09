"use client";

import useSelectedTodoItemStore from "@/app/stores/selectedTodoItemStore";
import {
  Status,
  TodoItem,
  useTodoItemStore,
} from "@/app/stores/todoItemsStore";
import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  CircleCheckBigIcon,
  CircleDotIcon,
  CircleIcon,
  ListPlusIcon,
  PlusCircleIcon,
} from "lucide-react";

export default function TodoList() {
  const todos = useTodoItemStore((state) => state.todos);
  const changeStatus = useTodoItemStore((state) => state.changeStatus);

  const updateId = useSelectedTodoItemStore((state) => state.updateId);
  const handleClick = (id: TodoItem["id"]) => {
    updateId(id);
  };
  const todosHTML = todos.map((todo) => (
    <div className="flex items-center" key={todo.title}>
      {/* <Checkbox className="mr-3 rounded-full w-6 h-6" defaultChecked={todo.status === 'done'} /> */}
      <ToggleGroup
        type="single"
        className="gap-0 mr-2 border rounded-lg"
        defaultValue={todo.status}
        size={"sm"}
        onValueChange={(v) => changeStatus(todo.id, v as Status)}
      >
        <ToggleGroupItem value="todo" className="rounded-r-none">
          <CircleIcon />
        </ToggleGroupItem>
        <ToggleGroupItem value="pending" className="rounded-none">
          <CircleDotIcon />
        </ToggleGroupItem>
        <ToggleGroupItem value="done" className="rounded-l-none">
          <CircleCheckBigIcon />
        </ToggleGroupItem>
      </ToggleGroup>
      <p
        className="text-xl hover:underline hover:cursor-pointer"
        onClick={() => handleClick(todo.id)}
      >
        {todo.title}
      </p>
    </div>
  ));
  return (
    <>
      <div className="flex flex-col gap-2">{todosHTML}</div>
      <Button
        className="mt-4 rounded-full hover:bg-primary hover:text-primary-foreground"
        variant={"outline"}
      >
        <ListPlusIcon className="w-4 h-4 mr-2" />
        新規作成
      </Button>
    </>
  );
}
