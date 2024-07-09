"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";
import { CalendarIcon, PlusCircleIcon } from "lucide-react";
import { useState } from "react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import { useTodoItemStore } from "@/app/stores/todoItemsStore";
import { v4 as uuidv4 } from "uuid";

export default function AddForm() {
  const addTodoItem = useTodoItemStore((state) => state.addTodoItem);

  const [title, setTitle] = useState<string>("");
  const [dueDate, setDueDate] = useState<Date | undefined>();
  const [description, setDescription] = useState<string>();

  const handleSubmit = () => {
    const newId = uuidv4();
    addTodoItem({
      id: newId,
      title,
      dueDate,
      description,
      status: "todo",
    });
    setTitle("");
    setDueDate(undefined);
    setDescription("");
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="grid grid-cols-12 items-center gap-4">
        <Label className="col-span-2 justify-self-end" htmlFor="todo-title">
          タイトル
        </Label>
        <Input
          className="col-span-10"
          defaultValue={title}
          value={title}
          id="todo-title"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-12 items-center gap-4">
        <Label className="col-span-2 justify-self-end" htmlFor="todo-dueDate">
          期限
        </Label>
        <Popover>
          <PopoverTrigger asChild className="col-span-10" id="todo-dueDate">
            <Button
              variant={"outline"}
              className={cn(
                "w-[200px] h-min justify-start text-left font-normal",
                !dueDate && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {dueDate ? format(dueDate, "PPP") : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <Calendar
              mode="single"
              selected={dueDate}
              onSelect={setDueDate}
              className="border"
            />
          </PopoverContent>
        </Popover>
      </div>
      <div className="grid grid-cols-12 items-center gap-4">
        <Label
          className="col-span-2 justify-self-end"
          htmlFor="todo-description"
        >
          詳細
        </Label>
        <Textarea
          className="col-span-10"
          id="todo-description"
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <Button className="h-min" onClick={() => handleSubmit()}>
        <PlusCircleIcon className="w-4 h-4 mr-2" />
        Add
      </Button>
    </div>
  );
}
