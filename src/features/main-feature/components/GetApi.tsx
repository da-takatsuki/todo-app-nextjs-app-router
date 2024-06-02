"use client";
import "highlight.js/styles/github.css";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";

export default function GetApi() {
  const markdown = `
\`\`\`jsx
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id')
  const res = await fetch('https://data.mongodb-api.com/product/${"id"}', {
    headers: {
      'Content-Type': 'application/json',
      'API-Key': process.env.DATA_API_KEY!,
    },
  })
  const product = await res.json()

  return Response.json({ product })
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
