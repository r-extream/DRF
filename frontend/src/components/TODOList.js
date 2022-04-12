import TODOItem from "./TODOItem";

const TODOList = ({todos}) => {
  return (
    <table>
      <thead>
      <tr>
        <th>Text</th>
        <th>Author</th>
        <th>Project</th>
        <th>Created at</th>
        <th>Updated at</th>
        <th>Is active</th>
      </tr>
      </thead>
      <tbody>
      {todos.map(todo =>
        <TODOItem todo={todo} key={todo.todo_text}/>)
      }
      </tbody>
    </table>
  )
};

export default TODOList