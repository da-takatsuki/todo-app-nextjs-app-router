import GetApi from "@/features/main-feature/components/GetApi";
import PostApi from "@/features/main-feature/components/PostApi";
import ServerActions from "@/features/main-feature/components/ServerActions";
import Image from "next/image";
import Link from "next/link";

function API() {
  return (
    <div className="py-12  minH-[92vh] bg-slate-200">
      <section id="features-and-benefits" className="mb-32">
        <div className="mb-20 py-8 px-32">
          <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">
            Route Handlers(AppRouter ver)
          </h2>
          <div className="bg-white py-12 px-32 rounded-lg shadow-lg">
            <div className="mb-16">
              <h3 className="text-xl font-bold mb-2">RouteHandlersとは</h3>
              <div>
                RouteHandlersは、Next.jsアプリケーションにおけるAPIルートを作成するための機能です。
                <br />
                これにより、サーバーサイドでのデータ処理や外部APIとの連携を簡単に行うことができます。
                <br />
                ルートハンドラーを使うと、特定のURLパスに対してリクエストを処理する関数を定義できます。
              </div>
            </div>
            <div className="mb-16">
              <h3 className="text-xl font-bold mb-2">ディレクトリ</h3>
              <div className="mb-4">
                Next.jsでは、/appディレクトリ内にAPIルートを定義します。
                <br />
                /appディレクトリ配下にroute.js(ts)を作成し、ルートハンドラーを定義します。
                <br />
                フォルダーとファイルの構造がそのままURLに対応するため、ルートの構成が直感的に理解しやすくなります。
                <br />
                動的なAPIルートを作成する場合は、[]で囲むことで、動的なパラメータのAPIを定義できます。(例：/api/[id]/route.ts)
              </div>
              <Image
                className="m-auto"
                src="/images/main-feature/routehandler.png"
                width={700}
                height={700}
                alt=""
              />
            </div>
            <div className="mb-16">
              <h3 className="text-xl font-bold mb-2">サンプルコード</h3>
              <h4 className="text-md font-bold my-2">GET</h4>
              <GetApi />
              <h4 className="text-md font-bold my-2">POST</h4>
              <PostApi />
            </div>
            <div className="mb-16">
              <h3 className="text-xl font-bold mb-2">参考</h3>
              <Link
                href="https://nextjs.org/docs/app/building-your-application/routing/route-handlers#supported-http-methods"
                className="text-md font-bold my-2 text-blue-500 underline hover:text-blue-800"
              >
                NextJS Route Handlers
              </Link>
            </div>
          </div>
        </div>
        <div className="mb-20 py-8 px-32">
          <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">
            ServerActions
          </h2>
          <div className="bg-white py-12 px-32 rounded-lg shadow-lg">
            <div className="mb-16">
              <h3 className="text-xl font-bold mb-2">ServerActionsとは</h3>
              <div>
                ServerActionsは、サーバー上で実行される非同期関数です。
                <br />
                クライアントサイドのイベント(Buttonなど)からフォームの送信やデータの取得などの処理をサーバー上で実行することができます。
                <br />
                なのでエンドポイントを作成する必要がなく、簡単にデータ更新・取得の処理が書けるというのがメリット。
              </div>
            </div>
            <div className="mb-16">
              <h3 className="text-xl font-bold mb-2">サンプルコード</h3>
              <ServerActions />
            </div>
            <div className="mb-16">
              <h3 className="text-xl font-bold mb-4 text-gray-800">メリット</h3>
              <ul className="list-disc list-inside space-y-2">
                <li className="text-gray-700">
                  サーバーサイドでのデータ処理を簡単に行うことができる(APIもfetchもいらないし、json変換もいらない)
                </li>
                <li className="text-gray-700">
                  コード量が減るのでjsファイルが軽くなる
                </li>
                <li className="text-gray-700">
                  APIを作成する必要がないため、エンドポイントを隠蔽できる
                </li>
              </ul>
            </div>
            <div className="mb-16">
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                API（Route Handlers） vs Server Actions
              </h3>
              <div className="mb-4">
                表を見てわかるように
                <br />
                それぞれServerActionsとRoute
                Handlersでユースケースは異なるので併用して使いましょう。
              </div>
              <table className=" bg-white">
                <thead>
                  <tr>
                    <th className="py-2 px-4 bg-gray-200 text-left">特徴</th>
                    <th className="py-2 px-4 bg-gray-200 text-left">
                      API（Route Handlers）
                    </th>
                    <th className="py-2 px-4 bg-gray-200 text-left">
                      Server Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="py-2 px-4">特徴</td>
                    <td className="py-2 px-4">汎用的</td>
                    <td className="py-2 px-4">限定的</td>
                  </tr>
                  <tr className="border-t">
                    <td className="py-2 px-4">用途</td>
                    <td className="py-2 px-4">
                      データベースとの複雑な連携操作があるケース
                    </td>
                    <td className="py-2 px-4">
                      シンプルなCRUD操作が主のケース
                    </td>
                  </tr>
                  <tr className="border-t">
                    <td className="py-2 px-4">メリット</td>
                    <td className="py-2 px-4">
                      APIを、他のアプリケーションやモバイルアプリも利用可
                    </td>
                    <td className="py-2 px-4">
                      コードの記述量を抑え、コンパクトかつ短時間で開発可
                    </td>
                  </tr>
                  <tr className="border-t">
                    <td className="py-2 px-4">デメリット</td>
                    <td className="py-2 px-4">
                      コードの記述量や開発工程が増える
                    </td>
                    <td className="py-2 px-4">Next.jsでしか利用できない</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mb-16">
              <h3 className="text-xl font-bold mb-2">参考</h3>
              <Link
                href="https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations"
                className="text-md font-bold my-2 text-blue-500 underline hover:text-blue-800"
              >
                Server Actions and Mutations
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default API;
