import useSelectedTodoItemStore from "@/app/stores/selectedTodoItemStore";
import { TodoItem, useTodoItemStore } from "@/app/stores/todoItemsStore";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PencilIcon, Trash2Icon } from "lucide-react";

export default function ButtonGroup({ id }: { id: TodoItem["id"] }) {
  const deleteTodoItem = useTodoItemStore((state) => state.deleteTodoItem);
  const updateId = useSelectedTodoItemStore((state) => state.updateId);
  const handleDelete = (targetId: TodoItem["id"]) => {
    updateId(undefined);
    deleteTodoItem(targetId);
  };
  return (
    <>
      <Button className="h-min" variant={"secondary"}>
        <PencilIcon size={16} className="mr-2" />
        編集
      </Button>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="h-min" variant={"destructive"}>
            <Trash2Icon size={16} className="mr-2" />
            削除
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              Are you sure you want to delete this item?
            </DialogTitle>
            <DialogDescription>
              {
                "Please confirm by clicking the 'Delete' button if you really want to remove this item. This action cannot be undone."
              }
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <Button
                className="h-min focus:ring-2"
                onClick={() => handleDelete(id)}
                autoFocus
                variant={"destructive"}
              >
                削除
              </Button>
            </DialogClose>
            <DialogClose asChild>
              <Button className="h-min" variant={"secondary"}>
                キャンセル
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
