import { Status } from "@/app/stores/todoItemsStore";

export default function StatusTag({ status }: { status: Status }) {
  return <div className="bg-secondary rounded-xl px-2 w-fit h-min">{status}</div>;
}
