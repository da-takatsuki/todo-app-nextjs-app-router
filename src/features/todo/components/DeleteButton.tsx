"use client";

import { useFormStatus } from "react-dom";
import { deleteTodo } from "../actions";

const Button = () => {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
    >
      {pending ? "削除中..." : "削除"}
    </button>
  );
};

function DeleteButton(props: { id: number }) {
  return (
    <form action={() => deleteTodo(props.id)}>
      <Button />
    </form>
  );
}

export default DeleteButton;
