const CustomUserItem = ({user}) => {
  return (
    <tr>
      <td>{user.username}</td>
      <td>{user.first_name}</td>
      <td>{user.last_name}</td>
      <td>{user.email}</td>
    </tr>
  )
};

export default CustomUserItem;