"use client";
import "highlight.js/styles/github.css";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";

export default function CsrMarkdown() {
  const markdown = `
\`\`\`jsx
"use client"; // この行を追加することで、クライアントサイドレンダリングを強制します

import useSWR from 'swr';

const fetcher = (url) => fetch(url).then(res => res.json());

export default function ClientComponent() {
  const { data, error } = useSWR('/api/data', fetcher); // SWRを使っているが、useEffectでもOK

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1>Client Side Rendered Component with SWR</h1>
      <p>Data: {data.message}</p>
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
