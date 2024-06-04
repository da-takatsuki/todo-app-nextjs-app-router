import AddButton from "@/features/todo-create/components/AddButton";
import { createTodo } from "@/features/todo/actions";

function CreateTodoPage() {
  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white">
      <h2 className="text-lg font-semibold mb-4 text-center">タスク追加</h2>
      <form action={createTodo}>
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            rows={3}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          ></textarea>
        </div>
        <div className="flex justify-end">
          <AddButton />
        </div>
      </form>
    </div>
  );
}

export default CreateTodoPage;
