import Link from "next/link";

const About = () => {
  return (
    <div className="container mx-auto mt-8 flex">
      <div className="p-4 fixed bg-gray-800 rounded-md">
        <ul className="space-y-4 ">
          <li>
            <Link
              href="#what-is-nextjs"
              className="text-white hover:underline font-semibold"
            >
              Next.jsとは
            </Link>
          </li>
          <li>
            <Link
              href="#why-use-nextjs"
              className="text-white hover:underline font-semibold"
            >
              なぜNext.jsを使用するのか
            </Link>
          </li>
          <li>
            <Link
              href="#features-and-benefits"
              className="text-white hover:underline font-semibold"
            >
              メリット・デメリット
            </Link>
          </li>
        </ul>
      </div>
      <div className="w-3/4 ml-auto py-12">
        <section id="what-is-nextjs" className="mb-32">
          <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">
            Next.jsとは
          </h2>
          <p className="text-lg text-center text-gray-700 leading-relaxed">
            ReactベースのフルスタックWebアプリケーションフレームワークです。
            <br />
            <span className="font-bold">
              サーバーサイドレンダリング(SSR)、静的サイト生成(SSG)、ルーティング、ゼロコンフィグなどの機能を提供します。
            </span>
            <br />
            Reactはクライアントサイドのみをサポートしますが、Next.jsは
            <span className="font-bold">サーバサイド機能もサポート</span>
            します。
            <br />
            開発元はVercel社(
            <Link
              href="https://vercel.com/"
              className="text-blue-500 hover:underline"
            >
              Vercel.com
            </Link>
            )
          </p>
        </section>
        <section id="why-use-nextjs" className="mb-32">
          <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">
            なぜNext.jsを使用するのか
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-green-600">
                SSR/SSGができる
              </h3>
              <p className="text-lg text-gray-700">
                Next.jsはサーバーサイドレンダリングをサポートしており、
                ユーザーのリクエストに応じてサーバーでページを生成します。
                <br />
                これにより、初回読み込み時の表示速度が向上し、SEOの効果も高まります。
              </p>
              <Link
                href="/main-feature/rendering"
                className="text-blue-600 hover:underline mt-4 block"
              >
                CSR/SSR/SSGについて詳しくはこちら →
              </Link>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-green-600">
                サーバも開発できる
              </h3>
              <p className="text-lg text-gray-700">
                フロントエンドだけでなく、バックエンドのAPIも同じプロジェクト内で開発できます。
                <br />
                フォルダーにAPIルートを作成することで、サーバーサイドロジックを簡単に実装可能です。
                <br />
                また新しくServerActions機能によりクライアントのファイルの中でサーバで実行可能な処理を実装できるようになりました。
              </p>
              <Link
                href="/main-feature/api"
                className="text-blue-600 hover:underline mt-4 block"
              >
                APIRoute / ServerActionsについて →
              </Link>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-green-600">
                ファイルベースルーティング
              </h3>
              <p className="text-lg text-gray-700">
                Next.jsは自動的にルーティングを処理してくれます。
                <br />
                これにより、ページ間の移動がスムーズであり、
                開発者はルーティングに関する心配をする必要がありません。
              </p>
              <Link
                href="/main-feature/routing"
                className="text-blue-600 hover:underline mt-4 block"
              >
                PageRouter vs AppRouter はこちら →
              </Link>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-green-600">
                ゼロコンフィグ
              </h3>
              <p className="text-lg text-gray-700">
                Next.jsは設定ファイルを必要とせず、すぐに開発を始めることができます。
                <br />
                ルーティング周りの設定や画像最適化、ホットリロード、TypeScriptのサポートもしています。
                <br />
                ESLintもデフォルトで入っているので、開発者は環境構築に時間をかけることなく、すぐに開発を始めることができます。
              </p>
            </div>
          </div>
        </section>
        <section id="features-and-benefits" className="mb-32">
          <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">
            メリット・デメリット
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
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
              <ul className="list-disc ml-6 space-y-2 text-gray-700">
                <li>
                  <strong>全ての機能が揃っている:</strong>{" "}
                  Next.jsはサーバーサイドレンダリング（SSR）、静的サイト生成（SSG）、API
                  Routesなど、現代のウェブアプリケーションに必要な機能を包括的に提供します。
                </li>
                <li>
                  <strong>パフォーマンスとSEOの向上:</strong>{" "}
                  キャッシュの設定など多様な設定が可能で、ページロード速度が向上し、SEOにも良い影響を与えます。
                </li>
                <li>
                  <strong>広範なエコシステムとコミュニティ:</strong>{" "}
                  Next.jsは大規模なコミュニティと豊富なプラグインエコシステムを持っており、サポートとリソースが充実しています。
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-red-600 flex items-center">
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
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
                デメリット
              </h3>
              <ul className="list-disc ml-6 space-y-2 text-gray-700">
                <li>
                  <strong>複雑さの増加:</strong>{" "}
                  新機能の追加により、フレームワークが複雑になり、学習曲線が急になることがあります。
                </li>
                <li>
                  <strong>過度なマジック:</strong>{" "}
                  自動的に多くの処理が行われるため、予期しない動作を引き起こすことがあります。
                </li>
                <li>
                  <strong>頻繁な変更:</strong>{" "}
                  ページルーターからアプリルーターへの変更など、破壊的な変更が多く、既存のコードや設定が動作しなくなることがあります。
                </li>
                <li>
                  <strong>限定的なデプロイ先:</strong>{" "}
                  Vercelに最適化されており、他のホスティングプラットフォームでのデプロイが難しい場合があります。
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 text-center">
            <ul className=" ml-6 space-y-2 text-gray-700">
              <li>
                <a
                  href="https://leerob.io/blog/using-nextjs"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Why Im Using Next.js
                </a>
                <br />
                Next.jsの利点を詳細に説明しています。包括的な機能セットと開発者エクスペリエンスの向上が強調されています。
              </li>
              <li>
                <a
                  href="https://www.epicweb.dev/why-i-wont-use-nextjs"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Why I Wont Use Next.js
                </a>
                <br />:
                Next.jsの制約や問題点について議論されています。特にVercel依存と頻繁な破壊的変更が指摘されています。
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
