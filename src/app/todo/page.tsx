import { getTodoList } from "@/features/todo/actions";
import AddButton from "@/features/todo/components/AddButton";
import DeleteButton from "@/features/todo/components/DeleteButton";

interface Todo {
  id: number;
  title: string;
  description: string;
}

async function Todo() {
  const todos = await getTodoList();

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center mb-6">Todoリスト</h1>
      <div className="text-right mb-4">
        <AddButton />
      </div>
      <div className="space-y-4">
        {todos.map((todo: Todo) => (
          <div
            key={todo.id}
            className="flex items-center justify-between border p-4 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div>
              <h2 className="text-xl font-semibold">{todo.title}</h2>
              <p className="text-gray-600">{todo.description}</p>
            </div>
            <div className="flex items-center space-x-2">
              <DeleteButton id={todo.id} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Todo;
