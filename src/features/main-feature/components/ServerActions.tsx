"use client";
import "highlight.js/styles/github.css";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";

export default function ServerActions() {
  const markdown = `
\`\`\`jsx
export default function Sample() {

  //この関数をサーバー上で実行させる
  async function createTodo(formData: FormData) {
    "use server"; // この行を追加することで、サーバー上で実行される
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;

    try {
      // prisma使ってるけど、そのままSQLでもOK
      await prisma.todo.create({
        data: { title, description },
      });
      redirect("/todo");
    } catch (e) {
      console.error(e);
    }
  }

  return (
      <form action={createTodo}> // formのactionにサーバーで実行したい関数を指定
        <input
          type="text"
          id="title"
          name="title"
        />
        <textarea
          id="description"
          name="description"
        />
        <button
          type="submit"
        >
          追加
        </button>
      </form>
    </div>
  );
}
\`\`\`
`;

  return (
    <div className="bg-slate-500 p-1">
      <ReactMarkdown className="bg-black" rehypePlugins={[rehypeHighlight]}>
        {markdown}
      </ReactMarkdown>
    </div>
  );
}
