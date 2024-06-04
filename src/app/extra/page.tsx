import Link from "next/link";

function Extra() {
  return (
    <div className="container mx-auto p-8">
      <div className="my-12">
        <h2 className="text-3xl mb-2 text-center font-bold text-gray-800">
          レンダリングの速さを比較してみる
        </h2>
        <div className="text-center">
          CSR・SSR・SSGのコンポーネントでそれぞれポケモンAPIを80回叩いて、レンダリング速度を比較してみます。
          <br />
          ※CSRはスーパーリロードで確認してください。
        </div>
      </div>
      <div className="flex flex-col items-center gap-4">
        <Link
          href="/extra/csr"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md w-[400px] text-center"
        >
          クライアントサイドレンダリング ver
        </Link>
        <Link
          href="/extra/ssr"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md w-[400px] text-center"
        >
          サーバーサイドレンダリング ver
        </Link>
        <div className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-md w-[400px] text-center">
          静的サイトジェネレーター
          ver(なんかVercel上だとバグってるのでローカルで確認してください)
        </div>
      </div>
    </div>
  );
}

export default Extra;
