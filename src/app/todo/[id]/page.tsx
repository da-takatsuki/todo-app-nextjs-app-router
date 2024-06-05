function TodoDetail({ params }: { params: { id: number } }) {
  return <>{params.id}番のタスクですねー</>;
}

export default TodoDetail;
