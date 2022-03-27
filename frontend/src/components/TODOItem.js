const TODOItem = ({todo}) => {
  return (
    <tr>
      <td>{todo.todo_text}</td>
      <td>{todo.author.username}</td>
      <td>{todo.project.name}</td>
      <td>{todo.created_at}</td>
      <td>{todo.updated_at}</td>
    </tr>
  )
};

export default TODOItem;