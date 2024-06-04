"use client";
import Link from "next/link";
import { useState } from "react";

const menuList = [
  {
    name: "概要",
    url: "/about",
  },
  {
    name: "主要機能",
    url: "/main-feature",
  },
  {
    name: "ユースケース",
    url: "/usecase",
  },
  {
    name: "Todoアプリ",
    url: "/todo",
  },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div className="relative">
      <div className="bg-gray-800 h-[8vh] px-8 flex justify-between items-center">
        <div className="text-white text-xl font-bold">
          <Link href="/" className="text-white">
            NextJS App
          </Link>
        </div>
        {/* 画面幅が1000pxより大きい場合にメニューを表示 */}
        <div className="hidden lg:flex">
          {menuList.map((menu) => (
            <Link
              key={menu.url}
              href={menu.url}
              className="mr-12 font-bold text-white hover:underline"
            >
              {menu.name}
            </Link>
          ))}
        </div>
        <div className="flex lg:hidden">
          {/* ハンバーガーメニュー */}
          <button onClick={toggleMenu} className="text-white">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex"></div>
      </div>
      {/* ハンバーガーメニューがクリックされたときに表示されるメニュー領域 */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } lg:hidden absolute top-[8vh] right-0 bg-gray-800 w-48 pt-4 pb-2 px-4 transition-all z-10`}
      >
        {menuList.map((menu) => (
          <Link
            key={menu.url}
            href={menu.url}
            className="block py-2 text-white font-bold hover:underline"
          >
            {menu.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Header;
