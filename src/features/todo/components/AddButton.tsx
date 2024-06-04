"use client";

import Link from "next/link";

function AddButton() {
  return (
    <Link href="/todo/create" className="text-white">
      <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        タスク追加
      </button>
    </Link>
  );
}

export default AddButton;
