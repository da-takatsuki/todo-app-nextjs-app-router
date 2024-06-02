"use client";
import "highlight.js/styles/github.css";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";

export default function SsrMarkdown() {
  const markdown = `
\`\`\`jsx

//デフォルトでServerComporntentなので、Server側で実行してHTMLを生成する
export default async function ServerComponent() {
  const data = await fetch('http://localhost:3000/api/data', { cache: 'no-store' }); //キャッシュしないことでSSRになる(サイドリクエストしてくれる);

  return (
    <div>
      <h1>Server Side Rendered Component</h1>
      <p>Data: {data}</p>
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
