import { getTodoList } from "@/features/todo/actions";
import AddButton from "@/features/todo/components/AddButton";
import DeleteButton from "@/features/todo/components/DeleteButton";

async function Todo() {
  const todos = await getTodoList();

  return (
    <>
      <h1 className="text-2xl font-bold p-4 text-center">Todoリスト</h1>
      <div className="text-right mr-8">
        <AddButton />
      </div>
      <div className="mt-4 p-4">
        {todos.map((todo) => {
          return (
            <button
              key={todo.id}
              className="flex items-center justify-between w-full border p-4 mb-4 rounded-lg bg-white shadow-md hover:shadow-lg"
            >
              <p className="text-lg">{todo.title}</p>
              <div className="space-x-2">
                <DeleteButton id={todo.id} />
              </div>
            </button>
          );
        })}
      </div>
    </>
  );
}

export default Todo;
