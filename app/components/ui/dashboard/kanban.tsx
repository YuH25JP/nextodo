export default function Kanban() {
  return (
    <div className="grid grid-cols-3 gap-2">
      <div>
        <p className="text-xl text-red-500 font-semibold">Todo</p>
        <div className="bg-secondary rounded-md p-2">hello</div>
      </div>
      <div>
        <p className="text-xl text-yellow-500 font-semibold">Pending</p>
        <div className="bg-secondary rounded-md p-2">hello</div>
      </div>
      <div>
        <p className="text-xl text-green-500 font-semibold">Done</p>
        <div className="bg-secondary rounded-md p-2">hello</div>
      </div>
    </div>
  );
}
