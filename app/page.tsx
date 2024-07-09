import TodoList from "./components/ui/dashboard/todoList";
import Kanban from "./components/ui/dashboard/kanban";
import DetailedTodoItem from "./components/ui/dashboard/detailCard/detailedTodoItem";
import AddForm from "./components/ui/dashboard/addForm.tsx/addForm";

export default function Home() {
  return (
    <main className="flex flex-col gap-4 p-4 justify-center 2xl:w-2/3">
      {/* <div className="border rounded-xl p-3 w-1/2">
        <AddForm></AddForm>
      </div> */}
      <div className="grid grid-cols-2 gap-4">
        <div id="todo-list">
          <p className="text-2xl font-bold">Todoリスト</p>
          <div className="border rounded-xl p-3">
            <TodoList></TodoList>
          </div>
        </div>
        <div id="todo-detailed">
          <p className="text-2xl font-bold">詳細</p>
          <div className="border rounded-xl p-3">
            <DetailedTodoItem></DetailedTodoItem>
          </div>
        </div>
      </div>
      <div>
        <p className="text-2xl font-bold">カンバン</p>
        <div className="border rounded-xl p-3">
          <Kanban></Kanban>
        </div>
      </div>
    </main>
  );
}
