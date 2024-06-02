import { AppRouterTable } from "@/features/main-feature/components/AppRouterTable";
import { PagesRouterTable } from "@/features/main-feature/components/PageRouterTable";
import Image from "next/image";
import Link from "next/link";

function Routing() {
  return (
    <div className="p-8  minH-[92vh] bg-slate-200">
      <section id="features-and-benefits" className="mb-32">
        <div className="mb-20 py-8 px-32">
          <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">
            ファイルベースルーティングとは
          </h2>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <p>
              ファイルベースルーティングとは、プロジェクトのディレクトリ構造（フォルダーとファイルの配置）に基づいてURLルートを自動的に設定する仕組みのことです。
              Next.jsでは、この仕組みによって、特定のフォルダーとファイルの配置がそのままURLパスとしてマッピングされます。
            </p>

            <div className="mt-6">
              <h3 className="text-2xl font-bold mb-4 text-green-600 flex items-center">
                <svg
                  className="w-6 h-6 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                メリット
              </h3>
              <div className="bg-gray-100 p-6 rounded-lg mb-4">
                <h2 className="text-lg font-semibold mb-2">
                  直感的なルーティング
                </h2>
                <p>
                  フォルダーとファイルの構造がそのままURLに対応するため、ルートの構成が直感的に理解しやすくなります。複雑なルーティング設定をコードで書く必要がなく、ファイルの配置だけでルーティングが決まるため、管理が簡単です。
                </p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg mb-4">
                <h2 className="text-lg font-semibold mb-2">自動化</h2>
                <p>
                  新しいページを追加する際に、特別な設定をすることなく、フォルダーにファイルを追加するだけで自動的にルートが生成されます。これにより、開発スピードが向上します。
                </p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg mb-4">
                <h2 className="text-lg font-semibold mb-2">
                  動的ルートのサポート
                </h2>
                <p>
                  動的ルート（例えば、ユーザープロファイルページなど）もファイル名を角括弧で囲むことで簡単に設定できます（例:{" "}
                  <code>[id].js</code>
                  ）。これにより、多様なURLパターンに対応可能です。
                </p>
              </div>
            </div>
          </div>
        </div>
        <h2 className="text-4xl font-bold text-center mb-2 text-gray-800">
          PageRouter vs AppRouter
        </h2>
        <div className="text-xl text-center mb-4 ">
          参考サイト：
          <Link
            className="text-blue-500 underline"
            href="https://rakuraku-engineer.com/posts/nextjs-app/#%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E5%90%8D%E3%81%AE%E6%97%A9%E8%A6%8B%E8%A1%A8"
          >
            【完全版】App
            Routerで最初に知っておくとよさそうな基礎を全部まとめてみた
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-green-600 text-center">
              Page Router
            </h3>
            <h4 className="text-lg font-bold mb-4  flex items-center">概要</h4>
            <div>
              Next.jsの従来のルーティングシステムで、シンプルで分かりやすいファイルベースのルーティングを提供します。
            </div>
            <h4 className="text-lg font-bold my-4  flex items-center">
              ディレクトリ構造
            </h4>
            <div className="p-4 bg-white shadow-lg rounded-lg">
              <Image
                src="/images/main-feature/pagerouter.png"
                width={700}
                height={700}
                alt="Picture of the author"
              />
            </div>
            <PagesRouterTable />
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-red-600 text-center">
              App Router
            </h3>
            <h4 className="text-lg font-bold mb-4  flex items-center">概要</h4>
            <div>
              Next.js13以降の新しいルーティングシステムで、柔軟で強力な機能を提供し、最新のReact機能を活用したモダンなアプローチを採用しています。
            </div>
            <h4 className="text-lg font-bold my-4  flex items-center">
              ディレクトリ構造
            </h4>
            <div className="p-4 bg-white shadow-lg rounded-lg">
              <Image
                src="/images/main-feature/approuter.png"
                width={700}
                height={700}
                alt="Picture of the author"
              />
            </div>
            <AppRouterTable />
            <h4 className="text-lg font-bold my-4  flex items-center">
              特別な意味のファイルの登場
            </h4>
            <div className=" bg-white shadow-lg rounded-lg">
              <Image
                src="/images/main-feature/specialfilename.png"
                width={700}
                height={700}
                alt="Picture of the author"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Routing;
