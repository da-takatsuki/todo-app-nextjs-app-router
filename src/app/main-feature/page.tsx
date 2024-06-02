import Link from "next/link";

const MainFeature = () => {
  return (
    <div className="py-12 h-[92vh] bg-slate-200 flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
        <section id="rendering" className="text-center">
          <Link
            href="/main-feature/rendering"
            className="w-full block rounded-md bg-white p-6 shadow-lg transform transition-transform hover:scale-105 hover:bg-blue-200"
          >
            <h2 className="text-4xl font-semibold text-slate-800 mb-4">
              Rendering
            </h2>
            <p className="text-gray-600">CSR/SSR/SSGの違いを理解しましょう。</p>
            <br />
          </Link>
        </section>
        <section id="routing" className="text-center">
          <Link
            href="/main-feature/routing"
            className="w-full block rounded-md bg-white p-6 shadow-lg transform transition-transform hover:scale-105 hover:bg-blue-200"
          >
            <h2 className="text-4xl font-semibold text-slate-800 mb-4">
              Routing
            </h2>
            <p className="text-gray-600">
              ファイルベースルーティングについてPageRouterとAppRouterを学びましょう。
            </p>
          </Link>
        </section>
        <section id="api" className="text-center">
          <Link
            href="/main-feature/api"
            className="w-full block rounded-md bg-white p-6 shadow-lg transform transition-transform hover:scale-105 hover:bg-blue-200"
          >
            <h2 className="text-4xl font-semibold text-slate-800 mb-4">API</h2>
            <p className="text-gray-600">
              NextJSでのAPIの開発方法をAPIRouteとServerActionsで学びましょう。
            </p>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default MainFeature;
