"use client";
import Link from "next/link";
import { useState } from "react";
import CsrMarkdown from "./CsrMarkdown";
import SsgMarkdown from "./SsgMarkdown";
import SsrMarkdown from "./SsrMarkdown";

const RenderingSetting = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const toggleAccordion1 = () => {
    setIsOpen1(!isOpen1);
  };

  const toggleAccordion2 = () => {
    setIsOpen2(!isOpen2);
  };

  return (
    <div className="container mx-auto mt-10 px-12">
      <div className="w-full flex justify-center">
        <div className="bg-white shadow-lg rounded-lg w-full max-w-6xl mb-4">
          <button
            onClick={toggleAccordion1}
            className="w-full text-left p-4 font-semibold text-slate-800 bg-white rounded-lg focus:outline-none"
          >
            App Routerの場合
          </button>
          {isOpen1 && (
            <div className="py-4 px-10">
              <h2 className="text-xl font-bold my-4">CSRにする</h2>
              <CsrMarkdown />
              <h2 className="text-xl font-bold my-4">SSRにする</h2>
              <SsrMarkdown />
              <h2 className="text-xl font-bold my-4">SSGにする</h2>
              <SsgMarkdown />
              <h2 className="text-xl font-bold my-4">参考</h2>
              <Link href="https://nextjs.org/docs/app/building-your-application/rendering/server-components">
                詳しくは公式見てね→
              </Link>
            </div>
          )}
        </div>
      </div>

      <div className="w-full flex justify-center">
        <div className="bg-white shadow-lg rounded-lg w-full max-w-6xl">
          <button
            onClick={toggleAccordion2}
            className="w-full text-left p-4 font-semibold text-slate-800 bg-white rounded-lg focus:outline-none"
          >
            Page Routerの場合
          </button>
          {isOpen2 && (
            <div className="py-4 px-10">
              <h2 className="text-xl font-bold my-4">
                CSR:デフォルトで良かったはず
              </h2>
              <h2 className="text-xl font-bold my-4">
                SSR:getServerSidePropsを使用
              </h2>
              <h2 className="text-xl font-bold my-4">
                SSG:getStaticPropsを使用
              </h2>
              <Link href="https://nextjs.org/docs/app/building-your-application/upgrading/app-router-migration#server-side-rendering-getserversideprops">
                詳しくは公式見てね→
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RenderingSetting;
