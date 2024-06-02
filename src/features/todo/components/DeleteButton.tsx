"use client";

import { deleteTodo } from "../actions";

function DeleteButton(props: { id: number }) {
  return (
    <button
      className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
      onClick={() => deleteTodo(props.id)}
    >
      削除
    </button>
  );
}

export default DeleteButton;
