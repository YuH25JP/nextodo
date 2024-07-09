"use client";
import useSelectedTodoItemStore from "@/app/stores/selectedTodoItemStore";
import { Status, useTodoItemStore } from "@/app/stores/todoItemsStore";
import { CalendarDaysIcon, ClockIcon } from "lucide-react";
import StatusTag from "../../statusTag";
import { Separator } from "@/components/ui/separator";
import ButtonGroup from "./buttonGroup";
import clsx from "clsx";

export default function DetailedTodoItem() {
  const todos = useTodoItemStore((state) => state.todos);
  const selectedTodoItemId = useSelectedTodoItemStore((state) => state.id);
  const detailedTodoItem = todos.filter(
    (todo) => todo.id === selectedTodoItemId
  );
  const detailedTodoItemStatus = detailedTodoItem[0]?.status;
  const statusColor =
    detailedTodoItemStatus === "todo"
      ? "bg-red-500"
      : detailedTodoItemStatus === "pending"
      ? "bg-yellow-500"
      : "bg-green-500";

  const content =
    selectedTodoItemId === undefined ? (
      <div>unselected</div>
    ) : (
      <>
        <div className="flex items-center mb-1">
          <div
            className={clsx(
              "w-[6px] h-[1.5rem] mr-1 rounded-full",
              statusColor
            )}
          ></div>
          <p className="text-2xl">{detailedTodoItem[0].title}</p>
        </div>
        <div className="flex gap-3 items-center">
          <StatusTag
            status={detailedTodoItem[0].status.toUpperCase() as Status}
          />
          {detailedTodoItem[0].dueDate ? (
            <>
              <div className="flex items-center text-gray-400">
                <CalendarDaysIcon className="mr-1" width={16} height={16} />
                <p>{detailedTodoItem[0]?.dueDate?.toLocaleDateString()}</p>
              </div>
              <div className="flex items-center text-gray-400">
                <ClockIcon className="mr-1" width={16} height={16} />
                <p>{detailedTodoItem[0]?.dueDate?.toLocaleTimeString()}</p>
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
        <p className="text-gray-400">{detailedTodoItem[0]?.description}</p>
        <Separator className="mt-1 mb-2" />
        <div className="flex gap-2 justify-end">
          <ButtonGroup id={detailedTodoItem[0].id} />
        </div>
      </>
    );
  return <div>{content}</div>;
}
