"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const getTodoList = async () => {
  const todos = await prisma.todo.findMany();
  revalidatePath("/todo");
  return todos;
};

export async function createTodo(formData: FormData) {
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

export async function deleteTodo(id: number) {
  "use server";
  try {
    await prisma.todo.delete({
      where: {
        id: id,
      },
    });
    revalidatePath("/todo");
  } catch (e) {
    console.log(e);
    throw e;
  }
}
