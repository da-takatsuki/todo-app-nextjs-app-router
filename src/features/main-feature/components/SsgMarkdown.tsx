"use client";
import "highlight.js/styles/github.css";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";

export default function SsgMarkdown() {
  const markdown = `
\`\`\`jsx

export default async function StaticComponent() {
  const data = await fetch('http://localhost:3000/api/data'); //デフォルトはSSGになる。fetchとか使ってない場合もSSGになる;

  return (
    <div>
      <h1>Server Static Generator Component</h1>
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
