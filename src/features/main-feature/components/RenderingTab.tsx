"use client";
import Image from "next/image";
import { useState } from "react";

interface TabType {
  id: number;
  name: string;
}

const RenderingTab = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex: number) => {
    setActiveTab(tabIndex);
  };

  const tabList: TabType[] = [
    { id: 1, name: "CSR" },
    { id: 2, name: "SSR" },
    { id: 3, name: "SSG" },
  ];

  return (
    <div className="container mx-auto mt-10 px-12">
      <div className="w-full flex justify-center">
        <div className="bg-white shadow-lg rounded-lg w-full max-w-6xl">
          <ul className="flex border-b">
            {tabList.map((tab: TabType) => (
              <li key={tab.id} className="flex-1 -mb-px mr-1">
                <button
                  className={`w-full text-center inline-block py-2 px-4 font-semibold ${
                    activeTab === tab.id
                      ? "border-l border-t border-r rounded-t text-white bg-slate-800"
                      : "text-blue-500 hover:text-blue-800"
                  }`}
                  onClick={() => handleTabClick(tab.id)}
                >
                  {tab.name}
                </button>
              </li>
            ))}
          </ul>
          <div className="content p-12">
            {activeTab === 1 && (
              <div className="tab-content p-4">
                <h2 className="text-3xl font-bold mb-4">
                  Client Side Renderingとは
                </h2>
                <p>
                  ブラウザ上でJavaScriptを実行してHTMLを生成してからコンテンツを表示させる方法。
                  <br />
                  ページの初期ロードでは、コンテンツは何も表示されず、JSを読み込んだ(Hydration)後に表示される。
                </p>
                <Image
                  className="mt-4 mx-auto"
                  src="/images/main-feature/no-pre-rendering.png"
                  width={700}
                  height={700}
                  alt="Picture of the author"
                />
                ※サーバ側でHTMLを生成せずに、空のHTMLを返しブラウザ側でHTMLを組み立て表示する
                <div className="my-8">
                  <h4 className="text-xl font-bold mb-2">メリット</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>ページ遷移が非常に高速</li>
                    <li>
                      最低限必要なものはHTMLファイル、JSファイルのみであり構成がシンプル。この2つをホスティング先に置いておけばとりあえずページは表示される
                    </li>
                  </ul>
                  <h4 className="text-xl font-bold mt-6 mb-2">デメリット</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>
                      JSファイルが実行、マウントされるまでコンテンツが何も表示されない
                    </li>
                    <li>
                      JSファイルのサイズが大きくなると、ファイルダウンロードの時間が無視できないレベルになる
                    </li>
                    <li>
                      SEOで不利（クローラーがJavaScriptを実行できるようになったとのことなので、この問題は解決されつつある。ただ、即時的に評価されるのではなく、評価までにラグがあるらしい）
                    </li>
                    <li>
                      TwitterやFacebookのクローラーはJavaScriptを実行しないため、プレーンなSPAアプリだと動的なOGP対応ができない
                    </li>
                  </ul>
                </div>
              </div>
            )}
            {activeTab === 2 && (
              <div className="tab-content">
                <div className="tab-content p-4">
                  <h2 className="text-3xl font-bold mb-4">
                    Server Side Renderingとは
                  </h2>
                  <p>
                    <span className="text-red-500">
                      サーバーサイドでJavaScriptを実行して
                    </span>
                    事前にHTMLを生成してから(プリレンダリング)、読み込みんで表示させる方法。
                    <br />
                    <span className="text-blue-500">
                      サーバーへのリクエストがある度に、
                    </span>
                    サーバー側で処理を行いHTMLが生成する(プリレンダリングする)。
                    <br />
                    初期ロードからコンテンツが表示され、その後Hydrationによって、操作可能な状態になる。(例、
                    画面遷移可能になったり、ボタンが押せたりなど) <br />
                    Nuxt.jsやNext.jsにこの機能を簡単に使える。
                  </p>
                  <Image
                    className="mt-4 mx-auto"
                    src="/images/main-feature/pre-rendering.png"
                    width={700}
                    height={700}
                    alt="Picture of the author"
                  />
                  <Image
                    className="mt-4 mx-auto"
                    src="/images/main-feature/server-side-rendering.png"
                    width={700}
                    height={700}
                    alt="Picture of the author"
                  />
                  <div className="my-8">
                    <h4 className="text-xl font-bold mb-2">メリット</h4>
                    <ul className="list-disc list-inside space-y-2">
                      <li>
                        レンダリング後のファイルを返却するためコンテンツ表示までの時間を短縮できる
                      </li>
                      <li>SEOで不利を背負わない</li>
                      <li>動的なOGP対応が可能</li>
                    </ul>
                    <h4 className="text-xl font-bold mt-6 mb-2">デメリット</h4>
                    <ul className="list-disc list-inside space-y-2">
                      <li>キャッシュ設定が複雑になりがち</li>
                      <li>SSRするためのWebサーバーが必要になる</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
            {activeTab === 3 && (
              <div className="tab-content">
                <div className="tab-content p-4">
                  <h2 className="text-3xl font-bold mb-4">
                    Server Side Generatorとは
                  </h2>
                  <p>
                    <span className="text-red-500">
                      ビルド時にサーバーサイドでJavaScriptを実行して
                    </span>
                    事前にHTMLを生成してから(プリレンダリング)、読み込みんで表示させる方法。
                    <br />
                    <span className="text-blue-500">ビルド時に、</span>
                    サーバー側で処理を行いHTMLが生成する(プリレンダリングする)。
                    <br />
                    SSRと違い、リクエストがある度CDNよりコンテンツが配信される{" "}
                    <br />
                    Nuxt.jsやNext.jsにこの機能を簡単に使える。
                  </p>
                  <Image
                    className="mt-4 mx-auto"
                    src="/images/main-feature/static-generation.png"
                    width={700}
                    height={700}
                    alt="Picture of the author"
                  />
                  <div className="my-8">
                    <h4 className="text-xl font-bold mb-2">メリット</h4>
                    <ul className="list-disc list-inside space-y-2">
                      <li>ページ表示までに必要な時間はCSR、SSRより高速</li>
                      <li>SEOで不利を背負わない</li>
                      <li>動的なOGP対応が可能</li>
                    </ul>
                    <h4 className="text-xl font-bold mt-6 mb-2">デメリット</h4>
                    <ul className="list-disc list-inside space-y-2">
                      <li>
                        外部からデータを取得している場合、外部データが更新されたタイミングで再ビルドを行わないと変更は反映されない
                      </li>
                      <li>
                        上記の仕様から動的なデータが頻繁に変更される場合は採用しにくい。その場合はSSRのほうがマッチする
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="text-2xl font-bold m-4 mt-8">参考サイト</div>
      <ul className="list-disc list-inside space-y-2 m-4">
        <li>
          <a
            href="https://zenn.dev/takuyakikuchi/articles/2f7e54bdafce52#csr"
            className="text-blue-500 hover:text-blue-700 underline"
          >
            CSR、SSR、SSGの違い
          </a>
        </li>
        <li>
          <a
            href="https://qiita.com/akashixi/items/84cd79e090a283bb8c67"
            className="text-blue-500 hover:text-blue-700 underline"
          >
            SSR、SSG、Client Side Renderingの違いをまとめた
          </a>
        </li>
      </ul>
    </div>
  );
};

export default RenderingTab;
