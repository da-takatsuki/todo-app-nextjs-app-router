import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

function CreateTodoPage() {
  async function createTodo(formData: FormData) {
    "use server";
    const rawFormData = {
      title: formData.get("title") || "",
      description: formData.get("description") || "",
    };
    try {
      await prisma.todo.create({
        data: {
          title: rawFormData.title as string,
          description: rawFormData.description as string,
        },
      });
      redirect("/todo");
    } catch (e) {
      console.log(e);
      throw e;
    }
  }

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
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            追加
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateTodoPage;
