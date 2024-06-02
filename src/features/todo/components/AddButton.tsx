"use client";

import Link from "next/link";

function AddButton() {
  function onclick() {
    // /addに遷移
  }
  return (
    <button
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      onClick={() => onclick()}
    >
      <Link href="/todo/create" className="text-white">
        タスク追加
      </Link>
    </button>
  );
}

export default AddButton;
